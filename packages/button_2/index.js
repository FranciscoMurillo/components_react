import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Button extends React.PureComponent {
  render() {
    return (
      <button className="button">
        Button
      </button>
    );
  }
}

Button.propTypes = {

};

module.exports = Button;