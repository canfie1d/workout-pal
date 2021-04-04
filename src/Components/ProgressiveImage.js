import { useState, useRef } from 'react';

const ProgressiveImage = ({src, placeholderSrc, caption, ...rest}) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <img
        {...rest}
        onLoad={() => {
          setHighResImageLoaded(true);
        }}
        ref={ref}
        src={src}
        alt=''
      />
      <img
        {...rest}
        style={{
          position: 'absolute',
          filter: 'blur(1px)',
          clipPath: 'inset(0)',
          ...(!highResImageLoaded && { transition: 'opacity ease-in 500ms' }),
          ...(highResImageLoaded && { opacity: 0 }),
        }}
        src={placeholderSrc}
        alt=''
      />
      <p className='p p--caption'>{caption}</p>
    </>
  );
};

export default ProgressiveImage;
