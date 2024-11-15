const inputList = document.getElementById("input-List");
const listContent = document.getElementById("list-content");


function addList() {
    if (inputList.value === ""  || inputList.value === "  " || inputList.value === " "  ) {
        alert("You need to write a Task");
   
    }
    else{
let li = document.createElement("li");

        li.innerHTML = inputList.value;
        listContent.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputList.value = "";
    dataSave();
};
listContent.addEventListener("click", function (e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        dataSave();
    } 
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       dataSave()
    }
}, false);
function dataSave(){
    localStorage.setItem("data", listContent.innerHTML)
}
function showTaskList(){
    listContent.innerHTML = localStorage.getItem("data")
}
showTaskList();

