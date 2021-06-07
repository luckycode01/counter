<template>
  <div>
    <!-- 顶部标题，关闭，全屏 栏 -->
    <div class="layout">
      <div class="title">计算器</div>
      <div class="right">
        <div class="scale fl">
          <div></div>
        </div>
        <div class="square fl">
          <div></div>
        </div>
        <div class="close fl">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.layout {
  width: 400px;
  height: 35px;
  background-color: #e6e6e6;
  position: relative;
  margin: 0 auto;
  line-height: 35px;
}
.layout .title {
  position: absolute;
  left: 10px;
  font-size: 13px;
  color: #8e8e8e;
}
.right {
  position: absolute;
  right: 0;
}
.right .scale,
.right .square,
.right .close {
  position: relative;
  width: 50px;
  height: 35px;
}
.right .scale > div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  border-top: 1px solid #8e8e8e;
  line-height: 30px;
}
.right .scale:hover,
.right .square:hover {
  background-color: #cccccc;
}
.right .close:hover {
  background-color: rgb(231, 43, 43);
}
.right .square > div {
  width: 10px;
  height: 10px;
  border: 1px solid #8e8e8e;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>