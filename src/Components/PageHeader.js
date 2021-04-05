import Flex from "../Layout/Flex";
import Button from "./Button";
import Icon from "./Icon";

const PageHeader = props => {
  return (
    <Flex alignment='center' style={{padding: '24px 0 48px'}}>
      {props.onBackClick && (
        <Flex.Column grow={0}>
          <Button color='transparent' collapsed onClick={props.onBackClick}>
            <span className='visually-hidden'>Go back to previous page</span>
            <Icon name='Caret' color='primary' rotate={90} size='x-large' />
          </Button>
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
