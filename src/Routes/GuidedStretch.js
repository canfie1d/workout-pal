import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { stretches } from '../Data/stretches';
import Button from "../Components/Button";
import WorkoutCard from "../Components/WorkoutCard";
import Flex from "../Layout/Flex";
import Badge from '../Components/Badge';
import Icon from "../Components/Icon";

const GuidedStretch = props => {
  const history = useHistory();
  const [stretchNumber, setStretchNumber] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      if (stretchNumber === stretches.length - 1) {
        setAutoAdvance(false);
      } else if (autoAdvance) {
        setStretchNumber(stretchNumber + 1);
      }
    }, 60000);

    return () => clearInterval(slideTimer);
  }, [autoAdvance, stretchNumber]); // eslint-disable-line

  useEffect(() => {
    if (stretchNumber === stretches.length - 1) {
      setAutoAdvance(false);
    } else if (autoAdvance) {
      setInterval(() => {
        setStretchNumber(stretchNumber + 1);
      }, 60000)
    }
  }, [autoAdvance, stretchNumber]); // eslint-disable-line

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
  }, [autoAdvance, timer, stretchNumber]);

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
        <Button color='transparent' collapsed onClick={history.goBack}>
          <span className='visually-hidden'>Go back to workout overview</span>
          <Icon name='Caret' color='primary' rotate={90} size='x-large' />
        </Button>
        <Flex.Column grow={0}>
          <Flex alignment='center'>
            <Flex.Column>
              <Badge count={timer} />
            </Flex.Column>
            <Button onClick={handleAutoAdvance}>{autoAdvance ? 'Pause' : 'Start'}</Button>
          </Flex>
        </Flex.Column>
      </Flex>
      <Flex style={{width: '100%', overflow: 'hidden'}}>
        {renderStretchCards()}
      </Flex>
      <Flex justify='center'>
        <Flex.Column grow={0}>
          <Button color='ghost' onClick={handlePreviousClick}>Previous</Button>
        </Flex.Column>
        <Flex.Column grow={0}>
          <Button color='ghost' onClick={stretchNumber === stretches.length - 1 ? history.goBack : handleNextClick}>{stretchNumber === stretches.length - 1 ? 'Complete Stretching' : 'Next'}</Button>
        </Flex.Column>
      </Flex>
    </>
  );
}

export default GuidedStretch;
