import React from 'react';
import {Button, Form, FormGroup, Input, Col, Row, Container, Label} from 'reactstrap';
import {SelectComponent} from './SelectComponent';

export class CreateCourse extends React.Component {
    state = {
        authors: [
            {
                id: "1",
                name: "Spinoza",
                isSelected: false
            },
            {
                id: "2",
                name: "Nikolson",
                isSelected: false
            },
            {
                id: "3",
                name: "Dekker",
                isSelected: false
            },
            {
                id: "4",
                name: "Morningstar",
                isSelected: false
            }
        ]
    }

    render() {
        return (
            <Container>
                <Row className="create-course-form">
                    <Col sm={{size: 7}}>
                        <Form>
                            <h1 className="login-phrase">Create course</h1>

                            <Label className="create-course-label">Name</Label>
                            <FormGroup row>
                                <Input className="create-course-fileds" type="text" name="name" tabIndex="1" required />
                            </FormGroup>

                            <Label className="create-course-label">Description</Label>
                            <FormGroup row>
                                <textarea className="create-course-description" name="desription" tabIndex="1" required />
                            </FormGroup>

                            <Label className="create-course-label">Date</Label>
                            <FormGroup row>
                                <Input className="create-course-fileds" type="date" name="date" tabIndex="1" required />
                            </FormGroup>

                            <Label className="create-course-label">Duration</Label>
                            <FormGroup row>
                                <Input className="create-course-fileds" type="number" name="duration" tabIndex="1" required />
                            </FormGroup>
                            <div>
                                <FormGroup row>
                                    {/* <SelectComponent list={this.state.authors} onClick={(e) => this.markItemAsSelectedOrRemoved(e, true)} isChosen={false} className='general-authors-list' name="authors" /> */}
                                    <SelectComponent list={this.state.authors} onClick={this.markItemAsSelectedOrRemoved.bind(this, true)} isChosen={false} className='general-authors-list' name="authors" />
                                    <SelectComponent list={this.state.authors} onClick={(e) => this.markItemAsSelectedOrRemoved(e, false)} isChosen={true} className='general-authors-list' name="authors1" />
                                </FormGroup>
                            </div>

                            <FormGroup row>
                                <Col sm={{size: 6, offset: 3}}>
                                    <Button className="login-button" type="submit" block>Create</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    markItemAsSelectedOrRemoved = (event, isSelected) => {
        const name = event.target.value;
        const {
            authors
        } = this.state;

        authors.reduce((acc, currentValue) => {
            if (currentValue.name === name) {
                currentValue.isSelected = isSelected;
                acc.push(currentValue);
            }
            return acc;
        }, []);

        this.setState({
            authors: authors
        });
    }

    markItemAsSelected = (e) => {
        this.markItemAsSelectedOrRemoved(e, true)
    }
    state = {
        authors: [
            {
                id: "1",
                name: "Spinoza",
                isSelected: false
            },
            {
                id: "2",
                name: "Nikolson",
                isSelected: false
            },
            {
                id: "3",
                name: "Dekker",
                isSelected: false
            },
            {
                id: "4",
                name: "Morningstar",
                isSelected: false
            }
        ]
    }

    render() {
        return (
            <Container>
                <Row className="create-course-form">
                    <Col sm={{size: 7}}>
                        <Form>
                            <h1 className="login-phrase">Create course</h1>

                            <Label className="create-course-label">Name</Label>
                            <FormGroup row>
                                <Input className="create-course-fileds" type="text" name="name" tabIndex="1" required />
                            </FormGroup>

                            <Label className="create-course-label">Description</Label>
                            <FormGroup row>
                                <textarea className="create-course-description" name="desription" tabIndex="1" required />
                            </FormGroup>

                            <Label className="create-course-label">Date</Label>
                            <FormGroup row>
                                <Input className="create-course-fileds" type="date" name="date" tabIndex="1" required />
                            </FormGroup>

                            <Label className="create-course-label">Duration</Label>
                            <FormGroup row>
                                <Input className="create-course-fileds" type="number" name="duration" tabIndex="1" required />
                            </FormGroup>
                            <div>
                                <FormGroup row>
                                    {/* <SelectComponent list={this.state.authors} onClick={(e) => this.markItemAsSelectedOrRemoved(e, true)} isChosen={false} className='general-authors-list' name="authors" /> */}
                                    <SelectComponent list={this.state.authors} onClick={this.markItemAsSelectedOrRemoved} isChosen={false} className='general-authors-list' name="authors" />
                                    <SelectComponent list={this.state.authors} onClick={this.markItemAsSelectedOrRemoved} isChosen={true} className='general-authors-list' name="authors1" />
                                </FormGroup>
                            </div>

                            <FormGroup row>
                                <Col sm={{size: 6, offset: 3}}>
                                    <Button className="login-button" type="submit" block>Create</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    markItemAsSelectedOrRemoved = (event) => {
        const name = event.target.value;
        const {
            authors
        } = this.state;

        authors.reduce((acc, currentValue) => {
            if (currentValue.name === name) {
                currentValue.isSelected = !currentValue.isSelected;
                acc.push(currentValue);
            }
            return acc;
        }, []);

        this.setState({
            authors: authors
        });
    }

    markItemAsSelected = (e) => {
        this.markItemAsSelectedOrRemoved(e, true)
    }

    markItemAsRemoved = (e) => {
        this.markItemAsSelectedOrRemoved(e, false)
    }
}
