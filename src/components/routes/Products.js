import React from 'react'
import { Table } from 'antd'

export default class myTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []

        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `宏福苑${i}`,
                age: 18,
                address: `北京市昌平区${i}号`,
                remark: 'www.baidu.com'
            })
        }

        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: '姓名',
            width: '25%',
            dataIndex: 'name'
        }, {
            title: '年龄',
            width: '25%',
            dataIndex: 'age',
        }, {
            title: '住址',
            width: '25%',
            dataIndex: 'address'
        }, {
            title: '备注',
            width: '25%',
            dataIndex: 'remark',
            render(text) {
                return <a href={text} target="_blank">博客园</a>
            }
       }]

        const { selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
        )
    }
}