import React,{useRef, useEffect,useContext} from "react";
import {ThemeContext} from "../../mycontext/context";

import * as echarts from 'echarts';
function Wet() {
    const resdata = useContext(ThemeContext);
    var chartDom = useRef<any>();
    const show = ()=>{
        var myChart = echarts.init(chartDom.current);
        var option;
    
        option = {
            xAxis: {
                type: 'category',
                data: ['00:00',  '02:00',  '04:00',  '06:00', '08:00', '10:00',  '12:00', '14:00',"16:00","18:00",'20:00', '22:00']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [13, 13, 10, 14, 17, 19, 16,18,19,19,14,13],
                type: 'line'
            }]
        };
    
        option && myChart.setOption(option);
    }
    useEffect(show);

    return (
            <div ref={chartDom} style={{width: "1000px" ,height:"400px"}}>
            </div>
    
    )
}
export { Wet }
