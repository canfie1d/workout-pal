import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { schedule } from '../Data/schedule';
import Button from "../Components/Button";
import WorkoutCard from "../Components/WorkoutCard";
import Flex from "../Layout/Flex";
import Badge from '../Components/Badge';
import Icon from '../Components/Icon';

const GuidedWorkout = props => {
  const history = useHistory();
  const params = useParams();
  const workout = schedule[`week${params.week}`][params.day];
  const [workoutNumber, setWorkoutNumber] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      if (workoutNumber === workout.workouts.length - 1) {
        setAutoAdvance(false);
      } else if (autoAdvance) {
        setWorkoutNumber(workoutNumber + 1);
      }
    }, 60000);

    return () => clearInterval(slideTimer);
  }, [autoAdvance, workoutNumber]); // eslint-disable-line

  useEffect(() => {
    const clockTimer = setInterval(() => {
      if (autoAdvance) {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          setTimer(60);
        }
      } else {
        setTimer(60);
      }
    }, 1000);

    return () => clearInterval(clockTimer);
  }, [autoAdvance, timer, workoutNumber]);

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
    return workouts.map((workout, i) => {
      return (
        <Flex.Column
          key={`workout-${i}`}
          basis='100%'
          grow={0}
          shrink={0}
          style={{marginBottom: '24px', transform: `translateX(-${workoutNumber * 100}%)`}}
        >
          <Flex alignment='center'>
            <Flex.Column
              basis='70%'
              grow={0}
              shrink={0}
            >
              <WorkoutCard workout={workout} />
            </Flex.Column>
            <Flex.Column
              basis='30%'
              grow={0}
              shrink={0}
            >
              <h3>Up Next:</h3>
              {workouts[i + 1] === undefined ?
                <Button onClick={history.goBack}>Complete Workout</Button> :
                <>
                  <WorkoutCard workout={workouts[i + 1]} />
                  {workouts[i + 1].rest !== undefined && (
                    <h3>Rest: <span style={{whiteSpace: 'nowrap'}}>{workouts[i].rest} seconds</span></h3>
                  )}
                </>}
            </Flex.Column>
          </Flex>
        </Flex.Column>
      );
    })
  }

  return (
    <>
      <Flex style={{marginBottom: '24px'}} justify='space-between'>
        <Button color='transparent' collapsed onClick={history.goBack}>
          <span className='visually-hidden'>Go back to workout overview</span>
          <Icon name='Caret' color='primary' rotate={90} size='x-large' />
        </Button>
        <Flex justify='center'>
          <Flex.Column grow={0}>
            <Button color='ghost' onClick={handlePreviousClick}>Previous</Button>
          </Flex.Column>
          <Flex.Column grow={0}>
            <Button color='ghost' onClick={workoutNumber === workout.workouts.length - 1 ? history.goBack : handleNextClick}>{workoutNumber === workout.workouts.length - 1 ? 'Complete Workout' : 'Next'}</Button>
          </Flex.Column>
        </Flex>
        <Flex.Column grow={0}>
          <Flex alignment='center'>
            <Flex.Column>
              <Badge count={timer} />
            </Flex.Column>
            <Button onClick={handleAutoAdvance}>{autoAdvance ? 'Stop' : 'Start'}</Button>
          </Flex>
        </Flex.Column>
      </Flex>
      <Flex style={{width: '100%', overflow: 'hidden'}}>
        {renderWorkoutCards(workout.workouts)}
      </Flex>
    </>
  );
}

export default GuidedWorkout;
