import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OpenEye from 'assets/icons/icon-eye-open.svg';
import CloseEye from 'assets/icons/icon-eye-close.svg';
import { ReactComponent as LockIcon } from 'assets/icons/passwordIcon.svg';

const PasswordInput = (props) => {
  const {
    inputClassName,
    className,
    placeholder,
    error,
    name,
    register,
    required,
    containerStyle,
    ...rest
  } = props;

  const [showIcon, setShowIcon] = useState(false);
  const isError = error ? 'error' : '';
  
  return (
    <div className="relative" style={containerStyle}>
                  <span style={{zIndex:1, left:'91%', top:'35%'}} className='absolute cursor-pointer' onClick={() => setShowIcon(!showIcon)}>
        {showIcon ? (
          <img data-testid="open-eye" src={OpenEye} alt="open-eye" />
        ) : (
          <img data-testid="close-eye" src={CloseEye} alt="close-eye" />
        )}
      </span>
      <input
        name={name}
        type={showIcon ? 'text' : 'password'}
        className={`input-field input-field--has-icon ${className} ${isError}`}
        placeholder={placeholder}
        {...register(name, { required })}
        {...rest}
      />
          <div className="input-svg-wrapper">
          <LockIcon />
        </div>
    </div>
  );
};

PasswordInput.propTypes = {
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};

PasswordInput.defaultProps = {
  className: '',
  inputClassName: '',
  placeholder: 'Enter Password',
  required: false,
  register: () => {},
};

export default PasswordInput;
