const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connect");
}).catch(err=>{
  console.log(err);
});

const home  = new  mongoose.Schema({
    topTitle:{
        type: String,
        require: true,
        allowNull: false
    },
    caption: {
        type: String,
        require: true,
        allowNull: false
    },
    topTexttoBtn: {
        type: String,
        require: true,
        allowNull: false
    },
    topLinkBtn: {
        type: String,
        require: true,
        allowNull: false
    },
    serTitle: {
        type: String,
        require: true,
        allowNull: false
    },
    serSubTitle:{
        type: String,
        require: true,
        allowNull: false
    },
    serOneIcon:{
        type: String,
        require: true,
        allowNull: false
    },
    serOneTitle:{
        type: String,
        require: true,
        allowNull: false
    },
    serOneDesc:{
        type: String,
        require: true,
        allowNull: false
    },
    serTwoIcon:{
        type: String,
        require: true,
        allowNull: false
    },
    serTowTitle:{
        type: String,
        require: true,
        allowNull: false
    },
    serTowDesc:{
        type: String,
        require: true,
        allowNull: false
    },
    serTreeIcon:{
        type: String,
        require: true,
        allowNull: false
    },
    serTreeTitle:{
        type: String,
        require: true,
        allowNull: false
    },
    serTreeDesc:{
        type: String,
        require: true,
        allowNull: false
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Home",home);