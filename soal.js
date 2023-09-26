// Soal
// switch case
// Buatlah sebuah program mengunakan switch case untuk menentukan grade berdasarkan nilai siswa
// 1. jika nilai 100 maka grade adalah A
// 2. jika grade >= 80 & < 100 maka grade adalah B
// 3. jika grade >= 70 & < 80 maka grade adalah C
// 4. jika grade >= 50 & < 70 maka grade adalah D
// 5. jika grade < 50 maka grade adalah E
// 6. jika input diluar range maka akan memunculkan error "Invalid Input!"
function grading(nilai) {
  let grade = "";
  switch (true) {
    case nilai === 100:
      grade = "A";
      break;
    case nilai >= 80 && nilai < 100:
      grade = "B";
      break;
    case nilai >= 70 && nilai < 80:
      grade = "C";
      break;
    case nilai >= 50 && nilai < 70:
      grade = "D";
      break;
    case nilai < 50:
      grade = "E";
      break;
    default:
      grade = "Invalid Input!";
  }
  return grade;
}

// Contoh penggunaan:
console.log(grading(100)); // Output: A
console.log(grading(90)); // Output: B
console.log(grading(71)); // Output: C
console.log(grading(61)); // Output: D
console.log(grading(45)); // Output: E
console.log(grading(110)); // Output: Invalid Input!

//loop
// Buatlah tampilan seperti di bawah ini mengunakan loop
// *****
// ****
// ***
// **
// *

// function
// Buatlah sebuah program kalkulator sederhana mengunakan function
// support 2 operan & 1 operator
function printTriangle(height) {
  for (let i = height; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// Contoh penggunaan:
printTriangle(5);
/*
  Output:
  *****
  ****
  ***
  **
  *
  */

const calculator = (operan1, operan2, operator) => {
  let hasil = 0;
  switch (operator) {
    case "+":
      hasil = operan1 + operan2;
      break;
    case "-":
      hasil = operan1 - operan2;
      break;
    case "*":
      hasil = operan1 * operan2;
      break;
    case "/":
      if (operan2 !== 0) {
        hasil = operan1 / operan2;
      } else {
        hasil = "Tidak bisa dibagi dengan 0";
      }
      break;
    default:
      hasil = "Operator tidak valid";
  }
  return hasil;
};

// Contoh penggunaan:
console.log(calculator(5, 3, "+")); // Output: 8
console.log(calculator(10, 2, "/")); // Output: 5
console.log(calculator(7, 0, "/")); // Output: Tidak bisa dibagi dengan 0
console.log(calculator(4, 5, "^")); // Output: Operator tidak valid

// classes
// Buatlah sebuah class untuk menghitung dan mendeskripsikan sebuah bangun tabung
// expektasi output = menghasilkan volume, luas permukaan dan radius
class Cylinder {
  constructor(height, diameter) {
    this.height = height;
    this.diameter = diameter;
    this.radius = diameter / 2;
  }

  volume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }

  surfaceArea() {
    return 2 * Math.PI * this.radius * (this.radius + this.height);
  }
}

let cylA = new Cylinder(10, 5);
console.log("Volume: " + cylA.volume());
console.log("Luas Permukaan: " + cylA.surfaceArea());
