const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    
    destination: function (req, file, cb,res) 
    
    { 
       
        const ext = path.extname(file.originalname)
        if(ext !== '.mp3') {
            cb(null, 'uploads/track_img/')
        } else {
            cb(null, 'uploads/track_songs')
        } 
        // console.log(file);

    },
    filename: function (req, file, cb, ) {
        cb(null, file.originalname)
    }


})


const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname)
    if (ext !== '.mp3' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.png') {
        return cb(new Error('denied'))
    } else 
    cb(null, true)
}


const uploadTrack = multer({
    storage: storage,
    fileFilter: fileFilter

}).fields([
    { name: 'image', maxCount: 1 },
  { name: 'songs', maxCount: 8 }
])
// }).single('image')


module.exports = {
    uploadTrack
}

