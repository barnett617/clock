# apple_time
A countdown clock

心血来潮，想做一个苹果发布会的倒计时

## 访问地址

https://frontend.wang

## 备用地址

https://barnett617.github.io/apple_time

## Fork me on github

https://github.com/barnett617/apple_time

## 前言

本网站基于github pages服务进行展示

## 过程

步骤如下：

1. 首先，网页标题来个标志性的苹果图标

- [一个好的图标网站](https://www.flaticon.com/free-icon/apple_152752#term=apple&page=1&position=2)

- [svg转换ico在线工具](https://cloudconvert.com/svg-to-ico)

- [xiconeditor](http://www.xiconeditor.com/)

如何为网站添加图标：

在\<head>标签中添加`<link rel="shortcut icon" href="favicon.ico">`，其会从项目根目录找favicon.ico文件

> `rel`表示将要引用的资源类型，`href`表示指向资源的URL，
\<link rel="shortcut icon" href="favicon.ico">中    `rel="shortcut icon"`是一种固定写法，不写或错写会导致图标无法正常显示。

2. 主体布局

### 背景

如果要背景铺满屏幕，来一个渐变色要怎么做呢

首先，为什么要用渐变，因为好看啊

其次，为什么渐变不用PS做的图片，因为CSS3提供了gradients属性，通过CSS实现其实渐变是由浏览器生成的，可以减少下载的事件和宽带的使用

既然渐变是浏览器生成的，就会涉及到不同浏览器的支持问题（Safari、Opera、Firefox等）

另外，渐变的方式分为两种：`线性渐变（Linear Gradients）`和`径向渐变（Radial Gradients）`，顾名思义，线性渐变是从一个*起点*沿着一个*方向*从一种颜色渐变成另一种颜色，而径向渐变是从一个*起点*沿着一个*角度*渐变

线性：linear-gradient

径向：radial-gradient

其参数对于不同的浏览器有着不同的写法，但基本都是在配置渐变方向和渐变首末的颜色

从上到下（默认）
```css
background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(red, blue); /* 标准的语法 */
```

从左到右
```css
background: -webkit-linear-gradient(left, red , blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(to right, red , blue); /* 标准的语法 */
```

左上角到右下角
```css
background: -webkit-linear-gradient(left top, red , blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(bottom right, red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(bottom right, red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(to bottom right, red , blue); /* 标准的语法 */
```

> 注意：Internet Explorer 9 及之前的版本不支持渐变

上面的是指定方向，也可以指定角度，如下：

```css
background-image: linear-gradient(to top, #7A88FF, #7AFFAF);
/* 等价 */
background-image:linear-gradient(0deg, #7A88FF, #7AFFAF);
```

> 角度指的是过渡在哪个方向截止，浏览器会绘制一条经过元素中心点的假想线。指定的角度就是*这条线的角度*，同时还指明*过度在哪里结束*

|     |     |     |
| --- | --- | --- |
| 0deg | 表示元素的顶边 | to top |
| 90deg | 表示元素的右边 | to right |
| 180deg | 表示元素的底边 | to bottom |
| 270deg | 表示元素的左边 | to left |

![角度解释图](https://barnett617.github.io/apple_time/static/images/angle.png)

如果仍然无法理解角度如何用，这里有一个[在线演示](https://codepen.io/thebabydino/full/qgoBL)

除此，透明度（transparent）使用

> CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。

> 可使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。

如下为从左侧完全透明的红色到右侧完全不透明的红色

```css
background: -webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255,0,0,1)); /* Safari 5.1 - 6 */
background: -o-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1)); /* Opera 11.1 - 12*/
background: -moz-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1)); /* Firefox 3.6 - 15*/
background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); /* 标准的语法 */
```

以上都是`线性渐变`

接下来是`径向渐变`

```css
radial-gradient(center, shape size, start-color, ..., last-color);
```

> 若不指定前面的参数，只指明颜色，则按照默认情况对颜色进行*均匀*分布

> 可以根据需求添加任意多个颜色。额外添加的颜色叫色标（color stop）

> 添加色标后，背景会从第一个颜色过渡到第二个颜色，再从第二个颜色过渡到第三个颜色，直到渐变的最后一个颜色为止。浏览器会平均分布各个颜色

```css
background: -webkit-radial-gradient(red, green, blue); /* Safari 5.1 - 6.0 */
background: -o-radial-gradient(red, green, blue); /* Opera 11.6 - 12.0 */
background: -moz-radial-gradient(red, green, blue); /* Firefox 3.6 - 15 */
background: radial-gradient(red, green, blue); /* 标准的语法 */
```

如下为背景色从左到右开始渐变，最左边是玫红，在元素宽度20%的位置变成青色，80%的位置变成黄色，最后是蓝色。

```css
linear-gradient(to right, #E94E65, #15A892 20%, #A89215 80%, #1574A8);
```

> 使用多色渐变时，第一个颜色和最后一个颜色无需指定位置，因为浏览器会嘉定第一个颜色从0%的位置开始，最后一个颜色在100%的位置结束。除非想把第一个颜色或最后一个颜色的位置放在指定的位置开始，才需要专门定位。

> 若想颜色不均匀分布，可手动对颜色增加权重

```css
background: -webkit-radial-gradient(red 5%, green 15%, blue 60%); /* Safari 5.1 - 6.0 */
background: -o-radial-gradient(red 5%, green 15%, blue 60%); /* Opera 11.6 - 12.0 */
background: -moz-radial-gradient(red 5%, green 15%, blue 60%); /* Firefox 3.6 - 15 */
background: radial-gradient(red 5%, green 15%, blue 60%); /* 标准的语法 */
```

> shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。

```css
background: -webkit-radial-gradient(circle, red, yellow, green); /* Safari 5.1 - 6.0 */
background: -o-radial-gradient(circle, red, yellow, green); /* Opera 11.6 - 12.0 */
background: -moz-radial-gradient(circle, red, yellow, green); /* Firefox 3.6 - 15 */
background: radial-gradient(circle, red, yellow, green); /* 标准的语法 */
```

> repeating-radial-gradient() 函数用于重复径向渐变

```css
/* Safari 5.1 - 6.0 */
background: -webkit-repeating-radial-gradient(red, yellow 10%, green 15%);
/* Opera 11.6 - 12.0 */
background: -o-repeating-radial-gradient(red, yellow 10%, green 15%);
/* Firefox 3.6 - 15 */
background: -moz-repeating-radial-gradient(red, yellow 10%, green 15%);
/* 标准的语法 */
background: repeating-radial-gradient(red, yellow 10%, green 15%);
```

### 布局

需要文字内容水平垂直居中，这就涉及到一个老生常谈的问题

一开始随手一加，使用flex布局

```html
<body>
  <div class="container">
    <span>倒计时</span>
  </div>
</body>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

发现效果并不理想，只水平居中了，垂直方向并没有居中

这里犯了一个flex布局的理解错误，对某个元素进行flex的设置，将影响其*子元素*，而不是其本身的布局，所以这里其实想container这一级水平垂直居中，那么`display: flex;`应该加在它的父级，即body的属性上

而在body上加过多的样式不是理想的做法，我们是想以 container 为页面根级，所以在其上加flex布局，然后将其子元素达到居中的效果，那么要让 container 作为页面根级，则需要其铺满屏幕，这里需要做一些样式设计。

首先，发现 container 并未铺满屏幕，即元素没有贴边浏览器，这是因为body有一个默认外边距，会随着不同的浏览器有着不同的行为，所以即使 container 高度和宽度100%贴着body，也无法占满屏幕，这就是为什么要对css作全局初始样式，重置其默认样式

```css
body {
    display: block;
    margin: 8px;
}
```

需要在body上进行重置 

```css
button, p, pre {
    margin: 0;
}
```

另外，要让渐变色的背景铺满屏幕，这里采用了对html和body元素设置高度100%，从而达到自适应，背景总占满屏幕的效果

```css
html, body {
  width: 100%;
  height: 100%;
}
body {
  background-image: linear-gradient(45deg, #7A88FF, #7AFFAF);
}
```

### 倒计时

接下来，需要一个定时器来展示倒计时

这里结束时间从简处理，即使用(后续可优化为目标时间从目标网站中获取)

#### 思路

`倒计时`即是要计算*剩余*时间，即目标时间的时间戳减去当下时间的时间戳来做一个格式化显示，因为当下时间是实时变化的，所以并不需要做特殊处理，只要用`目标时间戳(常量)` - `当前时间(变量)`便可得到倒计时应该显示的*剩余时间*

这里`国际化`是重点

首先来看一下 js 提供的当地时间（根据浏览器所设地区显示相应时间）方法

```js
new Date().toLocaleString()
// "2018/9/4 下午5:04:02"
new Date().toLocaleDateString()
// "2018/9/4"
new Date().toLocaleTimeString()
// "下午5:04:21"
```

这是 js `i18n`程序提供的时间格式化方法

Date对象是js原生时间库，以`1970年1月1日00:00:00`作为起点

Date对象作为普通函数直接调用会返回代表当前时间的字符串（无论是否传递参数）

```js
Date()
// "Tue Sep 04 2018 17:23:42 GMT+0800 (中国标准时间)"
Date('2018-08-08')
// "Tue Sep 04 2018 17:23:55 GMT+0800 (中国标准时间)"
Date(2018, 08, 08)
// "Tue Sep 04 2018 17:24:05 GMT+0800 (中国标准时间)"
```

Date作为构造函数时，使用new返回一个Date对象实例

```js
new Date()
// Tue Sep 04 2018 17:25:49 GMT+0800 (中国标准时间)
new Date('2018-08-08')
// Wed Aug 08 2018 08:00:00 GMT+0800 (中国标准时间)
new Date(2018, 08, 08)
// Sat Sep 08 2018 00:00:00 GMT+0800 (中国标准时间)
```

*** 特殊地

普通对象求值，都默认调用其valueOf()方法，而Date实例求值，默认调用toString()方法

```js
var a = 'hello'
a
// "hello"
a.valueOf()
// "hello"
a.toString()
// "hello"

var b = 3
b
// 3
b.valueOf()
// 3
b.toString()
// "3"

var c = new Date()
c
// Tue Sep 04 2018 17:31:30 GMT+0800 (中国标准时间)
c.valueOf()
// 1536053490129
c.toString()
// "Tue Sep 04 2018 17:31:30 GMT+0800 (中国标准时间)"
```

使用Date构造函数生产日期实例可传递各种类型的参数

```js
new Date().valueOf()
// 1536053659322

// 参数为时间零点开始计算的毫秒数
new Date(1536053659322)
// Tue Sep 04 2018 17:34:19 GMT+0800 (中国标准时间)

// 参数为日期字符串
new Date('Sep 4, 2018')
// Tue Sep 04 2018 00:00:00 GMT+0800 (中国标准时间)

new Date('Oct 4, 2018')
// Thu Oct 04 2018 00:00:00 GMT+0800 (中国标准时间)

new Date('Oct 4, 2018, 08:59:59')
// Thu Oct 04 2018 08:59:59 GMT+0800 (中国标准时间)

new Date('Oct 4, 2018, 08:61:59')
// Invalid Date

// 参数为多个整数
// 代表年、月、日、小时、分钟、秒、毫秒
new Date(2018, 10, 23, 6, 34, 59, 500)
// Fri Nov 23 2018 06:34:59 GMT+0800 (中国标准时间)

new Date('Fri Nov 23 2018 06:34:59')
// Fri Nov 23 2018 06:34:59 GMT+0800 (中国标准时间)
new Date('Fri Nov 23 2018 06:34:59').valueOf()
// 1542926099000
```

既然这样，那么Date()构造方法的参数都可以是什么格式的呢？

答：任何可以被Date.parse()方法解析的字符串

注意点

1. 参数可以是负整数，代表1970年元旦之前的时间

2. 参数为多个整数时，至少需要两个参数，即年和月，若只传递一个参数，将按照*毫秒数*处理

3. 参数取值范围

```
年：使用四位数年份，比如2000。如果写成两位数或个位数，则加上1900，即10代表1910年。如果是负数，表示公元前

月：0表示一月，依次类推，11表示12月

日：1到31

小时：0到23

分钟：0到59

秒：0到59

毫秒：0到999
```

4. 参数如果超出了正常范围，会被自动折算

5. 参数只有一个时，使用负整数表示`1970年元旦之前的时间`，参数为多个整数时，使用负整数表示`从基准日扣去相应的时间`

```js
new Date(-1542926099000)
// Wed Feb 09 1921 09:25:01 GMT+0800 (中国标准时间)

new Date(2018, 09, -1)
// Sat Sep 29 2018 00:00:00 GMT+0800 (中国标准时间)
new Date(2018, 0)
Mon Jan 01 2018 00:00:00 GMT+0800 (中国标准时间)
new Date(2018, 0, -1)
Sat Dec 30 2017 00:00:00 GMT+0800 (中国标准时间)
new Date(2018, 1, -1)
Tue Jan 30 2018 00:00:00 GMT+0800 (中国标准时间)
new Date(2018, 1)
Thu Feb 01 2018 00:00:00 GMT+0800 (中国标准时间)
```

> 留个疑问，如何求`明年的昨天`，比如，现在是`Tue Sep 04 2018 18:04:58 GMT+0800 (中国标准时间)`，明年的昨天即是`Wed Sep 03 2019 18:04:58 GMT+0800 (中国标准时间)`，有好的方法可以提PR，

此处的目标时间如下：

```
2018 年 9 月 12 日上午 10 点（北京时间 9 月 13 日凌晨 1 点）
```

### 字体适配

[移动端h5之rem布局](https://www.jianshu.com/p/e96ccb603a50)

### 布局

[最佳比例的秘密！教你如何在设计中充分运用黄金比例](https://www.uisdc.com/what-is-golden-ratio)

## 后记

没想到最终呈现出来这么简单的一个页面竟涉及到这么多东西，而且每一个环节都可以细究到很多深层次的东西，这就是web的世界

## 补充

使用vscode+搜狗输入法编辑本md文件上传至github后发现隐藏字符，形如：

![出现隐藏字符情况再现图片](https://barnett617.github.io/apple_time/static/images/char.png)

查得[原因](https://www.zhihu.com/question/61638859)为

> 在mac版vscode的中文输入法下，按下任意字母，出现中文候选后按删除键，删除完刚才输入的字母再按删除会出现这个控制字符

mac版的vscode中这个隐藏字符默认隐藏，可通过修改如下配置打开，将文档中显示`BS`的退格符全局搜索并替换为空即可

```
//控制编辑器是否应呈现控制字符
"editor.renderControlCharacters": true
```

原理解析：`BS`为ASCII码中的退格符的Unicode表示法，而所有ASCII[控制字符](https://en.wikipedia.org/wiki/Control_character)都有一个图形外观

参考链接：

[jianshu-【CSS】渐变背景](https://www.jianshu.com/p/58b340a037ea)

[runoob-CSS3 渐变](http://www.runoob.com/css3/css3-gradients.html)

[oschina-介绍 JavaScript 国际化 API](https://www.oschina.net/translate/introducing-the-javascript-internationalization-api)

[JavaScript 标准参考教程（alpha）之Date](http://javascript.ruanyifeng.com/stdlib/date.html#toc4)

[segmentfault-JavaScript 时间与日期处理实战:你肯定被坑过](https://segmentfault.com/a/1190000007581722)

[runoob-jquery](http://www.runoob.com/jquery/jquery-tutorial.html)

[jianshu-如何优雅的选择字体](https://segmentfault.com/a/1190000006110417)

[GitHub Ribbons](https://blog.github.com/2008-12-19-github-ribbons/)