import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Icon from 'components/icon';
import { ProductType } from 'models/response';
import { chartAnalyzeData, subTabs } from 'page/dashboard/constant';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const Management = ({
  valueProps,
  index,
  children,
}: {
  valueProps: number;
  index: number;
  children: ProductType[] | string;
}) => {
  const [value, setValue] = useState(new Date());
  const [activeSubTab, setActiveSubTab] = useState<number>(subTabs[0].id);
  const fakeArray = Array.from({ length: 4 }, (_, index) => index);

  function onChange(nextValue: Date) {
    console.log({ nextValue });
    setValue(nextValue);
  }

  const tieuChi = () => {
    return (
      <div className="mt-4 mb-6 sm:bg-light-secondary-system-color sm:p-4 rounded-md sm:w-full">
        <table className="table-fixed ">
          <thead className="">
            <tr className="flex justify-between">
              <th>Tiêu chí</th>
              <th className="mr-20">Shop của tôi</th>
              <th>Chỉ tiêu</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {fakeArray.map((val, index) => (
              <tr className="">
                <td>
                  <div className="flex gap-2 my-4">
                    <Icon name="calendar" />
                    <div className="Name">
                      <h6 className="text-body2 font-semibold ">
                        Tỉ lệ đơn không thành công
                      </h6>
                      <p className="text-notification font-bold text-light-text-color-body-1">
                        01/2022 - 02/2022
                      </p>
                    </div>
                  </div>
                </td>
                <td className="ml-2 sm:ml-0">-</td>
                <td>
                  <div className="Percent">
                    <p className="text-body2 text-light-text-color-body-1">
                      {'<'}100%
                    </p>
                  </div>
                </td>
                <td>
                  <Icon name="three-dots" className="hidden sm:block" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  if (valueProps === index && index === 1) {
    return (
      <div className="mt-10">
        <p className="font-bold text-headline sm:text-title">
          Danh sách cần làm
        </p>
        <p className="text-caption text-light-text-color-body-2 sm:text-body2 ">
          Những việc bạn sẽ phải làm
        </p>

        <div className="grid grid-cols-2 my-10 gap-8 relative text-center sm:grid-cols-1">
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-evenly">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">Chờ xác nhận</p>
            </div>

            <div className="h-[1px] w-1/2 bg-light-primary-separator-color sm:w-[1px] sm:h-1/2"></div>

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">Chờ lấy hàng</p>
            </div>

            <div className="h-[1px] w-1/2 bg-light-primary-separator-color sm:w-[1px] sm:h-1/2"></div>

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">Đã xử lý</p>
            </div>

            <div className="h-[1px] w-1/2 bg-light-primary-separator-color sm:w-[1px] sm:h-1/2"></div>

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">Đơn hủy</p>
            </div>
          </div>

          <div className="w-[1px] h-full bg-light-secondary-separator-color absolute top-0 left-1/2 sm:w-full sm:h-[1px] sm:top-1/2 sm:left-0"></div>

          <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-evenly">
            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">
                Trả hàng/hoàn tiền chờ xử lí
              </p>
            </div>

            <div className="h-[1px] w-1/2 bg-light-primary-separator-color sm:w-[1px] sm:h-1/2"></div>

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">Sản phẩm bị tạm khóa</p>
            </div>

            <div className="h-[1px] w-1/2 bg-light-primary-separator-color sm:w-[1px] sm:h-1/2"></div>

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">Sản phẩm hết hàng</p>
            </div>

            <div className="h-[1px] w-1/2 bg-light-primary-separator-color sm:w-[1px] sm:h-1/2"></div>

            <div className="flex flex-col items-center justify-center gap-2 sm:flex-1">
              <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:font-bold sm:text-h5">
                99+
              </h5>
              <p className="text-caption sm:text-body1">
                Chương trình khuyến mãi chờ xử lí
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold text-headline sm:text-title">
            Phân tích bán hàng
          </p>
          <p className="text-caption text-light-text-color-body-2 sm:text-body2">
            Tổng quan về dữ liệu của cửa hàng cho kích thước của đơn hàng đã xác
            nhận
          </p>

          <div className="mt-6 sm:flex sm:gap-4">
            <div className="sm:w-[55%]">
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={chartAnalyzeData}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="name"
                    className="text-red-500"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: '9px', fontStyle: 'bold' }}
                  />
                  <YAxis hide />
                  <CartesianGrid strokeDasharray="1 0" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="Revenue"
                    stroke="#5541d7"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 my-10 gap-8 relative text-center sm:flex-1 sm:my-0">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:text-h5 sm:font-bold">
                    99+
                  </h5>
                  <p className="text-caption sm:text-body2">Lượt truy cập</p>
                  <p className="hidden sm:block sm:text-notification">
                    So với hôm qua 0.6%
                  </p>
                </div>

                <div className="h-[1px] w-1/2 bg-light-primary-separator-color"></div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:text-h5 sm:font-bold">
                    99+
                  </h5>
                  <p className="text-caption sm:text-body2">Lượt xem</p>
                  <p className="hidden sm:block sm:text-notification">
                    So với hôm qua 0.6%
                  </p>
                </div>
              </div>

              <div className="w-[1px] h-full bg-light-secondary-separator-color absolute top-0 left-1/2"></div>

              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:text-h5 sm:font-bold">
                    99+
                  </h5>
                  <p className="text-caption sm:text-body2">Đơn hàng</p>
                  <p className="hidden sm:block sm:text-notification">
                    So với hôm qua 0.6%
                  </p>
                </div>

                <div className="h-[1px] w-1/2 bg-light-primary-separator-color"></div>

                <div className="flex flex-col items-center justify-center gap-2">
                  <h5 className="font-semibold text-body1 text-light-text-link-color-purple sm:text-h5 sm:font-bold">
                    99+
                  </h5>
                  <p className="text-caption sm:text-body2">Tỉ lệ chuyển đổi</p>
                  <p className="hidden sm:block sm:text-notification">
                    So với hôm qua 0.6%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold text-headline sm:text-title">
            Kênh Marketing
          </p>
          <p className="text-caption text-light-text-color-body-2 sm:text-body2">
            Công cụ Marketing & Đăng ký chương trình Khuyến Mãi
          </p>

          <div className="mt-10 sm:flex sm:gap-20">
            <div className="hidden sm:block">
              <Calendar onChange={onChange} value={value} />
            </div>

            <div className="">
              <h6 className="font-bold text-caption mb-3 sm:text-h6">
                Lịch sự kiện
              </h6>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Icon name="calendar" />
                  <div>
                    <h6 className="font-semibold text-body2 mb-1 sm:text-h6">
                      Sale Kem chống nắng
                    </h6>
                    <p className="text-notification font-bold sm:text-caption sm:font-normal text-light-text-color-body-1">
                      Thời gian hoạt động: 2022/04/22
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="calendar" />
                  <div>
                    <h6 className="font-semibold text-body2 mb-1 sm:text-h6">
                      Ngành hàng kem dưỡng
                    </h6>
                    <p className="text-notification font-bold sm:text-caption sm:font-normal text-light-text-color-body-1">
                      Thời gian hoạt động: 2022/04/22
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="calendar" />
                  <div>
                    <h6 className="font-semibold text-body2 mb-1 sm:text-h6">
                      Phong cách sống
                    </h6>
                    <p className="text-notification font-bold sm:text-caption sm:font-normal text-light-text-color-body-1">
                      Thời gian hoạt động: 2022/04/22
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="calendar" />
                  <div>
                    <h6 className="font-semibold text-body2 mb-1 sm:text-h6">
                      Bộ sưu tập kem chống nắng
                    </h6>
                    <p className="text-notification font-bold sm:text-caption sm:font-normal text-light-text-color-body-1">
                      Thời gian hoạt động: 2022/04/22
                    </p>
                  </div>
                </div>

                <p className="font-bold text-caption text-light-text-link-color-purple mx-auto">
                  Xem thêm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-bold text-headline sm:text-title">
            Hiệu Quả Hoạt Động
          </p>
          <p className="text-caption text-light-text-color-body-2 sm:text-body2">
            Bảng Hiệu Quả Hoạt Động giúp Người Bán hiểu rõ hơn về hoạt động buôn
            bán của Shop mình dựa trên những chỉ tiêu
          </p>

          <Tab.Group>
            <Tab.List className="flex overflow-x-auto whitespace-nowrap mt-6">
              {subTabs.map((tab, index) => (
                <Tab
                  key={index}
                  className="text-menu2 sm:text-menu1 font-bold flex flex-col gap-2 items-center justify-center"
                >
                  <div
                    className={classNames(
                      'px-4',
                      {
                        'text-black': activeSubTab === tab.id,
                      },
                      {
                        'text-light-text-color-body-1': activeSubTab !== tab.id,
                      }
                    )}
                    onClick={() => setActiveSubTab(tab.id)}
                  >
                    {tab.title}
                  </div>
                  <div
                    className={classNames(
                      'h-[2px] w-full px-2',
                      {
                        'bg-light-primary-color-50': activeSubTab === tab.id,
                      },
                      {
                        'bg-light-primary-color-10': activeSubTab !== tab.id,
                      }
                    )}
                  ></div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>{tieuChi()}</Tab.Panel>
              <Tab.Panel>{tieuChi()}</Tab.Panel>
              <Tab.Panel>{tieuChi()}</Tab.Panel>
              <Tab.Panel>{tieuChi()}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>

        <div className="mt-10">
          <p className="font-bold text-headline sm:text-title">
            Công Cụ Marketing
          </p>
          <p className="text-caption text-light-text-color-body-2 sm:text-body2">
            Các chương trình nổi bật, Shop nhận voucher và ưu đãi tăng cường
            hiển thị
          </p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <div className="w-[250px] h-[135px] sm:h-[182px] sm:w-[260px] rounded-md bg-light-primary-color-30 p-4 mx-auto flex flex-col gap-2 justify-center">
              <Icon name="buy" size="medium" />
              <h6 className="font-bold text-caption text-white sm:text-h6">
                Mã Giảm Giá Của Shop
              </h6>
              <p className="font-bold text-notification text-white sm:text-body2 sm:font-normal">
                Công cụ tăng đơn hàng bằng cách tạo mã giảm giá tặng cho người
                mua
              </p>
            </div>
            <div className="w-[250px] h-[135px] sm:h-[182px] sm:w-[260px] rounded-md bg-[#F5A851] p-4 mx-auto flex flex-col gap-2 justify-center">
              <Icon name="ticket" size="medium" />
              <h6 className="font-bold text-caption text-white sm:text-h6">
                Gói Freeship
              </h6>
              <p className="font-bold text-notification text-white sm:text-body2 sm:font-normal">
                Tạo Combo Khuyến Mãi để tăng giá trị đơn hàng trên mỗi Người mua
              </p>
            </div>
            <div className="w-[250px] h-[135px] sm:h-[182px] sm:w-[260px] rounded-md bg-[#77CFBB] p-4 mx-auto flex flex-col gap-2 justify-center">
              <Icon name="discount" size="medium" />
              <h6 className="font-bold text-caption text-white sm:text-h6">
                Flash sale của Shop
              </h6>
              <p className="font-bold text-notification text-white sm:text-body2 sm:font-normal">
                Công cụ giúp tăng doanh số bằng cách tạo khuyến mãi trong khung
                giờ nhất định
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Management;
