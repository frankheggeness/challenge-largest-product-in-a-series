const chai = require('chai');
const expect = chai.expect;
const LargestProduct = require('../largestProduct.js');

describe('Find The Largest Product of 5 consecutive digits from the given number', function() {
  const number =
    '731671765313306249192251196744265747423553491949349698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805511125406987471585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377665727333001053367881220235421809751254540594752243525849077116705560136048395864467063244157221553975369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535100474821663704844031998900088952434506585412275886668811642717147992444292823086346567481391912316282458617866458359124566529476545682848912883142607690042421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
  const largestProduct = new LargestProduct(number);

  it('should get the largest product position', function() {
    expect(largestProduct.getLargestProductPosition()).to.equal(364);
  });

  it('should get the largest product', function() {
    expect(largestProduct.getLargestProduct()).to.equal(40824);
  });
});
