const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/album_img/')

    },
    filename: function (req, file, cb, ) {
        cb(null, file.originalname)
        console.log(file);
        
    }
})


const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname)
   
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb(new Error('Only Images are allowed'))
    } else 
    cb(null, true)
}


const uploadAlbum = multer({
    storage: storage,
    fileFilter: fileFilter

}).single('image')





module.exports = {
    uploadAlbum
}