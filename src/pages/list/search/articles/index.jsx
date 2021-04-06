import React from 'react';
import { Card } from 'antd';
// import { LoadingOutlined, StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { connect } from 'umi';
// import ArticleListContent from './components/ArticleListContent';
// import StandardFormRow from './components/StandardFormRow';
// import TagSelect from './components/TagSelect';
// import styles from './style.less';

// const { Option } = Select;
// const FormItem = Form.Item;
// const pageSize = 5;

const Articles = () => {
  // const [form] = Form.useForm();
  // useEffect(() => {
  //   dispatch({
  //     type: 'listAndsearchAndarticles/fetch',
  //     payload: {
  //       count: 5,
  //     },
  //   });
  // }, []);

  // const setOwner = () => {
  //   form.setFieldsValue({
  //     owner: ['wzj'],
  //   });
  // };

  // const fetchMore = () => {
  //   dispatch({
  //     type: 'listAndsearchAndarticles/appendFetch',
  //     payload: {
  // //       count: pageSize,
  // //     },
  // //   });
  // // };

  // const owners = [
  //   {
  //     id: 'wzj',
  //     name: '我自己',
  //   },
  //   {
  //     id: 'wjh',
  //     name: '吴家豪',
  //   },
  //   {
  //     id: 'zxx',
  //     name: '周星星',
  //   },
  //   {
  //     id: 'zly',
  //     name: '赵丽颖',
  //   },
  //   {
  //     id: 'ym',
  //     name: '姚明',
  //   },
  // ];

  // const IconText = ({ type, text }) => {
  //   switch (type) {
  //     case 'star-o':
  //       return (
  //         <span>
  //           <StarOutlined
  //             style={{
  //               marginRight: 8,
  //             }}
  //           />
  //           {text}
  //         </span>
  //       );

  //     case 'like-o':
  //       return (
  //         <span>
  //           <LikeOutlined
  //             style={{
  //               marginRight: 8,
  //             }}
  //           />
  //           {text}
  //         </span>
  //       );

  //     case 'message':
  //       return (
  //         <span>
  //           <MessageOutlined
  //             style={{
  //               marginRight: 8,
  //             }}
  //           />
  //           {text}
  //         </span>
  //       );

  //     default:
  //       return null;
  //   }
  // };

  // const formItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //     },
  //     sm: {
  //       span: 24,
  //     },
  //     md: {
  //       span: 12,
  //     },
  //   },
  // };
  // const loadMore = list.length > 0 && (
  //   <div
  //     style={{
  //       textAlign: 'center',
  //       marginTop: 16,
  //     }}
  //   >
  //     <Button
  //       onClick={fetchMore}
  //       style={{
  //         paddingLeft: 48,
  //         paddingRight: 48,
  //       }}
  //     >
  //       {loading ? (
  //         <span>
  //           <LoadingOutlined /> 加载中...
  //         </span>
  //       ) : (
  //         '加载更多'
  //       )}
  //     </Button>
  //   </div>
  // );
  return (
    <>
      <Card bordered={false}>111111</Card>
    </>
  );
};

export default connect(({ listAndsearchAndarticles, loading }) => ({
  listAndsearchAndarticles,
  loading: loading.models.listAndsearchAndarticles,
}))(Articles);
