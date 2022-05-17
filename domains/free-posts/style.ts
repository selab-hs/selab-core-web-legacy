import styled from '@emotion/styled';

export const FreePostsWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 90%;

  /* padding: 1rem; */
  margin: 0.5rem auto;

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    max-width: 55rem;
    margin: 0.5rem auto 0;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 90%;
  max-width: 440px;
  padding: 1rem;
  margin: 0.5rem auto 0;
`;

export const Search = styled.input`
  width: 100%;
  height: 36px;
  padding: 8px 48px 8px 16px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.inputBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
`;

export const SearchSubmit = styled.button`
  position: absolute;
  right: 7px;
  width: 40px;
  height: 36px;
  background-size: 24px 24px;
  opacity: 0.4;
`;

export const Post = styled.div`
  position: relative;
  padding: 17px 20px 16px;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    min-height: 160px;
    padding: 30px 20px;
  }
`;

export const Title = styled.h1`
  overflow: hidden;
  font-size: 17px;
  font-weight: 300;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  text-overflow: ellipsis;

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    font-size: 20px;
  }
`;

export const Content = styled.p`
  margin: 5px 0;
  overflow: hidden;
  font-size: 13px;
  font-weight: 100;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    padding-top: 6px;
    font-size: 14px;
  }
`;

export const Detail = styled.span`
  font-size: 13px;
  font-weight: 200;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;

  @media ${({ theme: { mediaQuery } }) => mediaQuery.laptop} {
    display: block;
    padding-top: 10px;
    overflow: hidden;
    font-size: 15px;
  }
`;
