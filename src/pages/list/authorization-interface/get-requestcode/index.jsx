import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '@/components/DocumentComponent/Common';

class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getRequestcode: {
        isHeader: true,
        isRules: false,
        rules: '',
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/openPlatform/request/getRequestCode',
        incomingParameters: [
          {
            key: 0,
            type: 'Authorization',
            parameter: 'Bearer Your_Token',
            isNecessary: '是',
            explain: '智慧城市app的token',
          },
        ],
        passInJSON: '',
        outputParameters: [],
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">"msg": "操作成功",</div>
            <div class="line-indent">"code": "200",</div>
            <div class="line-indent">"data": "Your_Request_Code"</div>
          <div class="line-first">}</div>
        `,
        javaCode: '',
      },
    };
  }

  render() {
    const { getRequestcode } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={getRequestcode} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndGetRequestcode, loading }) => ({
  listAndGetRequestcode,
  loading: loading.models.listAndGetRequestcode,
}))(GetRequestcode);
