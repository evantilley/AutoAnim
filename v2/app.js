let express = require('express')
let multer = require('multer')
let ejs = require('ejs')
let path = require('path')


//set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

let upload = multer({
    storage: storage,
    //10MB limit on filesize
    limits: {fileSize: 10000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('myImage')

//check file type function
function checkFileType(file, cb){
    //allowed extensions
    let filetypes = /jpeg|jpg|png|gif/
    //check extension
    let extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mime
    let mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname){
        return cb(null, true)
    } else{
        cb('Error: Images Only')
    }

}

//init app
let app = express()

//ejs
app.set('view engine', 'ejs')

app.use(express.static('./public'))

let port = 3000;

app.get('/', (req, res) => res.render('index'))

app.get('/linear', (req, res) => res.render('linear'))

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err){
            //if error re-render template with error
            res.render('index', {
                msg: err
            })
        } else{
            if(req.file == undefined){
                res.render('index', {
                    msg: 'Error: No File Selected'
                })
            } else{
                
                res.render('index', {
                    msg: 'File uploaded',
                    file: `uploads/${req.file.filename}`
                })
            }
        }
    })
})

app.listen(port, () => console.log("Server started on port 3000"))