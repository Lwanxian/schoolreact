import React, { useEffect, useState } from 'react';
import './banner.css';
import Breadcrumb from 'antd/lib/breadcrumb';
import message from 'antd/lib/message';
import Space from 'antd/lib/space';
import { Menu, Dropdown } from 'antd';
import EnvironmentOutlined from '@ant-design/icons/EnvironmentOutlined';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:7001";

const Banner: React.FC<{ sendweather: any }> = ({ sendweather }) => {
    const [position, setposition] = useState<any>({ city: "...市", province: "...省", country: "...国", message: "...气" });
    const [time, settime] = useState<any>("00:00");
    const [quyu, setquyu] = useState<any>("金牛区");
    const [windobj, setwindobj] = useState<any>({ wind_dir: "风向", temp: "气温", feels_like: 11, rh: 11, text: 11 });
    const [quyulist, setquyulist] = useState<any>([{
        id: 510104
        , name: '锦江区'
    }, {
        id: 510105
        , name: '青羊区'
    }, {
        id: 510106
        , name: '金牛区'
    }, {
        id: 510107
        , name: '武侯区'
    }, {
        id: 510108
        , name: '成华区'
    }, {
        id: 510112
        , name: '龙泉驿区'
    }, {
        id: 510113
        , name: '青白江区'
    }, {
        id: 510114
        , name: '新都区'
    }, {
        id: 510115
        , name: '温江区'
    }, {
        id: 510116
        , name: '双流区'
    }, {
        id: 510117
        , name: '郫都区'
    }, {
        id: 510121
        , name: '金堂区'
    }, {
        id: 510129
        , name: '大邑区'
    }, {
        id: 510131
        , name: '蒲江区'
    }, {
        id: 510132
        , name: '新津区'
    }, {
        id: 510181
        , name: '都江堰区'
    }, {
        id: 510182
        , name: '彭州区'
    }, {
        id: 510183
        , name: '邛崃区'
    }, {
        id: 510184
        , name: '崇州区'
    },
    {
        id: 510185
        , name: '简阳区'
    }]);
    const success = () => {
        message.success({
            content: '普通ip定位成功!',
            className: 'custom-class',
            style: {
                textAlign: "center"
            },
        });
    };
    useEffect(() => {
        getposition();
        getweather();
    }, [])
    function handleMenuClick(e) {
        message.info(`查询${e.item.props.id}天气`);
        // console.log('click', e.item.props.id);
        // console.log(e.key);
        setquyu(e.item.props.id);
        getweather(e.key);
    }

    const menu = (() => {
        const items = quyulist.map((quyuitems) => {
            return <Menu.Item key={quyuitems.id} id={quyuitems.name} icon={<EnvironmentOutlined />}>
                {quyuitems.name}
            </Menu.Item>
        });
        return <Menu className="quyulist" onClick={handleMenuClick}>{items}</Menu>
    }
    );
    function getweather(key = 510106) {
        axios.get("/getweatherbaidu", {
            params: {
                "id": key,
            }
        })
            .then((res) => {
                console.log("请求成功", res.data);
                if (res.data.status == 0) {
                    console.log("status:", res.data.status);
                    sendweather(res.data.result);
                    setwindobj({ wind_dir: res.data.result.now.wind_dir, temp: res.data.result.now.temp, feels_like: res.data.result.now.feels_like, rh: res.data.result.now.rh, text: res.data.result.now.text })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    function getposition() {
        axios.get("/getposition")
            .then((res) => {
                console.log(res.data);
                if (res.data.status == 0) {
                    success();
                    setposition({ city: res.data.content.address_detail.city, province: res.data.content.address_detail.province, country: "中国", message: "天气" });
                    let newtime = new Date().toLocaleTimeString();
                    settime(newtime);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="banner">
            <div className="center clearfix">
                <div className="crumb_box clearfix">
                    <div className="crumb">
                        <Breadcrumb separator="">
                            <Breadcrumb.Item href="#"><p>{position.message}</p></Breadcrumb.Item>
                            <Breadcrumb.Item className="weizhi-i" href="#"><p><i></i></p></Breadcrumb.Item>

                            <Breadcrumb.Item href="#"><p>{position.country}</p></Breadcrumb.Item>
                            <Breadcrumb.Item className="weizhi-i" href="#"><p><i></i></p></Breadcrumb.Item>

                            <Breadcrumb.Item href="#"><p>{position.province}</p></Breadcrumb.Item>
                            <Breadcrumb.Item className="weizhi-i" href="#"><p><i></i></p></Breadcrumb.Item>

                            <Breadcrumb.Item href="#" className="lastcity">{position.city}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <Dropdown.Button className="myselectbtn" overlay={menu}>
                        {quyu}
                    </Dropdown.Button>
                </div>
                <div className="aqi_city">
                    <Space direction="vertical">
                        <p><i>
                            <img src="https://h5tq.moji.com/tianqi/assets/images/icon/aqi_addr.png" alt="图片加载失败" />
                        </i></p>
                        <p><em>{position.city}，{position.province}，{position.country}</em></p>
                        <p><span>{time} 更新</span></p>
                    </Space>
                </div>
                <div className="aqi_info">
                    <div className="aqi_info_bg uary_info_detail">
                        <div className="aqi_info_detail">
                            <em style={{ fontSize: "74px", paddingTop: "66px" }}>{windobj.wind_dir}</em>
                            <span style={{ fontSize: "64px", color: "#F39800" }}>{windobj.temp}°C</span>
                        </div>
                    </div>
                    <dl className="aqi_info_tips">
                        <dt>温馨提醒 :</dt>
                        <dd>今天天气{windobj.text}，当前气温{windobj.temp}C°，体感温度{windobj.feels_like}C°，相对湿度{windobj.rh}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Banner;