import React, { PureComponent } from 'react';
import { Card } from 'antd';
import './style.less';
import CommonComponent from '@/components/JSBridgeComponent/Common';

class ModifyUserAuthorizationStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        title: 'H5端从原生获取当前app的版本号',
        requestName: 'getAppVersion',
        requestUrl: '返回码，成功（200），失败（500）',
        outParams: 'object  response',
        InParams: 'Object data',
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
        incomingParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'version',
            isNecessary: '是',
            explain: '版本号',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">window.WebViewJavascriptBridge.callHandler('getAppVersion', null, </div>
          <div class="line-indent"> function (response) {</div>
            <div class="line-indent-two">$('#log').text('version');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">“msg”:”success”,</div>
            <div class="line-indent">“code”:”200”,</div>
            <div class="line-indent">“data”: {</div>
              <div class="line-indent-two">“version”:”1.0.0”</div>
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

export default ModifyUserAuthorizationStatus;

// export default connect(({ modifySpace, loading }) => ({
//   modifySpace,
//   loading: loading.models.modifySpace,
// }))(ModifyUserAuthorizationStatus);
