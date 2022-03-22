import { css } from 'styled-components';

const color = {
  blue: '#07f',
  backgroundBlue: '#005fcc',
  opacity: 'rgba(0, 0, 0, 0.3)',
  white: '#fff',
  black: '#000',
};

const font = {
  four: 400,
  five: 500,
  six: 600,
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
  font,
  media,
};

export default theme;
