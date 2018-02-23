import React from "react";
import { Divider, Badge } from 'antd';
/*默认为水平分割线，可在中间加入文字。<Divider type="vertical">text</Divider>
用于表示状态的小圆点。(Success、Error、Default、Processing、Warning)*/
export default class Comment extends React.Component{
    render(){
        var myStyle = {
            marginTop:'0px'
        };
        var myStyle1 = {
            paddingLeft:'10px',
            fontSize:'16px'
        };
        var myStyle2 = {
            marginRight:'10px',
            fontSize:'14px',
            color:' #0000ff',
            display: 'flex',
            justifyContent:"flex-end"
        };
        return(
            <div id="root">
                <div style={myStyle1}>
                    <i style={{color:"#992222",fontWeight:"700"}} className="aa">{this.props.name}</i>：<br/>“
                    {this.props.children}”
                    <i style={myStyle2}><Badge status="processing" text={this.props.time} /></i>
                </div>
                <Divider style={myStyle} />
            </div>
        )
    }
}
