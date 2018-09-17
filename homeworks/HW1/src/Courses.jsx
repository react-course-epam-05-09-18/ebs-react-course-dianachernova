import React from 'react';
import { Button, Form, FormGroup, Input, Col, Table, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css'
export default class Courses extends React.Component {

    renderCourses = () => {
        const courses = [{
            title: "React Redux",
            duration: "16h",
            description: `Adipisicing elit.
            Harum pariatur porro quam est exercitationem rem ut corrupti
            tempore! Mollitia ad similique dolore voluptas.
            Corrupti saepe placeat blanditiis aliquam totam sed?`
        },
        {
            title: "Node.js",
            duration: "36h",
            description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nemo ratione enim laudantium aspernatur, cupiditate quis
            placeat sapiente minus dolore ab necessitatibus aliquam magni
            earum neque assumenda accusantium veniam est voluptatibus`
        },
        {
            title: "Ajax",
            duration: "6h",
            description: `Nemo ratione enim laudantium aspernatur, cupiditate quis
            placeat sapiente minus dolore ab necessitatibus aliquam magni
            earum neque assumenda accusantium veniam est`
        }];
        return courses.map((course, index) => {
            return (<tr key={index}>
                <td>
                    <h3 className="table-course-name">{course.title}</h3>
                    <div className='table-course-duration'>{course.duration}</div>
                    {course.description}
                </td>
                <td><Button className="edit-delete-course-button" type="submit" block>Edit</Button></td>
                <td><Button className="edit-delete-course-button" type="submit" block>Delete</Button></td>
            </tr>);

        });
    }

    render() {
        return (
            <div>
                <Row className="general-courses-div">
                    <Col sm={{ size: 6, offset: 2 }}>
                        <Form className="search-form">
                            <FormGroup row>
                                <Input className="search-field" type="text" name="search" tabIndex="1" placeholder="search by title or date..." />
                                <Col sm={{ size: 2 }}>
                                    <Button className="search-button" type="submit" block>Search</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col sm={2}>
                        <Link to="/create-course">
                            <Button className="search-button" type="submit" block>Create course</Button>
                        </Link>
                    </Col>
                </Row>

                <Table className="table">
                    <tbody>
                        {this.renderCourses()}
                    </tbody>
                </Table>
            </div>
        );
    }
}