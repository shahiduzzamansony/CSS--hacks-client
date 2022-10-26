import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md="4">
                    <h2>right nav</h2>
                    </Col>
                    <Col md ="8">
                    <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;