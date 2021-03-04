const mongoose = require('mongoose');


const orcamento  = new  mongoose.Schema({
    name:{
        type: String,
        require: true,
        allowNull: false
    },
    email: {
        type: String,
        require: true,
        unique: true,
        allowNull: false
    },
    phone: {
        type: String,
        require: true,
        allowNull: false
    },
    whatsapp: {
        type: String,
        require: true,
        allowNull: false
    },
    project: {
        type: String,
        require: true,
        allowNull: false
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("Orcamento",orcamento);