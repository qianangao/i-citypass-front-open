import React, { PureComponent } from 'react';
import { Card } from 'antd';
import CommonComponent from '@/components/JSBridgeComponent/Common';

class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        title: 'H5端从原生获取requstCode用于去开放平台查询用户信息',
        requestName: 'getRequstCode',
        requestUrl: '返回码，成功（200），失败（500）',
        outParams: 'Object   response',
        InParams: 'Object data',
        incomingParameters: [
          {
            key: 0,
            type: 'Number',
            parameter: 'code',
            isNecessary: '是',
            explain: '返回码，成功（200），失败（500）',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'msg',
            isNecessary: '是',
            explain: '失败：获取信息异常',
          },
          {
            key: 2,
            type: 'Object',
            parameter: 'data',
            isNecessary: '是',
            explain: '返回数据',
          },
        ],
        outputParameters: [
          {
            key: 0,
            type: 'Number',
            parameter: 'code',
            isNecessary: '是',
            explain: '返回码，成功（200），失败（500）',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'msg',
            isNecessary: '是',
            explain: '失败：获取信息异常',
          },
          {
            key: 2,
            type: 'Object',
            parameter: 'data',
            isNecessary: '是',
            explain: '返回数据',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">"window.WebViewJavascriptBridge.callHandler('getRequstCode',null, "</div>
          <div class="line-indent"> "function (response) {"</div>
            <div class="line-indent-two">"$('#log').text('requstCode');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">"msg": “msg”:”success”,</div>
            <div class="line-indent">"code": “code”:”200”,</div>
            <div class="line-indent">“data”: {</div>
              <div class="line-indent-two">“requstCode”:”a48fcb7c4ca0a1dded0ccd1227801c0d5d9c48b9e85417</div>
              <div class="line-indent-two">b2f55da4902233f260”</div>
              <div class="line-indent-two">}</div>
          <div class="line-first">}</div>
        `,
      },
    };
  }

  render() {
    const { queryForAuthorization } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={queryForAuthorization} />
        </Card>
      </div>
    );
  }
}

// export default connect(({ getSpace, loading }) => ({
//   getSpace,
//   loading: loading.models.getSpace,
// }))(GetRequestcode);
export default GetRequestcode;
