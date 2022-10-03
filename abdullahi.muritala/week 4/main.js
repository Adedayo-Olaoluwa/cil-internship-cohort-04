// Handle the theme switching logic

let toggle = document.querySelector('#theme-toggle');

let storedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);

const handleThemeToggle = () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let targetTheme = 'light';

  if (currentTheme === 'light') {
    targetTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};

toggle.addEventListener('click', handleThemeToggle);

// Array to hold all tasks
const tasks = [];

// Declare the task class

class Task {
  constructor(title, checklist) {
    this.title = title;
    this.checklist = checklist;
  }

  addToTasks() {
    tasks.push(this);
  }
}

console.log(tasks);

const newTaskForm = document.querySelector('#newTaskForm');

const addNewTask = (event) => {
  event.preventDefault();
  const title = document.querySelector('#newTodo').value;
  const checklist = undefined;
  const newTask = new Task(title, checklist);
  newTask.addToTasks();
  document.querySelector('#newTaskForm').reset();
  console.log(tasks);
};
newTaskForm.addEventListener('submit', addNewTask);
