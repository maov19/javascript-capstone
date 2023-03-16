/**
 * @jest-environment jsdom
 */
import Anime from "./Anime.js";
const testItem = new Anime;

const counter = document.getElementById('counter');

const titleCounter = (count) => {
  count = document.querySelectorAll('.card-container').length;
  if (count === 0) {
    count = 'No new titles';
  }
  if (count > 999) {
    count = '>999';
  }
return count;
};

global.fetch = jest.fn(() => {
  const testData = [
    {
      item_id: 'movie1',
      ranking: '2',
    },
    {
      item_id: 'movie2',
      ranking: '3',
    },
    {
      item_id: 'movie3',
      ranking: '4',
    },
  ];
  return Promise.resolve({
    json: () => Promise.resolve(testData),
  });
});

beforeEach(() => {
  fetch.mockClear();
});

describe('Counting comments test', () => {
  test ('counts with 3 items displayed', () => {
    document.body.innerHTML = "<div class='card-container'>" + 
    "<div class='card-container'>" + 
    "<div class='card-container'>";
    expect(titleCounter()).toBe(3);
  } )
  
  test('counts with 0 items displayed', () => {
    document.body.innerHTML = "<div class='card-'>" + 
    "<div class='card-'>" + 
    "<div class='card-'>";;
    expect(titleCounter()).toBe('No new titles');
  })
  test('counts with 1000 items displayed', () => {
    document.body.innerHTML = "<div class='card-container'>".repeat(1000);
    expect(titleCounter()).toBe('>999');
  })
  })
