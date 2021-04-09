import React from 'react';
import { Button, Form, Input, Modal, Card, Row, Col, Checkbox } from 'antd';
import './style.less';
import Img from '@/assets/getImage.png';

const FormItem = Form.Item;
const LoginPage = (props) => {
  const submitCancel = () => {
    // eslint-disable-next-line no-console
    console.log('modalcancel');
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
  const onFinish = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'formAndbasicForm/submitRegularForm',
      payload: values,
    });
  };
  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };
  const onValuesChange = (changedValues) => {
    // eslint-disable-next-line no-console
    console.log('changedValues:', changedValues);
    // const { publicType } = changedValues;
    // if (publicType) setShowPublicUsers(publicType === '2');
  };
  const { modalVisible } = props;

  return (
    <Modal
      title={'登录'}
      visible={modalVisible}
      width={460}
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
            public: '1',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
        >
          <FormItem
            {...formItemLayout}
            name="count"
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
            <Input placeholder="请输入密码" />
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
              <img src={Img} alt="" className="codeImg" />
            </Col>
          </Row>
          <FormItem {...submitFormLayout} name="remember" valuePropName="checked">
            <Checkbox>
              同意并遵守
              <span className="linkStyle">《用户服务协议》、</span>
              <span className="linkStyle">《用户隐私协议》</span>
            </Checkbox>
          </FormItem>
          <FormItem
            className="submitBtnContent"
            {...submitFormLayout}
            style={{
              marginTop: 32,
            }}
          >
            <Button type="primary" htmlType="submit" className="submitBtn">
              登录
            </Button>
          </FormItem>
        </Form>
      </Card>
    </Modal>
  );
};

export default LoginPage;
