import Flex from "../Layout/Flex";
import ButtonCard from "./ButtonCard";
import ProgressiveImage from "./ProgressiveImage";

const WorkoutCard = props => {
  return (
    <ButtonCard onClick={props.onClick}>
      <h2 style={props.workout.reps ? {} : {marginBottom: '68px'}}>{props.workout.superSet} {props.workout.title}</h2>
      {props.workout && (
        <Flex justify='space-around' >
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
          {props.workout.tempo && (
            <Flex.Column>
              <h3>Tempo: {props.workout.tempo.reduce((acc, curr) => acc = `${acc}${curr}`)}</h3>
            </Flex.Column>
          )}
        </Flex>
      )}
      <ProgressiveImage style={{maxWidth: '100%'}} src={props.workout.image} placeholderSrc='' />
    </ButtonCard>
  );
}

export default WorkoutCard;
