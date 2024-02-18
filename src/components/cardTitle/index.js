import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = (props) => {
  const {
    title,
    subTitle,
    className,
    titleClassName,
    subTitleClassName,
  } = props
  return (
    <div className={`text-center ${className}`}>
      <h1 className={`text-2xl font-bold ${titleClassName}`}>{title}</h1>
      {subTitle && <p className={`text-sm text-grey-800 mt-3 ${subTitleClassName}`}>{subTitle}</p>}
    </div>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

CardTitle.defaultProps = {
  title: '',
  className: '',
  titleClassName: '',
  subTitleClassName: ''
};

export default CardTitle;
