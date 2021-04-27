import { useParams, useHistory } from 'react-router-dom';
import { schedule } from '../Data/schedule';
import Flex from '../Layout/Flex';
import Button from '../Components/Button';
import PageHeader from '../Components/PageHeader';
import WorkoutCard from '../Components/WorkoutCard';

const Workout = props => {
  const history = useHistory();
  const params = useParams();
  const workout = schedule[`week${params.week}`][params.day];

  const handleCardClick = i => {
    history.push(`/browse/${i}`);
  }

  const renderWorkoutCards = (workouts) => {
    return workouts.map((workout, i) => (
      <Flex.Column
        key={`workout-${i}`}
        basis='50%'
        grow={0}
        shrink={0}
        style={{marginBottom: '24px'}}
      >
        <WorkoutCard workout={workout} onClick={() => handleCardClick(i)} />
      </Flex.Column>
    ))
  }

  return (
    <>
      <PageHeader title={workout.title} subtitle={workout.desc} />
      <Flex style={{marginBottom: '24px'}}>
        <Flex.Column grow={0}>
          <Button onClick={() => history.push('/stretch/guided')}>Begin Guided Stretch</Button>
        </Flex.Column>
        <Flex.Column grow={0}>
          <Button onClick={() => history.push(`/workout/${params.week}/${params.day}/guided`)}>Begin Guided Workout</Button>
        </Flex.Column>
      </Flex>
      <h3>In This Workout</h3>
      <Flex wrap>
        <Flex.Column basis='50%' grow={0} shrink={0} style={{marginBottom: '24px'}}>
          <WorkoutCard
            onClick={()=>{}}
            workout={{
              title: 'Stretching',
              superSet: '00',
              image: 'https://workout-cal.s3.us-east-2.amazonaws.com/how-to-warm-up.jpeg',
              how: 'Lie flat on the floor, holding a dumbbell in each hand above your chest with straight arms. Lower the weights towards your chest, then press them back up powerfully to return to the start.',
              why: 'Lying on the floor puts you in a stable position so you can attempt to go quite heavy with this move. The range of motion is shorter than a bench press, so focus on contracting the chest muscles being targeted.'
            }}
          />
        </Flex.Column>
        {renderWorkoutCards(workout.workouts)}
      </Flex>
    </>
  );
};

export default Workout;
