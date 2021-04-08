import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import CommonComponent from '../../oAuth/components/Common';

class GetUserInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      getUserInfo: {
        isHeader: false,
        requestMethod: 'Post',
        requestUrl: 'http://ip:port/system/appUser/userInfo/getUserInfo',
        incomingParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'userAccessToken',
            isNecessary: '是',
            explain: '用户级别的访问令牌',
          },
        ],
        passInJSON: `
        { "userAccessToken": "YOUR_USER_ACCESS_TOKEN" }
        `,
        outputParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'msg',
            isNecessary: '是',
            explain: '提示信息',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'code',
            isNecessary: '是',
            explain: '返回码',
          },
          {
            key: 2,
            type: 'String',
            parameter: 'data',
            isNecessary: '是',
            explain: '用户信息',
          },
          {
            key: 3,
            type: 'Long',
            parameter: 'data.userId',
            isNecessary: '是',
            explain: '用户id',
          },
          {
            key: 4,
            type: 'String',
            parameter: 'data.userName',
            isNecessary: '是',
            explain: '用户真实姓名',
          },
          {
            key: 5,
            type: 'String',
            parameter: 'data.nickName',
            isNecessary: '是',
            explain: '用户昵称',
          },
          {
            key: 6,
            type: 'String',
            parameter: 'data.phone',
            isNecessary: '是',
            explain: '手机号码',
          },
          {
            key: 7,
            type: 'String',
            parameter: 'data.sex',
            isNecessary: '是',
            explain: '用户性别 "0=男,1=女,2=未知"',
          },
          {
            key: 8,
            type: 'String',
            parameter: 'data.avatar',
            isNecessary: '是',
            explain: '用户头像',
          },
          {
            key: 9,
            type: 'String',
            parameter: 'data.status',
            isNecessary: '是',
            explain: '帐号状态（0正常 1停用）',
          },
          {
            key: 10,
            type: 'String',
            parameter: 'data.isDel',
            isNecessary: '是',
            explain: '删除标志（0代表存在 2代表删除）',
          },
          {
            key: 11,
            type: 'String',
            parameter: 'data.isIdentity',
            isNecessary: '是',
            explain: '是否实名认证（是否实名认证 (0 是，1否)）',
          },
          {
            key: 12,
            type: 'String',
            parameter: 'data.identityNum',
            isNecessary: '是',
            explain: '证件号',
          },
          {
            key: 13,
            type: 'String',
            parameter: 'data.identityType',
            isNecessary: '是',
            explain: '实名认证方式',
          },
        ],
        returnInJson: `
        {
          "msg": "操作成功",
          "code": "200",
          "data": {
            "userId":1 ,
            "userName":"",
            "nickName":"",
            "phone":"",
            "sex":"",
            "avatar":"",
            "status":"",
            "isDel":"",
            "isIdentity":"",
            "identityNum":"",
            "identityType":""
          }
        }
        
        返回json经过加密，请先AES解密，再SM4解密。
        `,
      },
    };
  }

  render() {
    const { getUserInfo } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={getUserInfo} />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndGetUserInfo, loading }) => ({
  listAndGetUserInfo,
  loading: loading.models.listAndGetUserInfo,
}))(GetUserInfo);
