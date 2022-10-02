const trackDb = require('../../data-access/track/index');

const {
    makeTrackEntity,
    updateTrackEntity
} = require ('../../entities/track/index');

const UC_getTrack = require('../track/getTrack');
const UC_getTrackbyID = require('../track/getTrackbyID');
const UC_createTrack = require ('../track/createTrack');
const UC_updateTrack = require('../track/updateTrack');
const UC_updatePlay = require('../track/updatePlays');


const getTrack = UC_getTrack({trackDb});
const getTrackbyID = UC_getTrackbyID({trackDb});
const createTrack = UC_createTrack ({trackDb, makeTrackEntity});
const updateTrack = UC_updateTrack ({trackDb, updateTrackEntity});
const updatePlay = UC_updatePlay({trackDb})


const trackService = Object.freeze({
    getTrack,
    getTrackbyID,
    createTrack,
    updateTrack,
    updatePlay
});

module.exports = trackService;
module.exports = {
    getTrack,
    getTrackbyID,
    createTrack,
    updateTrack,
    updatePlay
}