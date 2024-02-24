import React from 'react';
import PropTypes from 'prop-types';
// import { Loader } from 'components/loader';

const CustomButton = (props) => {
  const {
    style,
    label,
    onClick,
    className,
    isLoading,
    loaderInline,
    enableLoader,
    // loaderStyle = {},
    isDisabled,
    ...rest
  } = props;

  return (
    <button
      style={style}
      data-testid="primary-button"
      className={`custom-button ${className} relative`}
      onClick={onClick}
      disabled={isDisabled ? isDisabled : isLoading}
      {...rest}
    >
      <span>{label}</span>
      {/* {isLoading && enableLoader && (
        <Loader loaderInline={loaderInline} smaller loaderStyle={loaderStyle} />
      )} */}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  enableLoader: PropTypes.bool,
  loaderInline: PropTypes.bool
};

CustomButton.defaultProps = {
  label: 'Button',
  onClick: () => {},
  className: '',
  isLoading: false,
  enableLoader: false,
  loaderInline: false,
  loaderStyle: {}
};

export default CustomButton;
