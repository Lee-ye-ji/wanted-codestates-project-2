import { useMemo } from 'react';

function useAverage(data) {
  const average = useMemo(
    () => data.reduce((a, b) => parseInt(a) + parseInt(b), 0) / data.length,
    [data],
  );

  return Math.round(average);
}

export default useAverage;
