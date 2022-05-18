import Button from 'components/button';
import Icon from 'components/icon';
import { useState } from 'react';
import { formatNumber } from 'utils';
import image from '../../assets/image/spa/1.jpg';

const customers = [
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 2,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Lâu năm',
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 23,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Lâu năm',
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 21,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Gần đây',
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 3,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Gần đây',
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 28,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Gần đây',
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 299,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Lâu năm',
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 7,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
    level: 'Lâu năm',
  },
];

const Customers = () => {
  const [membership, setMembership] = useState<boolean>(false);
  const fakeArray = new Array(6).fill(0);
  const customersComponent = () => {
    return (
      <>
        <h5 className="bold mb-4">Khách hàng</h5>

        <div className="Customers--body ">
          <div className="Search">
            <Icon name="search" size="small" className="c-pointer" />
            <input type="text" className="Input" placeholder="Tìm kiếm..." />
            <Icon name="decrease" size="small" className="c-pointer" />
            <Icon name="three-dots" size="small" className="c-pointer" />
          </div>

          <div className="Table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Họ tên</th>
                  <th>Ngày tham gia</th>
                  <th>Số dịch vụ</th>
                  <th>Sản phẩm đã dùng</th>
                  <th>Tổng thanh toán</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.date}</td>
                    <td>{customer.quantity}</td>
                    <td className="Detail">
                      {customer.products}
                      <div
                        onClick={() => setMembership(true)}
                        className="c-pointer"
                      >
                        Xem chi tiết
                      </div>
                    </td>
                    <td>{formatNumber(customer.total, 3)} đ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };
  const membershipComponent = () => {
    return (
      <div className="Membership">
        <div className="Title">
          <h5 className="bold">Khách hàng thành viên</h5>
          <Button state="primary">Create New</Button>
        </div>

        <div className="Recent">
          <div className="Title">
            <h6 className="bold">Gần đây</h6>
            <div className="">
              <Icon name="pen" />
              <Icon name="plus" />
            </div>
          </div>

          <div className="Users">
            {fakeArray.map((item, index) => (
              <div className="Item" key={index}>
                <div>
                  <div className="Avatar">
                    <img src={image} alt="" className="Avatar" />
                  </div>
                  <div className="Name">
                    <p className="headline bold">Huỳnh Thế Anh</p>
                    <p className="menu2 bold">Xem thêm</p>
                  </div>
                </div>

                <Icon name="three-dots" />
              </div>
            ))}
          </div>
        </div>

        <div className="Detail">
          <p className="bold">Danh sách chi tiết</p>

          <div className="Table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên khách hàng</th>
                  <th>Hạng thành viên</th>
                  <th>Ngày tham gia</th>
                  <th>Chi tiết</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td>{customer.id}</td>
                    <td>
                      <div className="Name">
                        <img src={image} alt="" />
                        {customer.name}
                      </div>
                    </td>
                    <td>{customer.level}</td>
                    <td>{customer.date}</td>
                    <td className="Detail">
                      {customer.products}
                      <div
                        onClick={() => setMembership(true)}
                        className="c-pointer Button"
                      >
                        Xem chi tiết
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="Customers">
      {membership ? membershipComponent() : customersComponent()}
    </div>
  );
};

export default Customers;
