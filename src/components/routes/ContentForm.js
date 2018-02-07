import React from "react";
import { Form, Button } from 'antd';
const FormItem = Form.Item;

export default class ContentForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let text = this.refs.text.value;
        let name = this.refs.name.value;
        let time = new Date().toLocaleTimeString();
        if(name.length === 0 || name.match(/^\s+$/g)){
            alert("请输入姓名");
        }else {
            if(text.length === 0 || text.match(/^\s+$/g)){
                alert("请输入留言内容");
            }else {
                this.props.onCommentSubmit({text,time,name});
                /*子组件->父组件　*/
            }
        }
    }
    render() {
        var notReSize = {
            resize:"none"
        }
        var MyStyle = {
            marginRight:"-15px"
        }
        return (
            <center>
                <Form style={MyStyle} layout="inline" onSubmit={this.handleSubmit}>{/*绑定事件->{this.handleSubmit.bind(this)}*/}
                    {/*按钮上可以添加：onClick(点击)、onKeydown(按下按键)、onCopy、onSubmit*/}
                    <FormItem>
                        <textarea cols={120} rows={1} style={notReSize} placeholder="姓名" ref="name"></textarea>
                    </FormItem>
                    <FormItem>
                        <textarea cols={120} placeholder="留言内容" ref="text"></textarea>
                    </FormItem>
                    <br/>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        添加留言
                    </Button>
                </Form>
            </center>
        );
    }
}