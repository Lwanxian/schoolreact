import React,{useContext} from "react";
import { Link, useHistory} from "react-router-dom"; 
import Breadcrumb from "antd/lib/breadcrumb";
import position from "../img/定位.png";
import more from "../img/更多.png";
import wind from "../img/风向.png";
import wet from "../img/水滴.png";
import axios from 'axios';
import {ThemeContext} from "../mycontext/context";
function Breadcrumbe() {
    const resdata = useContext(ThemeContext);
    console.log(resdata);
    async function toquality() {
        // setResdata("拿到数据啦");

        // history.push({pathname: "/weather", state: { id: 23 } });
       let r =  await aaa();
       console.log(r.data)
       if(r) {
        history.push({pathname: "/quality", state: r.data});
       }
    }
    async function aaa() {
        let r = await axios.get("http://localhost:7001/getairquality", {
        })
        return r;
    }
    const history=useHistory()
    function tocity(){
        history.push("/city")
    }
    return (
        <div>
            <Breadcrumb  className="bread">
                <Breadcrumb.Item>天气</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">中国</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">四川省</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item onClick={tocity}>温江区</Breadcrumb.Item>
            </Breadcrumb>
            <div className="positionshow">
                <img className="position" src={position} alt="这是图片"/>
                <div className="showlocation">温江区，四川省，中国</div>
                <img src={more} alt="这是图片" className="more" onClick={tocity}/>
            </div>
            <div className="pollution" onClick={toquality}>
            <div className="iconp"></div>
            <p className="text" >查看空气指数</p>
            </div>
            <div className="detail">
                <span className="temp">{resdata.result.realtime.temperature}°</span>
                <span className="temp1">多云</span>
                <span className="time">11：00更新</span>
            </div>
            <div className="windAw">
            <div>
                <img src={wet} alt="这是图片"/><span>湿度{resdata.result.realtime.humidity}</span>
            </div>
            <div>
                <img src={wind} alt="这是图片"/><span>{resdata.result.realtime.direct}</span>
            </div>
            </div>
            <div className="tips">
            <div className="tiptittle">今日天气提示</div>
            <span>{resdata.result.future[0].direct}</span>
            </div>
        </div>
        

    )

}
export { Breadcrumbe }