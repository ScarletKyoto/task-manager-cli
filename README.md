# Task Manager CLI

[![CI/CD Pipeline](https://github.com/ScarletKyoto/task-manager-cli/actions/workflows/main.yml/badge.svg)](https://github.com/ScarletKyoto/task-manager-cli/actions/workflows/main.yml)

🌐 **Live Demo:** [task-manager-cli-64m2.vercel.app](https://task-manager-cli-64m2.vercel.app/)

Консольний застосунок для управління особистими завданнями (To-Do List) прямо з терміналу. Дозволяє швидко додавати, переглядати, позначати виконаними та видаляти завдання без потреби відкривати браузер чи громіздкий GUI.

## Стек технологій

- **Node.js** — середовище виконання
- **JavaScript (ES Modules)** — основна логіка
- **JSON** — локальне зберігання даних (`src/data/tasks.json`)

## Структура проєкту

```
task-manager-cli/
├── src/
│   ├── commands/
│   │   └── taskCommands.js   # логіка команд (додати, видалити, переглянути)
│   ├── data/
│   │   └── tasks.json        # локальне "сховище" завдань
│   └── index.js               # точка входу в застосунок
├── .gitignore
├── package.json
└── README.md
```

## Встановлення та запуск

```bash
# Клонувати репозиторій
git clone https://github.com/ScarletKyoto/task-manager-cli.git

# Перейти в папку проєкту
cd task-manager-cli

# Встановити залежності
npm install

# Запустити застосунок
npm start
```

## Статус проєкту

🚧 В розробці (MVP) — навчальний проєкт у рамках курсу з управління програмними проєктами.