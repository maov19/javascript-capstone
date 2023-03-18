/**
 * @jest-environment jsdom
 */

import titleCounter from './title-counter.js'

describe('titleCounter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('updates counter with number of card-containers', () => {
    const mockCount = 3;
    const mockCounter = {
      innerText: '',
    };
    const mockQuerySelectorAll = jest.fn(() => [      { title: 'Title 1' },      { title: 'Title 2' },      { title: 'Title 3' },    ]);
    document.getElementById = jest.fn(() => mockCounter);
    document.querySelectorAll = mockQuerySelectorAll;

    const result = titleCounter(mockCount);

    expect(mockQuerySelectorAll).toHaveBeenCalledTimes(1);
    expect(mockQuerySelectorAll).toHaveBeenCalledWith('.card-container');
    expect(mockCounter.innerText).toBe(mockCount);
    expect(result).toBe(mockCount);
  });

  test('updates counter with "No new titles" when there are no card-containers', () => {
    const mockCount = 0;
    const mockCounter = {
      innerText: '',
    };
    const mockQuerySelectorAll = jest.fn(() => []);
    document.getElementById = jest.fn(() => mockCounter);
    document.querySelectorAll = mockQuerySelectorAll;

    const result = titleCounter(mockCount);

    expect(mockQuerySelectorAll).toHaveBeenCalledTimes(1);
    expect(mockQuerySelectorAll).toHaveBeenCalledWith('.card-container');
    expect(mockCounter.innerText).toBe('No new titles');
    expect(result).toBe('No new titles');
  });

  test('updates counter with ">999" when there are more than 999 card-containers', () => {
    const mockCount = 1000;
    const mockCounter = {
      innerText: '',
    };
    const mockQuerySelectorAll = jest.fn(() => new Array(mockCount));
    document.getElementById = jest.fn(() => mockCounter);
    document.querySelectorAll = mockQuerySelectorAll;

    const result = titleCounter(mockCount);

    expect(mockQuerySelectorAll).toHaveBeenCalledTimes(1);
    expect(mockQuerySelectorAll).toHaveBeenCalledWith('.card-container');
    expect(mockCounter.innerText).toBe('>999');
    expect(result).toBe('>999');
  });
});
