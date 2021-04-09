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
          {tableData.title && (
            <div>
              <p className="show-title">{tableData.title}</p>
            </div>
          )}

          {tableData.requestName && (
            <div>
              <Card className="show-content" bordered={false}>
                <div className="show-url">
                  方法名 &nbsp;&nbsp;&nbsp;
                  <span className="show-red">{tableData.requestName}</span>
                </div>
              </Card>
            </div>
          )}

          {tableData.outputParameters && tableData.outputParameters.length > 0 && (
            <div>
              {tableData.outputParameters && (
                <p className="show-title">输出参数 &nbsp;&nbsp;&nbsp;{tableData.outParams}</p>
              )}
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
          {!tableData.outputParameters.length > 0 && !tableData.incomingParameters.length > 0 && (
            <p className="show-title">无参数</p>
          )}
          {tableData.incomingParameters && tableData.incomingParameters.length > 0 && (
            <div>
              {tableData.incomingParameters && (
                <p className="show-title">传入参数 &nbsp;&nbsp;&nbsp;{tableData.InParams}</p>
              )}

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
              <p className="show-title">调用示例 （H5）</p>
              <Card className="show-content" bordered={false}>
                <div
                  className="show-json"
                  dangerouslySetInnerHTML={{ __html: tableData.passInJSON }}
                ></div>
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
          {tableData.jsJson && (
            <div>
              <p className="show-title">调用示例 （js端）</p>
              <Card className="show-content" bordered={false}>
                <div
                  className="show-json"
                  dangerouslySetInnerHTML={{ __html: tableData.jsJson }}
                ></div>
              </Card>
            </div>
          )}
        </Card>
      </div>
    );
  }
}
