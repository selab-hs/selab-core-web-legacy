/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { DARK_MODE_VALUE } from '@constants/theme-constants';
import { RootState } from '@stores/modules';

const SeLogo = () => {
  const { mode } = useSelector((state: RootState) => state.darkModes);

  return (
    <Link href={'/'} passHref>
      <img
        src={mode === DARK_MODE_VALUE.LIGHT ? 'selab_logo.png' : 'selab_logo_w.png'}
        alt="selab-logo"
      />
    </Link>
  );
};
export default SeLogo;
