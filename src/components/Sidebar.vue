<template>
  <!-- 侧边栏 -->
  <div class="menu clearfix">
    <div class="menu-layout">
      <div class="content-detail">
        <h4>计算器</h4>
        <ul>
          <li
            v-for="(item, index) in contentList"
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
    </div>
    <div class="scrollIn">
      <div class="slide"></div>
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
      contentList: [
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
  methods: {
    scrollSlide() {
      // 获取滑块对象
      const slide = document.querySelector('.scrollIn .slide');
      // 获取滑槽对象
      const scrollIn = document.querySelector('.scrollIn');
      // 获取内容
      const content = document.querySelector('.content-detail');
      // 滑块高度/滑槽高度 = 滑槽高度/内容高度 = 滑块滚动的距离 / 内容滚动的距离
      // 滑块高度/内容高度
      const slideContent = scrollIn.offsetHeight / content.offsetHeight;
      // 求滑块的高度
      const slideHeight = slideContent * scrollIn.offsetHeight;
      slide.style.height = slideHeight + 'px';
      // 滚轮滚动事件
      content.addEventListener('mousewheel', wheelMove);
      content.addEventListener('DOMMouseScroll', wheelMove);

      function wheelMove(event) {
        event = event || window.event;
        let flag = false;
        //向下滚为负
        if (event.wheelDelta) {
          // 向上滚，滑块向上，内容向下
          if (event.wheelDelta > 0) {
            flag = true;
          }
          else {
            flag = false;
          }
        }
        else if (event.detail) {
          // 火狐  向上为负 ，滑块向上，内容向下
          if (event.detail < 0) {
            flag = true;
          }
          else {
            flag = false;
          }
        }
        if (flag) {
          let lastY = slide.offsetTop - 10;
          if (lastY < 0) lastY = 0;
          // 内容滚动的距离
          let contentDis = lastY / slideContent;
          content.style.top = -contentDis + 'px';
          slide.style.top = lastY + 'px'
        }
        else {
          let lastY = slide.offsetTop + 10;
          if (lastY > scrollIn.offsetHeight - slide.offsetHeight) {
            lastY = scrollIn.offsetHeight - slide.offsetHeight;
          }
          // 内容滚动的距离
          let contentDis = lastY / slideContent;
          content.style.top = -contentDis + 'px';
          slide.style.top = lastY + 'px'
        }
      }
    }
  },
  // 页面加载啊完后调用
  mounted() {
    this.scrollSlide();
  }
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
.menu-layout {
  position: absolute;
  top: 50px;
  width: 100%;
  height: 580px;
  background-color: #e6e6e6;
  overflow: hidden;
}

.menu .content-detail {
  position: absolute;
  /* top: 50px; */
  width: 100%;
  height: 820px;
  background-color: #e6e6e6;
  /* overflow: hidden; */
}
.menu .content-detail h4 {
  width: 100%;
  height: 40px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.menu .content-detail ul li {
  position: relative;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.menu .content-detail ul li:hover {
  background-color: #d1d1d1;
}

.menu .content-detail ul .active::before {
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
/* 滚动条 */
.scrollIn {
  position: absolute;
  top: 50px;
  right: 0;
  width: 5px;
  height: 580px;
  background-color: #e2e2e2;
  /* border-left: 1px solid #c4c1c1; */
}

.scrollIn .slide {
  width: 3px;
  /* height: 100px; */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #868686;
}
</style>