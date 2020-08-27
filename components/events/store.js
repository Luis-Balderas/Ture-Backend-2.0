const userModel = require('../user/model');
const eventModel = require('./model');
const housingModel = require('./housingModel');

function getAllEvent() {
  return eventModel.find();
}

function getEventById(id) {
  return eventModel.findOne({ id });
}

function createEvent(event) {
  const newEvent = new eventModel(event);
  return newEvent.save();
}

function getEventsByRangeDate(event) {
  let query = {};
  switch (event) {
    case event.startDate:
      query = {
        ...query,
        startDate: { $lte: new Date(event.startDate) },
      };
    case event.startEnd:
      query = {
        ...query,
        endDate: { $gte: new Date(event.endDate) },
      };
    case event.location:
      query = {
        ...query,
        location: { $eq: event.location },
      };
    default:
      break;
  }

  return eventModel.find(query);
}

module.exports = {
  getAll: getAllEvent,
  getId: getEventById,
  create: createEvent,
  getEventDate: getEventsByRangeDate,
};
