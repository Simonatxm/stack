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
var Marong = new Stack();
Marong.push('宋喆');
Marong.push('张三');
Marong.push('李四');
Marong.push('王五');
console.log(Marong.toString());
Marong.clear();
Marong.pop();
console.log(Marong.top);
Marong.push('宋哲');
console.log(Marong.peek());
console.log(Marong.length());
Marong.clear();
console.log(Marong.toString());
