let html = document.querySelector("#html");//通过css选择器找到这个元素
let style = document.querySelector("#style");

let string = `/* 你好，我叫Fish
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let string2 = "";
let n = 0;
console.log(string.length);//还可以利用调试大法，string[0].charCodeAt(),获取Unicode值

let step = () => {
  setTimeout(() => {
    // 如果是回车，就不照搬
    if (string[n] === "\n") {
      string2 += "<br>";
    } 
        // 如果不是回车就照搬
    else if (string[n] === " ") {
      string2 += "&nbsp;";
    } 
    else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);//页面滚动
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      // 如果 n 不是最后一个,就继续
      n += 1;
      step();
    }
  }, 100);
};

step(); // 1=>2