function isValid(s) {
    const map = new Map()
    const stack = [];

    map.set('(', ')')
    map.set('[', ']')
    map.set('{', '}')

    for(let i = 0 ; i < s.length; i++) {
        if(map.has(s[i])) {
            stack.push(s[i])
        } else if(stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop()
        } else return false
    }

    return stack.length
}

console.log(isValid("()"));
// console.log(isValid("()[]{}"));