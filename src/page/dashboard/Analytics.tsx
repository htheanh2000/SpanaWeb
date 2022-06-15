import classNames from 'classnames';
import Footer from 'components/footer/Footer';
import Icon from 'components/icon';
import MenuDropDown from 'components/menuDropdown/Menu';
import React, { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatNumber } from 'utils';
import { summaryList } from './constant';

const tabAnalytics = [
  {
    id: 1,
    name: 'Doanh thu',
  },
  {
    id: 2,
    name: 'Lịch sử',
  },
];
const listItems = [
  { name: 'Tất cả', value: 0 },
  { name: 'Hello', value: 1 },
];

const listProducts = [
  { name: 'Srm Skin 1004', quantity: 430 },
  { name: 'kcn Anessa', quantity: 200 },
  { name: 'Ecucerin', quantity: 180 },
  { name: 'Onigiri - Rice Balls', quantity: 120 },
  { name: 'Yakitori - Grilled Chicken', quantity: 80 },
  { name: 'Royal Milk Tea', quantity: 70 },
];

const data = [
  {
    name: 'Sun',
    uv: 4000,
  },
  {
    name: 'Mon',
    uv: 3000,
  },
  {
    name: 'Tue',
    uv: 2000,
  },
  {
    name: 'Wed',
    uv: 2780,
  },
  {
    name: 'Thu',
    uv: 1890,
  },
  {
    name: 'Fri',
    uv: 2390,
  },
  {
    name: 'Sat',
    uv: 3490,
  },
];

export const historyList = [
  {
    id: 1,
    product: 'Tẩy nốt rồi',
    quantity: '3 cái',
    date: '18/03/2021',
    price: 30000,
    name: 'Phạm Thị Thanh Như',
  },
  {
    id: 2,
    product: 'Trị nám da',
    quantity: '1 lần',
    date: '18/03/2021',
    price: 120000,
    name: 'Võ Hoàng Yến',
  },
  {
    id: 3,
    product: 'Trị mụn',
    quantity: '3',
    date: '18/03/2021',
    price: 120000,
    name: 'Huỳnh Thế Anh',
  },
  {
    id: 4,
    product: 'Trị mụn',
    quantity: '3',
    date: '18/03/2021',
    price: 120000,
    name: 'Huỳnh Thế Anh',
  },
  {
    id: 5,
    product: 'Trị mụn',
    quantity: '3',
    date: '18/03/2021',
    price: 120000,
    name: 'Huỳnh Thế Anh',
  },
  {
    id: 6,
    product: 'Trị mụn',
    quantity: '3',
    date: '18/03/2021',
    price: 120000,
    name: 'Huỳnh Thế Anh',
  },
  {
    id: 7,
    product: 'Trị mụn',
    quantity: '3',
    date: '18/03/2021',
    price: 120000,
    name: 'Huỳnh Thế Anh',
  },
  {
    id: 8,
    product: 'Trị mụn',
    quantity: '3',
    date: '18/03/2021',
    price: 120000,
    name: 'Huỳnh Thế Anh',
  },
];

// const getPath = (
//   x: number,
//   y: number,
//   width: number,
//   height: number
// ) => `M${x},${y + height}
//           C${x + width},${y + height} ${x + width},${y + height} ${
//   x + width / 2
// }, ${y}
//           C${x + width},${y + height} ${x + width},${y + height} ${
//   x + width
// }, ${y + height}
//           S`;

// const TriangleBar = (props: any) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// TriangleBar.propTypes = {
//   fill: PropTypes.string,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   width: PropTypes.number,
//   height: PropTypes.number,
// };

const Analytics = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [activeIndex, setActiveIndex] = useState<number>(100);

  const handleClickBar = (data: any, index: number) => {
    setActiveIndex(index);
  };

  const chart = () => (
    <div className="w-full h-[250px] sm:h-[550px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={832} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fontSize: '14px', fontStyle: 'bold' }}
          />
          <YAxis axisLine={false} hide />
          <Tooltip />
          <Bar
            dataKey="uv"
            barSize={16}
            onClick={handleClickBar}
            // shape={<TriangleBar />}
          >
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#5541d7' : '#766eda'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const revenue = () => (
    <div className="sm:flex gap-6">
      <div className="flex flex-col gap-4 sm:flex-1 sm:bg-white sm:p-4 sm:rounded-md">
        <div className="flex justify-between text-body2 items-center font-semibold">
          <h6 className="font-bold">Doanh thu</h6>
          <div className="flex gap-4">
            <MenuDropDown data={listItems} className="w-[100px]" />
            <Icon name="three-dots" className="hidden sm:block" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-light-primary-separator-color"></div>

        <div className="">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:mb-10">
            <div className="flex flex-col  justify-center items-center gap-1">
              <h5 className="text-caption font-bold sm:text-h5">
                {formatNumber(50000000, 3)} đ
              </h5>
              <p className="text-caption sm:text-body2 sm:font-semibold text-light-text-color-body-1">
                Thống kê doanh thu
              </p>
            </div>

            <div className="sm:flex gap-8">
              <div className="flex flex-col justify-center items-center gap-1 mb-4 sm:mb-0">
                <h5 className="text-caption font-bold sm:text-h5">412</h5>
                <p className="text-caption text-light-text-color-body-1 sm:text-body2 sm:font-semibold">
                  Đơn hàng
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1 mb-10 sm:mb-0">
                <h5 className="text-caption font-bold sm:text-h5">234</h5>
                <p className="text-caption text-light-text-color-body-1  sm:text-body2 sm:font-semibold">
                  Dịch vụ
                </p>
              </div>
            </div>
          </div>

          <div className="text-center font-semibold text-body2 mb-10 sm:hidden">
            Thông số đơn hàng
          </div>

          {chart()}
        </div>
      </div>
      <div className="mt-10 sm:mt-0 sm:w-[30%] sm:bg-white sm:p-4 sm:rounded-md">
        <div className="flex items-center justify-between mb-10 sm:mt-4">
          <h6 className="text-body2 font-semibold sm:text-h6 sm:font-bold">
            Sản phẩm đã bán
          </h6>
          <MenuDropDown data={listItems} className="w-24" />
        </div>

        <div className="w-full h-[1px] bg-light-primary-separator-color mb-10 hidden sm:block"></div>

        <div className="flex flex-col gap-4">
          {listProducts.map((product, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-10">
                <div className="w-14 h-14 rounded-md bg-fill-image-placeholder-color"></div>
                <h6 className="text-body2 font-semibold sm:text-h6 sm:font-bold">
                  {product.name}
                </h6>
              </div>
              <h6 className="text-caption font-bold text-light-text-color-body-1 sm:text-h6 sm:font-bold">
                {product.quantity} sp
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const history = () => (
    <div className="sm:bg-white sm:p-4 rounded-md">
      <div className="sm:flex justify-between items-center sm:my-2">
        <p className="text-body2 font-semibold mb-4 sm:text-headline sm:font-bold">
          Lịch sử dịch vụ
        </p>
        <Icon name="three-dots" className="hidden sm:block" />
      </div>
      <div className="hidden sm:block ">
        <table className="w-full">
          <thead className="bg-light-secondary-system-color">
            <tr className="text-left text-headline font-normal">
              <th className=" py-3 text-headline font-bold">No.</th>
              <th className=" py-3 text-headline font-bold">Sản phẩm</th>
              <th className=" py-3 text-headline font-bold">Số lượng</th>
              <th className=" py-3 text-headline font-bold">Ngày</th>
              <th className=" py-3 text-headline font-bold">Giá dịch vụ</th>
              <th className=" py-3 text-headline font-bold">Tên khách hàng</th>
              <th className=" py-3 text-headline font-bold"></th>
            </tr>
          </thead>

          <tbody>
            {historyList.map((history, index) => (
              <tr key={index} className="border-b-[1px]">
                <td className="pl-2 py-3">{history.id}</td>
                <td className="pl-2 py-3">{history.product}</td>
                <td className="pl-2 py-3">{history.quantity}</td>
                <td className="pl-2 py-3">{history.date}</td>
                <td className="pl-2 py-3">
                  {formatNumber(history.price, 3)} đ
                </td>
                <td className="pl-2 py-3">{history.name}</td>
                <td className="pl-2 py-3">
                  <Icon name="three-dots" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 sm:hidden flex flex-col gap-8">
        {historyList.map((history, index) => (
          <div key={index} className="flex flex-col gap-2 shadow-sm pb-2">
            <div className="flex text-caption gap-1">
              <p>Ngày: {history.date}</p>
              <p>|</p>
              <p> KH: {history.name}</p>
            </div>
            <p className="font-body2 font-semibold">{history.product}</p>
            <div className="flex items-center justify-between">
              <p className="text-body2">Số lượng: {history.quantity}</p>
              <p className="text-caption">{formatNumber(history.price, 3)} đ</p>

              <Icon name="three-dots" className="hidden sm:block" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-20 px-4 w-full sm:bg-light-secondary-system-color sm:mt-0 sm:pt-10 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between text-headline font-bold max-w-[80%] sm:max-w-full mx-auto gap-6">
        {summaryList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 sm:px-4 sm:py-2 sm:w-[250px] shadow-md  sm:bg-white"
          >
            <div className="flex justify-between">
              <p className="">{item.title}</p>
              <Icon name={item.percentage < 0 ? 'arrow' : 'arrow-up1'} />
            </div>
            <div className="flex justify-between">
              <p className="">
                {(item.title === 'Revenue' || item.title === 'Sản phẩm') && '$'}
                {item.value}
              </p>
              <h6
                className={classNames(
                  'font-bold',
                  { 'text-light-error-color': item.percentage < 0 },
                  { 'text-light-accent-1-color-50': item.percentage >= 0 }
                )}
              >
                {item.percentage}%
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="flex mb-10">
          {tabAnalytics.map((tab, index) => (
            <div
              key={index}
              className={classNames(
                'flex flex-col items-center gap-2 flex-1 sm:flex-none'
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              <p className="text-menu2 font-bold cursor-pointer">{tab.name}</p>
              <div
                className={classNames(
                  'w-full h-[1px] sm:h-[3px] sm:px-20',
                  {
                    'bg-light-primary-color-50': activeTab === tab.id,
                  },
                  {
                    'bg-light-primary-separator-color': activeTab !== tab.id,
                  }
                )}
              ></div>
            </div>
          ))}
        </div>

        {activeTab === 1 && revenue()}
        {activeTab === 2 && history()}
      </div>

      <Footer className="sm:hidden" />
    </div>
  );
};

export default Analytics;
