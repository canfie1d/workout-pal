import PropTypes from 'prop-types';
import Button from './Button';

const ButtonCard = props => {
  return (
    <Button
      onClick={props.onClick}
      componentCSSClassName='button-card'
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
}

ButtonCard.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonCard;
