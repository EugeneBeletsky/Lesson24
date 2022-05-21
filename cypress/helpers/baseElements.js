class BaseElements{
search(text){    
    return cy.get('._33j-hgLC8Q2QKBYq-zlsDd._2krJZT_z-dZTqXx-E_d3', {timeout:6000})
    .type(`${text}{enter}`);
};

buyItem(text){
    this.search(text);
    //выбираем майку
    cy.get('._3eAY2i9R86WFOdpIXG96tf').eq(9).click();
    //нажимаем выпадающий список
    cy.get('._1NAuxdqJ984v_YCs8Mzpml.omvWJXbwzlp3TzvRfRP6B').click();
    //выбираем размер
    cy.get('.O7KAVeyES2Dm7FutyoPSf.ui-product-page-sizes-chooser-item_enabled.ui-product-page-sizes-chooser-item').eq(0).click();
    //нажимаем добавить в корзину
    cy.get('.x-button.x-button_primaryFilled.x-button_48._13UOn2F1A_KnQ1IvIHusVP').click();
    //перейти в корзину
    cy.get('.x-button.x-button_primaryFilled.x-button_32.x-button_link.x-button_link_32.x-button_intrinsic-width').click();

}
}
module.exports = new BaseElements();