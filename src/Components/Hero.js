import Flex from "../Layout/Flex"
import ProgressiveImage from "./ProgressiveImage"
import PageHeader from "../Components/PageHeader";

const Hero = props => {
  return (
    <div className='hero'>
      <ProgressiveImage src={props.src} placeholderSrc={props.placeholderSrc} className='hero__image' />
      <Flex alignment='center' justify='space-between'>
        <Flex.Column basis='70%' grow={0}>
          <PageHeader className='hero__header' title={props.title} subtitle={props.subtitle} />
        </Flex.Column>
        <Flex.Column grow={0}>
          {props.children}
        </Flex.Column>
      </Flex>
    </div>
  );
}

export default Hero;
