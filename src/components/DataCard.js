import React, {useEffect, useState} from 'react';
import useFetch from  "./useFetch"


import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import ClaimsCard from "./claimsCard";
 import Navigator from "./Navigator";




function  DataCard(){

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





    return(
        <Container>
            <Grid container spacing={3}>


                <Navigator />
                {claims.map(claim => (

                    <Grid item xs={12} md={6} lg={4} key={claim.id}>

                        <ClaimsCard claim={claim} handleDelete={handleDelete}/>

                        {/*   <DataGridDemo claim={claim} handleDelete={handleDelete} /> */}


                    </Grid>
                ))}
            </Grid>

        </Container>

    )
}

export  default  DataCard;

