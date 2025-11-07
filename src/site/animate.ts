/**
 * animate.ts
 *
 * Provides interactive animations for page elements
 * Implements rotary phone-style gear icon rotation with "sticky" points:
 * - Rotates continuously on hover with slight pauses at 45-degree marks
 * - Returns to 0° on unhover with same sticky behavior
 * - Uses requestAnimationFrame for precise control
 */

// Import jQuery as a module
import $ from 'jquery';

// Wait for DOM to be fully loaded before attaching event handlers
$(() => {

    // Select the gear/logo icon in the navigation bar
    const $gear_icon = $('.nav-logo');

    // Guard against missing element
    if ($gear_icon.length === 0) {
        console.warn('animate.ts: gear icon (.nav-logo) not found in DOM');
        return;
    }

    // Animation state
    let current_rotation = 0;
    let is_hovering     = false;
    let animation_frame: number | null = null;
    let last_timestamp  = 0;
    let last_stick_point_index = -1; // Track last stick point to avoid duplicate sounds
    let is_returning    = false; // Track if we're in return animation mode
    let audio_ready     = false; // Track if audio context is ready
    let tick_interval:   number | null = null; // Interval for continuous tick sound generation

    // Animation constants (realistic rotary phone behavior)
    const FORWARD_ROTATION_SPEED = 360 / 3000; // 360 degrees in 3000ms (3 seconds) - slow, deliberate dialing
    const RETURN_ROTATION_SPEED  = 360 / 800;  // 360 degrees in 800ms (0.8 seconds) - fast spring return
    const STICK_POINTS           = [0, 45, 90, 135, 180, 225, 270, 315]; // Every 1/8th rotation
    const STICK_RANGE            = 2.5; // Degrees within which to apply stick effect (wider for faster return)
    const STICK_SLOWDOWN         = 0.1; // Speed multiplier during stick (10% of normal - steep slowdown)

    // Tick sound timing (based on 8 ticks per full rotation)
    const FORWARD_TICK_INTERVAL = 3000 / 8; // 375ms per tick for 3-second rotation
    const RETURN_TICK_INTERVAL  = 800 / 8;  // 100ms per tick for 0.8-second rotation

    // Audio context for generating tick sounds
    const audio_context = new (window.AudioContext || (window as any).webkitAudioContext)();

    console.log('[animate.ts] AudioContext created, initial state:', audio_context.state);

    // Resume audio context once on first interaction (synchronous after first call)
    const ensure_audio_ready = async (): Promise<void> => {

        if (!audio_ready && audio_context.state === 'suspended') {
            console.log('[animate.ts] Resuming suspended AudioContext...');
            await audio_context.resume();
            console.log('[animate.ts] AudioContext resumed, state:', audio_context.state);
            audio_ready = true;
        }
    };

    // Generate white noise buffer for tick sounds
    const create_noise_buffer = (duration: number): AudioBuffer => {

        // Create buffer for white noise
        const buffer_length = audio_context.sampleRate * duration;
        const buffer        = audio_context.createBuffer(1, buffer_length, audio_context.sampleRate);
        const data          = buffer.getChannelData(0);

        // Fill with white noise (random values between -1 and 1)
        for (let i = 0; i < buffer_length; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        return buffer;
    };

    // Generate and play a mechanical tick sound for forward rotation (dialing)
    const play_forward_tick_sound = (): void => {

        // Skip if audio not ready yet
        if (!audio_ready) return;

        console.log('[animate.ts] Playing forward tick sound');

        // Create noise buffer source
        const noise_buffer = create_noise_buffer(0.03); // 30ms of noise
        const noise_source = audio_context.createBufferSource();
        noise_source.buffer = noise_buffer;

        // Create bandpass filter for mechanical character (lower frequency = duller)
        const filter = audio_context.createBiquadFilter();
        filter.type      = 'bandpass';
        filter.frequency.value = 800;  // Center frequency 800Hz
        filter.Q.value         = 3;    // Narrower bandpass

        // Create gain node for envelope
        const gain_node = audio_context.createGain();

        // Connect: noise → filter → gain → destination
        noise_source.connect(filter);
        filter.connect(gain_node);
        gain_node.connect(audio_context.destination);

        // Apply sharp attack-decay envelope (mechanical click)
        const now = audio_context.currentTime;
        gain_node.gain.setValueAtTime(0.3, now);                        // Initial volume
        gain_node.gain.exponentialRampToValueAtTime(0.001, now + 0.03); // Fast decay

        // Play the sound
        noise_source.start(now);
        noise_source.stop(now + 0.03);
    };

    // Generate and play a mechanical tick sound for return rotation (spring release)
    const play_return_tick_sound = (): void => {

        // Skip if audio not ready yet
        if (!audio_ready) return;

        console.log('[animate.ts] Playing return tick sound');

        // Create noise buffer source
        const noise_buffer = create_noise_buffer(0.025); // 25ms of noise (shorter/sharper)
        const noise_source = audio_context.createBufferSource();
        noise_source.buffer = noise_buffer;

        // Create bandpass filter for sharper mechanical character (higher frequency)
        const filter = audio_context.createBiquadFilter();
        filter.type      = 'bandpass';
        filter.frequency.value = 2400;  // Center frequency 2400Hz (higher/sharper)
        filter.Q.value         = 5;     // Tighter bandpass for sharper sound

        // Create gain node for envelope
        const gain_node = audio_context.createGain();

        // Connect: noise → filter → gain → destination
        noise_source.connect(filter);
        filter.connect(gain_node);
        gain_node.connect(audio_context.destination);

        // Apply very sharp attack-decay envelope (sharp mechanical tick)
        const now = audio_context.currentTime;
        gain_node.gain.setValueAtTime(0.35, now);                        // Higher initial volume
        gain_node.gain.exponentialRampToValueAtTime(0.001, now + 0.025); // Very fast decay

        // Play the sound
        noise_source.start(now);
        noise_source.stop(now + 0.025);
    };

    // Check if current angle is near a stick point and return the stick point index
    const get_nearest_stick_point_index = (angle: number): number => {

        // Normalize angle to 0-360 range
        const normalized = angle % 360;

        // Check each stick point
        for (let index = 0; index < STICK_POINTS.length; index++) {

            const stick_point = STICK_POINTS[index];

            // Calculate distance to this stick point
            const distance = Math.abs(normalized - stick_point);

            // Also check wrap-around case (e.g., 358° is close to 0°)
            const wrap_distance = Math.min(distance, 360 - distance);

            // Return index if within range
            if (wrap_distance <= STICK_RANGE) {
                return index;
            }
        }

        return -1; // Not near any stick point
    };

    // Start continuous tick sound generation at specified interval
    const start_tick_loop = (interval_ms: number, is_return: boolean): void => {

        // Stop any existing tick loop first
        stop_tick_loop();

        console.log(`[animate.ts] Starting ${is_return ? 'return' : 'forward'} tick loop with ${interval_ms}ms interval`);

        // Play first tick immediately
        if (is_return) {
            play_return_tick_sound();
        } else {
            play_forward_tick_sound();
        }

        // Start interval for continuous ticks
        tick_interval = window.setInterval(() => {

            if (is_return) {
                play_return_tick_sound();
            } else {
                play_forward_tick_sound();
            }

        }, interval_ms);
    };

    // Stop continuous tick sound generation
    const stop_tick_loop = (): void => {

        if (tick_interval !== null) {
            console.log('[animate.ts] Stopping tick loop');
            clearInterval(tick_interval);
            tick_interval = null;
        }
    };

    // Animation loop for continuous forward rotation (hover state)
    const animate_forward = (timestamp: number): void => {

        // Calculate delta time since last frame
        if (last_timestamp === 0) {
            last_timestamp = timestamp;
        }
        const delta_time = timestamp - last_timestamp;
        last_timestamp = timestamp;

        // Calculate rotation increment based on forward speed
        let rotation_increment = FORWARD_ROTATION_SPEED * delta_time;

        // Apply steep stick slowdown if near a stick point
        const stick_index = get_nearest_stick_point_index(current_rotation);
        if (stick_index !== -1) {
            rotation_increment *= STICK_SLOWDOWN;
        }

        // Update current rotation
        current_rotation += rotation_increment;

        // Keep rotation in reasonable range to avoid overflow
        if (current_rotation >= 360) {
            current_rotation -= 360;
        }

        // Apply rotation to element
        $gear_icon.css('transform', `rotate(${current_rotation}deg)`);

        // Continue animation if still hovering
        if (is_hovering) {
            animation_frame = requestAnimationFrame(animate_forward);
        }
    };

    // Animation loop for return to zero (unhover state) - fast spring-like return
    const animate_return = (timestamp: number): void => {

        // Calculate delta time since last frame
        if (last_timestamp === 0) {
            last_timestamp = timestamp;
        }
        const delta_time = timestamp - last_timestamp;
        last_timestamp = timestamp;

        // Calculate rotation decrement based on faster return speed
        let rotation_decrement = RETURN_ROTATION_SPEED * delta_time;

        // Apply steep stick slowdown if near a stick point
        const stick_index = get_nearest_stick_point_index(current_rotation);
        if (stick_index !== -1) {
            rotation_decrement *= STICK_SLOWDOWN;
        }

        // Update current rotation (moving toward 0)
        current_rotation -= rotation_decrement;

        // Stop when we reach 0 (or close enough)
        if (current_rotation <= 0) {
            current_rotation = 0;
            $gear_icon.css('transform', `rotate(0deg)`);
            animation_frame = null;
            last_stick_point_index = -1; // Reset for next animation
            stop_tick_loop(); // Stop tick sounds when animation completes
            return;
        }

        // Apply rotation to element
        $gear_icon.css('transform', `rotate(${current_rotation}deg)`);

        // Continue animation
        animation_frame = requestAnimationFrame(animate_return);
    };

    // Handle mouse entering the gear icon area (start dialing)
    $gear_icon.on('mouseenter', async () => {

        // Ensure audio context is ready (first time only)
        await ensure_audio_ready();

        // Set hover state and clear return flag
        is_hovering  = true;
        is_returning = false;

        // Cancel any ongoing return animation
        if (animation_frame !== null) {
            cancelAnimationFrame(animation_frame);
            animation_frame = null;
        }

        // Reset timestamp and stick tracking for smooth animation start
        last_timestamp = 0;
        last_stick_point_index = -1;

        // Start forward tick sound loop
        start_tick_loop(FORWARD_TICK_INTERVAL, false);

        // Start forward rotation animation
        animation_frame = requestAnimationFrame(animate_forward);
    });

    // Handle mouse leaving the gear icon area (spring return)
    $gear_icon.on('mouseleave', () => {

        // Clear hover state and set return flag
        is_hovering  = false;
        is_returning = true;

        // Cancel any ongoing forward animation
        if (animation_frame !== null) {
            cancelAnimationFrame(animation_frame);
            animation_frame = null;
        }

        // Reset timestamp and stick tracking for smooth animation start
        last_timestamp = 0;
        last_stick_point_index = -1;

        // Start return animation only if not already at 0
        if (current_rotation > 0) {

            // Start return tick sound loop (faster)
            start_tick_loop(RETURN_TICK_INTERVAL, true);

            // Start return animation
            animation_frame = requestAnimationFrame(animate_return);
        } else {

            // Already at 0, just stop any tick sounds
            stop_tick_loop();
        }
    });
});
