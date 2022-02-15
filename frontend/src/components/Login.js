import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material';

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ emailError, setEmailError ] = useState(false);
  const [ passwordError, setPasswordError ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (passwordError) {
      setPasswordError(true);
    }

    if (emailError) {
      setEmailError(true);
    }

    if (email && password) {
      console.log(email);
      console.log(password);
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
          id="outlined-required"
          label="Email"
          type="email"
          onChange={ (e) => setEmail(e.target.value)}
          error={emailError}
        />
         <TextField
          required
          id="outlined-required"
          type="password"
          label="Password"
          onChange={ (e) => setPassword(e.target.value)}
          error={passwordError}
        />
        </div>

        <Button
          onClick={ (e) => handleSubmit(e)}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={ <KeyboardArrowRightIcon />}
        >
          
        </Button>
      </Box>
  )
}
