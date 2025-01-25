import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
     <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6' marginRight={"auto"}>Blog</Typography>
            <Link to="/">
                <Button style={{color:"white"}}>Home</Button>
            </Link>
            <Link to="/add">
                <Button style={{color:"white"}}>Add</Button>
            </Link>
        </Toolbar>
    </AppBar>
    </div>
  )
}

export default Navbar
