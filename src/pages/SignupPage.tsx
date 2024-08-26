import React, { useState } from 'react';
import "../App.css";
import Container from '../components/Container';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";


const SignupPage: React.FC = () => {
  const [formType, setFormType] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [retyepePassword, setRetyepePassword] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRetypePassword, setShowRetypePassword] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (formType === 'sign-in') {
      // Handle Sign In
      console.log('Signing in with:', { email, password });
      // You can add logic to send a request to your backend here
    } else {
      // Handle Sign Up
      console.log('Signing up with:', { email, password });
      setShowOtpForm(true);
      // You can add logic to send a sign-up request and email OTP here
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Verifying OTP:', otp);
    // You can add logic to verify the OTP here and handle success/failure
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClickShowRetypePassword = () => setShowRetypePassword((show) => !show);

  const handleMouseDownRetypePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  console.log({setFormType, setOtp, showOtpForm, handleSubmit, handleOtpSubmit, firstName,lastName, contactMethod, retyepePassword});

  return (
    // <div className="container">
    //   <h1 className="header">Illustrate</h1>
    //   <div className="auth-forms">
    //     {formType === 'sign-in' && (
    //       <div className="form-container sign-in">
    //         <h2>Sign In</h2>
    //         <form id="sign-in-form" onSubmit={handleSubmit}>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //           <button type="submit">Sign In</button>
    //           <p>Don't have an account? <button type="button" onClick={() => setFormType('sign-up')}>Sign Up</button></p>
    //         </form>
    //       </div>
    //     )}
    //     {formType === 'sign-up' && (
    //       <div className="form-container sign-up">
    //         <h2>Sign Up</h2>
    //         <form id="sign-up-form" onSubmit={handleSubmit}>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //           <button type="submit">Sign Up</button>
    //           <p>Already have an account? <button type="button" onClick={() => setFormType('sign-in')}>Sign In</button></p>
    //         </form>
    //       </div>
    //     )}
    //   </div>

    //   {showOtpForm && (
    //     <div className="otp-container">
    //       <h2>Verify OTP</h2>
    //       <form id="otp-form" onSubmit={handleOtpSubmit}>
    //         <input
    //           type="text"
    //           name="otp"
    //           placeholder="Enter OTP"
    //           value={otp}
    //           onChange={(e) => setOtp(e.target.value)}
    //           required
    //         />
    //         <button type="submit">Verify OTP</button>
    //       </form>
    //     </div>
    //   )}
    // </div>
    <Container>
      <div className="login-container">
        <div className="login-form">
          <div className='signup-header'>
            <h2>Let us know <span style={{color:"#d72638"}}>!</span></h2>
            <NavLink to="/">Sign In</NavLink>
          </div>
          <form className='signup-form'>
              <TextField id="standard-basic" label="First Name" variant="standard" style={{width: "100%"}} onChange={(e) => setFirstName(e.target.value)} />
              <TextField id="standard-basic" label="Last Name" variant="standard" style={{width: "100%"}} onChange={(e) => setLastname(e.target.value)} />
              <FormControl sx={{ width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Set Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl sx={{ width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Retype Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showRetypePassword ? 'text' : 'password'}
                  onChange={(e) => setRetyepePassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowRetypePassword}
                        onMouseDown={handleMouseDownRetypePassword}
                      >
                        {showRetypePassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField id="standard-basic" label="Contact Mode" variant="standard" style={{width: "100%"}} onChange={(e) => setContactMethod(e.target.value)} />
              <TextField id="standard-basic" label="Enter Email" variant="standard" style={{width: "100%"}} onChange={(e) => setEmail(e.target.value)} />
              <Button variant="contained" style={{ padding: "10px", backgroundColor: "#3a244a"}}>Sign Up</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignupPage;
