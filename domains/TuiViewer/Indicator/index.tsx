import { BsFillHeartFill, BsLink45Deg } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';

import * as S from '../style';

const Indicator = () => {
  return (
    <S.Indicator>
      <S.IndicatorContent>
        <BsFillHeartFill size={20} cursor="pointer" />
        <BsLink45Deg size={20} cursor="pointer" />
        <BiCommentDetail size={20} cursor="pointer" />
      </S.IndicatorContent>
    </S.Indicator>
  );
};
export default Indicator;
