import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './airc.css';

function City() {
    const [cities, setcities] = useState<any>([])
    useEffect(() => {
        aaa();
    },[])

    function aaa() {
        axios.get("http://localhost:7001/getcities", {
        })
            .then((res) => {
                console.log(res.data.datas);
                setcities(res.data.datas)
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const bbb = () => {
        console.log(cities);
        const item = cities.map(c => {
            return <span className="provience"><a href="#"> {c.areaName}</a></span>
        })
        return item
    }

    return (
        <div>
            <h2 className="ctitle">全国各省份</h2>
            <div className="cp">
                {bbb()}
            </div>

        </div>
    )
}
export default City;