import React, { Component } from 'react';
import {
  Form,
  Table,
  Input,
  Button,
  Row,
  Col,
  TreeSelect,
  Select,
  Radio,
  // Upload
} from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import './light.less';

const { Option } = Select;
const { TextArea } = Input;
// const { Item } = Form;
class lightApplication extends Component {
  state = {
    ifBigPicUrl: '1',
    // bigLoading: false,
    bigIcon: '',
    treeData: [],
    icon: '',
    // loading: false,
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
    // treeData: [],
  };

  // 新增框点击确认
  onOk2 = () => {
    this.setState({
      ifmodel: true,
    });
  };

  // 打开新增
  addApplication = () => {
    this.setState({
      ifmodel: false,
    });
  };

  // 关闭新增
  RadioChange = (e) => {
    this.setState({
      ifBigPicUrl: e.target.value,
    });
  };

  // 关闭新增框
  handleCancel2 = () => {
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
    // const props = {
    //     name: "file",
    //     listType: "picture-card",
    //     headers: {
    //         //   Authorization: `Bearer ${storageUtils.getToken()}`,
    //     },
    //     showUploadList: false,
    //     // action: uploadIconUrl,
    // };
    // const icon = undefined
    // const bigIcon = undefined
    // const imgReadUrl = ''
    // const imgUrl = imgReadUrl + icon;
    //   const bigImg = this.state.ifBigPicUrl || ifBigPicUrl;
    // const bigIconimg = imgReadUrl + bigIcon;
    // const { loading, dataSource, detailVisible, total, current, pageSize, visible, isAdd, lightData, title, disabled, menuVisible, menuData } = this.state
    // const {getFieldDecorator} = this.props.form

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
          <div>
            {/* <h4>{this.state.title}</h4> */}
            <Form
              initialValues={{
                ifCarryUser: '0',
                ifHome: '1',
                appStatus: '0',
                ifHot: '1',
                ifBigPicUrl: '1',
              }}
            >
              <Row gutter={16}>
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
              <Row gutter={16}>
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
              <Row gutter={16}>
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
              <Row gutter={16}>
                <Col span={11}>
                  <Form.Item
                    label="所属菜单"
                    name="appMenuId"
                    rules={[{ required: true, message: '请输入所属菜单' }]}
                  >
                    <Select placeholder="请输入所属菜单！"></Select>
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
              <Row gutter={16}>
                <Col span={11}>
                  <Form.Item
                    label="联系人姓名"
                    name="linkman"
                    rules={[{ required: true, message: '请输入联系人姓名' }]}
                  >
                    <Input placeholder="请输入联系人姓名" />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item label="是否热门" name="ifHot">
                    <Radio.Group>
                      <Radio value="0">是</Radio>
                      <Radio value="1">否</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={11}>
                  <Form.Item
                    label="联系电话"
                    name="phone"
                    rules={[
                      { required: true, message: '请输入联系电话' },
                      {
                        pattern: new RegExp(/^1[3|4|5|6|7|8|9][0-9]\d{8}$/),
                        message: '请输入正确格式的电话号码',
                      },
                    ]}
                  >
                    <Input placeholder="请输入联系电话" maxLength={11} />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item label="是否大图" name="ifBigPicUrl">
                    <Radio.Group onChange={this.RadioChange}>
                      <Radio value="0">是</Radio>
                      <Radio value="1">否</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={11}>
                  <Form.Item
                    label="所属委办局"
                    name="deptId"
                    rules={[{ required: true, message: '请选择所属委办局' }]}
                  >
                    <Select placeholder="请选择所属委办局"></Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={11}>
                  {/* <Form.Item
                                        label="应用图标"
                                        name="icon"
                                        rules={[{ required: true, message: '请输入图标！' }]}>
                                        <>
                                            <Upload
                                                className="avatar-uploader"
                                                {...props}
                                                beforeUpload={this.beforeUpload}
                                                onChange={this.handleChange}
                                            >
                                                
                                                {this.state.icon ? (
                                                    <img
                                                        src={imgReadUrl + this.state.icon}
                                                        alt="avatar111"
                                                        style={{ width: "100%" }}
                                                    />
                                                ) : icon ? (
                                                    <img
                                                        src={imgUrl}
                                                        alt="avatar2222"
                                                        style={{ width: "100%" }}
                                                    />
                                                ) : (
                                                    <div>
                                                        <PlusOutlined />

                                                        {/* <Icon
                              type={this.state.loading ? "loading" : "PlusOutlined "}
                            /> */}
                  {/* <div className="ant-upload-text"></div>
                                                    </div>
                                                )}
                                            </Upload>
                                            <span style={{ fontSize: 10 }}>
                                                图标分辨率:200*200，只能上传jpg/png/jpeg格式,且不超过5MB!
                      </span>
                                        </>
                                    </Form.Item> */}
                </Col>

                {/* <Col span={11}>
                                    {this.state.ifBigPicUrl === '0' ? <Form.Item
                                        label="大图图标"
                                        name="icon"
                                        rules={[{ required: true, message: '请输入大图！' }]}>

                                        <Upload
                                            className="avatar-big-uploader"
                                            {...props}
                                            beforeUpload={this.beforeUpload}
                                            onChange={this.handleChange}
                                        >
                                            {this.state.bigIcon ? (
                                                <img
                                                    src={imgReadUrl + this.state.bigIcon}
                                                    alt="avatar"
                                                // style={{ width: "100%" }}
                                                />
                                            ) : bigIcon ? (
                                                <img
                                                    src={bigIconimg}
                                                    alt="avatar2222"
                                                    style={{ width: "100%" }}
                                                />
                                            ) : (
                                                <div>
                                                    <PlusOutlined />

                                                    {/* <Icon
                              type={this.state.loading ? "loading" : "PlusOutlined "}
                            /> */}
                {/* <div className="ant-upload-text"></div>
                                                </div>
                                            )}
                                        </Upload>
                                        <span style={{ fontSize: 10 }}>
                                            大图分辨率：750*252，只能上传jpg/png/jpeg格式，且不超过5MB!
                      </span>

                                    </Form.Item> : ''}
                                </Col> */}
              </Row>
              <Row gutter={16}>
                <Col span={22}>
                  <Form.Item label="应用简介" name="content">
                    <TextArea
                      style={{ resize: 'none' }}
                      maxLength={200}
                      rows={3}
                      placeholder="请输入应用简介"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <div className="btnox">
                  <Button onClick={this.onOk2} className="okbtn" type="primary">
                    确认
                  </Button>
                  <Button onClick={this.handleCancel2}>取消</Button>
                </div>
              </Row>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default lightApplication;
