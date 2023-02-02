const URL = 'https://itera-qa.azurewebsites.net/home/automation';

describe('Check Radio Buttons Demo', () => {
  it('Check Radio Buttons', () => {
    cy.visit(URL);
    // Check the visibility of the radio buttons
    cy.get('input#female').should('be.visible');
    cy.get('input#male').should('be.visible');
    cy.get('input#other').should('be.visible');

    // Check one of the radio buttons
    cy.get('input#male').check().should('be.checked');
    cy.get('input#female').should('not.be.checked');

    cy.get('input#female').check().should('be.checked');
    cy.get('input#male').should('not.be.checked');
  });

  it('Check Checkboxes Demo', () => {
    cy.visit(URL);
    // Check visibility of each and every checkboxes
    cy.get("input.form-check-input[type='checkbox']").should('be.visible');

    // Selecting & Unselecting all the checkboxes respectively
    cy.get("input.form-check-input[type='checkbox']")
      .check()
      .should('be.checked');
    cy.get("input.form-check-input[type='checkbox']")
      .uncheck()
      .should('not.be.checked');

    // Selecting first and last checkboxes
    cy.get("input.form-check-input[type='checkbox']")
      .first()
      .check()
      .should('be.checked');
    cy.get("input.form-check-input[type='checkbox']")
      .last()
      .check()
      .should('be.checked');
  });

  it('Hit & Trial Method', () => {
    cy.visit(URL);
    // Need to check for filter methods
    // Hit and trial methods(just checking filters methods)
    // cy.get("input.form-check-input[type='checkbox']").find("[id='tuesday']").check().should('be.checked');
    // cy.get("input.form-check-input[type='checkbox']").filter("[id='tuesday']");
  });
});
