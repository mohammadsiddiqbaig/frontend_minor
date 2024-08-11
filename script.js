

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
             <button class="status-btn">Not Started</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        
        // Add event listeners for edit and delete buttons
        li.querySelector('.status-btn').addEventListener('click', () => updateStatus(li));
        li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(li));
        
        taskList.appendChild(li);
        
    }

    // Function to edit a task
    function editTask(taskItem) {
        const taskText = taskItem.querySelector('.task-text');
        const newText = prompt('Edit task', taskText.textContent);
        if (newText) {
            taskText.textContent = newText;
            
        }
    }

    // Function to delete a task
    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
        
    }

    // Function to update task status
    function updateStatus(taskItem) {
        const statusButton = taskItem.querySelector('.status-btn');
        if (statusButton.textContent === 'Not Started') {
            statusButton.textContent = 'In Progress';
        } else if (statusButton.textContent === 'In Progress') {
            statusButton.textContent = 'Completed';
        } else {
            statusButton.textContent = 'Not Started';
        }
    }

    // Event listener for add task button
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });
  
    
});
