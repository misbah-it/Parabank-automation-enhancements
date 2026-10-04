class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('index.htm');
  }
}

module.exports = { HomePage };
