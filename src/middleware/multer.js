const multer = require('multer')
const path = require('path')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')

    },
    filename: function (req, file, cb, ) {
        cb(null, Date.now() + file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname)
   
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
        return cb(new Error('Only Images are allowed'))
    } else 
    cb(null, true)
}


const upload = multer({
    storage: storage,
    fileFilter: fileFilter

}).single('image')





module.exports = {
    upload
}