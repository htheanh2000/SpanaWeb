
import Button from '../../components/button';
import './homepage.scss'
import image1 from '../../assets/image/spa/8.png'
import image2 from '../../assets/image/spa/9.png'
function HomePage() {
  return (
    <div className="container homepage">
      <section className='p-relative flex align-center mt-10'>
        <div className='max-w-600'>
          <p className='display semibold homepage__title'>
            Giải pháp <span className=''>quản lý hệ thống và khách hàng</span> với Spana
          </p>
          <p className='title mt-7'>Giải pháp nền tảng kinh doanh ngành làm đẹp myspa cung cấp website và app để đăng tải sản phẩm dịch vụ cho spa, thẩm mỹ viện, salon, clinic</p>
          <div>
            <Button state='primary' size='large' className='mt-7'>Đăng kí ngay</Button>
          </div>
        </div>
        <div className='right-view'>
          <img className='p-absolute' id='img-1' src={image1} alt="image-1"></img>
          <img className='p-absolute' id='img-2' src={image2} alt="image-2"></img>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
