import React from 'react';
import './citysite.css';

function Citysite() {
    const imglist = [{ where: "四川成都资中县龙山镇", time: "PM4:08:09 拍摄 2019-11-13", imgurl: "https://cdn.moji002.com/images/sthumb/2019/11/14/15737230080.32587100.1595_android.jpg" }, { where: "武侯区", time: "PM3:46:20 拍摄 2019-11-9", imgurl: "https://cdn.moji002.com/images/sthumb/2019/11/09/15732855790.87753900.1421_ifd.jpg" }, { where: "金堂县", time: "PM5:10:39 拍摄 2019-11-8", imgurl: "https://cdn.moji002.com/images/sthumb/2019/11/08/15732042580.51417400.1044_ifd.jpg" }, { where: "武侯区泰和二街", time: "AM11:19:48 拍摄 2019-11-5", imgurl: "https://cdn.moji002.com/images/sthumb/2019/11/14/15737309580.00338500.1007_android_1573730954324.jpg" }, { where: "成都", time: "PM2:31:58 拍摄 2019-10-9", imgurl: "https://cdn.moji002.com/images/sthumb/2019/10/10/15706387170.23264500.1276_win.jpg" }, { where: "成都", time: "PM2:27:31 拍摄 2019-10-9", imgurl: "https://cdn.moji002.com/images/sthumb/2019/10/10/15706386410.62794400.1716_win.jpg" }, { where: "成都", time: "PM1:12:55 拍摄 2019-10-9", imgurl: "https://cdn.moji002.com/images/sthumb/2019/10/10/15706384160.78086400.1920_win.jpg" }, { where: "成都", time: "AM11:09:00 拍摄 2019-10-9", imgurl: "https://cdn.moji002.com/images/sthumb/2019/10/10/15706381770.38778700.1573_win.jpg" }]
    const show = () => {
        const items = imglist.map((img, index) => {
            return <li key={index}>
                <a href="javascript:;">
                    <img className="siteimg" src={img.imgurl} alt="图片加载失败" />
                    <div className="citysiteimg-bg">
                        <p>
                            <span>{img.where}</span>
                            <span>{img.time}</span>
                        </p>
                    </div>
                </a>
            </li>
        });
        return items
    }
    return (
        <div className="citysite">
            <ul>
                {show()}
            </ul>
        </div>
    )
}

export default Citysite;