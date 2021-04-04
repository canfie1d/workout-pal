import { useState } from "react";
import Flex from "../Layout/Flex";
import ViewSwitcher from "../Layout/ViewSwitcher";
import ButtonCard from "./ButtonCard";
import ProgressiveImage from "./ProgressiveImage";

const WorkoutCard = props => {
  const [displayedView, setDisplayedView] = useState('front');

  const handleCardClick = () => {
    if (props.onClick) {
      props.onClick()
    }
    else if (displayedView === 'front') {
      setDisplayedView('back')
    } else {
      setDisplayedView('front')
    }
  }

  return (
    <ButtonCard onClick={handleCardClick}>
      <ViewSwitcher displayedView={displayedView}>
        <div view='front'>
          <h2 style={props.workout.reps ? {} : {marginBottom: '68px'}}>{props.workout.superSet} {props.workout.title}</h2>
          {props.workout && (
            <Flex justify='space-around'>
              {props.workout.reps && (
                <Flex.Column>
                  <h3>Reps: {props.workout.reps}</h3>
                </Flex.Column>
              )}
              {props.workout.sets && (
                <Flex.Column>
                <h3>Sets: {props.workout.sets}</h3>
                </Flex.Column>
              )}
              {props.workout.rest !== undefined && (
                <Flex.Column>
                  <h3>Rest: <span style={{whiteSpace: 'nowrap'}}>{props.workout.rest} seconds</span></h3>
                </Flex.Column>
              )}
              {props.workout.tempo && (
                <Flex.Column>
                  <h3>Tempo: {props.workout.tempo.reduce((acc, curr) => acc = `${acc}${curr}`)}</h3>
                </Flex.Column>
              )}
            </Flex>
          )}
          <ProgressiveImage style={{maxWidth: '100%'}} src={props.workout.image} placeholderSrc='' />
        </div>
        <div view='back'>
          <h3>How?</h3>
          <p>{props.workout.how}</p>
          <h3>Why?</h3>
          <p>{props.workout.why}</p>
        </div>
      </ViewSwitcher>
    </ButtonCard>
  );
}

export default WorkoutCard;
