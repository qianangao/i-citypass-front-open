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

      case 'modifyUserAuthorization-status':
        history.push(`${url}/modifyUserAuthorization-status`);
        break;

      case 'get-requestcode':
        history.push(`${url}/get-requestcode`);
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
        key: 'queryFor-authorization',
        tab: '色彩 Color',
      },
      {
        key: 'modifyUserAuthorization-status',
        tab: '字体 Typography',
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
