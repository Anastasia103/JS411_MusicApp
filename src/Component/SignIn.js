import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignIn(props) {
  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        gridGap: "8px",
        margin: "64px auto",
        maxWidth: 300
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" required/>
      <TextField id="outlined-basic" label="Password" variant="outlined" required/>
      <Button color= "primary" variant="contained" onClick={() => props.setIsLoggedIn(true)}> Login</Button>
    </Box>
  );
}