/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from '../../components/button';
import Icon from '../../components/icon';
import image1 from '../../assets/image/spa/10.png';
import image2 from '../../assets/image/spa/11.png';
import { Section2Contents } from './contants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Footer from 'components/footer/Footer';
function HomePage() {
  const [activeContent, setActiceContent] = useState(0);
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <div className="sm:max-w-[1441px] mx-auto px-4 sm:px-0">
      <Header />
      <section className="flex flex-col sm:flex-row sm:justify-between mt-20">
        <div className="sm:w-[688px]">
          <p className="text-[12px] text-light-accent-2-color-70 uppercase font-bold text-center mb-5 sm:text-xl sm:text-left">
            Spana - hệ thống quản lí spa
          </p>
          <p className="text-[40px] font-bold text-center sm:text-left sm:text-[80px]">
            Giải pháp{' '}
            <span className="text-light-text-link-color-purple">
              quản lý hệ thống và khách hàng
            </span>{' '}
            với Spana
          </p>
          <p className="text-[20px] mt-7 text-center sm:text-left">
            Giải pháp nền tảng kinh doanh ngành làm đẹp myspa cung cấp website
            và app để đăng tải sản phẩm dịch vụ cho spa, thẩm mỹ viện, salon,
            clinic
          </p>
          <Button
            state="primary"
            size="large"
            className="my-7 hidden sm:block"
            onClick={goSignUp}
          >
            Đăng kí ngay
          </Button>
        </div>
        <img id="img-1" src={image1} alt="image-1" className="my-4" />

        <Button
          state="primary"
          size="large"
          className="my-7 sm:hidden mx-auto"
          onClick={goSignUp}
        >
          Đăng kí ngay
        </Button>
      </section>

      <section className="flex flex-col sm:flex-row">
        <div className="sm:w-[55%]">
          <p className="bold text-[20px] text-center mt-10 sm:text-h4">
            Nền tảng kinh doanh ngành làm đẹp cho spa, thẩm mỹ viện, salon,
            clinic/đồng bộ và quản lý vận hành tại một nơi
          </p>

          <img src={image2} alt="section-2" className="sm:hidden" />
          <div className="flex flex-col  divide-y gap-5 mb-10">
            {Section2Contents.map((content, index) => (
              <div
                key={index}
                className="c-pointer "
                onClick={() =>
                  setActiceContent(index === activeContent ? -1 : index)
                }
              >
                <div className="text-center sm:flex-row sm:flex sm:text-h4 items-center justify-between text-base font-bold mt-4">
                  <h4
                    className={
                      activeContent === index
                        ? 'text-light-primary-color-50'
                        : ''
                    }
                  >
                    {content.title}
                  </h4>
                  <Icon
                    name={activeContent === index ? 'arrow-up' : 'arrow-down'}
                    className="hidden sm:block"
                  />
                </div>
              </div>
            ))}
          </div>
          <h6 className="text-center mb-4 sm:max-w-[600px]">
            {Section2Contents[activeContent]?.content}
          </h6>
          <div className="text-center flex flex-col space-y-6 sm:max-w-[600px] sm:grid sm:grid-cols-2 sm:text-left sm:space-y-0 sm:gap-8">
            {Section2Contents[activeContent]?.subcontent.map(
              (content, index) => (
                <div key={index}>
                  <div className="h-1 bg-light-primary-color-50 w-10 mx-auto sm:m-0"></div>
                  {content}
                </div>
              )
            )}
          </div>
        </div>
        <div className="sm:mt-[-60px]">
          <img src={image2} alt="section-2" className="hidden sm:block" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
