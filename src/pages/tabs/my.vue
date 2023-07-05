<!--
 * @Arthur: ArthurYuCN
 * @Email: xxnjdlys@gmail.com
 * @CreateTime: Do not edit
 * @LastEditTime: 2023-07-04 15:50:47
 * @LastEditors: ArthurYuCN xxnjdlys@gmail.com
 * @FilePath: /myapp/src/pages/tabs/my.vue
-->
<template>
  <view>
    <!-- 顶部背景 -->
    <view>
      <image class="my-cover" mode="widthFix" src="/static/img/my_bg.jpeg"></image>
      <view class='space' v-show="true">
        <view class="stars ">
          <view class="star "></view>
          <view class="star pink "></view>
          <view class="star blue "></view>
          <view class="star yellow "></view>
          <view class="star green "></view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: "tab-my",
  props: {
    current: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {

    }
  },
  onLoad() {
  },
  methods: {},
}

</script>

<style lang='scss'>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.my-cover{
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.my-bg {
  background: url('@/static/img/my_bg.jpeg') no-repeat;
  background-size: 100% 100%;
  //background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  height: 1000rpx;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.my-bg text {
  opacity: 0.8;
}

.my-bg image {
  width: 200rpx;
  height: 200rpx;
}

.star {
  display: block;
  width: 6rpx;
  height: 6rpx;
  border-radius: 50%;
  background: #FFF;
  top: 100rpx;
  left: 400rpx;
  position: relative;
  transform-origin: 100% 0;
  animation: star-ani 6s infinite ease-out;
  box-shadow: 0 0 5rpx 5rpx rgba(255, 255, 255, .3);
  opacity: 0;
  z-index: 2;
}

// 顶部流星
.space {
  position: absolute;
  top: 0;
  left: 0;
}

.star:after {
  content: '';
  display: block;
  top: 0rpx;
  left: 4rpx;
  border: 0rpx solid;
  border-width: 0rpx 120rpx 4rpx 120rpx;
  border-color: transparent transparent transparent rgba(218, 210, 210, 0.3);
  transform: rotate(-45deg) translate3d(1rpx, 3rpx, 0);
  box-shadow: 0 0 1rpx 0 rgba(255, 255, 255, .1);
  transform-origin: 0 100%;
  animation: shooting-ani 3s infinite ease-out;
}

.pink {
  top: 30rpx;
  left: 395rpx;
  background: #ff5a99;
  animation-delay: 5s;
  -webkit-animation-delay: 5s;
  -moz-animation-delay: 5s;
}

.pink:after {
  border-color: transparent transparent transparent #ff5a99;
  animation-delay: 5s;
  -webkit-animation-delay: 5s;
  -moz-animation-delay: 5s;
}

.blue {
  top: 35rpx;
  left: 432rpx;
  background: cyan;
  animation-delay: 7s;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
}

.blue:after {
  /* border-color: transpareanimation-delay: 12s; */
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  animation-delay: 7s;
}

.yellow {
  top: 50rpx;
  left: 600rpx;
  background: #ffcd5c;
  animation-delay: 5.8s;
}

.yellow:after {
  border-color: transparent transparent transparent #ffcd5c;
  animation-delay: 5.8s;
}

.green {
  top: 50rpx;
  left: 690rpx;
  background: #20e83b;
  animation-delay: 1s;
}

.green:after {
  border-color: transparent transparent transparent #20e83b;
  animation-delay: 1s;
}

@keyframes star-ani {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate3d(0, 0, 0);
    -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
    -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
  }

  50% {
    opacity: 1;
    transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
    -webkit-transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
    -moz-transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
  }

  100% {
    opacity: 0;
    transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
    -webkit-transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
    -moz-transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
  }
}

</style>