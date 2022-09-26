// Adding and removing from the "top"
var stack = []

stack.push("google")
stack.push("instagram")
stack.push("twitter")

console.log(stack.pop())    // twitter - the last one in, first one out (LIFO)
console.log(stack.pop())    // instagram
console.log(stack)          // google

stack.push('amazon')        // google, amazon

console.log(stack.pop())    // amazon


var stack = []
        
stack.unshift('google')     // unshift: adding to the beginning of the array
stack.unshift('facebook')
stack.unshift('apple')      //the last added item is now the top, or the first item.

console.log(stack)          // [ 'apple', 'facebook', 'google' ]

console.log(stack.shift()) // shift: removing from the beginning of the array (would remove 'apple')
