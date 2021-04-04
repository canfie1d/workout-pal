import { useHistory } from 'react-router-dom';
import { stretches } from '../Data/stretches';
import Card from '../Components/Card';
import Flex from '../Layout/Flex';
import ProgressiveImage from '../Components/ProgressiveImage';
import PageHeader from '../Components/PageHeader';
import Button from '../Components/Button';

const Stretch = props => {
  const history = useHistory();

  const renderStretchCards = () => {
    return stretches.map((stretch, i) => (
      <Flex.Column
        key={`stretch-${i}`}
        basis='50%'
        grow={0}
        shrink={0}
        style={{marginBottom: '10px'}}
      >
        <Card>
          <h2>{i + 1} {stretch.title}</h2>
          <h3>Reps: {stretch.reps}</h3>
          <p>{stretch.desc}</p>
        </Card>
      </Flex.Column>
    ));
  }

  return (
    <div>
      <PageHeader title='How To Warm Up At The Gym' subtitle='Fail to prepare, prepare to fail, and possibly pick up an injury' />
      <ProgressiveImage src='https://workout-cal.s3.us-east-2.amazonaws.com/how-to-warm-up.jpeg' placeholderSrc='' />
      <h2>How To Warm Up</h2>
      <p>We’re sure you’re excited about diving into the workouts, but first take a moment to consider your warm-up. All the workouts involve completing supersets with minimal rest, and if you haven’t adequately prepared your body you’ll find the first couple of rounds far tougher than you need to, and won’t get as much from them in terms of strength and size gains. You’ll also increase your risk of injury if you’re using heavy weights with cold muscles.</p>
      <p>When warming up, merely jogging on the spot for a few minutes to raise your heart rate won’t do. Each of the workouts is designed to target a specific area of the body, and you need to do the same in your warm-up so you’re priming the muscles that are about to be called into action.</p>
      <p>You can start with this dynamic stretching routine, which will take mere minutes and will get your whole body moving. Then move on to an even more specific warm-up for the workout you’re going to do. The simplest way to do this is a round of the exercises you have lined up with no weight, or a very light set of dumbbells if you have them. It won’t take long, and it has clear benefits: a better workout and a little less DOMS the following day.</p>
      <Flex wrap>
        {renderStretchCards()}
      </Flex>
      <Button onClick={history.goBack}>Done</Button>
    </div>
  );
};

export default Stretch;
