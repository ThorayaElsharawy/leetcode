function isPalindrome(string) {
    let newString = string.replace(/[^0-9a-z]/gi, '').toLowerCase()
    let start = 0;
    let end = newString.length - 1

    while(start < end) {
        if(newString[start] !== newString[end]) {
            return false
        }

        start++
        end--
    }

    return true
}

console.log(isPalindrome("ab@a"));
console.log(isPalindrome("ab_a"));