const artistDb = require('../../data-access/artist/index');

const{
    makeArtistEntity
    // updateArtistEntity
} = require('../../entities/artist/index');


const UC_getArtist = require ('../artist/getArtist');
const UC_getArtistID = require('../artist/getArtistbyID');
const UC_createArtist = require('../artist/createArtist');
// const UC_updateArtist = require('../artist/updateArtist');



const getArtist = UC_getArtist({artistDb});
const getArtistID = UC_getArtistID({artistDb});
const createArtist = UC_createArtist({artistDb, makeArtistEntity});
// const updateArtist = UC_updateArtist({artistDb, updateArtistEntity});



const artistService = Object.freeze({
    getArtist,
    getArtistID,
    createArtist,
    // updateArtist

})

module.exports = artistService;
module.exports = {
    getArtist,
    getArtistID,
    createArtist,
    // updateArtist


}