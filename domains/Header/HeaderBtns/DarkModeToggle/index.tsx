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
  border: 0.07rem solid #b2b2b2;
  border-radius: 0.1875rem;
`;
