import { describe, it, expect } from 'vitest';
import { addTask, completeTask, deleteTask, getDaysUntilDeadline } from '../taskCommands.js';

describe('addTask', () => {
  it('додає нове завдання з коректними полями', () => {
    const tasks = [];
    const result = addTask(tasks, 'Купити молоко');

    expect(result.length).toBe(1);
    expect(result[0].title).toBe('Купити молоко');
    expect(result[0].done).toBe(false);
  });

  it('призначає новий id як максимальний +1', () => {
    const tasks = [{ id: 5, title: 'Старе завдання', done: false }];
    const result = addTask(tasks, 'Нове завдання');

    expect(result[1].id).toBe(6);
  });

  it('кидає помилку, якщо назва завдання порожня', () => {
    const tasks = [];
    expect(() => addTask(tasks, '')).toThrow();
  });

  it('обрізає пробіли по краях назви завдання', () => {
    const tasks = [];
    const result = addTask(tasks, '   Прибрати кімнату   ');

    expect(result[0].title).toBe('Прибрати кімнату');
  });
});

describe('completeTask', () => {
  it('позначає завдання виконаним за id', () => {
    const tasks = [{ id: 1, title: 'Тест', done: false }];
    const result = completeTask(tasks, 1);

    expect(result[0].done).toBe(true);
  });

  it('кидає помилку, якщо завдання з таким id не існує', () => {
    const tasks = [{ id: 1, title: 'Тест', done: false }];
    expect(() => completeTask(tasks, 999)).toThrow();
  });
});

describe('deleteTask', () => {
  it('видаляє завдання за id', () => {
    const tasks = [
      { id: 1, title: 'Перше', done: false },
      { id: 2, title: 'Друге', done: false },
    ];
    const result = deleteTask(tasks, 1);

    expect(result.length).toBe(1);
    expect(result[0].id).toBe(2);
  });

  it('не змінює масив, якщо id не знайдено', () => {
    const tasks = [{ id: 1, title: 'Перше', done: false }];
    const result = deleteTask(tasks, 999);

    expect(result.length).toBe(1);
  });
});

describe('getDaysUntilDeadline', () => {
  it('повертає 0, якщо дедлайн сьогодні', () => {
    const today = new Date().toISOString();
    expect(getDaysUntilDeadline(today)).toBe(0);
  });

  it('повертає негативне значення, якщо дата вже минула', () => {
    const past = new Date();
    past.setDate(past.getDate() - 3);
    expect(getDaysUntilDeadline(past.toISOString())).toBeLessThan(0);
  });
});