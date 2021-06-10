<template>
  <div class="clearfix">
    <div class="menu clearfix">
      <div class="counte-detail">
        <h4>计算器</h4>
        <ul>
          <li v-for="(item, index) in counteList" :key="index">
            <i class="iconfont">{{ item.icon }}</i> {{ item.title }}
          </li>
        </ul>
        <h4>转换器</h4>
        <ul>
          <li v-for="(item, index) in changeList" :key="index">
            <i class="iconfont">{{ item.icon }}</i> {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="about">关于</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counteList: [
        {
          icon: '\ue60e',
          title: '标准'
        },
        {
          icon: '\ue997',
          title: '科学'
        },
        {
          icon: '\ue631',
          title: '绘图'
        },
        {
          icon: '\ue61d',
          title: '程序员'
        },
        {
          icon: '\ue6e3',
          title: '日期计算'
        }],
      changeList: [
        {
          icon: '\ue724',
          title: '货币'
        },
        {
          icon: '\ue630',
          title: '容量'
        },
        {
          icon: '\ue61c',
          title: '长度'
        },
        {
          icon: '\ue612',
          title: '重量'
        },
        {
          icon: '\ue647',
          title: '温度'
        },
        {
          icon: '\ue6d6',
          title: '能量'
        },

        {
          icon: '\ue600',
          title: '面积'
        }, {
          icon: '\ue64d',
          title: '速度'
        },
        {
          icon: '\ue62b',
          title: '时间'
        },
        {
          icon: '\ue668',
          title: '功率'
        },
        {
          icon: '\ue617',
          title: '数据'
        },

        {
          icon: '\ue60d',
          title: '压力'
        },
        {
          icon: '\ue621',
          title: '角度'
        }]
    }
  },
}
</script>
<style scoped>
@import url(../static/css/iconfont.css);
.menu {
  position: absolute;
  width: 260px;
  height: 640px;
  background-color: #e6e6e6;
  z-index: 10;
  top: 0;
}

.menu .counte-detail {
  position: absolute;
  top: 30px;
  width: 100%;
  height: 560px;
  background-color: #e6e6e6;
  overflow: hidden;
}
.menu .counte-detail ul li i{
  margin-left: 10px;
}

.menu .about {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
}
</style>