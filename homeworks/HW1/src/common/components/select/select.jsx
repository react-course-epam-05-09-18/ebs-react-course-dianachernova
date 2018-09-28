import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Select extends Component {
    static get propTypes() {
        return {
            name: PropTypes.string.isRequired,
            className: PropTypes.string,
        };
    }

    render() {
        const {
            name,
            className
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
