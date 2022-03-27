const array = [19, 5, 42, 2, 77];

  function sumTwoSmallestNumbers(numbers) {  
    const sortedArray = numbers.sort(function (a, b) {return a - b});
    const firstTwoNumbers = sortedArray.slice(0,2)
    return firstTwoNumbers[0] + firstTwoNumbers[1]
  }

  console.log(sumTwoSmallestNumbers(array))
  