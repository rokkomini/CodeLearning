//Turn numbers to romans

function solution(romanSplit) {
  const romanNum = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let sum = 0;

  for (let i = 0; i < romanSplit.length; i++) {
    if (romanSplit[i] === "I" && romanSplit[i + 1] === "V") {
      sum += 4;
      i++;
    } else if (romanSplit[i] === "I" && romanSplit[i + 1] === "X") {
      sum += 9;
      i++;
    } else if (romanSplit[i] === "X" && romanSplit[i + 1] === "L") {
      sum += 40;
      i++;
    } else if (romanSplit[i] === "X" && romanSplit[i + 1] === "C") {
      sum += 90;
      i++;
    } else if (romanSplit[i] === "C" && romanSplit[i + 1] === "D") {
      sum += 400;
      i++;
    } else if (romanSplit[i] === "C" && romanSplit[i + 1] === "M") {
      sum += 900;
      i++;
    } else {
      sum += romanNum[romanSplit[i]];
    }
  }
  return sum;
}

console.log(solution("MCMLXXXIX"));
