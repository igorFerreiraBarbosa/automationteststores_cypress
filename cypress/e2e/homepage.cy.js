
describe('HomePage', () => {
    let productsitemsBySection = 4

    const labels = [
        'About Us',
        'Contact Us',
        'Testimonials',
        'Newsletter Signup'
    ]

    it('validar que estou na home page', () => {
        cy.accessHomePage()
    });

    it('validar quantidade de itens na seção featured', () => {
        cy.checkItemsOnFeaturedSection(productsitemsBySection)
    });

    it('validar quantidade de itens na seção latest', () => {
        cy.checkItemsOnLatestSection(productsitemsBySection)
    });

    it('validar quantidade de itens na seção bestsellers', () => {
        cy.checkItemsOnBestsellersSection(productsitemsBySection)
    });

    it('validar quantidade de itens na seção specials', () => {
        cy.checkItemsOnSpecialsSection(productsitemsBySection)
    });
    
    it('Validar opções About Us, Contact Us. Testimonials, Newsletter Signup do footer ', () => {
        cy.checkItemsOnFooterSection(labels)
    })

});