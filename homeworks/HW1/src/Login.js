import React, {Component} from 'react';
import {Form, FormGroup, Row, Col, Container, Button} from 'reactstrap'
import {InputValidatedField} from './InputValidatedField';
import './App.css';

export class Login extends Component {

    state = {
        user: '',
        password: ''
    }

    render() {
        return (
            <Container>
                <Row className="login-form-wrapper">
                    <Col sm={{size: 7}}>
                        <Form onSubmit = {this.onSubmitForm}>
                            <h1 className="login-phrase">Sign up</h1>
                            <FormGroup row>
                                <InputValidatedField type="text" name="user" tabIndex="1"
                                    className="standart-input-field" placeholder="Username" onChange={this.onChange}/>
                            </FormGroup>
                            <FormGroup row>
                                <InputValidatedField type="password" name="password" tabIndex="2"
                                    className="standart-input-field" placeholder="Password" onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 6, offset: 3}}>
                                    <Button className="login-button" type="submit" block>Sign up</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        fetch('https://flatearth-api.herokuapp.com/api/v1/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then((response) => {
            if (!response.ok) {
                throw Error("error while authorization");
            }
            return response.json();
        }).then(response => {
            localStorage.setItem('token', response.message.token);
            this.props.history.push('/courses');
        }).catch(e => console.log(e))
    }

    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}
