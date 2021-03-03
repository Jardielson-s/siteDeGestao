import Menu from './../components/Menu';
import { Button, Form, FormGroup, Label, Input, Jumbotron , Container } from 'reactstrap';
import Rodape from '../components/rodape';
import Head from 'next/head';

function Orcamento(){
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
            <Form>
              <FormGroup>       
                 <Label for="name">Nome</Label>
                 <Input type="text" name="name" placeholder="seu nome completo" />
              </FormGroup>   
              <FormGroup>       
                 <Label for="email">Email</Label>
                 <Input type="email" name="eamil" placeholder="seu melhor email" />
              </FormGroup>
              <FormGroup>       
                 <Label for="phone">Telefone</Label>
                 <Input type="text" name="phone" placeholder="(xx) xxxx-xxxx" />
              </FormGroup>
              <FormGroup>       
                 <Label for="whatsapp">Whatsapp</Label>
                 <Input type="text" name="whatsapp" placeholder="(xx) xxxx-xxxx" />
              </FormGroup>
              <FormGroup>       
                 <Label for="project"> Projeto </Label>
                 <Input type="textarea" name="project" placeholder="fale um pouco do seu projeto" />
              </FormGroup>
              <Button type="submit" outline color="primary">Solicitar</Button> 
            </Form>   
           </Container>
         </Jumbotron>
         <Rodape />
      </div>
  );
}

export default Orcamento;