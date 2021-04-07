import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
// import CommonComponent from '../components/Common';
// import styles from './style.less';

class GetRequestcode extends PureComponent {
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

export default connect(({ listAndGetRequestcode, loading }) => ({
  listAndGetRequestcode,
  loading: loading.models.listAndGetRequestcode,
}))(GetRequestcode);
