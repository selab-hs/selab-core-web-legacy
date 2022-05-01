import styled from '@emotion/styled';
import { ColorTheme } from '../../../styles/theme';

export const BtnWrapper = styled.div<{ colorTheme: ColorTheme; currentTab: number }>`
  position: absolute;
  top: 0;
  right: 0;
  margin: 29px 19px 0 0;

  button {
    display: inline-flex;
    align-items: center;
    height: 1.75rem;
    padding: 0 6px 1px;
    margin-left: 0.25rem;
    font-size: 0.75rem;
    line-height: 1.75rem;
  }

  color: ${({ colorTheme, currentTab }) => (currentTab !== 2 ? colorTheme.MAIN : colorTheme.SUB)};
  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    position: absolute;
    top: 25px;
    right: 20px;
    margin: 0;
  }
`;

export const LeftBtn = styled.button<{ currentTab: number }>`
  background-color: ${({ currentTab }) => (currentTab !== 2 ? '' : 'rgb(234,67,84)')};
  border: ${({ currentTab }) =>
    currentTab !== 2 ? '0.07rem solid #b2b2b2' : '0.15rem solid rgb(234,67,84)'};
  border-radius: 0.1875rem;
  opacity: ${({ currentTab }) => (currentTab !== 2 ? '' : '0.8')};
`;

export const RightBtn = styled.button`
  background-color: #b2b2b2;
  border: 0.07rem solid #b2b2b2;
  border-radius: 0.1875rem;
`;
