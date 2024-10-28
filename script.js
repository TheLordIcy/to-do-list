const listContainers = document.getElementById("listContainer");
const inputBox = document.getElementById("inputBox");

function addTask(){
    if(inputBox.value === ""){
        alert("Please Enter Your Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainers.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainers.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
        saveData();

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function clearItems(){
    listContainers.innerHTML = '';
}

showData();