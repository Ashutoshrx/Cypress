const URL1 = 'https://www.dummyticket.com/dummy-ticket-for-visa-application/';
const URL2 = 'https://itera-qa.azurewebsites.net/home/automation';
const WIKI_URL = 'https://www.wikipedia.org/';

describe('Handle Dropdowns', () => {
  it('Dropdown with select', () => {
    cy.visit(URL2);
    cy.get('.custom-select').select('Turkey').should('have.value', '3');
  });

  it('Dropdown without select', () => {
    cy.visit(URL1);
    let countryName = 'Iraq';
    cy.get('#select2-billing_country-container').click();

    // search input tag and type the country name and click enter
    cy.get('.select2-search__field').type(countryName).type('{enter}');

    // Asserting
    cy.get('#select2-billing_country-container').should(
      'have.text',
      countryName
    );
  });

  it('Auto Suggest Dropdown', () => {
    cy.visit(WIKI_URL);
    let enterValue = 'Banga';
    cy.get('#searchInput').type(enterValue);
    cy.xpath('//a[@class="suggestion-link"]').contains('Bangalore').click();
    cy.get('span.mw-page-title-main').contains('Bangalore');
    cy.url().should('include', 'Bangalore');
  });

  it('Dynamic Dropdown', () => {
    cy.visit('https://www.google.com/');
    cy.get("input[name='q']").type('cypress automation');

    // Wait for the server to load the dropdown
    cy.wait(4000);

    // Find total number of suggestions
    cy.get('div.wM6W7d>span').should('have.length', '11');

    // Use of each() method, works same as line 31, but with a better approach (JQuery Function)
    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
      if ($el.text() == 'cypress automation salary in india') {
        cy.wrap($el).click();
      }
    });

    // Assertion
    cy.get('input[name="q"]').should(
      'have.value',
      'cypress automation salary in india'
    );
  });
});
