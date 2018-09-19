import React from 'react';
import {Input} from 'reactstrap';
import './App.css';

export class InputValidatedField extends React.Component {

    constructor(props) {
        super(props);
        const error = {
            message: null
        };
        this.state = {
            error: error
        }
        this.validateInput = this.validateInput.bind(this);
    }

    validateInput = (e) => {
        const input = e.target.value;
        let error = null;
        if (!input) {
            error = {
                message: `Do not leave ${e.target.name} empty`
            }
            this.setState({
                error: error
            });
        } else {
            this.setState({
                error: null
            })
        }
    };

    render() {
        return (
            <div className="w-100">
                <Input type={this.props.type} name={this.props.name}
                    tabIndex={this.props.tabIndex} className={this.props.className}
                    placeholder={this.props.placeholder}
                    onBlur={this.validateInput} required />
            </div>
        );
    }
}
