import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../components/Common';
// import styles from './style.less';

class QueryForAuthorization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // queryForAuthorization: '只能由业务方后台请求开放平台，因为存在服务器白名单校验限制，由H5直接请求的话，会回调错误。'
    };
  }

  render() {
    // const { queryForAuthorization } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndQueryForAuthorization, loading }) => ({
  listAndQueryForAuthorization,
  loading: loading.models.listAndQueryForAuthorization,
}))(QueryForAuthorization);
