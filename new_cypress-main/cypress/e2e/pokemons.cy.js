describe('Покемоны e2e', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login');  // зашел на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');    //ввел правильный логин
         cy.get('#password').type('USER_PASSWORD');              // ввел правильный пароль
         cy.get('.auth__button').click();               //   кликнул на кнопкй войти
         cy.wait(1000);
         cy.get('.header__container > .header__id').click({ force: true });     // кликнул на кнопку входа в армори тренера
         cy.get('[href="/shop"]').click();     //   кликнул на смену аватара 
         cy.get('.available > button').first().click(); // кликнул на покупку аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4365874755898458');  // ввел номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0225'); // ввел срок дейтсвия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввел CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ABC DEF'); // ввел имя
         cy.wait(1000);
         cy.get('.pay-btn').click(); // кликнул оплатить
         cy.get('#cardnumber').type('56456');  // ввел код смс
         cy.get('.payment__submit-button').click(); // подвтердил покупку
         cy.contains('Покупка прошла успешно').should('be.visible');  // проверяем успешность покупки



    }) 

}) 