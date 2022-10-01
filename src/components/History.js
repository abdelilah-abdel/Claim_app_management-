import React, {useEffect, useState} from 'react';
import useFetch from "./useFetch";

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

  import Navigator from "./Navigator";
import Paperbase from "./Paperbase";
 import {ToggleButton} from "@mui/material";
 import {Link} from "react-router-dom";


function History( ) {

    const { error, isPending, data: client } = useFetch('http://localhost:8090/')
    const [claims , setclaims] = useState([]);



    useEffect(() => {
        fetch('http://localhost:8090/')
            .then(res => res.json())
            .then(data => setclaims(data))
    }, [])



    const handleDelete = async (id) => {
        await fetch("http://localhost:8090/" + id, {
            method: 'DELETE'
        })
        const newClaim = claims.filter(claim => claim.id != id)
        setclaims(newClaim)
    }


    return (

<div >
        <div className="home">

            <Paperbase />

            <Container>




                <ToggleButton value="center" aria-label="centered">
                    <Link to="/DataTable">Data Base </Link>
                </ToggleButton>

            </Container>


        </div>



</div>
    );
}

export default History
