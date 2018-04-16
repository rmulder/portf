const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const testArray = [2, 1, 1, 1, 5, 1, 1, 1, 6];
const testDeciArray = [2.1, 1.223, 1.235, 1.234, 5.235, 1.234, 1.685, 1.789, 6.38];

// pending
xdescribe('arrayCheck', () =>
{
  it('it should return an integer', () =>
  {
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});

// pending 
xdescribe('Limits of Array', () =>
{
  it('testing random array values in array', () =>
  {
    expect(calcComput(testArray), 'should equal 49').to.deep.equal(49);
  });

  it('should return an integer w/ decimal output', () =>
  {
    expect(calcComput(testDeciArray)).to.not.deep.equal(49);
  });
});
