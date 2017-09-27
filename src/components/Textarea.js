// Dependencies
import React, { PropTypes } from 'react';

const Textarea = (props) => (
  <div className="form-group">
    <textarea
      onChange={props.onChange}
      value={props.value}
      className="form-control"
      placeholder={props.placeholder}
    />
  </div>
);

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textarea;
