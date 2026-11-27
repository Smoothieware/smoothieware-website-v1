/** Pure geometry of the image viewer, kept apart from the DOM so it can be tested. */

export type View = { x: number; y: number; scale: number };
export type Size = { width: number; height: number };

export function clamp(value: number, low: number, high: number): number {
    return Math.min(high, Math.max(low, value));
}

/** Change the scale while the picture point under (px, py) stays under it. */
export function zoom_at(view: View, scale: number, px: number, py: number): View {
    const ratio = scale / view.scale;
    return { scale, x: px - (px - view.x) * ratio, y: py - (py - view.y) * ratio };
}

/** Centre the picture in the stage. Small bitmaps are enlarged at most twice; drawings fill the stage. */
export function fit_view(picture: Size, stage: Size, vector: boolean, margin = 24): View {
    const room = Math.min(
        Math.max(1, stage.width - margin * 2) / picture.width,
        Math.max(1, stage.height - margin * 2) / picture.height,
    );
    const scale = vector ? room : Math.min(room, 2);
    return {
        scale,
        x: (stage.width - picture.width * scale) / 2,
        y: (stage.height - picture.height * scale) / 2,
    };
}
