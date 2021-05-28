import React, { useState, useEffect, useRef } from 'react';
import logo from "./111.jpg";
import "./bottom.css"
function Bottom() {
    return (
        < div >
            <br />
            <hr />
            <div className="youindex_dibu">
                <div style={{ textAlign: "center" }}>
                    <img src={logo} alt="" width='45px' height="45px"/>
                    <b style={{ fontSize: '30px', color: "rgb(0, 150, 223)" ,fontFamily:"华文隶书" }} >随心天气 </b>
                </div>
                <div style={{ textAlign: "center" }}><a href="#">升级日志</a><span> | </span>
                    <a href="#">常见问题</a><span> | </span>
                    <a href="#">服务协议</a><span> | </span>
                    <a href="#">网上有害信息举报</a>
                </div>
                <div style={{ textAlign: "center" }}>公司地址：成都市金牛区二环路北一段新诚信大厦5楼507</div>
                <div style={{ textAlign: "center" }}>联系电话：010-12345678</div>
            </div>
        </ div>
    )
}
export default Bottom;