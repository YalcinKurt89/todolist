function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task === "") {
      alert("Please enter a task.");
      return;
    }

    var list = document.getElementById("taskList");
    var li = document.createElement("li");
    var completeButton = document.createElement("button");
    var taskText = document.createElement("span");

    completeButton.className = "complete-button";
    completeButton.onclick = function() {
      toggleCompleted(taskText);
      toggleCompleted(completeButton);
    };

    taskText.appendChild(document.createTextNode(task));

    li.appendChild(completeButton);
    li.appendChild(taskText);
    list.appendChild(li);

    input.value = "";
}
  
function toggleCompleted(taskText) {
    taskText.classList.toggle("completed");
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var addButton = document.querySelector(".add-button");
      addButton.click();
    }
}