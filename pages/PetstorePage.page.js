/* eslint-disable linebreak-style */

exports.PetstorePage = class PetstorePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://petstore3.swagger.io/');
  }

  async startPostPet() {
    await this.page.locator('id=operations-pet-addPet').click();
  }

  async startGetPet() {
    await this.page.locator('id=operations-pet-getPetById').click();
  }

  async startUpdatePet() {
    await this.page.locator('id=operations-pet-updatePet').click();
  }

  async startDeletePet() {
    await this.page.locator('id=operations-pet-deletePet').click();
  }

  async clickTryoutButton() {
    await this.page.locator('.btn.try-out__btn').click();
  }

  async clickExecuteButton() {
    await this.page.locator('.btn.execute.opblock-control__btn').click();
  }

  async fillInPetId(petId) {
    await this.page.locator('input[placeholder="petId"]').fill(petId);
  }

  async fillTextBody(pet) {
    await this.page.locator('.body-param__text').fill(pet);
  }

  async postPetFunction(pet) {
    await this.goto();
    await this.startPostPet();
    await this.clickTryoutButton();
    const stringifyPet = JSON.stringify(pet);
    await this.fillTextBody(stringifyPet);
    await this.clickExecuteButton();
  }

  async getPetFunction(id) {
    await this.goto();
    await this.startGetPet();
    await this.clickTryoutButton();
    await this.fillInPetId(id);
    await this.clickExecuteButton();
  }

  async updatePetFunction(pet) {
    await this.goto();
    await this.startUpdatePet();
    await this.clickTryoutButton();
    const stringifyPet = JSON.stringify(pet);
    await this.fillTextBody(stringifyPet);
    await this.clickExecuteButton();
  }

  async deletePetFunction(id) {
    await this.goto();
    await this.startDeletePet();
    await this.clickTryoutButton();
    await this.fillInPetId(id);
    await this.clickExecuteButton();
  }
};
