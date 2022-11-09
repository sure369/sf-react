import React from 'react';
import {NavLink} from 'react-router-dom';
import { AppBar,CssBaseline ,Toolbar,Typography } from '@mui/material';
import './Comp.css';

function NavBar() {
  return (
    <AppBar position='static'>
        <CssBaseline/>
            <Toolbar>
                <Typography variant="h5" >
                    CloudDesk
                </Typography>
                <div >
                   <NavLink to="/login">
                        Login
                    </NavLink>
                    <NavLink to="/inventory">
                        Inverntory Management
                    </NavLink>
                    {/* <NavLink to="/test">
                        Sample Data
                    </NavLink> */}
                </div>
            </Toolbar>
    </AppBar>
  )
}

export default NavBar