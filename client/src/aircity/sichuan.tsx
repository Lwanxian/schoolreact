import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './airc.css';

function Sichuan() {
    const [sichuan, setsichuan] = useState<any>([])
    useEffect(() => {
        sc();
    },[])
    function sc() {
        axios.get("http://localhost:7001/getsichuan", {
        })
            .then((res) => {
                console.log(res.data.result[0]);
                setsichuan(res.data.result[0])
            })
            .catch((err) => {
                console.log(err);
            });
    }
 
    const bbb = () => {
        console.log(sichuan);
        const item = sichuan.map(sc => {
            return <span className="provience"> {sc.fullname}</span>
        })
        return item
    }
    return (
        <div>
            <h2  className="ctitle">四川省各市级单位</h2>
           
            <div className="cp">
            {bbb()}
            </div>

        </div>
    )
}
export default Sichuan;