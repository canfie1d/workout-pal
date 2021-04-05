import React from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames';

export default class Badge extends React.Component {
  render() {
    const classes = [
      'badge',
      `badge--${this.props.color}`,
      this.props.size && `badge--${this.props.size}`
    ];

    return (
      <div className={classNames(classes)}>
        <span className='badge__content'>{this.props.count}</span>
      </div>
    );
  }
}

Badge.defaultProps= {
  color: 'red'
}

Badge.propTypes= {
  count: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.string,
}
