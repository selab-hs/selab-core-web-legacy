import React, { ReactElement, useContext } from 'react';
import styled from '@emotion/styled';
import { storage } from '@components/utils';
import { ThemeContext } from '@pages/_app';

export default function DarkModeToggle(): ReactElement {
  const { toggleColorTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleColorTheme}>
      {storage.get('theme') === 'light' ? '라이트 모드' : '다크 모드'}
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  border: 0.07rem solid #b2b2b2;
  border-radius: 0.1875rem;
`;
