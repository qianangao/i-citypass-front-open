import React, { Component } from 'react';
import {
  Form,
  // Table,
  Input,
  Button,
  Row,
  Col,
  TreeSelect,
  Select,
  Radio,
  Upload,
  message,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import { picimgurl } from '../../utils/utils';

const { Option } = Select;
const { TextArea } = Input;

class light extends Component {
  formRef = React.createRef();

  state = {
    ifwx: '',
    shuoshuSelect: [],
    DictData: [],
    treeData: [],
    ifBigPicUrl: '',
    // bigLoading: false,
    bigIcon: '',
    icon: '',
    // loading: false,
    ifmodel: true,
    // title: "新增",
    loading: false,
    Reset: '',
  };

  componentDidMount() {
    this.treelist();
    this.getdept();
    this.getDictData();
  }

  // 组件卸载之后清除异步组织内存泄露
  componentWillUnmount() {
    this.setState = () => false;
  }

  // 获取所属委办局
  getdept = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'lihghtList/dept',
    }).then((res) => {
      if (res.code === 200) {
        const children = [];
        res.data.map((item) => {
          return children.push(
            <Option key={item.deptId} value={item.deptId}>
              {item.type}
              {item.deptName}
            </Option>,
          );
        });

        this.setState({
          shuoshuSelect: children,
        });
      }
    });
  };

  // 获取类别
  getDictData = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'lihghtList/DictData',
    }).then((res) => {
      if (res.code === 200) {
        const children = [];
        res.data.map((item) => {
          return children.push(
            <Option key={item.dictValue} value={item.dictValue}>
              {item.dictLabel}
            </Option>,
          );
        });

        this.setState({
          DictData: children,
        });
      }
    });
  };

  treelist = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'lihghtList/menuTree',
    }).then((res) => {
      if (res.code === 200) {
        for (let i = 0; i < res.data.length; i += 1) {
          res.data[i].value = res.data[i].id;
          res.data[i].title = res.data[i].menuName;
          res.data[i].key = res.data[i].id;
          res.data[i].disabled = true;
          if (res.data[i].children) {
            this.getTree(res.data[i].children);
          }
        }
        const treeData = [];
        treeData.push(res.data);
        let data = [];
        data = this.changeData(treeData[0]);
        this.setState({ treeData: data });
      }
    });
  };

  // 递归处理treeData
  changeData = (data) => {
    const jsonObj = data;
    jsonObj.forEach((item) => {
      if (item.children && Array.isArray(item.children)) {
        this.changeData(item.children);
      }
    });
    return jsonObj;
  };

  getTree = (data) => {
    data.forEach((item) => {
      item.key = item.id;
      item.title = `${item.type}- ${item.menuName}`;
      item.value = item.id;
      if (item.children && item.children.length > 0) {
        item.disabled = true;
        this.getTree(item.children);
      }
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

  // 微信或小程序切换按钮
  ifwx = (e) => {
    this.setState({
      ifwx: e,
    });
  };

  // 提交事件 ;
  onFinish = (values) => {
    if (this.props.isadd) {
      const { dispatch } = this.props;
      dispatch({
        type: 'lihghtList/Add',
        payload: values,
      }).then((res) => {
        if (res.code === 200) {
          this.handleCancel2();
          message.success(res.msg);
        } else {
          message.error(res.msg);
        }
      });
    } else {
      const { dispatch } = this.props;
      values.id = this.props.lightData.id;
      values.approvalStatus = this.props.lightData.approvalStatus;
      dispatch({
        type: 'lihghtList/update',
        payload: values,
      }).then((res) => {
        if (res.code === 200) {
          this.handleCancel2();
          message.success(res.msg);
        } else {
          message.error(res.msg);
        }
      });
    }
  };

  beforeUpload = (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('只能上传jpg/png/jpeg格式的缩略图!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('图片不能超过5MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  beforebigUpload = (file) => {
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
    if (!isJpgOrPng) {
      message.error('只能上传jpg/png/jpeg格式的缩略图!');
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
      message.error('图片不能超过5MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.setState({
        icon: info.file.response.data,
        loading: false,
      });
      this.formRef.current.setFieldsValue({
        icon: this.state.icon,
      });
    }
  };

  handleBigChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ bigLoading: true });
      return;
    }
    if (info.file.status === 'done') {
      this.setState({
        bigIcon: info.file.response.data,
        bigLoading: false,
      });
      this.formRef.current.setFieldsValue({
        bigIcon: this.state.bigIcon,
      });
    }
  };

  render() {
    const props = {
      name: 'file',
      listType: 'picture-card',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      showUploadList: false,
      action: '/api/system/file/upload',
    };
    const {
      content,
      appType,
      deptId,
      appMenuId,
      icon,
      ifHome,
      ifBigPicUrl,
      callBackUrl,
      linkman,
      phone,
      version,
      appStatus,
      ifHot,
      bigIcon,
      ifCarryUser,
      appVariety,
    } = this.props.lightData;
    const imgReadUrl = picimgurl;
    const imgUrl = imgReadUrl + icon;
    const bigImg = this.state.ifBigPicUrl || ifBigPicUrl;
    const bigIconimg = imgReadUrl + bigIcon;
    const ifwx = this.state.ifwx || appVariety;

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
    } else if (bigIcon) {
      bigappicon = <img src={bigIconimg} alt="avatar2222" style={{ width: '100%' }} />;
    } else {
      bigappicon = <PlusOutlined />;
    }

    return (
      <div>
        <div>
          {/* <h4>{this.state.title}</h4> */}
          <Form
            ref={this.formRef}
            onFinish={this.onFinish}
            initialValues={{
              name: this.props.lightData.name,
              appType: appType,
              deptId: deptId,
              appVariety: this.state.appVariety || appVariety,
              ifCarryUser: ifCarryUser || '0',
              ifHome: ifHome || '1',
              appStatus: appStatus || '0',
              ifHot: ifHot || '1',
              ifBigPicUrl: ifBigPicUrl || '1',
              icon: icon || this.state.icon,
              content: content || '',
              appMenuId: appMenuId,
              callBackUrl: callBackUrl || '',
              linkman: linkman || '',
              phone: phone || '',
              version: version || '',
              bigIcon: bigIcon || this.state.bigIcon,
            }}
          >
            <Row gutter={16}>
              <Col span={11}>
                <Form.Item label="轻应用类型" name="appVariety">
                  <Select placeholder="请选择轻应用类型" onChange={this.ifwx}>
                    <Option value="0">H5</Option>
                    <Option value="1">微信小程序</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  label="应用名称"
                  name="name"
                  rules={[{ required: true, message: '应用名称是必填项' }]}
                >
                  <Input placeholder="请输入应用名称" />
                </Form.Item>
              </Col>
            </Row>
            {ifwx === '0' ? (
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
            ) : (
              ''
            )}
            <Row gutter={16}>
              <Col span={11}>
                <Form.Item
                  label="应用类别"
                  name="appType"
                  rules={[{ required: true, message: '请输入应用类别' }]}
                >
                  <Select placeholder="请输入应用类别！">{this.state.DictData}</Select>
                </Form.Item>
              </Col>
              {ifwx === '0' ? (
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
              ) : (
                <Col span={11}>
                  <Form.Item
                    label="微信appId"
                    name="callBackUrl"
                    rules={[{ required: true, message: '请输入微信appId！' }]}
                  >
                    <Input placeholder="请输入微信appId" />
                  </Form.Item>
                </Col>
              )}
            </Row>
            <Row gutter={16}>
              <Col span={11}>
                <Form.Item
                  label="所属菜单"
                  name="appMenuId"
                  rules={[{ required: true, message: '请输入所属菜单' }]}
                >
                  <TreeSelect treeData={this.state.treeData} placeholder="请选择所属菜单" />
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
                <Form.Item label="所属委办局" name="deptId">
                  <Select placeholder="请选择所属委办局"> {this.state.shuoshuSelect}</Select>
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
                {bigImg === '0' ? (
                  <Form.Item
                    label="大图图标"
                    name="bigIcon"
                    rules={[{ required: true, message: '请输入大图！' }]}
                  >
                    <>
                      <Upload
                        className="avatar-big-uploader"
                        {...props}
                        beforeUpload={this.beforebigUpload}
                        onChange={this.handleBigChange}
                      >
                        {bigappicon}
                      </Upload>
                      <span style={{ fontSize: 10 }}>
                        大图分辨率：750*252，只能上传jpg/png/jpeg格式，且不超过5MB!
                      </span>
                    </>
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
                <Button type="primary" htmlType="submit" className="okbtn">
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

export default connect(({ lihghtmodel, loading }) => ({
  lihghtmodel,
  loading: loading.models.lihghtmodel,
}))(light);
// export default light;
