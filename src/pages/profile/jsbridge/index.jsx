import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';

// import styles from './style.less';
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
    dataIndex: 'must',
    key: 'must',
  },
  {
    title: '说明',
    dataIndex: 'explain',
    key: 'explain',
  },
];
class Jsbridge extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        {
          key: 0,
          type: 'Authorization',
          parameter: 'Bearer Your_Token',
          must: '是',
          explain: '智慧城市app的token',
        },
      ],
      title:
        '只能由业务方后台请求开放平台，因为存在服务器白名单校验限制，由H5直接请求的话，会回调错误。',
    };
  }

  render() {
    const { tableData, title } = this.state;
    return (
      <div>
        <PageContainer>
          <Card bordered={false}>
            <div>{title}</div>
            <Table
              columns={columns}
              dataSource={tableData}
              rowKey="key"
              pagination={false}
              scroll={{ y: 840 }}
              bordered
            />
          </Card>
        </PageContainer>
      </div>
    );
  }
}

export default connect(({ jsbridgeSpace, loading }) => ({
  jsbridgeSpace,
  loading: loading.models.jsbridgeSpace,
}))(Jsbridge);
