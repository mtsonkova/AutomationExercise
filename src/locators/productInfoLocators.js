export const ProductInfoLocators = (page) => ({
    productName: page.locator('.product-details h2'),
    productCategory: page.locator('.product-details p'),
    productQty: page.locator('#quantity'),
    price: page.locator('.product-information span span'),
    addToCartBtn: page.getByRole('button', {name: /Add to cart/i}),
})