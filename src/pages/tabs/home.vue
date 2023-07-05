<!--
 * @Arthur: ArthurYuCN
 * @Email: xxnjdlys@gmail.com
 * @CreateTime: Do not edit
 * @LastEditTime: 2023-07-04 15:03:52
 * @LastEditors: ArthurYuCN xxnjdlys@gmail.com
 * @FilePath: /myapp/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <view class="logo"></view>
  </view>
</template>

<script>
export default {
  name: 'tab-home',
  props: {
    current: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() { },
  methods: {},
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  margin-top: 200rpx;
  width: 500rpx;
  height: 100rpx;
  position: relative;
  color: transparent;
  background: url('@/static/img/1.svg') center/contain no-repeat;
  cursor: pointer;
}

.logo::after {
  content: '';
  position: absolute;
  width: 32rpx;
  height: 32rpx;
  background: url('@/static/img/2.svg') 0 / cover no-repeat;
  right: 113rpx;
  top: -18rpx;
  animation: random 1.3s steps(10) infinite;
  /* 这里想指定到未来第7帧的位置，就可以延迟负的总运动时长的 7/10 */
  animation-delay: -.7s;
  /*动画暂停*/
  /* animation-play-state: paused;  */
  /* 32 * 7 */
  /* background-position: -224rpx;  */
}

.logo:hover::after{
  /*动画运行*/
  animation-play-state: running;
}

@keyframes random {
  to {
    background-position: 100%;
  }
}


</style>
