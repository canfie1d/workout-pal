import Header from './Header';
import PropTypes from 'prop-types';

const Layout = props => {
  return (
    <>
      <Header />
      <div className='layout'>
        {props.children}
      </div>
      <footer className='footer'>
        <span className='subtext footer__text'>Dumbbell Workout Plan by <a className='a' href='https://www.coachmag.co.uk/fitness/workouts/dumbbell-workouts' target='_blank' rel='noopener noreferrer'>Coach Mag</a></span>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  browser: PropTypes.object,
  secondaryInfo: PropTypes.object,
  singleColumn: PropTypes.bool,
  title: PropTypes.string,
}

export default Layout;
