import Home from './components/home';
import Home2 from './components/Home2';
import Chatbot from './components/chatbot';
import CIHform from "./components/CIHform";
import History from "./components/History";

import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom'
import * as React from "react";
import Navbar from "./components/navbar";
import DataTable from  "./components/DataTable"


 import AddressForm from "./components/forms/AddressForm";
import Checkout from "./components/forms/Checkout";




 function App() {





  return (

     <Router>
        <Navbar/>
        <div className="App">


            <div className="content">



      <Router>
          <Switch>

           <Route exact path="/" element={<Home/>}>
                <Home2 />
           </Route>


            <Route exact  path="/chatbot" element={<Chatbot />}>
              <Chatbot />
            </Route>

            <Route  exact  path="/form"  element={<CIHform />}>
              <CIHform />
            </Route>

            <Route exact  path="/history" element={<History/>} >
              <History />
            </Route>

              <Route  exact path="/DataTable" component={<DataTable />}>
                  <DataTable />
              </Route>

              <Route  exact path="/form2" >
                  <Checkout />
              </Route>
           </Switch>

    </Router>

        </div>

        {/*}   <footer className="content">
          <FooterBlogs />
        </footer> */}
      </div>

        </Router>


  );
}

export default App;
