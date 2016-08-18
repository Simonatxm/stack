"using strict";
/*
 *author：Simona
 *2016-08-18
 *栈的实现类
 */

function Stack() {
  this.dataStore = [];
  this.top = 0;
}
//压入栈方法
Stack.prototype.push = function (element) {
  this.dataStore[this.top++] = element;
}
//出栈方法
//栈顶元素删除
//top-1
//栈顶返回给调用者
Stack.prototype.pop = function () {
  if (this.top ==0) {
    return undefined;
  }
  var lastitem = this.dataStore.pop();
  this.top--;
  return lastitem;
  // return this.dataStore[--this.top];
}
//查看栈顶元素方法
Stack.prototype.peek = function () {
  return this.dataStore[this.top-1];
}
//返回栈内元素数量
Stack.prototype.length = function () {
 return this.top
}
//清空栈
Stack.prototype.clear = function () {
  this.top = 0
  this.dataStore.length = 0
}

Stack.prototype.toString = function () {
  if(this.top ==0){
    return '此栈为空';
  }
  return this.dataStore.join('-');
}
//函数功能为进制数转换
//n数值
//b进制数
//函数返回计算的结果
function mulBase(n,b) {
 var stack = new Stack();
 do {
   stack.push(n%b);
   n = Math.floor(n/b);
 } while (n > 0);
 var converted = "";
 do {
   converted += stack.pop();
 } while (stack.top > 0);
  return converted;
};
// console.log(mulBase(32,16));

function isPalindrome(str) {
  var stack = new Stack();
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i])
  }
  var rstr = "";
  do {
    rstr += stack.pop();
  } while (stack.dataStore.length>0);
  if(str == rstr){
    return true;
  }else {
    return false;
  };
}
  var str ="racecar";
  console.log(isPalindrome(str));
