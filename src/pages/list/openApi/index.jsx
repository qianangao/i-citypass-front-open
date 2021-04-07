import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';

class Search extends Component {
  handleTabChange = (key) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'get-userInfo':
        history.push(`${url}/get-userInfo`);
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

    return 'get-userInfo';
  };

  render() {
    const tabList = [
      {
        key: 'get-userInfo',
        tab: '获取用户信息（不需要加密）',
      },
    ];
    const { children } = this.props;
    return (
      <PageContainer
        // content={mainSearch}
        tabList={tabList}
        tabActiveKey={this.getTabKey()}
        onTabChange={this.handleTabChange}
      >
        {children}
      </PageContainer>
    );
  }
}

export default Search;
