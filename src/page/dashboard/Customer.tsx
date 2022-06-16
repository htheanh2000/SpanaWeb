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
        <h5 className="font-bold text-h5 mb-4">Khách hàng</h5>

        <div className="bg-white p-4 rounded-md">
          <div className="flex  items-center gap-6 relative  mb-10">
            <Icon name="search" size="small" className="absolute left-2" />
            <input
              type="text"
              className="bg-light-secondary-system-color p-2 flex-1 rounded-sm pl-10"
              placeholder="Tìm kiếm..."
            />
            <Icon name="decrease" size="small" className="c-pointer" />
            <Icon name="three-dots" size="small" className="c-pointer" />
          </div>

          <div className="Table">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-light-secondary-system-color">
                  <th className="py-2 text-left">ID</th>
                  <th className="py-2 text-left">Họ tên</th>
                  <th className="py-2 text-left">Ngày tham gia</th>
                  <th className="py-2 text-left">Số dịch vụ</th>
                  <th className="py-2 text-left">Sản phẩm đã dùng</th>
                  <th className="py-2 text-left">Tổng thanh toán</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td className="pb-10">{customer.id}</td>
                    <td className="pb-10">{customer.name}</td>
                    <td className="pb-10">{customer.date}</td>
                    <td className="pb-10">{customer.quantity}</td>
                    <td className="pb-10">
                      {customer.products}
                      <div
                        onClick={() => setMembership(true)}
                        className="cursor-pointer text-light-text-link-color-purple text-menu1 font-bold"
                      >
                        Xem chi tiết
                      </div>
                    </td>
                    <td className="pb-10">
                      {formatNumber(customer.total, 3)} đ
                    </td>
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
      <div className="">
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-bold text-h5">Khách hàng thành viên</h5>
          <Button state="primary">Create New</Button>
        </div>

        <div className="bg-white p-4 rounded-md">
          <div className="flex justify-between items-center mb-6">
            <h6 className="font-bold text-[20px]">Gần đây</h6>
            <div className="flex gap-6">
              <Icon name="pen" />
              <Icon name="plus" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {fakeArray.map((item, index) => (
              <div
                className="border-[1px] rounded-md flex justify-between p-4"
                key={index}
              >
                <div className="flex gap-5">
                  <div className="">
                    <img
                      src={image}
                      alt=""
                      className="w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-headline font-bold">Huỳnh Thế Anh</p>
                    <p className="text-menu2 font-bold text-light-text-link-color-purple">
                      Xem thêm
                    </p>
                  </div>
                </div>

                <Icon name="three-dots" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold text-h5 mb-10">Danh sách chi tiết</p>

          <div className="bg-white p-4 rounded-md">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-light-secondary-system-color">
                  <th className="py-2 text-left">ID</th>
                  <th className="py-2 text-left">Tên khách hàng</th>
                  <th className="py-2 text-left">Hạng thành viên</th>
                  <th className="py-2 text-left">Ngày tham gia</th>
                  <th className="py-2 text-left">Chi tiết</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer, index) => (
                  <tr key={index}>
                    <td className="pb-10">{customer.id}</td>
                    <td className="pb-10">
                      <div className="flex gap-3">
                        <img
                          src={image}
                          alt=""
                          className="w-10 h-10 rounded-md"
                        />
                        {customer.name}
                      </div>
                    </td>
                    <td className="pb-10">{customer.level}</td>
                    <td className="pb-10">{customer.date}</td>
                    <td className="pb-10">
                      {customer.products}
                      <div
                        onClick={() => setMembership(true)}
                        className="text-menu2 font-bold text-light-text-link-color-purple mt-3"
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
    <div className="p-6 pt-8 bg-light-secondary-system-color w-full">
      {membership ? membershipComponent() : customersComponent()}
    </div>
  );
};

export default Customers;
