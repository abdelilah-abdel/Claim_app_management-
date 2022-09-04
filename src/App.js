import logo from './logo.svg';
import Navbar from './components/navbar';
import Home from './components/home';
import FooterBlogs from './components/footerBlogs';
import Chatbot from './components/chatbot';
import CIHform from "./components/CIHform";
import History from "./components/History";
import { Counter }  from "./features/counter/Counter"


import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom'
function App() {
  
  const dynamic_vaiable = " welcome to CIH reclamation "; 


  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">




      <Router>
          <Switch>

           <Route exact path="/">
                <Home />
           </Route>


            <Route exact path="/chatbot">
              <Chatbot />
            </Route>

            <Route exact path="/form">
              <CIHform />
            </Route>

            <Route exact path="/history">
              <History />
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
