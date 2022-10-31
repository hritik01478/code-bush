import './header.scss';
import Back from '../../images/Capture.jpeg'

const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <img src={Back} alt="" />

            </div>
        </div>
    )
}

export default Header