import PageWrapper from "./components/PageWrapper"
import './App.css';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
//Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contacts";
import Login from "./components/pages/Login";

//wrapper
import AdminWrapper from "./components/AdminWrapper";
function App() {
  return (
    <Router>
      <Route
        path="/admin"
        render={props =>(
          <AdminWrapper>
            <Login />
          </AdminWrapper>
          
        )}
      
      />

      
      <Route 
        exact={true}
        path="/"
       render={props => (
        <PageWrapper>
          <Home {...props}/>
        </PageWrapper>
       )}
      
      />

      <Route
      path="/about"
      render={props => (
        <PageWrapper>
          <About {...props}/>
        </PageWrapper>
       )}
      />

    <Route
    path="/contact"
    render={props => (
      <PageWrapper>
        <Contact {...props}/>
      </PageWrapper>
     )}
    />


   </Router>
  );
}

export default App;
