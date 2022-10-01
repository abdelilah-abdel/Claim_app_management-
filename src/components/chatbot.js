import React from 'react'
import  { useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


import Clock from "./Clock";
import DataTablegroummet from "./DataTablegroummet";
import {DoubleFooter} from "./footer";
import {Everything} from "./EverythingChart";
import {Chart, DataChart} from "grommet";
import Piecharts from "./Piecharts";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Offset} from "./Offsetchart";


const firebaseConfig = {
    apiKey: "AIzaSyBpUQ5BXNLKNruq1po6B436M7RAQMkUoRs",
    authDomain: "cihclaims.firebaseapp.com",
    projectId: "cihclaims",
    storageBucket: "cihclaims.appspot.com",
    messagingSenderId: "686452122302",
    appId: "1:686452122302:web:61fded73958eb1b9ecf4ef",
    measurementId: "G-3ZRV1QD9K3"
};




function Chatbot() {
    const data = [{ date: '2020-08-20', amount: 2 }, { date: '2020-08-21', amount: 47 }, { date: '2020-08-22', amount: 33 }];




    return (

        <div className="App">
         <Clock />
            <DataTablegroummet/>
            <br/><br/><br/>

<div class="flexbox-container">

    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 700,
                height: 400,
            },
        }}
    >
        <Paper elevation={3}  ><Piecharts /> </Paper>
          <Paper elevation={1}><Everything /></Paper>
       <Paper> <Offset/> </Paper>



    }
    </Box>
</div>



            <DoubleFooter/>


        </div>
  );
}




export default Chatbot
