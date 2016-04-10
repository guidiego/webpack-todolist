import sum from '../src/main.js';

describe('Testing', function () {

  it('A simples test to test archicheture', function () {
    let result = sum(2, 3);

    expect(result).to.be.eql(5);
  });

  it('A simples test to test archicheture 1 ', function () {
    let result = sum(0, 3);

    expect(result).to.be.eql(3);
  });

  it('A simples test to test archicheture 2', function () {
    let result = sum(2, 1);

    expect(result).to.be.eql(2);
  });
});
