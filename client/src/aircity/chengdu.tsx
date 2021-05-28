import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './airc.css';

function Chengdu() {
    const [chengdu, setchengdu] = useState<any>([])
    useEffect(() => {
        cd();
    },[])
    function cd() {
        axios.get("http://localhost:7001/getchengdu", {
        })
            .then((res) => {
                console.log(res.data.result[0]);
                setchengdu(res.data.result[0])
            })
            .catch((err) => {
                console.log(err);
            });
    }
 
    const bbb = () => {
        console.log(chengdu);
        const item = chengdu.map(cd => {
            return <span className="provience"> {cd.fullname}</span>
        })
        return item
    }
    return (
        <div>
            <h2  className="ctitle">成都各地区</h2>
           
            <div className="cp">
            {bbb()}
            </div>

        </div>
    )
}
export default Chengdu;