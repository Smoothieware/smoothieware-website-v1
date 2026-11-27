import { describe, expect, test } from 'bun:test';
import { search_pages } from '../lib/search';

const pages = [
    { title: 'Laser cutter guide', url: '/laser-cutter-guide', headings: 'Wiring the laser' },
    { title: 'Wiring', url: '/wiring', headings: 'Endstops' },
    { title: 'Endstops', url: '/endstops', headings: 'Homing' },
];

describe('page search', () => {
    test('title matches come before heading matches', () => {
        expect(search_pages(pages, 'endstops').map((page) => page.url)).toEqual(['/endstops', '/wiring']);
    });
    test('every word must match', () => {
        expect(search_pages(pages, 'laser wiring').map((page) => page.url)).toEqual(['/laser-cutter-guide']);
    });
    test('an empty query finds nothing', () => {
        expect(search_pages(pages, '  ')).toEqual([]);
    });
});
