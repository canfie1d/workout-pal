import Flex from "../Layout/Flex";
import Button from "./Button";

const PageHeader = props => {
  return (
    <Flex alignment='center' style={{padding: '24px 0 48px'}}>
      {props.onBackClick && (
        <Flex.Column grow={0}>
          <Button onClick={props.onBackClick}>Back</Button>
        </Flex.Column>
        )}
      <Flex.Column>
        <h1>{props.title}</h1>
        {props.subtitle && (<h2>{props.subtitle}</h2>)}
      </Flex.Column>
    </Flex>
  );
}

export default PageHeader;
