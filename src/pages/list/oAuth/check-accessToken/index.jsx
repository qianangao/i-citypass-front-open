import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '@/components/DocumentComponent/Common';

class CheckAccessToken extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkAccessToken: {
        isHeader: false,
        isRules: false,
        rules: '',
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/openPlatform/accessToken/checkAccessToken',
        incomingParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'appId',
            isNecessary: '是',
            explain: '第三方服务在开放平台申请的appId',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'appSecret',
            isNecessary: '是',
            explain: '第三方服务在开放平台申请的appSecret',
          },
          {
            key: 2,
            type: 'String',
            parameter: 'accessToken',
            isNecessary: '是',
            explain: '应用级别的访问令牌，用于校验第三方服务的合法性，时效300秒',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">"appId": "YOUR_APP_ID",</div>
          <div class="line-indent">"appSecret": "YOUR_APP_SECRET",</div>
          <div class="line-indent">"accessToken": "YOUR_ACCESS_TOKEN"</div>
        <div class="line-first">}</div>
        `,
        outputParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'msg',
            isNecessary: '是',
            explain: '提示信息',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'code',
            isNecessary: '是',
            explain: '返回码',
          },
          {
            key: 2,
            type: 'Boolean',
            parameter: 'verifyResult',
            isNecessary: '是',
            explain: '校验结果，通过true，不通过 false',
          },
        ],
        returnInJson: `
        <div class="line-first">{</div>
          <div class="line-indent">"msg": "操作成功", </div>
          <div class="line-indent">"code": "200",</div> 
          <div class="line-indent">"data": {</div> 
            <div class="line-indent-two">"verifyResult": true </div>
          <div class="line-indent">}</div>
        <div class="line-first">}</div>
        `,
        javaCode: '',
      },
    };
  }

  render() {
    const { checkAccessToken } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={checkAccessToken} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndCheckAccessToken, loading }) => ({
  listAndCheckAccessToken,
  loading: loading.models.listAndCheckAccessToken,
}))(CheckAccessToken);
