import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../components/Common';

class RefreshAccessToken extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshAccessToken: {
        isHeader: false,
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
        {
          "appId": "YOUR_APP_ID",
          "appSecret": "YOUR_APP_SECRET",
          "refreshToken": "YOUR_REFRESH_TOKEN"
        }
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
        {
          "msg": "操作成功",
          "code": "200",
          "data": {
            "accessToken": "YOUR_ACCESS_TOKEN",
            "expiresIn": 300,
            "refreshToken": "YOUR_REFRESH_TOKEN"
          }
        }
        `,
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
