import Bom from '../../assets/image/products/bom.png';
import Ane from '../../assets/image/products/ane.png';
import Ski from '../../assets/image/products/ski.png';
import lar from '../../assets/image/products/lar.png';
import euc from '../../assets/image/products/euc.png';
import ane1 from '../../assets/image/products/ane1.png';
import { icons } from 'components/icon';

interface Icons {
  id: number;
  name: keyof typeof icons;
}

export const productList = [
  {
    img: Bom,
    title: 'B.O.M',
    description: 'Kem Chống Nắng B.O.M SPF50+/PA++++ 50ml',
    priceSale: 317000,
    price: 490000,
  },
  {
    img: Ane,
    title: 'Anessa',
    description: 'Kem chống nắng Anessa Cho Da Nhạy Cảm & Trẻ Em 60ml',
    priceSale: 100000,
    price: 120000,
  },
  {
    img: Ski,
    title: 'Skin1004',
    description: 'Kem Chống Nắng Skin1004 Cho Da Nhạy Cảm SPF 50+ 50ml',
    priceSale: 245000,
    price: 425000,
  },
  {
    img: lar,
    title: 'La Roche-Posay',
    description: 'Sữa Chống Nắng La Roche-Posay Không Nhờn Rít SPF 50+ 50ml',
    priceSale: 356000,
    price: 495000,
  },
  {
    img: euc,
    title: 'Eucerin',
    description: 'Kem Chống Nắng Eucerin Cho Da Nhờn & Mụn 50ml',
    priceSale: 393000,
    price: 500000,
  },
  {
    img: ane1,
    title: 'Anessa',
    description: 'Kem Chống Nắng Anessa Dạng Gel  90g',
    priceSale: 357000,
    price: 550000,
  },
];

export const tabs = [
  {
    id: 1,
    title: 'Tất cả',
  },
  {
    id: 2,
    title: 'Kem chống nắng',
  },
  {
    id: 3,
    title: 'Kem dưỡng da',
  },
  {
    id: 4,
    title: 'Tắm trắng',
  },
  {
    id: 5,
    title: 'Giảm béo',
  },
];

export const iconList: Icons[] = [
  {
    id: 0,
    name: 'icon-1',
  },
  {
    id: 1,
    name: 'icon-2',
  },
  {
    id: 2,
    name: 'icon-3',
  },
  {
    id: 3,
    name: 'icon-4',
  },
  {
    id: 4,
    name: 'icon-5',
  },
  {
    id: 5,
    name: 'icon-6',
  },
];

export const summaryList = [
  {
    title: 'Khách hàng',
    value: 1000,
    percentage: -15,
  },
  {
    title: 'Dịch vụ',
    value: 1050,
    percentage: 20,
  },
  {
    title: 'Revenue',
    value: 50000,
    percentage: 10,
  },
  {
    title: 'Sản phẩm',
    value: 12000,
    percentage: 12,
  },
];
