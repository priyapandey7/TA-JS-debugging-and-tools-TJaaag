//testing framework

function test(message, callback) {
  try {
    callback();
    console.log(`passed ` + message);
  } catch (error) {
    console.error(error);
    console.log(`failed ` + message);
  }
}

//assertion framework

function expect(result) {
  return {
    toEqual: function (expected) {
      if (result !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    isTypeNumber: function (expected) {
      if (typeof result !== expected) {
        throw new Error(`${result}type is not number`);
      }
    },
  };
}

// #### Add two number

function sum(numA, numB) {
  let sum = numA + numB;
  return sum;
}

function test(message, callback) {
  try {
    callback();
    console.log("success", message);
  } catch (error) {
    console.log(error);
  }
}

function sumTest() {
  let result = sum(6, 6);
  let expected = 10;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function sumTest2() {
  let result = sum(20, 20);
  let expected = 40;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function sumTest3() {
  let result = sum(6, 4);
  let expected = 11;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function sumTest4() {
  let result = sum(5, 30);
  let expected = 5;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function sumTest5() {
  let result = sum(5, 10);
  let expected = 10;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

test("adding two number", sumTest);
test("adding two number", sumTest2);
test("adding two number", sumTest3);
test("adding two number", sumTest4);
test("adding two number", sumTest5);

function multiply(numA, numB) {
  let multiply = numA * numB;
  return multiply;
}

function multiplyTest() {
  let result = multiply(2, 6);
  let expected = 12;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function multiplyTest2() {
  let result = multiply(2, 2);
  let expected = 10;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function multiplyTest3() {
  let result = multiply(15, 3);
  let expected = 45;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function multiplyTest4() {
  let result = multiply(5, 10);
  let expected = 55;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

function multiplyTest5() {
  let result = multiply(15, 10);
  let expected = 150;

  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }
}

test("multiplying two number", multiplyTest2);
test("multiplying two number", multiplyTest);
test("multiplying two number", multiplyTest3);
test("multiplying two number", multiplyTest4);
test("multiplying two number", multiplyTest5);
