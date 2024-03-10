
let studentNamesLiteral = [];


let studentNamesObject = new Array();


let stringArray = ['Alice', 'Bob', 'Charlie'];


let numbersArray = [1, 2, 3, 4, 5];


let booleanArray = [true, false, true];


let mixedArray = ['Alice', 1, true, 'Bob', 2, false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan
let educationQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];


document.body.innerHTML = '<h3>Education Qualifications in Pakistan:</h3><ul>' + 
educationQualifications.map(qualification => `<li>${qualification}</li>`).join('') + '</ul>';
