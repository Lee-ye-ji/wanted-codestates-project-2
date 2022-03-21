import { css } from 'styled-components';

const color = {
  blue: '#07f',
  backgroundBlue: '#005fcc',
};

const sizes = {
  mobile: 580,
  tablet: 768,
  desktop: 1024,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const theme = {
  color,
  media,
};

export default theme;
