let addButton = document.getElementById('addToDo');
let todoContainer = document.querySelector('.todo-container');
let todoInputBox = document.querySelector('#todoInput');

addButton.addEventListener('click', () => {
    if (todoInputBox.value === '') {
        alert('Please Enter some To Do before adding');
    }

    else {
        let div = document.createElement('div');
        div.className = 'todos';
        div.innerHTML = `<div class="todos">
        <p>${todoInputBox.value}</p>
        <button id="removeToDo">Remove</button>
        </div>`
        
        div.querySelector('#removeToDo').addEventListener('click', () => {
            div.remove();
        });
        
        todoContainer.append(div);
        todoInputBox.value = '';
    } 
});



