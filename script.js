let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");

const nrOfTasks = 15;

function fillAdd() {
  addition.innerText = "";
  for (let i = 0; i < nrOfTasks; i++) {
    let result = getRndInteger(2, 100);
    let x = getRndInteger(1, result - 1);
    addFormula(x, result - x, "+");
  }
}

function fillSub() {
  subtraction.innerText = "";
  for (let i = 0; i < nrOfTasks; i++) {
    let x = getRndInteger(2, 50);
    let y;
    do {
      y = getRndInteger(1, x);
    } while (x === y);
    addFormula(x, y, "-");
  }
}

function addFormula(x, y, op) {
  let task = document.createElement("p");
  task.innerText = x + " " + op + " " + y + " =";
  if (op === "+") addition.append(task);
  else if (op === "-") subtraction.append(task);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

fillAdd();
fillSub();
