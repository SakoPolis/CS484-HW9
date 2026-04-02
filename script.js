// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"
var date = new Date();
var month = date.getMonth() + 1; // Adjust for 0-based month
var day = date.getDate();
var year = date.getFullYear();

// Add leading zeros if needed
var monthStr = month < 10 ? "0" + month : month.toString();
var dayStr = day < 10 ? "0" + day : day.toString();

var dateOutput = "Today is " + monthStr + "/" + dayStr + "/" + year;

// Display the result
document.getElementById("dateOutput").innerText = dateOutput;

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

var numericString1 = "42";
var numericString2 = "43";
var decimalString = "3.14";
var nonNumericString = "hello";

Number(numericString1);
Number(numericString2);
Number(decimalString);
Number(nonNumericString);

var output = "Original: '" + numericString1 + "' -> Converted: " + Number(numericString1) + " -> isNaN: " + Number.isNaN(Number(numericString1)) + " -> isInteger: " + Number.isInteger(Number(numericString1)) + "\n";
output += "Original: '" + numericString2 + "' -> Converted: " + Number(numericString2) + " -> isNaN: " + Number.isNaN(Number(numericString2)) + " -> isInteger: " + Number.isInteger(Number(numericString2)) + "\n";
output += "Original: '" + decimalString + "' -> Converted: " + Number(decimalString) + " -> isNaN: " + Number.isNaN(Number(decimalString)) + " -> isInteger: " + Number.isInteger(Number(decimalString)) + "\n";
output += "Original: '" + nonNumericString + "' -> Converted: " + Number(nonNumericString) + " -> isNaN: " + Number.isNaN(Number(nonNumericString)) + " -> isInteger: " + Number.isInteger(Number(nonNumericString)) + "\n";

document.getElementById("numberConversionOutput").innerText = output;
// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"
var num1 = 10;
var num2 = 5;
var num3 = 3.14159;

var addition = num1 + num2;
var multiplication = num1 * num3;

var formattedMultiplication = multiplication.toFixed(2);

var mathOutput = "Addition: " + num1 + " + " + num2 + " = " + addition + "\n";
mathOutput += "Multiplication: " + num1 + " * " + num3 + " = " + formattedMultiplication;

document.getElementById("mathOutput").innerText = mathOutput;

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
var valueToCheck = "abc";

if (Number.isNaN(Number(valueToCheck))) {
    output += "The value '" + valueToCheck + "' is not a number.\n";
} else {
    output += "The value '" + valueToCheck + "' is a number.\n";
}

var numberToCheck = 10;

if (Number.isInteger(numberToCheck)) {
    output += "The number " + numberToCheck + " is an integer.\n";
} else {
    output += "The number " + numberToCheck + " is not an integer.\n";
}

// ==========================
// Extra Credit: Typeof Section
// ==========================

// Using typeof to identify the type of at least five values
var stringValue = "hello";
var numberValue = 42;
var booleanValue = true;
var objectValue = { name: "John", age: 30 };
var arrayValue = [1, 2, 3, 4];
var undefinedValue; //I did not define the value of this variable
var nullValue = null;

var typeofOutput = "Type Identification Results:\n";
typeofOutput += "Value: '" + stringValue + "' -> typeof: " + typeof stringValue + "\n";
typeofOutput += "Value: " + numberValue + " -> typeof: " + typeof numberValue + "\n";
typeofOutput += "Value: " + booleanValue + " -> typeof: " + typeof booleanValue + "\n";
typeofOutput += "Value: {object} -> typeof: " + typeof objectValue + "\n";
typeofOutput += "Value: [array] -> typeof: " + typeof arrayValue + "\n";
typeofOutput += "Value: undefined -> typeof: " + typeof undefinedValue + "\n";
typeofOutput += "Value: null -> typeof: " + typeof nullValue + "\n";

document.getElementById("typeofOutput").innerText = typeofOutput;

// ==========================
// Bonus: Comparing Number(), Number.parseInt(), and Number.parseFloat()
// ==========================

// Testing on similar values to show the differences
var testValue1 = "42";
var testValue2 = "3.14159";
var testValue3 = "100px";
var testValue4 = "  50  ";

var comparisonOutput = "Comparison of Number(), Number.parseInt(), and Number.parseFloat():\n\n";

// Test 1: Simple numeric string
comparisonOutput += "Test 1: '42'\n";
comparisonOutput += "  Number('42') = " + Number(testValue1) + "\n";
comparisonOutput += "  Number.parseInt('42') = " + Number.parseInt(testValue1) + "\n";
comparisonOutput += "  Number.parseFloat('42') = " + Number.parseFloat(testValue1) + "\n\n";

// Test 2: Decimal string
comparisonOutput += "Test 2: '3.14159'\n";
comparisonOutput += "  Number('3.14159') = " + Number(testValue2) + "\n";
comparisonOutput += "  Number.parseInt('3.14159') = " + Number.parseInt(testValue2) + "\n";
comparisonOutput += "  Number.parseFloat('3.14159') = " + Number.parseFloat(testValue2) + "\n\n";

// Test 3: String with non-numeric characters
comparisonOutput += "Test 3: '100px'\n";
comparisonOutput += "  Number('100px') = " + Number(testValue3) + "\n";
comparisonOutput += "  Number.parseInt('100px') = " + Number.parseInt(testValue3) + "\n";
comparisonOutput += "  Number.parseFloat('100px') = " + Number.parseFloat(testValue3) + "\n\n";

// Test 4: String with whitespace
comparisonOutput += "Test 4: '  50  '\n";
comparisonOutput += "  Number('  50  ') = " + Number(testValue4) + "\n";
comparisonOutput += "  Number.parseInt('  50  ') = " + Number.parseInt(testValue4) + "\n";
comparisonOutput += "  Number.parseFloat('  50  ') = " + Number.parseFloat(testValue4) + "\n";

// Display bonus section if element exists (optional)
var comparisonElement = document.getElementById("comparisonOutput");
if (comparisonElement) {
    comparisonElement.innerText = comparisonOutput;
}