import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../components/Common';

class GetAccessToken extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getAccessToken: {
        isHeader: false,
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/openPlatform/accessToken/getAccessToken',
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
            parameter: 'timestamp',
            isNecessary: '是',
            explain: '时间戳（长度为10位或者13位的时间戳）',
          },
          {
            key: 3,
            type: 'String',
            parameter: 'randomSeries',
            isNecessary: '是',
            explain: '随机序列（长度为10位的数字序列）',
          },
          {
            key: 4,
            type: 'String',
            parameter: 'cipherText',
            isNecessary: '是',
            explain:
              '密文，生成规则：依次将appId:value、timestamp:value、randomSeries:value四个键值对拼接成字符串，然后MD5加密（32位小写密文），得到cipherText的值',
          },
        ],
        passInJSON: `
        {
          "appId": "YOUR_APP_ID",
          "appSecret": "YOUR_APP_SECRET",
          "timestamp": "1536560712",
          "randomSeries": "8885522200",
          "cipherText": "YOUR_CIPHER_TEXT"
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
            explain: 'authCode的有效时间，默认300秒',
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
        javaCode: `
        import org.apache.commons.codec.digest.DigestUtils;

        public class GetCipherTextMain {
        
            public static void main(String[] args) {
                String appId = "XXX";
                String appSecret = "XXX";
                String timestamp = "1536560712";
                String randomSeries = "8885522200";
        
                StringBuffer buffer = new StringBuffer();
                buffer.append("appId")
                      .append(appId)
                      .append("appSecret")
                      .append(appSecret)
                      .append("timestamp")
                      .append(timestamp)
                      .append("randomSeries")
                      .append(randomSeries);
                String cipherText = DigestUtils.md5Hex(buffer.toString());
                System.out.println(cipherText);
            }
        
        }
        `,
      },
    };
  }

  render() {
    const { getAccessToken } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={getAccessToken} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndGetAccessToken, loading }) => ({
  listAndGetAccessToken,
  loading: loading.models.listAndGetAccessToken,
}))(GetAccessToken);
