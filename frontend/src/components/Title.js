import React from 'react';
import Typography from '@mui/material/Typography';

export default function Title({ title }) {
  return (
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>{title}</Typography>
  )
}
