import Button from 'components/button';
import Icon from 'components/icon';
import Image from '../../assets/image/spa/1.jpg';

const Branch = () => {
  const fakeData = Array.from(Array(6).keys());
  return (
    <div className="Branch">
      <h5 className="bold mb-6">Chi nhánh 1</h5>
      <div className="Heading">
        <h4 className="bold">35 Võ Văn Ngân - Thủ Đức</h4>
        <div className="Right mr-8">
          <Button state="primary">Thêm nhân viên +</Button>
          <Icon name="menu1" />
          <Icon name="menu2" />
          <Icon name="menu3" />
        </div>
      </div>

      <div className="Body">
        {fakeData.map((item, index) => (
          <div key={index} className="Item">
            <div className="Images">
              <img src={Image} alt="" className="Image" />
            </div>
            <h5 className="bold">Phan Thị Thanh Như</h5>
            <h6>Quản lý</h6>
            <Button state="ghost">Xem thêm</Button>
            <Icon name="three-dots" className="Dots" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branch;
