import React from 'react';
import { Button, Form, FormGroup, Input, Col, Row, Container, Label } from 'reactstrap';


export default class CreateCourse extends React.Component {

    constructor(props) {
        super(props);
        var listGeneral = ['Nikolson', 'Dekker', 'Spinoza', 'Morningstar'];
        var listSelected = [];
        this.state = {
            listGeneral,
            listSelected,
            itemSelected: null,
            itemRemoved: null
        }
    }

    renderAllItem = () => {
        const listGeneral = this.state.listGeneral;
        return listGeneral.map((elem, index) => <option key={index} onClick={this.markItemAsSelected}>{elem}</option>)
    }

    renderSelectedItems = () => {
        const listSelected = this.state.listSelected;
        return listSelected.map((elem, index) => <option key={index} onClick={this.markItemAsRemoved}>{elem}</option>)
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
        const elem = this.state.itemSelected;
        const listGeneral = this.state.listGeneral;
        const listSelected = this.state.listSelected;

        if (elem !== null) {
            listSelected.push(elem);
            listGeneral.splice(listGeneral.indexOf(elem), 1);
            this.setState({
                listGeneral,
                listSelected,
                itemSelected: null
            })
        }
    }

    removeItemFromSelected = () => {
        const elem = this.state.itemRemoved;
        const listGeneral = this.state.listGeneral;
        const listSelected = this.state.listSelected;

        if (elem !== null) {
            listGeneral.push(elem);
            listSelected.splice(listSelected.indexOf(elem), 1);
            this.setState({
                listGeneral,
                listSelected,
                itemRemoved: null
            })
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
                                <select className='general-authors-list' name="authors" multiple>
                                    {this.renderAllItem()}
                                </select>
                                <Col sm={{ size: 2, offset: 1 }}>
                                    <Button className="add-remove-author-to-list" onClick={this.addItemToSelected} type="button" block> Add </Button>
                                </Col>
                                <Col sm={{ size: 2, offset: 1 }}>
                                    <Button className="add-remove-author-to-list" onClick={this.removeItemFromSelected} type="button" block> Remove </Button>
                                </Col>

                                <select className='general-authors-list' name="authors" multiple>
                                    {this.renderSelectedItems()}
                                </select>
                            </FormGroup>

                            <FormGroup row>
                                <Col sm={{ size: 6, offset: 3 }}>
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