
import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Drawer, Button, Radio, Space } from 'antd';
import axios from 'axios';
import "./weather_index.css";
import icon1 from "./dingwei.png";
import icon2 from "./index.png";
import icon3 from "./twohouse.png";
import icon4 from "./more.png";
import icon5 from "./erweima.png";

import tianqibjt from "./tianqibjt.jpg";
import Bottom from "../bottom/bottom"
function Myindex() {
    let history2 = useHistory();
    const name = useRef<any>();
    const getinfo = useRef<any>();
    const [weaName, setweaName] = useState("nav-weather1")
    const [erName, seterName] = useState("nav-weather1")
    const [leftName, setleftName] = useState("nav-weather1")
    const [weather_index, setInweather] = useState([{
        date:"2021",
        direct:"1111",
        temperature:"6du",
        weather:"多云转晴"

    },{
        date:"2021",
        direct:"1111",
        temperature:"6du",
        weather:"多云转晴"

    }])
    const [time, getTime] = useState<any>("")
    const [c2, setC2] = useState("点击获取当前城市")
    const [c3, setC3] = useState("成都")
    useEffect(() => {
        let r = new Date().toLocaleDateString();
        getTime(r)
    })
    async function getcity() {
        let r = await axios.get("http://localhost:7001/getlocation", {
        })
        console.log(r.data.result.ad_info);
        return r.data.result.ad_info
    }
    const history = useHistory()
    async function toweather() {
        let r = await aaa();
        console.log(r.data)
        if (r) {
            history.push({ pathname: "/weather", state: r.data });
        }
    }

    async function aaa() {
        let r = await axios.get("http://localhost:7001/getweather", {
            params: {
                city: c3,
                key: '9db342eb452009d6399eec2bdeefc424'
            }
        })
        return r;
    }
    async function getweather() {
        let r = await axios.get("http://localhost:7001/getweather", {
            params: {
                city: c3,
                key: '9db342eb452009d6399eec2bdeefc424'
            }
        })
        return r
    }
    async function getinformation() {
        let re = await getcity()
        if (re) {
            setC2(re.province)
            setC3(re.city.slice(0, 2))
        }
        console.log(c3);
        
        let r = await getweather()
        if (r) {
            console.log(r);
            setInweather(r.data.result.future)
            console.log(r.data.result.future);
        }
    }
   
    
    function show1() {
        setweaName("nav-weather2")
    }
    function show2() {
        seterName('index-hover1')
    }
    function show3() {
        setleftName('leftmore')
    }
    function hande() {
        seterName('nav-weather1')
        setweaName("nav-weather1")
        setleftName('nav-weather1')
    }
    function showlist(){
       const list= weather_index.map((item)=>{
            return(
                <Col span={6}><div className="tianqilist">
                <div>{item.date}</div>
                <div>{item.temperature}</div>
                <div>{item.weather}</div>
                <div> {item.direct}</div>
            </div>
            </Col>
            )
        })
        return list
     }

    return (
        <div className="big-box">
            <div className="bg-img">
                <img src={tianqibjt} alt="" width=" 2000px" height="969px"/>
                <div className="you-nav">
                    <div className="nav-son1">
                        <b style={{ fontSize: '40px', color: "rgb(0, 150, 223)",fontFamily:"华文隶书" }} >随心天气 </b>

                    </div>
                    <div className="nav-son2">
                        <div className="nav-city" onMouseOver={show1} onMouseLeave={hande}>
                            <div className="city-cion">
                                <img src={icon1} alt="" style={{ width: '25px', height: '25px' }} />
                            </div>
                            <span style={{ marginRight: '10px' }} onClick={getinformation} ref={getinfo}>
                                {c2}{c3}
                            </span>
                        </div>
                        <div className="city-cion" onClick={toweather}>
                            <img src={icon2} alt="" style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
                        </div>
                        <div className="city-cion" onMouseOver={show2} onMouseLeave={hande}>
                            <img src={icon3} alt="" style={{ width: '40px', height: '40px', cursor: 'pointer' }} />
                        </div>
                        <div className="more-cion" onMouseOver={show3} onMouseLeave={hande}>
                            <img src={icon4} alt="" style={{ width: '30px', height: '40px', cursor: 'pointer' }} />
                                更多
                            </div>
                    </div>
                </div>
                <div className={weaName}>
                    <div className="nav-weather-header">
                        <div style={{ cursor: 'pointer', color: "white" }}>{time}</div>

                        <div style={{ cursor: 'pointer', color: "white" }} >更多+</div>

                    </div>
                    <hr/>
                    <div className="weather-list" >
                    <Row>
                        {showlist()}
                    </Row>
                    </div>
                </div>
                <div className={erName} >
                    <img src={icon5} style={{ width: '150px', height: '150px' }}></img>
                </div>
            </div>
            <div className={leftName}>
                <div style={{ marginTop: "100px", fontSize: '16px' }} >关于我们</div>
                <hr />

                <div style={{ marginTop: "10px" }}>
                    <img src={icon5} style={{ width: '100px', height: '100px' }}>

                    </img>
                    <div style={{ marginTop: "10px",color:"white" }}>
                        <p>扫一扫</p>
                        <p>
                            下载客户端
                        </p>
                    </div>
                </div>
                <hr />
                <div style={{ marginTop: "10px" }}>
                    <img src={icon5} style={{ width: '100px', height: '100px' }}>
                    </img>
                    <div style={{ marginTop: "10px",color:"white" }}>
                        <p >扫一扫</p>
                        <p>
                            关于随心天气
                        </p>
                    </div>
                </div>
            </div>
            <div className="icon-title">
                <span style={{ fontSize: "70px",fontFamily:"华文隶书" }}> <b> 让气象赋能世界</b> </span>
                <span style={{ fontSize: "40px",fontFamily:"华文隶书"    }}> <b>Enabling the world with weather</b> </span>
            </div>
            <Bottom></Bottom>
        </div>

    );
}

export default Myindex