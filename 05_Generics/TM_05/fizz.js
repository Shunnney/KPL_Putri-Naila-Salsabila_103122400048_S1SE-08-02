/**
 * @param {number} value 
 * @returns {number|string}
 * @throws {Error} 
 */
function zzzzOrNum(value) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error("Input must be a valid number");
  }

  if (value % 15 === 0) return "FizzBuzz";
  if (value % 3 === 0) return "Fizz";
  if (value % 5 === 0) return "Buzz";

  return value;
}

/**
 * @param {number[]} sequence 
 * @returns {(number|string)[]}
 * @throws {Error} 
 */
function fizzBuzz(sequence) {
  if (!Array.isArray(sequence)) {
    throw new Error("Input must be an array");
  }

  return sequence.map((e) => {
    if (typeof e !== "number" || Number.isNaN(e)) {
      throw new Error("Array must contain only numbers");
    }
    return zzzzOrNum(e);
  });
}

module.exports = {
  fizzBuzz,
  zzzzOrNum,
};