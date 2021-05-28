import React, { useState } from "react";
import { Five } from "./prediction/five";
import { Three } from "./prediction/three";


const Prediction = () => {
    const [page, setPage] = useState("Three")
    function changePage(e:any) {
        setPage(e.target.id)
    }
   
    return (
        <div className="mycontainer">
            <div className="choseline">
                <div className="choseleft">预报</div>
                <div className="choseright" onClick={changePage}>
                    <span id="Three" >3天预报</span>
                    <span id="Seven">5天预报</span>
                   
                
                </div>
            </div>
            <div >
                <div style={{ display: page === 'Seven' ? "block" : 'none' }}>
                    <Five ></Five>
                </div>
                <div style={{ display: page === 'Three' ? "block" : 'none' }}>
                    <Three ></Three>
                </div>
             
               
            </div>
        </div>
    )
}
export { Prediction }