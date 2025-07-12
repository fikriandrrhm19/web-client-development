import React from 'react';
import Button from '../../src/components/elements/Button/Button.jsx';
import '../../src/app/globals.css'; 

describe('Button Component', () => {
  it('renders with children text', () => {
    cy.mount(<Button>Click Me</Button>);
    cy.contains('Click Me').should('be.visible');
  });

  it('applies custom className', () => {
    cy.mount(<Button className="custom-test-class">Test</Button>);
    cy.get('button').should('have.class', 'custom-test-class');
  });

  it('is clickable when not disabled', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button onClick={onClickSpy}>Clickable</Button>);
    cy.get('button').click();
    cy.get('@onClickSpy').should('have.been.calledOnce');
  });

  it('is disabled when disabled prop is true', () => {
    const onClickSpy = cy.spy().as('onClickSpy');
    cy.mount(<Button disabled onClick={onClickSpy}>Disabled Button</Button>);
    cy.get('button').should('be.disabled');
    cy.get('button').should('have.class', 'opacity-75');
    cy.get('button').should('have.class', 'cursor-not-allowed');
    cy.get('button').click({ force: true });
    cy.get('@onClickSpy').should('not.have.been.called');
  });

  it('is disabled and shows loading state when isLoading is true', () => {
    cy.mount(<Button isLoading>Loading...</Button>);
    cy.get('button').should('be.disabled');
    cy.get('button').should('have.class', 'opacity-75');
    cy.get('button').should('have.class', 'cursor-not-allowed');
    cy.contains('Loading...').should('be.visible');
  });

  it('renders with correct type attribute', () => {
    cy.mount(<Button type="submit">Submit Form</Button>);
    cy.get('button').should('have.attr', 'type', 'submit');
  });

  it('has hover effects (visual check - no direct assertion)', () => {
    cy.mount(<Button>Hover Me</Button>);
    cy.get('button').trigger('mouseover');
  });
});
