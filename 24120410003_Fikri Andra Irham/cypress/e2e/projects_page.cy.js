describe('Full E2E Flow: Navigation, Multi-Filtering, Sorting, and Project Click', () => {

  Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('Hydration failed')) {
      return false;
    }
    return true;
  });

  it('should allow a comprehensive user journey on the projects page', () => {
    cy.visit('/');
    cy.get('nav').contains('a', 'Projects').click();
    cy.url().should('include', '/projects');
    cy.viewport('macbook-15');

    cy.get('div.grid > div', { timeout: 10000 }).should('have.length.at.least', 1);
    
    cy.get('div.grid > div').its('length').then((initialCount) => {
      
      cy.contains('button', 'App').click();
      cy.wait(1000);
      cy.get('div.grid > div').its('length').should('be.lessThan', initialCount);

      cy.contains('div.grid > div', 'Personal Portfolio Website').within(() => {
        cy.contains('a', 'View Project')
          .should('have.attr', 'href', 'https://fai.my.id');
      });

      cy.contains('button', 'IoT').click();
      cy.wait(1000);
      cy.get('div.grid > div').its('length').should('be.lessThan', initialCount);

      cy.contains('button', 'Clear').click();
      cy.wait(1000);
      cy.get('div.grid > div').its('length').should('equal', initialCount);

      cy.get('div.grid > div').first().invoke('text').then((firstProjectText) => {
        cy.get('.xl-tab\\:flex select').select('oldest');
        cy.wait(1000);
        cy.get('div.grid > div').first().invoke('text').should('not.equal', firstProjectText);
      });
    });
  });
});
