
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import * as echarts from 'echarts';
import Location from './air_location';
import Bottom from '../bottom/bottom'



function Quality() {
    interface mytype { resultcode: string, reason: string, result: null, error_code: number };
    let mydata: any = useLocation().state as mytype;
    console.log(Number(mydata.no2));

    const [t, sett] = useState<any>("")
    const [a1, seta1] = useState<any>("")
    const [at, setat] = useState<any>("")

    const [a2, seta2] = useState<any>("")
    const [a3, seta3] = useState<any>("")
    const [a4, seta4] = useState<any>("")
    const [a5, seta5] = useState<any>("")
    const [a6, seta6] = useState<any>("")

    useEffect(() => {
        sett(new Date().toLocaleDateString());
        airquality();
        show()

    }, [])
    function airquality() {
        axios.get("http://localhost:7001/getairquality", {
        })
            .then((res) => {
                let a = res.data;
                seta1(a.air);
                setat(a.air_tips)

                seta2(a.no2);
                seta3(a.o3);
                seta4(a.pm10);
                seta5(a.pm25);
                seta6(a.so2);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    var chartDom = useRef<any>();
    const show = () => {
        var myChart = echarts.init(chartDom.current);
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['NO₂', 'O₃', 'PM10', 'PM2.5', 'SO₂']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [Number(mydata.no2), Number(mydata.o3), Number(mydata.pm10), Number(mydata.pm25), Number(mydata.so2)],
                type: 'line'
            }]
        };

        option && myChart.setOption(option);
    }

    return (
        <div className="myaircontent">
            <Location></Location>
            <div className="disquality">
                <div className="airindex">{a1}</div>
                <span>小贴士：{at}</span>
                <div className='airPm'>
                    <div className="airpm">
                        <span>NO₂</span>
                        <span>{a2}</span>
                    </div>
                    <div className="airpm">
                        <span>O₃</span>
                        <span>{a3}</span>
                    </div>
                    <div className="airpm">
                        <span>PM10</span>
                        <span>{a4}</span>
                    </div>
                    <div className="airpm">
                        <span>PM2.5</span>
                        <span>{a5}</span>
                    </div>
                    <div className="airpm">
                        <span>SO₂</span>
                        <span>{a6}</span>
                    </div>
                </div>
                <div>发布时间：{t}</div>

                <div className="airtrend" ref={chartDom} >
                </div>
            </div>
            <Bottom></Bottom>
        </div>
    )
}
export default Quality;