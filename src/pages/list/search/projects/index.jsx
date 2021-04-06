import { Card } from 'antd';
import React from 'react';
import { connect } from 'umi';
// import moment from 'moment';
// import AvatarList from './components/AvatarList';
// import StandardFormRow from './components/StandardFormRow';
// import TagSelect from './components/TagSelect';
import styles from './style.less';

const Projects = () => {
  return (
    // <div className={styles.coverCardList}>
    <Card bordered={false}>
      <h2 className={styles.h3}>错误码集合</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>返回码</th>
            <th>返回码描述</th>
            <th>解决方案</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>201</td>
            <td>操作失败</td>
            <td>稍后重试</td>
          </tr>
          <tr>
            <td>40021</td>
            <td>accessToken校验错误</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>40023</td>
            <td>authCode校验错误</td>
            <td>需要重新获取authCode</td>
          </tr>
          <tr>
            <td>40025</td>
            <td>refreshToken校验错误</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>40039</td>
            <td>requestCode校验错误</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>40041</td>
            <td>InitCode校验错误</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>40042</td>
            <td>密文校验错误</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>40043</td>
            <td>appId不存在</td>
            <td>检查appId的环境是否与App环境相对应，检查所传参数</td>
          </tr>
          <tr>
            <td>40045</td>
            <td>不能重复添加相同的白名单</td>
            <td>不需要重复调用</td>
          </tr>
          <tr>
            <td>41000</td>
            <td>未传参数</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41001</td>
            <td>userAccessToken为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41016</td>
            <td>缺失appId参数</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41017</td>
            <td>authCode传入的值为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41018</td>
            <td>传入的refreshToken值为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41031</td>
            <td>timestamp时间戳为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41032</td>
            <td>randomSeries不能为空, 长度为固定10位</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41033</td>
            <td>cipherText密文为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41034</td>
            <td>传入的initCode值为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41035</td>
            <td>传入的token值为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41036</td>
            <td>传入的requestCode值为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41037</td>
            <td>传入的accessToken值为空</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>41044</td>
            <td>请输入正确的ip白名单</td>
            <td>检查所传参数</td>
          </tr>
          <tr>
            <td>42020</td>
            <td>accessToken已失效</td>
            <td>需要重新获取accessToken</td>
          </tr>
          <tr>
            <td>42022</td>
            <td>authCode已失效</td>
            <td>需要重新获取authCode</td>
          </tr>
          <tr>
            <td>42023</td>
            <td>authCode校验错误</td>
            <td>需要重新获取authCode</td>
          </tr>
          <tr>
            <td>42024</td>
            <td>refreshToken已失效</td>
            <td>需要重新获取refreshToken</td>
          </tr>
          <tr>
            <td>42026</td>
            <td>userAccessToken已失效</td>
            <td>需要重新获取userAccessToken</td>
          </tr>
          <tr>
            <td>42038</td>
            <td>RequestCode已失效</td>
            <td>需要重新获取RequestCode</td>
          </tr>
          <tr>
            <td>42040</td>
            <td>InitCode已失效</td>
            <td>检查appId的环境是否与App环境相对应，检查所传参数</td>
          </tr>
          <tr>
            <td>51000</td>
            <td>未在白名单中，或是直接用H5请求了 xxx.do 接口</td>
            <td>将对应ip添加到白名单中，由业务方后台来请求开放平台后台接口</td>
          </tr>
          <tr>
            <td>41125</td>
            <td>消息标题长度过长</td>
            <td></td>
          </tr>
          <tr>
            <td>41126</td>
            <td>消息内容长度过长</td>
            <td></td>
          </tr>
          <tr>
            <td>41127</td>
            <td>没有发送消息通知的权限</td>
            <td></td>
          </tr>
          <tr>
            <td>41128</td>
            <td>当天发送消息次数超限</td>
            <td></td>
          </tr>
          <tr>
            <td>41129</td>
            <td>发送消息频率过于频繁</td>
            <td></td>
          </tr>
          <tr>
            <td>41130</td>
            <td>不支持的消息类型</td>
            <td></td>
          </tr>
          <tr>
            <td>41131</td>
            <td>消息接收人不能为空</td>
            <td></td>
          </tr>
          <tr>
            <td>41132</td>
            <td>消息接收人数超过1000</td>
            <td></td>
          </tr>
          <tr>
            <td>41136</td>
            <td>消息标题不能为空</td>
            <td></td>
          </tr>
          <tr>
            <td>41137</td>
            <td>消息内容不能为空</td>
            <td></td>
          </tr>
          <tr>
            <td>47015</td>
            <td>消息模板id参数缺失</td>
            <td></td>
          </tr>
          <tr>
            <td>47016</td>
            <td>消息参数为空</td>
            <td></td>
          </tr>
          <tr>
            <td>47017</td>
            <td>消息接收人为空</td>
            <td></td>
          </tr>
          <tr>
            <td>47018</td>
            <td>每条消息接收人数超过上限</td>
            <td></td>
          </tr>
          <tr>
            <td>47019</td>
            <td>参数数量与模板中要传入的参数数量不符</td>
            <td></td>
          </tr>
          <tr>
            <td>47020</td>
            <td>传入的参数不合法，请参考模板中标签的格式后重新修改对应参数</td>
            <td></td>
          </tr>
          <tr>
            <td>47021</td>
            <td>消息模板不需要传入参数</td>
            <td></td>
          </tr>
          <tr>
            <td>41127</td>
            <td>没有发送消息通知的权限</td>
            <td></td>
          </tr>
          <tr>
            <td>41128</td>
            <td>当天发送消息次数超限</td>
            <td></td>
          </tr>
          <tr>
            <td>47022</td>
            <td>消息模板错误，错误原因：不存在、未启用或者不属于当前政企号</td>
            <td></td>
          </tr>
          <tr>
            <td>47105</td>
            <td>缺失baseMapGetToken参数</td>
            <td></td>
          </tr>
          <tr>
            <td>47106</td>
            <td>baseMapGetToken已失效</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default connect(({ listAndsearchAndprojects, loading }) => ({
  listAndsearchAndprojects,
  loading: loading.models.listAndsearchAndprojects,
}))(Projects);
