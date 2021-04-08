import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '@/components/DocumentComponent/Common';

class RefreshAccessToken extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshAccessToken: {
        isHeader: false,
        isRules: false,
        rules: '',
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/openPlatform/accessToken/refreshAccessToken',
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
            parameter: 'refreshToken',
            isNecessary: '是',
            explain: '刷新token',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">"appId": "YOUR_APP_ID",</div>
          <div class="line-indent">"appSecret": "YOUR_APP_SECRET",</div>
          <div class="line-indent">"refreshToken": "YOUR_REFRESH_TOKEN"</div>
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
            type: 'String',
            parameter: 'accessToken',
            isNecessary: '是',
            explain: 'accessToken访问令牌',
          },
          {
            key: 3,
            type: 'int',
            parameter: 'expiresIn',
            isNecessary: '是',
            explain: 'accessToken的有效时间，默认300秒',
          },
          {
            key: 4,
            type: 'String',
            parameter: 'refreshToken',
            isNecessary: '是',
            explain: '获取到的刷新token',
          },
        ],
        returnInJson: `
        <div class="line-first">{</div>
          <div class="line-indent">"msg": "操作成功",</div>
          <div class="line-indent">"code": "200",</div>
          <div class="line-indent">"data": {</div>
            <div class="line-indent-two">"accessToken": "YOUR_ACCESS_TOKEN",</div>
            <div class="line-indent-two">"expiresIn": 300,</div>
            <div class="line-indent-two">"refreshToken": "YOUR_REFRESH_TOKEN"</div>
          <div class="line-indent">}</div>
        <div class="line-first">}</div>
        `,
        javaCode: '',
      },
    };
  }

  render() {
    const { refreshAccessToken } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={refreshAccessToken} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndRefreshAccessToken, loading }) => ({
  listAndRefreshAccessToken,
  loading: loading.models.listAndRefreshAccessToken,
}))(RefreshAccessToken);
