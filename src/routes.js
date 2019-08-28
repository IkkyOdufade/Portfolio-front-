import React from 'react';
import {BroswerRouter as Router, Route} from "react-router-dom";
import Profile from './components/profile';



export default function Routes() {
    return (
        <div>
          <Router>
              
              <Route path='/home' component={App}></Route>
              
              </Router>  
        </div>
    )
}
