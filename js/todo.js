const todoForm = document.querySelector(".js-todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODO_LS = "todoList";

let todos = [];

function addTodo(text){
    const newId = todos.length+1;
    const newTodo = {
        id : newId,
        todo : text
    };
    todos.push(newTodo);
    saveTodo();
    paintTodo(newTodo); //show TodoItem
}

function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li); //remove <li> node
    const cleanTodos = todos.filter((todo)=>{
        return todo.id != parseInt(li.id);
    });
    todos = cleanTodos;
    saveTodo();
}

function handleSubmit(event){
    event.preventDefault();
    const newValue = todoInput.value;
    console.log(newValue);
    addTodo(newValue); //add to todoList
    todoInput.value = ""; //initilize 
}

function loadTodoList(){
    const loadedTodos = localStorage.getItem(TODO_LS);
    if(loadedTodos !== null){
       const parsedTodos = JSON.parse(loadedTodos);//string->jsObject
       parsedTodos.forEach(todo=>{
           paintTodo(todo); //show TodoItem
           todos.push(todo);
       })
    }
}

function paintTodo(item){
    const id = item.id;
    const todo = item.todo;
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = id;
    delBtn.innerText="❌";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = todo;
}

function init(){
    loadTodoList();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
