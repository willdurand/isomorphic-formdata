/**
 * @jest-environment node
 */
const FormDataNode = require('formdata-node');

const FormData = require('.');

describe(__filename, () => {
  it('exposes the formdata-node implementation', () => {
    expect(FormData).toEqual(FormDataNode);
  });
});
