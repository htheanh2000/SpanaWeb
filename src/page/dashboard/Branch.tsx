import Icon from 'components/icon';
import Input from 'components/input';
import { Formik } from 'formik';
import moment from 'moment';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/sass/styles';
import Image from '../../assets/image/spa/1.jpg';
import FaceImage from '../../assets/image/face.png';
import Button from '../../components/button/';
import { historyList } from './Analytics';

const localizer = momentLocalizer(moment);

const Branch = () => {
  const fakeData = Array.from(Array(6).keys());
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTabHistory, setActiveTabHistory] = useState<number>(1);
  const [preview, setPreview] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      setPreview(URL.createObjectURL(file));
    }
  };

  const eventStyleGetter = (event: any) => {
    var backgroundColor = event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block',
    };
    return {
      style: style,
    };
  };

  const handleSubmit = (values: any) => {};
  const handleValidate = (values: any) => {};

  const handleCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 256, height: 256 } })
      .then((stream) => {
        let video: any = videoRef.current;
        if (video !== null) {
          video.srcObject = stream;
          video.play();
        }
      });
  };

  const branch = () => (
    <>
      <h5 className="bold mb-6">Chi nhánh 1</h5>
      <div className="Heading">
        <h4 className="bold">35 Võ Văn Ngân - Thủ Đức</h4>
        <div className="Right mr-8">
          <Button state="primary" onClick={() => setActiveTab(1)}>
            Thêm nhân viên +
          </Button>
          <Icon name="menu1" onClick={() => setActiveTab(2)} />
          <Icon name="menu2" onClick={() => setActiveTab(3)} />
          <Icon name="menu3" onClick={() => setActiveTab(4)} />
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

  const schedule = () => (
    <div className="Schedule">
      <h5 className="bold mb-6">Quản lý nhân sự </h5>
      <div className="Heading">
        <h4 className="bold">35 Võ Văn Ngân - Thủ Đức</h4>
        <div className="Right mr-8">
          <Button state="primary" onClick={() => setActiveTab(1)}>
            Thêm nhân viên +
          </Button>
          <Icon name="menu1" onClick={() => setActiveTab(2)} />
          <Icon name="menu2" onClick={() => setActiveTab(3)} />
          <Icon name="menu3" onClick={() => setActiveTab(4)} />
        </div>
      </div>

      <div className="Calendar">
        <Calendar
          eventPropGetter={eventStyleGetter}
          localizer={localizer}
          events={[
            {
              id: 0,
              title: 'User Interview with Adi',
              start: new Date(2022, 4, 13, 6),
              end: new Date(2022, 4, 13, 18),
              hexColor: '#f04461',
            },
            {
              id: 2,
              title: 'Deadline Dashboard',
              start: new Date(2022, 4, 14, 6),
              end: new Date(2022, 4, 17, 17),
              hexColor: '#41DA7E',
            },
          ]}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />

        <div className="Right">
          <div className="Tag">
            <h6 className="bold">Schedule Tag</h6>
            <p className="body2 semibold">Add new</p>
          </div>
          <div className="Items">
            <div className="Item">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h6 className="bold">UX Researcher</h6>
              </div>
              <div>
                <div className="Color"></div>
                <Icon name="three-dots" />
              </div>
            </div>
            <div className="Item">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h6 className="bold">UI Designer</h6>
              </div>
              <div>
                <div className="Color"></div>
                <Icon name="three-dots" />
              </div>
            </div>
            <div className="Item">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h6 className="bold">Marketing</h6>
              </div>
              <div>
                <div className="Color"></div>
                <Icon name="three-dots" />
              </div>
            </div>
            <div className="Item">
              <div>
                <input type="checkbox" name="" id="" checked />
                <h6 className="bold">Developer</h6>
              </div>
              <div>
                <div className="Color"></div>
                <Icon name="three-dots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const historyEmployee = () => (
    <div className="History">
      <h5 className="bold mb-6">Chi nhánh 1</h5>
      <div className="Heading">
        <h4 className="bold">35 Võ Văn Ngân - Thủ Đức</h4>
        <div className="Right mr-8">
          <Button state="primary" onClick={() => setActiveTab(1)}>
            Thêm nhân viên +
          </Button>
          <Icon name="menu1" onClick={() => setActiveTab(2)} />
          <Icon name="menu2" onClick={() => setActiveTab(3)} />
          <Icon name="menu3" onClick={() => setActiveTab(4)} />
        </div>
      </div>

      <div className="List">
        {fakeData.map((data, index) => (
          <div className="Item" onClick={() => setActiveTabHistory(index)}>
            <div className="Time">
              <h6 className="bold">14 tháng 2</h6>
              <p>&#x25cf;</p>
              <h6>01.00 - 02.00 PM </h6>
            </div>
            <div
              className={`Info ${activeTabHistory === index ? 'Active' : ''}`}
            >
              <div className="Name">
                <img src={Image} alt="" />
                <div>
                  <p className="headline bold">Dr. Johnny Hutabarat</p>
                  <p className="body2">Dr. Johnny Hutabarat</p>
                </div>
              </div>

              <div className="Title">
                <Icon name="calendar" />
                <h6>Electrocardiogram Test</h6>
              </div>

              <p className="menu1 bold">View Details</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const attendance = () => (
    <div className="Attendance">
      <h5 className="bold mb-8">Điểm danh</h5>
      <div className="Type">
        <div className="Id">
          <h4 className="bold">Điểm danh bằng ID</h4>
          <p className="body1">
            Nhập tên tài khoản bạn đã sử dụng khi tham gia và chúng tôi sẽ gửi
            cho bạn hướng dẫn để điểm danh. Vì lý do bảo mật, chúng tôi KHÔNG
            lưu trữ dữ liệu của bạn. <br />
            <br /> Vì vậy, hãy yên tâm rằng chúng tôi sẽ không bao giờ gửi dữ
            liệu của bạn qua bên thứ ba.
          </p>
          <Input
            label="Tên tài khoản"
            size="medium"
            placeholder="Nhập ID của bạn tại đây"
          />
        </div>

        <div className="Face" onClick={handleCamera}>
          <h4 className="bold">Điểm danh bằng khuôn mặt</h4>
          <div className="FaceId">
            <video ref={videoRef}></video>
            <img src={FaceImage} alt="" />
            <h6 className="bold">Nhận diện tại đây</h6>
            <h6 className="bold">ID: NV001</h6>
          </div>
        </div>
      </div>

      <Button state="primary">Điểm danh</Button>

      <h4 className="bold mt-6 mb-6">Thông tin của nhân viên</h4>

      <div className="Detail">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên nhân viên</th>
              <th>Giờ điểm danh</th>
              <th>Ngày điểm danh</th>
              <th>Chi tiết</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {historyList.map((history, index) => (
              <tr key={index}>
                <td>{history.id}</td>
                <td>
                  <div className="Name">
                    <img src={Image} alt="" />
                    {history.name}
                  </div>
                </td>
                <td>{history.quantity}</td>
                <td>{history.date}</td>
                <td>{history.name}</td>
                <td>
                  <Icon name="three-dots" />
                  <span className="Divider"></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="Branch">
      {activeTab === 0 && branch()}
      {activeTab === 1 && addEmployee()}
      {activeTab === 2 && schedule()}
      {activeTab === 3 && historyEmployee()}
      {activeTab === 4 && attendance()}
    </div>
  );
};

export default Branch;
