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
    expect(wrap('Happy Monday', 7).indexOf('/n')).to.equal(5)
  })
})
