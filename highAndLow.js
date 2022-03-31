// In this little assignment you are given 
//a string of space separated numbers, 
//and have to return the highest and lowest 
//number
function highAndLow(numbers){
    let numberArray = numbers.split(' ').sort(function(a, b){return a-b})
    let lowestNr = numberArray[0].toString()
    let highestNr = numberArray[numberArray.length - 1].toString()
    return `${highestNr} ${lowestNr}`
  }

  console.log(highAndLow("1 2 -3 4 5"))