import React from 'react';
import { Button, Form, FormGroup, Input, Col, Row, Container, Label } from 'reactstrap';
import SelectComponent from './SelectComponent';

export default class CreateCourse extends React.Component {

    constructor(props) {
        super(props);
        const listGeneral = ['Nikolson', 'Dekker', 'Spinoza', 'Morningstar'];
        const listSelected = [];
        this.state = {
            listGeneral: listGeneral,
            listSelected: listSelected,
            itemSelected: null,
            itemRemoved: null,
        }
    }

    markItemAsSelected = (elem) => {
        const item = elem.target.value;
        this.setState({
            itemSelected: item
        })
    }

    markItemAsRemoved = (elem) => {
        const item = elem.target.value;
        this.setState({
            itemRemoved: item
        })
    }

    addItemToSelected = () => {
        const {
            itemSelected,
            listGeneral,
            listSelected,
        } = this.state;

        if (itemSelected !== null) {
            listSelected.push(itemSelected);
            listGeneral.splice(listGeneral.indexOf(itemSelected), 1);
            this.setState({
                listGeneral: listGeneral,
                listSelected: listSelected,
                itemSelected: null
            })
        }
    }

    removeItemFromSelected = () => {
        const {
            itemRemoved,
            listGeneral,
            listSelected,
        } = this.state;
        if (itemRemoved !== null) {
            listGeneral.push(itemRemoved);
            const index = listSelected.indexOf(itemRemoved);
            listSelected.splice(index, 1);
            this.setState({
                listGeneral: listGeneral,
                listSelected: listSelected,
                itemRemoved: null
            });
        }
    }

    render() {
        return (
            <Container>

                <Row className="create-course-form">
                    <Col sm={{ size: 7 }}>
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
                            <FormGroup row >
                                <SelectComponent list={this.state.listGeneral} onClickFunc={this.markItemAsSelected} className='general-authors-list' name="authors" />

                                <Col sm={{ size: 2, offset: 1 }}>
                                    <Button className="add-remove-author-to-list" onClick={this.addItemToSelected} type="button" block> Add </Button>
                                </Col>

                                <Col sm={{ size: 2, offset: 1 }}>
                                    <Button className="add-remove-author-to-list" onClick={this.removeItemFromSelected} type="button" block> Remove </Button>
                                </Col>

                                <SelectComponent list={this.state.listSelected} onClickFunc={this.markItemAsRemoved} className='general-authors-list' name="authors1"  />

                            </FormGroup>

                            <FormGroup row>
                                <Col sm={{ size: 6, offset: 3 }}>
                                    <Button className="login-button" type="submit" block>Create</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container >
        );
    }
}