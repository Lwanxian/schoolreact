import React from 'react';
import './infohead.css';
import Breadcrumb from 'antd/lib/breadcrumb';

function Infohead() {

    return (
        <div className="infohead">
            <Breadcrumb separator="" className="infohead-nav">
                <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
                <Breadcrumb.Item href="/info">天气详情</Breadcrumb.Item>
                <Breadcrumb.Item href="#">关于我们</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
export default Infohead;