import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../components/Common';

class ModifyUserAuthorizationStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modifyUserAuthorizationStatus: {
        isHeader: false,
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/app/authorize/update',
        incomingParameters: [
          {
            key: 0,
            type: 'Long',
            parameter: 'lightId',
            isNecessary: '是',
            explain: '轻应用id',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'ifAuthorize',
            isNecessary: '是',
            explain: '是否授权（0-是 1-否）',
          },
        ],
        passInJSON: `
        {
          "lightId": 1,
          "ifAuthorize": "0"
        }
        `,
        returnInJson: `
          {
            "msg": "操作成功",
            "code": "200",
            "data": {}
        }
        `,
      },
    };
  }

  render() {
    const { modifyUserAuthorizationStatus } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={modifyUserAuthorizationStatus} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndModifyUserAuthorizationStatus, loading }) => ({
  listAndModifyUserAuthorizationStatus,
  loading: loading.models.listAndModifyUserAuthorizationStatus,
}))(ModifyUserAuthorizationStatus);
