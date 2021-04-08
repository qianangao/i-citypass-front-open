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
          {!tableData.isRules && (
            <div>
              <p className="show-title">请求地址</p>
              <Card className="show-content" bordered={false}>
                <div className="show-url">
                  {tableData.requestMethod}地址：
                  <span className="show-red">{tableData.requestUrl}</span>
                </div>
              </Card>
            </div>
          )}
          {tableData.isRules && (
            <div>
              <p className="show-title">加密规则</p>
              <Card className="show-content" bordered={false}>
                {tableData.rules}
              </Card>
            </div>
          )}
          {tableData.incomingParameters && tableData.incomingParameters.length > 0 && (
            <div>
              <p className="show-title">{tableData.isHeader ? '请求头参数 token' : '输入参数'}</p>
              <Card className="show-content" bordered={false}>
                <Table
                  columns={columns}
                  dataSource={tableData.incomingParameters}
                  rowKey="key"
                  pagination={false}
                  bordered
                ></Table>
              </Card>
            </div>
          )}
          {tableData.passInJSON && (
            <div>
              <p className="show-title">传入json示例</p>
              <Card className="show-content" bordered={false}>
                <div
                  className="show-json"
                  dangerouslySetInnerHTML={{ __html: tableData.passInJSON }}
                ></div>
              </Card>
            </div>
          )}
          {tableData.javaCode && (
            <div>
              <p className="show-title">JAVA代码示例</p>
              <Card className="show-content" bordered={false}>
                <div
                  className="show-json"
                  dangerouslySetInnerHTML={{ __html: tableData.javaCode }}
                ></div>
              </Card>
            </div>
          )}
          {tableData.outputParameters && tableData.outputParameters.length > 0 && (
            <div>
              <p className="show-title">输出参数</p>
              <Card className="show-content" bordered={false}>
                <Table
                  columns={columns}
                  dataSource={tableData.outputParameters}
                  rowKey="key"
                  pagination={false}
                  bordered
                ></Table>
              </Card>
            </div>
          )}
          {tableData.returnInJson && (
            <div>
              <p className="show-title">返回json示例</p>
              <Card className="show-content" bordered={false}>
                <div
                  className="show-json"
                  dangerouslySetInnerHTML={{ __html: tableData.returnInJson }}
                ></div>
              </Card>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
