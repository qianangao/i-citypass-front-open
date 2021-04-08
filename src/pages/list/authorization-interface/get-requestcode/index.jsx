import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../components/Common';

class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getRequestcode: {
        isHeader: true,
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
        returnInJson: `
          {
            "msg": "操作成功",
            "code": "200",
            "data": "Your_Request_Code"
        }
        `,
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
