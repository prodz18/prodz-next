import assert from 'node:assert/strict';
import test from 'node:test';
import { selectWork, safeWebURL, projectTags } from '../utils/portfolio.ts';

const project = (id, title = id, extra = {}) => ({ _id: id, title, visible: true, ...extra });
const projects = [project('tone', 'ToneHunt'), project('goya', 'GoyaPR'), project('guilty', 'Guilty v3'), ...Array.from({ length: 8 }, (_, i) => project(`other-${i}`))];

test('legacy content shows ToneHunt and caps the grid at six unique projects', () => {
	const work = selectWork({}, projects);
	assert.equal(work.featured._id, 'tone');
	assert.equal(work.selected.length, 6);
	assert.deepEqual(work.selected.slice(0, 2).map(p => p._id), ['goya', 'guilty']);
	assert.equal(new Set([work.featured, ...work.selected].map(p => p._id)).size, 7);
});
test('explicit curation preserves order and omits hidden, deleted and duplicate entries', () => {
	const work = selectWork({ featuredProject: projects[0], selectedProjects: [projects[2], null, project('hidden', 'Hidden', { visible: false }), projects[0], projects[2], projects[1]] }, projects);
	assert.deepEqual(work.selected.map(p => p._id), ['guilty', 'goya']);
});
test('an explicitly empty grid stays empty', () => {
	assert.deepEqual(selectWork({ selectedProjects: [] }, projects).selected, []);
});
test('hiding an explicitly featured project does not substitute another', () => {
	assert.equal(selectWork({ featuredProject: project('tone', 'ToneHunt', { visible: false }) }, projects).featured, undefined);
});
test('an empty portfolio is supported', () => {
	assert.deepEqual(selectWork({}, []), { featured: undefined, selected: [] });
});
test('external links allow web URLs and reject unsafe protocols or malformed URLs', () => {
	assert.equal(safeWebURL('https://example.com'), 'https://example.com/');
	for (const url of ['javascript:alert(1)', 'data:text/html,test', 'not-a-url', undefined]) assert.equal(safeWebURL(url), undefined);
});
test('tags use curated labels and fall back to the legacy project type', () => {
	assert.deepEqual(projectTags(project('a', 'A', { tags: ['Music'] })), ['Music']);
	assert.deepEqual(projectTags(project('a', 'A', { type: 'mobile' })), ['Mobile']);
});
