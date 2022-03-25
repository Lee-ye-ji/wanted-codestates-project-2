import { useMemo } from 'react';
import useAverage from './useAverage';

function useRank(data) {
  const arr = useMemo(
    () =>
      data.map((rank, index) => {
        const logestCycle = data.reduce((acc, cur) => {
          return cur > acc ? cur : acc;
        });
        const lineHeight = Math.round(rank / logestCycle) * 50;
        const chartHeight = 50;
        return {
          x: index * 50,
          y: lineHeight - chartHeight,
        };
      }),
    [data],
  );
  const { average } = useAverage(data);

  return [arr, average];
}

export default useRank;
