import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
// import CommonComponent from '../components/Common';
// import styles from './style.less';

class ModifyUserAuthorizationStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card bordered={false}>{/* <CommonComponent /> */}</Card>
      </div>
    );
  }
}

export default connect(({ listAndModifyUserAuthorizationStatus, loading }) => ({
  listAndModifyUserAuthorizationStatus,
  loading: loading.models.listAndModifyUserAuthorizationStatus,
}))(ModifyUserAuthorizationStatus);
