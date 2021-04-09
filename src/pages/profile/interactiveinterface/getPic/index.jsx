/* eslint-disable */
import React, { PureComponent } from 'react';
import { Card } from 'antd';
import CommonComponent from '@/components/JSBridgeComponent/Common';
// import { connect } from 'umi';

class GetRequestcode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      queryForAuthorization: {
        isHeader: false,
        isRules: false,
        rules: '',
        title: 'H5端从原生获取图片，可以拍照或从相册中选择，将图片数据转成base64的格式返回',
        requestName: 'getPicOrAlbum',
        requestUrl: '返回码，成功（200），失败（500）',
        outParams: 'object  response',
        InParams: 'Object data',
        outputParameters: [
          {
            key: 0,
            type: 'Number',
            parameter: 'code',
            isNecessary: '是',
            explain: '返回码，成功（200），失败（500）',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'msg',
            isNecessary: '是',
            explain: '失败：获取信息异常',
          },
          {
            key: 2,
            type: 'Object',
            parameter: 'data',
            isNecessary: '是',
            explain: '返回数据',
          },
        ],
        incomingParameters: [
          {
            key: 0,
            type: 'String',
            parameter: 'content',
            isNecessary: '是',
            explain: '图片内容，转成base64格式',
          },
          {
            key: 1,
            type: 'String',
            parameter: 'fileName',
            isNecessary: '是',
            explain: '图片名称，获取当前时间生成的',
          },
          {
            key: 2,
            type: 'String',
            parameter: 'fileext',
            isNecessary: '是',
            explain: '',
          },
        ],
        passInJSON: `
        <div class="line-first">{</div>
          <div class="line-indent">"window.WebViewJavascriptBridge.callHandler('getPicOrAlbum', null, "</div>
          <div class="line-indent"> "function (response) {"</div>
            <div class="line-indent-two">$('#log').text('getPicOrAlbum');</div>
            <div class="line-indent-two">showResponse(response);</div>
            <div class="line-indent-two">});</div>
          <div class="line-first">}</div>

        `,
        returnInJson: `
          <div class="line-first">{</div>
            <div class="line-indent">“msg”:”success”,</div>
            <div class="line-indent">“code”:”200”,</div>
            <div class="line-indent">“data”: {</div>
              <div class="line-indent-two">“content”:”data:image\/png;base64,\/9j\/4AAQSkZJRgABAQA...”,</div>
              <div class="line-indent-two">“fileName”:”20210309094021.png”,</div>
              <div class="line-indent-two">“fileext”:””</div>
              <div class="line-indent-two">}</div>
          <div class="line-first">}</div>
        `,
      },
    };
  }

  render() {
    const { queryForAuthorization } = this.state;
    return (
      <div>
        <Card bordered={false}>
          <CommonComponent tableData={queryForAuthorization} />
        </Card>
      </div>
    );
  }
}

// export default connect(({ getSpace, loading }) => ({
//   getSpace,
//   loading: loading.models.getSpace,
// }))(GetRequestcode);
export default GetRequestcode;
