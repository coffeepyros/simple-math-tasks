let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");

const nrOfTasks = 15;

function fillAdd() {
  addition.innerText = "";
  let tasks = [];
  for (let i = 0; i < nrOfTasks; i++) {
    let result = getRndInteger(2, 100);
    let x = getRndInteger(1, result - 1);
    tasks.push({x: x, y: result-x, op: "+"})
    // addFormula(x, result - x, "+");
  }
  addTasks(tasks);
  console.log(tasks)
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
    tasks.push({x: x, y: y, op: "-"})
  }
  addTasks(tasks);
  console.log(tasks)
}

function addTasks(tasks) {
  tasks.map((task)=> {
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

fillAdd();
fillSub();
