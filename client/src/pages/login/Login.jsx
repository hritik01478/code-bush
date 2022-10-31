import './login.scss'
import CodeBush from "../../images/CodeBush.png"
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import LoginImg from '../../images/login.png'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/")
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

    return (
        <div className='login'>
            <div className="top">
                <img
                    className="logo"
                    src={CodeBush}
                    alt=""
                />
            </div>
            <div className="container">
                <div className="bottom">
                    <form>
                        <h1>Sign In</h1>
                        <input type="text" placeholder="Username" onChange={(e) => handleChange(e)} id="username" />
                        <input type="password" id="password" placeholder="Password" onChange={(e) => handleChange(e)} />
                        <button className="loginButton" onClick={handleClick} disabled={loading}>Sign In</button>
                        <Link to="/register" style={{ textDecoration: "inherit" }}>
                            <span>
                                New to CodeBush? <b>Sign up now.</b>
                            </span>
                        </Link>

                    </form>
                </div>
                <div className="work">
                    <img src={LoginImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;