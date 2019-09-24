import React, {Component} from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {DBApiServiceProvider} from '../dbapi-service-context/dbapi-service-context';

import DBApiService from "../../services/dbapi-service";
import ErrorBoundry from "../error-boundry/error-boundry";
import Header from "../header/header";
import RandomCountry from "../random-country/random-country";

import './app.css';
// import {ListCountries} from "../db-components";
// import {RegionPage} from "../pages";
import Region from "../db-components/region"

export default class App extends Component {

    state = {
        ApiService: new DBApiService()
    };

    render() {
        const { ApiService } = this.state;
        return (
            <ErrorBoundry>
                <DBApiServiceProvider value={ApiService}>
                    <Router>
                        <div className="container">
                            <Header/>

                            <Switch>
                                <Route path="/countries/"
                                       render={() => <div>
                                           <h2 className="title">Welcome to application World Countries</h2>
                                           <RandomCountry/>
                                       </div>}
                                       exact
                                />
                                <Route path="/countries/region/:region" render={({ match }) => {
                                    const { region } = match.params;
                                    return <Region region={region}/>
                                }} />
                            </Switch>
                        </div>
                    </Router>
                </DBApiServiceProvider>
            </ErrorBoundry>
        );
    }
}

