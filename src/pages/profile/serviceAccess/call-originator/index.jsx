import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
// import styles from './style.less';

class CallOriginator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      callOriginator: '第三方开发人员，产品经理',
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

export default connect(({ orginpace, loading }) => ({
  orginpace,
  loading: loading.models.orginpace,
}))(CallOriginator);
