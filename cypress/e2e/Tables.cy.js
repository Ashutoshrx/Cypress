describe('Handling Tables', () => {
  beforeEach('Login', () => {
    const URL = 'https://demo.opencart.com/admin/index.php?route=common/login';
    cy.visit(URL);
    cy.get("input[name='username']").type('demo');
    cy.get("input[name='password']").type('demo');
    cy.get("button[type='submit']").click();
    // After logging in, close the alert window
    cy.get("button[data-bs-dismiss='modal']").click();
    // Customers->Customer
    cy.get("li[id='menu-customer']>a").click();
    // Assertion
    cy.get("li[id='menu-customer']>ul[id='collapse-5']>li").should(
      'have.length',
      '5'
    );
    // Click customer sub-item/child-item
    cy.get("li[id='menu-customer']>ul[id='collapse-5']>li:first-child").click();
  });

  it('Check number of rows & cols', () => {
    // Capture total number of rows
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      'have.length',
      10
    );
    // Capturing total number of cols
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should('have.length', 7);
    // Capturing total number of cells (rows*cols)
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr>td"
    ).should('have.length', 70);
  });

  it('Check cell data from specific row & col', () => {
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr:nth-child(7)>td:nth-child(3)"
    ).contains('neha@gmail.com');
  });

  it('Read all the rows & cols data from the first page', () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get('td').each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.skip('Find total Pages', () => {
    let totalLength = '';
    // Get total number of pages
    cy.get("div[class='col-sm-6 text-end']").then((i) => {
      let text = i.text();
      // let totalLength = text.substring(text.length-10, text.length-7);
      totalLength = text.substring(
        text.indexOf('(') + 1,
        text.indexOf('Pages') - 1
      );
      cy.log(totalLength);
      assert.equal(totalLength, 980);
    });
  });

  it.only('Find all data from all pages', () => {
    let findAllCellValueFromTable = () => {
      // iterate through all rows
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
        ($row, index, $rows) => {
          // cy.log($rows.text());
          cy.wrap($row).within(() => {
            // iterate through cols
            cy.get('td').each(($col, index, $cols) => {
              cy.log($col.text());
            });
          });
        }
      );
    };

    let totalPages = 5;
    for (let i = 1; i < totalPages; i++) {
      if (totalPages > 1) {
        cy.log('The active page is:' + i);
        // Click on each page number
        cy.get("ul[class='pagination']>li:nth-child(" + i + ')').click();
        cy.wait(2000);
        findAllCellValueFromTable();
      }
    }
  });
});
