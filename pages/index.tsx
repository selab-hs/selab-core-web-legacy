import styled from '@emotion/styled';

const Index = () => {
  return (
    <>
      <h1>index</h1>
      <Div>
        asdfasdf
        <br />
        asdf
      </Div>
    </>
  );
};
const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
`;
export default Index;
