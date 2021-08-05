module.exports = function toReadable (number) {
  let result = "";
  const units = {
    "0": "zero",
    "1": "one ",
    "2": "two ",
    "3": "three ",
    "4": "four ",
    "5": "five ",
    "6": "six ",
    "7": "seven ",
    "8": "eight ",
    "9": "nine "
  };
  const tens = {
    "1": "ten ",
    "2": "twenty ",
    "3": "thirty ",
    "4": "forty ",
    "5": "fifty ",
    "6": "sixty ",
    "7": "seventy ",
    "8": "eighty ",
    "9": "ninety "
  };
  const second_ten = {
    "0": "ten ",
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "nineteen"
  };
  let stringNumber = number.toString();

  if (stringNumber.length === 1 && stringNumber[0] === "0") {
    result += units[stringNumber[0]];
  }
  if (stringNumber.length === 3 ) {
    result =  units[stringNumber[0]] + "hundred ";
    stringNumber = stringNumber.slice(1);
  };
  if (stringNumber.length === 2 && stringNumber[0] !== "1"  && stringNumber[0] !== "0") {
    result += tens[stringNumber[0]];
    stringNumber = stringNumber.slice(1);
  };
  if (stringNumber.length === 2 && stringNumber[0] === "1") {
    result += second_ten[stringNumber[1]];
  };
  if (stringNumber.length === 2 && stringNumber[0] === "0") {
    stringNumber = stringNumber.slice(1);
  }
  if (stringNumber.length === 1 && stringNumber[0] !== "0") {
    result += units[stringNumber[0]];
  }


  return result.trim();
}
