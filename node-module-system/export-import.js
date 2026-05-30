function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function divide(x, y) {
  if (y !== 0) {
    return x / y;
  } else {
    throw new Error("Division is not supported");
  }
}
module.exports = {
  add,
  subtract,
  divide,
};
