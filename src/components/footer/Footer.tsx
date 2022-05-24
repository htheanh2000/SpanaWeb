import './footer.scss';
import logo from '../../assets/image/spa/logo.png';
import insta from '../../assets/image//icon/Social/insta.png';
import Icon from 'components/icon';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Info">
        <div className="Spana">
          <div className="Title">
            <img src={logo} alt="" />
            <h6 className="bold">Spana</h6>
          </div>
          <p className="">
            Donec nisl consectetur condimentum faucibus sit scelerisque pretium
            nec ante.
          </p>
        </div>

        <div className="Company">
          <p>Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Mobile</p>
        </div>
        <div className="Contact">
          <p>Contact</p>
          <p>Help/FAQ</p>
          <p>Press</p>
          <p>Affiliates</p>
        </div>
        <div className="More">
          <p>More</p>
          <p>Airlinefees</p>
          <p>Airline</p>
          <p>Low fare tips</p>
        </div>

        <div className="Social">
          <div className="Media">
            <Icon name="facebook" />
            <img src={insta} alt="" />
            <Icon name="twitter" />
          </div>
          <p>Discover our app</p>

          <div className="AppMobile">
            <Icon name="googlePlay" />
            <Icon name="appStore" />
          </div>
        </div>
      </div>

      <p>All rights reserved@spana.co</p>
    </div>
  );
};

export default Footer;
