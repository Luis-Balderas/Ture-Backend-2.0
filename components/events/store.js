const userModel = require('../user/model');
const eventModel = require('./model');
const housingModel = require('./housingModel');

function getAllEvent() {
  return eventModel.find();
}

function getEventById(id) {
  console.log('getEventById -> id', id);
  return eventModel.findOne({ _id: id });
}

function createEvent(event) {
  const eventModificated = {
    ...event,
    name: event.name.toLowerCase(),
  }
  const newEvent = new eventModel(eventModificated);
  return newEvent.save();
}

function getEventsByRangeDate(event) {
  let query = {};
  if(event.startDate) {
    query = {
      ...query,
      startDate: { $lte: new Date(event.startDate) },
    };
  }
  if(event.endDate) {
    query = {
      ...query,
      endDate: { $gte: new Date(event.endDate) },
    };
  }
  if(event.location) {
    query = {
      ...query,
      $text: {
        $search: event.location,
        $caseSensitive: false,
      },
    };
  }
  if(event.name) {
    let name = event.name.toLowerCase();
    query = {
      ...query,
      name: { $in: [ new RegExp(name)] }
    };
  }
  console.log('query', query)
  return eventModel.find(query);
}

module.exports = {
  getAll: getAllEvent,
  getId: getEventById,
  create: createEvent,
  getEventDate: getEventsByRangeDate,
};
