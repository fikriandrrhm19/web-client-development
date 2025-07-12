import React from 'react';
import DetailModal from '../../src/components/elements/DetailModal';
import { Star } from 'lucide-react';
import '../../src/app/globals.css';

describe('DetailModal Component', () => {

  let onCloseSpy;

  beforeEach(() => {
    onCloseSpy = cy.spy().as('onCloseSpy');
  });

  it('does not render when isOpen is false', () => {
    cy.mount(<DetailModal isOpen={false} onClose={onCloseSpy} title="Test Modal" />);
    
    cy.get('[role="dialog"]').should('not.exist');
  });

  it('renders correctly with title, icon, and children when isOpen is true', () => {
    cy.mount(
      <DetailModal
        isOpen={true}
        onClose={onCloseSpy}
        title="Project Details"
        icon={Star}
      >
        <p>This is the detailed description of the project.</p>
      </DetailModal>
    );

    cy.get('[role="dialog"]').should('be.visible');
    cy.get('#modal-title').should('have.text', 'Project Details');
    cy.get('[role="dialog"]').find('svg').should('be.visible');
    cy.contains('p', 'This is the detailed description of the project.').should('be.visible');
  });

  it('calls onClose when the close button is clicked', () => {
    cy.mount(<DetailModal isOpen={true} onClose={onCloseSpy} title="Test" />);
    
    cy.get('[aria-label="Close modal"]').click();
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

  it('calls onClose when the background overlay is clicked', () => {
    cy.mount(<DetailModal isOpen={true} onClose={onCloseSpy} title="Test" />);

    cy.get('.fixed.inset-0').click('topLeft', { force: true });
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

  it('calls onClose when the "Escape" key is pressed', () => {
    cy.mount(<DetailModal isOpen={true} onClose={onCloseSpy} title="Test" />);

    cy.get('[role="dialog"]').type('{esc}');
    cy.get('@onCloseSpy').should('have.been.calledOnce');
  });

  it('does NOT call onClose when the modal content is clicked', () => {
    cy.mount(<DetailModal isOpen={true} onClose={onCloseSpy} title="Test" />);

    cy.get('[role="dialog"]').click();
    cy.get('@onCloseSpy').should('not.have.been.called');
  });

});
