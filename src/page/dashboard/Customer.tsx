import Icon from 'components/icon';
import { formatNumber } from 'utils';

const customers = [
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 2,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 23,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 21,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 3,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 28,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 299,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
  {
    id: 1232,
    name: 'Minh Quang',
    date: '18/03/2021',
    quantity: 7,
    products:
      'americano (10); latte (8); cappuccino (14); macchiato (1); vanilla latte (5)',
    total: 4900000,
  },
];

const Customers = () => {
  return (
    <div className="Customers">
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
                    <div>Xem chi tiết</div>
                  </td>
                  <td>{formatNumber(customer.total, 3)} đ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
