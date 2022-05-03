import styled from '@emotion/styled';
import Modal from '../../components/Modal';

export const CuModal = styled(Modal)`
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  margin: 0 0 0 97%;
  opacity: 0.4;
`;
export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 360px;
  height: 50px;
  padding: 15px;
  border: ${({ theme: { colors } }) => `1px solid ${colors.gray50}`};
  border-radius: 5px;

  &:focus {
    border: ${({ theme: { colors } }) => `1px solid ${colors.blue}`};
  }
`;
export const Label = styled.label`
  margin: 11px 0;
  font-weight: 400;
  color: ${({ theme: { colors } }) => `${colors.gray100}`};
`;
export const ErrorMsg = styled.p`
  margin-top: 11px;
  color: ${({ theme: { colors } }) => `${colors.red}`};
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

export const SubmitBtn = styled.button`
  width: 360px;
  height: 50px;
  margin-top: 20px;
  color: white;
  background-color: ${({ theme: { colors } }) => `${colors.blue}`};
  border-radius: 5px;
`;
