import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../components/Common';

class QueryForAuthorization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
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
          {
            "lightId": "1"
          }
        `,
        returnInJson: `
          {
            "msg": "操作成功",
            "code": "200",
            "data": {
              "ifAuthorize": 0,  //是否授权（0-是 1-否）
              "icon": "xxxxxx",	 //icon
              "name": "xxxxx",		//轻应用名称
              "inUrl": "xxxx"		//轻应用地址
            }
        }
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

export default connect(({ listAndQueryForAuthorization, loading }) => ({
  listAndQueryForAuthorization,
  loading: loading.models.listAndQueryForAuthorization,
}))(QueryForAuthorization);
