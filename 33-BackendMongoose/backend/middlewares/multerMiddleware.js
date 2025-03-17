const multer  = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + "-" + file.originalname)
    }
  })
  
  const upload = multer({ 
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5},
    fileFilter: function (req, file , cb){
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/gif" )
            cb(null, true)
        else{
            cb(new Error(`Only .jpeg |.jpg |.png | .gif files are allowed  `), false)
        }
    }
 })

 module.exports = upload