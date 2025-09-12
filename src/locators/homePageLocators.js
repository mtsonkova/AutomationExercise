export const HomePageLocators = (page) => ({
    mainMenu: {
        home: page.getByRole('link', {name: ' Home'}),
        products: page.getByRole('link', {name: ' Products'}),
        cart: page.getByRole('link', {name: ' Cart'}).first(),
        signupLogin: page.getByRole('link', {name: ' Signup / Login'}),
        logout: page.getByRole('link', {name: ' Logout'}),
        deleteAccount: page.getByRole('link', {name: ' Delete Account'}),
        loggedInAs: page.getByRole('link', {name:/Logged in as/i}),
    },
    //TODO category locators
    //TODO brands locators
    featuresItems: page.locator('div.features_items div.overlay-content'),
});