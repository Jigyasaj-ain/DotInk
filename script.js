//journaling section
// <section class="goals">
//       <h1>My Goals for the Week</h1>
//       <input class="goals-input" type="text" placeholder="Insert Goal" </input>
//       <button class="goals-btn"> Submit </button>
//       <p>Live Laugh Love</p>
//     </section>

var goals = $('.goals');
var groceries = $('.groceries'); 
var freewrite =$(`.freewrite`);
var todoList = $(`.todo`)

var goalsInput = $('.goals-input')
var goalsBtn = $('.goals-btn')

goalsBtn.on ('click',addGoal);

function addGoal() {
  var newGoal = goalsInput.val();
  goals.append (`<div class= "goalsStuff"> <br><br>
    <p>${newGoal}</p> &emsp; &emsp; &emsp;
    <button class= "delete-btns"> Delete </button>
  </div> `)
}

// <section class="groceries">
//       <h1>My Grocery List</h1>
//       <input class="groceries-input" type-"text" placeholder="Insert Groceries" </input>
//       <button class="groceries-btn"> Submit </button>
//     </section>

var groceriesInput = $(".groceries-input")
var groceriesBtn = $(".groceries-btn")

groceriesBtn.on ('click',addGroceries)

function addGroceries () {
  var newGrocery = groceriesInput.val ();
  groceries.append (`<div class= "groceryStuff"> <br><br>
    <p>${newGrocery}</p> &emsp;&emsp; &emsp;
    <button class= "delete-btns"> Delete </button>
  </div> `)
}

// <section class= "freewrite"> 
//     <h1>Self-Reflection</h1>
//       <input class="freewrite-input" type-"text" placeholder="How was your day?" </input>
//       <button class="freewrite-btn"> Submit </button>
//   </section>

var freewriteInput = $(`.freewrite-input`)
var freewriteBtn = $(`.freewrite-btn`)

freewriteBtn.on (`click`,selfReflect)

function selfReflect () {
  var newThought = freewriteInput.val();
  freewrite.append (`<p>${newThought}</p>`)
} 


// ---------------
// <section class="todo">
//       <h1>To Do List</h1>
//       <input class="todo-input" type="text" size="50" placeholder="Insert Task" </input>
//       <button class="todo-btn"> Submit </button> <br>
//       <br> <p> Present Final Demo 🥳 </p>
//

var todoInput = $('.todo-input');
var todoBtn = $('.todo-btn');

todoBtn.on ('click',addTask);

function addTask() {
  var newTask = todoInput.val()
  todoList.append (`
  <div class= "taskStuff">
    <p>${newTask}</p> &emsp; &emsp; &emsp;
    <button class= "delete-btn"> Delete </button>
  </div> `)
}
var deleteBtn = $('.delete-btn');  // Use proper quotes for jQuery selector

goals.on('click', deleteFunction);
groceries.on('click', deleteFunction);
todoList.on('click', deleteFunction);

function deleteFunction(event) {  // Add 'event' parameter
  if (event.target.className === "delete-btn") {
    event.target.parentNode.remove();
  }
}
