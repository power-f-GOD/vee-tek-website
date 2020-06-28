import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { interval } from '../../utils/timers';

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
      interval(
        () => anchor.scrollTo(0, anchor.scrollY - 200),
        16,
        () => window.scrollY <= 0
      );
    } else {
      interval(
        () => (anchor.scrollTop -= 200),
        16,
        () => window.scrollY <= 0
      );
    }
  };

  anchor.addEventListener('scroll', () =>
    setShowFAB(anchor[isWindow ? 'scrollY' : 'scrollTop'] > threshold)
  );

  return (
    <Button
      className={`go-up-fab ${showFAB ? '' : 'hide'} contained`}
      variant='contained'
      color='primary'
      onClick={handleFABClick}>
      <ExpandLessIcon />
    </Button>
  );
};

export default GoUpFAB;
