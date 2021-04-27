import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Flex from '../Layout/Flex';
import Button from "./Button";

const WorkoutPicker = props => {
  const history = useHistory();
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState(0);

  const handleSubmit = () => {
    history.push(`/workout/${week}/${day}`)
  }

  const handleChange = (value, input) => {
    if (input === 'day') setDay(value);
    if (input === 'week') setWeek(value);
  }

  return (
    <form>
      <Flex direction={props.inline ? 'row' : 'column'}>
        {!props.inline && <label style={{color: '#fff'}} htmlFor='week'>Week</label>}
        <select style={!props.inline ? {width: '100%', minWidth: '300px', padding: '8px 4px', marginBottom: '12px'}: {minWidth: '100px', marginRight: '10px', padding: '8px 4px', height: '36px' }} id='week' value={week} onChange={(e) => handleChange(e.target.value, 'week')}>
          <option value='1'>Week 1</option>
          <option value='2'>Week 2</option>
          <option value='3'>Week 3</option>
          <option value='4'>Week 4</option>
        </select>
        {!props.inline && <label style={{color: '#fff'}} htmlFor='day'>Day</label>}
        <select style={!props.inline ? {width: '100%', minWidth: '300px', padding: '8px 4px', marginBottom: '12px'}: {minWidth: '100px', marginRight: '10px', padding: '8px 4px', height: '36px' }} id='day' value={day} onChange={(e) => handleChange(e.target.value, 'day')}>
          <option value='0'>Day 1</option>
          <option value='1'>Day 2</option>
          <option value='2'>Day 3</option>
          <option value='3'>Day 4</option>
        </select>
        <Button className='a' onClick={handleSubmit}>Let's Go</Button>
      </Flex>
      </form>
  );
}

export default WorkoutPicker;
