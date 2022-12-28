//Task 1
let sisterName = "ანა";
let sisterAge = 28;
let brotherName = "ლევანი";
let brotherAge = 21;

let text = `ანა ლევანზე ${sisterAge - brotherAge} წლით უფროსია.`;
console.log(text);

//task 2
let studentNames = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'Joseph', 'Lorelai', 'Amelie', 'Den'];
let middleStudent = studentNames[(studentNames.length - 1) / 2];
console.log(middleStudent);

//Task 3

let student = {
    firstName: 'ლექსო',
    lastName: 'იმნაიშვილი',
    age: 30,
    subjects: ['მათემატიკა', 'ქართული', 'ინგლისური', 'ფიზიკა', 'ქიმია'],
    roomMate: {
        fullName: 'ლაშა ოზაშვილი',
        age: 30
    }
}
//subjects
for(let i = 0; i < student.subjects.length; i++){
    console.log(student.subjects[i]);
}
//fullname
let fullName = student.firstName + " " + student.lastName;
console.log(fullName);

student.fullName = fullName;
console.log(student);

//result
let result = `${student.fullName} არის ${student.age} წლის და მისი რუმმეითი არის : ${student.roomMate.fullName}`
console.log(result);

//task 4
let array1 = ["Banana", "Orange", "Apple", "Mango",2,12];

let i = 0;
while(typeof(array1[i]) == 'string'){
    console.log(array1[i]);
    i++;
}

//Task 5
let numbers = [12,23,43,11,9,2,121,90];

for(let i = 0; i < numbers.length; i++){
    
    if (numbers[i] > 31 && numbers[i]%2==0) {
        console.log('Element is greater than provided value and is EVEN');
    } else if (numbers[i] < 31 && numbers[i]%2!=0) {
        console.log('Element is less than provided value and is ODD');
    }
}

