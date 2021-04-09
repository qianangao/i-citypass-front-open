import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import './style.less';

class RequestHeaderFormat extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      confidentiality: {
        request: '保密性要求',
        one: ' 服务接口应使用 HTTP/HTTPS 协议 。',
        two:
          '服务接口参数中敏感业务数据应在前端 App 和后端服务器之间点对点加密传输，加密在应用层实现。',
        three:
          '口调用非业务需要，不传输包含用户个人信息等敏感信息的数据。用于查询、关联的参数字段，尽量使用非个人信息。',
        four: '使用的密码算法优先选择国密算法如 SM2、SM3 等。',
      },
      completeness: {
        request: '完整性要求',
        one: ' 服务接口应使用 HTTP/HTTPS协议。',
        two:
          '服务接口参数中敏感业务数据，应做数字签名，接口中有数字签名的参数，防止敏感参数在传输过程中被篡改。',
        three: '使用的密码算法优先选择国密算法如 SM2、SM3 等。',
      },
      availability: {
        request: '可用性要求',
        one: ' 接口设计应能防止暴力破解、恶意消耗资源等攻击。',
      },
      other: {
        request: '其他要求',
        one:
          ' 根据业务逻辑安全的要求，应重点考虑对抗重放、参数篡改、短信轰炸、第三方收费接口轰炸等攻击。',
        two:
          '根据业务逻辑安全的要求，应重点考虑对抗重放、参数篡改、短信轰炸、第三方收费接口轰炸等攻击。',
        three:
          '使用的密码服务接入单位调用第三方服务时，需保障第三方服务的安全准入，并对其所调用的第三方服务资源输出内容提供安全保证。算法优先选择国密算法如 SM2、SM3 等。',
      },
    };
  }

  render() {
    const { confidentiality, completeness, availability, other } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <p className="show-title">{confidentiality.request}</p>
          <p>一 、{confidentiality.one}</p>
          <p>二 、{confidentiality.two}</p>
          <p>三 、{confidentiality.three}</p>
          <p>四 、{confidentiality.four}</p>

          <p className="show-title">{completeness.request}</p>
          <p>一 、{completeness.one}</p>
          <p>二 、{completeness.two}</p>
          <p>三 、{completeness.three}</p>

          <p className="show-title">{availability.request}</p>
          <p>一 、{availability.one}</p>

          <p className="show-title">{other.request}</p>
          <p>一 、{other.one}</p>
          <p>二 、{other.two}</p>
          <p>三 、{other.three}</p>
        </Card>
      </div>
    );
  }
}

export default connect(({ listAndRequestHeaderFormat, loading }) => ({
  listAndRequestHeaderFormat,
  loading: loading.models.listAndRequestHeaderFormat,
}))(RequestHeaderFormat);
