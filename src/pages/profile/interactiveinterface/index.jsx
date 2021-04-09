import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';

class AuthorizationInterface extends Component {
  handleTabChange = (key) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'queryFor-authorization':
        history.push(`${url}/queryFor-authorization`);
        break;

      case 'getAppVersion':
        history.push(`${url}/getAppVersion`);
        break;

      case 'get-requestcode':
        history.push(`${url}/get-requestcode`);
        break;

      case 'getCurrentOperate':
        history.push(`${url}/getCurrentOperate`);
        break;

      case 'getDeviceInfor':
        history.push(`${url}/getDeviceInfor`);
        break;

      case 'setNavTitle':
        history.push(`${url}/setNavTitle`);
        break;

      case 'setNavHidden':
        history.push(`${url}/setNavHidden`);
        break;

      default:
        break;
    }
  };

  handleFormSubmit = () => {};

  getTabKey = () => {
    const { match, location } = this.props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');

    if (tabKey && tabKey !== '/') {
      return tabKey;
    }

    return 'queryFor-authorization';
  };

  render() {
    const tabList = [
      {
        key: 'get-requestcode',
        tab: '获取requestCode',
      },
      {
        key: 'getAppVersion',
        tab: '获取版本号',
      },
      {
        key: 'queryFor-authorization',
        tab: '获取定位信息',
      },
      {
        key: 'getCurrentOperate',
        tab: '获取当前操作系统',
      },
      {
        key: 'getDeviceInfor',
        tab: '获取设备信息',
      },
      {
        key: 'getPic',
        tab: '获取图片',
      },
      {
        key: 'setNavTitle',
        tab: '设置导航栏标题',
      },
      {
        key: 'setNavHidden',
        tab: '设置原生导航栏是否隐藏',
      },
    ];
    const { children } = this.props;
    return (
      <PageContainer
        tabList={tabList}
        tabActiveKey={this.getTabKey()}
        onTabChange={this.handleTabChange}
      >
        {children}
      </PageContainer>
    );
  }
}

export default AuthorizationInterface;
