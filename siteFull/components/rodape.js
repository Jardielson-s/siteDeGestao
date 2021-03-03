import React from 'react';

import { Container, Jumbotron } from 'reactstrap';

const Rodape = () =>{
    return(
        <Jumbotron fluid className="rodape">
            <style>
                {
                    `.rodape{
                        background-color: #050D3D;
                        color: #fff;
                        padding-top: 10px;
                        padding-botton: 10px;
                        margin: 0rem;
                    }`
                }
            </style>
            <Container className="text-center">
                <h1 className="lead"> rodape </h1>
            </Container>
        </Jumbotron>
    );
}

export default Rodape;