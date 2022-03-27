const array = [19, 5, 42, 2, 77];

/* function sumTwoSmallestNumbers(numbers) {  
    const sortedArray = numbers.sort(function (a, b) {return a - b});
    const firstTwoNumbers = sortedArray.slice(0,2)
    const firstNumber = firstTwoNumbers[0]
    const secondNumber = firstTwoNumbers[1]
    return firstNumber + secondNumber
  } */

  function sumTwoSmallestNumbers(numbers) {  
    const sortedArray = numbers.sort(function (a, b) {return a - b});
    const firstTwoNumbers = sortedArray.slice(0,2)
    return firstTwoNumbers[0] + firstTwoNumbers[1]
  }

  console.log(sumTwoSmallestNumbers(array))
  