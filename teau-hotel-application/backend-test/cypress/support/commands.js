// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import * as targets from '../targets/targets'


    //command that generates token
    Cypress.Commands.add('authenticateSession', () => {
        const loginCredentials = {
            "username":targets.username, //username & password imported from 'targets.js'
            "password":targets.password
        }
        cy.request({
            method:'POST', //performs a login toward localhost:3000 to generate token
            url:targets.URL_LOGIN,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(loginCredentials)
        }).then((response =>{
            Cypress.env({loginToken:response.body}) //saves username & newly generated token to be used in testcases
        } ))
    })
