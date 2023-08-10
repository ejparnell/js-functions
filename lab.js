const maxOfThree = function(num1, num2, num3) {
    // if num1 is greater or equal to num2
    // AND if num1 is greater than or equal to num3
    if (num1 >= num2 && num1 >= num3) return num1
    else if (num2 >= num1 && num2 >= num3) return num2
    else return num3
}
console.log(maxOfThree(6,7,8))

// ...rest - give us an array of all of the arguments passed to a function
// const numArgs = function(...nums) {
//     console.log(...nums)
//     nums.forEach(function(num) {
//         // console.log(num)
//     })
//     return nums.length
// }

const numArgs = function() {
    console.log(arguments)
    return arguments.length
}
console.log(numArgs(1,2,3,4,5,6))

function reverseString(str) {
    // let strArr = str.split('')
     
    // console.log(strArr)
    // return strArr.reverse().join('')
    // THIS ONLY WORKS BECAUSE OF WHAT EACH METHOD RETURNS
    // .split('') - returns an array
    // .reverse() - return an array that is reversed
    // .join('') - returns a string
    return str.split('').reverse().join('')
}
console.log(reverseString('rockstar'))

const longestStringInArray = function(strArr) {
    let longest = 0
    strArr.forEach(function(str) {
        // if the current string length is larger than what we currently have replace it
        if (str.length > longest) longest = str.length
    })
    return longest
}
console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']))

function stringsLongerThan(strArr, num) {
    // .filter - return an NEW array with whatever we are filtering on
    return strArr.filter(function(str) {
        // returning the string that is longer than the number we are passing in
        return str.length > num
    })
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

// .forEach - general tool
// .filter - specialty tool