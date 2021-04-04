import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { stretches } from '../Data/stretches';
import Button from "../Components/Button";
import WorkoutCard from "../Components/WorkoutCard";
import Flex from "../Layout/Flex";

const GuidedWorkout = props => {
  const history = useHistory();
  const [stretchNumber, setStretchNumber] = useState(4);
  const [autoAdvance, setAutoAdvance] = useState(false);

  useEffect(() => {
    if (stretchNumber === stretches.length - 1) {
      setAutoAdvance(false);
    } else if (autoAdvance) {
      setInterval(() => {
        setStretchNumber(stretchNumber + 1);
      }, 60000)
    }
  }, [autoAdvance, stretchNumber]); // eslint-disable-line

  const handleAutoAdvance = () => {
    setAutoAdvance(!autoAdvance);
  }

  const handlePreviousClick = () => {
    setAutoAdvance(false);
    if (stretchNumber !== 0) {
      setStretchNumber(stretchNumber - 1)
    }
  }

  const handleNextClick = () => {
    setAutoAdvance(false);
    if (stretchNumber < stretches.length - 1) {
      setStretchNumber(stretchNumber + 1)
    }
  }

  const renderStretchCards = () => {
    return stretches.map((stretch, i) => {
      const formattedStretch = {
        title: stretch.title,
        superSet: `0${i + 1}`,
        image: 'https://workout-cal.s3.us-east-2.amazonaws.com/how-to-warm-up.jpeg',
        how: stretch.desc,
        reps: stretch.reps
      }
      return (
        <Flex.Column
          key={`stretch-${i}`}
          basis='100%'
          grow={0}
          shrink={0}
          style={{marginBottom: '24px', transform: `translateX(-${stretchNumber * 100}%)`}}
        >
        <WorkoutCard workout={formattedStretch} onClick={() => {}} />
      </Flex.Column>
      );
    })
  }

  return (
    <>
      <Flex style={{marginBottom: '24px'}} justify='space-between'>
        <Button onClick={history.goBack}>Complete Guided Stretch</Button>
        <Button onClick={handleAutoAdvance}>{autoAdvance ? 'Pause' : 'Start'}</Button>
      </Flex>
      <Flex style={{width: '100%', overflow: 'hidden'}}>
        {renderStretchCards()}
      </Flex>
      <Flex justify='center'>
        <Flex.Column grow={0}>
          <Button onClick={handlePreviousClick}>Previous</Button>
        </Flex.Column>
        <Flex.Column grow={0}>
          <Button onClick={stretchNumber === stretches.length - 1 ? history.goBack : handleNextClick}>{stretchNumber === stretches.length - 1 ? 'Complete Stretching' : 'Next'}</Button>
        </Flex.Column>
      </Flex>
    </>
  );
}

export default GuidedWorkout;
