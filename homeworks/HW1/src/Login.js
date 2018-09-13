import React, { Component } from 'react';
import {Form, FormGroup, Input, Row, Col, Container, Button} from 'reactstrap'

export default class Login extends Component {
    render() {
        return (
            <Container>
            <Row className="login-form-wrapper">
                <Col sm={{size:7}}>
                <Form>
                    <h1 className="login-phrase">Sign up</h1>
                    <FormGroup row>
                        <Input type="text" name="username" id="username" tabIndex="1" className="form-control" placeholder="Username" required/>
                    </FormGroup>
                    <FormGroup row>
                        <Input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" required/>
                    </FormGroup>
                    <FormGroup row>
                            <Col sm={{size:6, offset:3}}>
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