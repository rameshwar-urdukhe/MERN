// DOM + Real To-Do App

const tasks = [];

function addTask(){
    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === "") return;

    tasks.push(task);
    input.value = "";

    showTask();
};


function showTask(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index)=>{
        let li = document.createElement("li");
        li.innerText = task;

        let btn = document.createElement("button");
        btn.innerText = "Delete";

        btn.onclick = function(){
            deleteTask(index);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function deleteTask(index){
    tasks.splice(index, 1);
    showTask();
}

