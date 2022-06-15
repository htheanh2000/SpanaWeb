import classNames from 'classnames';
import Footer from 'components/footer/Footer';
import { useState } from 'react';

const Control = () => {
  const tabs = ['Tất cả', 'Sản phẩm mới', 'Hình ảnh', 'Mô tả', 'Văn kiện'];
  const [active, setActive] = useState<number>(0);
  const fakeArray = Array.from(Array(10).keys());
  return (
    <div className="mt-10 px-4 sm:w-full sm:pl-10 sm:pr-32">
      <div className="text-headline font-bold sm:text-h5">
        Bảng điều khiển{' '}
        <span className="text-caption font-normal sm:hidden">(80%)</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-full bg-gray-200 rounded-full h-[6px] dark:bg-gray-700 mt-4">
          <div className="bg-light-primary-color-50 h-[6px] rounded-full w-[80%]"></div>
        </div>
        <div className="sm:block hidden text-h5 translate-y-[6px]">80%</div>
      </div>

      <div className="flex  my-10 justify-between">
        <div className="flex overflow-x-auto whitespace-nowrap">
          {tabs.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2"
              onClick={() => setActive(index)}
            >
              <div
                className={classNames(
                  'text-menu2 sm:text-h6 font-bold text-light-text-color-body-1 cursor-pointer',
                  {
                    'text-black sm:text-light-primary-color-50':
                      active === index,
                  }
                )}
              >
                {value}
              </div>
              <div
                className={classNames('w-full h-[2px] px-16', {
                  'bg-light-primary-color-50': active === index,
                  'bg-light-primary-separator-color': active !== index,
                })}
              ></div>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex gap-6 text-light-text-color-body-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      <div className="sm:mb-20">
        <div className="text-headline font-bold mb-4 sm:text-h5">
          Tháng 04, 2022
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-4">
          {fakeArray.map((value, index) => (
            <div className="w-full h-[226px] bg-fill-image-placeholder-color rounded-md"></div>
          ))}
        </div>

        <div className="text-headline font-bold mb-4 mt-10 sm:text-h5">
          Tháng 03, 2022
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-4">
          {fakeArray.map((value, index) => (
            <div className="w-full h-[226px] bg-fill-image-placeholder-color rounded-md"></div>
          ))}
        </div>
      </div>

      <Footer className="sm:hidden" />
    </div>
  );
};

export default Control;
