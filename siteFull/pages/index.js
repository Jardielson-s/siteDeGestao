import React from 'react';
import Menu from './../components/Menu';
import { Jumbotron, Button, Container } from 'reactstrap';

function HomePage(){
    return(
    <div className="home-page">
        <Menu />
        <Jumbotron fluid className="descr-top">
            <style>
                {`.descr-top{
                    background-color: #050c3d;
                    color: #00a1fc;
                    margin-button: limportant;
                }`}
            </style>
         <Container className="text-center">
          <h1 className="display-4">soluções que sua impresa precisa</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a  href="orcamento" color="primary" className="btn btn-outline-primary btn-lg mt-4">orcamento</a>
          </p>
          </Container>
        </Jumbotron>

        <Jumbotron fluid className="servicos">
            <style>
                {
                    `.servicos{

                    }`
                }
            </style>
            <Container>
                A
            </Container>
        </Jumbotron>
    </div>);
}

export default HomePage;