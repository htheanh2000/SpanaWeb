import classNames from 'classnames';
import Header from 'components/header';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgRegistration from '../../assets/image/registration.png';
import Button from '../../components/button';
import Input from '../../components/input';

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
    setStepper(2);
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
      <div className="flex items-center my-10 sm:mt-32 max-w-[350px]">
        <div className="relative  flex items-center justify-center">
          <input
            type="radio"
            name="stepper1"
            checked={true}
            value={stepper}
            className="w-5 h-5 checked:bg-red-500"
            readOnly
          />
          <div className="absolute border-[3px] border-light-primary-color-50 w-5 h-5 rounded-full top-0"></div>
          {/* <div className="w-[10px] h-[10px] absolute bg-light-primary-color-50 top-[5px] left-[5px] rounded-full"></div> */}
        </div>

        <div className="w-full h-[3px]  bg-light-primary-color-10"></div>

        <div className="relative  flex items-center justify-center">
          <input
            type="radio"
            name="stepper2"
            checked={activeStep >= 2}
            className="w-5 h-5"
            readOnly
            value={stepper}
          />
          <div className="absolute border-[3px] border-light-primary-color-50 w-5 h-5 rounded-full top-0"></div>
          {/* <div className="w-[10px] h-[10px] absolute bg-light-primary-color-50 top-[5px] left-[5px] rounded-full"></div> */}
        </div>

        <div className="w-full h-[3px]  bg-light-primary-color-10"></div>

        <div className="relative  flex items-center justify-center">
          <input
            type="radio"
            name="stepper3"
            checked={activeStep >= 3}
            className="w-5 h-5"
            readOnly
            value={stepper}
          />
          <div className="absolute border-[3px] border-light-primary-color-50 w-5 h-5 rounded-full top-0"></div>
          {/* <div className="w-[10px] h-[10px] absolute bg-light-primary-color-50 top-[5px] left-[5px] rounded-full"></div> */}
        </div>

        <div className="w-full h-[3px]  bg-light-primary-color-10"></div>

        <div className="relative  flex items-center justify-center">
          <input
            type="radio"
            name="stepper4"
            checked={activeStep === 4}
            className="w-5 h-5"
            readOnly
            value={stepper}
          />
          <div className="absolute border-[3px] border-light-primary-color-50 w-5 h-5 rounded-full top-0"></div>
          {/* <div className="w-[10px] h-[10px] absolute bg-light-primary-color-50 top-[5px] left-[5px] rounded-full"></div> */}
        </div>
      </div>
    );
  };
  const leftRegistration = () => (
    <div className="mt-10 sm:mt-0 sm:pt-20 sm:w-[40%] sm:bg-light-secondary-system-color">
      <div className="sm:px-24">
        <p className="text-[12px] uppercase text-light-text-color-body-1 sm:text-base">
          Spana
        </p>
        <h3 className="text-[24px] bold sm:text-h3">
          Quản lý salon của bạn theo cách đơn giản nhất
        </h3>
      </div>

      <img
        className="w-[300px] h-[326px] mx-auto sm:w-[417px] sm:h-[450px]"
        src={imgRegistration}
        alt="imgRegistration"
      />
    </div>
  );
  const rightRegistration1 = () => (
    <>
      <h4 className="bold text-base sm:text-h4">
        Hãy cho mình biết thêm thông tin nhé
      </h4>
      <p className="text-[12px] text-light-text-color-body-1 py-4 sm:text-body1">
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
        <div className="flex gap-2">
          <button
            className={classNames('btn-disabled-mobile', {
              'border-light-primary-color-50 text-light-primary-color-50':
                salonNumber === 1,
            })}
            onClick={() => setSalonNumber(1)}
          >
            1-10
          </button>

          <button
            className={classNames('btn-disabled-mobile', {
              'border-light-primary-color-50 text-light-primary-color-50':
                salonNumber === 2,
            })}
            onClick={() => setSalonNumber(2)}
          >
            10-20
          </button>
          <button
            className={classNames('btn-disabled-mobile', {
              'border-light-primary-color-50 text-light-primary-color-50':
                salonNumber === 3,
            })}
            onClick={() => setSalonNumber(3)}
          >
            20+
          </button>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-headline bold mb-4">Salon của bạn là loại nào ?</p>
        <div className="grid grid-cols-6 gap-2 sm:grid-cols-5">
          <button
            className={classNames(
              'btn-disabled-mobile col-span-2 sm:col-span-1',
              {
                'border-light-primary-color-50 text-light-primary-color-50':
                  salonKind === 1,
              }
            )}
            onClick={() => setSalonKind(1)}
          >
            Spa
          </button>

          <button
            className={classNames(
              'btn-disabled-mobile col-span-2 sm:col-span-1',
              {
                'border-light-primary-color-50 text-light-primary-color-50':
                  salonKind === 2,
              }
            )}
            onClick={() => setSalonKind(2)}
          >
            Salon Tóc
          </button>
          <button
            className={classNames(
              'btn-disabled-mobile col-span-2 sm:col-span-1',
              {
                'border-light-primary-color-50 text-light-primary-color-50':
                  salonKind === 3,
              }
            )}
            onClick={() => setSalonKind(3)}
          >
            Tiệm nail
          </button>
          <button
            className={classNames(
              'btn-disabled-mobile col-span-2 col-start-2 sm:col-span-1',
              {
                'border-light-primary-color-50 text-light-primary-color-50':
                  salonKind === 4,
              }
            )}
            onClick={() => setSalonKind(4)}
          >
            Massage
          </button>
          <button
            className={classNames(
              'btn-disabled-mobile col-span-2 sm:col-span-1 text-[14px]',
              {
                'border-light-primary-color-50 text-light-primary-color-50':
                  salonKind === 5,
              }
            )}
            onClick={() => setSalonKind(5)}
          >
            Salon Xăm
          </button>
        </div>
      </div>
      <button
        className="btn-primary-mobile-medium px-7 my-4"
        onClick={handleRegistration1}
      >
        Tiếp tục
      </button>
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
    <div className="text-center px-2 sm:flex sm:text-left">
      <Header className="sm:hidden" />
      {leftRegistration()}
      <div className="sm:px-20 flex-1">
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
