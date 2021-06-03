let input = document.querySelector(".task-input");
let list = document.querySelector(".task-list");    

function deleteTask(e){
    e.currentTarget.remove();
}
function addItem(e){
    if(e.key == "ArrowUp" || e.key == "ArrowDown"){
        let task = input.value; //box taking input stored in task
        if(!task){
            alert("Error- Adding empty task");
            return;
        }
        input.value = ""; //enter press k bad it will become empty
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick", deleteTask);
        if( e.key == "ArrowUp"){
            list.insertBefore(li, list.firstChild);
        }
        else{
            list.appendChild(li);
        }
    }
}
input.addEventListener("keyup",addItem) //callback function

//TO ADD INPUT IN THE LIST USING ENTER KEY.....USE THIS CODE
/* input.addEventListener("keypress", function(e) {
    console.log(e);
    if(e.key == "Enter") {
        let task = input.value;
        if(!task) {
            alert("Error- Adding empty task");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick", deleteTask);
        ul.insertBefore(li, ul.firstChild);
        
    }
}); */