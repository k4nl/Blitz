import React from 'react';
import Header from '../components/Header';
import Paper from '@mui/material/Paper';
import Login from '../components/Login';
import Title from '../components/Title';

export default function Home() {

  const styled = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mt: 4,
    width: '100%'
  }

  return (
    <Paper elevation={3}>
      <Header />
      <Paper elevation={3} sx={styled}>
        <Title title="Login" />
        <Login />
      </Paper>
    </Paper>
  )
}
