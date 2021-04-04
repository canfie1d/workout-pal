import { useHistory, useParams } from 'react-router-dom';
import PageHeader from '../Components/PageHeader';
import ProgressiveImage from '../Components/ProgressiveImage';
import {workouts} from '../Data/workouts';

const WorkoutDetails = props => {
  const history = useHistory();
  const params = useParams();
  const workout = workouts[params.id];

  return (
    <>
    <PageHeader title={workout.title} onBackClick={history.goBack} />
      <ProgressiveImage style={{maxWidth: '100%'}} src={workout.image} placeholderSrc='' />
      <h2>How</h2>
      <p>{workout.how}</p>
      <h2>Why</h2>
      <p>{workout.why}</p>
    </>
  );
}

export default WorkoutDetails;
