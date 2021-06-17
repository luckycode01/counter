<template>
  <div class="layout clearfix">
    <div class="content">
      <!-- 数字显示 -->
      <div class="result">
        <div class="formula"></div>
        <div class="numText">0</div>
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
          :class="item.backColor ? 'sign-content' : 'num-content'"
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
  methods: {
    fun() {
      function Calculator() {

        this.signNum = document.querySelector('.sign-num');
        // 运算符映射
        this.op = {
          'plus': '+',
          'minus': '-',
          'mul': '*',
          'div': '/'

        };
        this.opArr = ['+', '-', '*', '/'];

        // 中缀表达式
        this.infix = [];
        // // 后缀表达式
        // this.suffix = [];
        // // 后缀表达式运算结果集
        // this.result = [];
        // // 存储最近的值
        this.lastVal = 0;
        // // 当前已经计算等于完成
        // this.calcDone = false;
        // // 当前正在进行小数点点（.）相关值的修正
        // this.curDot = false;

        this.init();
      }

      Calculator.prototype = {
        constructor: Calculator,
        // 初始化
        init: function () {
          this.bindEvent();
        },
        // 绑定事件
        bindEvent: function () {
          const _this = this;
          _this.signNum.onclick = function (e) {
            e = e || window.event;
            const elem = e.target || e.srcElement;
            let val;
            if (elem.nodeName === 'SPAN') {
              // 获取点击对象的值
              val = elem.innerHTML;
              // 判断点击的是不是数字
              if (!isNaN(parseInt(val, 10))) {
                // 构建中缀表达式并显示
                const infixRe = _this.buildInfix(parseInt(val, 10), 'add');
                console.log(infixRe);
                // 是数字就显示在上方

              }
            }
          }
        },
        buildInfix: function (val, type) {
          // 直接点击等号运算

          let newVal;
          // 删除操作
          if (type === 'del') {
            // 删除中缀表达式的最后一个数，并返回 
            newVal = this.infix.pop();
            // 删除末尾的一个数字
            newVal = Math.floor(newVal / 10);
            if (newVal) {
              this.infix.push(newVal);
            }
            this.lastVal = this.infix[this.infix.length - 1];

            return this.infix;

          }
          // 添加操作 ，判断是不是重复的运算符
          else if (type === "add") {
            // 判断点击的内容，如果是俩个连续的运算符
            if (this.isSign(val) && this.isSign(this.lastVal)) {
              return this.infix;
            }
            //两个连续的数字
            else if (!this.isSign(val) && !this.isSign(this.lastVal)) {
              newVal = this.lastVal * 10 + val;
              this.infix.pop();
              this.infix.push(this.lastVal = newVal);

              return this.infix;
            }
            // 首个数字是正负数
            if (!this.isOp(val) && this.infix.length === 1 && (this.lastVal === '+' || this.lastVal === '-')) {

            }
          }
        },

        isSign: function (op) {
          return op && this.opArr.indexOf(op) !== -1;
        }
      }

      new Calculator();
    }
  },
  mounted() {
    this.fun();
  }
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
.content .result .numText {
  line-height: 40px;
  margin: 10px 0;
  font-size: 48px;
  font-weight: 500;
  color: black;
}
.content span {
  display: block;
  width: 100%;
  height: 100%;
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
.sign-num .sign-content {
  background-color: #dfdfdf;
}
.sign-num .num-content {
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