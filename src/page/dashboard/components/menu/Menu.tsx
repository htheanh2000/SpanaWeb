import { Box, Tab, Tabs } from '@mui/material';
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
import { addProductRight } from 'page/dashboard/constant';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import AddProduct from './AddProduct';
import Management from './Management';
import Products from './Products';

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
  const [isAddProductDetail, setIsAddProductDetail] = useState<boolean>(false);

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
        <Products
          children={children}
          index={index}
          value={value}
          loading={loading}
        />

        <Management children={children} index={index} valueProps={value} />

        <AddProduct
          children={children}
          index={index}
          valueProps={value}
          isAddProductDetail={isAddProductDetail}
          setIsAddProductDetail={setIsAddProductDetail}
        />

        {/* {value === index && index !== 0 && children} */}
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

          <Box
            sx={{
              borderBottom: 2,
              borderColor: '#dbd7f4',
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleChangeTab}
              aria-label="basic tabs"
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
        <div
          className={`w-[400px] bg-white rounded-md p-6 h-full hidden sm:block`}
        >
          {activeTab === 0 && <Cart className="hidden sm:block" />}
          {activeTab === 2 && !isAddProductDetail && (
            <div className="mt-10 hidden sm:block">
              <p className="text-title font-bold mb-10">Thêm sản phẩm mới</p>
              <div className="flex flex-col gap-16">
                {addProductRight.map((item, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    <p className="font-semibold text-body2">{item.title}</p>
                    <div className="flex gap-2">
                      <Icon name="arrow-up-s" />
                      <p className="text-caption">{item.caption}</p>
                    </div>

                    <button
                      className="btn-primary-mobile-medium px-4 w-24"
                      onClick={() => setIsAddProductDetail(true)}
                    >
                      Bắt đầu
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 2 && isAddProductDetail && (
            <div className="mt-10 min-h-[100vh] flex flex-col ml-6">
              <div className="flex gap-6 items-center">
                <div className="w-[2px] h-[60px] bg-light-primary-color-50"></div>
                <div className="text-base">Thông tin cơ bản</div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-[2px] h-[60px] bg-light-primary-color-10"></div>
                <p className="text-base text-light-disable-color">
                  Chi tiết Sản phẩm
                </p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-[2px] h-[60px] bg-light-primary-color-10"></div>
                <p className="text-base text-light-disable-color">
                  Thông tin Bán hàng
                </p>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-[2px] h-[60px] bg-light-primary-color-10"></div>
                <p className="text-base text-light-disable-color">
                  Vận chuyển & Bảo hành
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer className="sm:hidden" />
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
