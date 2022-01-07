//API-endpoints and other useful data is imported from targets.js
import * as targets from '../targets/targets'

//At the start of every testcase, the command "cy.authenticateSession" is run to generate token that is needed to execute
//requests towards API-endpoints


//Testcase 1 - Collect data about existing rooms/clients/bills/reservations
it ('Testcase 1', function(){
    cy.authenticateSession().then((response => {
        cy.log(JSON.stringify(response.body))
        //collects data about rooms
        cy.request({
            method:'GET', 
            url:targets.URL_ROOMGET,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about rooms in cypress
            cy.log(JSON.stringify(response.body)) 
        }))
        //collects data about clients
        cy.request({
            method:'GET', 
            url:targets.URL_CLIENTGET,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about clients in cypress
            cy.log(JSON.stringify(response.body)) 
        }))
        //collects data about bills
        cy.request({
            method:'GET', 
            url:targets.URL_BILLGET,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about bills in cypress
            cy.log(JSON.stringify(response.body)) 
        }))
        //collects data about reservations
        cy.request({
            method:'GET', 
            url:targets.URL_RESERVATIONGET,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about reservations in cypress
            cy.log(JSON.stringify(response.body)) 
        }))
    }))})

//Testcase 2 - Create new room, update it, & delete it
it ('Testcase 2', function(){
    cy.authenticateSession().then((response=>{
        cy.log(JSON.stringify(response.body))
        //creates new room with data from targets.js
        cy.request({
            method:'POST',
            url:targets.URL_ROOMNEW,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase2Payload1
        }).then((response=>{
            //shows data about new room in cypress
            cy.log(JSON.stringify(response.body)) 
        }))
        //updates data in new room with data from targets.js
        cy.request({
            method:'PUT',
            url:targets.URL_ROOM3,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase2Payload2
        }).then((response=>{
            //shows data about updated new room in cypress
            cy.log(JSON.stringify(response.body))
        }))
        //deletes newly created room
        cy.request({
            method:'DELETE',
            url:targets.URL_ROOM3,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about performed deletion
            cy.log(JSON.stringify(response.body))
        }))
    }))
})

//Testcase 3 - create new client, update it, & delete it
it ('Testcase 3', function(){
    cy.authenticateSession().then((response=>{
    cy.log(JSON.stringify(response.body))
    //creates new client with data from targets.js
    cy.request({
        method:'POST',
            url:targets.URL_CLIENTNEW,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase3Payload1
    }).then((response=>{
        //shows data about new client in cypress
        cy.log(JSON.stringify(response.body))
    }))
    //updates data in new client with data from targets.js
    cy.request({
        method:'PUT',
        url:targets.URL_CLIENT3,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type':'application/json'
        },
        body:targets.testcase3Payload2 
    }).then(response=>{
        //shows data about updated new client in cypress
        cy.log(JSON.stringify(response.body))
    })
    //deletes newly created room
    cy.request({
        method:'DELETE',
        url:targets.URL_CLIENT3,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type':'application/json'
        }
    }).then((response=>{
        //shows data about performed deletion
        cy.log(JSON.stringify(response.body))
    }))
}))
})

//Testcase 4 - create new bill, update it, & delete it
it ('Testcase 4', function(){
    cy.authenticateSession().then((response=>{
        cy.log(JSON.stringify(response.body))
        //creates new bill with data from targets.js
        cy.request({
            method:'POST',
            url:targets.URL_BILLNEW,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase4Payload1
        }).then((response=>{
            //shows data about new bill in cypress
            cy.log(JSON.stringify(response.body))
        }))
        //updates data in new bill with data from targets.js
        cy.request({
            method:'PUT',
            url:targets.URL_BILL2,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase4Payload2
        }).then((response=>{
            //shows data about updated new bill in cypress
            cy.log(JSON.stringify(response.body))
        }))
        //deletes newly created room
        cy.request({
            method:'DELETE',
            url:targets.URL_BILL2,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about performed deletion
            cy.log(JSON.stringify(response.body))
        }))
    }))
})

//Testcase 5 - create new reservation, update it, & delete it
it ('Testcase 5', function () {
    cy.authenticateSession().then((response=>{
        cy.log(JSON.stringify(response.body))
        //creates new reservation with data from targets.js
        cy.request({
            method:'POST',
            url:targets.URL_RESERVATIONNEW,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase5Payload1
        }).then((response=>{
            //shows data about new reservation in cypress
            cy.log(JSON.stringify(response.body))
        }))
        //updates data in new reservation with data from targets.js
        cy.request({
            method:'PUT',
            url:targets.URL_RESERVATION2,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            },
            body:targets.testcase5Payload2
        }).then((response=>{
            //shows data about updated new bill in cypress
            cy.log(JSON.stringify(response.body))
        }))
        cy.request({
            //deletes newly created reservation
            method:'DELETE',
            url:targets.URL_RESERVATION2,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type':'application/json'
            }
        }).then((response=>{
            //shows data about performed deletion
            cy.log(JSON.stringify(response.body))
        }))
    }))
})
