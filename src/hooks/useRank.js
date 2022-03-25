import { useMemo } from 'react';

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
  const average = useMemo(
    () => data.reduce((p, c) => p + c, 0) / data.length,
    [data],
  );

  return [arr, average];
}

export default useRank;
