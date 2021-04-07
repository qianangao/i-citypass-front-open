import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';

class Search extends Component {
  handleTabChange = (key) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'encryption-rules':
        history.push(`${url}/encryption-rules`);
        break;

      case 'get-accessToken':
        history.push(`${url}/get-accessToken`);
        break;

      case 'refresh-accessToken':
        history.push(`${url}/refresh-accessToken`);
        break;

      case 'check-accessToken':
        history.push(`${url}/check-accessToken`);
        break;

      case 'get-userAccessToken':
        history.push(`${url}/get-userAccessToken`);
        break;

      default:
        break;
    }
  };

  handleFormSubmit = (value) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  getTabKey = () => {
    const { match, location } = this.props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');

    if (tabKey && tabKey !== '/') {
      return tabKey;
    }

    return 'encryption-rules';
  };

  render() {
    const tabList = [
      {
        key: 'encryption-rules',
        tab: '加密规则',
      },
      {
        key: 'get-accessToken',
        tab: '获取accessToken',
      },
      {
        key: 'refresh-accessToken',
        tab: '刷新accessToken',
      },
      {
        key: 'check-accessToken',
        tab: '校验accessToken',
      },
      {
        key: 'get-userAccessToken',
        tab: '获取userAccessToken',
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
