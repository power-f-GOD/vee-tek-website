import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

interface GoUpFABProps {
  anchor?: HTMLDivElement | Window;
  threshold?: number;
}

const GoUpFAB = (props: GoUpFABProps) => {
  const [showFAB, setShowFAB] = useState<boolean>();
  let threshold = props.threshold || 1000;
  let anchor = (props.anchor as any) || (window as any);
  let isWindow = anchor === window;

  const handleFABClick = () => {
    if (isWindow) {
      let scroller = setInterval(() => {
        if (anchor.scrollY <= 0) {
          clearInterval(scroller);
        } else {
          anchor.scrollTo(0, anchor.scrollY - 100);
        }
      }, 16);
    } else {
      let scroller = setInterval(() => {
        if (anchor.scrollTop <= 0) {
          clearInterval(scroller);
        } else {
          anchor.scrollTop -= 100;
        }
      }, 16);
    }
  };

  anchor.addEventListener('scroll', () =>
    setShowFAB(anchor[isWindow ? 'scrollY' : 'scrollTop'] > threshold)
  );

  return (
    <Button
      className={`go-up-fab ${showFAB ? '' : 'hide'} outlined`}
      variant='outlined'
      color='primary'
      onClick={handleFABClick}>
      <ExpandLessIcon />
    </Button>
  );
};

export default GoUpFAB;
