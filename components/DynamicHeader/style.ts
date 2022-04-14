import styled from '@emotion/styled';

export const HeaderWrapper = styled.div<{ show: boolean; showTransition: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${({ show }) => (show ? '10' : '0')};
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  transition: ${({ showTransition }) => (showTransition ? 'all ease 0.1s' : '')};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-130.5px)')};

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-82px)')};
  }
`;
