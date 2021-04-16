import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Modal, Card, Row, Col, Checkbox } from 'antd';
import { connect, history } from 'umi';
import md5 from 'md5';
import './style.less';

const FormItem = Form.Item;
export const LoginPage = (props) => {
  const {
    dispatch,
    modalVisible,
    myKey,
    loginPageContent: { codeObj },
  } = props;
  const [isRember, setIsRember] = useState(true);
  useEffect(() => {
    if (dispatch && props.modalVisible) {
      dispatch({
        type: 'loginPageContent/authGetCode',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.modalVisible]);
  const submitCancel = () => {
    props.submitCancel(false);
  };
  const [form] = Form.useForm();
  const formItemLayout = {
    wrapperCol: {
      span: 24,
    },
  };
  const submitFormLayout = {
    wrapperCol: {
      span: 24,
      offset: 0,
    },
  };
  const refreshCode = () => {
    if (dispatch) {
      dispatch({
        type: 'loginPageContent/authGetCode',
      });
    }
  };
  const onFinish = (values) => {
    if (dispatch) {
      const params = {
        uuid: codeObj && codeObj.uuid,
        username: values && values.username,
        password: md5(values) && md5(values.password),
        code: values && values.code,
      };
      dispatch({
        type: 'loginPageContent/authLogin',
        payload: params,
      }).then((res) => {
        if (res.code === 200) {
          props.submitCancel(false);
          localStorage.setItem('accessToken', res.data && res.data.accessToken);
          // 获取用户信息
          dispatch({
            type: 'loginPageContent/getUserInfo',
          }).then((response) => {
            sessionStorage.setItem('userName', response.data && response.data.userName);
          });
        } else {
          refreshCode();
        }
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log(errorInfo);
  };
  const onValuesChange = (changedValues) => {
    const { remember } = changedValues;
    if (remember === undefined) {
      setIsRember(true);
    } else {
      setIsRember(remember);
    }
  };
  const jumpAgreement = (e, type) => {
    e.stopPropagation();
    props.submitCancel(false);
    if (type === 'service') {
      history.push({
        pathname: '/agreement/service-agreement',
      });
    }
    if (type === 'privacy') {
      history.push({
        pathname: '/agreement/privacy-agreement',
      });
    }
  };

  return (
    <Modal
      title={'登录'}
      visible={modalVisible}
      key={myKey}
      width={460}
      maskClosable={false}
      className="modalStyle"
      onCancel={() => {
        submitCancel();
      }}
      footer={null}
    >
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{
            marginTop: 8,
          }}
          form={form}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            name="username"
            rules={[
              {
                required: true,
                message: '请输入账号',
              },
            ]}
          >
            <Input placeholder="请输入账号" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input placeholder="请输入密码" type="password" />
          </FormItem>
          <Row gutter={{ md: 8, lg: 24, xl: 20 }}>
            <Col md={18} sm={18}>
              <FormItem
                {...formItemLayout}
                name="code"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码',
                  },
                ]}
              >
                <Input placeholder="请输入验证码" />
              </FormItem>
            </Col>
            <Col md={6} sm={6} className="codeImgContent">
              {codeObj && codeObj.img ? (
                <img
                  src={`data:image/jpg;base64,${codeObj.img}`}
                  alt=""
                  className="codeImg"
                  onClick={refreshCode}
                />
              ) : null}
            </Col>
          </Row>
          <Row gutter={{ md: 8, lg: 24, xl: 20 }} className="isRemember">
            <Col md={6} sm={6} className="isRememberLeft">
              <FormItem {...submitFormLayout} name="remember" valuePropName="checked">
                <Checkbox>同意并遵守</Checkbox>
              </FormItem>
            </Col>
            <Col md={18} sm={18} className="agreement">
              <span className="linkStyle" onClick={(e) => jumpAgreement(e, 'service')}>
                《用户服务协议》、
              </span>
              <span className="linkStyle" onClick={(e) => jumpAgreement(e, 'privacy')}>
                《用户隐私协议》
              </span>
            </Col>
          </Row>
          <FormItem
            className="submitBtnContent"
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit" className="submitBtn" disabled={!isRember}>
              登录
            </Button>
          </FormItem>
        </Form>
      </Card>
    </Modal>
  );
};

export default connect(({ loginPageContent, loading }) => ({
  loginPageContent,
  loading: loading.models.loginPageContent,
}))(LoginPage);
