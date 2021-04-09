import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import './style.less';
// import { connect } from 'umi';
const columns = [
  {
    title: '样式',
    dataIndex: 'style',
    key: 'style',
    width: '90px',
  },
  {
    title: '字重',
    dataIndex: 'typeface',
    key: 'typeface',
  },
  {
    title: '字号/行高',
    dataIndex: 'rowHeight',
    key: 'rowHeight',
    width: '100px',
  },
  {
    title: '使用场景',
    dataIndex: 'usageScenarios',
    key: 'usageScenarios',
  },
];

class ModifyUserAuthorizationStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modifyUserAuthorizationStatus: {
        title:
          '文字（Typography）是产品界面里最基本的沟通方式。字体的规范主要解决的是内容可读性以及信息的层级表达，同时选择不同的字体、字号、字重、行距、段距来维持垂直的韵律，传达不同的设计风格的统一性和整体性，从而在阅读的舒适性上达到平衡。',
        requestMethod:
          '为确保移动终端的通用性，对字体大小和使用场景制定规范，同时对页面字体进行限制，中文字体使用苹方(PingFang SC)、英文字体使用 Helvetica Naue、数字字体使用苹方(PingFang SC)。',
      },
      tableStyle: [
        {
          key: 0,
          style: '标准字',
          typeface: 'medium',
          rowHeight: '22/30',
          usageScenarios: '用于咨询标题/提高弹窗标题',
        },
        {
          key: 1,
          style: '标准字',
          typeface: 'medium',
          rowHeight: '18/25',
          usageScenarios: '导航标题/个人中心用户名/功能模块大标题/提示框标题/底部按钮文字',
        },
        {
          key: 2,
          style: '标准字',
          typeface: 'medium/regular',
          rowHeight: '17/24',
          usageScenarios: '列表标题/资讯文字/底部选择器文字/警告框按钮文字/toast提示文字/表单标题',
        },
        {
          key: 3,
          style: '标准字',
          typeface: 'medium/regular',
          rowHeight: '16/22',
          usageScenarios: '导航两端操作文字/导航选择标签/输入框标题,内容',
        },
        {
          key: 4,
          style: '标准字',
          typeface: 'regular',
          rowHeight: '15/21',
          usageScenarios:
            '用于弹窗内容文字/表单右侧文字描述/报告详情和文档详情的正文/导航菜单文字/搜索框文字和内容/搜索记录',
        },
        {
          key: 5,
          style: '标准字',
          typeface: 'regular',
          rowHeight: '14/20',
          usageScenarios: '输入框右端描述性文字',
        },
        {
          key: 6,
          style: '标准字',
          typeface: 'regular',
          rowHeight: '13/18',
          usageScenarios: '用于图标文字/列表标题下描述性文字/热门搜索，搜索历史记录文字',
        },
      ],
      suggess: '每个页面主要内容部分不要超过三种字号',
      remarks: {
        chineseStyle: '中文---苹方（PingFang SC）',
        englishStyle: '英文---Helvetica Naue',
        matchStyle: '数字---苹方（PingFang SC）',
      },
    };
  }

  render() {
    const { modifyUserAuthorizationStatus, tableStyle, suggess, remarks } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <p className="show-title">{modifyUserAuthorizationStatus.title}</p>
          <p className="show-title">{modifyUserAuthorizationStatus.requestMethod}</p>

          <Card className="show-content" bordered={false}>
            <Table
              columns={columns}
              dataSource={tableStyle}
              rowKey="key"
              pagination={false}
              bordered
            ></Table>
            <p className="remarks">
              备注:
              <p>{remarks.chineseStyle}</p>
              <p>{remarks.englishStyle}</p>
              <p>{remarks.matchStyle}</p>
            </p>
            <p className="suggess">建议:{suggess}</p>
          </Card>
        </Card>
      </div>
    );
  }
}

export default ModifyUserAuthorizationStatus;

// export default connect(({ modifySpace, loading }) => ({
//   modifySpace,
//   loading: loading.models.modifySpace,
// }))(ModifyUserAuthorizationStatus);
