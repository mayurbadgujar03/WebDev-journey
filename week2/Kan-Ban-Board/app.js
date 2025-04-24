const toDoBoard = document.getElementById('toDo');
const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', addTask);

function attachEvent (taskCard) {
    taskCard.addEventListener('dragstart', () => {
        taskCard.classList.add('flying')
    })
    taskCard.addEventListener('dragend', () => {
        taskCard.classList.remove('flying')
    })
}

function addTask() {
    let task = prompt("Enter task to add")
    if(!task) return;

    let taskCard = document.createElement('p');
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable', true)
    taskCard.textContent = task;

    attachEvent(taskCard);

    toDoBoard.appendChild(taskCard);
}

const allBoards = document.querySelectorAll('.board');
const allItems = document.querySelectorAll('.item');

allItems.forEach((item) => attachEvent(item));

allBoards.forEach((board) => {
    board.addEventListener('dragover', () => {
        const item = document.querySelector('.flying');
        board.appendChild(item)
    })
})