// @ts-check
import { expect,  test } from '@playwright/test';
import { PetstorePage } from '../pages/PetstorePage.page';

const pet = {
  id: 107,
  category: {id: 1,name: "Dogs"},
  name: "SirBarksALot",
  photoUrls: ["string"],
  tags: [{id: 0,name: "string"}],
  status: "available"
}

const updatedPet = {
  id: 107,
  name: 'SirBarksALot',
  category: { id: 1, name: 'Dogs' },
  photoUrls: ['string'],
  tags: [{ id: 0, name: 'string' }],
  status: 'available',
};

test('POST request', async ({ page }) => {
  const petPage = new PetstorePage(page);
  await petPage.postPetFunction(pet);
  await expect(page.locator('.microlight').first()).toContainText(JSON.stringify(pet));
});

test('GET request', async ({ page }) => {
  const petPage = new PetstorePage(page);
  await petPage.getPetFunction('107');
});

test('PUT request', async ({ page }) => {
  const petPage = new PetstorePage(page);
  await petPage.updatePetFunction(updatedPet);
  await expect(page.locator('.microlight').first()).toContainText(JSON.stringify(updatedPet));
});

test('DELETE request', async ({ page }) => {
  const petPage = new PetstorePage(page);
  await petPage.deletePetFunction('107');
});
