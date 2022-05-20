import { DefaultTheme } from 'styled-components';

const flex = (direction = 'row', justify = 'center', align = 'center') => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

const colors = {
  black: '#000',
  white: '#fff',
};

const theme: DefaultTheme = {
  flex,
  colors,
};

export default theme;
