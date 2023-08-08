const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

const subtract = (num1: number, num2: number): number => {
  return num1 - num2;
};

const divide = (num1: number, num2: number): number => {
  return num1 / num2;
};

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};

const calculator = {
  add,
  subtract,
  multiply,
  divide,
};

export default calculator;
