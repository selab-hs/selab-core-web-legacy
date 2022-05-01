import styled from '@emotion/styled';
import { ToggleProps } from '../Header/HeaderBtns/DarkModeToggle/types';

export const Wrapper = styled.div`
  height: calc(100vh - 128px - 5.7rem);

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    height: calc(100vh - 82px - 5.7rem);
  }
`;

export const Title = styled.input<ToggleProps>`
  box-sizing: border-box;
  width: 100%;
  height: 5.7rem;
  padding: 0 2rem;
  font-size: 2.7rem;
  color: ${({ colorTheme }) => colorTheme.MAIN};
  background: ${({ colorTheme }) => colorTheme.BACKGROUND};

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    height: 4.7rem;
    font-size: 1.7rem;
  } ;
`;
