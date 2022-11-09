describe('test button footer', () => {

    it('test button tentang kami', () => {
        cy.visit('https://www.dicoding.com/')
        cy.get('.d-inline-block > .font-weight-500').click()
    })

    it('test button blog', () => {
        cy.visit('https://www.dicoding.com/')
        cy.get(':nth-child(2) > dl > :nth-child(1) > .d-inline-block').click()
    })

    it('test button reward', () => {
        cy.visit('https://www.dicoding.com/')
        cy.get(':nth-child(2) > dl > :nth-child(2) > .d-inline-block').click()
    })

    it('test button showcase', () => {
        cy.visit('https://www.dicoding.com/')
        cy.get(':nth-child(2) > dl > :nth-child(3) > .d-inline-block').click()
    })

    it('test button hubungi kami', () => {
        cy.visit('https://www.dicoding.com/')
        cy.get(':nth-child(3) > dl > :nth-child(1) > .d-inline-block').click()
    })

    it('test button FAQ', () => {
        cy.visit('https://www.dicoding.com/')
        cy.get(':nth-child(3) > dl > :nth-child(2) > .d-inline-block').click()
    })
})