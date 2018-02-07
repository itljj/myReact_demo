import React from "react";
import { Icon } from 'antd';
export default class Welcome extends React.Component{
    render(){
        var myStyle1 = {
            display:'flex',
            justifyContent:'center',
            marginTop:'20%'
        };
        var myStyle = {
            paddingLeft:'10px',
            fontSize:'36px',
            justifyContent:'center',
            alignItems:'center'
        };
        return(
            <div style={myStyle1}>
                <div style={myStyle}>
                    <Icon type="smile-o" style={{color:"red",fontWeight:"700"}}/>&nbsp;<i style={{color:"#000",fontWeight:"700",userSelect:"none"}}>Welcome</i>
                </div>
            </div>
        )
    }
}
