import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import API from './API'
import Piecharts from "./Piecharts";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {DataGrid} from "@mui/x-data-grid";


const api = axios.create({

        baseURL :"http://localhost:8000/client"
    }
)







    const columns = [
        {
            field: 'id', headerName: 'ID', width: 90},

        {
            field: 'nom',
            headerName: 'nom',
            width: 150,
            editable: true,
        },
        {
            field: 'prenom',
            headerName: 'prenom',
            width: 150,
            editable: true,
        },

        {
            field: 'CIN',
            headerName: 'CIN',
            width: 150,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'email',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },

        {
            field: 'Ncompte',
            headerName: 'Ncompte',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'GSM1',
            headerName: 'GSM',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'Reference',
            headerName: 'Reference',
            width: 110,
            editable: true,
        },
        {
            field: 'Typology',
            headerName: 'Typology',
            width: 110,
            editable: true,
        },


        {
            field: 'state',

            type: 'number',
            width: 110,
            editable: true,

        },


    ];





export default function DenseTable() {



    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        api.get("/").then((res) => setDataList(res.data));
    }, []);

    const rowsData = () => {
        let arr = [];
        for (const element of dataList) {
            arr.push(element);
        }
        let res = Object.values(arr)
        console.log(res)
        return res;
    };

    let series = rowsData();


    return (
        <TableContainer component={Paper}>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={series}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>

<Piecharts />



        </TableContainer>
    );
}