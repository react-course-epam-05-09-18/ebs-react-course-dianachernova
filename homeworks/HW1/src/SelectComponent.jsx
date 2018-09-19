import React, {Component} from 'react';
import './App.css';

export class SelectComponent extends Component {
    render() {
        const listForSelect = this.props.list;
        const onClickFunc = this.props.onClickFunc;
        const isChosen = this.props.isChosen;
        return (
            <select multiple className={this.props.className} name={this.props.name}>
                {listForSelect.filter(item => isChosen === item.isSelected).map((elem, index) => <option key={index} onClick={onClickFunc}>{elem.name}</option>)}
            </select>
        );
    }
}
