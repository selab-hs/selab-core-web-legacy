import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  show: boolean;
};

const dynamicStyle = (props: Props) => css`
  z-index: ${props.show ? '10' : '0'};
  opacity: ${props.show ? '1' : '0'};
  transform: ${props.show ? 'translateY(0)' : 'translateY(-82px)'};
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  /* z-index: 10; */
  transition: all ease 0.1s;

  ${dynamicStyle}
`;
