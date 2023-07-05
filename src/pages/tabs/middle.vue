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
    </view>
  </view>
</template>

<script>

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
      title: 'Hello',
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
.content-image {
  position: absolute;
  width: 510rpx;
  top: 96rpx;
  bottom: 64rpx;
  z-index: 2;
}

</style>