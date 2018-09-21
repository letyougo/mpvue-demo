<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <i-panel title="你喜欢吃什么水果？">
      <i-radio-group  :current="current.fruit" @change="handleFruitChange">
        <i-radio v-for="item in list.fruit" :position="position" :key="item.id" :value="item.name">
        </i-radio>
      </i-radio-group>
    </i-panel>



    <i-panel title="你喜欢什么动物？">
      <i-radio-group  :current="current.animal" @change="handleAnimalChange">
        <i-radio v-for="item in list.animal" :position="position" :key="item.id" :value="item.name">
        </i-radio>
      </i-radio-group>
    </i-panel>

    <i-panel title="你车是什么样的？">
      <i-radio-group  :current="current.car" @change="handleCarChange">
        <i-radio v-for="item in list.car" :position="position" :key="item.id" :value="item.name">
        </i-radio>
      </i-radio-group>
    </i-panel>

    <i-button type="primary" @click="submit">开始匹配</i-button>

  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},

      list:{
        fruit: [{
          id: 1,
          name: '香蕉',
        }, {
          id: 2,
          name: '苹果'
        }, {
          id: 3,
          name: '西瓜'
        }, {
          id: 4,
          name: '葡萄',
        }],
        animal:[{
          id: 1,
          name: '小猫',
        }, {
          id: 2,
          name: '小狗'
        }, {
          id: 3,
          name: '不喜欢'
        }],
        car:[{
          id: 1,
          name: '没车',
        }, {
          id: 2,
          name: '丰田-本田-大众'
        }, {
          id: 3,
          name: '奔驰-宝马-奥迪'
        }],
      },
      current:{
        fruit:'苹果',
        animal: '小狗',
        car:'没车'
      },


      checked: false,
      disabled: false,
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
    handleFruitChange(e){
      this.current.fruit = e.target.value
    },
    handleAnimalChange(e){
      this.current.animal = e.target.value
    },
    handleCarChange(e){
      this.current.car = e.target.value
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    submit(){
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

</style>
