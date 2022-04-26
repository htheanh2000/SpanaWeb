import classNames from 'classnames';
import Button from 'components/button';
import Icon from 'components/icon';
import React from 'react';
import { formatNumber } from 'utils';
import { productList, tabs } from './constant';

const Menu = () => {
  const [activeTab, setActiveTab] = React.useState<number>(tabs[0].id);
  const arrayProduct = Array.from(Array(6).keys());

  const handleIncrease = (item: number) => {
    console.log(item);
  };

  return (
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
    </div>
  );
};

export default Menu;
