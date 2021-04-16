import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
// import { Avatar, Menu, Spin } from 'antd';
import { Avatar, Menu, message } from 'antd';
import React from 'react';
import { connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import LoginPage from './Login/Login';
import LoginIcon from '@/assets/login.png';

const IconText = ({ icon }) => <span>{icon}</span>;
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
          type: 'loginPageContent/logout',
        }).then((res) => {
          if (res.code === 200) {
            message.success('退出成功！');
            localStorage.setItem('accessToken', '');
          }
        });
      }
    }
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        userName: '',
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
    return currentUser && currentUser.userName ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          {currentUser.avatar ? (
            <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          ) : (
            <span className={styles.avatarImg}>
              <IconText key="like" icon={<UserOutlined />} />
            </span>
          )}
          <span className={`${styles.name} anticon`}>{currentUser.userName}</span>
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

export default connect(({ loginPageContent }) => ({
  currentUser: loginPageContent.userObj,
}))(AvatarDropdown);
