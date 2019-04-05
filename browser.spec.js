/**
 * @jest-environment jsdom
 */
const FormData = require('.');

describe(__filename, () => {
  it('exposes the browser implementation', () => {
    expect(FormData).toEqual(window.FormData);
  });
});
