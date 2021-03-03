import React from 'react';
import Menu from './../components/Menu';
import { Jumbotron, Container } from 'reactstrap';
import Rodape from '../components/rodape';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function HomePage(){
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
          <h1 className="display-4">soluções que sua impresa precisa</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a  href="orcamento" color="primary" className="btn btn-outline-primary btn-lg mt-4">orçamento</a>
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
                    <h2 className="display-4"> serviços </h2>
                    <p className="lead pb-4"> 
                            você precisa organizar , sistematizar e ordenar
                            sua gestão de serviços ultilize nosso site para isso.
                    </p>
                </div>
                <div className="row">
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                              <FontAwesomeIcon icon="laptop-code"/>
                        </div>
                        <h2 className="mt-4 mb-4"> serviço um </h2>
                        <p> present quick sort</p>
                     </div>
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="mobile-alt"/>
                        </div>
                        <h2 className="mt-4 mb-4"> serviço dois </h2>
                        <p> present merge sort</p>
                     </div>
                     <div className="col-md-4">
                        <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="network-wired"/>
                        </div>
                        <h2 className="mt-4 mb-4"> serviço três </h2>
                        <p> present bubble sort</p>
                     </div>
                </div>
            </Container>
        </Jumbotron>
        <Rodape />
    </div>);
}

export default HomePage;