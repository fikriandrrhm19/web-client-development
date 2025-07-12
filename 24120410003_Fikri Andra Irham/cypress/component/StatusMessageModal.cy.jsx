import React from 'react';
import StatusMessageModal from '../../src/components/elements/StatusMessageModal';
import '../../src/app/globals.css';

describe('StatusMessageModal Component', () => {

  let onCloseSpy;

  beforeEach(() => {
    onCloseSpy = cy.spy().as('onCloseSpy');
  });

  it('does not render when isOpen is false', () => {
    cy.mount(
      <StatusMessageModal
        isOpen={false}
        onClose={onCloseSpy}
        message="Should not be visible"
        type="success"
      />
    );
    
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('renders a success modal with the correct message and icon', () => {
    const successMessage = "Your message was sent successfully!";
    cy.mount(
      <StatusMessageModal
        isOpen={true}
        onClose={onCloseSpy}
        message={successMessage}
        type="success"
      />
    );

    cy.get('[role="dialog"]').should('be.visible');
    cy.contains(successMessage).should('be.visible');
    
    cy.get('.text-green-500').should('exist');
    cy.get('.text-red-500').should('not.exist');
  });

  it('renders an error modal with the correct message and icon', () => {
    const errorMessage = "Something went wrong.";
    cy.mount(
      <StatusMessageModal
        isOpen={true}
        onClose={onCloseSpy}
        message={errorMessage}
        type="error"
      />
    );

    cy.get('[role="dialog"]').should('be.visible');
    cy.contains(errorMessage).should('be.visible');

    cy.get('.text-red-500').should('exist');
    cy.get('.text-green-500').should('not.exist');
  });

  it('calls onClose when the close button is clicked', () => {
    cy.mount(
      <StatusMessageModal isOpen={true} onClose={onCloseSpy} message="Test" type="success" />
    );
    
    cy.get('[aria-label="Close message"]').click();
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

  it('calls onClose when the background overlay is clicked', () => {
    cy.mount(
      <StatusMessageModal isOpen={true} onClose={onCloseSpy} message="Test" type="success" />
    );

    cy.get('[role="dialog"]').parent().click('topLeft');
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

});
