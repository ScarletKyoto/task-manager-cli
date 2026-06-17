import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TASKS_FILE = path.join(__dirname, '../data/tasks.json');

// Зчитує всі завдання з файлу
export function loadTasks() {
  const raw = fs.readFileSync(TASKS_FILE, 'utf-8');
  return JSON.parse(raw);
}

// Зберігає масив завдань у файл
export function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Додає нове завдання. Повертає оновлений масив.
export function addTask(tasks, title) {
  if (!title || title.trim() === '') {
    throw new Error('Назва завдання не може бути порожньою');
  }

  const newTask = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title: title.trim(),
    done: false,
    createdAt: new Date().toISOString(),
  };

  return [...tasks, newTask];
}

// Позначає завдання виконаним за id
export function completeTask(tasks, id) {
  const exists = tasks.some(t => t.id === id);
  if (!exists) {
    throw new Error(`Завдання з id=${id} не знайдено`);
  }
  return tasks.map(t => (t.id === id ? { ...t, done: true } : t));
}

// Видаляє завдання за id
export function deleteTask(tasks, id) {
  return tasks.filter(t => t.id !== id);
}

// Повертає кількість днів до дедлайну (для майбутнього розширення)
export function getDaysUntilDeadline(deadline) {
  const now = new Date();
  const due = new Date(deadline);
  const diffMs = due.setHours(0,0,0,0) - now.setHours(0,0,0,0);
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}