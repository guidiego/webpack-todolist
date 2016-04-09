import sum from '../src/main.js';

describe('Testing', function () {

  it('A simples test to test archicheture', function () {
    let result = sum(2, 3);

    expect(result).to.be.eql(5);
  });
});
