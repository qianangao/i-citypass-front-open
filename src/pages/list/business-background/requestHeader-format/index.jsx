import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
// import styles from './style.less';

class RequestHeaderFormat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      requestHeaderFormat:
        '如未做特别说明，在调用开放平台接口的 http 请求时，request headers 中的 Content Type 其值都设置为“application/json”。',
    };
  }

  render() {
    const { requestHeaderFormat } = this.state;
    return (
      <div>
        <Card bordered={false}>{requestHeaderFormat}</Card>
      </div>
    );
  }
}

export default connect(({ listAndRequestHeaderFormat, loading }) => ({
  listAndRequestHeaderFormat,
  loading: loading.models.listAndRequestHeaderFormat,
}))(RequestHeaderFormat);
