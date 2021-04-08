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

class QueryForAuthorization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        requestMethod: 'Get',
        requestUrl: 'http://ip:port/system/app/authorize/whether',
        incomingParameters: [
          {
            key: 0,
            type: 'Long',
            parameter: 'lightId',
            isNecessary: '是',
            explain: '轻应用id',
          },
        ],
        passInJSON: `
          {
            "lightId": "1"
          }
        `,
        returnInJson: `
          {
            "msg": "操作成功",
            "code": "200",
            "data": {
              "ifAuthorize": 0,  //是否授权（0-是 1-否）
              "icon": "xxxxxx",	 //icon
              "name": "xxxxx",		//轻应用名称
              "inUrl": "xxxx"		//轻应用地址
            }
        }
        `,
      },
    };
  }

  render() {
    const { queryForAuthorization } = this.state;
    return (
      <div>
        <div>
          <Card bordered={false}>
            <Card className="content-show" bordered={false}>
              <p className="show-title">1.请求地址</p>
              <Card className="show-content" bordered={false}>
                <div className="show-url">
                  {queryForAuthorization.requestMethod}地址：
                  <span className="show-red">{queryForAuthorization.requestUrl}</span>
                </div>
              </Card>
              <p className="show-title">
                2.{queryForAuthorization.isHeader ? '请求头参数 token' : '输入参数'}
              </p>
              <Card className="show-content" bordered={false}>
                <Table
                  columns={columns}
                  dataSource={queryForAuthorization.incomingParameters}
                  rowKey="key"
                  pagination={false}
                  bordered
                ></Table>
              </Card>
              <p className="show-title">3.传入json示例</p>
              <Card className="show-content" bordered={false}>
                <div className="show-json">{queryForAuthorization.passInJSON}</div>
              </Card>
              <p className="show-title">4.返回json示例</p>
              <Card className="show-content" bordered={false}>
                <div className="show-json">{queryForAuthorization.returnInJson}</div>
              </Card>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}

export default QueryForAuthorization;

// export default connect(({ querySpace, loading }) => ({
//   querySpace,
//   loading: loading.models.querySpace,
// }))(QueryForAuthorization);
