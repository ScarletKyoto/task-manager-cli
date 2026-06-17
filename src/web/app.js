document.getElementById('app-status').textContent = import.meta.env.VITE_APP_STATUS;

let tasks = [];

function render() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.dataset.testid = `task-${task.id}`;
    if (task.done) li.classList.add('done');

    const span = document.createElement('span');
    span.textContent = task.title;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = '✔';
    doneBtn.dataset.testid = `done-${task.id}`;
    doneBtn.onclick = () => {
      tasks = tasks.map(t => t.id === task.id ? { ...t, done: true } : t);
      render();
    };

    li.appendChild(span);
    li.appendChild(doneBtn);
    list.appendChild(li);
  });
}

document.getElementById('add-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('task-input');
  const title = input.value.trim();

  if (!title) return;

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title,
    done: false,
  };

  tasks = [...tasks, newTask];
  input.value = '';
  render();
});

render();