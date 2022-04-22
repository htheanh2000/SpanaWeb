import { FunctionComponent } from 'react';
import ArrowDown from '../../assets/image/icon/arrow-drop-down.svg';
import ArrowUp from '../../assets/image/icon/arrow-up.svg';
import Icon1 from '../../assets/image/icon/icon1.svg';
import Icon2 from '../../assets/image/icon/icon2.svg';
import Icon3 from '../../assets/image/icon/icon3.svg';
import Icon4 from '../../assets/image/icon/icon4.svg';
import Icon5 from '../../assets/image/icon/icon5.svg';
import Icon6 from '../../assets/image/icon/icon6.svg';
import Bell from '../../assets/image/icon/bell.svg';
import Refresh from '../../assets/image/icon/refresh.svg';
import Search from '../../assets/image/icon/search.svg';
import Setting from '../../assets/image/icon/setting.svg';
import './icon.scss';

export const icons = {
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'icon-1': Icon1,
  'icon-2': Icon2,
  'icon-3': Icon3,
  'icon-4': Icon4,
  'icon-5': Icon5,
  'icon-6': Icon6,
  bell: Bell,
  refresh: Refresh,
  search: Search,
  setting: Setting,
};

export type IconProps = {
  name: keyof typeof icons;
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, size, className } = props;
  return (
    <img
      src={icons[name]}
      className={`icon--${size} ${className}`}
      alt="icons"
    />
  );
};

export default Icon;
