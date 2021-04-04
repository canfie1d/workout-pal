import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = props => {
  const classes = [
    'card',
    props.fullWidth && 'card--full-width',
    props.collapsed && 'card--collapsed',
    props.className && props.className
  ];

  return (
    <props.element className={classNames(classes)}>
      {props.children}
    </props.element>
  );
}

Card.defaultProps = {
  element: 'div',
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  element: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default Card;
