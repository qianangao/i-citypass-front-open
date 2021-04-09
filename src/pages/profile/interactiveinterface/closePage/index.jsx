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
        title: '关闭页面',
        requestName: 'finish',
        outParams: '',
        InParams: '',
        incomingParameters: [],
        outputParameters: [],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">window.WebViewJavascriptBridge.callHandler('finish', null, function </div>
          <div class="line-indent">(response) {</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>
        `,
        returnInJson: ``,
        jsJson: ``,
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
