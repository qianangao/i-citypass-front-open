import React, { PureComponent } from 'react';
import { Card } from 'antd';
import CommonComponent from '@/components/JSBridgeComponent/Common';
// import { connect } from 'umi';

class QueryForAuthorization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        title: 'H5端从原生获取当前位置信息，包括详细地址和经纬度，使用的是高德地图',
        requestName: 'getLocation',
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
            parameter: 'location',
            isNecessary: '是',
            explain: '详情地址',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'coordinate',
            isNecessary: '是',
            explain: '经纬度',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">"window.WebViewJavascriptBridge.callHandler('getLocation', null, "</div>
          <div class="line-indent"> "function (response) {"</div>
            <div class="line-indent-two">$('#log').text('location');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">“msg”:”success”,</div>
            <div class="line-indent">"code": “code”:”200”,</div>
            <div class="line-indent">“data”: {</div>
              <div class="line-indent-two">“location”:”陕西省西安市未央区欧亚大道”,</div>
              <div class="line-indent-two">“coordinate”:”108.995710,34.331199”</div>
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

export default QueryForAuthorization;

// export default connect(({ querySpace, loading }) => ({
//   querySpace,
//   loading: loading.models.querySpace,
// }))(QueryForAuthorization);
