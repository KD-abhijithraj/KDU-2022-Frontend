module.exports = {
    isPalindrome: function isPalindrome(str) {
        const len = str.length;

        for (let i = 0; i < len / 2; i++) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;
    },
    isPrime: function isPrime(num)
    {
        if(num ==0 || num==1)
            return false;
        for (let i = 2; i < Math.sqrt(num); i++) 
        {
            if (num % i == 0) 
                return false;
        }
        return true;
    }
}