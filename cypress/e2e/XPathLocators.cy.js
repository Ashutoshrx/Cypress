const URL = 'http://localhost:3000/';

describe('Xpath Locators', () => {
  it('Find Number of Git Users', () => {
    cy.visit(URL);
    // Search ashu as input
    cy.get('input.w-full').type('ashu');

    // cy.get("//input[@type='text']").type('ashu');
    // clicking the buttion by searching the button through Xpath
    cy.get("button[type='submit']").click();
    // XPath to find number of users, you can find the xpath thorough inspect...
    // this is called chained xpath
    cy.xpath("//div[@id='root']")
      .xpath("//div[@class='container mx-auto px-4 pt-10 pb-12 bg-center']")
      .xpath("//div[@class='container align-middle']")
      .xpath("//div[@class='grid grid-cols-1 gap-12 xl:grid-cols-4 ']")
      .xpath('/div')
      .should('have.length', 0);
  });
});
