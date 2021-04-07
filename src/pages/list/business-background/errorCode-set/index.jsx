import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'umi';
// import styles from './style.less';
const columns = [
  {
    title: '返回码',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '返回码描述',
    dataIndex: 'codeDescription',
    key: 'codeDescription',
  },
  {
    title: '解决方案',
    dataIndex: 'solution',
    key: 'solution',
  },
];
class ErrorCodeSet extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorCodeSetData: [
        {
          key: 0,
          code: '201',
          codeDescription: '操作失败',
          solution: '稍后重试',
        },
        {
          key: 1,
          code: '40021',
          codeDescription: 'accessToken校验错误',
          solution: '检查所传参数',
        },
        {
          key: 2,
          code: '40023',
          codeDescription: 'authCode校验错误',
          solution: '需要重新获取authCode',
        },
        {
          key: 3,
          code: '40025',
          codeDescription: 'refreshToken校验错误',
          solution: '检查所传参数',
        },
        {
          key: 4,
          code: '40039',
          codeDescription: 'requestCode校验错误',
          solution: '检查所传参数',
        },
        {
          key: 5,
          code: '40042',
          codeDescription: '密文校验错误',
          solution: '检查所传参数',
        },
        {
          key: 6,
          code: '40043',
          codeDescription: 'appId不存在',
          solution: '检查appId的环境是否与App环境相对应，检查所传参数',
        },
        {
          key: 7,
          code: '40044',
          codeDescription: 'appUser不存在',
          solution: '智慧城市不存在此用户',
        },
        {
          key: 8,
          code: '40045',
          codeDescription: 'userAccessToken校验错误',
          solution: '检查参数',
        },
        {
          key: 9,
          code: '41000',
          codeDescription: '未传参数',
          solution: '检查所传参数',
        },
        {
          key: 10,
          code: '41001',
          codeDescription: 'userAccessToken为空',
          solution: '检查所传参数',
        },
        {
          key: 11,
          code: '41016',
          codeDescription: '缺失appId参数',
          solution: '检查所传参数',
        },
        {
          key: 12,
          code: '41017',
          codeDescription: 'authCode传入的值为空',
          solution: '检查所传参数',
        },
        {
          key: 13,
          code: '41018',
          codeDescription: '传入的refreshToken值为空',
          solution: '检查所传参数',
        },
        {
          key: 14,
          code: '41019',
          codeDescription: '缺失appSecret参数',
          solution: '检查所传参数',
        },
        {
          key: 15,
          code: '41020',
          codeDescription: '长度为10位或者13位的时间戳',
          solution: '检查所传参数',
        },
        {
          key: 16,
          code: '41021',
          codeDescription: 'randomSeries长度10位',
          solution: '检查所传参数',
        },
        {
          key: 17,
          code: '41031',
          codeDescription: 'timestamp时间戳为空',
          solution: '检查所传参数',
        },
        {
          key: 18,
          code: '41032',
          codeDescription: 'randomSeries不能为空,长度为固定10位',
          solution: '检查所传参数',
        },
        {
          key: 19,
          code: '41033',
          codeDescription: 'cipherText密文为空',
          solution: '检查所传参数',
        },
        {
          key: 20,
          code: '41035',
          codeDescription: '传入的token值为空',
          solution: '检查所传参数',
        },
        {
          key: 21,
          code: '41036',
          codeDescription: '传入requestCode的值为空',
          solution: '检查所传参数',
        },
        {
          key: 22,
          code: '41037',
          codeDescription: '传入accessToken值为空',
          solution: '检查所传参数',
        },
        {
          key: 23,
          code: '41038',
          codeDescription: '传入refreshToken值为空',
          solution: '检查所传参数',
        },
        {
          key: 24,
          code: '42020',
          codeDescription: 'accessToken已失效',
          solution: '需要重新获取accessToken',
        },
        {
          key: 25,
          code: '42022',
          codeDescription: 'requestCode已失效',
          solution: '需要重新获取request',
        },
        {
          key: 26,
          code: '42023',
          codeDescription: 'requestCode校验错误',
          solution: '需要重新获取authCode',
        },
        {
          key: 27,
          code: '42024',
          codeDescription: 'refreshToken已失效',
          solution: '需要重新获取refreshToken',
        },
        {
          key: 28,
          code: '42026',
          codeDescription: 'userAccessToken已失效',
          solution: '需要重新获取userAccessToken',
        },
        {
          key: 29,
          code: '50000',
          codeDescription: '项目服务异常',
          solution: '项目服务异常',
        },
        {
          key: 30,
          code: '51000',
          codeDescription: '未在白名单中，或是直接用H5调用了开放平台接口',
          solution: '将对应ip添加到白名单中，由业务方后台来请求开放平台接口',
        },
      ],
    };
  }

  render() {
    const { errorCodeSetData } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <Table
            columns={columns}
            dataSource={errorCodeSetData}
            rowKey="key"
            pagination={false}
            scroll={{ y: 840 }}
            bordered
          />
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndErrorCodeSet, loading }) => ({
  listAndErrorCodeSet,
  loading: loading.models.listAndErrorCodeSet,
}))(ErrorCodeSet);
