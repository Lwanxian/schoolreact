import React from "react";
import  Menu  from 'antd/lib/menu';
const { SubMenu } = Menu;


function Nav(){

        return (
          <Menu mode="horizontal" className="nav" >
            <Menu.Item key="index">
              天气 
            </Menu.Item>
         
          
          </Menu>
        );
     
}
 

export {Nav}
