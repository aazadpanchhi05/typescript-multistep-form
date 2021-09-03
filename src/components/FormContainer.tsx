import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

const FormContainer: React.FC = ({children}) => {
    return (
        <Container className='mt-5'>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
