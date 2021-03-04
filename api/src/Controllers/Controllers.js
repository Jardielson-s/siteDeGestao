const   Client  = require('../models/home');
const  Orcamento  = require('../models/orcamento');

class Controllers{

   async singUp(req,res){
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
            return res.status(200).json( { message: response } );
        })
        .catch(err =>{ return res.status(400).json( { message: err }); })
   }

   async singUpOrcamento(req,res){

         const { name, email, phone, whatsapp, project } = req.body;
     
         const response = await Orcamento.create({
             name,
             email,
             phone,
             whatsapp,
             project
         })
         .then(response=>{
             return res.status(200).json({ message: "orcamento criado com sucesso" });
         })
         .catch(err => { return res.status(400).json({ message: err }); })
 }

 async load(req,res){
    const response = await Client.findOne({})
    .then(response=>{

      res.status(200).json({ response });
    })
    .catch(err=>{ return( res.status(400).json({ message: err}));});
 }

 async loadOrcamento(req,res){
    const response = await Orcamento.find({})
    .then(response=>{
      res.status(200).json({  message: response });
    })
    .catch(err=>{ return( res.status(400).json({ message: err}));});
 }

}

module.exports = new Controllers();