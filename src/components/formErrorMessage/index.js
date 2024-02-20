import PropTypes from 'prop-types';

const FiedErrorMessage = (props) => {
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
                        style={{ color: 'red'}}
                    >
                        <span
                            className={`absolute text-[13px] ${className} ${style}`}
                        >
                            {errorMessage}
                        </span>
                    </div>
                )
            }
        </>
    )
}

FiedErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
    containerClassName: PropTypes.string,
    className: PropTypes.string
};

FiedErrorMessage.defaultProps = {
    className: '',
    containerClassName: '',
    errorMessage: 'Error message'
};

export default FiedErrorMessage