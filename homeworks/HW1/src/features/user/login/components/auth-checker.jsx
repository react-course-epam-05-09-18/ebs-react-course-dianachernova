import React from 'react';
import {Redirect} from 'react-router-dom';

export const AuthorizationChecker = (Component) => {
  return class Auth extends React.Component {
    state = {
      auth: false
    }

    componentWillMount() {
      if (localStorage.getItem('token')) {
        this.setState({
          auth: true
        })
      } else {
        this.setState({
          auth: false
        })
      }
    }

    render() {
      if (this.state.auth) {
        return <Component {...this.props} />
      } else {
        return <Redirect to={{pathname: '/login'}} />
      }
    }
  }
}
