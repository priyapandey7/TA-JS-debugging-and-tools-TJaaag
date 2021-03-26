// #### Get full name

// 1. Write a function that takes two input `firstName` and `lastName` and returns full name. You will get the full name by adding first and last name with an space.
// 2. After writing the function write two tests for above function
// 3. Make the first test fail and look at the output
// 4. After making the first test fail do you see the output of the second test?

function fullName(firstName, lastName) {
  let fullName = firstName + lastName;
  return fullName;
}
let result = fullName("Priya", "Pandey");
let expected = "Priya Pandey";
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
let newName = fullName("Priya", "Pandey");
let expect = "PriyaPandey";

let newpName = fullName("Priya", "Pandey");
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

//#### Calculate total amount

// 1. Write a function that takes two input `amount` and `taxRate` and returns the total amount by `amount + (amount * taxRate) `
// 2. Write two tests for the above function
// 3. Make the first test fail and look at the output
// 4. After making the first test fail do you see the output of the second test?

function totalAmount(amount, taxRate) {
  let totalAmount = amount + amount * taxRate;
  return totalAmount;
}
let result = totalAmount(5, 5);
let expected = 35;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
