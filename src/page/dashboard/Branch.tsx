import classNames from 'classnames';
import Icon from 'components/icon';
import Input from 'components/input';
import { Formik } from 'formik';
import moment from 'moment';
import React, { ChangeEvent, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import supabase, { createEmployee, createUser, upload } from 'supebase';
import { formatNumber } from 'utils';
import FaceImage from '../../assets/image/face.png';
// import 'react-big-calendar/lib/sass/styles';
import Image from '../../assets/image/spa/1.jpg';
import Button from '../../components/button/';
import { historyList } from './Analytics';

const localizer = momentLocalizer(moment);

const tabs = [
  'Tất cả(9)',
  'Ca sáng(3)',
  'Ca chiều(9)',
  'Ca tối(2)',
  'Full time(2)',
];

const scheduleWorkList = [
  {
    ca: 'Ca Sáng',
    work: 'Dọn bàn, quét,...',
    id: 'Mã buổi: B01',
    date: '16/05/2022 - 20/05/2022',
    hour: '08:00 - 12:00',
    salary: 13000,
  },
  {
    ca: 'Ca Chiều',
    work: 'Dọn bàn, quét,...',
    id: 'Mã buổi: B02',
    date: '16/05/2022 - 20/05/2022',
    hour: '13:00 - 18:00',
    salary: 13000,
  },
  {
    ca: 'Ca Tối',
    work: 'Dọn bàn, quét,...',
    id: 'Mã buổi: B03',
    date: '16/05/2022 - 20/05/2022',
    hour: '18:00 - 23:00',
    salary: 15000,
  },
  {
    ca: 'Cả Ngày',
    work: 'Dọn bàn, quét,...',
    id: 'Mã buổi: B03',
    date: '16/05/2022 - 20/05/2022',
    hour: '8:00 - 22:00',
    salary: 22000,
  },
];

const Branch = () => {
  const fakeData = Array.from(Array(6).keys());
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeSubTab, setActiveSubTab] = useState<number>(0);
  const [activeTabHistory, setActiveTabHistory] = useState<number>(1);
  const [preview, setPreview] = useState<string>('');
  const [link, setLink] = useState<string>();
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChangeFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const response = await upload('employee-avatar', URL.createObjectURL(file))
      console.log(response);
      setLink(response.data?.Key)
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

  const handleSubmit = async (values: any) => {
    console.log('hanđle submit');
    const employee = {
      salon_id: 1,
      display_name: values.username,
      fullname: values.fullname,
      email: values.email,
      phonenumber: values.phoneNumber,
      avatar: link
    }

    const user = {
      email: values.email,
      phonenumber: values.phoneNumber,
      username: values.username,
      role: "Employee"
    }
    const employ = await createEmployee(employee)
    console.log(employ);
    
    const u = await createUser(user)
    console.log(u);
    setActiveTab(0)
   };
  const handleValidate = (values: any) => { };

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
      <h5 className="text-h5 font-bold mb-6">Quản lí nhân sự</h5>
      <div className="flex justify-between mb-10">
        <h4 className="text-h4 font-bold">35 Võ Văn Ngân - Thủ Đức</h4>
        <div className="flex mr-8 gap-6">
          <button
            className="btn-primary-mobile-large w-[200px]"
            onClick={() => setActiveTab(1)}
          >
            Thêm nhân viên +
          </button>
          <Icon name="menu1" onClick={() => setActiveTab(2)} />
          <Icon name="menu2" onClick={() => setActiveTab(3)} />
          <Icon name="menu3" onClick={() => setActiveTab(4)} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {fakeData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center border-[1px] rounded-md bg-white p-4 relative"
          >
            <div className="">
              <img
                src={Image}
                alt=""
                className="w-[96px] h-[96px] rounded-full"
              />
            </div>
            <h5 className="text-h5 font-bold">Phan Thị Thanh Như</h5>
            <h6 className="text-h6 text-light-text-color-body-1">Quản lý</h6>
            <button
              className="btn-secondary-mobile-large"
              onClick={() => setShowSchedule(true)}
            >
              Xem thêm
            </button>
            <Icon name="three-dots" className="absolute right-4 top-4" />
          </div>
        ))}
      </div>
    </>
  );



  const addEmployee = () => (
    <div className="">
      <h4 className="font-bold text-h4 mb-6">Thêm nhân viên mới</h4>
      <div className="">
        <h5 className="text-h5 mb-4">Avatar</h5>
        <div className="flex gap-6 items-center my-10">
          <div className="">
            {preview ? (
              <img
                src={preview}
                alt="preview"
                object-fit="cover"
                className="w-16 h-16 rounded-full"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-fill-image-placeholder-color"></div>
            )}
          </div>

          <div className="flex gap-6">
            <label
              htmlFor="upload-photo"
              className="btn-primary-mobile-large w-[100px] h-[40px] text-center font-bold cursor-pointer"
            >
              Upload
            </label>
            <p
              className="btn-secondary-mobile-large w-[100px] h-[40px] text-center cursor-pointer"
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
              className=""
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-light-primary-separator-color"></div>

      <div className="mt-10">
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
              <div className="grid grid-cols-2 gap-10">
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

              <div className="w-full h-[2px] bg-light-primary-separator-color my-10"></div>
              <div className="flex flex-col gap-6 w-1/2">
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

              <Button state="primary" className="mt-10">
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

  const showScheduleComponent = () => (
    <div className="ShowSchedule">
      <h5 className="bold mb-8">Chọn ca làm việc</h5>

      <div className="Body">
        <div className="Left">
          <div className="HeaderTab">
            <div className="Tabs">
              {tabs.map((tab, index) => (
                <h6
                  key={index}
                  className={classNames('c-pointer', {
                    bold: activeSubTab === index,
                  })}
                  onClick={() => setActiveSubTab(index)}
                >
                  {tab}
                </h6>
              ))}
            </div>

            <div className="Icons">
              <Icon name="search" />
              <Icon name="filter" />
            </div>
          </div>

          <div className="Content">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Ca làm việc</th>
                  <th>Thời gian</th>
                  <th>Lương (nghìn đồng/giờ)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {scheduleWorkList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>
                      <div className="Name">
                        <p className="headline bold">{item.ca} </p>
                        <p className="caption">{item.work}</p>
                        <p className="caption">{item.id}</p>
                      </div>
                    </td>
                    <td>
                      <div className="Time">
                        <p className="body2">Ngày làm việc:</p>
                        <p className="body2"> {item.date}</p>
                        <p className="body2">Giờ làm việc:</p>
                        <p className="body2">{item.hour}</p>
                      </div>
                    </td>
                    <td className="headline bold">
                      {formatNumber(item.salary)}đ
                    </td>
                    <td>
                      <Icon name="three-dots" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="Right">
          <div className="Title">
            <h6 className="bold">Lịch ca làm</h6>
            <h6>Tháng 5</h6>
          </div>

          <div className="Calendar">
            <table>
              <thead>
                <tr>
                  <th className="body2">Thứ 2</th>
                  <th className="body2">Thứ 3</th>
                  <th className="body2">Thứ 4</th>
                  <th className="body2">Thứ 5</th>
                  <th className="body2">Thứ 6</th>
                  <th className="body2">Thứ 7</th>
                  <th className="body2">CN</th>
                </tr>
              </thead>
              <tbody>
                {scheduleWorkList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                    <td>
                      <div></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-10 bg-light-secondary-system-color w-full">
      {activeTab === 0 && !showSchedule && branch()}
      {activeTab === 1 && !showSchedule && addEmployee()}
      {activeTab === 2 && !showSchedule && schedule()}
      {activeTab === 3 && !showSchedule && historyEmployee()}
      {activeTab === 4 && !showSchedule && attendance()}
      {showSchedule && showScheduleComponent()}
    </div>
  );
};

export default Branch;
