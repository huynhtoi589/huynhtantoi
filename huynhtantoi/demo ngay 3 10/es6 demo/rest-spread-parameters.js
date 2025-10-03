console.log("rest-spread-parameters")
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];