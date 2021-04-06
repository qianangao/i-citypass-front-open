import React from 'react';
import { Card } from 'antd';
import { connect } from 'umi';
import styles from './style.less';

const Articles = () => {
  // const json = ''

  return (
    <>
      <Card bordered={false}>
        <h2 className={styles.title}>查询是否授权（不需要加密）</h2>
        <h3 className={styles.mark}>请求地址</h3>
        <p className={styles.url}>Get 地址：http://ip:port/system/app/authorize/whether</p>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>类型</th>
              <th>参数</th>
              <th>是否必须 </th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Long</td>
              <td>lightId</td>
              <td>是</td>
              <td>轻应用id</td>
            </tr>
          </tbody>
        </table>
        <p className={styles.ertitle}>传入json示例 </p>
        <div className={styles.box}>{/* <span>"lightId": "1"</span> */}</div>
        <p className={styles.ertitle}>返回json示例</p>
        <div className={styles.box}>
          {/* <textarea name="" id="" cols="30" rows="10"> */}
          {/* {
              "msg": "操作成功",
                  "code": "200",
                  "data": {
              "userAccessToken": "YOUR_USER_ACCESS_TOKEN",
                    "verifyResult": true,
                    "expiresIn": 7200
                  }
          } */}
          {/* </textarea> */}
          {/* <p>"msg":</p><p>"操作成功",</p>
          <p>"code":</p><p> "200",</p>
          <p>"data": </p>
          <p> "ifAuthorize": 0,  //是否授权（0-是 1-否）</p>
          <p>
            "icon": "xxxxxx",	 <span className={styles.span}>//icon</span>
          </p>
          <p>
            "name": "xxxxx",	<span className={styles.span}>//轻应用名称</span>
          </p>
          <p>
            "inUrl": "xxxx"		 <span className={styles.span}>//轻应用地址</span>
          </p>
            <span>"}"</span> */}
        </div>
      </Card>
    </>
  );
};

export default connect(() => ({}))(Articles);
