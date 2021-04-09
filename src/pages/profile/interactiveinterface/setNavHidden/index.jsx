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
        title: 'H5端通过调用此方法设置原生的标题栏是否隐藏',
        requestName: 'setNavigationBarState',
        requestUrl: '返回码，成功（200），失败（500）',
        outParams: '',
        InParams: '',
        incomingParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'state',
            isNecessary: '是',
            explain: '是否隐藏，false不隐藏，true隐藏',
          },
        ],
        outputParameters: [],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">window.WebViewJavascriptBridge.callHandler('setNavigationBarState', </div>
          <div class="line-indent"> {"state": "false"}, function (response) {</div>
            <div class="line-indent-two">$('#log').text('setNavigationBarState');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: ``,
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
