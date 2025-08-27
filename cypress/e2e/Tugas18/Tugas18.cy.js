/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        //
    })

    // GET /resources
    it('Test API GET Resource', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/buah',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data[0].id).to.eq(1)
            expect(response.body.data).to.not.be.null
        })
    })

    // GET /resources/1
    it('Test API GET Resource Dengan ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/buah/1',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(1)
        })
    })

    // PUT /resources
    it('Test API Update Resource', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/buah/1',
            body: {
                "name": "apel bukan android",
                "color": "magenta"
            },
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.not.be.null
                expect(response.body.name).to.eq("apel bukan android")
            })
    })

    // DELETE /resources/1
    it('Test API DELETE Resource', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/buah/1',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then((response) => {
                expect(response.status).to.eq(204)
                expect(response.body).to.not.be.null
            })
    })

    // GET /users
    it('Test API GET Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            paramas: {
                page: 1,
                per_page: 6
            }

        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(1)
            expect(response.body.data).to.not.be.null
        })
    })

    // GET /users/1 
    it('Test API GET Users by ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/1',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(1)
            expect(response.body.data).to.not.be.null
        })
    })

    // PATCH /users/1 
    it('Test API PATCH Users by ID', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/1',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                "name": "cerulean",
                "year": "2000",
                "color": "#98B2D1",
                "pantone_value": "15-4020"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.year).to.eq("2000")
            expect(response.body).to.not.be.null
        })
    })

    // DELETE /users/1
    it('Test API DELETE Users by ID', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/1',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },

        }).then((response) => {
            expect(response.status).to.eq(204)
            expect(response.body).to.not.be.null
        })
    })

    // GET /login
    it('Test API LOGIN', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                "email": "george.bluth@reqres.in",
                "password": "123",
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    // GET /Logput
    it('Test API LOGOUT', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/logout',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
        })
    })
})