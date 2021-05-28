import React, { useState } from 'react';
import './Info.css';
import Infohead from './infohead/infohead';
import Banner from './banner/banner';
import Contentinfo from './contentinfo/contentinfo';
import Citysite from './citysite/citysite';

function Info() {
    const [weatherdata, setweatherdata] = useState({ location: { country: "中国", province: "四川省", city: "成都市", name: "金牛", id: "510106" }, "now": { "text": "阴", "temp": 22, "feels_like": 25, "rh": 61, "wind_class": "2级", "wind_dir": "东北风", "uptime": "20210318180000" }, forecasts: [{ "text_day": "小雨", "text_night": "阴", "high": 21, "low": 13, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-18", "week": "星期四" }, { "text_day": "阴", "text_night": "小雨", "high": 19, "low": 10, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-19", "week": "星期五" }, { "text_day": "小雨", "text_night": "小雨", "high": 17, "low": 8, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-20", "week": "星期六" }, { "text_day": "阴", "text_night": "阵雨", "high": 15, "low": 6, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-21", "week": "星期日" }, { "text_day": "多云", "text_night": "多云", "high": 16, "low": 8, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-22", "week": "星期一" }] });
    function sendweathervoid(params: any) {
        setweatherdata(params);
    }
    return (
        <div>
            <Infohead />
            <Banner sendweather={sendweathervoid} />
            <Contentinfo getweatherdata={weatherdata} />
            <Citysite />
        </div>
    )
}

export default Info;