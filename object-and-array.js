//object without array

var student1 = {
    firstName: "Mirza",
    lastName: "Ayon",
    age: 23,
    married: false,
};
console.log(student1);

//object with array
var student2 = {
    firstName: "Mirza",
    lastName: "Ayon",
    age: 23,
    hobby: ["h1", "h2"],
    dinner: false,
};
console.log(student2);
console.log(student2.hobby);
console.log(student2.hobby[0]); //for 0 no index

//array
//numbers
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers);
//array
//String
var studentsCollection = ['Ayon', 'Plabon'];
console.log(studentsCollection);
//Array of 2 Objects
var students = [student1, student2];
console.log(students);
