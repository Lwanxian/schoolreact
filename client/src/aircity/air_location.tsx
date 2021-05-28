import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import axios from 'axios';
import { useHistory } from "react-router-dom";
function Location() {
    const history = useHistory()
    function tochengdu() {
        history.push("/chengdu")
    }
    function tosichuan() {
        history.push("/sichuan")
    }
    function tocity() {
        history.push("/city")
    }
    const [c1, setC1] = useState("")
    const [c2, setC2] = useState("")
    const [c3, setC3] = useState("")
    const [c4, setC4] = useState("")
    axios.get("http://localhost:7001/getlocation", {
    })
        .then((res) => {
            let c = res.data.result.ad_info;
            setC1(c.nation)
            setC2(c.province)
            setC3(c.city)
            setC4(c.district)
        })
        .catch((err) => {
            console.log(err);
        });
    return (
        <div className="dislocation">
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item onClick={tocity}> <a href="#">{c1}</a></Breadcrumb.Item>
                    <Breadcrumb.Item onClick={tosichuan}>
                        <a href="#">{c2}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item onClick={tochengdu}>
                        <a href="#">{c3}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{c4}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    )
}
export default Location;