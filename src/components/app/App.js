import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Bbs from "../routes/Bbs";
import JinRi from "../routes/JinRi";
import Welcome from "../routes/Welcome";
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import logo from './logo.svg';
import MyForm from "../routes/MyForm";
import MyTable from "../routes/MyTable";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
/*import Products from '../routes/Products';
import MyList from "../routes/MyList";*/

export default class App extends Component {
    render() {
        var myStyle={
            userSelect:"none",
            draggable:"false"
        }
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                            <header className="App-header">
                                <Link to="/">
                                    <img src={logo} style={myStyle} className="App-logo" alt="logo" />
                                    <span style={myStyle} className="App-title">Welcome to React</span>
                                </Link>
                            </header>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['0']}
                                defaultOpenKeys={['0']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <Menu.Item key="0"><Link to="/option1"><Icon type="laptop"/>留言板</Link></Menu.Item>
                                <Menu.Item key="1"><Link to="/option2"><Icon type="smile"/>最新消息</Link></Menu.Item>
                                <SubMenu title={<span><Icon type="ant-design" />antd组件</span>}>
                                    <Menu.Item key="2"><Link to="/option3">测试表单</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/option4">测试表格</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 520}}>
                                <Route path="/" exact component={Welcome}/>
                                <Route path="/option1" component={Bbs}/>
                                <Route path="/option2" component={JinRi}/>
                                <Route path="/option3" component={MyForm}/>
                                <Route path="/option4" component={MyTable}/>
                                {/*<Route path="/option3" component={Products}/>
                                <Route path="/option2" component={MyList}/>*/}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
