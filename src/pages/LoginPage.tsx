import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Container from "../components/Container";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  console.log(error);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({email, password})

    try {
      const response = await axios.post("/api/login", { email, password });
      if (response.status === 200) {
        // Redirect to welcome page or handle successful login
        window.location.href = "/welcome";
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const navigateToSignUpPage = () => {
    navigate("/signup");
  }

  return (
    <Container>
      <div className="login-container">
        <div className="login-form">
          <h2>Fill What we know <span style={{color:"#d72638"}}>!</span></h2>
          <form>
              <TextField id="standard-basic" label="Email" variant="standard" style={{width: "100%"}} onChange={(e) => setEmail(e.target.value)} />
              <FormControl sx={{ width: '100%' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
              <Button onClick={handleLogin} variant="contained" style={{ padding: "10px", backgroundColor: "#3a244a"}}>Sign In</Button>
              <Button onClick={navigateToSignUpPage} variant="contained" style={{ padding: "10px", backgroundColor: "#fff", color: "#000"}}>Sign Up</Button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default LoginPage;
