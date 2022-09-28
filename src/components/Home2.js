import React from 'react'
import {useState,useEffect} from 'react'
import useFetch from './useFetch'
import {Parallax , ParallaxLayer} from "@react-spring/parallax";
import  img1 from  './images/TPE.jpg'
import  img2 from  './images/CC.gif'
import img3 from  './images/gap.jpg'
import img4 from  './images/cihpay.jpg'
import  img5 from './images/ls9a.jpg'
import  feedback from './images/feedback.png'
import asking from './images/asking.png'

import colors from './images/colors.jpg'
import  guy from './images/guy.svg'
import  traiter from './images/traiter.png'
import handshake from  './images/handShaking.jpg'

import guichet from './images/guichet.jpg'
import  yellow from './images/yellow.jpg'
import pexels from './images/pexels.jpg'


import { useRef } from 'react';
import Paper from "@mui/material/Paper";


import {Heading, WorldMap} from 'grommet';
import SandboxComponent from './SandboxComponent';
import {Color} from "./Worldmap";
import {Animated} from "./Diagram";
import {DoubleFooter} from "./footer";


 function Home2() {
     const ref = useRef();
    return (

        <Parallax pages={5}>

            <ParallaxLayer
                offset={0}
                speed={2}
                factor={1}
                style={{
                    backgroundImage :`url(${guichet})`,
                    backgroundSize :'cover'
                }}
            >

                <h1 className="text">CIH plateforme pour vos Reclamations. </h1>
                <span className="scrollDown"></span>

            </ParallaxLayer>




                <ParallaxLayer
                    offset={0.9}
                    speed={0.5}
                    factor={5}
                    style={{
                        backgroundImage: `url(${img1})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <Color />

                </ParallaxLayer>





            <ParallaxLayer
                offset={2}
                speed={0.5}
                sticky={{ start: 1, end: 1.5 }}
                style={{ textAlign: 'center' }}
            >
                <Animated/>


            </ParallaxLayer>



            <ParallaxLayer
                offset={4}
                speed={0.5}
                sticky={{ start: 2, end: 2.8 }}
                style={{ textAlign: 'center' }}


            >
                <h2> <p>our employees will try to treat the claim  at the earliest possible time </p>  </h2>
                <img className="sticker" src={traiter} />

            </ParallaxLayer>


            <ParallaxLayer
                offset={4}
                speed={0.5}
                sticky={{ start: 3, end: 3.8 }}
                style={{ textAlign: 'center' }}
                onClick={() => ref.current.scrollTo(0)}

            >
                <h2> get statistic of clients claims, and update the data </h2>
                <img className="sticker" src={asking} /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <img src={img5}/><br/><br/>
                <DoubleFooter/>
            </ParallaxLayer>




        </Parallax>








    )
}

export default Home2
