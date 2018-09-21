import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

export class SelectComponent extends Component {
    // render() {
    //     const listForSelect = this.props.list;
    //     const onClick = this.props.onClick;
    //     const isChosen = this.props.isChosen;
    //     return (
    //         <select multiple className={this.props.className} name={this.props.name}>
    //             {this.displayList(listForSelect, isChosen, onClick)}
    //         </select>
    //     );
    // }

    // displayList = (list, isChosen, onClick) => {
    //     return list.reduce((acc, currentValue) => {
    //          if(currentValue.isSelected === isChosen) {
    //            acc.push(<option key={acc} onClick={onClick}>{currentValue.name}</option>);
    //          }
    //          return acc;
    //     }, []);
    // }

    static get propTypes() {
        return {
            list: PropTypes.arrayOf(PropTypes.shape({
                // value: PropTypes.string.isRequired,
                // isSelected: PropTypes.boolean.isRequired,

            })).isRequired,
            name: PropTypes.string.isRequired,
            className: PropTypes.string,
        };
    }

    render() {
        const {
            name,
            className,
            onClick
        } = this.props;
        return (
            <select multiple name={name} className={className}>
                {this.renderOptions()}
            </select>)
    }
    renderOptions() {
        const {
            list,
        } = this.props;

        return list.map((option) => this.renderOption(option))
    }

    renderOption(option) {
        const {
            onClick,
        } = this.props;

        const{
            name,
        } = option;
        return <option key={name} onClick={onClick}>{name}</option>
    }
}
