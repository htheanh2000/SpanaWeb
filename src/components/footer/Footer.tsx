import logo from '../../assets/image/spa/logo.png';
import insta from '../../assets/image//icon/Social/insta.png';
import Icon from 'components/icon';

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} mt-20`}>
      <div className="grid grid-rows-[7] grid-flow-row sm:grid-cols-5 space-y-6 sm:space-y-0 text-center mx-auto sm:max-w-[1200px]">
        <div className="">
          <div className="flex items-center justify-center">
            <img src={logo} alt="" />
            <h6 className="bold">Spana</h6>
          </div>
          <p className="text-light-text-color-body-2">
            Donec nisl consectetur condimentum faucibus sit scelerisque pretium
            nec ante.
          </p>
        </div>

        <div className="flex flex-col space-y-2  text-light-text-color-body-1">
          <p className="text-headline font-bold text-black">Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div className="flex flex-col space-y-2 text-light-text-color-body-1">
          <p className="text-headline font-bold text-black">Contact</p>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affiliates</p>
        </div>
        <div className="flex flex-col space-y-2 text-light-text-color-body-1">
          <p className="text-headline font-bold text-black">More</p>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex">
            <Icon name="facebook" />
            <img src={insta} alt="" />
            <Icon name="twitter" />
          </div>
          <p>Discover our app</p>

          <div className="flex space-x-4">
            <Icon name="googlePlay" />
            <Icon name="appStore" />
          </div>
        </div>
      </div>

      <p className="text-center py-6 pt-16">All rights reserved@spana.co</p>
    </div>
  );
};

export default Footer;
