import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from '../../../../pages/_app';
import styled from '@emotion/styled';
import { lightTheme, ColorTheme } from '../../../../styles/theme';

interface ToggleProps {
  colorTheme: ColorTheme;
}

export default function DarkModeToggle(): ReactElement {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleColorTheme} colorTheme={colorTheme}>
      {colorTheme === lightTheme ? <>다크 모드</> : <>라이트 모드</>}
    </ToggleButton>
  );
}

const ToggleButton = styled('button')<ToggleProps>`
  display: flex;
  color: ${({ colorTheme }) => colorTheme.MAIN};
  cursor: pointer;
  background: ${({ colorTheme }) => colorTheme.BACKGROUND};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 20%);

  &:hover {
    filter: brightness(${({ colorTheme }) => (colorTheme === lightTheme ? '0.9' : '1.13')});
  }
`;
