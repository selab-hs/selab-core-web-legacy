import { timeWithHyphen } from '@components/utils/timeWithHyphen';
import { Props } from './types';
import * as S from '../style';

const Infos = ({ createdAt, memberId }: Props) => {
  return (
    <S.InfoWrapper>
      <S.Info>
        <span>{timeWithHyphen(createdAt)}</span>
        {/*  TODO: 조회수 보여주기 */}
        {/* <span>조회수: 26</span> */}
        {/*  TODO: 사용자 이름 보여주기 */}
        <span>작성자: {memberId}</span>
      </S.Info>
      {/* <S.Info clickable>
      <span>수정</span>
      <span>삭제</span>
    </S.Info> */}
    </S.InfoWrapper>
  );
};
export default Infos;
