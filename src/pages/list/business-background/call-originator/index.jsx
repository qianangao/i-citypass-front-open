import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
// import styles from './style.less';

class CallOriginator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      callOriginator:
        '只能由业务方后台请求开放平台，因为存在服务器白名单校验限制，由H5直接请求的话，会回调错误。',
    };
  }

  render() {
    const { callOriginator } = this.state;
    return (
      <div>
        <Card bordered={false}>{callOriginator}</Card>
      </div>
    );
  }
}

export default connect(({ listAndCallOriginator, loading }) => ({
  listAndCallOriginator,
  loading: loading.models.listAndCallOriginator,
}))(CallOriginator);
