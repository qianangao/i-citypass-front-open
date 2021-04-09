import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
// import { connect } from 'umi';
// import CommonComponent from '../components/Common';
const columns = [
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '参数',
    dataIndex: 'parameter',
    key: 'parameter',
  },
  {
    title: '是否必须',
    dataIndex: 'isNecessary',
    key: 'isNecessary',
  },
  {
    title: '说明',
    dataIndex: 'explain',
    key: 'explain',
  },
];

class ModifyUserAuthorizationStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modifyUserAuthorizationStatus: {
        isHeader: false,
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/app/authorize/update',
        incomingParameters: [
          {
            key: 0,
            type: 'Long',
            parameter: 'lightId',
            isNecessary: '是',
            explain: '轻应用id',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'ifAuthorize',
            isNecessary: '是',
            explain: '是否授权（0-是 1-否）',
          },
        ],
        passInJSON: `
        {
          "lightId": 1,
          "ifAuthorize": "0"
        }
        `,
        returnInJson: `
          {
            "msg": "操作成功",
            "code": "200",
            "data": {}
        }
        `,
      },
    };
  }

  render() {
    const { modifyUserAuthorizationStatus } = this.state;
    return (
      <div>
        <div>
          <Card bordered={false}>
            <Card className="content-show" bordered={false}>
              <p className="show-title">1.请求地址</p>
              <Card className="show-content" bordered={false}>
                <div className="show-url">
                  {modifyUserAuthorizationStatus.requestMethod}地址：
                  <span className="show-red">{modifyUserAuthorizationStatus.requestUrl}</span>
                </div>
              </Card>
              <p className="show-title">
                2.{modifyUserAuthorizationStatus.isHeader ? '请求头参数 token' : '输入参数'}
              </p>
              <Card className="show-content" bordered={false}>
                <Table
                  columns={columns}
                  dataSource={modifyUserAuthorizationStatus.incomingParameters}
                  rowKey="key"
                  pagination={false}
                  bordered
                ></Table>
              </Card>
              <p className="show-title">3.传入json示例</p>
              <Card className="show-content" bordered={false}>
                <div className="show-json">{modifyUserAuthorizationStatus.passInJSON}</div>
              </Card>
              <p className="show-title">4.返回json示例</p>
              <Card className="show-content" bordered={false}>
                <div className="show-json">{modifyUserAuthorizationStatus.returnInJson}</div>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}

export default ModifyUserAuthorizationStatus;

// export default connect(({ modifySpace, loading }) => ({
//   modifySpace,
//   loading: loading.models.modifySpace,
// }))(ModifyUserAuthorizationStatus);
