import React,{useRef, useEffect, useState,useContext} from "react";
import * as echarts from 'echarts';
import {Wind}from "./echarts/wind";
import {Wet}from "./echarts/wet";
import {ThemeContext} from "../mycontext/context";
function Myecharts() {
    const resdata = useContext(ThemeContext);
    const [page,setPage]=useState("wet")
    function changePage(e:any){
        setPage(e.target.id)
    }
    return (
        <div className="mycontainer">
            <div className="choseline">
                <div className="choseleft">24小时预报</div>
                <div className="choseright" onClick={changePage}>
                    <span id="wet">温度</span>
                    <span id="wind">风力</span>
                </div>
            </div>
                <div style={{display:page==="wet"?"block":"none"}}>
                    <Wet/>
                </div>
                <div style={{display:page==="wind"?"block":"none"}}>
                    <Wind/>
                </div>
            </div>
       
    )
}
export { Myecharts }
