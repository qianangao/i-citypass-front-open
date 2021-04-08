import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
// import styles from './style.less';

class ErrorCodeSet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      requestHeaderFormat: {
        one: '充分理解本项目的重要性与目标价值，落实服务接入双方接口人。',
        two: '结合本单位权责清单及服务情况，对可接入“城市通APP”的服务事项进行全面梳理。',
        three: '结合本单位权责清单及服务情况，对可接入“城市通APP”的服务事项进行全面梳理。',
        four: '结合“城市通APP”服务接口标准规范进行服务接入实例验证。',
        five: '验证通过后，相关服务可以按照计划申请服务审核与发布。',
        six: '如需对环境进行压力测试和安全测试，请务必提前三个工作日知会“城市通APP”技术接口人。',
      },
    };
  }

  render() {
    const { requestHeaderFormat } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <p>一 、{requestHeaderFormat.one}</p>
          <p>二 、{requestHeaderFormat.two}</p>
          <p>三 、{requestHeaderFormat.three}</p>
          <p>四 、{requestHeaderFormat.four}</p>
          <p>五 、{requestHeaderFormat.five}</p>
          <p>六 、{requestHeaderFormat.six}</p>
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndErrorCodeSet, loading }) => ({
  listAndErrorCodeSet,
  loading: loading.models.listAndErrorCodeSet,
}))(ErrorCodeSet);
