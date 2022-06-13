
import { useState } from "react";
import NormalButton from "../components/atoms/NormalButton";
import TextInputField from "../components/atoms/TextInputField";
import { api_url, login_image, test_image } from "../consts/general.const";
import { _orange } from "../styles/_colors";
import axios from 'axios';
import { ROUTES } from "../consts/routes.const";
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const centerFlexDivStyle = {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const centerFlexColDivStyle = {
    ...centerFlexDivStyle,
    flexDirection: 'column',
}

export default function LoginPage(props) {

    const [ loginInfo, setLoginInfo ] = useState({ email: "", password: "" });
    const [ navigate, setNavigate ] = useState(null);

    if (navigate !== null) {
        return (
            <Navigate replace to={navigate} />
        );
    }

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{...centerFlexColDivStyle, height: '100%'}}>
                <p style={{
                    fontSize: '3.5vw',
                    fontWeight: 400,
                    color: _orange,
                    marginTop: '10%',
                    marginBottom: '0'
                }}>Foodhub</p>
                <div style={{ width: '75%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <h3 style={{ marginBottom: '0', fontSize: '1.2vw'}}>Login</h3>
                    {/* email */}
                    <p style={{fontSize: '1vw'}}>Email</p>
                    <TextInputField inputProps={{
                        style: { height: '1.5vw' }
                    }} size="small" sx={{ width: '65%' }} onChange={
                        element => { setLoginInfo({...loginInfo, email: element.target.value}) }
                    }/>
                    {/* password */}
                    <p style={{fontSize: '1vw'}}>Password</p>
                    <TextInputField inputProps={{
                        style: { height: '1.5vw' }
                    }} type="password" size="small" sx={{ width: '65%' }} onChange={
                        element => { setLoginInfo({...loginInfo, password: element.target.value}) }
                    }/>
                    <br></br>
                    <div style={{ ...centerFlexDivStyle, }}>
                    <p style={{ marginRight: '2%', fontSize: '0.9vw' }}>Not registed yet?</p>
                    <a className='pointer' style={{ fontSize: '0.9vw', color: _orange }} onClick={() => { setNavigate(ROUTES.SIGNUP); }} >Create an Account</a>
                    </div>
                    <br></br>
                    {/* submit button */}
                    <NormalButton text="LOG IN" sx={{ fontSize: '0.9vw', width: '65%', borderRadius: 10 }} onClick={
                        // send login request to the api
                        async () => {
                            try {
                                const res = await axios.post(api_url + 'auth/login', loginInfo);
                                
                                const cookies = new Cookies();
                                cookies.set('jwtToken', res.data.jwtToken);
                                cookies.set('userId', res.data._id);

                                console.log("Login result:", res);
                                setNavigate(ROUTES.DASHBOARD);
                            }
                            catch (err) {
                                if (err.toJSON().status === 400) {
                                    alert('Wrong username or password!');
                                }
                                else {
                                    alert('Internal error, please try again later!');
                                }
                                
                            }
                        }
                    }/>
                </div>
            </div>
            {/* image with text */}
            <div className="loginImageDiv" style={{ width: '50%', height: '100%' }}>
                <div className="loginImageImg" style={{
                    backgroundImage: `url(${login_image})`,
                    backgroundSize: 'cover'
                }}>
                </div>
            </div>
            <p style={{
                color: 'white',
                zIndex: 10,
                position: 'absolute',
                left: '52%',
                top: '12%',
                fontSize: '5vw',
                textAlign: 'left',
                fontWeight: 10,
                lineHeight: 1.2
            }}>{'Thousand\nways to your\n stomach'}</p>

        </div>
    );
}