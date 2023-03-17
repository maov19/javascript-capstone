/**
 * @jest-environment jsdom
 */

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

describe('Counting comments test', () => {
  test('counts with 3 items displayed', () => {
    document.body.innerHTML = "<div class='card-container'>"
    + "<div class='card-container'>"
    + "<div class='card-container'>";
    expect(titleCounter()).toBe(3);
  });

  test('counts with 0 items displayed', () => {
    document.body.innerHTML = "<div class='card-'>"
    + "<div class='card-'>"
    + "<div class='card-'>";
    expect(titleCounter()).toBe('No new titles');
  });

  test('counts with 1000 items displayed', () => {
    document.body.innerHTML = "<div class='card-container'>".repeat(1000);
    expect(titleCounter()).toBe('>999');
  });
});
