<!--
 * @Arthur: ArthurYuCN
 * @Email: xxnjdlys@gmail.com
 * @CreateTime: Do not edit
 * @LastEditTime: 2023-07-04 15:03:52
 * @LastEditors: ArthurYuCN xxnjdlys@gmail.com
 * @FilePath: /myapp/src/pages/index/index.vue
-->
<template>
  <view>
    <tab-home v-if="currentPage===0"></tab-home>
    <tab-middle v-if="currentPage===1"></tab-middle>
    <tab-my v-if="currentPage===2"></tab-my>

    <view class="box">
      <view class="cu-bar tabbar bg-white shadow foot">
        <view class="action" @click="tabChange" data-cur="0">
          <view class='cuIcon-cu-image'>
            <view class="cu-tag badge" style="display: none">{{ currentPage }}</view>
            <image v-if="currentPage===0" src="/static/tabbar/icon_tab_rank_active.png"></image>
            <image v-if="currentPage !== 0" src="/static/tabbar/icon_tab_rank.png"></image>
          </view>
          <view :class="currentPage===0 ?'color_main':'text-gray'">首页</view>
        </view>

        <view @click="tabChange" class="action text-gray add-action" data-cur="1">
          <image v-if="currentPage===1" class="mid_btn" mode="widthFix"
                 src="/static/tabbar/icon_tab_lucky_active.png"></image>
          <image v-if="currentPage !== 1" class="mid_btn" mode="widthFix"
                 src="/static/tabbar/icon_tab_lucky.png"></image>
        </view>

        <view class="action" @click="tabChange" data-cur="2">
          <view class='cuIcon-cu-image'>
            <view class="cu-tag badge" style="display: none">{{ currentPage }}</view>
            <image v-if="currentPage===2" src="/static/tabbar/icon_tab_my_active.png"></image>
            <image v-if="currentPage !== 2" src="/static/tabbar/icon_tab_my.png"></image>
          </view>
          <view :class="currentPage===2?'color_main':'text-gray'">我的</view>
        </view>

      </view>
    </view>


  </view>
</template>

<script>

import TabHome from "@/pages/tabs/home.vue";
import TabMy from "@/pages/tabs/my.vue";
import TabMiddle from "@/pages/tabs/middle.vue";
import api from "@/api/api.js"
import log from "@/common/log"

export default {
  components: {TabMiddle, TabMy, TabHome},
  data() {
    return {
      currentPage: 0,
    }
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      api.getTest().then(resp => {
        log.i(resp)
      }).catch(e => {
        log.e(e)
      })
    },
    postData() {
      api.postTest().then(resp => {
        log.i(resp)
      }).catch(e => {
        log.e(e)
      })
    },
    tabChange: function (e) {
      this.currentPage = parseInt(e.currentTarget.dataset.cur);
      switch (this.currentPage) {
        case 0:
          log.d("current is tab index: 0")
          break;
        case 1:
          log.d("current is tab index: 1")
          break;
        case 2:
          log.d("current is tab index: 2")
          break;
      }
    },
  },
}
</script>

<style lang="scss">

@import '../../css/index';

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

.logo:hover::after {
  /*动画运行*/
  animation-play-state: running;
}

@keyframes random {
  to {
    background-position: 100%;
  }
}

.color_main {
  color: #000000;
  font-weight: 900;
}

.box {
  margin: 20upx 0;
}

.box view.cu-bar {
  margin-top: 20upx;
}

.mid_btn {
  width: 120rpx;
  height: 120rpx;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  top: -60rpx;
  left: 0rpx;
  right: 0;
  margin: auto;
  padding: 0;
}

.cu-bar.tabbar .action.add-action {
  padding-top: 56rpx !important;
}

</style>
