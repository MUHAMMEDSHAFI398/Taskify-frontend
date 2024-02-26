import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const CustomButton = (props) => {
  const {
    style,
    label,
    onClick,
    className,
    isLoading,
    ...rest
  } = props;

  return (
    <button
      style={style}
      className={`custom-button ${className} relative`}
      onClick={onClick}
      disabled={isLoading ? isLoading : false}
      {...rest}
    >
      <span>{label}</span>
      <ClipLoader
        color='white'
        size={19}
        loading={isLoading}
      />
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

CustomButton.defaultProps = {
  label: 'Button',
  onClick: () => { },
  className: '',
  isLoading: false,
};

export default CustomButton;
