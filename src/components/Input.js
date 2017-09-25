// Dependencies
import React, { PropTypes } from 'react';

const Input = (props) => (
  <div className="form-group">
    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
      className="form-control"
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  textarea: false,
};

export default Input;
