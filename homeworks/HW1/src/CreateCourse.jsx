import React from 'react';
import {Button, Form, FormGroup, Input, Col, Row, Container, Label} from 'reactstrap';
import SelectComponent from './SelectComponent';

export default class CreateCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }
    
    markItemAsSelectedOrRemoved = (elem, isSelected) => {
        const name = elem.target.value;
        const authors = this.state.authors;
        authors.filter(item => item.name === name).map(function (item) {
            item.isSelected = isSelected;
        });

        this.setState({
            authors: authors
        });
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
                                    <SelectComponent list={this.state.authors} onClickFunc={(e) => this.markItemAsSelectedOrRemoved(e, true)} isChosen={false} className='general-authors-list' name="authors" />
                                    <SelectComponent list={this.state.authors} onClickFunc={(e) => this.markItemAsSelectedOrRemoved(e, false)} isChosen={true} className='general-authors-list' name="authors1" />
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
}
