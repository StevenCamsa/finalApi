const CON_getArtist = require('./getArtist');
const CON_getArtistID = require('./getArtistbyID');
const CON_createArtist = require('./createArtist');
// const CON_updateArtist = require('./updateArtist');


const{
    getArtist,
    getArtistID,
    createArtist
    // updateArtist,

} = require ('../../use-case/artist/index');



const C_getArtist = CON_getArtist({getArtist});
const C_getArtistID = CON_getArtistID({getArtistID});
const C_createArtist = CON_createArtist({createArtist});
// const C_updateArtist = CON_updateArtist({updateArtist});



const C_artist = Object.freeze({
    C_getArtist,
    C_getArtistID,
    C_createArtist
    // C_updateArtist,

})

module.exports = C_artist;
module.exports = {
    C_getArtist,
    C_getArtistID,
    C_createArtist,
    // C_updateArtist,

}