const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  })

  it('Returns the string without line breaks if column length is greater than string length', () => {
    expect(wrap('Happy Monday', 20)).to.equal('Happy Monday');
  })

  it('Breaks the string before the column length is exceeded', () => {
    console.log('test test test Happy Monday, 7',(wrap('Happy Monday', 7)))
    expect(wrap('Happy Monday', 7).indexOf('/n')).to.equal(5)
  })

  it('Returns a string where each line length is less the column length', () => {
    const brokenString = wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20);
    const brokenStringArr = brokenString.split('/n');
    expect(brokenStringArr.every((line) => line.length <= 20)).to.equal(true);
  })

})
