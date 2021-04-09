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
class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getRequestcode: {
        isHeader: true,
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/openPlatform/request/getRequestCode',
        incomingParameters: [
          {
            key: 0,
            type: 'Authorization',
            parameter: 'Bearer Your_Token',
            isNecessary: '是',
            explain: '智慧城市app的token',
          },
        ],
        passInJSON: '',
        returnInJson: `
          {
            "msg": "操作成功",
            "code": "200",
            "data": "Your_Request_Code"
        }
        `,
      },
    };
  }

  render() {
    const { getRequestcode } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <Card className="content-show" bordered={false}>
            <p className="show-title">1.请求地址</p>
            <Card className="show-content" bordered={false}>
              <div className="show-url">
                {getRequestcode.requestMethod}地址：
                <span className="show-red">{getRequestcode.requestUrl}</span>
              </div>
            </Card>
            <p className="show-title">
              2.{getRequestcode.isHeader ? '请求头参数 token' : '输入参数'}
            </p>
            <Card className="show-content" bordered={false}>
              <Table
                columns={columns}
                dataSource={getRequestcode.incomingParameters}
                rowKey="key"
                pagination={false}
                bordered
              ></Table>
            </Card>
            <p className="show-title">3.传入json示例</p>
            <Card className="show-content" bordered={false}>
              <div className="show-json">{getRequestcode.passInJSON}</div>
            </Card>
            <p className="show-title">4.返回json示例</p>
            <Card className="show-content" bordered={false}>
              <div className="show-json">{getRequestcode.returnInJson}</div>
            </Card>
          </Card>
        </Card>
      </div>
    );
  }
}

// export default connect(({ getSpace, loading }) => ({
//   getSpace,
//   loading: loading.models.getSpace,
// }))(GetRequestcode);
export default GetRequestcode;
