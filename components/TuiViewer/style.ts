import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;

  div {
    overflow: auto;
  }

  @media ${({ theme: { mediaQuery } }) => mediaQuery.tablet} {
    padding: 0px 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
`;
export const Info = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 300;
  color: #888;

  & > span {
    position: relative;

    &:not(:last-of-type)::after {
      position: absolute;
      top: -12px;
      right: -15px;
      font-size: 1.5rem;
      content: '.';
    }
  }
`;
