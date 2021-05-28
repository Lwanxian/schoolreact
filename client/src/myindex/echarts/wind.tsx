import React,{useRef, useEffect,useContext} from "react";
import {ThemeContext} from "../../mycontext/context";

import * as echarts from 'echarts';
function Wind() {
    const resdata = useContext(ThemeContext);
    console.log(resdata);
    let power=Number(resdata.result.realtime.power.substring(0,1))
    
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
                data: [power,power,power,power,power,power,power,power,power,power,power,power],
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
export { Wind }
