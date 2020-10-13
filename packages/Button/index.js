import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

  class Button extends React.PureComponent {
    render() {
      const { size, disabled, text, onClick } = this.props;
      return (
        <button className={`button button--${size}`} disabled={disabled} onClick={onClick}>
          {text}
        </button>
      );
    }
  }

  Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  Button.defaultProps = {
    size: 'small',
    disabled: false,
    onClick: null,
  };

  export default Button;