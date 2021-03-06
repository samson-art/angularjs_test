// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
const data = {
    roles: [
        {
            "id": 1,
            "title": "Администратор ФИТ",
            "cmt": "",
            "systemResources": []
        },
        {

            "id": 2,
            "title": "Администратор",
            "cmt": "Pellentesque viverra pede ac diam.",
            "systemResources": []
        },
        {
            "id": 3,
            "title": "Маркетолог",
            "cmt": "Suspendisse potenti.",
            "systemResources": []
        },
        {
            "id": 4,
            "title": "Клиент",
            "cmt": "",
            "systemResources": []
        },
        {
            "id": 5,
            "title": "Гость",
            "cmt": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            "systemResources": []
        }
    ],
    users: [
        {
            "id": 1,
            "userName": "АдминистраторФИТ1",
            "cmt": "",
            "role_id": 1
        },
        {
            "id": 2,
            "userName": "АдминистраторФИТ2",
            "cmt": "",
            "role_id": 1
        },
        {
            "id": 3,
            "userName": "АдминистраторФИТ3",
            "cmt": "",
            "role_id": 1
        },
        {
            "id": 4,
            "userName": "Администратор1",
            "cmt": "",
            "role_id": 2
        },
        {
            "id": 5,
            "userName": "Администратор2",
            "cmt": "",
            "role_id": 2
        },
        {
            "id": 6,
            "userName": "Администратор3",
            "cmt": "",
            "role_id": 2
        },
        {
            "id": 7,
            "userName": "Администратор4",
            "cmt": "",
            "role_id": 2
        },
        {
            "id": 8,
            "userName": "Администратор5",
            "cmt": "",
            "role_id": 2
        },
        {
            "id": 9,
            "userName": "Маркетолог1",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 10,
            "userName": "Маркетолог2",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 11,
            "userName": "Маркетолог3",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 12,
            "userName": "Маркетолог4",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 13,
            "userName": "Маркетолог5",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 14,
            "userName": "Маркетолог6",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 15,
            "userName": "Маркетолог7",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 16,
            "userName": "Маркетолог8",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 17,
            "userName": "Маркетолог9",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 18,
            "userName": "Маркетолог10",
            "cmt": "",
            "role_id": 3
        },
        {
            "id": 19,
            "userName": "Клиент1",
            "cmt": "",
            "role_id": 4
        },
        {
            "id": 20,
            "userName": "Клиент2",
            "cmt": "",
            "role_id": 4
        }
    ],
    systemResources: [
        {
            "id": 1,
            "title": "Обзорная панель",
            "sysName": "dashboard",
            "readAction": false,
            "updateAction": false,
            "deleteAction": false,
            "adminAction": true,
            "role_id": 1
        }, {
            "id": 2,
            "title": "Словари",
            "sysName": "dictionaries",
            "readAction": false,
            "updateAction": true,
            "deleteAction": true,
            "adminAction": false,
            "role_id": 1
        }, {
            "id": 3,
            "title": "Системные таблицы",
            "sysName": "system_tables",
            "readAction": false,
            "updateAction": true,
            "deleteAction": false,
            "adminAction": true,
            "role_id": 1
        }, {
            "id": 4,
            "title": "Обзорная панель",
            "sysName": "dashboard",
            "readAction": true,
            "updateAction": true,
            "deleteAction": false,
            "adminAction": true,
            "role_id": 2
        }, {
            "id": 5,
            "title": "Словари",
            "sysName": "dictionaries",
            "readAction": false,
            "updateAction": false,
            "deleteAction": false,
            "adminAction": false,
            "role_id": 2
        }, {
            "id": 6,
            "title": "Системные таблицы",
            "sysName": "system_tables",
            "readAction": false,
            "updateAction": true,
            "deleteAction": false,
            "adminAction": false,
            "role_id": 2
        }, {
            "id": 7,
            "title": "Обзорная панель",
            "sysName": "dashboard",
            "readAction": true,
            "updateAction": true,
            "deleteAction": true,
            "adminAction": true,
            "role_id": 3
        }, {
            "id": 8,
            "title": "Словари",
            "sysName": "dictionaries",
            "readAction": false,
            "updateAction": true,
            "deleteAction": false,
            "adminAction": false,
            "role_id": 3
        }, {
            "id": 9,
            "title": "Системные таблицы",
            "sysName": "system_tables",
            "readAction": true,
            "updateAction": false,
            "deleteAction": false,
            "adminAction": false,
            "role_id": 3
        }, {
            "id": 10,
            "title": "Обзорная панель",
            "sysName": "dashboard",
            "readAction": false,
            "updateAction": true,
            "deleteAction": true,
            "adminAction": false,
            "role_id": 4
        }, {
            "id": 11,
            "title": "Словари",
            "sysName": "dictionaries",
            "readAction": true,
            "updateAction": false,
            "deleteAction": true,
            "adminAction": false,
            "role_id": 4
        }, {
            "id": 12,
            "title": "Системные таблицы",
            "sysName": "system_tables",
            "readAction": true,
            "updateAction": true,
            "deleteAction": true,
            "adminAction": true,
            "role_id": 4
        }
    ]
};
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8800");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', router);
// app.use(methodOverride('X-HTTP-Method-Override'));
// app.use('*', function (req, res, next) {
//   console.log('RESSS');
//   res.json({m: 'Ok'})
// })
// Add headers
router.post('/roles/get', function (req, res) {
    let roles = data['roles'];
    let total = roles.length;
    res.json({
        data: {
            total: total,
            array: roles
        }
    });
});
router.post('/users/get', function (req, res) {
    let roleId = req.body['roleId'];
    let users = data['users'].filter(function (usr) {
        return usr.role_id === roleId;
    });
    let total = users.length;
    res.json({
        data: {
            total: total,
            array: users
        }
    });
});
router.post('/systemResources/get', function (req, res) {
    let roleId = req.body['roleId'];
    let systemResources = data.systemResources.filter(function (res) {
        return res.role_id === roleId;
    });
    let total = systemResources.length;
    res.json({
        data: {
            array: systemResources,
            total: total
        }
    })
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
