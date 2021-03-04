import React, { useState } from 'react';
import Menu from './../components/Menu';
import { Button, Form, FormGroup, Label, Input, Jumbotron , Container, Alert } from 'reactstrap';
import Rodape from '../components/rodape';
import Head from 'next/head';

function Orcamento(){
  const [ orcamento, setOrcamento ] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    project: ''
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: ''
  });

  const onChangeInput = e => setOrcamento({ ...orcamento, [e.target.name]: e.target.value })

  const sendOrcamento = async e =>{
    e.preventDefault();

    setResponse({
      formSave: true
    });
  try{
    const res = await fetch(`http://localhost:4000/orcamento`,{
      method: "POST",
      body: JSON.stringify(orcamento),
      headers: { 'Content-Type': 'application/json' }
    });
    const response = await res.json();
    if(res.status === 200){
      setResponse({ 
        formSave: false,
        type: 'success',
        message: response.message
      });
    }else{
      setResponse({ 
        formSave:false,
        type: 'error',
        message: response.message
      });
    }
  }catch(err){
    setResponse({ 
      formSave: false,
      type: 'error',
      message: "serviço inviável"
    });
  }
  }

  return( 
      <div>
        <Head>
          <title> orçamento </title>
          <meta name="description" content="Solocitar orçamento para projeto" />
        </Head>
         <Menu />
         <Jumbotron fluid className="desc-top">
              <style>
                     {
                     `.desc-top{
                      background-color: #050c3d;
                      color: #00a1fc;
                      padding-top: 40px;
                      padding-bottom: 40px;
                      margin-bottom: 0rem;
                  }`
                    }
               </style>
           <Container className="text-center">
              <h1 className="display-4"> Orçamento </h1>
           </Container>
         </Jumbotron>
         <Jumbotron fluid className="form-orcament">
           <style>
             {
               `.form-orcament{
                   padding-top: 80px;
                   padding-bottom: 80px;
                   background-color: #fff;
                   margin-bottom: 0rem;
               }`
             }
           </style>
           <Container> 
             { response.type === 'error' ? <Alert color="danger">{ response.message }</Alert> : ''}
             { response.type === 'success' ? <Alert color="success">{ response.message }</Alert> : ''}
            <Form onSubmit={ sendOrcamento }>
              <FormGroup>       
                 <Label for="name">Nome</Label>
                 <Input type="text" name="name" placeholder="seu nome completo" onChange={onChangeInput}/>
              </FormGroup>   
              <FormGroup>       
                 <Label for="email">Email</Label>
                 <Input type="email" name="email" placeholder="seu melhor email" onChange={onChangeInput}/>
              </FormGroup>
              <FormGroup>       
                 <Label for="phone">Telefone</Label>
                 <Input type="text" name="phone" placeholder="(xx) xxxx-xxxx" onChange={onChangeInput}/>
              </FormGroup>
              <FormGroup>       
                 <Label for="whatsapp">Whatsapp</Label>
                 <Input type="text" name="whatsapp" placeholder="(xx) xxxx-xxxx" onChange={onChangeInput}/>
              </FormGroup>
              <FormGroup>       
                 <Label for="project"> Projeto </Label>
                 <Input type="textarea" name="project" placeholder="fale um pouco do seu projeto" onChange={onChangeInput}/>
              </FormGroup>
              {
                response.formSave ? "enviando":""
              }
              <Button type="submit" outline color="primary">Solicitar</Button> 
            </Form>   
           </Container>
         </Jumbotron>
         <Rodape />
      </div>
  );
}

export default Orcamento;