<template>
  <div class="square" @click="clickHandle('test click', $event)">




    <div class="user-item" v-for="item in list">
      <div class="user-logo">
        A
      </div>
      <div class="user-info">
        <p>天蝎座</p>
        <span>我很好看</span>
      </div>
      <div class="user-age">24岁</div>
    </div>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      value:'',
      list:[
        'aa',
        'bb',
        'dd',
        'ee',
        'ff',
        'gg'
      ]
    }
  },

  components: {
    card
  },



  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              console.log(res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },


  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  onShareAppMessage(options){
    return  {
      title:'广场',
      path: '/pages/index/main',
      // imageUrl:''
      success(){
        wx.showToast({
          title: '分享成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(){
        wx.showToast({
          title: '分享失败',
          icon: 'error',
          duration: 2000
        })
      }
    }
  }
}
</script>

<style scoped>

  .square{

  }

  .item{
    display: flex;
    justify-content: space-between;
  }

  .user-item:first-child{
    border-top: 1rpx solid rgba(0,0,0,0.05);
  }
  .user-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16rpx 20rpx;
    border-bottom: 1rpx solid rgba(0,0,0,0.05);
  }
  .user-logo{
    background: #ff6600;
    color: #ffffff;
    width: 100rpx;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    border-radius: 50%;
    margin-left: 10px;

  }
  .user-info{
    width: 400rpx;
  }
  .user-info span{
    font-size: 12px;
    color: rgba(0,0,0,0.6);
  }
  .user-age{

  }

</style>
