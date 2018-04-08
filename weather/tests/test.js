const assert = require('assert');
const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

// requiring calculation function "threeCalc"
const apiTestIn = require("../src/js/app.js").getWeather;

// pending
xdescribe('Input Check', () =>
{
  it('Should return an error!', () =>
  {
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});

xdescribe('Testing HIGHs of Input Zipcode', () =>
{
  it('should return positive number', () =>
  {
    expect(apiTestIn(testArray), 'should equal 49').to.deep.equal(49);
  });
});

xdescribe('Testing LOWs of Input Zipcode', () => 
{
  it('should return positive number', () =>
  {
    expect(apiTestIn(testArray), 'should equal 49').to.deep.equal(49);
  });
});
