import React, { Component } from 'react';
import { Form, FormGroup, Row, Col, Container, Button } from 'reactstrap'
import {InputValidatedField} from './InputValidatedField';
import './App.css';

export class Login extends Component {
    render() {
        return (
            <Container>
                <Row className="login-form-wrapper">
                    <Col sm={{ size: 7 }}>
                        <Form>
                            <h1 className="login-phrase">Sign up</h1>
                            <FormGroup row>
                                <InputValidatedField type="text" name="username" tabIndex="1" 
                                className="standart-input-field" placeholder="Username" />
                            </FormGroup>
                            <FormGroup row>
                                <InputValidatedField type="text" name="password" tabIndex="2" 
                                className="standart-input-field" placeholder="Password" />
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{ size: 6, offset: 3 }}>
                                    <Button className="login-button" type="submit" block>Sign up</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
