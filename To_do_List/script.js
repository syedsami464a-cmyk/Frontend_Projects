const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if (inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // delete icon
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // Call saveData to store the updated list
}

listContainer.addEventListener("click", function(e){  
    // e refers to event (e.target = element on which event occurred)
    if(e.target.tagName === "LI"){                    
        e.target.classList.toggle("checked"); // toggle checked
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // remove li when span clicked
        saveData();
    }
}, false);

// for storing data in website
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask(); // Call showTask to load the list when the page loads
