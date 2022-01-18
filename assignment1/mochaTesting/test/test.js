const assert = require('chai').assert;
const check = require('../index')

describe('Main', function(){
    describe('isPalindrome', function()
    {
        let checkPalResult = check.isPalindrome("NITIN");
        it('Return Type should be boolean', function()
        {
            assert.typeOf(checkPalResult, 'boolean');
        })
        it('Function should return true for odd length' , function()
        {
            assert.equal(checkPalResult, true);
        })
        it('Empty String should be Palindrome', function()
        {
            checkPalResult = check.isPalindrome("");
            assert.equal(checkPalResult, true);
        })
        it('Function should return false for non-palindrome string', function()
        {
            checkPalResult = check.isPalindrome("Aayush");
            assert.equal(checkPalResult, false);
        })
        it('Function should return true for even length', function()
        {
            checkPalResult = check.isPalindrome("aabAAbaa")
            assert.equal(checkPalResult, true);
        })

    }),
    describe('isPrime', function()
    {
        let result = check.isPrime(7);
        it('Return Type should be boolean', function()
        {
            assert.typeOf(result, 'boolean');
        })
        it('Should return true for 7' , function()
        {
            assert.equal(result, true);
        })
        it('Should return false for 10', function()
        {
            result = check.isPrime(10);
            assert.equal(result, false);
        })
        it('Shoule return false for 1', function()
        {
            result = check.isPrime(1);
            assert.equal(result, false);
        })
        it('Should return false for 0', function()
        {
            result = check.isPrime(0);
            assert.equal(result, false);
        }
        )

    })

})