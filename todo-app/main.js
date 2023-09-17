import './scss/style.scss'

// array to store tasks
let tasks = []

const addTask = () => {
  const taskInput = document.querySelector('.task-input')
  const taskName = taskInput.value

  console.log("Add new task");
  
  if(taskName.trim() !== ''){
    const task = {
      id : Date.now(),
      name : taskName,
      completed : false
    };
    
    
    tasks.push(task);
  }
  console.log(tasks);
  renderTasks()
  taskInput.value = ''

}
// add new task when Enter key pressed 
const taskInput = document.querySelector('.task-input');
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
const renderTasks = () => {
  const taskList = document.querySelector('.todo-app__list');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    // create new list item 
    const listItem = document.createElement('li');
    listItem.setAttribute('id', task.id);
    listItem.classList.add('task', task.completed ? 'completed' : 'not')

    // create main contanier
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('container')
    taskContainer.addEventListener('click', () => markCompeleted(task.id))

  
    // create circle icon 
    const taskCircle = document.createElement('div')
    taskCircle.classList.add("circle")

    // create task name 
    const taskName = document.createElement('span')
    taskName.textContent = task.name

    // create task delete button 
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('bx','bx-x','close-icon');
    deleteButton.addEventListener('click' , () => deleteTask(task.id))
    
    // add all elements into list 
    taskContainer.appendChild(taskCircle);
    taskContainer.appendChild(taskName);

    listItem.appendChild(taskContainer);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

  });
}

renderTasks()
