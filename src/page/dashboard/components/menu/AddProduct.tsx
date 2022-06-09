import classNames from 'classnames';
import Icon from 'components/icon';
import MenuDropDown from 'components/menu/Menu';
import { ProductType } from 'models/response';
import {
  addProductListItem,
  addProductRight,
  listItemsCategories,
  listItemsFilter,
  listItemsPrice,
} from 'page/dashboard/constant';
import { formatNumber } from 'utils';

const AddProduct = ({
  valueProps,
  index,
  children,
}: {
  valueProps: number;
  index: number;
  children?: ProductType[] | string;
}) => {
  if (valueProps === index && index === 2) {
    return (
      <div className="mt-10">
        <div className="flex gap-4 mb-4">
          <MenuDropDown
            data={listItemsCategories}
            className="flex-1 text-menu2 sm:text-menu1"
          />
          <MenuDropDown
            data={listItemsPrice}
            className="flex-1 text-menu2 sm:text-menu1"
          />
          <MenuDropDown
            data={listItemsFilter}
            className="flex-1 text-menu2 sm:text-menu1"
          />
          <button className="btn-primary-mobile-medium hidden sm:block flex-1">
            Đặt lại
          </button>
        </div>

        <div className="flex items-center justify-between sm:my-4 ">
          <p className="text-headline font-bold sm:my-10">
            Đã chọn: <span className="font-normal ">01</span>
          </p>
          <p className="text-headline font-bold text-light-text-link-color-purple">
            Xóa (0)
          </p>
        </div>

        <div className="hidden sm:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="font-normal pb-9 text-left">
                  <input type="checkbox" name="" id="" className="w-5 h-5" />
                </th>
                <th className="font-normal pb-9 text-left">Sản phẩm</th>
                <th className="font-normal pb-9 text-left">Số lượng</th>
                <th className="font-normal pb-9 text-left">Giá bán lẻ</th>
                <th className="font-normal pb-9 text-left">Cập nhật</th>
                <th className="font-normal pb-9 text-left">Trạng thái</th>
                <th className="font-normal pb-9 text-left">Hoạt động</th>
              </tr>
            </thead>
            <tbody>
              {addProductListItem.map((item, index) => (
                <tr key={index} className="text-body2 ">
                  <td className="pb-9">
                    <input type="checkbox" name="" id="" className="w-5 h-5" />
                  </td>
                  <td className="pb-9">
                    <div className="flex items-center">
                      <img src={item.image} alt="" className="w-12 h-12" />
                      <p>{item.name}</p>
                    </div>
                  </td>
                  <td className="pb-9">{item.quantity}</td>
                  <td className="pb-9">{formatNumber(item.price)}đ</td>
                  <td className="pb-9">{item.date}</td>
                  <td
                    className={classNames('pb-9', {
                      'text-light-accent-1-color-50':
                        item.status === 'Đang hoạt động',
                      'text-light-error-color':
                        item.status === 'Ngưng hoạt động',
                    })}
                  >
                    {item.status}
                  </td>
                  <td>
                    <div className="text-light-text-link-color-purple">
                      <p>Chỉnh sửa</p>
                      <p>Hủy kích hoạt</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 sm:hidden">
          {addProductListItem.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <input type="checkbox" name="" id="" />
              <img src={item.image} alt="" className="w-[45px] h-[45px]" />
              <div className="flex flex-col gap-1">
                <p className="text-body2 font-semibold">{item.name}</p>
                <p className="text-[10px]">Số lượng: {item.quantity}</p>
                <p className="text-[10px]">
                  Giá bán lẻ: {formatNumber(item.price)}
                </p>
                <p className="text-[10px]">Cập nhật: {item.date}</p>
                <p className="text-[10px]">
                  Trạng thái:{' '}
                  <span
                    className={classNames(
                      {
                        'text-light-error-color':
                          item.status === 'Ngưng hoạt động',
                      },
                      {
                        'text-light-accent-1-color-50':
                          item.status === 'Đang hoạt động',
                      }
                    )}
                  >
                    {item.status}
                  </span>
                </p>

                <div className="flex gap-4 text-[8px] text-light-text-link-color-purple">
                  <p>Chỉnh sửa</p>
                  <p>Hủy kích hoạt</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-light-text-color-body-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="text-caption text-center mt-8 sm:hidden">
          Xem thêm...
        </div>

        <div className="hidden sm:flex items-center">
          <Icon name="arrow-down" />
          <p className="menu1">Mở rộng</p>
        </div>

        <div className="text-center mt-10 sm:hidden">
          <p className="text-headline font-bold mb-10">Thêm sản phẩm mới</p>
          <div className="flex flex-col gap-8">
            {addProductRight.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <p className="font-semibold text-body2">{item.title}</p>
                <div className="flex gap-2 justify-center">
                  <Icon name="arrow-up-s" />
                  <p className="text-caption">{item.caption}</p>
                </div>

                <button className="btn-primary-mobile-medium px-4 w-24 mx-auto">
                  Bắt đầu
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default AddProduct;
