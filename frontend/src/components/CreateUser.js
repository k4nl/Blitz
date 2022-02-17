import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserContext from '../context/UserContext';

export default function CreateUser() {

  const { logIn, register } = useContext(UserContext);
  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ emailError, setEmailError ] = useState(false);
  const [ passwordError, setPasswordError ] = useState(false);
  const [ nameError, setNameError ] = useState(false);

  const verifyInputError = () => {
    if (passwordError) {
      return setPasswordError(true);
    }
    if (emailError) {
      return setEmailError(true);
    }
    if (nameError) {
      return setNameError(true);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    verifyInputError();

    if (email && password && name) {
      const createErrorMessage = await register({ name, password, email });
      const loginErrorMessage = await logIn({ email, password });
      if (createErrorMessage) {
        global.alert(createErrorMessage);
      }
      if (loginErrorMessage) {
        global.alert(loginErrorMessage);
      }
      navigate('/task', { replace: true });
    }
  }
  return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={ handleSubmit }
      >
        <div>
        <TextField
          required
          label="Username"
          type="email"
          onChange={ (e) => setName(e.target.value)}
          error={emailError}
        />
         <TextField
          required
          label="Email"
          type="email"
          onChange={ (e) => setEmail(e.target.value)}
          error={emailError}
        />
         <TextField
          required
          type="password"
          label="Password"
          onChange={ (e) => setPassword(e.target.value)}
          error={passwordError}
        />
        </div>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 4}}>
        <Button
          onClick={ (e) => handleSubmit(e)}
          type="button"
          color="primary"
          variant="contained"
        >
          Register
        </Button>
        </Box>
      </Box>
  )
}
