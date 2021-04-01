import React from 'react';
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.css';
import './style.less';
import iconPic from '../../../../assets/home/k.png';

export default class SwiperComponent extends React.Component {
  state = {};

  componentDidMount() {
    this.initSwiper();
  }

  componentDidUpdate() {
    this.mySwiper.update();
    this.mySwiper.slideTo(0, 1000, false);
  }

  componentWillUnmount() {
    if (this.mySwiper) {
      // 销毁swiper
      this.mySwiper.destroy();
    }
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper-container', {
      observer: true, // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      observeSlideChildren: true, // 子slide更新时，swiper更新
      loop: false, // 在原本slide前后复制若干个slide,让Swiper看起来是循环的
      direction: 'horizontal',
      slidesPerGroup: 1, // slides 分组展示与滑动
      slidesPerView: 4,
      simulateTouch: false, // 禁止鼠标模拟
      // autoplay: {
      //   delay: 2000, // 停留时间
      // },
      autoplay: true,
      speed: 500, // 滑动速度
    });
  }

  render() {
    const { swiperObj } = this.props;
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {swiperObj &&
            swiperObj.map((item, index) => (
              <div className="swiper-slide" key={item.id}>
                <div className="swiper-content">
                  <div className="mask">
                    <div className="icon">
                      <p className={['up', index === 0 ? 'up-big' : null].join(' ')}>
                        {item.conutDes}
                      </p>
                      <p className="down">{item.unit}</p>
                      <img src={iconPic} alt="" />
                    </div>
                    <p className="des">{item.content}</p>
                  </div>
                  <img src={item.avatar} alt="" className="bgImg" />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
