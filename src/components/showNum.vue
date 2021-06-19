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
          :style="item.fontColor"
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
        fontColor: {
          color: '#a3a3a3'
        }

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
        num: '1/X',
        backColor: true,
      },
      {
        num: 'X²',
        backColor: true,
      },
      {
        num: '√x',
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

        // 显示区 表达式dom
        this.formula = document.querySelector('.content .result .formula');
        // 显示区 数字dom
        this.numText = document.querySelector('.content .result .numText');
        // 数字和运算符dom
        this.signNum = document.querySelector('.sign-num');
        // 运算符映射
        this.op = {
          '+': '+',
          '-': '-',
          '×': '×',
          '÷': '÷'

        };
        this.opArr = ['+', '-', '×', '÷'];

        // 中缀表达式
        this.infix = [];
        // // 后缀表达式
        this.suffix = [];
        // 后缀表达式运算结果集
        this.result = [];
        // 存储最近的值
        this.lastVal = 0;
        // 当前已经计算等于完成
        this.calcDone = false;
        // 当前正在进行小数点点（.）相关值的修正
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
              if (!isNaN(Number(val))) {
                // 构建中缀表达式并显示
                const infixRe = _this.buildInfix(parseInt(val, 10), 'add');
                // 是数字就显示在上方
                _this.formula.innerHTML = infixRe.join('');
                _this.numText.innerHTML = _this.lastVal;

                // _this.calculate();
                return;
              }

              let action = val;

              // 清除  删除  计算  等于
              if (['DEL', 'C', '='].indexOf(action) !== -1) {
                //当中缀表达式没有任何值时直接返回
                if (!_this.infix.length) {
                  return;
                }
                // 清空数据
                if (action === 'C' || (action === "DEL" && _this.calcDone)) {
                  _this.formula.innerHTML = "";
                  _this.numText.innerHTML = 0;
                  _this.resetData();
                }
                // 清除数据
                else if (action === 'DEL') {
                  const infixRe = _this.buildInfix(_this.op[action], "DEL");
                  _this.formula.innerHTML = infixRe.join('');
                  if (!_this.isSign(_this.lastVal)) {
                    _this.numText.innerHTML = _this.lastVal;
                  }
                  else {
                    _this.numText.innerHTML = 0;
                  }
                  // _this.calculate();
                }
                // 等号
                else if (action === '=') {
                  _this.calculate('=');
                }
              }
              // % 小数点 平方 符号运算
              else if (['%', '.', 'X²', '√x', '1/X'].indexOf(action) !== -1) {
                if (!_this.infix.length || _this.isSign(_this.lastVal)) {
                  return;
                }
                if (action === '%') {
                  _this.lastVal /= 100;
                }
                else if (action === 'X²') {
                  _this.lastVal *= _this.lastVal;
                }
                else if (action === '√x') {
                  _this.lastVal = Math.sqrt(_this.lastVal);

                }
                else if (action === '1/X') {
                  _this.lastVal = 1 / _this.lastVal;

                }
                // else if (action === '.') {
                //   _this.curDot = true;
                // }
                // 重写中缀表达式
                const infixRe = _this.buildInfix(_this.lastVal, 'change');
                _this.formula.innerHTML = infixRe.join('');

                _this.calculate();

              }
              // 运算符+ - * /
              else if (_this.isSign(_this.op[action])) {
                if (!_this.infix.length && (_this.op[action] === '×' || _this.op[action] === '÷')) {
                  return;
                }
                const infixRe = _this.buildInfix(_this.op[action], 'add');
                _this.formula.innerHTML = infixRe.join('');
              }

            }
          }
        },
        buildInfix: function (val, type) {
          // 直接点击等号运算
          if (this.calcDone) {
            this.calcDone = false;
            // 再点击数字，进行新的运算
            if (!this.isSign(val)) {
              this.resetData();
            }
            else {
              // 如果是运算符，使用当前的结果进行运算
              const re = this.result[0];
              this.resetData();
              this.infix.push(re);
            }
          }

          let newVal;
          // 删除操作
          if (type === 'DEL') {
            // 删除中缀表达式的最后一个数，并返回 
            newVal = this.infix.pop();
            // 取出的如果为数字
            if (!isNaN(newVal)) {
              newVal = Math.floor(newVal / 10);
              if (newVal !== 0) {
                this.infix.push(newVal);
              }
              else {
                this.infix.push(0);
              }
            }
            else {
              // 不为数字
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
            if (!this.isSign(val) && this.infix.length === 1 && (this.lastVal === '+' || this.lastVal === '-')) {
              newVal = this.lastVal === "+" ? val : 0 - val;
              this.infix.pop();
              this.infix.push(this.lastVal = newVal);

              return this.infix;
            }

            this.infix.push(this.lastVal = val);
            return this.infix;
          }
          // 更改操作
          else if (type === 'change') {
            this.infix.pop();
            this.infix.push(this.lastVal = val);
            return this.infix;
          }
        },
        // 初始化 ，将存储表达式的都置空
        resetData: function () {
          // 中缀表达式
          this.infix = [];
          // 后缀表达式
          this.suffix = [];
          // 后缀表达式计算的结果
          this.result = [];
          // 前一个存入的值
          this.lastVal = 0;
          // this.curDot = false;
        },
        // 判断是否为运算符
        isSign: function (op) {
          return op && this.opArr.indexOf(op) !== -1;
        },
        // 计算
        calculate: function (type) {
          this.infixToSuffix();
          const suffixRe = this.calcSuffix();

          if (suffixRe) {
            this.numText.innerHTML = suffixRe;
            // 如果直接等号
            if (type === '=') {
              // 设置为以计算
              this.calcDone = true;
              this.lastVal = suffixRe;
            }
          }
        },
        // 判断运算符的优先级
        priority: function (a, b) {
          return (a === "+" || a === '-') && (b === '×' || b === '÷');
        },
        // 中缀表达式转为后缀表达式
        infixToSuffix: function () {
          //临时存放运算符
          const temp = [];
          // 初始化
          this.suffix = [];
          //遍历中缀表达式中的数据
          this.infix.forEach((item) => {
            // 数值就直接压入数组
            if (!this.isSign(item)) {
              this.suffix.push(item);
            }
            // 如果不是数字---运算符
            else {
              // 如果temp为空时
              if (!temp.length) {
                // 判断运算符的优先级
                temp.push(item);
              }
              else {
                // 将临时数组中的运算符给opTo
                let opTop = temp[temp.length - 1];
                if (!this.priority(opTop, item)) {
                  while (temp.length && !this.priority(opTop, item)) {
                    this.suffix.push(temp.pop());
                    opTop = temp[temp.length - 1];
                  }
                }
                //压入当前的运算符
                temp.push(item);
              }
            }
          })
          // 压入剩余的符号
          while (temp.length) {
            this.suffix.push(temp.pop());
          }
        },
        // 后缀表达式计算
        calcSuffix: function () {
          // 初始化结果数组
          this.result = [];
          this.suffix.forEach((item) => {
            // 数字存到result
            if (!this.isSign(item)) {
              this.result.push(item)
            }
            else {
              // 遇到运算符时，从中去除两个数字进行计算，并将运算符存到数组result
              this.result.push(this.opCalc(this.result.pop(), this.result.pop(), item))
            }
          })
          // result中只剩最后一个值，即为结果
          return this.result[0];
        },
        // 符号计算
        opCalc: function (a, b, op) {
          switch (op) {
            case '+': return b + a;
            case '-': return b - a;
            case '×': return b * a;
            case '÷': return b / a;
          }
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
  color: #000000;
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
  color: #a3a3a3;
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