const todoInput =document.getElementById('todo_input')
const addbtn=documrnt.getElementById('addbutton')
const todoList=document.getElementById('todo_list')

addbtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
      const li = document.createElement('li');
      li.classList.add('todo_item');

      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="complete"></button>
          <button class="delete">X</button>
        </div>
      `;

      todoList.appendChild(li);
      todoInput.value = '';
    }
  });

  // Handle task actions (complete or delete)
  todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const item = e.target.closest('.todo_item');
      todoList.removeChild(item);
    }

    if (e.target.classList.contains('complete')) {
      const item = e.target.closest('.todo_item');
      item.classList.toggle('completed');
    }
  });