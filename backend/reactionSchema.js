const mongoose = require('mongoose') ;
var Schema = mongoose.Schema;
var schema = new Schema({// the text here are use to target specific collection /*RULE MUST END WITH S ,ALL SMALL CAP
    // _id: { 
    //     type: String,
    //     required : true,
    //     unique: true
    // },
    photoId:{
        type: String,
        required : true,
        unique: true
    },
    like:{
        type: Number,
        required : true
    },
    comment : {
        type: [String],
        required : true
    }
    
});

module.exports = mongoose.model('Reaction', schema);