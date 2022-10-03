/* eslint-disable linebreak-style */
// @ts-check
import { test, expect } from '@playwright/test';

const PETSTORE_URL = 'https://petstore3.swagger.io/';
const pet = {
  id: 107,
  name: 'SirSnuggles',
  category: { id: 1, name: 'Dogs' },
  photoUrls: ['string'],
  tags: [{ id: 0, name: 'string' }],
  status: 'available',
};
const updatedName = 'SirBarksALot';

test.beforeEach(async ({ page }) => {
  await page.goto(`${PETSTORE_URL}`);
});

test.afterEach(async ({ page }) => {
  await expect(page.locator('.responses-inner > div tbody .response-col_status')).toContainText('200');
});

test('POST request', async ({ page }) => {
  await page.locator('#operations-pet-addPet').click();
  await page.locator('.btn.try-out__btn').click();
  const stringifyPet = JSON.stringify(pet);
  await page.locator('.body-param__text').fill(stringifyPet);
  await page.locator('.btn.execute.opblock-control__btn').click();
  await expect(page.locator('.microlight').first()).toContainText(pet.id.toString());
  await expect(page.locator('.microlight').first()).toContainText(pet.name);
});

test('GET request', async ({ page }) => {
  await page.locator('#operations-pet-getPetById').click();
  await page.locator('.btn.try-out__btn').click();
  await page.locator('input[placeholder="petId"]').fill('107');
  await page.locator('.btn.execute.opblock-control__btn').click();
  await expect(page.locator('.microlight').first()).toContainText(pet.id.toString());
});

test('PUT request', async ({ page }) => {
  pet.name = updatedName;
  await page.locator('#operations-pet-updatePet').click();
  await page.locator('.btn.try-out__btn').click();
  const stringifyPet = JSON.stringify(pet);
  await page.locator('.body-param__text').fill(stringifyPet);
  await page.locator('.btn.execute.opblock-control__btn').click();
  await expect(page.locator('.microlight').first()).toContainText(pet.id.toString());
  await expect(page.locator('.microlight').first()).toContainText(pet.name);
});

test('DELETE request', async ({ page }) => {
  await page.locator('#operations-pet-deletePet').click();
  await page.locator('.btn.try-out__btn').click();
  await page.locator('input[placeholder="petId"]').fill(pet.id.toString());
  await page.locator('.btn.execute.opblock-control__btn').click();
});
