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
    overflow-x: auto;
    overflow-y: hidden;
  }
  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    padding: 0px;
  }
`;

export const Title = styled.h1`
  margin-top: 3rem;
  font-size: 2.25rem;
  font-weight: 600;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 4rem;
  font-weight: 300;
  color: #888;
`;

export const Info = styled.div<{ clickable?: boolean }>`
  display: flex;
  gap: 20px;

  & > span {
    position: relative;
    font-size: 1rem;
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};

    &:not(:last-of-type)::after {
      position: absolute;
      top: -12px;
      right: -13px;
      font-size: 1.5rem;
      cursor: default;
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
  padding: 1.25rem 1.2rem;
  background-color: rgb(246 247 248);
  border-radius: 30px;
`;
