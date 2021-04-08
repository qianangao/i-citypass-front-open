import React, { PureComponent } from 'react';
import { Card } from 'antd';
import './style.less';
// import { connect } from 'umi';
// import CommonComponent from '../components/Common';

class ModifyUserAuthorizationStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modifyUserAuthorizationStatus: {
        title:
          '文字（Typography）是产品界面里最基本的沟通方式。字体的规范主要解决的是内容可读性以及信息的层级表达，同时选择不同的字体、字号、字重、行距、段距来维持垂直的韵律，传达不同的设计风格的统一性和整体性，从而在阅读的舒适性上达到平衡。',
        requestMethod:
          '为确保移动终端的通用性，对字体大小和使用场景制定规范，同时对页面字体进行限制，中文字体使用苹方(PingFang SC)、英文字体使用 Helvetica Naue、数字字体使用苹方(PingFang SC)。',
      },
    };
  }

  render() {
    const { modifyUserAuthorizationStatus } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <p className="show-title">{modifyUserAuthorizationStatus.title}</p>
          <p className="show-title">{modifyUserAuthorizationStatus.requestMethod}</p>
        </Card>
      </div>
    );
  }
}

export default ModifyUserAuthorizationStatus;

// export default connect(({ modifySpace, loading }) => ({
//   modifySpace,
//   loading: loading.models.modifySpace,
// }))(ModifyUserAuthorizationStatus);
