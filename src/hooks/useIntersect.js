import { useState, useEffect, useCallback } from 'react';

const defaultOption = {
  root: null,
  threshold: 0.7,
  rootMargin: '0px',
};

function useIntersect(onIntersect, option) {
  const [ref, setRef] = useState(null);

  // intersecting이 있을 때 target 엔트리와 observer를 넘겨주자.
  const checkIntersect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ref나 option이 바뀔 경우 observer를 새로 등록한다.
  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(checkIntersect, {
        ...defaultOption,
        ...option,
        // threshold: 0.5,
      });
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [checkIntersect, option, ref]);
  // setRef를 넘겨주어서 ref를 변경시킬 수 있도록 한다.
  return [ref, setRef];
}

export default useIntersect;
