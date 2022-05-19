import classNames from 'classnames';
import Dropdown from 'components/dropdown';
import Icon from 'components/icon';
import React, { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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

const Analytics = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [activeIndex, setActiveIndex] = useState<number>(100);

  const handleClickBar = (data: any, index: number) => {
    setActiveIndex(index);
  };

  const chart = () => (
    <BarChart width={832} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" axisLine={false} />
      <YAxis axisLine={false} />
      <Tooltip />
      <Bar dataKey="uv" barSize={16} onClick={handleClickBar}>
        {data.map((entry, index) => (
          <Cell
            cursor="pointer"
            fill={index === activeIndex ? '#5541d7' : '#766eda'}
            key={`cell-${index}`}
          />
        ))}
      </Bar>
    </BarChart>
  );

  const revenue = () => (
    <div className="Content">
      <div className="Content--left">
        <div className="Top flex">
          <h6 className="bold">Doanh thu</h6>
          <div className="Right">
            <Dropdown listItems={listItems} />
            <Icon name="three-dots" />
          </div>
        </div>

        <span className="Divider"></span>

        <div className="Chart">
          <div className="Sum">
            <div className="Total">
              <h5 className="bold">{formatNumber(50000000, 3)} đ</h5>
              <p className="body2 semibold">Thống kê doanh thu</p>
            </div>

            <div className="Right">
              <div className="Orders">
                <h5 className="bold">412</h5>
                <p className="body2 semibold">Đơn hàng</p>
              </div>
              <div className="Services">
                <h5 className="bold">234</h5>
                <p className="body2 semibold">Dịch vụ</p>
              </div>
            </div>
          </div>
          {chart()}
        </div>
      </div>
      <div className="Content--right">
        <div className="Top flex">
          <h6 className="bold">Sản phẩm đã bán</h6>
          <Dropdown listItems={listItems} />
        </div>

        <span className="Divider"></span>

        <div className="ProductList">
          {listProducts.map((product, index) => (
            <div key={index} className="Items flex">
              <div className="Info flex">
                <div className="Image"></div>
                <h6 className="Name bold">{product.name}</h6>
              </div>
              <h6 className="Quantity bold">{product.quantity} sp</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const history = () => (
    <div className="History">
      <div className="Title">
        <p className="headline bold">Lịch sử dịch vụ</p>
        <Icon name="three-dots" />
      </div>
      <div className="Table">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Ngày</th>
              <th>Giá dịch vụ</th>
              <th>Tên khách hàng</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {historyList.map((history, index) => (
              <tr key={index}>
                <td>{history.id}</td>
                <td>{history.product}</td>
                <td>{history.quantity}</td>
                <td>{history.date}</td>
                <td>{formatNumber(history.price, 3)} đ</td>
                <td>{history.name}</td>
                <td>
                  <Icon name="three-dots" />
                  <span className="Divider"></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="Analytics">
      <div className="Summary">
        {summaryList.map((item, index) => (
          <div key={index} className="Items">
            <div className="flex">
              <p className="headline bold">{item.title}</p>
              <Icon name={item.percentage < 0 ? 'arrow' : 'arrow-up1'} />
            </div>
            <div>
              <p className="headline bold">
                {(item.title === 'Revenue' || item.title === 'Sản phẩm') && '$'}
                {item.value}
              </p>
              <h6
                className={classNames(
                  'bold',
                  { Down: item.percentage < 0 },
                  { Up: item.percentage >= 0 }
                )}
              >
                {item.percentage}%
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="Body">
        <div className="Tabs">
          {tabAnalytics.map((tab, index) => (
            <div
              key={index}
              className={classNames('All', { Active: activeTab === tab.id })}
              onClick={() => setActiveTab(tab.id)}
            >
              <p className="menu1 bold">{tab.name}</p>
              <span className="Separate"></span>
            </div>
          ))}
        </div>

        {activeTab === 1 && revenue()}
        {activeTab === 2 && history()}
      </div>
    </div>
  );
};

export default Analytics;
