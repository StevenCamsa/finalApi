const trackDb = require('../../data-access/track/index');

const {
    makeTrackEntity
} = require ('../../entities/track/index');

const UC_getTrack = require('../track/getTrack');
const UC_getTrackbyID = require('../track/getTrackbyID');
const UC_createTrack = require ('../track/createTrack');


const getTrack = UC_getTrack({trackDb});
const getTrackbyID = UC_getTrackbyID({trackDb});
const createTrack = UC_createTrack ({trackDb, makeTrackEntity});


const trackService = Object.freeze({
    getTrack,
    getTrackbyID,
    createTrack
});

module.exports = trackService;
module.exports = {
    getTrack,
    getTrackbyID,
    createTrack
}