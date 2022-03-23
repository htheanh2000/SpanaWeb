
import logo from '../../assets/image/logo.png'
function Header() {
    return (
        <div className='container-fluid'>
            <div className="flex">
                <img src={logo} alt="Spana" className='s-9'/>
                <p>Spana</p>
            </div>
        </div>

    );
}

export default Header;
