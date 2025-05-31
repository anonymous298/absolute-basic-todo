let addButton = document.getElementById('addToDo');
let todoContainer = document.querySelector('.todo-container');
let todoInputBox = document.querySelector('#todoInput');

if (localStorage.length > 1) {
    for (const key in localStorage) {
        if (typeof localStorage[key] === 'string' && localStorage[key] !== '') {

            let div = document.createElement('div');
            div.className = 'todos';
            div.innerHTML = `<div class="todos">
            <p>${localStorage[key]}</p>
            <button id="removeToDo">Remove</button>
            </div>`
            
            div.querySelector('#removeToDo').addEventListener('click', () => {
                div.remove();
                localStorage.removeItem(div.querySelector('p').innerHTML, div.querySelector('p').innerHTML);
                // console.log(div.querySelector('p').innerHTML)
            });
            
            todoContainer.append(div);
        }
    }
}

todoInputBox.addEventListener('change', () => { 
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

        localStorage.setItem(todoInputBox.value, todoInputBox.value);
        
        div.querySelector('#removeToDo').addEventListener('click', () => {
            div.remove();
            localStorage.removeItem(div.querySelector('p').innerHTML, div.querySelector('p').innerHTML);
            // console.log(div.querySelector('p').innerHTML)
        });
        
        todoContainer.append(div);
        todoInputBox.value = '';

    } 
})

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
            localStorage.removeItem(div.querySelector('p').innerHTML, div.querySelector('p').innerHTML);
            // console.log(div.querySelector('p').innerHTML)
        });
        
        todoContainer.append(div);
        todoInputBox.value = '';

        localStorage.setItem(todoInputBox.value, todoInputBox.value);
    } 
});


