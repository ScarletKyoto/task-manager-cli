import { test, expect } from '@playwright/test';

test.describe('Task Manager - критичний шлях користувача', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('додає нове завдання через форму і бачить його у списку', async ({ page }) => {
    await page.fill('#task-input', 'Підготувати звіт');
    await page.click('button[type="submit"]');

    await expect(page.locator('#task-list li')).toHaveCount(1);
    await expect(page.locator('#task-list')).toContainText('Підготувати звіт');
  });

  test('не додає завдання з порожньою назвою', async ({ page }) => {
    await page.click('button[type="submit"]');

    await expect(page.locator('#task-list li')).toHaveCount(0);
  });

  test('позначає завдання виконаним після натискання кнопки', async ({ page }) => {
    await page.fill('#task-input', 'Купити продукти');
    await page.click('button[type="submit"]');

    const task = page.locator('[data-testid="task-1"]');
    await task.locator('button').click();

    await expect(task).toHaveClass(/done/);
  });
});