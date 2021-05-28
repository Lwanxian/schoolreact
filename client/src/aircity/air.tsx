import React from 'react';
import { Layout } from 'antd';
import './airc.css';
import Location from './air_location';
import Quality from './air_quality';
function Air() {
    const { Footer, Content } = Layout;
    return (
        <Layout>
       
            <Content className="myaircontent">
                <Location></Location>
                <Quality></Quality>
            </Content>
            <Footer className="air_foot">☼随心天气</Footer>
        </Layout>
    )
}
export default Air;