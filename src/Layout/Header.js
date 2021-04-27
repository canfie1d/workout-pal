import { Link } from 'react-router-dom';
import WorkoutPicker from '../Components/WorkoutPicker';
import Flex from './Flex';

const Header = props => {
  return (
    <header className='header'>
      <Flex alignment='center' justify='space-between'>
        <Flex>
          <WorkoutPicker inline />
        </Flex>
        <Flex.Column grow={0}>
          <Link style={{marginRight: '12px'}} className='a' to="/browse">Workouts</Link>
          <Link className='a' to="/stretch">Stretches</Link>
        </Flex.Column>
      </Flex>
    </header>
  );
}

export default Header;
