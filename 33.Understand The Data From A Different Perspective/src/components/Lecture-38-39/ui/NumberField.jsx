import React from 'react';
import PropTypes from 'prop-types';

const NumberField = ({value, onChange, name}) => {
    const style = {
        padding: '0.25rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',
        outline: 'none',
    };

    return (
        <input
            style={style}
            type="number"
            value={value}
            onChange={onChange}
            name={name}
        />
    );
}

NumberField.protoTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default NumberField;
