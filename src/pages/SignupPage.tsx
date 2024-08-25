import React, { useState } from 'react';


const SignupPage: React.FC = () => {
  const [formType, setFormType] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);

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

  return (
    <div className="container">
      <h1 className="header">Illustrate</h1>
      <div className="auth-forms">
        {formType === 'sign-in' && (
          <div className="form-container sign-in">
            <h2>Sign In</h2>
            <form id="sign-in-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
              <p>Don't have an account? <button type="button" onClick={() => setFormType('sign-up')}>Sign Up</button></p>
            </form>
          </div>
        )}
        {formType === 'sign-up' && (
          <div className="form-container sign-up">
            <h2>Sign Up</h2>
            <form id="sign-up-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
              <p>Already have an account? <button type="button" onClick={() => setFormType('sign-in')}>Sign In</button></p>
            </form>
          </div>
        )}
      </div>

      {showOtpForm && (
        <div className="otp-container">
          <h2>Verify OTP</h2>
          <form id="otp-form" onSubmit={handleOtpSubmit}>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Verify OTP</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignupPage;
