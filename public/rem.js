const getFontSize = (doc, win) => {
  var wH = window.innerHeight; // 当前窗口的高度
  var wW = window.innerWidth; // 当前窗口的宽度
  var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
  var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  var html = document.documentElement;
  if(wW<600)return;
  if (wW > 1250) {
    rem = 70
  }
  rem = rem<55?55:rem;
  console.log(rem,'rem')
  html.style.fontSize = rem + "px"; //适用于PC网站
};

((doc, win) => {
  getFontSize(doc, win);
  win.onresize = () => getFontSize(doc, win);
})(document, window);
