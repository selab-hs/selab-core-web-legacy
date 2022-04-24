import styled from '@emotion/styled';

export const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 75%);
`;
export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100001;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  transform: translate(-50%, -50%);
`;
