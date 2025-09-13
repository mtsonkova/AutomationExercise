export const ProductsPageLocators = (page) => ({
searchBox: page.locator('#search_product'),
searchBtn: page.locator('#submit_search'),
searchResult: page.locator('.features_items .single-products'),
});