describe('Contact Page E2E Test', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Hydration failed')) {
      return false;
    }
    return true;
  });

  it('should successfully submit the form and show a success message', () => {
    cy.intercept('POST', '/api/contact', {
      statusCode: 200,
      body: { message: 'Message sent successfully!' },
    }).as('successfulSubmission');

    cy.visit('/contact');

    cy.get('input#fullName').type('John Doe');
    cy.get('input#email').type('johndoe@example.com');
    cy.get('input#subject').type('Inquiry about a Project');
    cy.get('textarea#message').type('This is a test message from a Cypress E2E test.');

    cy.get('button[type="submit"]').click();

    cy.wait('@successfulSubmission');

    cy.get('[role="dialog"]')
      .should('be.visible')
      .and('contain.text', 'Message sent successfully!');
  });

  it('should show an error message if the form submission fails', () => {
    cy.intercept('POST', '/api/contact', {
      statusCode: 500,
      body: { message: 'Failed to send message. Please try again later.' },
    }).as('failedSubmission');

    cy.visit('/contact');
    cy.get('input#fullName').type('Jane Doe');
    cy.get('input#email').type('janedoe@example.com');
    cy.get('input#subject').type('Urgent Matter');
    cy.get('textarea#message').type('Another test message.');

    cy.get('button[type="submit"]').click();

    cy.wait('@failedSubmission');

    cy.get('[role="dialog"]')
      .should('be.visible')
      .and('contain.text', 'Failed to send message. Please try again later.');
  });

  it('should display validation errors for empty required fields', () => {
    cy.visit('/contact');

    cy.get('button[type="submit"]').click();

    cy.get('input#fullName')
      .siblings('[role="alert"]')
      .should('be.visible');

    cy.get('input#email')
      .siblings('[role="alert"]')
      .should('be.visible');
  });

});
