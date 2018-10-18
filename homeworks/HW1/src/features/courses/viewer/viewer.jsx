import React from 'react';
import {connect} from 'react-redux';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Table,
  Row
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {createCourse} from '../../../core/entities/course';
import {getAllCourses} from '../store';
import './viewer.css'

 class CoursesViewerPage extends React.Component {
  state = {
    courses: []
  }

  // componentWillMount() {
  //   const courses = this.getCourses();
  //   this.setState({
  //     courses: courses
  //   });
  // }

  componentDidMount() {
    this.props.getAllCourses();
  }

  render() {
    return (
      <div>
        <Row className="general-courses-div">
          <Col sm={{size: 6, offset: 2}}>
            <Form className="search-form">
              <FormGroup row>
                <Input className="search-field" type="text" name="search" tabIndex="1" placeholder="search by title or date..." />
                <Col sm={{size: 2}}>
                  <Button className="search-button" type="submit" block>Search</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col sm={2}>
            <Link to="/courses/add">
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

  // getCourses = () => {

  // }

  renderCourses = () => {
    const {
      courses
    } = this.props;

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
}

const mapStateToProps = (state, ownProps) => ({
  courses: state.courses,
})

export const CoursesViewer = connect(mapStateToProps, {getAllCourses})(CoursesViewerPage);
