import { describe, expect, test } from 'bun:test';
import { clamp, fit_view, zoom_at } from '../lib/viewer-math';

describe('viewer geometry', () => {
    test('clamp keeps values in range', () => {
        expect(clamp(5, 0, 3)).toBe(3);
        expect(clamp(-1, 0, 3)).toBe(0);
    });

    test('zoom keeps the point under the pointer still', () => {
        const before = { x: 10, y: 20, scale: 1 };
        const after = zoom_at(before, 3, 110, 220);
        const picture_x = (110 - before.x) / before.scale;
        expect(after.x + picture_x * after.scale).toBeCloseTo(110);
        expect(after.y + 200 * after.scale).toBeCloseTo(220);
    });

    test('a large picture is fitted and centred', () => {
        const view = fit_view({ width: 2000, height: 1000 }, { width: 1048, height: 800 }, false);
        expect(view.scale).toBeCloseTo(0.5);
        expect(view.x).toBeCloseTo(24);
        expect(view.y).toBeCloseTo(150);
    });

    test('small bitmaps stop at twice their size, drawings do not', () => {
        const stage = { width: 1048, height: 1048 };
        expect(fit_view({ width: 100, height: 100 }, stage, false).scale).toBe(2);
        expect(fit_view({ width: 100, height: 100 }, stage, true).scale).toBeCloseTo(10);
    });
});
