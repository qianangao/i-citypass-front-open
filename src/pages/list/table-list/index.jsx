import React, { Component } from 'react';
// import { Input } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from 'umi';

class TableList extends Component {
  handleTabChange = (key) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;

    switch (key) {
      case 'articles':
        history.push(`${url}/articles`);
        break;

      case 'applications':
        history.push(`${url}/applications`);
        break;

      case 'projects':
        history.push(`${url}/projects`);
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

    return 'articles';
  };

  render() {
    const tabList = [
      {
        key: 'articles',
        tab: '查询是否授权（不需要加密）',
      },
      {
        key: 'projects',
        tab: '修改用户授权状态（不需要加密）',
      },
      {
        key: 'applications',
        tab: '获取requestCode',
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

export default TableList;
