import React, { PureComponent } from 'react';
import { Card } from 'antd';
import './style.less';

export default class listAndEncryptionRules extends PureComponent {
  state = {
    encryptionRules: {
      rules: '接口入参和返回都经过AES加密一次，加密时所需的key请联系开发',
      passInJSON: `
      {
        "param": "经过AES加密后的值"
      }
      `,
      returnInJson: `
      {
        "msg": "操作成功",
        "code": "200",
        "data": "经过AES加密后的值"
      }
      `,
    },
  };

  render() {
    const { encryptionRules } = this.state;
    return (
      <div>
        <Card className="content-show" bordered={false}>
          <p className="show-title">1.加密规则</p>
          <Card className="show-content" bordered={false}>
            {encryptionRules.rules}
          </Card>
          <p className="show-title">2.传入json示例</p>
          <Card className="show-content" bordered={false}>
            <div className="show-json">{encryptionRules.passInJSON}</div>
          </Card>
          <p className="show-title">3.返回json示例</p>
          <Card className="show-content" bordered={false}>
            <div className="show-json">{encryptionRules.returnInJson}</div>
          </Card>
        </Card>
      </div>
    );
  }
}
