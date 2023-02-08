import 'cypress-file-upload';

describe('File Uploads', () => {
  it('Single File Upload', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    // Keep the file in the fixtures folder if you want to upload them
    cy.get('input#file-upload').attachFile('test.txt');
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('#uploaded-files').should('be.visible');
  });

  it('File Upload-Rename', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    // Keep the file in the fixtures folder if you want to upload them
    cy.get('input#file-upload').attachFile({
      filePath: 'test.txt',
      fileName: 'Renamed.txt',
    });
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('#uploaded-files').should('be.visible');
  });

  it('File Upload-Drag & drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    // Keep the file in the fixtures folder if you want to upload them
    cy.get('.dz-success-mark>span').should('not.be.visible');
    cy.get('input#file-upload').attachFile('test.txt', {
      subjectType: 'drag-n-drop',
    });
    // cy.get('#file-submit').click();
    cy.wait(3000);
    // cy.get('.dz-success-mark>span').should('be.visible');
  });

  it('Multiple File Upload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    // Keep the file in the fixtures folder if you want to upload them
    cy.get('input#filesToUpload').attachFile(['test.txt', 'test2.txt']);
    // cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('#fileList > :nth-child(2)').should('be.visible');
  });

//   it('File Upload-shadow down', () => {});
});
