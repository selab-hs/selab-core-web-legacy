import styled from '@emotion/styled';
import { ColorTheme } from '../../styles/theme';

interface ToggleProps {
  colorTheme: ColorTheme;
}

export const SearchWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 90%;
  max-width: 440px;
  padding: 1rem;
  margin: 0.5rem auto;
`;

export const Search = styled.input<ToggleProps>`
  width: 100%;
  height: 36px;
  padding: 8px 48px 8px 16px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ colorTheme }) => colorTheme.MAIN};
  background: ${({ colorTheme }) => colorTheme.SUBBACKGROUND};
  border: 1px solid ${({ colorTheme }) => colorTheme.BORDER};
  border-radius: 20px;
`;

export const SearchSubmit = styled.button`
  position: absolute;
  right: 7px;
  width: 40px;
  height: 36px;
  background-size: 24px 24px;
  opacity: 0.4;
`;
