import React, { useState, useEffect, useRef } from 'react';

const DEFAULT_TIMELINE_DELAY_BETWEEN_ITEMS = 1000;

function useAnimation(index) {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStartAnimation(true);
    }, index * DEFAULT_TIMELINE_DELAY_BETWEEN_ITEMS);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index]);

  return startAnimation;
}

export default useAnimation;