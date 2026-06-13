import { expect, test, describe } from 'vitest';
import { toolsData } from '../src/js/state.js';

describe('Tools Data State', () => {
  test('toolsData should contain 20 tools', () => {
    expect(toolsData.length).toBe(20);
  });

  test('toolsData should have specific properties', () => {
    const firstTool = toolsData[0];
    expect(firstTool).toHaveProperty('id');
    expect(firstTool).toHaveProperty('name');
    expect(firstTool).toHaveProperty('icon');
    expect(firstTool).toHaveProperty('category');
    expect(firstTool).toHaveProperty('desc');
  });

  test('each tool should have a unique id', () => {
    const ids = toolsData.map(t => t.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(20);
  });
});
