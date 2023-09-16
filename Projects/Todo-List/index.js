const validateTask = (inputText) => {
    return inputText === '' ? false : true;
};
const createTodoTask = (inputText) => {
    // creating 'INPUT tytpe=checkbox'
    const checkbox = createCheckbox(inputText);

    // creating 'LABEL for=checkbox'
    const label = createLabel(inputText);

    // creating 'DIV'
    const taskListDiv = createDiv(checkbox, label);

    // creating 'BUTTON for=delete'
    const deleteButton = createDeleteButton();

    // creating 'LI'
    const taskListItem = createTaskListItem(taskListDiv, deleteButton);
    return taskListItem;
};
const addTodoTask = (task) => {
    const ul = document.getElementById('todo-tasks');
    ul.appendChild(task);
};
const addTask = () => {
    const inputText = document.getElementById('input-text').value;
    if (validateTask(inputText) === false) {
        alert('ERROR : You are trying to add a BLANK task.');
    } else {
        taskCounter++;
        const task = createTodoTask(inputText);
        document.getElementById('input-text').value = ''; // making the input field as BLANK.
        addTodoTask(task);
    }
};
const deleteTodoItem = (e) => {
    e.target.parentNode.remove();
};
const doneTask = (e) => {
    const elem = document.getElementById(e.target.id + '-label');
    elem.classList.toggle('strikethrough');
};
const createCheckbox = (inputText) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `task-${taskCounter}`);
    checkbox.setAttribute('name', `task-${taskCounter}`);
    checkbox.setAttribute('value', inputText);
    checkbox.className = 'task-checkbox';
    checkbox.addEventListener('click', doneTask);
    return checkbox;
};
const createLabel = (inputText) => {
    const label = document.createElement('label');
    label.setAttribute('for', `task-${taskCounter}`);
    label.setAttribute('id', `task-${taskCounter}-label`);
    label.className = 'task-label';
    label.innerText = inputText;
    return label;
};
const createDiv = (checkbox, label) => {
    const taskListDiv = document.createElement('div');
    taskListDiv.className = 'task-content';
    // creating 'DIV > CHECKBOX + LABEL'
    taskListDiv.appendChild(checkbox);
    taskListDiv.appendChild(label);
    return taskListDiv;
};
const createDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.className = 'btn btn-delete';
    deleteButton.innerText = 'DELETE';
    deleteButton.addEventListener('click', deleteTodoItem);
    return deleteButton;
};
const createTaskListItem = (taskListDiv, deleteButton) => {
    const taskListItem = document.createElement('li');
    taskListItem.className = 'todo-item';
    // creating 'LI > (DIV > CHECKBOX + LABEL) + DELETE'
    taskListItem.appendChild(taskListDiv);
    taskListItem.appendChild(deleteButton);
    return taskListItem;
};
let taskCounter = 0;
const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', addTask);
