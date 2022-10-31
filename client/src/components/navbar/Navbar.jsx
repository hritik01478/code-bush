import './navbar.scss'
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material'
import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/CodeBush.png";
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const { user } = useContext(AuthContext);
    // console.log(user)
    const { dispatch } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={Logo} alt="CodeBush" />
                    <Link to={user ? "/" : "/login"} style={{ textDecoration: "inherit", color: "inherit" }} >
                        <span>Home</span>
                    </Link>
                    <span>Feed</span>
                    <Link to={user ? "/List" : "/"} style={{ textDecoration: "inherit", color: "inherit" }} >
                        <span>ProblemSet</span>
                    </Link>
                    <span>Compete</span>
                    <Link to={"/calendar"} style={{ textDecoration: "inherit", color: "inherit" }} >
                        <span>Calender</span>
                    </Link>
                    <Link to={user ? "/typing" : "/"} style={{ textDecoration: "inherit", color: "inherit" }} >
                        <span>Typing</span>
                    </Link>
                </div>
                {user ? (<div className="right">
                    <div className="profile">
                        <span>{user.username}</span>
                        <div className="options">
                            <span>Profile</span>
                            <span>Settings</span>
                            <span onClick={handleLogout}>Log Out</span>
                        </div>
                    </div>
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                </div>) : (<div className="right">
                    <Link to="/login">
                        <button className='navBtn'>Login</button>
                    </Link>
                    <Link to="/register">
                        <button className='navBtn'>Register</button>
                    </Link>
                </div>)}
            </div>
        </div >
    )
}

export default Navbar