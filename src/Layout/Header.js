import { Link } from 'react-router-dom';
import Flex from './Flex';

const Header = props => {
  return (
    <header className='header'>
      <Flex justify='space-between'>
        <Link className='a' to="/">Workout Pal</Link>
        <Flex.Column grow={0}>
          <Link style={{marginRight: '12px'}} className='a' to="/browse">Workouts</Link>
          <Link className='a' to="/stretch">Stretches</Link>
        </Flex.Column>
      </Flex>
    </header>
  );
}

export default Header;
