<template>
  <!-- 侧边栏 -->
  <div class="menu clearfix">
    <div class="counte-detail">
      <h4>计算器</h4>
      <ul>
        <li
          v-for="(item, index) in counteList"
          :key="index"
          :class="item.isSelect ? 'active' : ''"
        >
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
    <div class="about">
      <a href="javascript:;"
        ><i class="iconfont">{{ about }}</i> 关于</a
      >
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
          title: '标准',
          isSelect: true,
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
        }],
      about: '\ue60f'
    }
  },
}
</script>
<style scoped>
@import url(../static/css/iconfont.css);
.menu {
  /* display: none; */
  position: absolute;
  width: 260px;
  height: 680px;
  background-color: #e6e6e6;
  z-index: 10;
  top: 0px;
  box-shadow: 1px -1px 4px rgba(0, 0, 0, 0.3);
}

.menu .counte-detail {
  position: absolute;
  top: 30px;
  width: 100%;
  height: 620px;
  background-color: #e6e6e6;
  overflow: hidden;
}
.menu .counte-detail h4 {
  width: 100%;
  height: 40px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.menu .counte-detail h4:first-child {
  margin-top: 20px;
}
.menu .counte-detail ul li {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.menu .counte-detail ul li:hover {
  background-color: #d1d1d1;
}

.menu .counte-detail ul .active::before {
  position: absolute;
  content: "";
  width: 3px;
  height: 22px;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 4px;
  background-color: #0078d7;
}
.menu i {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  color: #6b6b6b;
}

.menu .about {
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  background-color: #e6e6e6;
}
.menu .about a {
  display: inline-block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 20px;
}
.menu .about a:hover {
  background-color: #d1d1d1;
}

</style>