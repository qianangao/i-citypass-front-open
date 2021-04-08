import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '@/components/DocumentComponent/Common';

class GetAccessToken extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getAccessToken: {
        isHeader: false,
        isRules: false,
        rules: '',
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
        <div class="line-first">{</div>
          <div class="line-indent">"appId": "YOUR_APP_ID",</div>
          <div class="line-indent">"appSecret": "YOUR_APP_SECRET",</div>
          <div class="line-indent">"timestamp": "1536560712",</div>
          <div class="line-indent">"randomSeries": "8885522200",</div>
          <div class="line-indent">"cipherText": "YOUR_CIPHER_TEXT"</div>
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
        javaCode: `
        <div class="line-first">import org.apache.commons.codec.digest.DigestUtils;</div>

        <div class="line-first">public class GetCipherTextMain {</div>
        
          <div class="line-indent">public static void main(String[] args) {</div>
            <div class="line-indent-two">String appId = "XXX";</div>
            <div class="line-indent-two">String appSecret = "XXX";</div>
            <div class="line-indent-two">String timestamp = "1536560712";</div>
            <div class="line-indent-two">String randomSeries = "8885522200";</div>
        
            <div class="line-indent-two">StringBuffer buffer = new StringBuffer();</div>
            <div class="line-indent-two">buffer.append("appId")</div>
              <div class="line-indent-three">.append(appId)</div>
              <div class="line-indent-three">.append("appSecret")</div>
              <div class="line-indent-three">.append(appSecret)</div>
              <div class="line-indent-three">.append("timestamp")</div>
              <div class="line-indent-three">.append(timestamp)</div>
              <div class="line-indent-three">.append("randomSeries")</div>
              <div class="line-indent-three">.append(randomSeries);</div>
            <div class="line-indent-two">String cipherText = DigestUtils.md5Hex(buffer.toString());</div>
            <div class="line-indent-two">System.out.println(cipherText);</div>
          <div class="line-indent">}</div>
        
        <div class="line-first">}</div>
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
