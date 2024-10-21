describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');   // Зашел на сайт
         cy.get('#mail').type('german@dolnikov.ru');   //Ввел верный логин
         cy.get('#pass').type('iLoveqastudio1');  // Ввел верный пароль
         cy.get('#loginButton').click();   // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно');  // проверяю успешность авторизации
         cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  крестик виден пользователю
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');   // Зашел на сайт
        cy.get('#forgotEmailButton').click();   //Нажал на кнопку восстановления пароля
        cy.get('#mailForgot').type('afrostyle@mail.ru');  // ввел емейл для восстановления пароля
        cy.get('#restoreEmailButton').click(); // нажал "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // получил сообщение о успешной отправке
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  крестик виден пользователю
    })


    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зашел на сайт
        cy.get('#mail').type('german@dolnikov.ru');   //Ввел верный логин
        cy.get('#pass').type('Qwerty1234');  // Ввел НЕверный пароль
        cy.get('#loginButton').click();   // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю успешность авторизации
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  крестик виден пользователю
    })

    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зашел на сайт
        cy.get('#mail').type('gera@dolnikov.ru');   //Ввел НЕверный логин
        cy.get('#pass').type('iLoveqastudio1');  // Ввел верный пароль
        cy.get('#loginButton').click();   // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // проверяю успешность авторизации
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  крестик виден пользователю
    })


    it('Верный логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');   // Зашел на сайт
        cy.get('#mail').type('germandolnikov.ru');   //Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1');  // Ввел верный пароль
        cy.get('#loginButton').click();   // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // проверяю успешность авторизации
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  крестик виден пользователю
    })


    it('Приведение логина в строчные буквы', function () {
        cy.visit('https://login.qa.studio/');   // Зашел на сайт
        cy.get('#mail').type('GermanDolnikov.ru');   //Ввел верный логин, но с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1');  // Ввел верный пароль
        cy.get('#loginButton').click();   // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // проверяю успешность авторизации
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //  крестик виден пользователю
    })

 }) 






 // проверку на негативный кейс валидации:
///а) Ввести логин без @
 //) Ввести правильный пароль
 //) Нажать войти
 //) Проверить, что получаем текст с ошибкой