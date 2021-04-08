import React, { Component } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';

class Search extends Component {
  handleTabChange = (key) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'call-originator':
        history.push(`${url}/call-originator`);
        break;

      case 'requestHeader-format':
        history.push(`${url}/requestHeader-format`);
        break;

      case 'errorCode-set':
        history.push(`${url}/errorCode-set`);
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

    return 'call-originator';
  };

  render() {
    const tabList = [
      {
        key: 'call-originator',
        tab: '适用人群',
      },
      {
        key: 'errorCode-set',
        tab: '服务接入前准备',
      },
      {
        key: 'requestHeader-format',
        tab: '服务接入安全要求',
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
