import React, { PureComponent } from 'react';
import { Card } from 'antd';
import CommonComponent from '@/components/DocumentComponent/Common';

export default class listAndEncryptionRules extends PureComponent {
  state = {
    encryptionRules: {
      isHeader: false,
      isRules: true,
      rules: '接口入参和返回都经过AES加密一次，加密时所需的key请联系开发',
      requestMethod: '',
      requestUrl: '',
      incomingParameters: [],
      passInJSON: `
      <div class="line-first">{</div>
        <div class="line-indent">"param": "经过AES加密后的值"</div>
      <div class="line-first">}</div>
      `,
      outputParameters: [],
      returnInJson: `
      <div class="line-first">{</div>
        <div class="line-indent">"msg": "操作成功",</div>
        <div class="line-indent">"code": "200",</div>
        <div class="line-indent">"data": "经过AES加密后的值"</div>
      <div class="line-first">}</div>
      `,
      javaCode: '',
    },
  };

  render() {
    const { encryptionRules } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={encryptionRules} />
        </Card>
      </div>
    );
  }
}
