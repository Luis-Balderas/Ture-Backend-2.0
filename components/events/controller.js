const store = require('./store');

function getAllEvent() {
  return store.getAll();
}

function getEventById(id) {
  return store.getId(id);
}

function createEvent(event) {
  return store.create(event);
}

function getEventsByRangeDate(event) {
  return store.getEventDate(event);
}

module.exports = {
  getAllEvent,
  getEventById,
  createEvent,
  getEventsByRangeDate,
};
