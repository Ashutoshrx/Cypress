// Iframes- we have to install the pulgin where we can check the documentation from the official website
// of cypress.(Ignoring for now)
const HOME_URL = 'https://the-internet.herokuapp.com/iframe';

describe('Handling Frames', () => {
  it('Managing IFrames with Iframe Plugin', () => {
    cy.visit(HOME_URL);
    cy.get('.tox-edit-area>iframe').then((element) => {
      cy.log(element.prop('id'));
    });
  });
});
