import styled from '@emotion/styled';

type Prop = {
  currentTab: number;
};

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: white;
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
    color: black;
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

export const BtnWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 29px 19px 0 0;

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    position: absolute;
    top: 25px;
    right: 20px;
    margin: 0;
  }
`;

export const LogInBtn = styled.button<Prop>`
  display: inline-flex;
  align-items: center; /* 가로 - 중앙으로 */
  height: 1.75rem;
  padding: 0 6px 1px;
  margin-left: 0.25rem;
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: ${({ currentTab }) => (currentTab !== 2 ? '' : 'white')};
  background-color: ${({ currentTab }) => (currentTab !== 2 ? '' : 'rgb(234,67,84)')};
  border: ${({ currentTab }) =>
    currentTab !== 2 ? '0.07rem solid #b2b2b2' : '0.15rem solid rgb(234,67,84)'};
  border-radius: 0.1875rem;
  opacity: ${({ currentTab }) => (currentTab !== 2 ? '' : '0.8')};
`;

export const SignUpBtn = styled.button`
  display: inline-flex;
  align-items: center; /* 가로 - 중앙으로 */
  height: 1.75rem;
  padding: 0 6px 1px;
  margin-left: 0.25rem;
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: white;
  background-color: #b2b2b2;
  border: 0.07rem solid #b2b2b2;
  border-radius: 0.1875rem;
`;
