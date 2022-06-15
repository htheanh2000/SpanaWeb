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
    title: 'Sản phẩm',
  },
  {
    id: 2,
    title: 'Quản lý',
  },
  {
    id: 3,
    title: 'Thêm sản phẩm',
  },
  {
    id: 4,
    title: 'Thông báo',
  },
  {
    id: 5,
    title: 'Thiết lập',
  },
];
export const subTabs = [
  {
    id: 1,
    title: 'Quản lý đơn hàng',
  },
  {
    id: 2,
    title: 'Chăm sóc khách hàng',
  },
  {
    id: 3,
    title: 'Các sản phẩm vi phạm',
  },
  {
    id: 4,
    title: 'Mức độ hài lòng của người mua',
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

export const chartAnalyzeData = [
  {
    name: 'Jan',
    Revenue: 4120,
  },
  {
    name: 'Feb',
    Revenue: 2591,
  },
  {
    name: 'Mar',
    Revenue: 3515,
  },
  {
    name: 'Apr',
    Revenue: 1451,
  },
  {
    name: 'May',
    Revenue: 3913,
  },
  {
    name: 'Jun',
    Revenue: 1231,
  },
  {
    name: 'Jul',
    Revenue: 1131,
  },
  {
    name: 'Sep',
    Revenue: 3333,
  },
  {
    name: 'Oct',
    Revenue: 4121,
  },
  {
    name: 'Nov',
    Revenue: 4121,
  },
  {
    name: 'Dec',
    Revenue: 4112,
  },
];

export const managementRight = [
  {
    title: 'Đăng tải ít nhất 5 sản phẩm (1/5)',
    caption: 'Nhận 1 lần Đẩy sản phẩm',
  },
  {
    title: 'Trang trí Shop Cơ bản cho phiên bản di động',
    caption: 'Nhận 1 lần Đẩy sản phẩm',
  },
  {
    title: 'Tạo Top sản phẩm Bán Chạy',
    caption: 'Nhận 1 lần Đẩy sản phẩm',
  },
];
export const addProductRight = [
  {
    title: 'Thông tin cơ bản',
    caption: 'Thêm các thông tin cơ bản cho sản phẩm',
  },
  {
    title: 'Xếp hạng sản phẩm',
    caption: 'Xếp hạng ưu tiên cho sản phẩm được bán ra',
  },
  {
    title: 'Công cụ hàng loạt',
    caption: 'Đăng tải và chỉnh sửa hàng loạt sản phẩm',
  },
];

export const listItemsCategories = [
  { name: 'Danh mục', value: 0 },
  { name: 'Hello', value: 1 },
];
export const listItemsPrice = [
  { name: 'Giá', value: 0 },
  { name: 'Hello', value: 1 },
];
export const listItemsFilter = [
  { name: 'Bộ lọc', value: 0 },
  { name: 'Hello', value: 1 },
];

export const addProductListItem = [
  {
    image: euc,
    name: 'Kem chống nắng',
    quantity: 3,
    price: 149000,
    date: '24/04/2022 22:17',
    status: 'Đang hoạt động',
  },
  {
    image: ane1,
    name: 'Kem Anessa',
    quantity: 3,
    price: 179000,
    date: '24/04/2022 22:17',
    status: 'Ngưng hoạt động',
  },
  {
    image: lar,
    name: 'Kem Skin 1004',
    quantity: 3,
    price: 149000,
    date: '24/04/2022 22:17',
    status: 'Đang hoạt động',
  },
];
