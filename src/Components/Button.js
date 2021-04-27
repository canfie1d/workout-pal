import {createElement} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = props => {
  const classes = [
    props.componentCSSClassName,
    `${props.componentCSSClassName}--${props.color}`,
    props.textColor ? `${props.componentCSSClassName}--${props.textColor}-text` : null,
    props.collapsed ? `${props.componentCSSClassName}--collapsed` : null,
    props.disabled ? `${props.componentCSSClassName}--disabled` : null,
    props.className && props.className,
  ];

  const childClassName = props.componentCSSClassName + '__children';

  return props.element === 'Link' ?
    <Link
      id={props.id}
      className={classNames(classes)}
      to={props.to}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
      style={props.style}
    >
      {props.children}
    </Link> :
    createElement(
      props.element,
      {
        id: props.id,
        className: classNames(classes),
        href: props.href,
        target: props.target,
        rel: 'noopener noreferrer',
        onClick: props.onClick,
        disabled: props.disabled,
        tabIndex: props.tabIndex,
        type: props.type,
        hidden: props.hidden,
        'aria-label': props.ariaLabel,
        'data-tip': props.dataTip,
        'data-event': props.dataEvent,
        'data-for': props.dataFor,
        download: props.download,
        style: props.style,
      },
      createElement(
        'span',
        {className : childClassName},
        props.children
      )
    );
};

Button.defaultProps = {
  id: null,
  element: 'button',
  componentCSSClassName: 'button',
  type: 'button',
  disabled: false,
  className: null,
  href: null,
  target: null,
  onClick: null,
  tabIndex: '0',
  color: 'primary',
  collapsed: false,
  hidden: false,
  download: false,
};

Button.propTypes = {
  /** Unique Identifier */
  to: PropTypes.string,
  /** Unique Identifier */
  id: PropTypes.string,
  /** Type of DOM node to render */
  element: PropTypes.oneOf([
    'a',
    'button',
    'Link'
  ]),
  /** Color of text string */
  textColor: PropTypes.string,
  /** Class name to apply to the rendered element */
  componentCSSClassName: PropTypes.string,
  /** Used to toggle disabled state */
  disabled: PropTypes.bool,
  /** Used to remove padding */
  collapsed: PropTypes.bool,
  /** Select button color */
  color: PropTypes.oneOf([
    'primary',
    'transparent',
    'ghost',
    'ghost--light',
    'ghost--white',
    'white',
    'dashed'
  ]),
  /** Allows for element class overrides */
  className: PropTypes.string,
  /** Used with element to provide an anchor with an href location */
  href: PropTypes.string,
  /** Used with element to provide an anchor with a click target */
  target: PropTypes.string,
  /** function to handle button clicks */
  onClick: PropTypes.func,
  /** Allows manual entry of a tabIndex (should almost never be necessary) */
  tabIndex: PropTypes.string,
  /** The content to render in the button */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  /** ??? */
  hidden: PropTypes.bool,
  /** ??? */
  dataTip: PropTypes.bool,
  /** ??? */
  dataEvent: PropTypes.string,
  /** ??? */
  dataFor: PropTypes.string,
  /** ??? */
  download: PropTypes.bool,
  /** ??? */
  ariaLabel: PropTypes.string,
};

export default Button;
