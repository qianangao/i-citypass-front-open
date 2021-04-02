import React from 'react';
import { Button, message } from 'antd';
import SwiperComponent from './components/Swiper';
import { connect } from 'umi';
import styles from './style.less';
import allData from './_mock.js';
import bgPic from '../../../assets/home/pic_bg.png';

const jionUs = () => {
  message.info({
    content: '即将开放申请，敬请期待',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

const Background = ({ title, des, btnTitle }) => (
  <div className={styles.bgInfo}>
    <div className={styles.bgTitle}>
      <h2>{title}</h2>
      <p>{des}</p>
      <Button
        className="bgButton"
        size="large"
        type="primary"
        onClick={() => {
          jionUs();
        }}
      >
        {btnTitle}
      </Button>
    </div>
    <CardContent cardData={allData.cardData} />
  </div>
);

const CardContent = ({ cardData }) => (
  <div className={styles.cardContent}>
    <ul>
      {cardData.length &&
        cardData.map((item) => (
          <li key={item.id}>
            <img src={item.avatar} alt="" />
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </li>
        ))}
    </ul>
  </div>
);

const StepContent = ({ stepData }) => (
  <div className={styles.stepContent}>
    <h2>仅需4步，极速上线</h2>
    <ul>
      {stepData.length &&
        stepData.map((item) => (
          <li key={item.id}>
            <img src={item.avatar} alt="" />
            <p>{item.title}</p>
          </li>
        ))}
    </ul>
    <div className={styles.bgPic}>
      <img src={bgPic} alt="" />
    </div>
  </div>
);

const SwiperContent = ({ swiperObj }) => (
  <div className={styles.swiperContent}>
    <h2>i 深圳成果</h2>
    <SwiperComponent swiperObj={swiperObj} />
  </div>
);

export const BasicIndex = () => {
  return (
    <div>
      <div className={styles.indexContainer}>
        <Background title="i 深圳" des="市民用一个APP畅享全市综合服务" btnTitle="加入我们" />
        <StepContent stepData={allData.stepData} />
        <SwiperContent swiperObj={allData.swiperObj} />
      </div>
    </div>
  );
};
export default connect(({ basicIndex, loading }) => ({
  basicIndex,
  loading: loading.models.basicIndex,
}))(BasicIndex);
