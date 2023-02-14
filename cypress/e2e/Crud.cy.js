describe('CRUD Operation using Cypress', () => {
  it('GET REQUEST', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/get',
      // headers: {}      Not needed for now
    }).then((response) => {
      expect(response).not.to.be.null;
      cy.log(JSON.stringify(response));
      //   expect(response.statusCode).to.equal(200);
      expect(response.body).to.have.property('url');
    });
  });

  it('POST REQUEST', () => {
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      body: {
        firstName: 'Ashutosh',
        lastName: 'Satapathy',
        createdTime: '2023-02-14 05:27:21.240752',
      },
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.equal(200);
    });
  });

  it('POST REQUEST THROUGH EXTERNAL TEST DATA', () => {
    cy.fixture('crud.json').then((data) => {
      cy.request({
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: data,
      }).then((response) => {
        /*How to check the response body's value*/
        cy.log(JSON.stringify(response.body.json));
        expect(response.body.json).to.deep.equal(data)
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('json');
      });
    });
  });
});
