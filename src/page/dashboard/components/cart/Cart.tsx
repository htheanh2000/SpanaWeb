import Icon from 'components/icon';

const Cart = ({ className }: { className?: string }) => {
  const arrayProduct = Array.from(Array(6).keys());
  return (
    <div
      className={`${className} w-[400px] bg-white rounded-md p-2 pr-12 h-full`}
    >
      <div className="flex items-center justify-between mt-10 mb-6">
        <p className="text-headline font-bold">Đơn hàng hiện tại</p>
        <div className="flex gap-4">
          <p className="text-headline font-bold cursor-pointer text-light-error-color">
            Xóa tất cả
          </p>
          <Icon name="refresh" size="small" className="c-pointer" />
        </div>
      </div>

      <div className="h-[1px] w-full bg-light-primary-separator-color"></div>

      <div className="flex flex-col gap-4 mt-4">
        {arrayProduct.map((item, index) => (
          <div key={index} className="flex items-center gap-4 ">
            <div className="w-[64px] h-[64px] bg-fill-image-placeholder-color rounded-md"></div>

            <div className="Info">
              <div className="Name">
                <h6 className="font-bold line-clamp-2">
                  Tên sản phẩm - thương hiệu
                </h6>
              </div>
              <div className="Price">
                <h6 className="text-light-accent-1-color-50 font-bold">
                  100.000đ
                </h6>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="btn-primary-mobile px-[10px]">-</span>
              <span className="font-bold">1</span>
              <span className="btn-primary-mobile px-2">+</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mt-10 gap-3">
        <div className="flex justify-between">
          <h6 className="bold text-light-text-color-body-1">Tên khách hàng:</h6>
          <h6 className="bold">Nguyen Van A</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="bold text-light-text-color-body-1">Số điện thoại:</h6>
          <h6 className="bold">012345678</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="bold text-light-text-color-body-1">ID khách hàng:</h6>
          <h6 className="bold">SPN001</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="bold text-light-text-color-body-1">Tổng hóa đơn</h6>
          <h6 className="bold">300.000 đ</h6>
        </div>
        <div className="flex justify-between">
          <h6 className="bold text-light-text-color-body-1">Discount</h6>
          <h6 className="bold">-1%</h6>
        </div>

        <div className="h-[1px] w-full bg-light-primary-separator-color"></div>

        <div className="flex justify-between">
          <h6 className="bold text-light-text-color-body-1">Thành tiền</h6>
          <h5 className="bold">297.000 đ</h5>
        </div>
      </div>

      <button className="btn-primary-mobile-medium w-full my-4">
        Xuất hóa đơn
      </button>
    </div>
  );
};

export default Cart;
