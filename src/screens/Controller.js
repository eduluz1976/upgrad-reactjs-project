import React from 'react';
import Home from './home/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Fragment } from 'react';
import Details from './details/Details';
import BookShow from './bookshow/BookShow';
import Confirmation from './confirmation/Confirmation';
import LoadMoviesService from '../common/services/LoadMoviesService';


export default function Controller(props) {

    const config = props.config;

    LoadMoviesService(config);

     

    return (
        <Fragment> 
            <Router>
                <div>
                    <Route exact path="/" render={ (props) => <Home {...props}  baseUrl={config.baseUrl} /> }  />
                    <Route  path="/movie/:id" render={ (props) => <Details {...props}  baseUrl={config.baseUrl} /> }  />
                    <Route  path="/book/:id" render={ (props) => <BookShow {...props}  baseUrl={config.baseUrl} /> }  />
                    <Route  path="/confirm/:id" render={ (props) => <Confirmation {...props}  baseUrl={config.baseUrl} /> }  />
                </div>
            </Router>                                               
        </Fragment>
    );
}

