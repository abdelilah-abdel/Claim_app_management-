import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Toolbar from "@mui/material/Toolbar";
import {ToggleButton} from "@mui/material";
import ModeNightIcon from '@mui/icons-material/ModeNight';

const logo =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Ffr%2Fthumb%2Fb%2Fb2%2FLogo_CIH.png%2F120px-Logo_CIH.png&f=1&nofb=1";



const Navbar = () => {


    return (

    <div className="navbar">



        <Link to="/">  <img src={logo} ></img> </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contactus">contacter nous</Link>
        <Link to="/chatbot"> chatbot </Link>
        <Link to="/form"> form </Link>
        <Link to="/history"> history</Link>
      </div>

<div>
    <Toolbar>
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
                <TextField
                    fullWidth
                    placeholder="Search by client name "
                    InputProps={{
                        disableUnderline: true,
                        sx: { fontSize: 'default' },
                    }}
                    variant="standard"
                />
            </Grid>
            <Grid item>
             <a href="/form">
                <Button variant="contained" sx={{ mr: 1 }}>
                     Add claim
                </Button>
             </a>
                <Tooltip title="Reload">
                <a href="/history">
                    <IconButton>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                    <ToggleButton value="center" aria-label="centered">
                        <ModeNightIcon />
                    </ToggleButton>
                </a>
                </Tooltip>

            </Grid>
        </Grid>
    </Toolbar>
</div>
    </div>
  );
};

export default Navbar;
