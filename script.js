
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add task function 
function addTask(){
    if(inputBox.value ==''){
        alert("you must write somthing!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
     saveData()
} 

// remove item or task function

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// code to store the task or items in browser 

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// show data when page opens
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();