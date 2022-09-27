const CON_getAlbum = require('./getAlbum');
const CON_getAlbumbyID = require ('./getAlbumbyID');
const CON_createAlbum = require('./createAlbum');
// const CON_updateAlbum = require('./updateAlbum');



const {
    getAlbum,
    getAlbumbyID,
    // updateAlbum,
    createAlbum

} = require ('../../use-case/album/index');


const C_getAlbum = CON_getAlbum({getAlbum});
const C_getAlbumbyID= CON_getAlbumbyID({getAlbumbyID});
// const C_updateAlbum = CON_updateAlbum({updateAlbum});
const C_createAlbum = CON_createAlbum({createAlbum});


const C_album = Object.freeze({
    C_getAlbum,
    C_getAlbumbyID,
    // C_updateAlbum,
    C_createAlbum

});

module.exports = C_album;
module.exports = {
    C_getAlbum,
    C_getAlbumbyID,
    // C_updateAlbum,
    C_createAlbum
}