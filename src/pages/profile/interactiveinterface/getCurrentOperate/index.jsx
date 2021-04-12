import React, { PureComponent } from 'react';
import { Card } from 'antd';
// import { connect } from 'umi';
import CommonComponent from '@/components/JSBridgeComponent/Common';

class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        title: 'H5端从原生获取当前设备的操作系统',
        requestName: 'getOS',
        requestUrl: '返回码，成功（200），失败（500）',
        outParams: 'Object   response',
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
            parameter: 'os',
            isNecessary: '是',
            explain: '设备的操作系统，如ios，android',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">window.WebViewJavascriptBridge.callHandler('getOS', null, function </div>
          <div class="line-indent"> (response) {</div>
            <div class="line-indent-two">$('#log').text('getOS');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">"msg": "success",</div>
            <div class="line-indent">"code":"200",</div>
            <div class="line-indent">"data": {</div>
              <div class="line-indent-two">"os":"ios"</div>   
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
