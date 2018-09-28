import React, { Component } from 'react';
import '../../../src/App.css';

export class ErrorPageNotFound extends Component {
    render() {
        return (
            <div>
                <h1 className="main-phrase"> No page found for your request</h1>
            </div>
        );
    }
}
