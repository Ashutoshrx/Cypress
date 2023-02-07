require('@4tw/cypress-drag-drop');

describe('Mouse Operations', () => {
  it('Mouse Hover', () => {
    cy.visit('https://demo.opencart.com/');
    cy.get(
      'body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)'
    ).should('not.be.visible');
    cy.get('.nav > :nth-child(1) > .dropdown-toggle')
      .trigger('mouseover')
      .click();
    cy.get("a[class='nav-link']").should('be.visible');
  });
  it('Right CLick', () => {
    // For right click
    // cy.get('').trigger('contextmenu')------------Approach-1
    // cy.get('').rightclick()------------Approach-2
  });
  it('Double Click', () => {
    // For double click
    // cy.get('').trigger('dblclick')------------Approach-1
    // cy.get('').dblclick()------------Approach-2
  });

  it('Drag & drop using plugin', () => {
    cy.visit(
      'http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html'
    );
    cy.wait(3000);
    cy.get('#box7').drag('#box107', { force: true });
    cy.wait(3000);
  });
  it.only('Scrolling page', () => {
    cy.visit('https://www.worldometers.info/geography/flags-of-the-world/');
    cy.xpath("//img[@src='/img/flags/small/tn_in-flag.gif']").scrollIntoView({
      duration: 3000,
    });
    cy.xpath("//img[@src='/img/flags/small/tn_in-flag.gif']").should(
      'be.visible'
    );
  });
});