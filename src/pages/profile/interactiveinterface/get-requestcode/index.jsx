import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import './style.less';
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
        requestName: 'getRequstCode',
        requestobject: 'object',
        returnParam: 'data',
        requestres: 'response',
        incomingParameters: [
          {
            key: 0,
            type: 'Number',
            parameter: 'code',
            isNecessary: '是',
            explain: '返回码，成功（200），失败（500）',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'msg',
            isNecessary: '是',
            explain: '失败：获取信息异常',
          },
          {
            key: 2,
            type: 'Object',
            parameter: 'data',
            isNecessary: '是',
            explain: '返回数据',
          },
        ],
        returnKey: [
          {
            key: 0,
            type: 'String',
            parameter: 'code',
            isNecessary: '是',
            explain: '',
          },
        ],
        passInJSON: `
        {
          window.WebViewJavascriptBridge.callHandler('getRequstCode',null, function (response) {
            $('#log').text('requstCode');
            showResponse(response);
        });
        }
        `,
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
            <p className="show-title">H5端从原生获取requstCode用于去开放平台查询用户信息</p>
            <Card className="show-content" bordered={false}>
              <div className="show-url">
                方法名：
                <span className="show-red">{getRequestcode.requestName}</span>
              </div>
            </Card>
            <Card className="show-content" bordered={false}>
              <div className="show-url">
                输出参数：
                <span className="show-red">{getRequestcode.requestobject}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="show-red">{getRequestcode.requestres}</span>
              </div>
            </Card>
            <Card className="show-content" bordered={false}>
              <Table
                columns={columns}
                dataSource={getRequestcode.incomingParameters}
                rowKey="key"
                pagination={false}
                bordered
              ></Table>
            </Card>
            <Card className="show-content" bordered={false}>
              <div className="show-url">
                返回参数：
                <span className="show-red">{getRequestcode.returnParam}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </Card>
            <Card className="show-content" bordered={false}>
              <Table
                columns={columns}
                dataSource={getRequestcode.returnKey}
                rowKey="key"
                pagination={false}
                bordered
              ></Table>
            </Card>
            <p className="show-title">调用示例（H5端）</p>
            <Card className="show-content" bordered={false}>
              <div className="show-json">{getRequestcode.passInJSON}</div>
            </Card>
            <p className="show-title">返回的json示例</p>
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
