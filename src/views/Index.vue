<template>
  <div>
    <top-bar></top-bar>
    <head-title></head-title>
    <show-num></show-num>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import HeadTitle from "../components/headTitle.vue";
import ShowNum from "../components/showNum.vue";

export default {
  components: {
    TopBar,
    HeadTitle,
    ShowNum,
  }
}
</script>