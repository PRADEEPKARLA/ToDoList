function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.innerHTML = taskInput.value + " <span class='delete' onclick='removeTask(this)'>x</span>";
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  
  function removeTask(task) {
    task.parentNode.remove();
  }