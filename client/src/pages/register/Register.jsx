
import './register.scss'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
import CodeBush from "../../images/CodeBush.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Register = () => {

    const [file, setFile] = useState("");
    const [info, setInfo] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))
        console.log(info)
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/hritik01478cloud/image/upload",
                data
            );

            const { url } = uploadRes.data;
            const newUser = {
                ...info,
                profilePic: url
            }
            // console.log(newUser);
            await axios.post("/auth/register", newUser);
            navigate("/login");
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={CodeBush}
                        alt=""
                    />
                    <button className="loginButton">
                        <Link to="/login" style={{ textDecoration: "inherit", color: "inherit" }} >
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                <label htmlFor='file' >Profile Pic: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                            </div>

                            <div className="formInput">
                                <label>Username</label>
                                <input type="text" placeholder="hritik01478" id="username" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Email</label>
                                <input type="email" placeholder="hritikkumar01478@gmail.com" id="email" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Password</label>
                                <input type="password" id="password" onChange={(e) => handleChange(e)} />
                            </div>
                            <div className="formInput">
                                <label>Phone No.</label>
                                <input type="text" placeholder="+91 7564970051" onChange={(e) => handleChange(e)} />
                            </div>

                            <button onClick={handleClick}>SEND</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register