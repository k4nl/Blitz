import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../context/UserContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

export default function Header() {
  const navigate = useNavigate();

  const { userName, logOut } = useContext(UserContext);

  const logout = async () => {
    await logOut();
    navigate('/', { replace: true })
  }

  return (
    <Box>
    <AppBar position="static">
      <Toolbar sx={{ display:'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" component="div" sx={{ mx: 4 }}>
            BLITZ
          </Typography>
        </Box>
        <List sx={{ display: 'flex'}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          { userName ?
          <ListItem>
          <Typography variant="h6" component="div" sx={{ mx: 4 }}>
            { userName }
          </Typography>
          <Button
            type="button"
            color="secondary"
            variant="contained"
            onClick={ () => logout() }
            >Loggout
          </Button>
          </ListItem> : ''
          }
        </List>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
