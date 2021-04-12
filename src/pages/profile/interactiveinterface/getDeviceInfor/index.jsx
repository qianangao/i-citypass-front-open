import React, { PureComponent } from 'react';
import { Card } from 'antd';
import CommonComponent from '@/components/JSBridgeComponent/Common';
// import { connect } from 'umi';

class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        title: 'H5端从原生获取当前设备的基本信息',
        requestName: 'getDeviceInfo',
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
            parameter: 'appVersion',
            isNecessary: '是',
            explain: '版本号',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'platform',
            isNecessary: '是',
            explain: '设备类型，如ios，android',
          },
          {
            key: 2,
            type: 'String',
            parameter: 'deviceId',
            isNecessary: '是',
            explain: '设备id',
          },
          {
            key: 3,
            type: 'String',
            parameter: 'sysVersion',
            isNecessary: '是',
            explain: '系统版本号',
          },
          {
            key: 4,
            type: 'String',
            parameter: 'sysBrand',
            isNecessary: '是',
            explain: '手机品牌',
          },
          {
            key: 5,
            type: 'String',
            parameter: 'sysModel',
            isNecessary: '是',
            explain: '手机型号',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">window.WebViewJavascriptBridge.callHandler('getDeviceInfo', null, </div>
          <div class="line-indent">function (response) {</div>
            <div class="line-indent-two">$('#log').text('getDeviceInfo');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">"msg": "success",</div>
            <div class="line-indent">"code":"200",</div>
            <div class="line-indent">"data": {</div>
              <div class="line-indent-two">“appVersion”:”1.0.0”,</div> 
              <div class="line-indent-two">“platform”:”ios”,</div>   
              <div class="line-indent-two">“deviceId”:”730A1A08-5F9B-42D7-96AC-9BCED7A1F597”,</div>   
              <div class="line-indent-two">“sysVersion”:”13.5.1”,</div>   
              <div class="line-indent-two">“sysBrand”:”iphone”,</div>   
              <div class="line-indent-two">“sysModel”:”iphone 8”</div>   
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
