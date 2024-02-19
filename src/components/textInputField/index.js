/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = React.forwardRef((props, ref) => {
    const {
        name,
        error,
        className,
        placeholder,
        renderIcon,
        children,
        register,
        required,
        onChange,
        selectedIconStyle,
        iconClassName,
        readOnly,
        containerStyle,
        value,
        ...rest
    } = props;

    const isError = error ? 'error' : '';

    const hasIcon = renderIcon ? 'input-field--has-icon' : '';


    return (
        <div className="relative" style={containerStyle}>
            <input
                ref={ref}
                data-testid="input-text-field"
                type="text"
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`input-field ${hasIcon} ${className} ${isError}`}
                readOnly={readOnly}
                value={value}
                {...register(name, { required })}
                {...rest}
            />
            {renderIcon && (
                <div className={`input-svg-wrapper ${iconClassName}`}>
                    {renderIcon()}
                </div>
            )}
            {children}
        </div>
    );
});

TextInputField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool,
    required: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    renderIcon: PropTypes.func,
    onChange: PropTypes.func,
};

TextInputField.defaultProps = {
    placeholder: 'Name',
    required: false,
    register: () => { },
    iconClassName: '',
};

export default TextInputField;