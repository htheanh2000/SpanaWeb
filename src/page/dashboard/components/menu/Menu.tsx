import { Box, Skeleton, Tab, Tabs } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import classNames from 'classnames';
import Footer from 'components/footer/Footer';
import Icon from 'components/icon';
import {
  dashboardActions,
  selectDashboardLoading,
  selectSalonAllProducts,
} from 'features/dashboard/dashboardSlice';
import { ProductType } from 'models/response';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { formatNumber } from 'utils';
import fakeImage from '../../../../assets/image/spa/1.jpg';
import Cart from '../cart/Cart';

const tabs = ['Sản phẩm', 'Quản lý', 'Thêm sản phẩm', 'Thông báo', 'Thiết lập'];
interface TabPanelProps {
  children: ProductType[] | string;
  index: number;
  value: number;
}

const Menu = ({ className }: { className?: string }) => {
  const products = useAppSelector(selectSalonAllProducts);
  const loading = useAppSelector(selectDashboardLoading);
  const dispatch = useAppDispatch();

  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    dispatch(dashboardActions.getSalonAllProducts());
  }, [dispatch]);

  const handleChangeTab = (event: React.SyntheticEvent, value: any) => {
    setActiveTab(value);
    if (value === 0) dispatch(dashboardActions.getSalonAllProducts());
  };
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && index === 0 && (
          <Box sx={{ p: 3 }}>
            {!loading &&
              typeof children !== 'string' &&
              children.map((product, index) => (
                <div className="relative" key={index}>
                  <div className="">
                    <p className="font-bold text-headline mb-4">
                      {product._id}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 mb-4 gap-2">
                    {product.data.map((item, index) => (
                      <div key={index} className="border-[1px] p-2 rounded-md">
                        <div className="Image">
                          <img src={fakeImage} alt="" />
                        </div>
                        <div className="flex flex-col gap-2 mt-2">
                          <h6 className="font-bold text-[14px] sm:text-base">
                            {item.name}
                          </h6>
                          <p className="text-[11px] line-clamp-2 sm:text-body2">
                            {item.description}
                          </p>
                          <div className="flex justify-between">
                            <h6 className="font-bold text-[12px] sm:text-base text-light-accent-1-color-50">
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

            {loading && (
              <div className="flex items-center flex-col justify-center gap-4 mt-10">
                <div className="flex items-center gap-4">
                  <Skeleton
                    variant="rectangular"
                    width={40}
                    height={40}
                    animation="wave"
                    className="rounded-md"
                  />
                  <div>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={100}
                      height={20}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={120}
                      height={20}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Skeleton
                    variant="rectangular"
                    width={50}
                    height={50}
                    animation="wave"
                    className="rounded-md"
                  />
                  <div>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={120}
                      height={20}
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      width={140}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            )}
          </Box>
        )}
        {value === index && index !== 0 && children}
      </div>
    );
  }
  return (
    <div
      className={`${className} px-4 mt-10 sm:mt-0 sm:px-0 sm:bg-light-secondary-system-color w-full`}
    >
      <div className="sm:flex justify-between">
        <div className="flex-1 sm:m-6 sm:bg-white sm:p-6">
          <div className="relative">
            <Icon
              name="search"
              size="small"
              className="absolute top-[13px] left-3 w-4 h-4"
            />
            <input
              type="text"
              className="bg-fill-text-field-2 p-2 px-7 w-full rounded-md placeholder:ml-7 placeholder:text-[12px]"
              placeholder="Tìm kiếm..."
            />
          </div>

          <Box>
            <Tabs
              value={activeTab}
              onChange={handleChangeTab}
              aria-label="basic tabs example"
              scrollButtons={false}
              variant={window.screen.width < 640 ? 'scrollable' : 'fullWidth'}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab}
                  value={index}
                  className={classNames(
                    'text-normal font-bold text-light-text-color-body-1 mt-10 text-menu2',
                    { 'text-black': activeTab === index }
                  )}
                />
              ))}
            </Tabs>
          </Box>
          <TabPanel value={activeTab} index={0}>
            {products}
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            {tabs[activeTab]}
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            {tabs[activeTab]}
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
            {tabs[activeTab]}
          </TabPanel>
          <TabPanel value={activeTab} index={4}>
            {tabs[activeTab]}
          </TabPanel>
        </div>

        <Cart className="hidden sm:block" />
      </div>

      <Footer className="sm:hidden" />
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
