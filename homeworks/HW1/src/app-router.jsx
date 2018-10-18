import React from 'react'
import {Route, Link, Switch} from "react-router-dom"
import {Router} from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-through';
import {NavLink} from 'react-router-dom';

import {asyncComponent} from './common/components'

const Login = asyncComponent(() =>
    import('./features').then(module => module.Login)
)
const CoursesViewer = asyncComponent(() =>
    import('./features').then(module => module.CoursesViewer))

const CoursesCreator = asyncComponent(() =>
    import('./features').then(module => module.CoursesCreator)
)

const AuthorizationChecker = asyncComponent(() =>
    import('./features/user/login/components/auth-checker').then(module => module.AuthorizationChecker)
)

const ErrorPageNotFound = asyncComponent(() =>
    import('./features/page-not-found').then(module => module.ErrorPageNotFound)
)

const history = createBrowserHistory()

export class AppRouter extends React.Component {

    render() {
        return (
            // <Provider>

                <Router history={history}>
                    <div>
                        <div className="App-header"><h1 className="logo">CourseS</h1></div>

                        <div className="navigation">
                            <Link to="/login">Log in</Link> |
                        <Link to="/courses"> Courses</Link>
                        </div>

                        <div className="navigation">

                        </div>

                        <hr />
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/login" component={Login} />
                            <Route exact path="/courses" component={CoursesViewer} />
                            <Route path="/courses/add" component={CoursesCreator} />
                            <Route path="/courses/:id" component={CoursesCreator} />
                            <Route component={ErrorPageNotFound} />
                        </Switch>
                    </div>
                </Router>
            // </Provider>
        );
    }
}
