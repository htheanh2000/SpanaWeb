import classNames from 'classnames';
import Icon from 'components/icon';
import Input from 'components/input';
import MenuDropDown from 'components/menuDropdown/Menu';
import { Formik } from 'formik';
import { ProductType } from 'models/response';
import {
  addProductListItem,
  addProductRight,
  listItemsCategories,
  listItemsFilter,
  listItemsPrice,
} from 'page/dashboard/constant';
import { Dispatch, SetStateAction } from 'react';
import { formatNumber } from 'utils';

const AddProduct = ({
  valueProps,
  index,
  children,
  isAddProductDetail,
  setIsAddProductDetail,
}: {
  valueProps: number;
  index: number;
  children?: ProductType[] | string;
  isAddProductDetail?: boolean;
  setIsAddProductDetail: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleSubmit = () => {};
  const handleValidate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = 'Tên là bắt buộc';
    }

    if (!values.category) {
      errors.category = 'Danh mục khẩu là bắt buộc';
    }

    if (!values.description) {
      errors.description = 'Mô tả là bắt buộc';
    }

    if (!values.variant) {
      errors.variant = 'Biến thể là bắt buộc';
    }
    if (!values.option) {
      errors.option = 'Biến thể là bắt buộc';
    }

    if (!values.price) {
      errors.price = 'Giá là bắt buộc';
    }

    return errors;
  };
  if (valueProps === index && index === 2) {
    return (
      <>
        {isAddProductDetail ? (
          <div className="mt-10 px-2">
            <p className="text-headline font-bold mb-[6px] sm:text-title">
              Thêm sản phẩm mới
            </p>
            <h6 className="text-headline font-semibold mb-4 sm:text-[20px]">
              Thông tin cơ bản
            </h6>

            <Formik
              initialValues={{
                name: '',
                category: '',
                brand: '',
                size: '',
                description: '',
                variant: '',
                option: '',
                price: '',
              }}
              onSubmit={handleSubmit}
              validate={handleValidate}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                handleBlur,
                touched,
              }) => (
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      className="mb-2"
                      label="Tên sản phẩm"
                      placeholder="Vui lòng nhập tên sản phẩm"
                      size="small"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelClass="None"
                      isRequired
                    />
                    <span className="text-body2 text-light-error-color">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>
                  <div>
                    <Input
                      className="mb-2"
                      label="Danh mục"
                      placeholder="Vui lòng chọn một danh mục"
                      size="small"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelClass="None"
                      isRequired
                    />
                    <span className="text-body2 text-light-error-color">
                      {errors.category && touched.category && errors.category}
                    </span>
                  </div>

                  <div className="Params">
                    <h6 className="font-semibold text-[16px] mb-4 mt-8">
                      Thông số
                    </h6>
                    <div className="sm:flex gap-6">
                      <div className="flex-1">
                        <Input
                          className="mb-2"
                          label="Thương hiệu"
                          placeholder="Vui lòng chọn một thương hiệu"
                          size="small"
                          name="brand"
                          value={values.brand}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          labelClass="None"
                        />
                        <span className="text-body2 text-light-error-color">
                          {errors.brand && touched.brand && errors.brand}
                        </span>
                      </div>
                      <div className="flex-1">
                        <Input
                          className="mb-2"
                          label="Thành phần"
                          placeholder="Vui lòng nhập kích thước sản phẩm"
                          size="small"
                          name="size"
                          value={values.size}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          labelClass="None"
                        />
                        <span className="text-body2 text-light-error-color">
                          {errors.size && touched.size && errors.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h6 className="font-semibold text-[16px] mb-4 mt-8">
                    Chi tiết sản phẩm{' '}
                  </h6>

                  <div className="mb-6">
                    <h6 className="mb-2 text-[14px]">Hình ảnh sản phẩm *</h6>
                    <div className="w-[95px] h-[95px] rounded-md border-[1px] border-light-text-color-body-2 flex flex-col items-center justify-center p-4 text-center">
                      <p>+</p>
                      <p className="text-caption text-light-text-link-color-purple">
                        Hình ảnh 0/9
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <h6 className="mb-4 text-[14px]">Mô tả sản phẩm *</h6>
                    <textarea
                      name="description"
                      id=""
                      rows={10}
                      placeholder="Nhập mô tả sản phẩm..."
                      value={values.description}
                      className="w-full border-[1px] border-light-text-color-body-2 rounded-md p-4 pt-10"
                    ></textarea>
                    <span className="text-body2 text-light-error-color">
                      {errors.description &&
                        touched.description &&
                        errors.description}
                    </span>

                    <Icon
                      name="image2"
                      className="absolute top-12 left-3 cursor-pointer"
                    />
                    <Icon
                      name="filter2"
                      className="absolute top-12 left-10 cursor-pointer"
                    />
                  </div>

                  <h6 className="bold mb-4 mt-8">Thông tin bán hàng</h6>

                  <div>
                    <Input
                      className="mb-2"
                      label="Tên biến thể"
                      placeholder="Chọn hoặc nhập một biến thể"
                      size="small"
                      name="variant"
                      value={values.variant}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelClass="None"
                      isRequired
                    />
                    <span className="text-body2 text-light-error-color">
                      {errors.variant && touched.variant && errors.variant}
                    </span>
                  </div>

                  <div>
                    <Input
                      className="mb-2"
                      label="Tùy chọn"
                      placeholder="Nhập thông số sản phẩm"
                      size="small"
                      name="option"
                      value={values.option}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelClass="None"
                      isRequired
                    />
                    <span className="text-body2 text-light-error-color">
                      {errors.option && touched.option && errors.option}
                    </span>
                  </div>

                  <div>
                    <Input
                      className="mb-2"
                      label="Giá bán lẻ"
                      placeholder="Nhập giá cho sản phẩm"
                      size="small"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      labelClass="None"
                      isRequired
                    />
                    <span className="text-body2 text-light-error-color">
                      {errors.price && touched.price && errors.price}
                    </span>
                  </div>

                  <h6 className="text-[12px] text-light-text-link-color-purple text-center my-4 sm:text-h6 sm:text-left">
                    + Thêm một tùy chọn
                  </h6>

                  <div className="flex justify-center sm:justify-start">
                    <button className="btn-secondary-mobile sm:btn-secondary-mobile-medium sm:font-normal w-[180px] mb-4">
                      + Thêm một biến thể
                    </button>
                  </div>

                  <div className="flex justify-between sm:justify-end my-6 sm:gap-6">
                    <button
                      className="hidden sm:block btn-mobile-large-disabled px-6"
                      disabled
                    >
                      Hủy bỏ
                    </button>
                    <button
                      className="btn-mobile-disabled sm:btn-mobile-large-disabled px-6"
                      disabled
                    >
                      Lưu làm nháp
                    </button>
                    <button
                      className="btn-primary-mobile sm:btn-primary-mobile-large px-8"
                      type="submit"
                    >
                      Đăng tải
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        ) : (
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
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="w-5 h-5"
                      />
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
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-5 h-5"
                        />
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

                    <button
                      className="btn-primary-mobile-medium px-4 w-24 mx-auto"
                      onClick={() => setIsAddProductDetail(true)}
                    >
                      Bắt đầu
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return null;
  }
};

export default AddProduct;
