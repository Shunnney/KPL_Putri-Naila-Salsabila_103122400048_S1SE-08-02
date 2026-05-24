const processData = require("./processData");

console.log("Running tests...");

console.assert(processData("123") === "Number: 246", "Test 1 Failed");

console.assert(processData(456) === "Number: 912", "Test 2 Failed");

console.assert(
  processData("hello") === "Teks: hello (panjangnya: 5)",
  "Test 3 Failed",
);

console.assert(
  processData(true) === "Teks: true (panjangnya: 4)",
  "Test 4 Failed",
);

console.log("All tests passed!");
