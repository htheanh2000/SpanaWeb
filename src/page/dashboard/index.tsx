import classNames from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import React from 'react';
import './dashboard.scss';
import { iconList, productList } from './constant';
import { tabs } from './constant';

// type HTMLElementEvent<T extends HTMLElement> = Event &
//   HTMLInputElement & {
//     target: T;
//     // probably you might want to add the currentTarget as well
//     // currentTarget: T;
//   };

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState<number>(tabs[0].id);
  const [activeIcon, setActiveIcon] = React.useState<number>(iconList[0].id);

  const header = () => (
    <div className="Header">
      <div className="Header--left">
        <div className="Photo"></div>
        <h5 className="bold">Spana</h5>
      </div>

      <div className="Header--right">
        <Icon name="bell" size="medium" className="Bell" />
        <div className="Avatar"></div>
        <div className="Info">
          <p className="bold">Minh Quang</p>
          <p className="body2">Thu Ngân</p>
        </div>
      </div>
    </div>
  );

  const sidebar = () => (
    <div className="flex">
      <div className="SideBar">
        <div className="Top">
          {iconList.map((icon, index) => (
            <div
              key={index}
              className={classNames('Icons', { Active: activeIcon === index })}
              onClick={() => setActiveIcon(index)}
            >
              <Icon name={icon.name} className="Icon" size="medium" />
            </div>
          ))}
        </div>
        <div className="Bot">
          <div className="Icons c-pointer">
            <Icon name="setting" className="Icon" size="medium" />
          </div>
        </div>
      </div>

      <div className="MainBody">
        <div className="MainBody--left">
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
                      <h6 className="bold">{item.priceSale} đ</h6>
                      <p className="body2">{item.price} đ</p>
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
              <p className="menu1 bold">Xóa tất cả</p>
              <Icon name="refresh" size="small" />
            </div>
          </div>

          <span className="Divider"></span>

          <div className="ProductList">
            <div className="Product">
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
                <span className="Button">+</span>
              </div>
            </div>

            <div className="Product">
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
                <span className="Button">+</span>
              </div>
            </div>
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
      </div>
    </div>
  );

  return (
    <div className="Dashboard">
      {header()}
      {sidebar()}
    </div>
  );
};
export default Dashboard;
