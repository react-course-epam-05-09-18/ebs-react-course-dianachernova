import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import logo from './img/Logo.jpg'
import Courses from './Courses'
const history = createBrowserHistory()

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" height='200' width='200' />
                <a href ="/courses">Courses</a>
                <BrowserRouter history={history}>
                    <div>
                        <Link to="/courses"></Link>

                        <Route path="/courses" component={Courses} />
                    </div>
                </BrowserRouter>

            </div>
        );
    }
}