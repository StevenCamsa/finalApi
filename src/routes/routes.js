const express = require('express');
const router = express.Router();
const multer = require('multer');


const makeExpressCallback = require('../express-callback/index');



const {
    C_getAdmin,
    C_loginAdmin,
    C_createAdmin,
    C_updateAdmin,
    C_getAdminbyID
} = require('../controller/admin/index');

const{
    C_getArtist,
    C_getArtistID,
    C_createArtist,
    C_updateArtist
 
} = require('../controller/artist/index');

const{
    C_getAlbum,
    C_getAlbumbyID,
    C_updateAlbum,
    C_createAlbum

} = require('../controller/album/index');

const{
    C_getTrack,
    C_getTrackbyID,
    C_createTrack,
    C_updateTrack,
    C_updatePlay
} = require('../controller/track/index');

const {
    uploadAlbum
 
} = require('../middleware/multer/albumMulter')

const {
    uploadArtist
} = require('../middleware/multer/artistMulter')

const {
    uploadTrack
    
} = require('../middleware/multer/trackMulter')


const verifyToken = require('../middleware/verifyToken');



//admin
router.get("/api/admin", makeExpressCallback(C_getAdmin))
      .get("/api/admin/:id", makeExpressCallback(C_getAdminbyID))
      .post("/api/login", makeExpressCallback(C_loginAdmin))
      .post("/api/admin", makeExpressCallback(C_createAdmin))
      .patch("/api/admin/:id", makeExpressCallback(C_updateAdmin))

//artist
router.get("/api/artist", makeExpressCallback(C_getArtist))
      .get("/api/artist/:id", makeExpressCallback(C_getArtistID))
      .post("/api/artist", verifyToken, uploadArtist,makeExpressCallback(C_createArtist))
      .patch("/api/artist/:id",verifyToken, uploadArtist, makeExpressCallback(C_updateArtist))


//album
router.get("/api/album", makeExpressCallback(C_getAlbum))
      .get("/api/album/:id", makeExpressCallback(C_getAlbumbyID))
      .post("/api/album", uploadAlbum, makeExpressCallback(C_createAlbum))
      .patch("/api/album/:id", uploadAlbum, makeExpressCallback(C_updateAlbum))

//track
router.get("/api/track", makeExpressCallback(C_getTrack))
      .get("/api/track/:id", makeExpressCallback(C_getTrackbyID))
      .post("/api/track", uploadTrack, makeExpressCallback(C_createTrack))
      .patch("/api/track/:id", uploadTrack, makeExpressCallback(C_updateTrack))
      .patch("/api/track/play/:id", makeExpressCallback(C_updatePlay))



module.exports = router