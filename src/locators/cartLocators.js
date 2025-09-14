export const CartLocators = (page) => ({
proceedToCheckoutBtn: page.locator('div.col-sm-6 a').first(),
productsTable: page.locator('#cart_info_table'),
cartProducts: page.locator('table tbody tr'),
itemImage: page.locator('tbody td.cart_product a'),
productName: page.locator('tbody td.cart_description h4 a'),
productCategory: page.locator('tbody td.cart_description p'),
productPrice: page.locator('tbody td.cart_price p'),
productQty: page.locator('tbody td.cart_quantity button'),
productTotal:page.locator('tbody td.cart_total p'),
deleteProduct: page.locator('tbody td.cart_delete a'),
emptyCartMsg: page.locator('#empty_cart p b'),
checkoutModal: {
    loginRegisterLink: page.locator('.modal-body p a'),
    continueOnCartBtn: page.locator('.modal-footer button'),
},
});