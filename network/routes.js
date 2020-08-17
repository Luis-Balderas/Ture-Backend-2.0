const express = require('express');
const user = require('../components/user/network');
const event = require('../components/events/network');

const routes = function (server) {
  server.use('/user', user);
  server.use('/event', event);
};

module.exports = routes;
