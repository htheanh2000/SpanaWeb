import Icon from 'components/icon';
import Input from 'components/input';
import { Formik } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import Image from '../../assets/image/spa/1.jpg';
import Button from '../../components/button/';

const Branch = () => {
  const fakeData = Array.from(Array(6).keys());
  const [employee, setEmployee] = useState<boolean>(false);
  const [preview, setPreview] = useState<string>('');

  const handleChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (values: any) => {};
  const handleValidate = (values: any) => {};

  const branch = () => (
    <>
      <h5 className="bold mb-6">Chi nhánh 1</h5>
      <div className="Heading">
        <h4 className="bold">35 Võ Văn Ngân - Thủ Đức</h4>
        <div className="Right mr-8">
          <Button state="primary" onClick={() => setEmployee(true)}>
            Thêm nhân viên +
          </Button>
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
    </>
  );

  const addEmployee = () => (
    <div className="Employee">
      <h4 className="bold">Thêm nhân viên mới</h4>
      <div className="Avatar">
        <h5 className="mb-4">Avatar</h5>
        <div className="Upload">
          <div className="Image">
            {preview ? (
              <img src={preview} alt="preview" object-fit="cover" />
            ) : (
              <div className="Preview"></div>
            )}
          </div>

          <div>
            <label htmlFor="upload-photo" className="c-pointer bold Up">
              Upload
            </label>
            <p
              className="menu1 bold c-pointer Remove"
              onClick={() => setPreview('')}
            >
              Remove
            </p>
            <input
              type="file"
              id="upload-photo"
              style={{ display: 'none' }}
              onChange={handleChangeFileInput}
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="Divider"></div>

      <div className="Form">
        <Formik
          initialValues={{
            username: '',
            fullName: '',
            phoneNumber: '',
            email: '',
            account: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={handleSubmit}
          validate={handleValidate}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
          }) => (
            <form action="" onSubmit={handleSubmit}>
              <div className="Top">
                <div>
                  <Input
                    className="mb-2"
                    label="Tên hiển thị"
                    placeholder="Nhập tên của bạn"
                    size="large"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div>
                  <Input
                    className="mb-2"
                    label="Full name"
                    placeholder="Nhập tên của bạn"
                    size="large"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div>
                  <Input
                    className="mb-2"
                    label="Email"
                    placeholder="Nhập email của bạn"
                    size="large"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div>
                  <Input
                    className="mb-2"
                    label="Phone Number"
                    placeholder="Nhập sđt của bạn"
                    size="large"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
              </div>

              <div className="Divider"></div>
              <div className="Bot">
                <div>
                  <Input
                    className="mb-2"
                    label="Tài khoản"
                    placeholder="Nhập account của bạn"
                    size="large"
                    name="account"
                    value={values.account}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div>
                  <Input
                    className="mb-2"
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu của bạn"
                    size="large"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
                <div>
                  <Input
                    className="mb-2"
                    label="Nhập lại mật khẩu"
                    placeholder="Nhập lại mật khẩu của bạn"
                    size="large"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.username && touched.username && errors.username}
                  </span>
                </div>
              </div>
              <div className="Divider"></div>

              <Button state="primary" className="mt-8">
                Tạo nhân viên
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );

  return <div className="Branch">{employee ? addEmployee() : branch()}</div>;
};

export default Branch;
