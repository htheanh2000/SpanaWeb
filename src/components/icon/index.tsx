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
import Arrow from '../../assets/image/icon/arrow.svg';
import Arrow1 from '../../assets/image/icon/arrow-up1.svg';
import ThreeDost from '../../assets/image/icon/three-dots.svg';
import Decrease from '../../assets/image/icon/decrease.svg';
import Menu1 from '../../assets/image/icon/Menu.svg';
import Menu2 from '../../assets/image/icon/Menu1.svg';
import Menu3 from '../../assets/image/icon/Menu2.svg';
import ArrowUps from '../../assets/image/icon/arrow-up-s.svg';
import Calendar from '../../assets/image/icon/Calendar.svg';
import Ticket from '../../assets/image/icon/ticket-star.svg';
import Buy from '../../assets/image/icon/Buy.svg';
import Discount from '../../assets/image/icon/Discount.svg';
import Pen from '../../assets/image/icon/pen.svg';
import Plus from '../../assets/image/icon/plus.svg';
import Filter from '../../assets/image/icon/filter.svg';
import Facebook from '../../assets/image/icon/Social/facebook.svg';
import Insta from '../../assets/image/icon/Social/insta.svg';
import Twitter from '../../assets/image/icon/Social/twitter.svg';
import GooglePlay from '../../assets/image/icon/Social/google-play.svg';
import AppStore from '../../assets/image/icon/Social/app-store.svg';
import Menu4 from '../../assets/image/icon/menu3.svg';
import EyeClose from '../../assets/image/icon/eye-close.svg';
import EyeOpen from '../../assets/image/icon/eye-open.svg';
import EyeOpenPng from '../../assets/image/icon/open-eye.png';
import Image2 from '../../assets/image/icon/image-2.svg';
import Filter2 from '../../assets/image/icon/filter-2.svg';

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
  arrow: Arrow,
  'arrow-up1': Arrow1,
  'three-dots': ThreeDost,
  decrease: Decrease,
  menu1: Menu1,
  menu2: Menu2,
  menu3: Menu3,
  'arrow-up-s': ArrowUps,
  calendar: Calendar,
  ticket: Ticket,
  buy: Buy,
  discount: Discount,
  plus: Plus,
  pen: Pen,
  filter: Filter,
  facebook: Facebook,
  insta: Insta,
  twitter: Twitter,
  googlePlay: GooglePlay,
  appStore: AppStore,
  menu4: Menu4,
  eyeClose: EyeClose,
  eyeOpen: EyeOpen,
  eyeOpenPng: EyeOpenPng,
  image2: Image2,
  filter2: Filter2,
};

export type IconProps = {
  name: keyof typeof icons;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
};

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, size, className, onClick } = props;
  return (
    <img
      src={icons[name]}
      className={`icon--${size} ${className}`}
      alt="icons"
      onClick={onClick}
    />
  );
};

export default Icon;
