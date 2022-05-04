import './registration.scss';
import imgRegistration from '../../assets/image/registration.png';
import Input from '../../components/input';
import Button from '../../components/button';
import { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

interface Errors {
  [key: string]: string;
}

const Registration = () => {
  const [salonNumber, setSalonNumber] = useState<number>(1);
  const [salonKind, setSalonKind] = useState<number>(1);
  const [stepper, setStepper] = useState<number>(1);
  const [salonName, setSalonName] = useState<string>('');
  const [salonSlogan, setSalonSlogan] = useState<string>('');
  const [preview, setPreview] = useState<string>('');
  const [checkbox, setCheckbox] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const handleRegistration1 = () => {
    if (!salonName) {
      errors.salonName = 'Vui lòng nhập tên Salon';
    }
    if (!salonSlogan) {
      errors.salonSlogan = 'Vui lòng nhập slogan Salon';
    }
    if (Object.keys(errors).length === 0) {
      return;
    } else {
      setStepper(2);
    }
  };

  const handleChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const temp = [...checkbox];
    console.log(checked);
    if (checked) {
      temp.push(name);
    } else {
      temp.splice(temp.indexOf(name), 1);
    }

    setCheckbox(temp);
  };
  const Stepper = (activeStep: number) => {
    return (
      <div className="stepper flex">
        <div className="containerStepper">
          <input
            type="radio"
            name="stepper1"
            checked={activeStep >= 1}
            value={stepper}
            className="mr-8"
            readOnly
          />
          <span className="checkmark"></span>
          <span className="circle"></span>
          <span className="divider"></span>
        </div>
        <div className="containerStepper">
          <input
            type="radio"
            name="stepper2"
            checked={activeStep >= 2}
            className="mr-8"
            readOnly
            value={stepper}
          />
          <span className="checkmark"></span>
          <span className="circle"></span>
          <span className="divider"></span>
        </div>
        <div className="containerStepper">
          <input
            type="radio"
            name="stepper3"
            checked={activeStep >= 3}
            className="mr-8"
            readOnly
            value={stepper}
          />
          <span className="checkmark"></span>
          <span className="circle"></span>
          <span className="divider"></span>
        </div>
        <div className="containerStepper">
          <input
            type="radio"
            name="stepper4"
            checked={activeStep === 4}
            className="mr-8"
            readOnly
            value={stepper}
          />
          <span className="checkmark"></span>
          <span className="circle"></span>
        </div>
      </div>
    );
  };
  const leftRegistration = () => (
    <div className="registration--left d-flex flex-column jc-evenly align-center">
      <div className="py-8">
        <p className="headline">Spana</p>
        <h3 className="h3 bold">
          Quản lý salon của bạn theo cách đơn giản nhất
        </h3>
      </div>

      <img className="icon" src={imgRegistration} alt="imgRegistration" />
    </div>
  );
  const rightRegistration1 = () => (
    <>
      <h4 className="bold mb-4">Hãy cho mình biết thêm thông tin nhé</h4>
      <p className="body1 mb-8">
        Việc gì khó, có Spana. Hãy để Spana trở thành quản gia cho salon của
        bạn.
      </p>
      <Input
        className="mb-6"
        label="Salon của bạn tên gì ?"
        placeholder="Nhập tên salon của bạn"
        size="medium"
        value={salonName}
        onChange={(e) => setSalonName(e.target.value)}
      />
      {errors.salonName && <p>{errors.salonName}</p>}
      <Input
        className="mb-6"
        label="Nhập slogan của Salon"
        placeholder="Nhập slogan của Salon"
        size="medium"
        value={salonSlogan}
        onChange={(e) => setSalonSlogan(e.target.value)}
      />
      <div className="mb-6">
        <p className="headline bold mb-4">Salon của bạn có bao nhiêu người ?</p>
        <div className="flex salonNumber">
          <Button
            size="medium"
            className={classNames('mr-8', { active: salonNumber === 1 })}
            state="secondary"
            onClick={() => setSalonNumber(1)}
          >
            1-10
          </Button>

          <Button
            size="medium"
            className={classNames('mr-8', { active: salonNumber === 2 })}
            state="secondary"
            onClick={() => setSalonNumber(2)}
          >
            10-20
          </Button>
          <Button
            size="medium"
            className={classNames('mr-8', { active: salonNumber === 3 })}
            state="secondary"
            onClick={() => setSalonNumber(3)}
          >
            20+
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <p className="headline bold mb-4">Salon của bạn là loại nào ?</p>
        <div className="flex salonType ">
          <Button
            size="medium"
            className={classNames('mr-8', { active: salonKind === 1 })}
            state="secondary"
            onClick={() => setSalonKind(1)}
          >
            Spa
          </Button>

          <Button
            size="medium"
            className={classNames('mr-8', { active: salonKind === 2 })}
            state="secondary"
            onClick={() => setSalonKind(2)}
          >
            Salon Tóc
          </Button>
          <Button
            size="medium"
            className={classNames('mr-8', { active: salonKind === 3 })}
            state="secondary"
            onClick={() => setSalonKind(3)}
          >
            Tiệm nail
          </Button>
          <Button
            size="medium"
            className={classNames('mr-8', { active: salonKind === 4 })}
            state="secondary"
            onClick={() => setSalonKind(4)}
          >
            Massage
          </Button>
          <Button
            size="medium"
            className={classNames('mr-8', { active: salonKind === 5 })}
            state="secondary"
            onClick={() => setSalonKind(5)}
          >
            Salon Xăm
          </Button>
        </div>
      </div>
      <Button
        size="medium"
        className="mr-8"
        state="primary"
        onClick={handleRegistration1}
      >
        Tiếp tục
      </Button>
    </>
  );
  const rightRegistration2 = () => (
    <>
      <h4 className="bold mb-4">Hoàn thiện thông tin salon</h4>
      <p className="body1 mb-8">
        Việc gì khó, có Spana. Hãy để Spana trở thành quản gia cho salon của
        bạn.
      </p>

      <div className="flex mb-6 align-center">
        <div className="photo mr-6">
          {preview ? (
            <img src={preview} alt="preview" object-fit="cover" />
          ) : (
            <div className="preview"></div>
          )}
        </div>
        <div>
          <p className="headline bold pb-6 mt-6">
            Chọn ảnh đại diện cho salon của bạn
          </p>
          <label htmlFor="upload-photo" className="c-pointer upload-photo">
            Chọn
          </label>
          <input
            type="file"
            id="upload-photo"
            style={{ display: 'none' }}
            onChange={handleChangeFileInput}
            accept="image/*"
          />
        </div>
      </div>

      <Input
        className="mb-6"
        label="Mô tả salon của bạn"
        placeholder="Mô tả thêm thông tin để chúng tôi có thể hỗ trợ nhiều hơn"
        size="medium"
      />
      <Input
        className="mb-6"
        label="Địa điểm salon"
        placeholder="Salon của bạn ở đâu ?"
        size="medium"
      />

      <Button
        size="medium"
        className="mr-8"
        state="primary"
        onClick={() => setStepper(3)}
      >
        Tiếp tục
      </Button>
    </>
  );
  const rightRegistration3 = () => (
    <>
      <h4 className="bold mb-4">Bạn muốn sử dụng Spana để làm gì ?</h4>
      <p className="body1 mb-8">Chúng tôi muốn hiểu rõ hơn về bạn</p>

      <div className="flex align-center mb-6 ">
        <input
          type="checkbox"
          id="employee"
          className="checkbox"
          name="employee"
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="employee" className=" body2 labelCheckbox c-pointer">
          Quản lý nhân viên
        </label>
      </div>
      <div className="flex align-center mb-6 ">
        <input
          type="checkbox"
          id="customer"
          className="checkbox"
          name="customer"
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="customer" className=" body2 labelCheckbox c-pointer">
          Chăm sóc khách hàng
        </label>
      </div>
      <div className="flex align-center mb-6 ">
        <input
          type="checkbox"
          id="department"
          className="checkbox"
          name="department"
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="department" className=" body2 labelCheckbox c-pointer">
          Quản lý đa chi nhánh
        </label>
      </div>

      <Input
        className="mb-6"
        label="Khác"
        placeholder="Nhập  nhu cầu khác của bạn."
        size="medium"
      />

      <Button
        size="medium"
        className="mr-8"
        state="primary"
        onClick={() => setStepper(4)}
      >
        Tiếp tục
      </Button>
    </>
  );
  const rightRegistration4 = () => (
    <>
      <h4 className="bold mb-4">Hoàn tất đăng ký</h4>
      <p className="body1 mb-8">Chào mừng bạn đến với Spana</p>

      <Button
        size="medium"
        className="mr-8"
        state="primary"
        onClick={() => navigate('/')}
      >
        Đến trang quản lý
      </Button>
    </>
  );
  return (
    <div className="registration d-flex">
      {leftRegistration()}
      <div className="registration--right px-8">
        {Stepper(stepper)}
        {stepper === 1 && rightRegistration1()}
        {stepper === 2 && rightRegistration2()}
        {stepper === 3 && rightRegistration3()}
        {stepper === 4 && rightRegistration4()}
      </div>
    </div>
  );
};
export default Registration;
