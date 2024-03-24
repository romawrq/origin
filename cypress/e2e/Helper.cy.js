describe('Order', () => {
  it('Must order', () => {

    cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/')
    const productName= 'Banana Juice'; //

    // Используем хелпер функцию для поиска товара по названию
    cy.searchProductByName(productName);

    // Находим товар по тексту названия и кликаем на него
    cy.contains('.product a', productName).click();

    // Добавляем товар в корзину
    cy.get('#addToCartButton').click();

    // Проверяем, что товар добавлен в корзину успешно
    cy.contains('.mat-badge-content', '1').should('exist'); // Проверяем, что в корзине 1 товар
  })
})
