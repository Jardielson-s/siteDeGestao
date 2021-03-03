const express = require('express');
const  Client  = require('./models/db');


const app = express();
app.use(express.json());

app.post("/singUp",async (req,res)=>{
    const { 
    topTitle,
    caption,
    topTexttoBtn,
    topLinkBtn, 
    serTitle,
    serSubTitle,
    serOneIcon,
    serOneTitle,
    serOneDesc,
    serTwoIcon,
    serTowTitle,
    serTowDesc,
    serTreeIcon,
    serTreeTitle,
    serTreeDesc
   } = req.body;

    const response = await Client.create({
        topTitle,
        caption,
        topTexttoBtn,
        topLinkBtn, 
        serTitle,
        serSubTitle,
        serOneIcon,
        serOneTitle,
        serOneDesc,
        serTwoIcon,
        serTowTitle,
        serTowDesc,
        serTreeIcon,
        serTreeTitle,
        serTreeDesc
    })
    .then(response=>{
        return res.send( response );
    })
    .catch(err =>{ return res.send( { message: err }); })
  });

app.get("/get",async (req,res)=>{
  const response = await Client.findOne()
  .then(response=>{
    res.json({ message: response });
  })
  .catch(err=>{ return( res.send({ message: err}));});
 
});

module.exports = app;