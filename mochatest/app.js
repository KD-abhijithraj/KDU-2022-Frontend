module.exports ={
    sayHello: function(){
        return 'hello';
    },
    getGcd: function(num1,num2){
        return gcd(num1,num2);
    },
    calculateGrade: function(mark1,mark2,mark3,mark4){
        return (mark1+mark2+mark3+mark4)/4;
    },
    calculateFactorial: function(num){
        return factorial(num)
    },
    twoSum: function(num,target){
        for(let i=0,j=num.length-1;i<j;){
            if(num[i]+num[j]===target)
                return true;
            else if(num[i]+num[j]>target)
                j--;
            else
                i++;       
        }
        return false;
    }

}
function gcd(num1,num2){
    if(num1===0)
        return num2;
    return gcd(num2 % num1, num1); 
}
function factorial(num1){
    if(num1<=1)
        return 1;
    else
        return num1*factorial(num1-1);    
}
