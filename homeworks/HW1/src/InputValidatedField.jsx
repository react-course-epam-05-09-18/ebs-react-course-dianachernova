import React from 'react';
import {Input} from 'reactstrap';
import './App.css';

export class InputValidatedField extends React.Component {
    constructor(props) {
        super(props);
        const error = '';
        this.state = {
            error: error
        }
        this.validateInput = this.validateInput.bind(this);
    }

    render() {
        return (
            <div className="w-100">
                <Input type={this.props.type} name={this.props.name}
                    tabIndex={this.props.tabIndex} className={this.props.className}
                    placeholder={this.props.placeholder}
                    onBlur={this.validateInput} required 
                    onChange={this.props.onChange}/>
                <label className="validation-error-message">{this.state.error ? `${this.state.error}` : ""}</label>
            </div>
        );
    }

    validateInput = (e) => {
        const value = e.target.value;
        let error = null;
        if (!value) {
            error = `Do not leave ${e.target.name} empty`;
            this.setState({
                error: error
            });
        } else {
            this.setState({
                error: ''
            })
        }
    };
}
