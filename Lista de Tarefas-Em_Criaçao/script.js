function addTask() {
    var taskInput = document.querySelector('#newTask input');
    var taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      var newTaskElement = document.createElement('li');
      newTaskElement.innerHTML = `
        <label>
          <input type="checkbox" id="check-tasks">
          <p>${taskText}</p>
        </label>
        <div class="delete" onclick="deleteTask(this)">X</div>
      `;
  
      var tasksContainer = document.querySelector('.tasks');
      tasksContainer.appendChild(newTaskElement);
  
      taskInput.value = '';
    }
  }
  
  function deleteTask(element) {
    var taskItem = element.closest('li');
    taskItem.remove();
  }
  
  var taskInput = document.querySelector('#newTask input');
  taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
  