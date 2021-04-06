import React from 'react';
import { Button, message } from 'antd';
import SwiperComponent from './components/Swiper';
import { connect } from 'umi';
import styles from './style.less';
import bgPic from '../../../assets/home/pic_bg.png';
import icon1 from '../../../assets/home/icon1.png';
import icon2 from '../../../assets/home/icon2.png';
import icon3 from '../../../assets/home/icon3.png';
import step1 from '../../../assets/home/step1.png';
import step2 from '../../../assets/home/step2.png';
import step3 from '../../../assets/home/step3.png';
import step4 from '../../../assets/home/step4.png';
import swiper1 from '../../../assets/home/swiper1.png';
import swiper2 from '../../../assets/home/swiper2.png';
import swiper3 from '../../../assets/home/swiper3.png';
import swiper4 from '../../../assets/home/swiper4.png';
import swiper5 from '../../../assets/home/swiper5.png';

const cardDataObj = [
  {
    id: 0,
    avatar: icon1,
    title: '丰富的API接口',
    content: '账号、支付、消息',
    brContent: '等接口一应俱全',
  },
  {
    id: 1,
    avatar: icon2,
    title: '数据安全',
    content: '按照3级等保的标准',
    brContent: '建设',
  },
  {
    id: 2,
    avatar: icon3,
    title: '完善服务保障',
    content: '24小时运维监控',
    brContent: '保障业务稳定运行',
  },
];
const stepDataObj = [
  {
    id: 0,
    avatar: step1,
    title: '开发者账号申请',
  },
  {
    id: 1,
    avatar: step2,
    title: '创建服务',
  },
  {
    id: 2,
    avatar: step3,
    title: '对接开发',
  },
  {
    id: 3,
    avatar: step4,
    title: '申请上线',
  },
];
const swiperDataObj = [
  {
    id: 0,
    countDes: '1+1',
    unit: '',
    content: '服务市民，助力企业',
    avatar: swiper1,
  },
  {
    id: 1,
    countDes: '7000+',
    unit: '项',
    content: '上线政务服务及生活服务',
    avatar: swiper2,
  },
  {
    id: 2,
    countDes: '40+',
    unit: '个',
    content: '连接委办局单位',
    avatar: swiper3,
  },
  {
    id: 3,
    countDes: '4000+',
    unit: '项',
    content: '上线企业平台服务',
    avatar: swiper4,
  },
  {
    id: 4,
    countDes: '2',
    unit: '小时',
    content: '市民、企业办事平均节省时间',
    avatar: swiper5,
  },
];
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
    <CardContent cardData={cardDataObj} />
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
            <span>{item.brContent}</span>
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
    <h2>智慧城市APP成果</h2>
    <SwiperComponent swiperObj={swiperObj} />
  </div>
);

export const BasicIndex = () => {
  return (
    <div>
      <div className={styles.indexContainer}>
        <Background title="智慧城市APP" des="市民用一个APP畅享全市综合服务" btnTitle="加入我们" />
        <StepContent stepData={stepDataObj} />
        <SwiperContent swiperObj={swiperDataObj} />
      </div>
    </div>
  );
};
export default connect(({ basicIndex, loading }) => ({
  basicIndex,
  loading: loading.models.basicIndex,
}))(BasicIndex);
