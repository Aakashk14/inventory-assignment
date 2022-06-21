const mongoose = require('mongoose')

const inventory_schema = new mongoose.Schema({
    item_code:
    {type:String,
    required:true
    },
    Name1:{type:String,
        required:true
        },
    Name2:{type:String,
        required:true
        },
    Price:{type:Number,
        required:true
        },
    vendor_Name:{type:String,
        required:true
        },
    Date:{type:Date,
        required:true
        }
})

const inventory = mongoose.model("inventory",inventory_schema,"inventory")


module.exports=inventory