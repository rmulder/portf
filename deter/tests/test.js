const assert = require('assert');
const chai = require('chai');
const should = chai.should();
// const expect = chai.expect;

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('arrayCheck', function()
{
  it('it should return an integer', function()
  {
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});
