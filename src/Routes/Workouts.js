import { useHistory } from 'react-router-dom';
import { workouts } from '../Data/workouts';
import PageHeader from '../Components/PageHeader';
import Flex from '../Layout/Flex';
import WorkoutCard from '../Components/WorkoutCard';

const Workouts = props => {
  const history = useHistory();

  const handleCardClick = i => {
    history.push(`/browse/${i}`);
  }

  const renderWorkoutCards = () => {
    return workouts.map((workout, i) => (
      <Flex.Column
        key={`stretch-${i}`}
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
      <PageHeader title='Workouts Included in this Plan' subtitle='Success starts with self-discipline' />
      <Flex wrap>
        {renderWorkoutCards()}
      </Flex>
    </>
  );
};

export default Workouts;
