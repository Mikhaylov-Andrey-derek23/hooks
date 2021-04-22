import React from 'react';
import Hookswitch from './Hookswitch';
import Header from './Header';
import Context from './Context';
import Effect from './Effect';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Hooks(){
    return(
        <div className="container-lg mt-3">
            
            <Router>
                <Header/>
                    <Switch>
                        <Route path="/" render={()=> <h1 className="text-center">Start</h1>} exact/>
                        <Route path="/hookswitch" component={Hookswitch}/>
                        <Route path="/usecontext" component={Context}/>
                        <Route path="/useeffect" component={Effect}/>
                        <Route render={()=><h2 className="text-center">Page not found</h2>}/>
                    </Switch>
            </Router>
        </div> 
        
    )
} 
export default Hooks;