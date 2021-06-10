
<template>
  <div>
    <!-- 头部菜单 选择功能 -->
    <div class="layout">
      <div class="left">
        <div class="content">
          <div class="content-show"></div>
        </div>
        <side-bar></side-bar>
        <div class="title">标准</div>
      </div>

      <div class="right" @click="myClick">
        <h4 class="active">历史记录</h4>
        <h4>记忆</h4>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/Sidebar.vue';
export default {
  components: {
    SideBar,
  },
  methods: {
    // 点击事件，下边框线高亮
    myClick(event) {
      event = event || window.event;
      const target = event.target;
      if (target.nodeName == "H4") {
        const hList = target.parentElement.children;
        hList.forEach(item => {
          item.className = "";
        });
        target.className = 'active';
      }
    }
  }
}
</script>
<style scoped>
.layout {
  width: 800px;
  position: relative;
  margin: 0 auto;
  line-height: 35px;
}
.left {
  position: absolute;
  line-height: 35px;
  width: 60%;
  height: 40px;
  background-color: #e6e6e6;
}
.right {
  position: absolute;
  right: 0;
  width: 40%;
  height: 40px;
  background-color: #e6e6e6;
}
.content {
  position: relative;
  width: 40px;
  height: 100%;
  z-index: 200;
}
.content:hover {
  background-color: #cccccc;
}
.left .content-show {
  padding: 4px 0;
  width: 18px;
  height: 1px;
  background: black;
  background-clip: content-box;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.left .title {
  position: absolute;
  left: 45px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: 600;
}
.right h4 {
  height: 36px;
  line-height: 40px;
  cursor: pointer;
}
.right h4:first-child {
  position: absolute;
  left: 10px;
}
.right h4:last-child {
  position: absolute;
  left: 100px;
}
.active {
  border-bottom: 3px solid #0078d7;
}
</style>