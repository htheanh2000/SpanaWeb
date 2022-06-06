import { Tab } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import classNames from 'classnames';
import Footer from 'components/footer/Footer';
import Icon from 'components/icon';
import SkeletonLoading from 'components/skeletonLoading/SkeletonLoading';
import {
  dashboardActions,
  selectDashboardLoading,
  selectSalonAllProducts,
} from 'features/dashboard/dashboardSlice';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { formatNumber } from 'utils';
import fakeImage from '../../../assets/image/spa/1.jpg';

const tabs = ['Sản phẩm', 'Quản lý', 'Thêm sản phẩm', 'Thông báo', 'Thiết lập'];

const HomePage = ({ className }: { className?: string }) => {
  const products = useAppSelector(selectSalonAllProducts);
  const loading = useAppSelector(selectDashboardLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dashboardActions.getSalonAllProducts());
  }, [dispatch]);

  const handleChangeTab = (index: number) => {
    if (index === 0) dispatch(dashboardActions.getSalonAllProducts());
  };
  console.log({ products });
  return (
    <div className={`${className} px-4 mt-10`}>
      <div className="relative">
        <Icon
          name="search"
          size="small"
          className="absolute top-3 left-3 w-4 h-4"
        />
        <input
          type="text"
          className="bg-fill-text-field-2 p-2 w-full rounded-md placeholder:pl-7 placeholder:text-[12px]"
          placeholder="Tìm kiếm..."
        />
      </div>
      <div className="flex overflow-x-auto">
        <button>1asdasdasdasd</button>
        <button>1asdasdasdasd</button>
        <button>1asdasdasdasd</button>
        <button>1asdasdasdasd</button>
        <button>1asdasdasdasd</button>
        <button>1asdasdasdasd</button>
      </div>
      <Tab.Group onChange={handleChangeTab}>
        <Tab.List
          className="flex my-10 overflow-x-auto whitespace-nowrap gap-4"
          as={'div'}
        >
          {tabs.map((tab, index) => (
            <Tab key={index} className="text-body2 font-bold">
              {({ selected }) => (
                <div className="flex flex-col space-y-2">
                  <p>{tab}</p>
                  <div
                    className={classNames('h-[2px] w-full px-16', {
                      'bg-light-primary-color-10': !selected,
                      'bg-light-primary-color-50': selected,
                    })}
                  ></div>
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {!loading &&
              products.map((product, index) => (
                <div className="" key={index}>
                  <div className="">
                    <p className="font-bold text-headline mb-4">
                      {product._id}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 mb-4 gap-2">
                    {product.data.map((item, index) => (
                      <div key={index} className="border-[1px] p-2 rounded-md">
                        <div className="Image">
                          <img src={fakeImage} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                          <h6 className="font-bold text-[14px]">{item.name}</h6>
                          <p className="text-[11px] line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex justify-between">
                            <h6 className="font-bold text-[12px] text-light-accent-1-color-50">
                              {formatNumber(item.price, 3)} đ
                            </h6>
                            <p className="font-bold text-[12px] text-light-text-color-body-2 line-through">
                              {formatNumber(item.price, 3)} đ
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {loading && <SkeletonLoading />}
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <Footer />
    </div>
  );
};

HomePage.propTypes = {
  className: PropTypes.string,
};

export default HomePage;
