import { useHistory } from 'react-router-dom';
import { workouts } from '../Data/workouts';
import ButtonCard from '../Components/ButtonCard';
import PageHeader from '../Components/PageHeader';
import ProgressiveImage from '../Components/ProgressiveImage';
import Flex from '../Layout/Flex';

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
        <ButtonCard onClick={() => handleCardClick(i)}>
          <h2 style={{marginBottom: '12px'}}>{workout.title}</h2>
          <ProgressiveImage style={{maxWidth: '100%'}} src={workout.image} placeholderSrc='' />
        </ButtonCard>
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
