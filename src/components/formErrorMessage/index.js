import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
    const {
        showMessage,
        errorMessage,
        containerClassName,
        className,
        style
    } = props
    return (
        <>
            {
                showMessage && (
                    <div
                        className={`relative ${containerClassName}`}
                        style={{ color: 'red' }}
                    >
                        <span
                            className={`absolute text-[13px] ${className}`}
                            style={style}
                        >
                            {errorMessage}
                        </span>
                    </div>
                )
            }
        </>
    )
}

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
    containerClassName: PropTypes.string,
    className: PropTypes.string
};

ErrorMessage.defaultProps = {
    className: '',
    containerClassName: '',
    errorMessage: 'Error message'
};

export default ErrorMessage