// src/site/animate.ts
import $ from "jquery";
$(() => {
  const $gear_icon = $(".nav-logo");
  if ($gear_icon.length === 0) {
    console.warn("animate.ts: gear icon (.nav-logo) not found in DOM");
    return;
  }
  let current_rotation = 0;
  let is_hovering = false;
  let animation_frame = null;
  let last_timestamp = 0;
  let last_stick_point_index = -1;
  let is_returning = false;
  let audio_ready = false;
  let tick_interval = null;
  const FORWARD_ROTATION_SPEED = 360 / 3000;
  const RETURN_ROTATION_SPEED = 360 / 800;
  const STICK_POINTS = [0, 45, 90, 135, 180, 225, 270, 315];
  const STICK_RANGE = 2.5;
  const STICK_SLOWDOWN = 0.1;
  const FORWARD_TICK_INTERVAL = 3000 / 8;
  const RETURN_TICK_INTERVAL = 800 / 8;
  const audio_context = new (window.AudioContext || window.webkitAudioContext);
  console.log("[animate.ts] AudioContext created, initial state:", audio_context.state);
  const ensure_audio_ready = async () => {
    if (!audio_ready && audio_context.state === "suspended") {
      console.log("[animate.ts] Resuming suspended AudioContext...");
      await audio_context.resume();
      console.log("[animate.ts] AudioContext resumed, state:", audio_context.state);
      audio_ready = true;
    }
  };
  const create_noise_buffer = (duration) => {
    const buffer_length = audio_context.sampleRate * duration;
    const buffer = audio_context.createBuffer(1, buffer_length, audio_context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0;i < buffer_length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  };
  const play_forward_tick_sound = () => {
    if (!audio_ready)
      return;
    console.log("[animate.ts] Playing forward tick sound");
    const noise_buffer = create_noise_buffer(0.03);
    const noise_source = audio_context.createBufferSource();
    noise_source.buffer = noise_buffer;
    const filter = audio_context.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 800;
    filter.Q.value = 3;
    const gain_node = audio_context.createGain();
    noise_source.connect(filter);
    filter.connect(gain_node);
    gain_node.connect(audio_context.destination);
    const now = audio_context.currentTime;
    gain_node.gain.setValueAtTime(0.3, now);
    gain_node.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    noise_source.start(now);
    noise_source.stop(now + 0.03);
  };
  const play_return_tick_sound = () => {
    if (!audio_ready)
      return;
    console.log("[animate.ts] Playing return tick sound");
    const noise_buffer = create_noise_buffer(0.025);
    const noise_source = audio_context.createBufferSource();
    noise_source.buffer = noise_buffer;
    const filter = audio_context.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2400;
    filter.Q.value = 5;
    const gain_node = audio_context.createGain();
    noise_source.connect(filter);
    filter.connect(gain_node);
    gain_node.connect(audio_context.destination);
    const now = audio_context.currentTime;
    gain_node.gain.setValueAtTime(0.35, now);
    gain_node.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
    noise_source.start(now);
    noise_source.stop(now + 0.025);
  };
  const get_nearest_stick_point_index = (angle) => {
    const normalized = angle % 360;
    for (let index = 0;index < STICK_POINTS.length; index++) {
      const stick_point = STICK_POINTS[index];
      const distance = Math.abs(normalized - stick_point);
      const wrap_distance = Math.min(distance, 360 - distance);
      if (wrap_distance <= STICK_RANGE) {
        return index;
      }
    }
    return -1;
  };
  const start_tick_loop = (interval_ms, is_return) => {
    stop_tick_loop();
    console.log(`[animate.ts] Starting ${is_return ? "return" : "forward"} tick loop with ${interval_ms}ms interval`);
    if (is_return) {
      play_return_tick_sound();
    } else {
      play_forward_tick_sound();
    }
    tick_interval = window.setInterval(() => {
      if (is_return) {
        play_return_tick_sound();
      } else {
        play_forward_tick_sound();
      }
    }, interval_ms);
  };
  const stop_tick_loop = () => {
    if (tick_interval !== null) {
      console.log("[animate.ts] Stopping tick loop");
      clearInterval(tick_interval);
      tick_interval = null;
    }
  };
  const animate_forward = (timestamp) => {
    if (last_timestamp === 0) {
      last_timestamp = timestamp;
    }
    const delta_time = timestamp - last_timestamp;
    last_timestamp = timestamp;
    let rotation_increment = FORWARD_ROTATION_SPEED * delta_time;
    const stick_index = get_nearest_stick_point_index(current_rotation);
    if (stick_index !== -1) {
      rotation_increment *= STICK_SLOWDOWN;
    }
    current_rotation += rotation_increment;
    if (current_rotation >= 360) {
      current_rotation -= 360;
    }
    $gear_icon.css("transform", `rotate(${current_rotation}deg)`);
    if (is_hovering) {
      animation_frame = requestAnimationFrame(animate_forward);
    }
  };
  const animate_return = (timestamp) => {
    if (last_timestamp === 0) {
      last_timestamp = timestamp;
    }
    const delta_time = timestamp - last_timestamp;
    last_timestamp = timestamp;
    let rotation_decrement = RETURN_ROTATION_SPEED * delta_time;
    const stick_index = get_nearest_stick_point_index(current_rotation);
    if (stick_index !== -1) {
      rotation_decrement *= STICK_SLOWDOWN;
    }
    current_rotation -= rotation_decrement;
    if (current_rotation <= 0) {
      current_rotation = 0;
      $gear_icon.css("transform", `rotate(0deg)`);
      animation_frame = null;
      last_stick_point_index = -1;
      stop_tick_loop();
      return;
    }
    $gear_icon.css("transform", `rotate(${current_rotation}deg)`);
    animation_frame = requestAnimationFrame(animate_return);
  };
  $gear_icon.on("mouseenter", async () => {
    await ensure_audio_ready();
    is_hovering = true;
    is_returning = false;
    if (animation_frame !== null) {
      cancelAnimationFrame(animation_frame);
      animation_frame = null;
    }
    last_timestamp = 0;
    last_stick_point_index = -1;
    start_tick_loop(FORWARD_TICK_INTERVAL, false);
    animation_frame = requestAnimationFrame(animate_forward);
  });
  $gear_icon.on("mouseleave", () => {
    is_hovering = false;
    is_returning = true;
    if (animation_frame !== null) {
      cancelAnimationFrame(animation_frame);
      animation_frame = null;
    }
    last_timestamp = 0;
    last_stick_point_index = -1;
    if (current_rotation > 0) {
      start_tick_loop(RETURN_TICK_INTERVAL, true);
      animation_frame = requestAnimationFrame(animate_return);
    } else {
      stop_tick_loop();
    }
  });
});
