/**
 * @jest-environment jsdom
 */

import Comment from './Comment.js';

describe('Comment', () => {
  const comment = new Comment();
  const itemId = '123';

  it('should return the correct number of comments for an item', async () => {
    const comments = [
      { username: 'Alice', comment: 'This is a comment.' },
      { username: 'Bob', comment: 'This is another comment.' },
    ];

    jest.spyOn(comment, 'getComments').mockResolvedValue(comments);

    const container = document.createElement('div');
    container.id = `commentContainer${itemId}`;
    document.body.appendChild(container);

    await comment.displayComments(itemId);

    expect(container.innerHTML).toContain(`<b>Comments</b> <b>(</b>${comments.length}<b>)</b>`);
    expect(container.innerHTML).toContain(`${comments[0].username}: ${comments[0].comment}`);
    expect(container.innerHTML).toContain(`${comments[1].username}: ${comments[1].comment}`);

    expect(comment.getComments).toHaveBeenCalledWith(itemId);
  });
});
