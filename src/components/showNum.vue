<template>
  <div class="layout clearfix">
    <div class="content">
      <!-- 数字显示 -->
      <div class="result">
        <div class="formula"></div>
        <div class="num">0</div>
      </div>
      <!-- 特殊符号 -->
      <div class="sign">
        <div v-for="(item, index) in signList" :key="index">
          <span>{{ item }}</span>
        </div>
      </div>
      <!-- 数字和符号 -->
      <div class="sign-num">
        <div
          :class="item.backColor ? 'colorGrey' : 'colorWhite'"
          v-for="(item, index) in contentList"
          :key="index"
        >
          <span>{{ item.num }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signList: ['MC', 'MR', 'M+', 'M-', 'MS'],
      contentList: [{
        num: '%',
        backColor: true,
      },
      {
        num: 'CE',
        backColor: true,
      },
      {
        num: 'C',
        backColor: true,
      },
      {
        num: 'DEL',
        backColor: true,
      },
      {
        num: '1\u2044x',
        backColor: true,
      },
      {
        num: 'X²',
        backColor: true,
      },
      {
        num: '\u221Ax',
        backColor: true,
      },
      {
        num: '÷',
        backColor: true,
      },
      {
        num: '7',
        backColor: false,
      },
      {
        num: '8',
        backColor: false,
      },
      {
        num: '9',
        backColor: false,
      },
      {
        num: '×',
        backColor: true,
      },
      {
        num: '4',
        backColor: false,
      },
      {
        num: '5',
        backColor: false,
      },
      {
        num: '6',
        backColor: false,
      },
      {
        num: '-',
        backColor: true,
      },
      {
        num: '1',
        backColor: false,
      },
      {
        num: '2',
        backColor: false,
      },
      {
        num: '3',
        backColor: false,
      },
      {
        num: '+',
        backColor: true,
      },
      {
        num: '+/-',
        backColor: false,
      },
      {
        num: '0',
        backColor: false,
      },
      {
        num: '.',
        backColor: false,
      },
      {
        num: '=',
        backColor: true,
      },

      ]
    }
  },
}
</script>
<style scoped>
.layout {
  height: 640px;
}
.content {
  position: absolute;
  width: 100%;
  height: 640px;
  background-color: #e6e6e6;
}
.content .result {
  padding: 10px;
  width: 60%;
  height: 120px;
  box-sizing: border-box;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
}
.content .result .formula {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #696969;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
}
.content .result .num {
  line-height: 40px;
  margin: 10px 0;
  font-size: 48px;
  font-weight: 500;
  color: black;
}
.sign {
  margin-top: 20px;
  width: 360px;
  display: flex;
  justify-content: space-between;
}
.sign div {
  width: 70px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  box-sizing: border-box;
  box-sizing: content-box;
}
.sign div:hover {
  background-color: #d1d1d1;
  box-shadow: 1px 1px 1px rgba(121, 121, 121, 0.2);
}
.sign-num {
  width: 60%;
  height: 460px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.sign-num .colorGrey {
  background-color: #dfdfdf;
}
.sign-num .colorWhite {
  font-weight: 500;
  background-color: #f5f5f5;
}
.sign-num div {
  width: 118px;
  height: 74px;
  line-height: 74px;
  font-size: 18px;
  text-align: center;
}
.sign-num div:hover {
  background-color: #d1d1d1;
  box-shadow: 1px 1px 1px rgba(121, 121, 121, 0.2);
}
</style>