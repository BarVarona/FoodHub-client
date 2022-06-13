import { useState } from "react";
import { Navigate } from "react-router-dom";
import CheckBox from "../components/atoms/CheckBox";
import NormalButton from "../components/atoms/NormalButton";
import TextInputField from "../components/atoms/TextInputField";
import { api_url, login_image, test_image } from "../consts/general.const";
import { _orange } from "../styles/_colors";
import axios from 'axios';
import { ROUTES } from "../consts/routes.const";

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

export default function SignupPage(props) {

    const [ registerInfo, setRegisterInfo ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerm: false
    });
    const [ navigate, setNavigate ] = useState(null);
    
    if (navigate !== null) {
        return (
            <Navigate replace to={navigate} />
        );
    }

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            {/* image */}
            <div className="loginImageDiv" style={{ width: '30%', height: '100%' }}>
                <div className="loginImageImg" style={{
                    backgroundImage: `url(${login_image})`,
                    backgroundSize: 'cover'
                }}>
                </div>
            </div>
            <div style={{...centerFlexColDivStyle, width: '70%', height: '100%'}}>
                <p style={{
                    fontSize: '3vw',
                    fontWeight: 450,
                    color: _orange,
                    marginBottom: '0'
                }}>Foodhub</p>
                {/* register form */}
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    <h3 style={{ marginBottom: '0', fontSize: '1.1vw'}}>Register</h3>
                    {/* first name */}
                    <p style={{ marginBottom: 5, fontSize: '1vw' }}>First name</p>
                    <TextInputField inputProps={{
                        style: { height: '1.4vw' }
                    }}  size="small" sx={{ width: '65%' }} onChange={
                        element => { setRegisterInfo({...registerInfo, firstName: element.target.value}) }
                    }/>
                    {/* last name */}
                    <p style={{ marginBottom: 5, fontSize: '1vw' }}>Last name</p>
                    <TextInputField inputProps={{
                        style: { height: '1.4vw' }
                    }} size="small" sx={{ width: '65%' }} onChange={
                        element => { setRegisterInfo({...registerInfo, lastName: element.target.value}) }
                    }/>
                    {/* email */}
                    <p style={{ marginBottom: 5, fontSize: '1vw' }}>Email</p>
                    <TextInputField inputProps={{
                        style: { height: '1.4vw' }
                    }} size="small" sx={{ width: '65%' }} onChange={
                        element => { setRegisterInfo({...registerInfo, email: element.target.value}) }
                    }/>
                    {/* password */}
                    <p style={{ marginBottom: 5, fontSize: '1vw' }}>Password</p>
                    <TextInputField inputProps={{
                        style: { height: '1.4vw' }
                    }} type="password" size="small" sx={{ width: '65%' }} onChange={
                        element => { setRegisterInfo({...registerInfo, password: element.target.value}) }
                    }/>
                    {/* confirm password */}
                    <p style={{ marginBottom: 5, fontSize: '1vw' }}>Confirm password</p>
                    <TextInputField inputProps={{
                        style: { height: '1.4vw' }
                    }} type="password" size="small" sx={{ width: '65%' }} onChange={
                        element => { setRegisterInfo({...registerInfo, confirmPassword: element.target.value}) }
                    }/>
                    <br></br>
                    {/* terms checkbox */}
                    <div style={{ display: 'flex' }}>
                        <CheckBox onChange={
                        element => { setRegisterInfo({...registerInfo, agreeToTerm: !registerInfo.agreeToTerm}) }
                        }/>
                        <p style={{fontSize: '1vw'}}>I agree to the terms of use and privacy policy</p>
                    </div>
                    <br></br>
                    {/* submit button */}
                    <NormalButton text="CREATE AN ACCOUNT" sx={{ width: '65%', borderRadius: 10, fontSize: '1vw' }} onClick={
                        // send register request to the api:
                        async () => {
                            if (!registerInfo.agreeToTerm) {
                                alert('You must agree to the terms of usage!');
                                return;
                            }

                            if (registerInfo.password !== registerInfo.confirmPassword) {
                                alert('Passwords do not match!');
                                return;
                            }

                            try {
                                const res = await axios.post(api_url + 'auth/register', {
                                    firstName: registerInfo.firstName,
                                    lastName: registerInfo.lastName,
                                    email: registerInfo.email,
                                    password: registerInfo.password 
                                });
                                console.log("Register result:", res);
                                setNavigate(ROUTES.LOGIN);
                            }
                            catch (err) {
                                console.log("Signup failed", err.toJSON());

                                if (err.toJSON().status === 400) {
                                    alert('Username exists!');
                                }
                                else {
                                    alert('Internal error, please try again later!');
                                }                                
                                
                            }
                        }
                    }/>
                </div>
            </div>
        </div>
    );
}
