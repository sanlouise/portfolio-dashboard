// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ addFilter, options }) => {
  const { showReact, showRails, showIOS } = options;

  return (
    <div className="options">
      <div className="col s8 offset-s2 m4 offset-m4 center category-picker">
        <p>Pick one category</p>
        <input
          checked={showReact}
          onClick={addFilter}
          type="checkbox"
          value="react"
          id="react-checkbox"
        />
        <label htmlFor="react-checkbox">React/Redux</label>

        <input
          checked={showRails}
          onClick={addFilter}
          type="checkbox"
          value="rails"
          id="rails-checkbox"
        />
        <label htmlFor="rails-checkbox">Rails</label>

        <input
          checked={showIOS}
          onClick={addFilter}
          type="checkbox"
          value="ios"
          id="rios-checkbox"
        />
        <label htmlFor="ios-checkbox">iOS</label>
      </div>

    </div>
  );
};

Options.propTypes = {
  addFilter: PropTypes.func.isRequired,
  options: PropTypes.shape({
    showBottoms: PropTypes.bool.isRequired,
    showDresses: PropTypes.bool.isRequired,
    showLarge: PropTypes.bool.isRequired,
    showMedium: PropTypes.bool.isRequired,
    showSmall: PropTypes.bool.isRequired,
    showTops: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Options;
