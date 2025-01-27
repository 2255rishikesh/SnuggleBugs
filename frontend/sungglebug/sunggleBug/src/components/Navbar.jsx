import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'
function Navbar () 
 {
  return (
    <div>
     <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' marginRight={"auto"}></Typography>
            <Link to="/">
                <Button style={{color:"white"}}></Button>
            </Link>
            <h1>b</h1>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar
