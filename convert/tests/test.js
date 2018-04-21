const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;


// pending
xdescribe('inputCheck', () =>
{
  it('should return numbers', () =>
  {
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});

// pending
xdescribe('random number enters', () =>
{
  it('should return errors', () =>
  {
    expect(calcComput(testArray), 'should equal 49').to.deep.equal(49);
  });

  it('should return an integer w/ decimal output', () =>
  {
    expect(calcComput(testDeciArray)).to.not.deep.equal(49);
  });
});
