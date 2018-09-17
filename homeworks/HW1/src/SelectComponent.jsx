import React, { Component } from 'react';
import './App.css';

export default class SelectComponent extends Component {
    render() {
        const listForSelect = this.props.list;
        const onClickFunc = this.props.onClickFunc;
        return (
            <select multiple className={this.props.className} name={this.props.name} multiple>
                {listForSelect.map((elem, index) => <option key={index} onClick={onClickFunc}>{elem}</option>)}
            </select>
        );
    }
}