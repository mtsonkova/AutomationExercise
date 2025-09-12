export const HomePageLocators = (page) => ({
    mainMenu: {
        home: page.getByRole('link', {name: /Home/}),
        products: page.getByRole('link', {name: /Products/}),
        cart: page.getByRole('link', {name: /Cart/}).first(),
        signupLogin: page.getByRole('link', {name: /Signup \/ Login/}),
        logout: page.getByRole('link', {name: /Logout/}),
        deleteAccount: page.getByRole('link', {name: /Delete Account/}),
        loggedInAs: page.getByRole('link', {name:/Logged in as/}),
    },
    //TODO category locators
    //TODO brands locators
    featuresItems: page.locator('.productinfo'),
    productPrice: page.locator('.overlay-content h2'),
    productName: page.locator('.overlay-content p'),
    addToCartBtn: page.locator('.overlay-content a'),
    viewProduct: page.locator('div.choose a'),
    
    cartModal: {
        header: page.locator('.modal-header h4'),
        viewCart: page.locator('.modal-body a'),
        continueShoppingBtn: page.getByRole('.modal-footer button'),
    }
});