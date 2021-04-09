import React, { Component } from 'react';
import { Form, Table, Input, Button, Row, Col, TreeSelect, Select, Radio } from 'antd';

const { Option } = Select;

// const { Item } = Form;
class lightApplication extends Component {
  state = {
    ifmodel: true,
    // title: "新增",
    loading: false,
    // dataSource: [],
    Reset: '',
    params: {
      name: '',
      // appType: "",
      createTime: '',
      linkman: '',
      phone: '',
      approvalStatus: '0',
      // appMenuId: "",
      // appStatus: "",
      ifHome: '',
      // ifHot: '',
      // ifBigPicUrl: '',
      // pageNum: 1,
      // pageSize: 10,
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
    // treeData: []
  };

  addApplication = () => {
    this.setState({
      ifmodel: false,
    });
  };

  render() {
    const layout = {
      labelCol: {
        xxl: 8, // ≥1600px 响应式栅格
        xl: 8, // ≥1200px 响应式栅格
      },
      wrapperCol: {
        xxl: 16,
        xl: 16,
      },
    };

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
    // const { loading, dataSource, detailVisible, total, current, pageSize, visible, isAdd, lightData, title, disabled, menuVisible, menuData } = this.state
    // const {getFieldDecorator} = this.props.form
    return (
      <div>
        {this.state.ifmodel ? (
          <div>
            <Row gutter={16}>
              <Form {...layout} onSubmit={this.handleSubmit} className="form">
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
            </Row>
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
          //    model
          <div>
            {/* <h4>{this.state.title}</h4> */}

            <Form
              initialValues={{
                ifCarryUser: '0',
                ifHome: '1',
              }}
            >
              <Row>
                <Col span={11}>
                  <Form.Item
                    label="应用名称"
                    name="name"
                    rules={[{ required: true, message: '应用名称是必填项' }]}
                  >
                    <Input placeholder="请输入应用名称" />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item
                    label="回调地址"
                    name="callBackUrl"
                    rules={[
                      { required: true, message: '请输入授权回调地址！' },
                      {
                        pattern: /([hH][tT]{2}[pP]|[hH][tT]{2}[pP][sS]):\/\/([\w.]+\/?)\S*/,
                        message: '请输入正确的链接格式',
                      },
                    ]}
                  >
                    <Input placeholder="请输入回调地址" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item label="访问方式" name="ifCarryUser">
                    <Select placeholder="请选择访问方式">
                      <Option value="0">未认证</Option>
                      <Option value="1">访客</Option>
                      <Option value="2">已认证</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item
                    label="版本号"
                    name="version"
                    rules={[{ required: true, message: '请输入版本号' }]}
                  >
                    <Input placeholder="请输入版本号" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item
                    label="应用类别"
                    name="appType"
                    rules={[{ required: true, message: '请输入应用类别' }]}
                  >
                    <Select placeholder="请输入应用类别！">
                      {/* <Option value="0">未认证</Option>
                                            <Option value="1">访客</Option>
                                            <Option value="2">已认证</Option> */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item
                    label="应用状态"
                    name="appStatus"
                    rules={[{ required: true, message: '请输入应用状态！' }]}
                  >
                    <Select>
                      <Option value="0">启用</Option>
                      <Option value="1">禁用</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={11}>
                  <Form.Item
                    label="所属菜单"
                    name="appMenuId"
                    rules={[{ required: true, message: '请输入所属菜单' }]}
                  >
                    <Select placeholder="请输入所属菜单！">
                      {/* <Option value="0">未认证</Option>
                                            <Option value="1">访客</Option>
                                            <Option value="2">已认证</Option> */}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item label="是否首页" name="ifHome">
                    <Radio.Group>
                      <Radio value="0">是</Radio>
                      <Radio value="1">否</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default lightApplication;
