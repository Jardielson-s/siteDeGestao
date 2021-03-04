import React from 'react';
import Menu from './../components/Menu';
import { Jumbotron, Container } from 'reactstrap';
import Rodape from '../components/rodape';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function HomePage({ data }){
    return(
    <div className="home-page">
        <Head> 
            <title> Home - principal </title>
        </Head>
        <Menu />
       
        <Jumbotron fluid className="descr-top">
            <style>
                {`.descr-top{
                    background-color: #050c3d;
                    color: #00a1fc;
                    margin-bottom: 0rem limportant;
                }.circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #0A197D;
                    color: #fff;
                    font-size: 52px;
                    padding-top: 24px;
                }.centralizar{
                    margin: 0 auto;
                    float: none; 
                }`}
            </style>
         <Container className="text-center">
          <h1 className="display-4">{ data.response.topTitle }</h1>
          <p className="lead">{ data.response.caption }</p>
          <hr className="my-2" />
          <p>{ data.response.topTexttoBtn }</p>
          <p className="lead">
            <a  href="orcamento" color="primary" className="btn btn-outline-primary btn-lg mt-4">{ data.response.topLinkBtn }</a>
          </p>
          </Container>
        </Jumbotron>

        <Jumbotron fluid className="servicos">
            <style>
                {
                    `.servicos{
                        background-color: #fff;
                        margin: 0rem limportant;
                    }`
                }
            </style>
            <Container className="text-center">
                <div>
                    <h2 className="display-4"> { data.response.serTitle } </h2>
                    <p className="lead pb-4"> 
                            { data.response.serSubTitle }
                    </p>
                </div>
                <div className="row">
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                              <FontAwesomeIcon icon="laptop-code"/>
                        </div>
                        <h2 className="mt-4 mb-4"> { data.response.serOneIcon } </h2>
                        <p> { data.response.serOneTitle, data.response.serOneDesc } </p>
                     </div>
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="mobile-alt"/>
                        </div>
                        <h2 className="mt-4 mb-4"> { data.response.serTwoIcon } </h2>
                        <p> { data.response.serTowTitle, data.response.serTowDesc } </p>
                     </div>
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="network-wired"/>
                        </div>
                        <h2 className="mt-4 mb-4"> { data.response.serTreeIcon }</h2>
                        <p> { data.response.serTreeTitle, data.response.serTreeDesc }</p>
                     </div>
                </div>
            </Container>
        </Jumbotron>
        <Rodape />
    </div>);
}

export async function getServerSideProps(){
     const response = await fetch(`http://localhost:4000/load`);
     const data = await response.json();

     return{ props: { data }}
}

export default HomePage;