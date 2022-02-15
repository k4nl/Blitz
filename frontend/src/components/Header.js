import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

export default function Header() {

  const [ auth, setAuth ] = useState(false);

  let navigate = useNavigate(); 

  const routeChange = (path) =>{ 
    navigate(path);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BLITZ
        </Typography>
        { !auth ? 
        (
          <Button color="inherit" onClick={() => routeChange('sign')}>
            Criar usuario
          </Button>
        ) :
        (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        )
        }
      </Toolbar>
    </AppBar>
  </Box>

  )
}
