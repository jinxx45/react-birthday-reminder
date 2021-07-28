const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()
var Birthday = require('../models/Birthday')


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb)
    {
        cb(null,'./uploads/');
    },
    filename : function(req,file,cb)
    {
        cb(null,new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
})

const upload = multer({storage:storage})

router.get('/', (req, res) => {
    res.send("Hello World")
})



//adding a New Birthday
router.post('/addBirthday',upload.single('file'),function(req,res)
{
    console.log(req.file)
    if(!(req.body.name) || !(req.body.image) || !(req.body.date))
    {
        res.json({success : false , msg :'Enter all Fields'})
    }
    else
    {
        var newBirthday = Birthday({
            name : req.body.name,
            image : req.body.image,
            date : req.body.date
        })

        newBirthday.save(function(err,newUser)
        {
            if(err)
            {
                res.json({success : false , msg :'Failed to Save'})
            }
            else 
            {
                res.json({success : true , msg :'Sucessfully Saved'})
            }
        })
    }
},)

module.exports = router