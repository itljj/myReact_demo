/*import $ from "jquery";*/
import React from "react";
import '../app/App.css';
import { Layout } from 'antd';
import ContentList from "./ContentList";
import ContentForm from "./ContentForm";
const { Footer, Content } = Layout;

var myDate =[{"text":"Life is brief, and then you die, you know？","time":"former...","name":"乔布斯"},
    {"text":"要有理想，但是不要理想化!","time":"former...","name":"柳传志"},
    {"text":"不要等到明天，明天太遥远，今天就行动。","time":"former...","name":"马云"}]
export default class Bbs extends React.Component {
    constructor(props){　/*添加构造函数*/
        super(props);
        this.state={data:myDate};
    }
    componentWillMount() {
        let data = JSON.parse(localStorage.getItem('key'));
        if (JSON.parse(localStorage.getItem('key'))===null){
            this.setState({data:myDate});
        }else {
            this.setState({data:data});
        }
    }
/*得到新的数据，重新设置组件的状态，如果状态发生变化，react会重新显示这个组件*/
    handleCommentSubmit = (comment) => {
        let comments= this.state.data,
            newComments= comments.concat(comment);//older+new
        localStorage.setItem("key",JSON.stringify(newComments));
        this.setState({data:newComments});  //重新设置组件状态
    }
    /*handleCommentSubmit(comment){
        let comments= this.state.data,
            newComments= comments.concat(comment);//older+new
        this.setState({data:newComments});  //重新设置组件状态
    }*/
    /*getComments(){
        fetch('myData.json').then((res)=>{
            if(res.ok){
                res.text().then((data)=>{
                    console.log(data);
                })
            }
        }).catch((res)=>{
            console.log(res.status);
        });
    }*/
    render() {
        return (
            <div>
                <Layout>
                    <Content><ContentList data={this.state.data} /></Content>
                    <Footer><ContentForm onCommentSubmit={this.handleCommentSubmit} /></Footer>{/*{this.handleCommentSubmit.bind(this)}*/}
                </Layout>
            </div>
        )
    }
}