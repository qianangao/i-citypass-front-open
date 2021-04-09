import React, { PureComponent } from 'react';
import { Card } from 'antd';
// import { connect } from 'umi';
import './style.less';

class QueryForAuthorization extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        title:
          '色彩（Color）是用来表达活力，传递信息，沟通状态，提供操作反馈，保持体验一致的重要元素。根据衡水特色和用户反馈，选取蓝色为主色调，清爽的蓝色体现政府的亲和力。各版块内容做适量地色调差异，统一而不单调。',
        requestMethod:
          '主色的制定是为了保持品牌识别性，并传达有效信息，指引操作并交互反馈，严格遵循清晰明确、简洁统一的设计原则。',
        requestUrl:
          '功能色是表示明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。我们建议在一套产品体系下，功能色尽量保持一致，减少过多的自定义，干扰用户的认知体验。',
        requtUrl:
          '中性色主要被大量的应用在界面的文字部分，此外背景、边框、分割线、等场景中也非常常见。产品中性色的定义需要考虑深色背景以及浅色背景的差异。',
      },
    };
  }

  render() {
    const { queryForAuthorization } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <p className="show-title">{queryForAuthorization.title}</p>
          <p className="show-title">{queryForAuthorization.requestMethod}</p>
          <p className="show-title">{queryForAuthorization.requestUrl}</p>
          <p className="show-title">{queryForAuthorization.requtUrl}</p>

          <div className="background">
            {/* <img src="../../../../assets/JSBridge/colorStyle.png" alt=""/> */}
          </div>
        </Card>
      </div>
    );
  }
}

export default QueryForAuthorization;

// export default connect(({ querySpace, loading }) => ({
//   querySpace,
//   loading: loading.models.querySpace,
// }))(QueryForAuthorization);
