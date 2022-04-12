import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 0px 20px;

  div {
    overflow: auto;
  }
  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    padding: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
`;
export const Info = styled.div`
  display: flex;
  gap: 20px;
  height: 1.2rem;
  margin-top: 10px;
  font-weight: 300;
  color: #888;

  & > span {
    position: relative;
    font-size: 1rem;

    &:not(:last-of-type)::after {
      position: absolute;
      top: -12px;
      right: -15px;
      font-size: 1.5rem;
      content: '.';
    }
  }
`;

export const Indicator = styled.div`
  position: absolute;
  right: -100px;
`;

export const IndicatorContent = styled.div`
  position: fixed;
  top: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  width: 2.5rem;
  padding: 1.25rem 0.625rem;
  background-color: rgb(246 247 248);
  border-radius: 30px;
`;
