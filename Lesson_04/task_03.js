let student1 = { yearOfStudying: 7, facultyName: "Economic" };
let student2 = { yearOfStudying: 5, facultyName: "Physical and mathematical" };
let student3 = { yearOfStudying: 4, facultyName: "Geographical" };
let student4 = { yearOfStudying: 5, facultyName: "Biological" };
let student5 = { yearOfStudying: 6, facultyName: "Agronomic" };
let student6 = { yearOfStudying: 7, facultyName: "Philological" };
let student7 = { yearOfStudying: 2, facultyName: "Philosophical" };
let student8 = { yearOfStudying: 6, facultyName: "Historical" };
let student9 = { yearOfStudying: 6, facultyName: "Military" };
let student10 = { yearOfStudying: 8, facultyName: "Law and Linguistics" };

let students = [];
students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

let facultyNameArray = students.map(function(students) {
	return students.facultyName;
});
console.log(facultyNameArray);
console.log('---------');

let years = students.reduce(function(totalYears, student) {
	return totalYears + student.yearOfStudying;
}, 0);

console.log(years);
