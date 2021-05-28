import React from 'react';
import Air from './aircity/air';
import City from "./aircity/city"
import { Weather } from './myindex/whether'
import Myindex from "./youindex/weather_index"
import Info from "./weatherinfo/Info";
import Sichuan from './aircity/sichuan';
import Chengdu from './aircity/chengdu';
import Quality from "./aircity/air_quality";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


function Wroute() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <Myindex></Myindex>
                </Route>
                <Route path="/weather">
                    <Weather></Weather>
                </Route>
                <Route path="/air">
                    <Air></Air>
                </Route>
                <Route path="/city">
                    <City></City>
                </Route>
                <Route path="/info">
                    <Info></Info>
                </Route>
                <Route path="/sichuan">
                    <Sichuan></Sichuan>
                </Route>
                <Route path="/chengdu">
                    <Chengdu></Chengdu>
                </Route>
                <Route path="/quality">
                    <Quality></Quality>
                </Route>
               
            </Switch>
        </Router>
    );
}
export default Wroute;