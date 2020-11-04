let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let start = true;

const nrOfTasks = 15;

function fillAdd() {
  addition.innerText = "";
  let tasks = [];
  for (let i = 0; i < nrOfTasks; i++) {
    let result = getRndInteger(2, 100);
    let x = getRndInteger(1, result - 1);
    let data = { x: x, y: result - x, op: "+" };
    if (start === true) tasks.push(data);
    else if (isTaskUnique(data, tasks)) tasks.push(data);
  }
  addTasks(tasks);
}

function fillSub() {
  subtraction.innerText = "";
  let tasks = [];
  for (let i = 0; i < nrOfTasks; i++) {
    let x = getRndInteger(2, 50);
    let y;
    do {
      y = getRndInteger(1, x);
    } while (x === y);
    let data = { x: x, y: y, op: "-" };
    if (start === true) tasks.push(data);
    else if (isTaskUnique(data, tasks)) tasks.push(data);
  }
  addTasks(tasks);
}

function isTaskUnique(data, tasks) {
  let copy = tasks.filter((task) => task.x === data.x && task.y === data.y);
  if (copy.length === 0) return true;
  else return false;
}

function addTasks(tasks) {
  tasks.map((task) => {
    let p = document.createElement("p");
    p.innerText = task.x + " " + task.op + " " + task.y + " =";
    if (task.op === "+") addition.append(p);
    else if (task.op === "-") subtraction.append(p);
    return null;
  });
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FIRST PAGE LOAD
fillAdd();
fillSub();
start = false;
