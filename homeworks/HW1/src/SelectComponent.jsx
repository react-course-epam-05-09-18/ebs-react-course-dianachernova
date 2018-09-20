import React, {Component} from 'react';
import './App.css';

export class SelectComponent extends Component {
    render() {
        const listForSelect = this.props.list;
        const onClick = this.props.onClick;
        const isChosen = this.props.isChosen;
        return (
            <select multiple className={this.props.className} name={this.props.name}>
                {this.displayList(listForSelect, isChosen, onClick)}
            </select>
        );
    }

    displayList = (list, isChosen, onClick) => {
        return list.reduce((acc, currentValue) => {
             if(currentValue.isSelected === isChosen) {
               acc.push(<option key={acc} onClick={onClick}>{currentValue.name}</option>);
             }
             return acc;
        }, []);
    }
}
