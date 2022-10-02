const CON_getTrack = require('./getTrack');
const CON_getTrackbyID = require('./getTrackbyID');
const CON_createTrack = require('./createTrack');
const CON_updateTrack = require('./updateTrack');
const CON_updatePlay = require('./updatePlay');

const{
    getTrack,
    getTrackbyID,
    createTrack,
    updateTrack,
    updatePlay
} = require('../../use-case/track/index');

const C_getTrack = CON_getTrack({getTrack});
const C_getTrackbyID = CON_getTrackbyID({getTrackbyID});
const C_createTrack = CON_createTrack({createTrack});
const C_updateTrack = CON_updateTrack({updateTrack});
const C_updatePlay = CON_updatePlay({updatePlay});

const C_track = Object.freeze ({
    C_getTrack,
    C_getTrackbyID,
    C_createTrack,
    C_updateTrack,
    C_updatePlay
});

module.exports = C_track;
module.exports = {
    C_getTrack,
    C_getTrackbyID,
    C_createTrack,
    C_updateTrack,
    C_updatePlay
};