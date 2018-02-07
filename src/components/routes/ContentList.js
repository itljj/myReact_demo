import React from "react";
import Comment from "./Comment";
export default class CommentList extends React.Component{
    render(){
        var myStyle = {
            borderWidth:1,
            marginTop:'20px',
            borderColor:'#dcdcdc',
            borderStyle:'solid',
            width:'80%',
            minHeight:'300px',
            textAlign:'left',
            padding:'20px'
        };
        let commentNodes = this.props.data.map((comment,index) => {
            return(
                <Comment key={index} time={comment.time} name={comment.name}>
                    {comment.text}
                </Comment>
            );
        })
        return(
            <center>
                <br/>
                <h1><b>留言板</b></h1>
                <div style={myStyle}>
                    {commentNodes}
                </div>
            </center>
        );
    }
}
