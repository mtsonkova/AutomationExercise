export const CartLocators = (page) => ({
proceedToCheckoutBtn: page.getByRole('link', {name: 'Proceed To Checkout'}),
productsTable: page.locator('#cart_info_table'),
itemImage: page.locator('tbody td.cart_product a'),
productName: page.locator('tbody td.cart_description h4 a'),
productCategory: page.locator('tbody td.cart_description p'),
productPrice: page.locator('tbody td.cart_price p'),
productQty: page.locator('tbody td.cart_quantity button'),
productTotal:page.locator('tbody td.cart_total p'),
deleteProduct: page.locator('tbody td.cart_delete a'),
emptyCartMsg: page.locator('#empty_cart p b'),
});