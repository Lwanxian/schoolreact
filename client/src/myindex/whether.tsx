import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { Nav } from "./nav";
import "./mystyle/index.css";
import { Breadcrumbe } from "./breadcrumb";
import { Prediction } from "./prediction";
import { Myecharts } from "./echarts";
import { Live } from "./live";
import { Calendar1 } from "./calendar";
import { Layout } from 'antd';
import { ThemeContext } from "../mycontext/context";
import {useLocation} from "react-router-dom";
import Bottom from "../bottom/bottom"

function Weather() {
    
    interface mytype  {resultcode: string, reason: string, result: null, error_code: number};
    console.log("Whether")
    
    let mydata = useLocation().state as mytype
    console.log(mydata)
    console.log(mydata.reason)
    return (
        <div className="mywhether">
            <Nav />
            <ThemeContext.Provider value={mydata}>
            <div className="bigcontent" >
                <Breadcrumbe /> 
                 <Prediction /> 
                <Myecharts />
                <Live />
                <Calendar1 />
            </div>
            </ThemeContext.Provider>
            <Bottom/>

        </div>
    )
}
export { Weather }