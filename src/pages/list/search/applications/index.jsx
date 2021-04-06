import { Card } from 'antd';
import React from 'react';
import { connect } from 'umi';
// import numeral from 'numeral';
// import StandardFormRow from './components/StandardFormRow';
// import TagSelect from './components/TagSelect';
import styles from './style.less';

export function Applications() {
  return (
    <div className={styles.filterCardList}>
      <Card bordered={false}>444444</Card>
    </div>
  );
}
export default connect(() => ({}))(Applications);
