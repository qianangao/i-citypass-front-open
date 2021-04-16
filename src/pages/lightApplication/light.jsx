import React, { Component } from 'react';
import {
  Form,
  Table,
  Input,
  Button,
  Row,
  Col,
  TreeSelect,
  ConfigProvider,
  Pagination,
  Select,
} from 'antd';
import { connect } from 'umi';
import Linght from '../../components/light/light';
import './light.less';
import locale from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

const { Option } = Select;
// const { Item } = Form;
class lightApplication extends Component {
  state = {
    isadd: true,
    ifmodel: true,
    // title: "新增",
    dataSource: [],
    Reset: '',
    params: {
      name: '',
      // appType: "",
      createTime: '',
      linkman: '',
      phone: '',
      approvalStatus: '',
      ifHome: '',
      appType: '',
    },
    total: 0,
    pageSize: 10,
    pageNum: 1,
    current: 1,
    visible: false,
    title: '',
    lightData: {},
    isAdd: false,
    disabled: false,
    menuVisible: false,
    examVisible: false,
    detailVisible: false,
    menuData: {},
    childrenSelect: [],
    appMenuId: '',
    treeData: [],
  };

  componentDidMount() {
    this.getlist();
    this.getappMenuTree();
  }

  // 列表函数
  getlist = () => {
    const { dispatch } = this.props;
    const params = {
      pageSize: this.state.pageSize,
      pageNum: this.state.pageNum,
      name: this.state.params.name,
      appMenuId: this.state.params.appMenuId,
      approvalStatus: this.state.params.approvalStatus,
    };
    dispatch({
      type: 'lihghtList/list',
      payload: params,
    }).then((res) => {
      // console.log(res)
      this.setState({
        dataSource: res.data.rows,
        total: res.data.total,
      });
    });
  };
  // 表单提交事件
  onFinish = (values) => {
    let params = this.state.params;
    params.name = values.name;
    params.appMenuId = values.appMenuId;
    params.approvalStatus = values.approvalStatus;
    this.setState({
      params,
    });
    //  console.log(values)
    this.getlist();
  };

  // 重置
  handleReset = () => {
    let params = this.state.params;
    params.name = '';
    params.appMenuId = '';
    params.approvalStatus = '';
    this.setState({
      params,
      pageSize: 10,
      pageNum: 1,
      current: 1,
    });
    this.getlist();
  };

  // app树
  getappMenuTree = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'lihghtList/menuTree',
    }).then((res) => {
      if (res.code === 200) {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].value = res.data[i].id;
          res.data[i].title = res.data[i].menuName;
          res.data[i].key = res.data[i].id;
          if (res.data[i].children) {
            this.getTree(res.data[i].children);
          }
        }
        let treeData = [];
        treeData.push(res.data);
        let data = [];
        data = this.changeData(treeData[0]);
        this.setState({ treeData: data });
      }
    });
  };

  // 递归处理treeData
  changeData = (data) => {
    // let that = this
    let jsonObj = data;
    jsonObj.forEach((item) => {
      delete item.updateBy;
      delete item.status;
      delete item.searchValue;
      delete item.parentId;
      delete item.params;
      delete item.level;
      delete item.createBy;
      delete item.ancestors;
      delete item.remark;
      delete item.orderNum;
      delete item.menuCode;
      delete item.menuName;
      delete item.updateTime;
      delete item.inUrl;
      delete item.ifHot;
      delete item.ifHome;
      delete item.createTime;
      delete item.ifCarryUser;
      delete item.ifBigPicUrl;
      delete item.icon;
      delete item.bigIcon;
      // delete item.type
      delete item.id;
      delete item.parentName;
      delete item.params;
      if (item.children && Array.isArray(item.children)) {
        this.changeData(item.children);
      }
    });
    return jsonObj;
  };

  getTree = (data) => {
    data.forEach((item) => {
      item.key = item.id;
      item.title = item.type + '-' + item.menuName;
      item.value = item.id;
      if (item.children && item.children.length > 0) {
        this.getTree(item.children);
      }
    });
  };
  // 编辑
  handleEdit = (record) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'lihghtList/detail',
      payload: record.id,
    }).then((res) => {
      this.setState({
        lightData: res.data,
        ifmodel: false,
        isadd: false,
      });
    });
  };
  // 打开新增
  addApplication = () => {
    this.setState({
      ifmodel: false,
      lightData: { appVariety: '0' },
      isadd: true,
    });
  };

  // 关闭新增框
  down = () => {
    this.setState({
      ifmodel: true,
    });
    this.getlist();
  };
  // 分页回调
  pageChange = (page, pageSize) => {
    this.setState(
      {
        pageNum: page,
      },
      () => {
        this.getlist();
        this.setState({ current: page });
      },
    );
  };
  // 分页回调
  onShowSizeChange = (current, pageSize) => {
    let params = Object.assign({}, this.state.params, {
      name: '',
      appType: '',
      createTime: '',
      linkman: '',
      phone: '',
      approvalStatus: '0',
      appMenuId: '',
      appStatus: '',
      pageNum: 1,
      pageSize: pageSize,
    });
    this.setState(
      {
        pageSize: pageSize,
        params,
        current: 1,
      },
      () => {
        this.getlist();
      },
    );
  };

  render() {
    const imgReadUrl = 'http://10.92.119.10/';
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
        render: (val) => (
          <img src={imgReadUrl + val} alt="图标" style={{ width: 80, height: 80 }} />
        ),
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
        render: (text) => {
          if (text === '0') {
            return '待审核';
          }
          if (text === '1') {
            return '通过';
          }
          if (text === '2') {
            return '驳回';
          }
          // if (text === '0') {
          //   return "待审核"
          // } else if (text === '1') {
          //   return "通过"
          // } else {
          //   return "驳回"
          // }
        },
      },
      {
        title: '操作',
        id: 'action',
        align: 'center',
        width: 150,

        render: (text, record) => (
          <span>
            {/* <Button type="link" onClick={() => this.handleShow(record)} size="small">
              审核
            </Button> */}
            <Button type="link" onClick={() => this.handleEdit(record)} size="small">
              编辑
            </Button>
          </span>
        ),
      },
    ];
    const {
      loading,
      dataSource,
      detailVisible,
      total,
      current,
      pageSize,
      visible,
      isAdd,
      lightData,
      title,
      disabled,
      menuVisible,
      menuData,
    } = this.state;
    return (
      <div>
        {this.state.ifmodel ? (
          <div>
            <Form onFinish={this.onFinish} className="form">
              <Row gutter={16}>
                <Col span={6}>
                  <Form.Item label="应用名称" name="name">
                    <Input placeholder="请输入应用名称" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="所属菜单" name="appMenuId">
                    <TreeSelect treeData={this.state.treeData} placeholder="请选择所属菜单" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="审核状态" name="approvalStatus">
                    <Select placeholder="请选择审核状态">
                      <Option value="0">待审核</Option>
                      <Option value="1">审核通过</Option>
                      <Option value="2">驳回</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ marginRight: 4 }}>
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
              <Button type="primary" onClick={this.addApplication} style={{ marginBottom: 4 }}>
                新增轻应用
              </Button>
            </div>
            <Table
              rowKey={'id'}
              columns={columns}
              dataSource={this.state.dataSource}
              pagination={false}
              //   loading={loading}
            ></Table>
            <ConfigProvider locale={locale}>
              <Pagination
                total={total}
                showTotal={(total) => `共 ${total} 条`}
                showSizeChanger
                onShowSizeChange={this.onShowSizeChange}
                //   showQuickJumper={true}
                onChange={this.pageChange}
                current={current}
                pageSizeOptions={['10', '20', '30']}
                pageSize={pageSize}
              />
            </ConfigProvider>
          </div>
        ) : (
          <Linght down={this.down} lightData={this.state.lightData} isadd={this.state.isadd} />
        )}
      </div>
    );
  }
}

export default connect(({ lihghtList, loading }) => ({
  lihghtList,
  loading: loading.models.lihghtList,
}))(lightApplication);
// export default lightApplication;
