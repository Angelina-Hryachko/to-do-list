function addTask() {
    let input = document.getElementById('taskInput');
    let text = input.value.trim();
    if (text == '') return;
    let li = document.createElement('li');
    li.innerHTML = `${text} <button class="delete" onclick="removeTask(this)">X</button>`;

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

function removeTask(button) {
    button.parentElement.remove();
}