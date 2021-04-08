import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '@/components/DocumentComponent/Common';

class QueryForAuthorization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        requestMethod: 'Get',
        requestUrl: 'http://ip:port/system/app/authorize/whether',
        incomingParameters: [
          {
            key: 0,
            type: 'Long',
            parameter: 'lightId',
            isNecessary: '是',
            explain: '轻应用id',
          },
        ],
        passInJSON: `
          <div class="line-first">{</div>
            <div class="line-indent">"lightId": "1"</div>
          <div class="line-first">}</div>
        `,
        outputParameters: [],
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">"msg": "操作成功",</div>
            <div class="line-indent">"code": "200",</div>
            <div class="line-indent">"data": {</div>
              <div class="line-indent-two">"ifAuthorize": 0,  //是否授权（0-是 1-否）</div>
              <div class="line-indent-two">"icon": "xxxxxx",	 //icon</div>
              <div class="line-indent-two">"name": "xxxxx",		//轻应用名称</div>
              <div class="line-indent-two">"inUrl": "xxxx"		//轻应用地址</div>
            <div class="line-indent">}</div>
          <div class="line-first">}</div>
        `,
        javaCode: '',
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

export default connect(({ listAndQueryForAuthorization, loading }) => ({
  listAndQueryForAuthorization,
  loading: loading.models.listAndQueryForAuthorization,
}))(QueryForAuthorization);
