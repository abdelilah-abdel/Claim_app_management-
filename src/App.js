import Navbar from './components/navbar';
import Home from './components/home';
import Chatbot from './components/chatbot';
import CIHform from "./components/CIHform";
import History from "./components/History";


import {BrowserRouter as Router ,Route , Switch } from 'react-router-dom'
function App() {
  


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
