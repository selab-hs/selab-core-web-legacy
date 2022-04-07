import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;

  &:first-of-type {
    height: calc(100vh - 64px - 5.7rem);
  }
  @media ${({ theme: { mediaQuery } }) => mediaQuery.mobile} {
    &:first-of-type {
      height: calc(100vh - 64px - 4.7rem);
    }
  }
`;
export const Title = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 5.7rem;
  padding: 2rem 0rem 1rem 2rem;
  font-size: 2.7rem;
  @media ${({ theme: { mediaQuery } }) => mediaQuery.mobile} {
    height: 4.7rem;
    font-size: 1.7rem;
  } ;
`;
