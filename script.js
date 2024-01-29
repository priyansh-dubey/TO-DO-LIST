const inputText = document.getElementById("inputText");
const listContainer = document.getElementById("listContainer");

function addTask(){
    if(inputText.value ===""){

        alert("You Must Have To Enter Some Task.");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Delete";
        li.appendChild(span);
       

    }
    inputText.value ="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


