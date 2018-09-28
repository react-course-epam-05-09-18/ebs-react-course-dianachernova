import React from 'react'
import {Route, Link, Switch} from "react-router-dom"
import {Router} from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import {CoursesViewer} from './features/courses/viewer';
import {Login} from './features'
import {CoursesCreator} from './features/courses/creator';
import {ErrorPageNotFound} from './features/page-not-found';
import {AuthorizationChecker} from './features/user/login/components/auth-checker';

// ** THIS VARIANT NEEDS TO BE REVIEWED **
// async.js is applied in common/components/async
//
// const Login = asyncComponent(() =>
//     import('./features/user/login').then(module => module.default)
// )
// const CoursesViewer = asyncComponent(() =>
//     import('./features/courses/viewer/viewer').then(module => module.default))

// const CoursesCreator = asyncComponent(() =>
//     import('./features/courses/creator').then(module => module.default)
// )

// const AuthorizationChecker = asyncComponent(() =>
//     import('./features/user/login/components/auth-checker').then(module => module.default)
// )

// const ErrorPageNotFound = asyncComponent(() =>
//     import('./features/page-not-found').then(module => module.default)
// )

const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));
const loadedComponent = (component) => {
    return isReactComponent(component)
        ? {component}
        : {
            getComponent: (loc, cb) => component(
                comp => cb(null, comp.default || comp))
        }
};

const history = createBrowserHistory()

export class AppRouter extends React.Component {

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
                        <Route exact path="/"{...loadedComponent(Login)} />
                        <Route path="/login" {...loadedComponent(Login)} />
                        <Route exact path="/courses" {...loadedComponent(AuthorizationChecker(CoursesViewer))} />
                        <Route path="/courses/add" {...loadedComponent(AuthorizationChecker(CoursesCreator))} />
                        <Route path="/courses/:id" {...loadedComponent(AuthorizationChecker(CoursesCreator))} />
                        <Route component={ErrorPageNotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
