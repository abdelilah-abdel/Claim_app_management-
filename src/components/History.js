import React, {useEffect, useState} from 'react';
import useFetch from "./useFetch";
import Sidebar from  "./Sidebar"

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import ClaimsCard from "./claimsCard";
import Content from "./Content";
import Navigator from "./Navigator";
import Paperbase from "./Paperbase";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import {ToggleButton} from "@mui/material";
import  DataTable from './DataTable'
import {Link} from "react-router-dom";


function History( ) {

    const { error, isPending, data: client } = useFetch('http://localhost:8000/client')
    const [claims , setclaims] = useState([]);




    useEffect(() => {
        fetch('http://localhost:8000/client')
            .then(res => res.json())
            .then(data => setclaims(data))
    }, [])



    const handleDelete = async (id) => {
        await fetch("http://localhost:8000/client/" + id, {
            method: 'DELETE'
        })
        const newClaim = claims.filter(claim => claim.id != id)
        setclaims(newClaim)
    }


    return (


        <div className="home">

         <Paperbase />
            <Container>

                <Grid container spacing={3}>
                   <Navigator />
                </Grid>


                <ToggleButton value="center" aria-label="centered">
                    <Link to="/DataTable">Data Base </Link>
                </ToggleButton>

            </Container>


        </div>
    );
}

export default History
