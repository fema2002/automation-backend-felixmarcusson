module.exports = {
    //File contains relevant data to be used in testcases/commands


    //login-data
    username: 'tester01',
    password: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',
    
    //API-endpoints regarding login/logout
    URL_LOGIN: 'http://localhost:3000/api/login',
    URL_LOGOUT: 'http://localhost:3000/api/logout',

    //API-endpoints regarding clients
    URL_CLIENTGET: 'http://localhost:3000/api/clients',
    URL_CLIENTNEW: 'http://localhost:3000/api/client/new',
    URL_CLIENT3: 'http://localhost:3000/api/client/3',

    //API-endpoints regarding rooms
    URL_ROOMGET: 'http://localhost:3000/api/rooms',
    URL_ROOMNEW: 'http://localhost:3000/api/room/new',
    URL_ROOM3: 'http://localhost:3000/api/room/3',

    //API-endpoints regarding bills
    URL_BILLGET: 'http://localhost:3000/api/bills',
    URL_BILLNEW: 'http://localhost:3000/api/bill/new',
    URL_BILL2: 'http://localhost:3000/api/bill/2',

    //API-endpoints regarding reservations
    URL_RESERVATIONGET: 'http://localhost:3000/api/reservations',
    URL_RESERVATIONNEW: 'http://localhost:3000/api/reservation/new',
    URL_RESERVATION2: 'http://localhost:3000/api/reservation/2',


    //Data to be placed in POST-request's body in testcase 2
    testcase2Payload1: {
        "number":1,
        "floor":1,
        "price":1000
    },
    //Data to be placed in PUT-request's body in testcase 2
    testcase2Payload2: {
        "number":1, //potential problem: I don't have the creationdate-data in this payload
        "floor":1,
        "price":1001,
        "id":3
    },

    //Data to be placed in POST-request's body in testcase 3
    testcase3Payload1: {
        "name":"Exempel Exempelsson",
        "email":"exempel@exempelmail.com",
        "telephone":"0701234567"
    },
    //Data to be placed in PUT-request's body in testcase 3
    testcase3Payload2: {
        "name":"Exxempel Exempelsson", //potential problem: I don't have the creationdate-data in this payload
        "email":"exempel@exempelmail.com",
        "telephone":"0701234567",
        "id":3
    },

    //Data to be placed in POST-request's body in testcase 4
    testcase4Payload1: {
        "value":1000
    },
    //Data to be placed in PUT-request's body in testcase 4
    testcase4Payload2: {
        "value":1001, //potential problem: I don't have the creationdate-data in this payload
        "id":2
    },

    //Data to be placed in POST-request's body in testcase 5
    testcase5Payload1: {
        "client":"",
        "room":"",
        "bill":"",
        "start":"2022-01-01",
        "end":"2022-02-01"
    },
    //Data to be placed in PUT-request's body in testcase 5
    testcase5Payload2: {
        "client":"", //potential problem: I don't have the creationdate-data in this payload
        "room":"",
        "bill":"",
        "start":"2022-01-02",
        "end":"2022-02-01",
        "id":2
    }
}