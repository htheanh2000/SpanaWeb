
import logo from '../../assets/image/logo.png'
import './header.scss'
import { Link } from 'react-router-dom'
import Button from '../button'
function Header() {

    const links = [
        {
            name: 'Trang chủ',
            to: '/home'
        },
        {
            name: 'Giải pháp',
            to: '/solution'
        },
        {
            name: 'Bảng giá',
            to: '/price'
        },
        {
            name: 'Khách hàng',
            to: '/customer'
        },
    ]
    return (
        <div className='container'>
            <div className="header flex align-center jc-around">
                <div className='flex align-center'>
                    <img src={logo} alt="Spana" className='s-9 mr-3' />
                    <h5 className='text-bold mt-8'>Spana</h5>
                </div>


                {/* nav */}
                <div className='flex align-center'>
                    <div className='nav'>
                        <ul className='flex '>
                            {links.map(link => <Link className='mr-6 c-pointer link body1 semibold' to={link.to}>{link.name}</Link>)}
                        </ul>
                    </div>
                    <div className='flex ml-8'>
                        <Button state='ghost' className='mr-4'>Đăng kí</Button>
                        <Button state='primary'>Đăng nhập</Button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Header;
