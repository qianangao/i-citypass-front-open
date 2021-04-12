// import React, { useState, useEffect } from 'react';
// import { Button, Form, Input, Modal, Card, Row, Col, Checkbox } from 'antd';
// import { connect, history } from 'umi';
// import './style.less';
// import Img from '@/assets/getImage.png';

// const FormItem = Form.Item;
// export const LoginPage = (props) => {
//   const {
//     dispatch,
//     codeImg
//   } = props;
//   const [isRember, setIsRember] = useState(true);
//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     // if (dispatch) {
//     //   dispatch({
//     //     type: 'loginPage/authGetCode',
//     //   });
//     // }
//   }, []);
//   const submitCancel = () => {
//     props.submitCancel(false);
//   };
//   const [form] = Form.useForm();
//   const formItemLayout = {
//     wrapperCol: {
//       span: 24,
//     },
//   };
//   const submitFormLayout = {
//     wrapperCol: {
//       span: 24,
//       offset: 0,
//     },
//   };
//   const onFinish = (values) => {
//     if(dispatch) {
//       dispatch({
//         type: 'loginPage/authLogin',
//         payload: values,
//       });
//     }
//     // eslint-disable-next-line no-console
//     console.log(codeImg);
//   };
//   const onFinishFailed = (errorInfo) => {
//     // eslint-disable-next-line no-console
//     console.log(errorInfo);
//   };
//   const onValuesChange = (changedValues) => {
//     const { remember } = changedValues;
//     remember === undefined ? setIsRember(true) : setIsRember(remember);
//   };
//   const jumpAgreement = (e, type) => {
//     e.stopPropagation();
//     // e.nativeEvent.stopImmediatePropagation();
//     if (type === 'service') {
//       history.push({
//         pathname: '/agreement/service-agreement',
//       });
//     }
//     if (type === 'privacy') {
//       history.push({
//         pathname: '/agreement/privacy-agreement',
//       });
//     }
//     props.submitCancel(false);
//   };
//   const { modalVisible } = props;

//   return (
//     <Modal
//       title={'登录'}
//       visible={modalVisible}
//       width={460}
//       maskClosable={false}
//       className="modalStyle"
//       onCancel={() => {
//         submitCancel();
//       }}
//       footer={null}
//     >
//       <Card bordered={false}>
//         <Form
//           hideRequiredMark
//           style={{
//             marginTop: 8,
//           }}
//           form={form}
//           name="basic"
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed()}
//           onValuesChange={onValuesChange}
//         >
//           <FormItem
//             {...formItemLayout}
//             name="count"
//             rules={[
//               {
//                 required: true,
//                 message: '请输入账号',
//               },
//             ]}
//           >
//             <Input placeholder="请输入账号" />
//           </FormItem>
//           <FormItem
//             {...formItemLayout}
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: '请输入密码',
//               },
//             ]}
//           >
//             <Input placeholder="请输入密码" type="password" />
//           </FormItem>
//           <Row gutter={{ md: 8, lg: 24, xl: 20 }}>
//             <Col md={18} sm={18}>
//               <FormItem
//                 {...formItemLayout}
//                 name="code"
//                 rules={[
//                   {
//                     required: true,
//                     message: '请输入验证码',
//                   },
//                 ]}
//               >
//                 <Input placeholder="请输入验证码" />
//               </FormItem>
//             </Col>
//             <Col md={6} sm={6} className="codeImgContent">
//               <img src={Img} alt="" className="codeImg" />
//             </Col>
//           </Row>
//           <Row gutter={{ md: 8, lg: 24, xl: 20 }} className="isRemember">
//             <Col md={6} sm={6} className="isRememberLeft">
//               <FormItem {...submitFormLayout} name="remember" valuePropName="checked">
//                 <Checkbox>同意并遵守</Checkbox>
//               </FormItem>
//             </Col>
//             <Col md={18} sm={18} className="agreement">
//               <span className="linkStyle" onClick={(e) => jumpAgreement(e, 'service')}>
//                 《用户服务协议》、
//               </span>
//               <span className="linkStyle" onClick={(e) => jumpAgreement(e, 'privacy')}>
//                 《用户隐私协议》
//               </span>
//             </Col>
//           </Row>
//           <FormItem
//             className="submitBtnContent"
//             {...submitFormLayout}
//             style={{
//               marginTop: 32,
//             }}
//           >
//             <Button type="primary" htmlType="submit" className="submitBtn" disabled={!isRember}>
//               登录
//             </Button>
//           </FormItem>
//         </Form>
//       </Card>
//     </Modal>
//   );
// };

// export default connect(({ loginPage, loading }) => ({
//   loginPage,
//   loading: loading.models.loginPage,
// }))(LoginPage); ;
