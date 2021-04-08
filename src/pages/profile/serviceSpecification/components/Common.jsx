import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import './style.less';

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
export default class CommonComponent extends PureComponent {
  render() {
    const { tableData } = this.props;
    return (
      <div>
        <Card className="content-show" bordered={false}>
          <p className="show-title">1.请求地址</p>
          <Card className="show-content" bordered={false}>
            <div className="show-url">
              {tableData.requestMethod}地址：
              <span className="show-red">{tableData.requestUrl}</span>
            </div>
          </Card>
          <p className="show-title">2.{tableData.isHeader ? '请求头参数 token' : '输入参数'}</p>
          <Card className="show-content" bordered={false}>
            <Table
              columns={columns}
              dataSource={tableData.incomingParameters}
              rowKey="key"
              pagination={false}
              bordered
            ></Table>
          </Card>
          <p className="show-title">3.传入json示例</p>
          <Card className="show-content" bordered={false}>
            <div className="show-json">{tableData.passInJSON}</div>
          </Card>
          <p className="show-title">4.返回json示例</p>
          <Card className="show-content" bordered={false}>
            <div className="show-json">{tableData.returnInJson}</div>
          </Card>
        </Card>
      </div>
    );
  }
}
