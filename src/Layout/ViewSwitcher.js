import PropTypes from 'prop-types';

// Should this component be a function isntead of a Component?
const ViewSwitcher = props => {
  const element = props.children.find(child => {
    return child.props.view === props.displayedView
  })

  return (
    element || null
  )
}

ViewSwitcher.propTypes= {
  displayedView: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ])
}

export default ViewSwitcher;
