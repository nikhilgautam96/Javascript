const notificationFunc = (notificationText, notificationColor) => {
    // Adding a Notification Feature that displays a new todo is added/ a todo is deleted.
    const parent = document.getElementsByClassName('todo')[0];
    const todoHead = document.getElementsByClassName('todo-head')[0];

    const notification = document.createElement('div');
    notification.innerText = notificationText;
    notification.style.color = notificationColor;

    parent.insertBefore(notification, todoHead.nextSibling);
    setTimeout(() => {
        notification.remove();
    }, 700);
};
const deleteTodoItem = (e) => {
    tasksList.delete(Number(e.target.parentNode.getAttribute('key')));
    e.target.parentNode.remove();
    notificationFunc('Todo task has been DELETED', 'red');
    updateLocalStorage();
};
const doneTask = (e) => {
    const checkbox = e.target;
    const label = checkbox.nextElementSibling; // Get the adjacent label element
    label.classList.toggle('strikethrough');
};
const createCheckbox = (inputText) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', `task-${taskKey}`);
    checkbox.setAttribute('name', `task-${taskKey}`);
    checkbox.setAttribute('value', inputText);
    checkbox.className = 'task-checkbox';
    checkbox.addEventListener('click', doneTask);
    return checkbox;
};
const createLabel = (inputText) => {
    const label = document.createElement('label');
    label.setAttribute('for', `task-${taskKey}`);
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
    taskListItem.setAttribute('key', taskKey);

    // creating 'LI > (DIV > CHECKBOX + LABEL) + DELETE'
    taskListItem.appendChild(taskListDiv);
    taskListItem.appendChild(deleteButton);

    return taskListItem;
};
const validateTask = (inputText) => {
    return inputText === '' ? false : true;
};
const buildTodoTask = (inputText) => {
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
const renderTasks = () => {
    const ul = document.getElementById('todo-tasks');

    for (let taskListItem of tasksList) {
        ul.appendChild(taskListItem[1]);

        const checkbox = taskListItem[1].querySelector('.task-checkbox');
        const deleteButton = taskListItem[1].querySelector('.btn-delete');

        checkbox.addEventListener('click', doneTask);
        deleteButton.addEventListener('click', deleteTodoItem);
    }
};
const createTodoTask = () => {
    const inputText = document.getElementById('input-text').value; // get the input from input box.s
    if (validateTask(inputText) === false) {
        alert('ERROR : You are trying to add a BLANK task.'); // validate for empty input.
    } else {
        taskKey++;
        const taskListItem = buildTodoTask(inputText);
        document.getElementById('input-text').value = ''; // making the input field as BLANK.
        tasksList.set(taskKey, taskListItem); // adding the task to the List of tasks.
        renderTasks();
        updateLocalStorage();
        notificationFunc('Todo task added Successfully 🙂', 'green');
    }
};
const updateLocalStorage = () => {
    const taskArray = Array.from(tasksList.entries()).map(
        ([key, taskListItem]) => {
            return [key, taskListItem.outerHTML];
        }
    );
    localStorage.setItem('tasksList', JSON.stringify(taskArray));
};
const buildTaskFromHTML = (htmlString) => {
    const parser = new DOMParser();
    const parsedHTML = parser.parseFromString(htmlString, 'text/html');
    return parsedHTML.body.firstChild.cloneNode(true);
};

let taskKey = 0;
let tasksList = new Map();
// console.log(localStorage);
if (!localStorage.tasksList) {
    console.log('2');
    // initialize it as an empty map and store it as a JSON string.
    localStorage.tasksList = JSON.stringify(new Map());
} else {
    console.log('1');
    const taskArray = JSON.parse(localStorage.getItem('tasksList'));

    tasksList = new Map(
        taskArray.map(([key, htmlString]) => {
            const taskListItem = buildTaskFromHTML(htmlString);
            return [key, taskListItem];
        })
    );
}
renderTasks();
const addTaskButton = document.getElementById('add-task');
addTaskButton.addEventListener('click', createTodoTask);

// clearing local storage on ending session. ie. : go-live end.
function clearStorage() {
    let session = sessionStorage.getItem('register');

    if (session == null) {
        localStorage.removeItem('tasksList');
    }
    sessionStorage.setItem('register', 1);
}
window.addEventListener('load', clearStorage);
