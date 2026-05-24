const processData = require("./processData");

function main() {
  const data = ["123", 456, "hello", 78.9, true];

  for (let i = 0; i < data.length; i++) {
    const result = processData(data[i]);

    console.log(`Item ${i + 1}: ${data[i]} -> ${result}`);
  }
}

main();
