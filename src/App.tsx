import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSearch from './components/MainSearch';
import {BrowserRouter as Router, Route , RouteComponentProps } from 'react-router-dom'
import Details from './components/Details';


function App() {

  return (
    <Router>
    <div >
     <Route path= "/" render={(routerProps) => <MainSearch {...routerProps} />}/>
     <Route path= "/details" render={(routerProps) => <Details {...routerProps} />}/>

     {/* <Route exact path= "/home" component={MainSearch}/> */}
    </div>
    </Router>
  );
}

export default App;
