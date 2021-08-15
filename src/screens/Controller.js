import React from 'react';
import Home from './home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Fragment } from 'react';
import Details from './details/Details';


export default function Controller() {
    return (
        <Fragment> 
            <Router>
                <div>
                    <Route exact path="/" render={ (props) => <Home {...props} /> }  />
                    <Route  path="/movie/:id" render={ (props) => <Details {...props} /> }  />
                </div>
            </Router>                                               
        </Fragment>
    );
}

