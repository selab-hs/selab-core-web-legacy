import styled from '@emotion/styled';

export const ToggleButton = styled.button`
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  border: 0.07rem solid #b2b2b2;
  border-radius: 0.1875rem;
`;
