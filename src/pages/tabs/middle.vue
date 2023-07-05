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
    <view class="content">
      <image src="@/static/img/ios_frame.png" mode="widthFix"></image>
      <image src="@/static/img/my_bg.jpeg" mode="widthFix" class="content-image"></image>
      <text class="content-text">Counter:{{ counterStore.count }}</text>
    </view>
  </view>
</template>

<script>

import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore();

export default {
  name: "tab-middle",
  props: {
    current: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      counterStore: counterStore,
    }
  },
  onLoad() { },
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

.content-text {
  position: absolute;
  top: 144rpx;
  bottom: 64rpx;
  z-index: 3;
  color: white;
  font-size: 48rpx;
}

.content-image {
  position: absolute;
  width: 510rpx;
  top: 96rpx;
  bottom: 64rpx;
  z-index: 2;
}

</style>