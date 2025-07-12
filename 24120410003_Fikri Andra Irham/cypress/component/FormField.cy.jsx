import React from 'react';
import FormField from '../../src/components/elements/FormField/FormField';
import '../../src/app/globals.css';

describe('FormField Component', () => {
  const registerMock = (name) => ({
    name: name,
    onChange: cy.spy().as('onChangeSpy'),
    onBlur: cy.spy().as('onBlurSpy'),
  });

  it('renders a standard text input with a label and placeholder', () => {
    cy.mount(
      <FormField
        id="name"
        label="Full Name"
        placeholder="Enter your name"
        register={registerMock}
      />
    );

    cy.get('label')
      .should('have.attr', 'for', 'name')
      .and('contain.text', 'Full Name');

    cy.get('input#name')
      .should('be.visible')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'placeholder', 'Enter your name');
    
    cy.get('[role="alert"]').should('not.exist');
  });

  it('renders a textarea when isTextArea prop is true', () => {
    cy.mount(
      <FormField
        id="message"
        label="Your Message"
        isTextArea={true}
        rows={6}
        register={registerMock}
      />
    );

    cy.get('input#message').should('not.exist');
    cy.get('textarea#message')
      .should('be.visible')
      .and('have.attr', 'rows', '6');
  });

  it('displays an error message and applies error styles when error prop is provided', () => {
    const error = { message: 'This field is required' };
    cy.mount(
      <FormField
        id="email"
        label="Email Address"
        register={registerMock}
        error={error}
      />
    );
    
    cy.get('[role="alert"]')
      .should('be.visible')
      .and('have.text', 'This field is required');

    cy.get('input#email')
      .should('have.attr', 'aria-invalid', 'true')
      .and('have.class', 'border-red-500')
      .and('have.class', 'animate-shake');
  });

  it('does not display an error message when error prop is not provided', () => {
    cy.mount(
      <FormField
        id="subject"
        label="Subject"
        register={registerMock}
        error={undefined}
      />
    );

    cy.get('[role="alert"]').should('not.exist');

    cy.get('input#subject')
      .should('have.attr', 'aria-invalid', 'false')
      .and('not.have.class', 'border-red-500');
  });

  it('applies custom className to the input element', () => {
    cy.mount(
      <FormField
        id="custom"
        label="Custom Field"
        register={registerMock}
        className="my-custom-class"
      />
    );

    cy.get('input#custom').should('have.class', 'my-custom-class');
  });
});