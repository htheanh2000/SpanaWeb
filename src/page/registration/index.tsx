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
          Qu???n l?? salon c???a b???n theo c??ch ????n gi???n nh???t
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
        H??y cho m??nh bi???t th??m th??ng tin nh??
      </h4>
      <p className="text-[12px] text-light-text-color-body-1 py-4 sm:text-body1">
        Vi???c g?? kh??, c?? Spana. H??y ????? Spana tr??? th??nh qu???n gia cho salon c???a
        b???n.
      </p>
      <Input
        className="mb-6"
        label="Salon c???a b???n t??n g?? ?"
        placeholder="Nh???p t??n salon c???a b???n"
        size="medium"
        value={salonName}
        onChange={(e) => setSalonName(e.target.value)}
      />
      {errors.salonName && <p>{errors.salonName}</p>}
      <Input
        className="mb-6"
        label="Nh???p slogan c???a Salon"
        placeholder="Nh???p slogan c???a Salon"
        size="medium"
        value={salonSlogan}
        onChange={(e) => setSalonSlogan(e.target.value)}
      />
      <div className="mb-6">
        <p className="headline bold mb-4">Salon c???a b???n c?? bao nhi??u ng?????i ?</p>
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
        <p className="text-headline bold mb-4">Salon c???a b???n l?? lo???i n??o ?</p>
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
            Salon T??c
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
            Ti???m nail
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
            Salon X??m
          </button>
        </div>
      </div>
      <button
        className="btn-primary-mobile-medium px-7 my-4"
        onClick={handleRegistration1}
      >
        Ti???p t???c
      </button>
    </>
  );
  const rightRegistration2 = () => (
    <>
      <h4 className="text-base font-bold mb-2 sm:text-h4">
        Ho??n thi???n th??ng tin salon
      </h4>
      <p className="text-[12px] font-bold sm:text-base sm:font-normal mb-4 text-light-text-color-body-1">
        Vi???c g?? kh??, c?? Spana. H??y ????? Spana tr??? th??nh qu???n gia cho salon c???a
        b???n.
      </p>

      <div className="flex gap-3 items-center py-4">
        <div className="w-[75px] h-[75px] sm:w-[104px] sm:h-[104px] mt-2">
          {preview ? (
            <img src={preview} alt="preview" object-fit="cover" />
          ) : (
            <div className="bg-fill-image-placeholder-color w-[75px] h-[75px] sm:w-[104px] sm:h-[104px] rounded-md"></div>
          )}
        </div>
        <div className="text-left">
          <p className="text-headline font-bold mb-2 sm:mb-8">
            Ch???n ???nh ?????i di???n cho salon c???a b???n
          </p>
          <label
            htmlFor="upload-photo"
            className="btn-primary-mobile-medium px-8"
          >
            Ch???n
          </label>
          <input
            type="file"
            id="upload-photo"
            className="hidden"
            onChange={handleChangeFileInput}
            accept="image/*"
          />
        </div>
      </div>

      <Input
        className="mb-6 mt-2"
        label="M?? t??? salon c???a b???n"
        placeholder="M?? t??? th??m th??ng tin ????? ch??ng t??i c?? th??? h??? tr??? nhi???u h??n"
        size="small"
      />
      <Input
        className="mb-6"
        label="?????a ??i???m salon"
        placeholder="Salon c???a b???n ??? ????u ?"
        size="small"
      />

      <button
        className="my-10 btn-primary-mobile-medium px-12"
        onClick={() => setStepper(3)}
      >
        Ti???p t???c
      </button>
    </>
  );
  const rightRegistration3 = () => (
    <>
      <h4 className="font-bold sm:text-h4 text-base mb-4 line-clamp-1">
        B???n mu???n s??? d???ng Spana ????? l??m g?? ?
      </h4>
      <p className="text-[12px] font-bold sm:text-base sm:font-normal text-light-text-color-body-1 mb-8">
        Ch??ng t??i mu???n hi???u r?? h??n v??? b???n
      </p>

      <label
        htmlFor="employee"
        className="text-[14px] text-light-text-color-body-2 flex items-center mb-6 gap-4 relative"
      >
        <input
          type="checkbox"
          id="employee"
          className="w-4 h-4 opacity-0 checked:opacity-100 transition duration-300 ease-in-out"
          name="employee"
          onChange={handleChangeCheckbox}
        />
        Qu???n l?? nh??n vi??n
        <span className="absolute w-4 h-4 border-[3px] rounded-sm border-light-primary-color-50"></span>
      </label>

      <label
        htmlFor="customer"
        className="text-[14px] text-light-text-color-body-2 flex items-center mb-6 gap-4 relative"
      >
        <input
          type="checkbox"
          id="customer"
          className="w-4 h-4 opacity-0 checked:opacity-100 transition duration-300 ease-in-out"
          name="customer"
          onChange={handleChangeCheckbox}
        />
        Ch??m s??c kh??ch h??ng
        <span className="absolute w-4 h-4 border-[3px] rounded-sm border-light-primary-color-50"></span>
      </label>
      <label
        htmlFor="manager"
        className="text-[14px] text-light-text-color-body-2 flex items-center mb-6 gap-4 relative"
      >
        <input
          type="checkbox"
          id="manager"
          className="w-4 h-4 opacity-0 checked:opacity-100 transition duration-300 ease-in-out"
          name="manager"
          onChange={handleChangeCheckbox}
        />
        Qu???n l?? ??a chi nh??nh
        <span className="absolute w-4 h-4 border-[3px] rounded-sm border-light-primary-color-50"></span>
      </label>

      <Input
        className="mb-6"
        label="Kh??c"
        placeholder="Nh???p  nhu c???u kh??c c???a b???n."
        size="medium"
      />

      <button
        className="btn-primary-mobile-medium px-12 my-10"
        onClick={() => setStepper(4)}
      >
        Ti???p t???c
      </button>
    </>
  );
  const rightRegistration4 = () => (
    <>
      <h4 className="font-bold sm:text-h4 text-base mb-4">Ho??n t???t ????ng k??</h4>
      <p className="text-[12px] font-bold sm:text-base sm:font-normal text-light-text-color-body-1 mb-8">
        Ch??o m???ng b???n ?????n v???i Spana
      </p>

      <button
        className="btn-primary-mobile-medium px-12 my-10"
        onClick={() => navigate('/')}
      >
        ?????n trang qu???n l??
      </button>
    </>
  );
  return (
    <div className="text-center px-4 sm:flex sm:text-left">
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
