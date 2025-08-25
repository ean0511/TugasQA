/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Login berhasil dengan data valid', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.intercept('GET','**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
    cy.url().should('include', '/dashboard')
  })

  it('Login gagal dengan password salah', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  }) 

  it('Login gagal dengan username salah', () => {
    cy.get('input[name="username"]').type('wrongusername')
    cy.get('input[name="password"]').type('admin123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login gagal dengan username & password salah', () => {
    cy.get('input[name="username"]').type('wrongusername')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login gagal tanpa username', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-input-group__message').should('contain', 'Required')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login gagal tanpa password', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-input-group__message').should('contain', 'Required')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login gagal tanpa username & password', () => {
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-input-group__message').should('contain', 'Required')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login gagal dengan username spasi', () => {
    cy.get('input[name="username"]').type(' ')
    cy.get('input[name="password"]').type('admin123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('contain', 'Required')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login gagal dengan password spasi', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type(' ')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message').should('contain', 'Required')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })

  it('Login dengan username huruf kapital', () => {
    cy.get('input[name="username"]').type('ADMIN')
    cy.get('input[name="password"]').type('admin123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.wait('@actionSummary').its('response.statusCode').should('eq', 200)
    cy.url().should('include', '/dashboard')
  })

  it('Login dengan password huruf kapital', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('ADMIN123')
    cy.intercept('GET', '**/action-summary').as('actionSummary')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/auth/login')
    cy.get('.oxd-alert-content').should('contain', 'Invalid credentials')
    cy.wait(1000) // beri waktu jika ada request
    cy.get('@actionSummary.all').should('have.length', 0)
  })
})