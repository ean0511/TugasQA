class loginPage {
    login(username, password) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.login_btn();
    }

    getErrorMessage() {
        // OrangeHRM menampilkan error di elemen p.oxd-alert-content-text
        return cy.get('.oxd-alert-content-text');
    }
    visit() {
        // Buka Halaman Website Login
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    inputUsername(username) {
        cy.get('input[name="username"]').clear().type(username)
    }

    inputPassword(password) {
        cy.get('input[name="password"]').clear().type(password)
    }

    login_btn() {
        cy.get('button[type="submit"]').click()
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html')
    }

    verifyUsernamePasswordError() {
        cy.xpath("//h3[@data-test='error']").should(
            'contain.text',
            'Epic sadface: Username and password do not match any user in this service'
        )
    }

    verifyUsernameRequiredError() {
        cy.xpath("//h3[@data-test='error']").should(
            'contain.text',
            'Epic sadface: Username is required'
        )
    }

    verifyPasswordRequiredError() {
        cy.xpath("//h3[@data-test='error']").should(
            'contain.text',
            'Epic sadface: Password is required'
        )
    }
}

export default new loginPage()
