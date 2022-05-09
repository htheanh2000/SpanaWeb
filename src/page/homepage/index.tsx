/* eslint-disable jsx-a11y/img-redundant-alt */
import Button from '../../components/button';
import Icon from '../../components/icon';
import './homepage.scss';
import image1 from '../../assets/image/spa/8.png';
import image2 from '../../assets/image/spa/9.png';
import section2 from '../../assets/image/homepage-section-2.png';
import { Section2Contents } from './contants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
function HomePage() {
  const [activeContent, setActiceContent] = useState(0);
  const navigate = useNavigate();
  const goSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <div className="container homepage">
      <Header />
      <section id="section-1" className="p-relative flex align-center mt-10">
        <div className="max-w-600">
          <p className="display semibold homepage__title">
            Giải pháp <span className="">quản lý hệ thống và khách hàng</span>{' '}
            với Spana
          </p>
          <p className="title mt-7">
            Giải pháp nền tảng kinh doanh ngành làm đẹp myspa cung cấp website
            và app để đăng tải sản phẩm dịch vụ cho spa, thẩm mỹ viện, salon,
            clinic
          </p>
          <div>
            <Button
              state="primary"
              size="large"
              className="mt-7"
              onClick={goSignUp}
            >
              Đăng kí ngay
            </Button>
          </div>
        </div>
        <div className="right-view">
          <img
            className="p-absolute"
            id="img-1"
            src={image1}
            alt="image-1"
          ></img>
          <img
            className="p-absolute"
            id="img-2"
            src={image2}
            alt="image-2"
          ></img>
        </div>
      </section>

      <section id="section-2" className="mt-15 mb-15">
        <div className="left">
          <h3 className="text-center mb-10" id="title">
            Nền tảng kinh doanh ngành làm đẹp cho spa, thẩm mỹ viện, salon,
            clinic/đồng bộ và quản lý vận hành tại một nơi
          </h3>
          {Section2Contents.map((content, index) => (
            <div
              key={index}
              className="mb-7 max-w-600 c-pointer"
              onClick={() =>
                setActiceContent(index === activeContent ? -1 : index)
              }
            >
              <div className="flex align-center jc-between mb-7">
                <h4 className={activeContent === index ? 'active' : ''}>
                  {content.title}
                </h4>
                <Icon
                  name={activeContent === index ? 'arrow-up' : 'arrow-down'}
                ></Icon>
              </div>
              <div className="divider" />
            </div>
          ))}
          <h6 className="max-w-600 normal">
            {Section2Contents[activeContent]?.content}
          </h6>
          <div className="subcontent max-w-800 mt-5">
            {Section2Contents[activeContent]?.subcontent.map(
              (content, index) => (
                <div key={index} className="max-w-300">
                  <div className="divider divider--short mt-6 mb-3" />
                  <h6 className="">{content}</h6>
                </div>
              )
            )}
          </div>
        </div>
        <div className="right">
          <img src={section2} alt="section-2" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
