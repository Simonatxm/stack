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

function factorial(n) {
  if (n === 0) {
    return 1
  }else {
    return n*factorial(n-1);
  }
}

function fact(n) {
  var s = new Stack();
  do {
    s.push(n--);
  } while (n>1);
  var product = 1;
  do {
    product *=s.pop()
  } while (s.length()>0);
  return product;
}

console.log(factorial(5));
console.log(fact(5));
