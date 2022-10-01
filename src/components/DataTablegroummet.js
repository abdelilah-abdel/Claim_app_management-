import React, {Component, useEffect, useState} from 'react';
import { DataTable, Box, Meter, Text,Heading } from 'grommet';
import SandboxComponent from './SandboxComponent';
import axios from "axios";


const amountFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NIS',
      minimumFractionDigits: 2,
    });


const columns = [
    {
        property: 'id',
        header: <Text>ID</Text>,
        primary: true,
    },
    {
        property: 'nom',
        header: 'nom',
    },
    {
        property: 'prenom',
        header: 'prenom',
    },
    {
        property: 'CIN',
        header: 'CIN',
    },
    {
        property: 'email',
        header: 'email',
    },
    {
        property: 'Ncompte',
        header: 'Ncompte',
    },
    {
        property: 'GSM1',
        header: 'GSM1',
    },
    {
        property: 'GSM2',
        header: 'GSM2',
    },{
        property: 'Reference',
        header: 'Reference',
    },{
        property: 'Typology',
        header: 'Typology',
    },{
        property: 'state',
        header: 'state',
    },
    {
        property: 'percent',
        header: 'traitement de reclamation',
        render: datum => (
            <Box pad={{ vertical: 'xsmall' }}>
                <Meter
                    values={[{ value: datum.percent }]}
                    thickness='medium'
                    size='xxsmall'
                    type="circle"
                />
            </Box>
        ),
    },
];



const api = axios.create({

        baseURL :"http://localhost:8000/client"
    }
)



export default function  DataTablegroummet() {
    const step = 10;
    const load = () => {
        console.log(`InfiniteScroll fires onMore after loading ${step} items`);
    };

 const [DATa , setDATa ] = useState([]);


    const rowsData = () => {
        let arr = [];

        for (const element of DATa) {
            arr.push(element);
        }
        let res = Object.values(arr)
        console.log(res)
        return res;
    };

    let DATA = rowsData()

    useEffect(() => {
    api.get("/").then((res) => setDATa(res.data));
}, []);




        return (


                <Box align='center'>
                    <DataTable resizeable='true' sortable='true' size='small' columns={columns} data={DATA} />
                </Box>




        );



}
