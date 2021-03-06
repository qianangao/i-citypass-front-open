import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '@/components/DocumentComponent/Common';

class GetUserAccessToken extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getUserAccessToken: {
        isHeader: false,
        isRules: false,
        rules: '',
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/openPlatform/accessToken/getUserAccessToken',
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
            parameter: 'requestCode',
            isNecessary: '是',
            explain: 'Native在开放平台申请的requestCode',
          },
          {
            key: 3,
            type: 'String',
            parameter: 'accessToken',
            isNecessary: '是',
            explain: '从开放凭条获取的应用级别访问令牌',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">"appId": "YOUR_APP_ID",</div>
          <div class="line-indent">"appSecret": "YOUR_APP_SECRET",</div>
          <div class="line-indent">"requestCode": "YOUR_REQUEST_CODE",</div>
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
            type: 'String',
            parameter: 'userAccessToken',
            isNecessary: '是',
            explain: '业务后端在开放平台申请的userAccessToken',
          },
        ],
        returnInJson: `
        <div class="line-first">{</div>
          <div class="line-indent">"msg": "操作成功",</div>
          <div class="line-indent">"code": "200",</div>
          <div class="line-indent">"data": "YOUR_USER_ACCESS_TOKEN"</div>
        <div class="line-first">}</div>
        `,
        javaCode: '',
      },
    };
  }

  render() {
    const { getUserAccessToken } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={getUserAccessToken} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndGetUserAccessToken, loading }) => ({
  listAndGetUserAccessToken,
  loading: loading.models.listAndGetUserAccessToken,
}))(GetUserAccessToken);
