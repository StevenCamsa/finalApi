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
    C_getArtistID
    // C_createArtist,
    // C_updateArtist,
 
} = require('../controller/artist/index');

const{
    C_getAlbum,
    C_getAlbumbyID,
    // C_updateAlbum,
    C_createAlbum

} = require('../controller/album/index');

const{
    C_getTrack,
    C_getTrackbyID
    // C_createTrack
} = require('../controller/track/index');

const {
    storage,
    result
} = require('../middleware/multer')

const verifyToken = require('../middleware/verifyToken');
const upload = multer({storage:storage}).single('image')

//image
router.post("/api/upload", upload, result)

//admin
router.get("/api/admin", makeExpressCallback(C_getAdmin))
      .get("/api/admin/:id", makeExpressCallback(C_getAdminbyID))
      .post("/api/login", makeExpressCallback(C_loginAdmin))
      .post("/api/admin", makeExpressCallback(C_createAdmin))
      .patch("/api/admin/:id", makeExpressCallback(C_updateAdmin))

//artist
router.get("/api/artist", makeExpressCallback(C_getArtist))
      .get("/api/artist/:id", makeExpressCallback(C_getArtistID))
    //   .post("/api/artist", makeExpressCallback(C_createArtist))
    //   .patch("/api/artist/:id", makeExpressCallback(C_updateArtist))


//album
router.get("/api/album", makeExpressCallback(C_getAlbum))
      .get("/api/album/:id", makeExpressCallback(C_getAlbumbyID))
      .post("/api/album",upload, makeExpressCallback(C_createAlbum))
    //   .patch("/api/album/:id", makeExpressCallback(C_updateAlbum))

//track
router.get("/api/track", makeExpressCallback(C_getTrack))
      .get("/api/track/:id", makeExpressCallback(C_getTrackbyID))
    //   .post("/api/track",makeExpressCallback(C_createTrack))



module.exports = router