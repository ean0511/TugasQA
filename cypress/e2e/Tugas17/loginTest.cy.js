import LoginPage from './LoginPage.js';

describe('Login Tests with POM', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('successLogin', () => {
    LoginPage.login('Admin', 'admin123');

    cy.url().should('include', '/dashboard');
  });

  it('failedLogin - InvalidUsername', () => {
    LoginPage.login('wrongUser', 'admin123');
    LoginPage.getErrorMessage().should('have.text', 'Invalid credentials');
  });

  it('failedLogin - InvalidPassword', () => {
    LoginPage.login('Admin', 'wrongPass');
    LoginPage.getErrorMessage().should('have.text', 'Invalid credentials');
  });


});
