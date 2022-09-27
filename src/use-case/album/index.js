const albumDb = require('../../data-access/album/index');
const multer = require('multer')
const {
    result,
    storage
} = require('../../middleware/multer')
const upload = multer({storage:storage}).single('image')


const {
    makeAlbumEntity
    // updateAlbumEntity

} = require('../../entities/album/index')


const UC_getAlbum = require('../album/getAlbum');
const UC_getAlbumbyID = require ('../album/getAlbumbyID');
// const UC_updateAlbum = require ('../album/updateAlbum');
const UC_createAlbum = require('../album/createAlbum');



const getAlbum = UC_getAlbum({albumDb});
const getAlbumbyID = UC_getAlbumbyID({albumDb});
const createAlbum = UC_createAlbum({albumDb, makeAlbumEntity, upload, result});
// const updateAlbum = UC_updateAlbum({albumDb, updateAlbumEntity});



const albumService = Object.freeze({
    getAlbum,
    getAlbumbyID,
    // updateAlbum,
    createAlbum


})

module.exports = albumService;
module.exports = {
    getAlbum,
    getAlbumbyID,
    // updateAlbum,
    createAlbum

}