import React from 'react';
import Home from './home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Fragment } from 'react';
import Details from './details/Details';
import BookShow from './bookshow/BookShow';


export default function Controller(props) {

    const config = props.config;
    console.log('Controller', props);

    return (
        <Fragment> 
            <Router>
                <div>
                    <Route exact path="/" render={ (props) => <Home {...props}  /> }  />
                    <Route  path="/movie/:id" render={ (props) => <Details {...props}  baseUrl={config.baseUrl} /> }  />
                    <Route  path="/book/:id" render={ (props) => <BookShow {...props}  baseUrl={config.baseUrl} /> }  />
                </div>
            </Router>                                               
        </Fragment>
    );
}

