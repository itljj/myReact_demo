import React from "react";
import { Table, Button, Popconfirm } from 'antd';
import '../app/App.css';

export default class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'name',
            dataIndex: 'name',
            width: '30%'
        }, {
            title: 'age',
            dataIndex: 'age',
        }, {
            title: 'address',
            dataIndex: 'address',
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {/*生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据*/
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                                <a>Delete</a>
                                {console.log("999"+record.key)}
                            </Popconfirm>
                        ) : null
                );
            }
        }];
        this.state = {
            dataSource: [{   /*指定表格的数据源 dataSource 为一个数组。*/
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
            }, {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
            }, {
                key: '2',
                name: 'Edward King 2',
                age: '32',
                address: 'London, Park Lane no. 2',
            }],
            count: 2
        };
    }
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];//所有数组数据
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}