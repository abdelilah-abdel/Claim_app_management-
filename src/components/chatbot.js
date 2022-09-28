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




    return (

        <div className="App">

        <Clock />
            <DataTablegroummet/>


            <Everything/>

            <DoubleFooter/>


        </div>
  );
}




export default Chatbot
