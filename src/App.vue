<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}
a {
  text-decoration: none;
  color: black;
  background-color: rgba(0, 0, 0, 0);
}
input,
button,
img {
  outline: none;
  border: none;
}
li {
  list-style-type: none;
}
.clearfix::before {
  content: "";
  height: 0;
  visibility: hidden;
  display: block;
}
.clearfix::after {
  content: "";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}
.clearfix {
  zoom: 1;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
</style>
