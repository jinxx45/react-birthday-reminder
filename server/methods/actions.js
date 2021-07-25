var Birthday = require('../models/Birthday')

var config = require('../config/dbconfig')

var functions=
{
    addBirthday : function(req,res)
    {
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
    },

}







module.exports = functions;