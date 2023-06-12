//store data in local storage
// localStorage.setItem("name", "Kas");
// localStorage.setItem("age", 50);

//get data from local storage

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// console.log(name, age);

//update data
// localStorage.setItem("name", "Danielle");
// localStorage.age = 40;

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");

// console.log(name, age);

//deleting items

// localStorage.removeItem("name");
// localStorage.clear();

// name = localStorage.getItem("name");
// age = localStorage.getItem("age");
// console.log(name, age);

const todos = [
  { task: "Code", when: "morning" },
  { task: "Workout", when: "afternoon" },
  { task: "Work", when: "evening" },
];

// console.log(JSON.stringify(todos));

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
