import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 5px 18px -7px rgb(0 0 0 / 15%);
`;

export const Header = styled.header`
  img {
    position: relative;
    left: 0px;
    height: 5rem;
  }

  nav {
    display: block;
    width: 100%;
    padding: 10px 0 14px;
    overflow-x: auto;
    text-align: left;
    white-space: nowrap;
  }

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    position: relative;
    align-items: center;
    max-width: 75rem;
    margin: auto;

    img {
      position: absolute;
      left: 20px;
      height: 5rem;
      height: 100%;
    }

    nav {
      display: block;
      width: 600px;
      padding: 29px 0;
      margin: 0 auto;
      text-align: center;
    }
  }
`;

export const Ul = styled.ul`
  .focused {
    color: ${({ theme }) => theme.colors.black};
    opacity: 1;
  }

  li {
    display: inline-block;
    margin: 0 1rem 0.25rem;
    font-size: 1.125rem;
    line-height: 1.25rem;
    opacity: 0.5;
  }
`;
