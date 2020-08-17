const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) {
  controller
    .listUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 400, err);
    });
});

router.get('/:DNI', function (req, res) {
  controller
    .getUserById(req.params.DNI)
    .then((users) => {
      if (users) {
        response.success(req, res, users, 200);
      } else {
        throw new Error('User doesnt exist ');
      }
    })
    .catch((err) => {
      response.error(req, res, 'Not found', 404, err.message);
    });
});

router.post('/', function (req, res) {
  controller
    .addUser(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, 'Invalid data', 400, err);
    });
});

module.exports = router;
