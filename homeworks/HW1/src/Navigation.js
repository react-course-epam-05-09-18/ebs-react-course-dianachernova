import React from 'react'
import { Route, Link } from "react-router-dom"
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory"
import Courses from './Courses'
import Login from './Login'
import './App.css';
import CreateCourse from './CreateCourse';

const history = createBrowserHistory()

class Navigation extends React.Component {
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

                    <Route path="/login" component={Login} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/create-course" component={CreateCourse}/>
                </div>
            </Router>

        );
    }
}


export default Navigation