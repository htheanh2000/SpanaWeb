import Icon from 'components/icon';
import { SignInResponse } from 'models/response';
import { useNavigate } from 'react-router-dom';
import ava from '../../../../assets/image/spa/1.jpg';

const HeaderDashBoardDesktop = ({
  currentUser,
}: {
  currentUser: SignInResponse | undefined;
}) => {
  const navigate = useNavigate();
  return (
    <div className="hidden sm:flex justify-between items-center p-4 border-b-[1px] border-light-primary-separator-color">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-md bg-fill-image-placeholder-color"></div>
        <h5
          className="font-bold text-h5 c-pointer"
          onClick={() => navigate('/')}
        >
          Spana
        </h5>
      </div>

      <div className="flex items-center gap-4 mr-10">
        <Icon name="bell" size="medium" className="Bell" />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={ava} alt="" />
        </div>
        <div className="Info">
          <p className="bold">
            {currentUser?.email ? currentUser?.email : 'Thế Anh'}
          </p>
          <p className="body2">
            {currentUser?.roles ? currentUser?.roles : 'Thu Ngân'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashBoardDesktop;
