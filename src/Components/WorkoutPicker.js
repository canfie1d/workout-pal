import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
        <label htmlFor='week'>Week</label>
        <select style={{width: '100%', padding: '8px 4px', marginBottom: '12px'}} id='week' value={week} onChange={(e) => handleChange(e.target.value, 'week')}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <label htmlFor='day'>Day</label>
        <select style={{width: '100%',padding: '8px 4px', marginBottom: '12px'}} id='day' value={day} onChange={(e) => handleChange(e.target.value, 'day')}>
          <option value='0'>1</option>
          <option value='1'>2</option>
          <option value='2'>3</option>
          <option value='3'>4</option>
        </select>
        <Button onClick={handleSubmit}>Let's Go</Button>
      </form>
  );
}

export default WorkoutPicker;
