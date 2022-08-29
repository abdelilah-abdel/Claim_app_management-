import React, {useEffect, useState} from 'react';
import useFetch from "./useFetch";

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import claimsList from './claimsList'
import ClaimsCard from "./claimsCard";




// eslint-disable-next-line react-hooks/rules-of-hooks


function History( ) {

   // const { error, isPending, data: client } = useFetch('http://localhost:8000/blogs')
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

            <Container>
                <Grid container spacing={3}>

                    {claims.map(claim => (

                        <Grid item xs={12} md={6} lg={4} key={claim.id}>

                            <ClaimsCard claim={claim} handleDelete={handleDelete} />




                         </Grid>
                    ))}
                </Grid>
            </Container>



        </div>
    );
}

export default History
