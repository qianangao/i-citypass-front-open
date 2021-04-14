import { LogoutOutlined } from '@ant-design/icons';
// import { Avatar, Menu, Spin } from 'antd';
import { Avatar, Menu } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import LoginPage from './Login/Login';
import LoginIcon from '@/assets/login.png';

class AvatarDropdown extends React.Component {
  state = {
    modalVisible: false,
    myKey: '',
  };

  goLogin = () => {
    this.setState({
      modalVisible: true,
      myKey: Math.random(),
    });
  };

  submitCancel = (flag) => {
    this.setState({
      modalVisible: flag,
    });
  };

  onMenuClick = (event) => {
    const { key } = event;
    if (key === 'logout') {
      const { dispatch } = this.props;
      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }
      return;
    }
    history.push(`/account/${key}`);
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const { modalVisible, myKey } = this.state;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {/* {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )} */}
        {menu && <Menu.Divider />}
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return currentUser && !currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      // <span className={`${styles.action} ${styles.account}`}>
      //   <Spin
      //     size="small"
      //     style={{
      //       marginLeft: 8,
      //       marginRight: 8,
      //     }}
      //   />
      // </span>
      <div>
        <span className={`${styles.action} ${styles.account} `}>
          <div className={styles.loginStyle} onClick={this.goLogin}>
            <img src={LoginIcon} className={styles.loginIcon} alt="" /> 登录
          </div>
        </span>
        <LoginPage modalVisible={modalVisible} submitCancel={this.submitCancel} myKey={myKey} />
      </div>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
