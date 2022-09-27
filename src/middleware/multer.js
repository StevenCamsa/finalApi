const multer = require('multer') 


const result = function(req, res, next){
    console.log(req.file);
    const file = req.file.path
    console.log(file);
    
}

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
        
    },
    filename: function (req, file, cb) {
        cb(null,Date.now()+file.originalname)
        
        
    }
})

module.exports = {storage, result}