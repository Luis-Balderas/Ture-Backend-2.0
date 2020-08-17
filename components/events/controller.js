const store = require('./store');

function getAllEvent() {
  return store.getAll();
}

function createEvent(event) {
  return store.create(event);
}

function getEventsByRangeDate(event) {
  return store.getEventDate(event);
}

module.exports = {
  getAllEvent,
  createEvent,
  getEventsByRangeDate,
};
