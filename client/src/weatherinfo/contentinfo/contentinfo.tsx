import Breadcrumb from 'antd/lib/breadcrumb';
import './contentinfo.css';

const Contentinfo: React.FC<any> = ({ getweatherdata }) => {
    // const [weather, setweather] = useState<any>({ location: { country: "中国", province: "四川省", city: "成都市", name: "金牛", id: "510106" }, "now": { "text": "阴", "temp": 22, "feels_like": 25, "rh": 61, "wind_class": "2级", "wind_dir": "东北风", "uptime": "20210318180000" }, forecasts: [{ "text_day": "小雨", "text_night": "阴", "high": 21, "low": 13, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-18", "week": "星期四" }, { "text_day": "阴", "text_night": "小雨", "high": 19, "low": 10, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-19", "week": "星期五" }, { "text_day": "小雨", "text_night": "小雨", "high": 17, "low": 8, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-20", "week": "星期六" }, { "text_day": "阴", "text_night": "阵雨", "high": 15, "low": 6, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-21", "week": "星期日" }, { "text_day": "多云", "text_night": "多云", "high": 16, "low": 8, "wc_day": "<3级", "wd_day": "静风", "wc_night": "<3级", "wd_night": "静风", "date": "2021-03-22", "week": "星期一" }] })
    // if (getweatherdata.forecasts != undefined && getweatherdata.now != undefined) {
    //     console.log(getweatherdata);
    // }
    // else {

    // }
    return (
        <div className="contentinfo">
            <div className="contentmain">
                <div className="contentmain-title">
                    <Breadcrumb separator="">
                        <Breadcrumb.Item >
                            7天预报<span>|</span>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                            15天预报<span>|</span>
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>30天预报</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="contentmain-info today">
                    <div className="contentmain-info-title">
                        今天
                    </div>
                    <div className="contentmain-info-type">
                        <i><img src="https://h5tq.moji.com/tianqi/assets/images/weather/w1.png" alt="" /></i>
                        <span>{getweatherdata.forecasts[0].text_day}</span>
                    </div>
                    <div className="contentmain-info-temperature">
                        {getweatherdata.forecasts[0].low}° / {getweatherdata.forecasts[0].high}°
                    </div>
                    <div className="contentmain-info-air">
                        <i className="level_2">{getweatherdata.now.wind_dir}</i>
                        <span>{getweatherdata.now.wind_class}</span>
                    </div>
                    <div className="contentmain-info-hid today">
                        <b>温馨提示</b>
                        <span>白天和夜晚</span>
                        <p>今天刮的是{getweatherdata.now.wind_dir}，相对湿度{getweatherdata.now.rh}，体感温度{getweatherdata.now.feels_like}°，白天风力{getweatherdata.forecasts[0].wc_day}，属于{getweatherdata.forecasts[0].wd_day}，夜晚{getweatherdata.forecasts[0].wd_night}，风力等级{getweatherdata.forecasts[0].wc_night}</p>
                    </div>
                </div>
                <div className="contentmain-info tomorrow">
                    <div className="contentmain-info-title">
                        明天
                    </div>
                    <div className="contentmain-info-type">
                        <i><img src="https://h5tq.moji.com/tianqi/assets/images/weather/w7.png" alt="" /></i>
                        <span>{getweatherdata.forecasts[1].text_day}</span>
                    </div>
                    <div className="contentmain-info-temperature">
                        {getweatherdata.forecasts[1].low}° / {getweatherdata.forecasts[1].high}°
                    </div>
                    <div className="contentmain-info-air">
                        <i className="level_3">{getweatherdata.forecasts[1].week}</i>
                        <span>{getweatherdata.forecasts[1].date}</span>
                    </div>
                    <div className="contentmain-info-hid tomorrow">
                        <b>温馨提示</b>
                        <span>白天和夜晚</span>
                        <p>明天是{getweatherdata.forecasts[1].week}，{getweatherdata.forecasts[1].text_day == getweatherdata.forecasts[1].text_night ? `天气${getweatherdata.forecasts[1].text_night}` : `${getweatherdata.forecasts[1].text_day}转${getweatherdata.forecasts[1].text_night}`}，白天风力{getweatherdata.forecasts[1].wc_day}，属于{getweatherdata.forecasts[1].wd_day}，夜晚{getweatherdata.forecasts[1].wd_night}，风力等级{getweatherdata.forecasts[1].wc_night}</p>
                    </div>
                </div>
                <div className="contentmain-info thedayaftertomorrow">
                    <div className="contentmain-info-title">
                        后天
                    </div>
                    <div className="contentmain-info-type lastchild">
                        <i><img src="https://h5tq.moji.com/tianqi/assets/images/weather/w7.png" alt="" /></i>
                        <span>{getweatherdata.forecasts[2].text_day}</span>
                    </div>
                    <div className="contentmain-info-temperature lastchild">
                        {getweatherdata.forecasts[2].low}° / {getweatherdata.forecasts[2].high}°
                    </div>
                    <div className="contentmain-info-air">
                        <i className="level_3">{getweatherdata.forecasts[2].week}</i>
                        <span>{getweatherdata.forecasts[2].date}</span>
                    </div>
                    <div className="contentmain-info-hid thedayaftertomorrow">
                        <b>温馨提示</b>
                        <span>白天和夜晚</span>
                        {/* {`${getweatherdata.forecasts[2].text_day}==${getweatherdata.forecasts[2].text_night}?${getweatherdata.forecasts[2].text_night}:${getweatherdata.forecasts[2].text_day}转${getweatherdata.forecasts[2].text_night}`}， */}
                        <p>后天是{getweatherdata.forecasts[2].week}，{getweatherdata.forecasts[2].text_day == getweatherdata.forecasts[2].text_night ? `天气${getweatherdata.forecasts[2].text_night}` : `${getweatherdata.forecasts[2].text_day}转${getweatherdata.forecasts[2].text_night}`}，白天风力{getweatherdata.forecasts[2].wc_day}，属于{getweatherdata.forecasts[2].wd_day}，夜晚{getweatherdata.forecasts[2].wd_night}，风力等级{getweatherdata.forecasts[2].wc_night}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contentinfo;