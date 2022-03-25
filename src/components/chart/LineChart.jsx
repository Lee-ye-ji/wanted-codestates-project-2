import styled from 'styled-components';
import useLine from '../../hooks/useLine';

function LineChart({ points, data }) {
  const [lines] = useLine(points);

  return (
    <Graph>
      <svg viewBox="-10 -150 480 450">
        {lines.map(({ x1, x2, y1, y2 }, idx) => (
          <GraphLine x1={x1} x2={x2} y1={y1} y2={y2} key={idx} />
        ))}

        {points.map(({ x, y }, index) => {
          return (
            <div key={index}>
              <GraphCircle cx={x} cy={y} r="3" />
              <Text
                x={x - 10}
                y={y - 15}
                isLastIndex={points.length === index + 1}
              >
                {data[index] + '위'}
              </Text>
            </div>
          );
        })}
      </svg>
    </Graph>
  );
}

export default LineChart;

const Graph = styled.div`
  width: 100%;
  height: 150px;
`;

const GraphLine = styled.line`
  stroke: ${({ theme }) => theme.color.blue};
  stroke-width: 1;
`;

const GraphCircle = styled.circle`
  fill: ${({ theme }) => theme.color.blue};
`;

const Text = styled.text`
  fill: ${({ theme }) => theme.color.blue};
`;
