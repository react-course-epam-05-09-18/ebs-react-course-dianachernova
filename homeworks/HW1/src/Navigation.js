import React from 'react'
import {Route, Link, Switch} from "react-router-dom"
import {Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory"
import PropTypes from 'prop-types';
import {Courses} from './Courses'
import {Login} from './Login'
import {CreateCourse} from './CreateCourse';
import {ErrorPageNotFound} from './page404';
import './App.css';

const history = createBrowserHistory()

export class Navigation extends React.Component {
    render() {
        return (
            <Router history={history}>

                <div>

                    <div className="App-header"><h1 className="logo">CourseS</h1></div>

                    <div className="navigation">
                        <Link to="/login">Log in</Link> |
                        <Link to="/courses"> Courses</Link>
                    </div>

                    <hr />
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/courses" component={Courses} />
                        <Route path="/courses/add" component={CreateCourse} />
                        <Route path="/courses/:id" component={CreateCourse} />
                        <Route component={ErrorPageNotFound} />
                    </Switch>

                </div>
            </Router>

        );
    }
}

Courses.propTypes = {
    Login: PropTypes.object.isRequired,
    Courses: PropTypes.object.isRequired,
    CreateCourse: PropTypes.object.isRequired,
    ErrorPageNotFound: PropTypes.object.isRequired
}

