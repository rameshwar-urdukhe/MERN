
//Mini Project: Console To-Do App 

let todos = [];

// function to addTask 

function addTask(task){
    todos.push(task);
    console.log("Task added:", task);
}

// function for viewTask

function viewTasks(){
    console.log("Your Tasks:");
    todos.forEach((task, index)=>{
        console.log(index + ": " + task);
    });
}

//Function for deleteTask

function deleteTask(index){
    todos.splice(index, 1);
    console.log("Task deleted");
}

//Testing

addTask("Mornig DSA");
addTask("Afernoon Devlopment Practice");
viewTasks();
deleteTask(0);
viewTasks();

//output:

// 0: Mornig DSA
// 1: Afernoon Devlopment Practice
// Task deleted
// Your Tasks:
// 0: Afernoon Devlopment Practice