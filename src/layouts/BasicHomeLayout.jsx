// import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
// import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { Link, SelectLang, useIntl, connect, FormattedMessage } from 'umi';
// import React from 'react';
// import logo from '../assets/logo.svg';
// import styles from './UserLayout.less';

// const UserLayout = (props) => {
//   const {
//     route = {
//       routes: [],
//     },
//   } = props;
//   const { routes = [] } = route;
//   const {
//     children,
//     location = {
//       pathname: '',
//     },
//   } = props;
//   const { formatMessage } = useIntl();
//   const { breadcrumb } = getMenuData(routes);
//   const title = getPageTitle({
//     pathname: location.pathname,
//     formatMessage,
//     breadcrumb,
//     ...props,
//   });
//   return (
//     <HelmetProvider>
//       <div className={styles.container}>
//         <div>
//           {children}
//         </div>
//         <DefaultFooter />
//       </div>
//     </HelmetProvider>
//   );
// };

// export default connect(({ settings }) => ({ ...settings }))(UserLayout);
