// function to generate one random number with 3 digits
function generateRandomNumber() {
  let number = Math.random() * 1000;
  number = Number(number.toFixed(2));
  return number
}

// function to convert decimal number to binary number
function convertToBinary(number) {
  let binaryNumber = number.toString(2);
  return binaryNumber;
}


// funtion to convert decimal number to hexadecimal number
function convertToHexadecimal(number) {
  let hexadecimalNumber = number.toString(16);
  return hexadecimalNumber;
}

// function to convert binary number to float number
function convertBinaryToFloat(binaryNumber) {
  floatNumber = parseInt(binaryNumber, 2);
  
  // get numbers afetr point
  let numbersAfterPoint = binaryNumber.split(".")[1];
  for(let i = 0; i < numbersAfterPoint.length; i++) {
    floatNumber += Number(numbersAfterPoint[i]) * Math.pow(2, -(i + 1));
  }

  console.log(floatNumber);
  return floatNumber;
}

function toGenerateNumer() {
  let number = generateRandomNumber();
  let binaryNumber = convertToBinary(number);
  let hexadecimalNumber = convertToHexadecimal(number);
  convertBinaryToFloat(binaryNumber)

  document.getElementById("decimalNumber").textContent = number;
  document.getElementById("binaryNumber").textContent = binaryNumber;
  document.getElementById("hexadecimalNumber").textContent = hexadecimalNumber;
}
