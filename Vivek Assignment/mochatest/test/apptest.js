const assert =require('chai').assert;
const sayHello=require('../app').sayHello;
const getGcd=require('../app').getGcd;
const calculateGrade=require('../app').calculateGrade;
const calculateFactorial=require('../app').calculateFactorial;
const twoSum=require('../app').twoSum;

describe('App', function(){
    it('app should return hello', function(){
        let result=sayHello();
        assert.equal(result,'hello');
    });

    it('sayHello should return String type', function(){
        let result= sayHello()
        assert.typeOf(result,'string')
    });

    it('Numbers GCD should be more than 5', function(){
        let result =getGcd(14,21);
        assert.isAbove(result,5);
    });

    it('Average should be greater than 45',function(){
        let result= calculateGrade(45,32,65,76);
        assert.isAbove(result,45)
    });

    it('Factorial should be above 54',function(){
        let result=calculateFactorial(10)
        assert.isAbove(result,54)
    });

    it('Pair should present in the array!',function(){
        let num=[1,2,3,4,5,6,7]
        let result=twoSum(num,9)
        assert.isTrue(result)
    })

    
})