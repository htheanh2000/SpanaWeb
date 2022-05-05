import classNames from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatNumber } from 'utils';
import { chartAnalyzeData, productList, tabs } from './constant';

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState<number>(tabs[0].id);
  const arrayProduct = Array.from(Array(6).keys());

  const handleIncrease = (item: number) => {
    console.log(item);
  };

  const search = () => (
    <div className="Search">
      <Icon name="search" size="small" />
      <input type="text" className="Input" placeholder="Tìm kiếm..." />
    </div>
  );

  const tabsCom = () => (
    <div className="Tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={classNames('All', { Active: activeTab === tab.id })}
          onClick={() => setActiveTab(tab.id)}
        >
          <p className="menu1 bold">{tab.title}</p>
          <span className="Separate"></span>
        </div>
      ))}
    </div>
  );

  const products = () => (
    <>
      <div className="MainBody--left">
        {search()}
        {tabsCom()}

        <div className="Categories">
          <div className="Title">
            <p className="title1 bold">Kem chống nắng</p>
          </div>
          <div className="ProductList">
            {productList.map((item, index) => (
              <div key={index} className="Product">
                <div className="Image">
                  <img src={item.img} alt="" />
                </div>
                <div className="Info">
                  <h6 className="bold">{item.title}</h6>
                  <p className="body2">{item.description}</p>
                  <div className="Price">
                    <h6 className="bold">
                      {formatNumber(item.priceSale, 3)} đ
                    </h6>
                    <p className="body2">{formatNumber(item.price, 3)} đ</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="MainBody--right">
        <div className="Title">
          <p className="headline bold">Đơn hàng hiện tại</p>
          <div>
            <p className="menu1 bold c-pointer">Xóa tất cả</p>
            <Icon name="refresh" size="small" className="c-pointer" />
          </div>
        </div>

        <span className="Divider"></span>

        <div className="ProductList">
          {arrayProduct.map((item, index) => (
            <div key={index} className="Product">
              <div className="Photo"></div>

              <div className="Info">
                <div className="Name">
                  <h6 className="bold">Tên sản phẩm - thương hiệu</h6>
                </div>
                <div className="Price">
                  <h6 className="bold">100.000đ</h6>
                </div>
              </div>

              <div className="Quantity">
                <span className="Button body2 semibold">-</span>
                <span>1</span>
                <span className="Button" onClick={() => handleIncrease(item)}>
                  +
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="Checkout">
          <div className="Total flex">
            <h6 className="bold">Tổng hóa đơn</h6>
            <h6 className="bold">300.000 đ</h6>
          </div>
          <div className="Discount">
            <h6 className="bold">Discount</h6>
            <h6 className="bold">-1%</h6>
          </div>

          <span className="Divider"></span>

          <div className="PriceTotal">
            <h6 className="bold">Thành tiền</h6>
            <h5 className="bold">297.000 đ</h5>
          </div>
        </div>

        <Button state="primary" className="Button">
          Xuất hóa đơn
        </Button>
      </div>
    </>
  );

  const management = () => (
    <div className="Management">
      <div className="Search">
        <Icon name="search" size="small" />
        <input type="text" className="Input" placeholder="Tìm kiếm..." />
      </div>

      <div className="Tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames('All', { Active: activeTab === tab.id })}
            onClick={() => setActiveTab(tab.id)}
          >
            <p className="menu1 bold">{tab.title}</p>
            <span className="Separate"></span>
          </div>
        ))}
      </div>

      <div className="Quest">
        <p className="bold title1 mb-8">Nhiệm Vụ Người Bán</p>

        <div className="Item">
          <p className="semibold body2">Đăng tải ít nhất 5 sản phẩm (1/5)</p>
          <div className="Text">
            <Icon name="arrow-up-s" />
            <p className="captions">Nhận 1 lần Đẩy sản phẩm</p>
          </div>

          <Button state="secondary"> Bắt đầu</Button>
        </div>
        <div className="Item">
          <p className="semibold body2">
            Trang trí Shop Cơ bản cho phiên bản di động
          </p>
          <div className="Text">
            <Icon name="arrow-up-s" />
            <p className="captions">Nhận 1 lần Đẩy sản phẩm</p>
          </div>

          <Button state="secondary"> Bắt đầu</Button>
        </div>
        <div className="Item">
          <p className="semibold body2">Tạo Top sản phẩm Bán Chạy</p>
          <div className="Text">
            <Icon name="arrow-up-s" />
            <p className="captions">Nhận 1 lần Đẩy sản phẩm</p>
          </div>

          <Button state="secondary"> Bắt đầu</Button>
        </div>
      </div>

      <div className="MainContent">
        <p className="bold title1 mb-2">Danh sách cần làm</p>
        <p className="body2">Những việc bạn sẽ phải làm</p>
        <div className="Sum">
          <div className="Top">
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Chờ xác nhận</p>
            </div>
            <div className="Separate"></div>
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Chờ lấy hàng</p>
            </div>
            <div className="Separate"></div>
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Đã xử lý</p>
            </div>
            <div className="Separate"></div>
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Đơn hủy</p>
            </div>
          </div>
          <div className="Divider"></div>
          <div className="Bot">
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Trả hàng/hoàn tiền chờ xử lí</p>
            </div>
            <div className="Separate"></div>
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Sản phẩm bị tạm khóa</p>
            </div>
            <div className="Separate"></div>
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Sản phẩm hết hàng</p>
            </div>
            <div className="Separate"></div>
            <div className="Notification">
              <h5 className="bold">99+</h5>
              <p className="body1">Chương trình khuyến mãi chờ xử lí</p>
            </div>
          </div>
        </div>

        <div className="Analyze">
          <p className="bold title1 mb-2">Phân tích bán hàng</p>
          <p className="body2">
            Tổng quan về dữ liệu của cửa hàng cho kích thước của đơn hàng đã xác
            nhận
          </p>

          <div className="ChartContent">
            <div className="Chart">
              <AreaChart
                width={500}
                height={220}
                data={chartAnalyzeData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#5541d7"
                  fill="#8884d8"
                />
              </AreaChart>
            </div>
            <div className="View">
              <div className="Top">
                <div className="Notification">
                  <h5 className="bold">99+</h5>
                  <p className="body2">Lượt truy cập</p>
                  <p className="notification">So với hôm qua 0.6%</p>
                </div>
                <div className="Separate"></div>
                <div className="Notification">
                  <h5 className="bold">99+</h5>
                  <p className="body1">Lượt xem</p>
                  <p className="notification">So với hôm qua 0.6%</p>
                </div>
              </div>
              <div className="Divider"></div>
              <div className="Top">
                <div className="Notification">
                  <h5 className="bold">99+</h5>
                  <p className="body1">Đơn hàng</p>
                  <p className="notification">So với hôm qua 0.6%</p>
                </div>
                <div className="Separate"></div>
                <div className="Notification">
                  <h5 className="bold">99+</h5>
                  <p className="body1">Tỉ lệ chuyển đổi</p>
                  <p className="notification">So với hôm qua 0.6%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="MainBody">
      {tabs[0].id === activeTab && products()}
      {tabs[1].id === activeTab && management()}
      {tabs[2].id === activeTab && management()}
      {tabs[3].id === activeTab && management()}
      {tabs[4].id === activeTab && management()}
    </div>
  );
};

export default Menu;
