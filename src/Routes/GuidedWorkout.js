import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { schedule } from '../Data/schedule';
import Button from "../Components/Button";
import WorkoutCard from "../Components/WorkoutCard";
import Flex from "../Layout/Flex";

const GuidedWorkout = props => {
  const history = useHistory();
  const params = useParams();
  const workout = schedule[`week${params.week}`][params.day];
  const [workoutNumber, setWorkoutNumber] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(false);

  useEffect(() => {
    if (workoutNumber === workout.workouts.length - 1) {
      setAutoAdvance(false);
    } else if (autoAdvance) {
      setInterval(() => {
        setWorkoutNumber(workoutNumber + 1);
      }, 60000)
    }
  }, [autoAdvance, workoutNumber]); // eslint-disable-line

  const handleAutoAdvance = () => {
    setAutoAdvance(!autoAdvance);
  }

  const handlePreviousClick = () => {
    setAutoAdvance(false);
    if (workoutNumber !== 0) {
      setWorkoutNumber(workoutNumber - 1)
    }
  }

  const handleNextClick = () => {
    setAutoAdvance(false);
    if (workoutNumber !== 5) {
      setWorkoutNumber(workoutNumber + 1)
    }
  }

  const renderWorkoutCards = (workouts) => {
    return workouts.map((workout, i) => (
      <Flex.Column
        key={`workout-${i}`}
        basis='100%'
        grow={0}
        shrink={0}
        style={{marginBottom: '24px', transform: `translateX(-${workoutNumber * 100}%)`}}
      >
        <WorkoutCard workout={workout} i={i} />
      </Flex.Column>
    ))
  }

  return (
    <>
      <Flex style={{marginBottom: '24px'}} justify='space-between'>
        <Button onClick={history.goBack}>Complete Guided Workout</Button>
        <Button onClick={handleAutoAdvance}>{autoAdvance ? 'Pause' : 'Start'}</Button>
      </Flex>
      <Flex style={{width: '100%', overflow: 'hidden'}}>
        {renderWorkoutCards(workout.workouts)}
      </Flex>
      <Flex justify='center'>
        <Flex.Column grow={0}>
          <Button onClick={handlePreviousClick}>Previous</Button>
        </Flex.Column>
        <Flex.Column grow={0}>
          <Button onClick={workoutNumber === workout.workouts.length - 1 ? history.goBack : handleNextClick}>{workoutNumber === workout.workouts.length - 1 ? 'Complete Workout' : 'Next'}</Button>
        </Flex.Column>
      </Flex>
    </>
  );
}

export default GuidedWorkout;
