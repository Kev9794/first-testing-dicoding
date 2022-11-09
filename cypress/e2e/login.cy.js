describe('test login dicoding', () => {

    it('login dengan data kosong', () => {
        cy.visit('https://www.dicoding.com/login')
        cy.get(':nth-child(3) > .form-control').type(' ')
        cy.get('#login-password').type(' ')
        cy.get('.form-group.mb-4 > .dcd-btn').click()
    })

    it('login dengan data tidak valid', () => {
        cy.visit('https://www.dicoding.com/login')
        cy.get(':nth-child(3) > .form-control').type('wrongemail@gmail.com')
        cy.get('#login-password').type('wrongpassword')
        cy.get('.form-group.mb-4 > .dcd-btn').click()
    })

    it('login dengan data yang valid', () => {
        cy.visit('https://www.dicoding.com/login')
        cy.get(':nth-child(3) > .form-control').type('hxd12676@cdfaq.com')
        cy.get('#login-password').type('!wV2Lb#DkMixpk@')
        cy.get('.form-group.mb-4 > .dcd-btn').click()
    })
})