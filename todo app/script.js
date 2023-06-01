// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value;

  console.log(taskName);

  if(taskName.trim() !== ''){
    const task = {
      id : Date.now(),
      name : taskName,
      completed : false
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

// add new task when Enter key pressed 
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask()
    }
});

// Function to delete a task
function deleteTask(id){
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Function to mark a task as completed
function markCompeleted(id){
  tasks = tasks.map(task => {
    if(task.id === id){
      task.completed = !task.completed;
    }
    return task;
  });
  renderTasks();
  updateCompleteTask(id);


}
function updateCompleteTask(id){
  const taskElement = document.getElementById(id);
  if(taskElement){
    const task = tasks.find(task => task.id === id);
    if(task.completed){
      taskElement.classList.add('completed');
    }else{
      taskElement.classList.remove('completed');
    }
  }
}

// Function to render tasks on the page
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    // create new list item 
    const listItem = document.createElement('li');
    listItem.setAttribute('id', task.id);

    // create task name span
    const taskName = document.createElement('span');
    taskName.innerHTML = task.name;
    
    // create task compelete button 
    const completeButton = document.createElement('i');
    completeButton.classList.add('bx','bx-check','compelete-btn');
    completeButton.addEventListener('click' , () => markCompeleted(task.id))

    // create task delete button 
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('bx','bxs-trash','delete-btn');
    deleteButton.addEventListener('click' , () => deleteTask(task.id))
    
    // add all elements into list 
    listItem.appendChild(taskName);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

  });
}

// Initial rendering of tasks
renderTasks()

