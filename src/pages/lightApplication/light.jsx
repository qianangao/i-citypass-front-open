import React, { Component } from 'react';
import {
  Form,
  Table,
  Input,
  Button,
  Row,
  Col,
  TreeSelect,
  // Select,
} from 'antd';
import Linght from '../../components/light/light';
import './light.less';

// const { Item } = Form;
class lightApplication extends Component {
  state = {
    ifmodel: true,
    // title: "新增",
    // dataSource: [],
    Reset: '',
    params: {
      name: '',
      // appType: "",
      createTime: '',
      linkman: '',
      phone: '',
      approvalStatus: '0',
      ifHome: '',
      appType: '',
    },
    // total: 0,
    // pageSize: 10,
    // current: 1,
    // visible: false,
    // title: "",
    // lightData: {},
    // isAdd: false,
    // disabled: false,
    // menuVisible: false,
    // examVisible: false,
    // detailVisible: false,
    // menuData: {},
    // childrenSelect: [],
    // appMenuId: "",
    // treeData: [],
  };

  // 打开新增
  addApplication = () => {
    this.setState({
      ifmodel: false,
    });
  };

  // 关闭新增框
  down = () => {
    this.setState({
      ifmodel: true,
    });
  };

  render() {
    const columns = [
      {
        title: '序号',
        key: 'id',
        render: (text, render, index) => `${index + 1}`,
        width: 60,
        align: 'center',
      },
      {
        title: '应用名称',
        dataIndex: 'name',
        id: 'name',
        align: 'center',
      },
      {
        title: '应用图标',
        dataIndex: 'icon',
        id: 'icon',
        align: 'center',
        // render: val => <img src={imgReadUrl + val} alt="图标" style={{ width: 80, height: 80 }} />
      },
      {
        title: '所属菜单',
        dataIndex: 'appMenuName',
        id: 'appMenuName',
        align: 'center',
      },
      {
        title: '应用类别',
        dataIndex: 'appType',
        id: 'appType',
        align: 'center',
        render: (val) => <span>{val === '1' ? '自主开发' : '平台开发'}</span>,
      },
      {
        title: '是否大图',
        dataIndex: 'ifBigPicUrl',
        id: 'ifBigPicUrl',
        align: 'center',
        render: (text) => <span>{text === '0' ? '是' : '否'}</span>,
      },
      {
        title: '联系电话',
        dataIndex: 'phone',
        id: 'phone',
        align: 'center',
      },
      {
        title: '联系人',
        dataIndex: 'linkman',
        id: 'linkman',
        align: 'center',
      },
      {
        title: '审核状态',
        dataIndex: 'approvalStatus',
        id: 'approvalStatus',
        align: 'center',
        // render: text => <span>{text === '0' ? '待审核' : text === "1" ? '通过' : '驳回'}</span>
        // render: text => {
        //   if (text === '0') {
        //     return "待审核"
        //   } else if (text === '1') {
        //     return "通过"
        //   } else {
        //     return "驳回"
        //   }
        // }
      },
      {
        title: '操作',
        id: 'action',
        align: 'center',
        width: 150,

        render: (text, record) => (
          <span>
            <Button type="link" onClick={() => this.handleShow(record)} size="small">
              审核
            </Button>
            <Button type="link" onClick={() => this.handleEdit(record)} size="small">
              编辑
            </Button>
          </span>
        ),
      },
    ];

    return (
      <div>
        {this.state.ifmodel ? (
          <div>
            <Form onSubmit={this.handleSubmit} className="form">
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item label="应用名称">
                    <Input placeholder="请输入应用名称" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="所属菜单">
                    <TreeSelect treeData={this.state.treeData} placeholder="请选择所属菜单" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="联系人">
                    <Input placeholder="请输入联系人" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ marginRight: 2 }}>
                      查询
                    </Button>
                    <Button type="primary" htmlType="reset" onClick={this.handleReset}>
                      重置
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <div className="AddBtn">
              <Button type="primary" onClick={this.addApplication}>
                新增轻应用
              </Button>
            </div>
            <Table
              rowKey={'id'}
              columns={columns}
              // dataSource={dataSource}
              pagination={false}
              //   loading={loading}
            ></Table>
          </div>
        ) : (
          <Linght down={this.down} />
        )}
      </div>
    );
  }
}

export default lightApplication;
