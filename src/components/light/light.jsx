import React, { Component } from 'react';
import {
  Form,
  // Table,
  Input,
  Button,
  Row,
  Col,
  // TreeSelect,
  Select,
  Radio,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

class light extends Component {
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
    Reset: '',
    params: {
      name: '',
      createTime: '',
      linkman: '',
      phone: '',
      approvalStatus: '0',
      ifHome: '',
      appType: '',
    },
  };

  // 新增框点击确认
  onOk2 = () => {
    this.setState({
      ifmodel: true,
    });
  };

  // 关闭新增框
  handleCancel2 = () => {
    this.props.down();
    this.setState({
      ifmodel: true,
    });
  };

  // 大图切换
  RadioChange = (e) => {
    this.setState({
      ifBigPicUrl: e.target.value,
    });
  };

  // beforeUpload = (file) => {
  //   const isJpgOrPng =
  //     file.type === "image/jpeg" ||
  //     file.type === "image/png" ||
  //     file.type === "image/jpg";
  //   if (!isJpgOrPng) {
  //     message.error("只能上传jpg/png/jpeg格式的缩略图!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 5;
  //   if (!isLt2M) {
  //     message.error("图片不能超过5MB!");
  //   }
  //   return isJpgOrPng && isLt2M;
  // };

  // handleChange = (info) => {
  //   console.log(info)
  //   if (info.file.status === "uploading") {
  //     this.setState({ loading: true });
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     this.setState({
  //       icon: info.file.response.data,
  //       loading: false,
  //     });
  //   }
  // };

  render() {
    const props = {
      name: 'file',
      listType: 'picture-card',
      headers: {
        //   Authorization: `Bearer ${storageUtils.getToken()}`,
      },
      showUploadList: false,
      // action: uploadIconUrl,
    };
    const icon = undefined;
    const bigIcon = undefined;
    const imgReadUrl = '';
    const imgUrl = imgReadUrl + icon;
    // const bigImg = this.state.ifBigPicUrl || ifBigPicUrl;
    const bigIconimg = imgReadUrl + bigIcon;

    let appicon;
    if (this.state.icon) {
      appicon = (
        <img src={imgReadUrl + this.state.icon} alt="avatar111" style={{ width: '100%' }} />
      );
    } else if (icon) {
      appicon = <img src={imgUrl} alt="avatar2222" style={{ width: '100%' }} />;
    } else {
      appicon = <PlusOutlined />;
    }

    let bigappicon;
    if (this.state.bigIcon) {
      bigappicon = (
        <img src={imgReadUrl + this.state.bigIcon} alt="avatar" style={{ width: '100%' }} />
      );
    } else if (icon) {
      bigappicon = <img src={bigIconimg} alt="avatar2222" style={{ width: '100%' }} />;
    } else {
      bigappicon = <PlusOutlined />;
    }

    return (
      <div>
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
                <Form.Item
                  label="应用图标"
                  name="icon"
                  rules={[{ required: true, message: '请输入图标！' }]}
                >
                  <>
                    <Upload
                      className="avatar-uploader"
                      {...props}
                      beforeUpload={this.beforeUpload}
                      onChange={this.handleChange}
                    >
                      {appicon}
                    </Upload>
                    <span style={{ fontSize: 10 }}>
                      图标分辨率:200*200，只能上传jpg/png/jpeg格式,且不超过5MB!
                    </span>
                  </>
                </Form.Item>
              </Col>

              <Col span={11}>
                {this.state.ifBigPicUrl === '0' ? (
                  <Form.Item
                    label="大图图标"
                    name="icon"
                    rules={[{ required: true, message: '请输入大图！' }]}
                  >
                    <Upload
                      className="avatar-big-uploader"
                      {...props}
                      beforeUpload={this.beforeUpload}
                      onChange={this.handleChange}
                    >
                      {bigappicon}
                    </Upload>
                    <span style={{ fontSize: 10 }}>
                      大图分辨率：750*252，只能上传jpg/png/jpeg格式，且不超过5MB!
                    </span>
                  </Form.Item>
                ) : (
                  ''
                )}
              </Col>
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
      </div>
    );
  }
}

export default light;
