import classNames from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatNumber } from 'utils';
import {
  addProductListItem,
  addProductRight,
  chartAnalyzeData,
  listItemsCategories,
  listItemsFilter,
  listItemsPrice,
  managementRight,
  subTabs,
  tabs,
} from './constant';
import productApi from '../../api/salon/productApi';
import Dropdown from 'components/dropdown';
import { ProductType } from '../../models/response';

const Menu = () => {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);
  const [activeSubTab, setActiveSubTab] = useState<number>(subTabs[0].id);
  const arrayProduct = Array.from(Array(6).keys());
  const [value, setValue] = useState(new Date());
  const [products, setProducts] = useState<ProductType[]>([]);

  console.log(products);

  useEffect(() => {
    productApi
      .getAllProducts({ _id: '6267edd08cf58f40be3009cb' })
      .then((res) => setProducts(res.data));
  }, []);

  function onChange(nextValue: Date) {
    console.log({ nextValue });
    setValue(nextValue);
  }

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

  const productsComponent = () => (
    <>
      <div className="MainBody--left">
        {search()}
        {tabsCom()}

        <div className="Categories">
          {products.map((product, index) => (
            <div className="Item" key={index}>
              <div className="Title">
                <p className="title1 bold">{product._id}</p>
              </div>
              <div className="ProductList">
                {product.data.map((item, index) => (
                  <div key={index} className="Product">
                    <div className="Image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="Info">
                      <h6 className="bold">{item.name}</h6>
                      <p className="body2">{item.description}</p>
                      <div className="Price">
                        <h6 className="bold">
                          {formatNumber(item.price, 3)} đ
                        </h6>
                        <p className="body2">{formatNumber(item.price, 3)} đ</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

  const tieuChi = () => {
    return (
      <div className="Standard">
        <table>
          <thead>
            <tr>
              <th>
                <h6 className="bold">Tiêu chí</h6>
              </th>
              <th>
                <h6 className="bold">Shop của tôi</h6>
              </th>
              <th>
                <h6 className="bold">Chỉ tiêu</h6>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <div className="First">
                  <Icon name="calendar" />
                  <div className="Name">
                    <h6 className="bold">Tỉ lệ đơn không thành công</h6>
                    <p className="caption">01/2022 - 02/2022</p>
                  </div>
                </div>
              </td>
              <td>
                <Icon name="calendar" />
              </td>
              <td>
                <div className="Percent">
                  <p className="body2">{'<'}100%</p>
                  <Icon name="three-dots" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="First">
                  <Icon name="calendar" />
                  <div className="Name">
                    <h6 className="bold">Tỉ lệ đơn không thành công</h6>
                    <p className="caption">01/2022 - 02/2022</p>
                  </div>
                </div>
              </td>
              <td>
                <Icon name="calendar" />
              </td>
              <td>
                <div className="Percent">
                  <p className="body2">{'<'}100%</p>
                  <Icon name="three-dots" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="First">
                  <Icon name="calendar" />
                  <div className="Name">
                    <h6 className="bold">Tỉ lệ đơn không thành công</h6>
                    <p className="caption">01/2022 - 02/2022</p>
                  </div>
                </div>
              </td>
              <td>
                <Icon name="calendar" />
              </td>
              <td>
                <div className="Percent">
                  <p className="body2">{'<'}100%</p>
                  <Icon name="three-dots" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const managementMainContent = () => (
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

      <div className="Marketing">
        <p className="bold title1 mb-2">Kênh Marketing</p>
        <p className="body2">
          Công cụ Marketing & Đăng ký chương trình Khuyến Mãi
        </p>

        <div className="CalendarContent">
          <div className="Calendar">
            <Calendar onChange={onChange} value={value} />
          </div>

          <div className="Events">
            <h6 className="bold">Lịch sự kiện</h6>

            <div className="Event">
              <div className="Item">
                <Icon name="calendar" />
                <div>
                  <h6 className="bold mb-3">Sale Kem chống nắng</h6>
                  <p className="caption">Thời gian hoạt động: 2022/04/22</p>
                </div>
              </div>
              <div className="Item">
                <Icon name="calendar" />
                <div>
                  <h6 className="bold mb-3">Sale Kem chống nắng</h6>
                  <p className="caption">Thời gian hoạt động: 2022/04/22</p>
                </div>
              </div>
              <div className="Item">
                <Icon name="calendar" />
                <div>
                  <h6 className="bold mb-3">Sale Kem chống nắng</h6>
                  <p className="caption">Thời gian hoạt động: 2022/04/22</p>
                </div>
              </div>
              <div className="Item">
                <Icon name="calendar" />
                <div>
                  <h6 className="bold mb-3">Sale Kem chống nắng</h6>
                  <p className="caption">Thời gian hoạt động: 2022/04/22</p>
                </div>
              </div>

              <p className="body2 semibold">Xem thêm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Activity">
        <p className="bold title1 mb-2">Hiệu Quả Hoạt Động</p>
        <p className="body2">
          Bảng Hiệu Quả Hoạt Động giúp Người Bán hiểu rõ hơn về hoạt động buôn
          bán của Shop mình dựa trên những chỉ tiêu
        </p>

        <div className="SubTabs">
          <div className="Tabs">
            {subTabs.map((tab, index) => (
              <div
                key={index}
                className={classNames('All', {
                  Active: activeSubTab === tab.id,
                })}
                onClick={() => setActiveSubTab(tab.id)}
              >
                <p className="menu1 bold">{tab.title}</p>
                <span className="Separate"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="SubTabContent">
          {subTabs[0].id === activeSubTab && tieuChi()}
          {subTabs[1].id === activeSubTab && tieuChi()}
          {subTabs[2].id === activeSubTab && tieuChi()}
          {subTabs[3].id === activeSubTab && tieuChi()}
        </div>
      </div>

      <div className="Tools">
        <p className="bold title1 mb-2">Công Cụ Marketing</p>
        <p className="body2">
          Các chương trình nổi bật, Shop nhận voucher và ưu đãi tăng cường hiển
          thị
        </p>

        <div className="Body">
          <div className="MGG">
            <Icon name="buy" size="medium" />
            <h6 className="bold">Mã Giảm Giá Của Shop</h6>
            <p className="body2">
              Công cụ tăng đơn hàng bằng cách tạo mã giảm giá tặng cho người mua
            </p>
          </div>
          <div className="Freeship">
            <Icon name="ticket" size="medium" />
            <h6 className="bold">Mã Giảm Giá Của Shop</h6>
            <p className="body2">
              Công cụ tăng đơn hàng bằng cách tạo mã giảm giá tặng cho người mua
            </p>
          </div>
          <div className="Flash">
            <Icon name="discount" size="medium" />
            <h6 className="bold">Mã Giảm Giá Của Shop</h6>
            <p className="body2">
              Công cụ tăng đơn hàng bằng cách tạo mã giảm giá tặng cho người mua
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const addProductMainContent = () => (
    <div className="AddProduct">
      <div className="Filter">
        <Dropdown listItems={listItemsCategories} state="secondary" />
        <Dropdown listItems={listItemsPrice} state="secondary" />
        <Dropdown listItems={listItemsFilter} state="secondary" />
        <Button state="primary">Đặt lại</Button>
      </div>

      <div className="Selected">
        <p className="menu1">
          Đã chọn: <span>01</span>
        </p>
        <p className="menu1 bold">Xóa (0)</p>
      </div>

      <div className="ListProducts">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>Sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá bán lẻ</th>
              <th>Cập nhật</th>
              <th>Trạng thái</th>
              <th>Hoạt động</th>
            </tr>
          </thead>
          <tbody>
            {addProductListItem.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>
                  <div className="Name">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                  </div>
                </td>
                <td>{item.quantity}</td>
                <td>{formatNumber(item.price)}đ</td>
                <td>{item.date}</td>
                <td
                  className={classNames({
                    Up: item.status === 'Đang hoạt động',
                    Down: item.status === 'Ngưng hoạt động',
                  })}
                >
                  {item.status}
                </td>
                <td>
                  <div className="Actions">
                    <p>Chỉnh sửa</p>
                    <p>Hủy kích hoạt</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="More">
        <Icon name="arrow-down" />
        <p className="menu1">Mở rộng</p>
      </div>
    </div>
  );

  const management = (id?: number) => (
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
        <p className="bold title1 mb-8">
          {id === 2 ? 'Nhiệm Vụ Người Bán' : 'Thêm sản phẩm mới'}
        </p>

        {id === 2 &&
          managementRight.map((item, index) => (
            <div className="Item" key={index}>
              <p className="semibold body2">{item.title}</p>
              <div className="Text">
                <Icon name="arrow-up-s" />
                <p className="captions">{item.caption}</p>
              </div>

              <Button state="secondary"> Bắt đầu</Button>
            </div>
          ))}
        {id === 3 &&
          addProductRight.map((item, index) => (
            <div className="Item" key={index}>
              <p className="semibold body2">{item.title}</p>
              <div className="Text">
                <Icon name="arrow-up-s" />
                <p className="captions">{item.caption}</p>
              </div>

              <Button state="secondary"> Bắt đầu</Button>
            </div>
          ))}
      </div>

      {id === 2 && managementMainContent()}
      {id === 3 && addProductMainContent()}
    </div>
  );

  // const addProduct = () => <div className="AddProduct">Add product</div>;

  return (
    <div className="MainBody">
      {tabs[0].id === activeTab && productsComponent()}
      {tabs[1].id === activeTab && management(tabs[1].id)}
      {tabs[2].id === activeTab && management(tabs[2].id)}
      {tabs[3].id === activeTab && management()}
      {tabs[4].id === activeTab && management()}
    </div>
  );
};

export default Menu;
