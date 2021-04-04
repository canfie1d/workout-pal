import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = props => {
  const [isMounted, setIsMounted] = useState(false);
  const [icon, setIcon] = useState('');

  useEffect(()=> {
    // This article details webpack magic comments used in dynamic import
    // https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234

    // isMounted is an antipattern but solves the problem for this case
    // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
    setIsMounted(true);

    const iconPath = props.flag ? `./icons/flags/${props.name}.svg` : `./icons/${props.name}`;

    import(/* webpackMode: "eager" */ `${iconPath}`)
      .then(module => {
        return typeof module === 'string' ? module : module.default();
      })
      .then(IconComponent => {
        if (isMounted) {
          setIcon(typeof IconComponent === 'string' ? <img src={IconComponent} alt='' /> : IconComponent);
        }
      })
      .catch(() => {
        console.warn(`ICON NOT FOUND - ${props.name}`)
      })

      return () => setIsMounted(false);
  }, []); // eslint-disable-line

  const classes = [
    'icon',
    props.size && `icon--${props.size}`,
    props.color && `icon--${props.color}`,
    props.rotate && `icon--rotate-${props.rotate}`,
    props.displayInline && 'icon--inline',
    props.dropShadow && 'drop-shadow',
    props.className,
  ];

  return (
    <span className={classNames(classes)} style={props.style}>
      {icon}
    </span>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'xx-small',
    'x-small',
    'small',
    'smedium',
    'large',
    'x-large',
    'full',
    null,
  ]),
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  color: PropTypes.oneOf([
    'core-dark',
    'gray',
    'black',
    'white',
    'magenta',
    'off-white',
    'status--success',
    'status--warning',
    'status--error',
    'current-color',
    null,
  ]),
  className: PropTypes.string,
  displayInline: PropTypes.bool,
  dropShadow: PropTypes.bool,
  flag: PropTypes.bool,
  style: PropTypes.object,
};

Icon.defaultProps = {
  size: null,
  rotate: null,
  color: null,
  class: null
}

export default Icon;
