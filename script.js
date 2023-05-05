function number(question) {
  const number = parseFloat(prompt(question));
  if (isNaN(number)) {
    alert("You did not type a number, try again");
    } else {
    return number;
  }
}

function add() {
  const x = number('Enter the first number: ')
  const y = number('Enter the second number: ')
  const result = x + y;
  if (isNaN(result)) {
    alert("There's no result since you did not type a number")
  } else {
    alert( "The result is: " + result);
  }
}

function subtract() {
  const x = number('Enter the first number: ')
  const y = number('Enter the second number: ')
  const result = x - y;
  if (isNaN(result)) {
    alert("There's no result since you did not type a number")
  } else {
    alert( "The result is: " + result);
  }
}

function multiply() {
  const x = number('Enter the first number: ')
  const y = number('Enter the second number: ')
  const result = x * y;
  if (isNaN(result)) {
    alert("There's no result since you did not type a number")
  } else {
    alert( "The result is: " + result);
  }
}

function divide() {
  const x = number('Enter the first number: ')
  const y = number('Enter the second number: ')
  const result = x / y;
  if (isNaN(result)) {
    alert("There's no result since you did not type a number")
  } else {
    alert( "The result is: " + result);
  }
}

function simpleInterest() {
  const principal = number("Enter the initial balance (£):");
  const interestRate = number("Enter the interest rate (%):") / 100;
  const years = number("Enter the investment duration (years):");
  const interest = principal * interestRate * years;
  if (isNaN(interest)) {
    alert("There's no result since you did not type a number")
  } else {
    alert(`After ${years} years, the total simple interest on an initial balance of ${principal} with an interest rate of ${interestRate * 100}% will be ${interest.toFixed(2)}.`);
  }
}

function compoundInterest() {
  const principal = number("Enter the initial balance (£):");
  const interestRate = number("Enter the interest rate (%):") / 100;
  const years = number("Enter the investment duration (years):");
  const interest = principal * ((1 + interestRate) ** years);
  if (isNaN(interest)) {
    alert("There's no result since you did not type a number")
  } else {
  alert(`After ${years} years, the total compound interest on an initial balance of ${principal} with an interest rate of ${interestRate * 100}% will be ${interest.toFixed(2)}.`);
  }
}
