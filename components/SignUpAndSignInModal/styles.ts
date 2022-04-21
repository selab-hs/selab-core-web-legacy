import styled from '@emotion/styled';

export const CloseBtn = styled.button`
  margin: 0 0 20px 100%;
  font-size: 20px;
  color: lightgray;
`;
export const Form = styled.form`
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
  margin-bottom: 11px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => `${colors.gray100}`};
`;
