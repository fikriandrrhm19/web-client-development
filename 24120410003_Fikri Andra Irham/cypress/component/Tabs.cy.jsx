import React from 'react';
import Tabs from '../../src/components/elements/Tabs/Tabs';
import '../../src/app/globals.css';

const mockCategories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'devops', name: 'DevOps' },
];

describe('Tabs Component (Desktop View)', () => {
  let childrenSpy;

  beforeEach(() => {
    cy.viewport('macbook-15');
    childrenSpy = cy.spy().as('childrenSpy');
  });

  it('renders with "All" tab active by default', () => {
    cy.mount(<Tabs categories={mockCategories}>{childrenSpy}</Tabs>);

    cy.contains('button', 'All').should('have.class', 'bg-accent-primary');
    cy.contains('button', 'Frontend').should('not.have.class', 'bg-accent-primary');

    cy.get('@childrenSpy').should('have.been.calledWith', ['all'], 'newest');
    cy.contains('button', 'Clear').should('be.disabled');
  });

  it('activates a tab on click', () => {
    cy.mount(<Tabs categories={mockCategories}>{childrenSpy}</Tabs>);

    cy.contains('button', 'Frontend').click();

    cy.contains('button', 'Frontend').should('have.class', 'bg-accent-primary');
    cy.contains('button', 'All').should('not.have.class', 'bg-accent-primary');
    cy.get('@childrenSpy').should('have.been.calledWith', ['frontend'], 'newest');
    cy.contains('button', 'Clear').should('not.be.disabled');
  });

  it('allows selecting multiple tabs up to the limit', () => {
    cy.mount(<Tabs categories={mockCategories} maxSelectedCategories={2}>{childrenSpy}</Tabs>);

    cy.contains('button', 'Frontend').click();
    cy.contains('button', 'Backend').click();

    cy.contains('button', 'Frontend').should('have.class', 'bg-accent-primary');
    cy.contains('button', 'Backend').should('have.class', 'bg-accent-primary');
    cy.get('@childrenSpy').should('have.been.calledWith', ['frontend', 'backend'], 'newest');
  });

  it('shows a warning and prevents selection when max category limit is reached', () => {
    cy.mount(<Tabs categories={mockCategories} maxSelectedCategories={2}>{childrenSpy}</Tabs>);

    cy.contains('button', 'Frontend').click();
    cy.contains('button', 'Backend').click();
    cy.contains('button', 'DevOps').click();

    cy.contains('You can select a maximum of 2 categories.').should('be.visible');
    cy.contains('button', 'DevOps').should('not.have.class', 'bg-accent-primary');
  });

  it('clears all filters when "Clear" button is clicked', () => {
    cy.mount(<Tabs categories={mockCategories}>{childrenSpy}</Tabs>);

    cy.contains('button', 'Frontend').click();
    cy.contains('button', 'Backend').click();
    cy.contains('button', 'Clear').click();

    cy.contains('button', 'All').should('have.class', 'bg-accent-primary');
    cy.contains('button', 'Frontend').should('not.have.class', 'bg-accent-primary');
    cy.contains('button', 'Clear').should('be.disabled');
    cy.get('@childrenSpy').should('have.been.calledWith', ['all'], 'newest');
  });

  it('deactivates a tab when an active tab is clicked', () => {
    cy.mount(<Tabs categories={mockCategories}>{childrenSpy}</Tabs>);

    cy.contains('button', 'Frontend').click();
    cy.contains('button', 'Frontend').click();

    cy.contains('button', 'All').should('have.class', 'bg-accent-primary');
    cy.contains('button', 'Frontend').should('not.have.class', 'bg-accent-primary');
    cy.get('@childrenSpy').should('have.been.calledWith', ['all'], 'newest');
  });

});
