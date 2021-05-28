import React, { useContext, useEffect, useState } from "react";
import normal from "../img/normal.png";
import shine from "../img/shine.png";
import car from "../img/car.png";
import coldbox from "../img/coldbox.png";
import fish from "../img/fish.png";
import lipstick from "../img/lipstick.png"
import traffic from "../img/traffic.png"
import ball from "../img/ball.png";
import cloth from "../img/cloth.png";
import axios from 'axios';
import {useHistory} from "react-router-dom"; 
function Live() {
    const [shushidu, setshushidu] = useState<any>("");
    const [chuanyi, setchuanyi] = useState<any>("");
    const [diaoyu, setdiaoyu] = useState<any>("");
    const [ganmao, setganmao] = useState<any>("");
    const [ziwaixian, setziwaixian] = useState<any>("");
    const [xiche, setxiche] = useState<any>("");
    const [yundong, setyundong] = useState<any>("");
    const [daisan, setdaisan] = useState<any>("");
    const [kongtiao, setkongtiao] = useState<any>("");
    const [guomin, setguomin] = useState<any>("");
    const history = useHistory()

    useEffect(() => {
        bbb()
    }, [])
    function bbb() {
        axios.get("http://localhost:7001/getlive", {
            params: {
                city: "成都",
                key: '9db342eb452009d6399eec2bdeefc424'
            }
        }).then(function (res) {
            console.log(res);
            let life = res.data.result.life
            setshushidu(life.shushidu.v);
            setchuanyi(life.chuanyi.v);
            setdiaoyu(life.diaoyu.v);
            setganmao(life.ganmao.v);
            setziwaixian(life.ziwaixian.v);
            setxiche(life.xiche.v);
            setyundong(life.yundong.v);
            setdaisan(life.daisan.v);
            setkongtiao(life.kongtiao.v);
            setguomin(life.guomin.v);

        })
            .catch(function (error) {
                console.log(error);

            });;


    }
    
    function toinfo() {
        history.push("/info")
    }

    return (
        <div className="mycontainer">
            <div className="choseline">
                <div className="choseleft">生活指数</div>
            </div>
            <div className="mylive">
                <ul onClick={toinfo}>
                    <li><img src={lipstick} alt="" />
                        <div>
                            <dl className="changecolor" >控油</dl>
                            <dl>化妆</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>广场舞</dl>
                        </div>
                    </li>
                    <li><img src={fish} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>钓鱼</dl>
                        </div>
                    </li>
                    <li><img src={traffic} alt="" />
                        <div>
                            <dl className="changecolor">良好</dl>
                            <dl>交通</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>划船</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">较适宜</dl>
                            <dl>啤酒</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">较不适宜</dl>
                            <dl>夜生活</dl>
                        </div>
                    </li>
                    <li><img src={car} alt="" />
                        <div>
                            <dl className="changecolor">{xiche}</dl>
                            <dl>洗车</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>约会</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">级适宜</dl>
                            <dl>美发</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{shushidu}</dl>
                            <dl>舒适度</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{kongtiao}</dl>
                            <dl>空调</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>逛街</dl>
                        </div>
                    </li>
                    <li><img src={coldbox} alt="" />
                        <div>
                            <dl className="changecolor">{ganmao}</dl>
                            <dl>感冒</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{ziwaixian}</dl>
                            <dl>防晒</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{daisan}</dl>
                            <dl>雨伞</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>晨练</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>旅游</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{guomin}</dl>
                            <dl>过敏</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{diaoyu}</dl>
                            <dl>晾晒</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{yundong}</dl>
                            <dl>放风筝</dl>
                        </div>
                    </li>
                    <li><img src={ball} alt="" />
                        <div>
                            <dl className="changecolor">{yundong}</dl>
                            <dl>运动</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{ganmao}</dl>
                            <dl>风寒</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">不宜中暑</dl>
                            <dl>中暑</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{yundong}</dl>
                            <dl>狗狗</dl>
                        </div>
                    </li>
                    <li><img src={normal} alt="" />
                        <div>
                            <dl className="changecolor">{yundong}</dl>
                            <dl>猫咪</dl>
                        </div>
                    </li>
                    <li><img src={shine} alt="" />
                        <div>
                            <dl className="changecolor">{ziwaixian}</dl>
                            <dl>紫外线</dl>
                        </div>
                    </li>
                    <li><img src={cloth} alt="" />
                        <div>
                            <dl className="changecolor">{chuanyi}</dl>
                            <dl>穿衣</dl>
                        </div>
                    </li>



                </ul>
            </div>
        </div>
    )
}
export { Live }