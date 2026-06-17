import { loadTasks, saveTasks, addTask, completeTask, deleteTask } from './commands/taskCommands.js';

const [, , command, ...args] = process.argv;

function printTasks(tasks) {
  if (tasks.length === 0) {
    console.log('Список завдань порожній.');
    return;
  }
  tasks.forEach(t => {
    const status = t.done ? '[x]' : '[ ]';
    console.log(`${status} #${t.id} ${t.title}`);
  });
}

function main() {
  const tasks = loadTasks();

  switch (command) {
    case 'add': {
      const title = args.join(' ');
      const updated = addTask(tasks, title);
      saveTasks(updated);
      console.log(`Завдання додано: "${title}"`);
      break;
    }
    case 'list': {
      printTasks(tasks);
      break;
    }
    case 'done': {
      const id = parseInt(args[0], 10);
      const updated = completeTask(tasks, id);
      saveTasks(updated);
      console.log(`Завдання #${id} позначено виконаним`);
      break;
    }
    case 'delete': {
      const id = parseInt(args[0], 10);
      const updated = deleteTask(tasks, id);
      saveTasks(updated);
      console.log(`Завдання #${id} видалено`);
      break;
    }
    default: {
HEAD
      console.log('Команди: add, list, done, delete (версії A+B об\'єднано)');
feature/conflict-b
    }
  }
}

main();