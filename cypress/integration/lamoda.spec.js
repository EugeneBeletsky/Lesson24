//tests for lamoda.by


const HomePage = require('../pageObjects/homePage');
const BaseElements = require('../helpers/baseElements');

describe('my tests', function(){

    beforeEach(()=>{
        cy.viewport(1920,1080);     //устанавливаем разрешение браузера по дефолту перед каждым тестом
        cy.visit('https://www.lamoda.by/');     //заходим на сайт перед каждым тестом
    });

    //проверяем урл главной страницы
    it  ('visit web-site lamoda', ()=>{    
        cy.url().should('include','https://www.lamoda.by/');
        

    });

    //проверяем кнопку ламода
    it ('check home button', ()=>{
        HomePage.buttonHome().click();
        cy.url().should('include','https://www.lamoda.by/');

    });

    //проверяем вкладку Новинки
    it ('check Novinki button', ()=>{
        HomePage.buttonNovinki().click();
        cy.url().should('include', 'https://www.lamoda.by/c/4153/default-women/?is_new=1&sitelink=topmenuW&l=1');
    });


    //проверяем переход в раздел для мужчин
    it ('check for Men button', ()=>{
        HomePage.buttonForMen().click();
        cy.url().should('include', 'https://www.lamoda.by/men-home/?sitelink=topmenuM');
    });

    //проверяем переход в раздел для детей
    it ('check for Children button', ()=>{
        HomePage.buttonForChildren().click();
        cy.url().should('include','https://www.lamoda.by/kids-home/?sitelink=topmenuK');
    });


    //проверяем поиск по тэгу куртка
    it ('check search`куртка`', ()=>{
        BaseElements.search('куртка');       
        cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title').should('include.text','куртка');
    });

    //проверяем поиск по тэгу джинсы
    it ('check search`джинсы`', ()=>{
        BaseElements.search('джинсы');       
        cy.get('._385amISN8VbbsCgDXdxEO8.ui-catalog-search-head-title').should('include.text','джинсы');
    });


    //покупаем майку
    it('buy tshirt', ()=>{
        BaseElements.buyItem('майка');
        //cy.url().should('include', 'https://www.lamoda.by/checkout/cart/');
        cy.get('._23lAKtqBbUlCSaXvUj7r6W').should('include.text', 'айка');

    })




})
