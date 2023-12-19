---
title: JavaWeb学习笔记尚硅谷上篇
description: JavaWeb学习笔记尚硅谷上篇
author: itwangcoder
date: '2023-12-19'
categories:
 - Java
tags:
 - 尚硅谷
 - JavaWeb
 - web
---


# JavaWeb-尚硅谷

## 一、Html和CSS

### 1. B/S软件的结构

![](JavaWeb学习笔记尚硅谷/Html和CSS/BS软件的结构.png)

### 2. 前端的开发流程

![](JavaWeb学习笔记尚硅谷/Html和CSS/前端开发流程.png)

### 3. 网页的组成部分

页面由三部分内容组成!分别是内容（结构)、表现、行为。

- 内容（结构)，是我们在页面中可以看到的数据。我们称之为内容。一般内容我们使用html技术来展示。
- 表现，指的是这些内容在页面上的展示形式。比如说。布局，颜色，大小等等。一般使用CSS技术实现。
- 行为，指的是页面中元素与输入设备交互的响应。一般使用javascript技术实现。

### 4. HTML简介

Hyper Text Markup Language(超文本标记语言)      简写:HTML
HTML通过标签来标记要显示的网页中的各个部分。网页文件本身是一种文本文件，通过在文本文件中添加标记符，可以告诉浏览器如何显示其中的内容(如:文字如何处理，画面如何安排，图片如何显示等）

### 5. 创建 HTML文件

1. 创建一个 web 工程(静态的 web 工程)
2. 在工程下创建 html 页面

注：Java文件是需要先编译，再由java虚拟机跑起来，但 html 文件它不需要编译，直接由浏览器进行解析执行

### 6. HTML的书写规范

![](JavaWeb学习笔记尚硅谷/Html和CSS/html文件的书写规范.png)

### 7. HTML标签介绍

1. 标签的格式：

   <标签名>封装的数据</标签名>

2. 标签名大小写不敏感

3. 标签拥有自己的属性

   1. 分为基本属性：bgcolor="red"	可以修改简单的样式效果
   2. 事件属性：onclick="alert('你好! ');"     可以直接设置事件响应后的代码

4. 标签又分为，单标签和双标签

   1. 单标签格式：<标签名/>
   2. 双标签格式：<标签名>...封装的数据...</标签名>

5. 标签语法
   1. 标签不能交叉嵌套
   2. 标签必须正确关闭
   3. 属性必须有值，属性值必须加引号
   4. 注释不能嵌套

### 8. 常用标签介绍

#### 8.1 font字体标签

```html
<body>
    <!-- 字体标签
        需求1：在网页上显示 我是字体标签，并修改字体为 宋体，颜色为红色

        font标签是字体标签，它可以用来修改文本的字体，颜色，大小(尺寸)
            color 属性修改颜色
            face 属性修改字体
            size 属性修改文本大小
    -->
    <font color="red" face="宋体" size="7">我是字体标签</font>
</body>
```

#### 8.2 特殊字符

常用特殊字符表

![](JavaWeb学习笔记尚硅谷/Html和CSS/常用特殊字符表.png)

其他特殊字符表

![](JavaWeb学习笔记尚硅谷/Html和CSS/其他特殊字符表.png)

```html
<body>
  <!-- 特殊字符
    需求1：把 <br> 换行标签 变成文本 转换成字符显示在页面

    常用的特殊字符：
      <    ===>>>  &lt;
      >    ===>>>  &gt;
      空格  ===>>>  &nbsp;
  -->
  我是&lt;br&gt;标签<br/>
  国哥&nbsp;&nbsp;&nbsp;你好
</body>
```

#### 8.3 标题标签

```html
<body>
	<!-- 标题标签
	 需求1：演示标题1到 标题6的

	 	h1 - h6 都是标题标签
	 	h1 最大
	 	h6 最小
			align 属性是对齐属性
				left		左对齐(默认)
				center		剧中
				right		右对齐
	 -->
	<h1 align="left">标题1</h1>
	<h2 align="center">标题2</h2>
	<h3 align="right">标题3</h3>
	<h4>标题4</h4>
	<h5>标题5</h5>
	<h6>标题6</h6>
	<h7>标题7</h7>
</body>
```

#### 8.4 超链接

```html
<body>
	<!-- a标签是 超链接
	 		href属性设置连接的地址
	 		target属性设置哪个目标进行跳转
	 			_self		表示当前页面(默认值)
	 			_blank		表示打开新页面来进行跳转
	 -->
	<a href="http://localhost:8080">百度</a><br/>
	<a href="http://localhost:8080" target="_self">百度_self</a><br/>
	<a href="http://localhost:8080" target="_blank">百度_blank</a><br/>
</body>
```

#### 8.5 列表标签

```html
<body>
    <!--需求1：使用无序，列表方式，把东北F4，赵四，刘能，小沈阳，宋小宝，展示出来
        ul 是无序列表
            type属性可以修改列表项前面的符号
        li  是列表项
    -->
    <ul type="none">
        <li>赵四</li>
        <li>刘能</li>
        <li>小沈阳</li>
        <li>宋小宝</li>
    </ul>
    <ol>
        <li>赵四</li>
        <li>刘能</li>
        <li>小沈阳</li>
        <li>宋小宝</li>
    </ol>
</body>
```

#### 8.6 img标签

```html
<body>
    <!--需求1：使用img标签显示一张美女的照片。并修改宽高，和边框属性

        img标签是图片标签,用来显示图片
            src属性可以设置图片的路径
            width属性设置图片的宽度
            height属性设置图片的高度
            border属性设置图片边框大小
            alt属性设置当指定路径找不到图片时,用来代替显示的文本内容

        在JavaSE中路径也分为相对路径和绝对路径.
            相对路径:从工程名开始算

            绝对路径:盘符:/目录/文件名

        在web中路径分为相对路径和绝对路径两种
            相对路径:
                .           表示当前文件所在的目录
                ..          表示当前文件所在的上一级目录
                文件名      表示当前文件所在目录的文件,相当于 ./文件名            ./ 可以省略

            绝对路径:
                正确格式是:  http://ip:port/工程名/资源路径

                错误格式是:  盘符:/目录/文件名
    -->
    <img src="1.jpg" width="200" height="260" border="1" alt="美女找不到"/>
    <img src="../2.jpg" width="200" height="260" />
    <img src="../imgs/3.jpg" width="200" height="260" />
    <img src="../imgs/4.jpg" width="200" height="260" />
    <img src="../imgs/5.jpg" width="200" height="260" />
    <img src="../imgs/6.jpg" width="200" height="260" />
</body>
```

#### 8.7 表格标签

```html
<body>
<!--
	需求1：做一个 带表头的 ，三行，三列的表格，并显示边框
	需求2：修改表格的宽度，高度，表格的对齐方式，单元格间距。

		table 标签是表格标签
			border 设置表格标签
			width 设置表格宽度
			height 设置表格高度
			align 设置表格相对于页面的对齐方式
			cellspacing 设置单元格间距

		tr	 是行标签
		th	是表头标签
		td  是单元格标签
			align 设置单元格文本对齐方式

		b 是加粗标签

	-->

<table align="center" border="1" width="300" height="300" cellspacing="0">
    <tr>
        <th>1.1</th>
        <th>1.2</th>
        <th>1.3</th>
    </tr>
    <tr>
        <td>2.1</td>
        <td>2.2</td>
        <td>2.3</td>
    </tr>
    <tr>
        <td>3.1</td>
        <td>3.2</td>
        <td>3.3</td>
    </tr>
</table>
</body>
```

#### 8.8 跨行跨列表格

```html
<body>
<!--	需求1：
			新建一个五行，五列的表格，
			第一行，第一列的单元格要跨两列，
			第二行第一列的单元格跨两行，
			第四行第四列的单元格跨两行两列。

			colspan 属性设置跨列
			rowspan 属性设置跨行
			-->

		<table width="500" height="500" cellspacing="0" border="1">
			<tr>
				<td colspan="2">1.1</td>
				<td>1.3</td>
				<td>1.4</td>
				<td>1.5</td>
			</tr>
			<tr>
				<td rowspan="2">2.1</td>
				<td>2.2</td>
				<td>2.3</td>
				<td>2.4</td>
				<td>2.5</td>
			</tr>
			<tr>
				<td>3.2</td>
				<td>3.3</td>
				<td>3.4</td>
				<td>3.5</td>
			</tr>
			<tr>
				<td>4.1</td>
				<td>4.2</td>
				<td>4.3</td>
				<td colspan="2" rowspan="2">4.4</td>
			</tr>
			<tr>
				<td>5.1</td>
				<td>5.2</td>
				<td>5.3</td>
			</tr>
		</table>
	</body>
```

#### 8.9 了解iframe 框架标签

```html
<body>
	我是一个单独的完整的页面<br/><br/>
    <!--ifarme标签可以在页面上开辟一个小区域显示一个单独的页面
            ifarme和a标签组合使用的步骤:
                1 在iframe标签中使用name属性定义一个名称
                2 在a标签的target属性上设置iframe的name的属性值
    -->
    <iframe src="3.标题标签.html" width="500" height="400" name="abc"></iframe>
    <br/>

    <ul>
        <li><a href="0-标签语法.html" target="abc">0-标签语法.html</a></li>
        <li><a href="1.font标签.html" target="abc">1.font标签.html</a></li>
        <li><a href="2.特殊字符.html" target="abc">2.特殊字符.html</a></li>
    </ul>
</body>
```

#### 8.10 表单标签

表单的显示

```html
<body>
<!--需求1:创建一个个人信息注册的表单界面。包含用户名，密码，确认密码。性别（单选），兴趣爱好（多选），国籍（下拉列表）。
隐藏域，自我评价（多行文本域）。重置，提交。-->

<!--
    form标签就是表单
        input type=text     是文件输入框  value设置默认显示内容
        input type=password 是密码输入框  value设置默认显示内容
        input type=radio    是单选框    name属性可以对其进行分组   checked="checked"表示默认选中
        input type=checkbox 是复选框   checked="checked"表示默认选中
        input type=reset    是重置按钮      value属性修改按钮上的文本
        input type=submit   是提交按钮      value属性修改按钮上的文本
        input type=button   是按钮          value属性修改按钮上的文本
        input type=file     是文件上传域
        input type=hidden   是隐藏域    当我们要发送某些信息，而这些信息，不需要用户参与，就可以使用隐藏域（提交的时候同时发送给服务器）

        select 标签是下拉列表框
        option 标签是下拉列表框中的选项 selected="selected"设置默认选中

        textarea 表示多行文本输入框 （起始标签和结束标签中的内容是默认值）
            rows 属性设置可以显示几行的高度
            cols 属性设置每行可以显示几个字符宽度
-->
<form>
    用户名称：<input type="text" value="默认值"/><br/>
    用户密码：<input type="password" value="abc"/><br/>
    确认密码：<input type="password" value="abc"/><br/>
    性别：<input type="radio" name="sex"/>男<input type="radio" name="sex" checked="checked"/>女<br/>
    兴趣爱好：<input type="checkbox" checked="checked"/>Java<input type="checkbox"/>JavaScript<input
        type="checkbox"/>C++<br/>
    国籍：<select>
        <option>--请选择国籍--</option>
        <option selected="selected">中国</option>
        <option>美国</option>
        <option>小日本</option>
    </select><br/>
    自我评价：<textarea rows="10" cols="20">我才是默认值</textarea><br/>
    <input type="reset" value="abc"/>
    <input type="submit"/>
</form>
</body>
```

表单格式化

```html
<body>
<form>
    <h1 align="center">用户注册</h1>
    <table align="center">
        <tr>
            <td> 用户名称：</td>
            <td>
                <input type="text" value="默认值"/>
            </td>
        </tr>
        <tr>
            <td> 用户密码：</td>
            <td><input type="password" value="abc"/></td>
        </tr>
        <tr>
            <td>确认密码：</td>
            <td><input type="password" value="abc"/></td>
        </tr>
        <tr>
            <td>性别：</td>
            <td>
                <input type="radio" name="sex"/>男
                <input type="radio" name="sex" checked="checked"/>女
            </td>
        </tr>
        <tr>
            <td> 兴趣爱好：</td>
            <td>
                <input type="checkbox" checked="checked"/>Java
                <input type="checkbox"/>JavaScript
                <input type="checkbox"/>C++
            </td>
        </tr>
        <tr>
            <td>国籍：</td>
            <td>
                <select>
                    <option>--请选择国籍--</option>
                    <option selected="selected">中国</option>
                    <option>美国</option>
                    <option>小日本</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>自我评价：</td>
            <td><textarea rows="10" cols="20">我才是默认值</textarea></td>
        </tr>
        <tr>
            <td><input type="reset"/></td>
            <td align="center"><input type="submit"/></td>
        </tr>
    </table>
</form>
</body>
```

表单提交细节

```html
<body>
    <!--
        form标签是表单标签
            action属性设置提交的服务器地址
            method属性设置提交的方式GET(默认值)或POST

        表单提交的时候，数据没有发送给服务器的三种情况：
            1、表单项没有name属性值
            2、单选、复选（下拉列表中的option标签）都需要添加value属性，以便发送给服务器
            3、表单项不在提交的form标签中

        GET请求的特点是：
            1、浏览器地址栏中的地址是：action属性[+?+请求参数]
                请求参数的格式是：name=value&name=value
            2、不安全
            3、它有数据长度的限制

        POST请求的特点是：
            1、浏览器地址栏中只有action属性值
            2、相对于GET请求要安全
            3、理论上没有数据长度的限制
    -->
    <form action="http://localhost:8080" method="post">
        <input type="hidden" name="action" value="login" />
        <h1 align="center">用户注册</h1>
        <table align="center">
            <tr>
                <td> 用户名称：</td>
                <td>
                    <input type="text" name="username" value="默认值"/>
                </td>
            </tr>
            <tr>
                <td> 用户密码：</td>
                <td><input type="password" name="password" value="abc"/></td>
            </tr>
             <tr>
                <td>性别：</td>
                <td>
                    <input type="radio" name="sex" value="boy"/>男
                    <input type="radio" name="sex" checked="checked" value="girl" />女
                </td>
            </tr>
             <tr>
                <td> 兴趣爱好：</td>
                <td>
                    <input name="hobby" type="checkbox" checked="checked" value="java"/>Java
                    <input name="hobby" type="checkbox" value="js"/>JavaScript
                    <input name="hobby" type="checkbox" value="cpp"/>C++
                </td>
            </tr>
             <tr>
                <td>国籍：</td>
                <td>
                    <select name="country">
                        <option value="none">--请选择国籍--</option>
                        <option value="cn" selected="selected">中国</option>
                        <option value="usa">美国</option>
                        <option value="jp">小日本</option>
                    </select>
                </td>
            </tr>
             <tr>
                <td>自我评价：</td>
                <td><textarea name="desc" rows="10" cols="20">我才是默认值</textarea></td>
            </tr>
             <tr>
                <td><input type="reset" /></td>
                <td align="center"><input type="submit"/></td>
            </tr>
        </table>
    </form>
</body>
```



#### 8.11 其他标签

```html
<body>
        <!--需求1：div、span、p标签的演示
            div标签       默认独占一行
            span标签      它的长度是封装数据的长度
            p段落标签     默认会在段落的上方或下方各空出一行来（如果已有就不再空）
        -->
    <div>div标签1</div>
    <div>div标签2</div>
    <span>span标签1</span>
    <span>span标签2</span>
    <p>p段落标签1</p>
    <p>p段落标签2</p>
</body>
```

### 9. CSS技术

#### 9.1 CSS技术介绍

CSS是【层叠样式表单】。是用于(增强)控制网页样式并允许将样式信息与网页内容分离的一种标记性语言。

#### 9.2 CSS语法规则

![](JavaWeb学习笔记尚硅谷/Html和CSS/CSS语法规则.png)

- 选择器：浏览器根据“选择器”决定受CSS样式影响的HTML元素(标签)

- 属性(property)：是你要改变的样式名，并且每个属性都有一个值。属性和值被冒号分开，并由花括号包围，这样就组成了一个完整的样式声明(declaration)，例如：p{color:blue}

- 多个声明：如果要定义不止一个声明，则需要用分号将每个声明分开。虽然最后一条声明的最后可以不加分号(但尽量在每条声明的末尾都加上分号)

  例如：

  ```css
  p{
  	color:red;
  	font-size:30px;
  }
  ```

  注：一般每行只描述一个属性

- CSS注释：/\*注释内容\*/

#### 9.3 CSS和HTML的结合方式

- 第一种

  在标签的style属性上设置"key:value value;"，修改标签样式

  示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
  </head>
  <body>
      <!--需求1：分别定义两个 div、span标签，分别修改每个 div 标签的样式为：边框1个像素，实线，红色。-->
      <div style="border: 1px solid red;">div标签1</div>
      <div style="border: 1px solid red;">div标签2</div>
      <span style="border: 1px solid red;">span标签1</span>
      <span style="border: 1px solid red;">span标签2</span>
  </body>
  </html>
  ```

  缺点：

  1. 如果标签多了。样式多了。代码量非常庞大
  2. 可读性非常差
  3. CSS代码没什么复用性可方言

- 第二种

  在head标签中，使用style标签来定义各种自己需要的CSS样式

  格式如下：

  ```css
  xxx{
      Key:value value;
  }
  ```

  示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<!--style 标签专门用来定义 css 样式代码-->
  	<style type="text/css">
  		/* 需求 1：分别定义两个 div、span 标签，分别修改每个 div 标签的样式为：边框 1 个像素，实线，红色。*/
  		div{
  			border: 1px solid red;
  		}
  		span{
  			border: 1px solid red;
  		}
  	</style>
  </head>
  <body>
  	<div>div 标签 1</div>
  	<div>div 标签 2</div>
  	<span>span 标签 1</span>
  	<span>span 标签 2</span>
  </body>
  </html>
  ```

  缺点：

  1. 只能在同一页面内复用代码，不能在多个页面中复用css代码
  2. 维护起来不方便，实际的项目中会有成千上万的页面，要到每个页面中去修改。工作量太大了。

- 第三种

  把CSS样式写成一个单独的CSS文件，再通过 link 标签引入即可复用。

  使用 html 的 \<link rel="stylesheet" type="text/css" href="./styles.css" /\> 标签，导入 css 样式文件

  CSS代码

  ```css
  div{
       border: 1px solid yellow;
   }
  span{
      border: 1px solid red;
  }
  ```

  HTML代码

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<title>Title</title>
  	<!--link 标签专门用来引入 css 样式代码-->
  	<link rel="stylesheet" type="text/css" href="1.css"/>
  </head>
  <body>
  	<div>div 标签 1</div>
  	<div>div 标签 2</div>
  	<span>span 标签 1</span>
  	<span>span 标签 2</span>
  </body>
  </html>
  ```

#### 9.4 CSS选择器

- 第一种 标签名选择器

  标签名选择器的格式是：

  ​	标签名{

  ​		属性:值;

  ​	}

  标签名选择器，可以决定哪些标签被动的使用这个样式。

  示例代码：

  ```html
  <!DOCTYPE html>
  <html>
  <head>
  	<meta charset="UTF-8">
  	<title>CSS 选择器</title>
  	<style type="text/css">
  		div{
  			border: 1px solid yellow;
  			color: blue;
  			font-size: 30px;
  		}
  		span{
  			border: 5px dashed blue;
  			color: yellow;
  			font-size: 20px;
  		}
  	</style>
  </head>
  <body>
  	<!-- 需求 1：在所有 div 标签上修改字体颜色为蓝色，字体大小 30 个像素。边框为 1 像素黄色实
  	并且修改所有 span 标签的字体颜色为黄色，字体大小 20 个像素。边框为 5 像素蓝色虚线。
  	-->
  	<div>div 标签 1</div>
  	<div>div 标签 2</div>
  	<span>span 标签 1</span>
  	<span>span 标签 2</span>
  </body>
  </html>
  ```

- 第二种 id选择器

  id选择器的格式是：

  ​	#id 属性值{

  ​		属性:值;

  ​	}

  id 选择器，可以让我们通过id属性选择性的去使用这个样式。

  示例代码：

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>ID 选择器</title>
      <style type="text/css">
          #id001 {
              color: blue;
              font-size: 30px;
              border: 1px
          }
          #id002 {
              color: red;
              font-size: 20px;
              border: 5px blue dotted;
          }
      </style>
  </head>
  <body>
      <!-- 需求 1：分别定义两个 div 标签，
      第一个 div 标签定义 id 为 id001 ，然后根据 id 属性定义 css 样式修改字体颜色为蓝色，
      字体大小 30 个像素。边框为 1 像素黄色实线。
      第二个 div 标签定义 id 为 id002 ，然后根据 id 属性定义 css 样式 修改的字体颜色为红色，字体大小 20 个像素。
      边框为 5 像素蓝色点线。
      -->
      <div id="id002">div 标签 1</div>
      <div id="id001">div 标签 2</div>
  </body>
  </html>
  ```

- 第三种 class选择器

  class 类型选择器的格式是：

  ​	.class 属性值{

  ​		属性:值;

  ​	}

  class 类型选择器，可以通过 class 属性有效的选择性地去使用这个样式。

  示例代码：

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>class 类型选择器</title>
      <style type="text/css">
          .class01{
              color: blue;
              font-size: 30px;
              border: 1px solid yellow;
          }
          .class02{
              color: grey;
              font-size: 26px;
              border: 1px solid red;
          }
      </style>
  </head>
  <body>
      <!--需求 1：修改 class 属性值为 class01 的 span 或 div 标签，字体颜色为蓝色，字体大小 30 个像素。边框为 1 像素黄色实线。
      需求 2：修改 class 属性值为 class02 的 div 标签，字体颜色为灰色，字体大小 26 个像素。边框为 1 像素红色实线。
      -->
      <div class="class02">div 标签 class01</div>
      <div class="class02">div 标签</div>
      <span class="class02">span 标签 class01</span>
      <span>span 标签 2</span>
  </body>
  </html>
  ```

- 第四种 组合选择器

  组合选择器的格式是：

  ​	选择器1,选择器2,选择器n{

  ​		属性:值;

  ​	}

  组合选择器可以让多个选择器共用同一个css样式代码。

  示例代码：

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>class 类型选择器</title>
      <style type="text/css">
          .class01 , #id01{
              color: blue;
              font-size: 20px;
              border: 1px yellow solid;
          }
      </style>
  </head>
  <body>
      <!-- 需求 1：修改 class="class01" 的 div 标签 和 id="id01" 所有的 span 标签，
      字体颜色为蓝色，字体大小 20 个像素。边框为 1 像素黄色实线。
      -->
      <div id="id01">div 标签 class01</div> <br />
      <span >span 标签</span> <br />
      <div>div 标签</div> <br />
      <div>div 标签 id01</div> <br />
  </body>
  </html>
  ```

#### 9.5 常用样式

1. 字体颜色

   `color:red;`

   颜色可以写颜色名如：black，blue，red，green等

   颜色也可以写 rgb 值和十六进制表示值：如 rgb(255,0,0)，#00F6DE，如果写十六进制值必须加#

2. 宽度

   `width:19px;`

   宽度可以写像素值：19px;

   也可以写百分比值：20%;

3. 高度

   `height:20px;`

   高度可以写像素值：19px;

   也可以写百分比值：20%;

4. 背景颜色

   `background-color:#0F2D4C;`

5. 字体样式

   `color:#FF0000;	字体颜色红色`

   `font-size:20px;	字体大小`

6. 红色1像素实线边框

   `border:1px solid red;`

7. DIV居中

   `margin-left:auto;`

   `margin-right:auto;`

8. 文本居中

   `text-align:center;`

9. 超链接去下划线

   `text-decoration:none;`

10. 表格细线

    ```css
    table{
        border:1px solid black;	/* 设置边框 */
        border-collapse:collapse;	/* 将边框合并 */
    }
    td,th{
        border:1px solid black;	/* 设置边框 */
    }
    ```

11. 列表去除修饰

    ```css
    ul{
        list-style:none;
    }
    ```

示例代码：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>06-css常用样式.html</title>
    <style type="text/css">
        div{
            color: red;
            border: 1px yellow solid;
            width: 300px;
            height: 300px;
            background-color: green;
            font-size: 30px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
        table{
            border: 1px red solid;
            border-collapse: collapse;
        }
        td{
            border: 1px red solid;
        }
        a{
            text-decoration: none;
        }
        ul{
            list-style: none;
        }
    </style>
</head>
<body>
    <ul>
        <li>11111111111</li>
        <li>11111111111</li>
        <li>11111111111</li>
        <li>11111111111</li>
        <li>11111111111</li>
    </ul>
    <table>
        <tr>
            <td>1.1</td>
            <td>1.2</td>
        </tr>
    </table>
    <a href="http://www.baidu.com">百度</a>
    <div>我是div标签</div>
</body>
</html>
```

## 二、JavaScript 语言入门

### 1. JavaScript介绍

Javascript 语言诞生主要是完成页面的数据验证。因此它运行浏览器来解析 JavaScript 代码。

JS 是 Netscape 网景公司的产品，最早取名为 LiveScript；为了吸引更多 java 程序员。更名为 JavaScript。

JS 是弱类型语言，Java 是强类型语言

特点：

1. 交互性(它可以做的就是信息的动态交互)
2. 安全性(不允许直接访问本地硬盘)
3. 跨平台性(只要是可以解释 JS 的浏览器都可以执行，和平台无关)

### 2. JavaScript 和 html 代码的结合方式

#### 2.1 第一种方式

只需要在 head 标签中，或者在 body 标签中，使用 script 标签来书写 JavaScript 代码

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
        // alert 是 JavaScript 语言提供的一个警告框函数
        // 它可以接收任意类型的参数，这个参数就是警告框的提示信息
        alert("hello javaScript!");
    </script>
</head>
<body>

</body>
</html>
```

#### 2.2 第二种方式

使用 script 标签引入单独的 JavaScript 代码文件

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <!--
        现在需要使用 script 引入外部的 js 文件来执行
            src 属性专门用来引入 js 文件路径(可以是相对路径，也可以是绝对路径)

        script 标签可以用来定义 js代码，也可以用来引入 js文件
        但是，两个功能二选一使用。不能同时使用两个功能
      -->
    <script type="text/javascript" src="1.js"></script>
    <script type="text/javascript">
        alert("现在可以了");
    </script>
</head>
<body>

</body>
</html>
```

### 4. 变量

什么是变量？变量是可以存放某些值得内存的命名

- JavaScript 的变量类型：

  - 数值类型：number
  - 字符串类型：string
  - 对象类型：object
  - 布尔类型：boolean
  - 函数类型：function

- JavaScript 里特殊的值：

  - undefined：未定义，所有 js 变量未赋于初始值的时候，默认值都是 undefined
  - null：空值
  - NaN：全称是 Not a number。非数字。非数值

- JS 中的定义变量格式：

  ```javascript
  var 变量名;
  var 变量名 = 值;
  ```

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
        var i;
        // alert(i);    // undefined
        i = 12;
        // typeof() 是 JavaScript 语言提供的一个函数
        alert(typeof (i));  // number

        i = "abc";
        // 它可以取变量的数据类型返回
        alert(typeof (i));  // String

        var a = 12;
        var b = "abc";

        alert(a * b); // NaN是非数字，非数值
    </script>
</head>
<body>

</body>
</html>
```

### 5. 运算

#### 5.1 关系运算

- 等于：== 等于是简单的做字面值的比较
- 全等于：=== 除了做字面值的比较之外，还会比较两个变量的数据类型

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">

        var a = "12";
        var b = 12;

        alert( a == b ); // true
        alert( a === b ); // false
    </script>
</head>
<body>

</body>
</html>
```

#### 5.2 逻辑运算

- 且运算：&&
- 或运算：||
- 取反运算：!

在 JavaScript 语言中，所有的变量，都可以作为一个 boolean 类型的变量去使用。

0、null、undefined、""(空串) 都认为是 false

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
   /*     在JavaScript语言中，所有的变量，都可以做为一个boolean类型的变量去使用。
        0 、null、 undefined、””(空串) 都认为是 false；*/

        // var a = 0;
        // if (a) {
        //     alert("零为真");
        // } else {
        //     alert("零为假");
        // }

        // var b = null;
        // if (b) {
        //     alert("null为真");
        // } else {
        //     alert("null为假");
        // }

        // var c = undefined;
        // if (c) {
        //     alert("undefined为真");
        // } else {
        //     alert("undefined为假");
        // }

        // var d = "";
        // if (d) {
        //     alert("空串为真");
        // } else {
        //     alert("空串为假");
        // }


/*         && 且运算。
		有两种情况：
		第一种：当表达式全为真的时候。返回最后一个表达式的值。
		第二种：当表达式中，有一个为假的时候。返回第一个为假的表达式的值*/

        var a = "abc";
        var b = true;
        var d = false;
        var c = null;

        // alert( a && b );//true
        // alert( b && a );//abc
        // alert( a && d ); // false
        // alert( a && c ); // null

 /*      || 或运算
       第一种情况：当表达式全为假时，返回最后一个表达式的值
       第二种情况：只要有一个表达式为真。就会把回第一个为真的表达式的值*/
        // alert( d || c ); // null
        // alert( c|| d ); //false

        // alert( a || c ); //abc
        // alert( b || c ); //true
        
        
        // 并且 && 与运算 和 || 或运算有短路
        // 短路就是说，当这个 && 或 || 运算有结果了之后。后面的表达式不再执行
    </script>
</head>
<body>

</body>
</html>
```

### 7. 数组

#### 7.1 数组定义方式

JS中数组的定义：

```javascript
var 数组名 = [];	// 空数组
var 数组名 = [1,'abc',true];	// 定义数组同时赋值元素
```

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">

        var arr = [true,1]; // 定义一个空数组
        // alert( arr.length ); // 0

        arr[0] = 12;
        // alert( arr[0] );//12
        // alert( arr.length ); // 0

        // javaScript语言中的数组，只要我们通过数组下标赋值，那么最大的下标值，就会自动的给数组做扩容操作。
        arr[2] = "abc";
        alert(arr.length); //3

        // alert(arr[1]);// undefined
        // 数组的遍历
        for (var i = 0; i < arr.length; i++){
            alert(arr[i]);
        }
    </script>
</head>
<body>
</body>
</html>
```

### 8. 函数

#### 8.1 函数的二种定义方式

- 第一种 使用 function 关键字来定义函数

  格式：

  ```javascript
  function 函数名(形参列表){
      函数体
  }
  /*	在 JavaScript 语言中，如何定义带有返回值的函数？
  	只需要在函数体内直接使用 return 语句返回值即可!
  */
  ```

  示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          // 定义一个无参函数
          function fun(){
              alert("无参函数fun()被调用了");
          }
          // 函数调用===才会执行
          // fun();
  
          function fun2(a ,b) {
              alert("有参函数fun2()被调用了 a=>" + a + ",b=>"+b);
          }
          // fun2(12,"abc");
  
          // 定义带有返回值的函数
          function sum(num1,num2) {
              var result = num1 + num2;
              return result;
          }
          alert( sum(100,50) );
      </script>
  </head>
  <body>
  
  </body>
  </html>
  ```

- 第二种

  格式：

  `var 函数名 = function(形参列表){函数体}`

  示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          var fun = function () {
              alert("无参函数");
          }
          // fun();
  
          var fun2 = function (a,b) {
              alert("有参函数a=" + a + ",b=" + b);
          }
          // fun2(1,2);
  
          var fun3 = function (num1,num2) {
              return num1 + num2;
          }
          alert( fun3(100,200) );
      </script>
  </head>
  <body>
  
  </body>
  </html>
  ```

注：在 Java 中函数允许重载。但是在 JS 中函数的重载会直接覆盖掉上一次的定义

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
        function fun(a,b) {
            alert("有参函数fun(a,b)");
        }

        function fun() {
            alert("无参函数fun()");
        }
        fun(1,"ad");
    </script>
</head>
<body>

</body>
</html>
```

#### 8.2 函数的 arguments 隐形参数(只在function函数内)

就是在 function 函数中不需要定义，但却可以直接用来获取所有参数的变量。我们管它叫隐形参数。

隐形参数特别像 java 基础的可变长参数一样。

public void fun(Object ... args);

可变长参数其实是一个数组

那么 js 中的隐形参数也跟 java 的可变长参数一样。操作类似数组。

示例代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript">
        function fun(a) {
            alert( arguments.length );//可看参数个数

            alert( arguments[0] );
            alert( arguments[1] );
            alert( arguments[2] );
            alert("a = " + a);

            for (var i = 0; i < arguments.length; i++){
                alert( arguments[i] );
            }

            alert("无参函数fun()");
        }
        // fun(1,"ad",true);

        // 需求：要求 编写 一个函数。用于计算所有参数相加的和并返回
        function sum(num1,num2) {
            var result = 0;
            for (var i = 0; i < arguments.length; i++) {
                if (typeof(arguments[i]) == "number") {
                    result += arguments[i];
                }
            }
            return result;
        }
        alert( sum(1,2,3,4,"abc",5,6,7,8,9) );
    </script>
</head>
<body>

</body>
</html>
```

### 9. JS中的自定义对象

- Object 形式的自定义对象

  - 对象的定义

    ```javascript
    var 变量名 = new Object();	// 对象实例(空对象)
    变量名.属性名 = 值;	// 定义一个属性
    变量名.函数名 = function();	// 定义一个函数
    ```

  - 对象的访问

    `变量名.属性 / 函数名();`

    示例代码：

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script type="text/javascript">
            // 对象的定义：
            //     var 变量名 = new Object();   // 对象实例（空对象）
            //     变量名.属性名 = 值;		  // 定义一个属性
            //     变量名.函数名 = function(){}  // 定义一个函数
            var obj = new Object();
            obj.name = "华仔";
            obj.age = 18;
            obj.fun = function () {
                alert("姓名：" + this.name + " , 年龄：" + this.age);
            }
            // 对象的访问：
            //     变量名.属性 / 函数名();
            // alert( obj.age );
            obj.fun();
        </script>
    </head>
    <body>
    
    </body>
    </html>
    ```

- {} 花括号形式的自定义对象

  - 对象的定义

    ```html
    var 变量名 = {	// 空对象
    	属性名:值,	// 定义一个属性
    	属性名:值,	// 定义一个属性
    	函数名:function(){}	// 定义一个函数
    }; 
    ```

  - 对象的访问

    `变量名.属性 / 函数名();`

    示例代码：

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script type="text/javascript">
            // 对象的定义：
            // var 变量名 = {			// 空对象
            //     属性名：值,			// 定义一个属性
            //     属性名：值,			// 定义一个属性
            //     函数名：function(){}	// 定义一个函数
            // };
            var obj = {
                name:"国哥",
                age:18,
                    fun : function () {
                    alert("姓名：" + this.name + " , 年龄：" + this.age);
                }
            };
    
            // 对象的访问：
            //     变量名.属性 / 函数名();
            alert(obj.name);
            obj.fun();
        </script>
    </head>
    <body>
    
    </body>
    </html>
    ```

### 10. js中的事件

什么是事件？事件是电脑输入设备与页面进行交互的响应。我们称之为事件。

- 常用的事件

  - onload 加载完成事件：页面加载完成之后，常用于做页面js代码初始化操作

  - onclick 单击事件：常用于按钮的点击响应操作

  - onblur 失去焦点事件：常用于输入框失去焦点后验证其输入内容是否合法

  - onchange 内容发生改变事件：常用于下拉列表和输入框内容发生改变后操作

  - onsubmit 表单提交事件：常用于表单提交前，验证所有表单项是否合法

- 事件的注册又分为静态注册和动态注册两种

  什么是事件的注册(绑定)？

  其实就是告诉浏览器，当事件响应后要执行哪些操作代码，叫事件注册或事件绑定。

  - 静态注册事件：通过html标签的事件属性直接赋于事件响应后的代码，这种方式我们叫静态注册。
  - 动态注册事件：是指先通过 js 代码得到标签的 dom 对象，然后再通过 dom 对象.事件名 = function(){} 这种形式赋于事件响应后的代码，叫动态注册
    - 动态注册基本步骤：
      1. 获取标签对象
      2. 标签对象.事件名 = function(){}

- onload 加载完成事件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          // onload 事件的方法
          function onloadFun() {
              alert('静态注册 onload 事件，所有代码');
          }
  
          // onload事件动态注册，是固定写法
          window.onload = function () {
              alert('动态注册 onload 事件');
          }
      </script>
  </head>
  <!-- 静态注册 onload 事件
          onload 事件是浏览器解析完页面之后就会自动触发的事件
          <body onload="onloadFun();">
  -->
  <body>
  </body>
  </html>
  ```

- onclick 单击事件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          function onclickFun() {
              alert("静态注册onclick事件");
          }
  
          // 动态注册 onclick 事件
          window.onload = function () {
              // 1. 获取标签对象
              /**
               * document 是 JavaScript 语言提供的一个对象(文档) <br/>
               * get          获取
               * Element      元素(就是标签)
               * By           通过...  由...经...
               * Id           id 属性
               * getElementById 通过 id 属性获取标签对象
               */
              var btnObj = document.getElementById("btn01");
              // alert(btnObj);
              // 2. 通过标签对象，事件名 = function(){}
              btnObj.onclick = function () {
                  alert("动态注册onclick事件");
              }
          }
      </script>
  </head>
  <body>
  <!-- 静态注册 onclick 事件 -->
  <button onclick="onclickFun();">按钮1</button>
  <button id="btn01">按钮2</button>
  </body>
  </html>
  ```

- onblur 失去焦点事件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          // 静态注册失去焦点事件
          function onblurFun() {
              // console 是控制台对象，是由 JavaScript 语言提供，专门用来向浏览器的控制器打印输出，用于测试使用
              // log() 是打印的方法
              console.log("静态注册失去焦点事件");
          }
  
          // 动态注册 onblur 事件
          window.onload = function () {
              // 1. 获取标签对象
              var passwordObj = document.getElementById("password");
              // alert(passwordObj);
              // 2. 通过标签对象.事件名 = function(){}
              passwordObj.onblur = function () {
                  console.log("动态注册失去焦点事件");
              }
          }
      </script>
  </head>
  <body>
  用户名：<input type="text" onblur="onblurFun();"/><br/>
  密码：<input id="password" type="text"/><br/>
  </body>
  </html>
  ```

- onchange 内容改变事件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          function onchangeFun() {
              alert("女神已经改变了");
          }
  
          window.onload = function () {
              // 1. 获取标签对象
              var selObj = document.getElementById("sel01");
              // alert(selObj);
              // 2. 通过标签对象，事件名 = function(){}
              selObj.onchange = function () {
                  alert("男神已经改变了");
              }
          }
      </script>
  </head>
  <body>
  请选择你心中的女神：
  <!-- 静态注册 onchange 事件 -->
  <select onchange="onchangeFun();">
      <option>--女神--</option>
      <option>芳芳</option>
      <option>佳佳</option>
      <option>娘娘</option>
  </select>
  
  请选择你心中的男神：
  <!-- 动态注册 onchange 事件 -->
  <select id="sel01">
      <option>--男神--</option>
      <option>国哥</option>
      <option>华仔</option>
      <option>富城</option>
  </select>
  </body>
  </html>
  ```

- onsubmit 表单提交事件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          // 静态注册表单提交事件
          function onsubmitFun() {
              // 要验证所有表单项是否合法，如果：有一个不合法就阻止表单提交
              alert("静态注册表单提交事件-----发现不合法");
              return false;
          }
  
          // 动态注册表单提交事件
          window.onload = function () {
              // 1. 获取标签对象
              var formObj = document.getElementById("form01");
              // alert(formObj);
              // 2. 通过标签对象.事件名 = function(){}
              formObj.onsubmit = function () {
                  // 要验证所有表单项是否合法，如果：有一个不合法就阻止表单提交
                  alert("动态态注册表单提交事件-----发现不合法");
                  return false;
              }
          }
      </script>
  </head>
  <body>
  <!-- return false 可以阻止 表单提交 -->
  <form action="http://localhost:8080" method="get" onsubmit="return onsubmitFun();">
      <input type="submit" value="静态注册"/>
  </form>
  <form action="http://localhost:8080" id="form01">
      <input type="submit" value="动态注册"/>
  </form>
  </body>
  </html>
  ```

### 11. DOM模型

DOM 全称是 Document Object Model 文档对象模型

就是把文档中的标签，属性，文本，转换成为对象来管理

#### 11.1 Document对象

![](JavaWeb学习笔记尚硅谷/JavaScript图片/Document对象.png)

- Document 对象的理解
  - 第一点：Document 它管理了所有的 HTML 文档内容
  - 第二点：Document 它是一种树结构的文档。有层级关系
  - 第三点：它让我们把所有的标签都对象化
  - 第四点：我们可以通过 Document 访问所有的标签对象

- html 标签模拟对象化

  ```html
  代码：
  <body>
  	<div id="div01">div01</div>
  </body>
  模拟对象化，相当于：
  class Dom{
  	private String id;		// id属性
  	private String tagName;	// 表示标签名
  	private Dom parentNode;	// 父亲
  	private List<Dom> children;	// 孩子结点
  	private String innerHTML;	// 起始标签和结束标签中间的内容
  }
  ```

#### 11.2 Document对象中的方法介绍

- document.getElementById(elementId)：通过标签的id属性查找标签 dom 对象，elementId 是标签的 id 属性值
- document.getElementsByName(elementName)：通过标签的 name 属性查找标签 dom 对象，elementName 标签的 name 属性值
- document.getElementsByTagName(tagname)：通过标签名查找标签 dom 对象。tagname 是标签名
- document.createElement(tagName)：方法，通过给定的标签名，创建一个标签对象。tagName 是要创建的标签名

注：document 对象的三个查询方法，如果有 id 属性，优先使用 getElementById 方法来进行查询。如果没有 id 属性，则优先使用 getElementsByName 方法来进行查询。如果 id 属性和 name 属性都没有最后再按标签名查 getElementsByTagName。以上三个方法，一定要在页面加载完成之后执行，才能查询到标签对象。

- getElementById 方法示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          /**
           * 需求：当用户点击了校验按钮，要获取输出框中的内容，然后验证其是否合法。<br/>
           * 验证的规则是：必须由字母，数字，下划线组成。并且长度是5到12位
           */
          function onclickFun() {
              // 1. 当我们要操作一个标签的时候，一定要先获取这个标签对象
              var usernameObj = document.getElementById("username");
              // [object HTMLInputElement] 它就是 dom 对象
              var usernameText = usernameObj.value;
              // 如何验证字符串，符合某个规则，需要使用正则表达式技术
              var patt = /^\w{5,12}$/;
              /**
               * test() 方法用于测试某个字符串，是不是匹配我的规则
               * 匹配就返回 true，不匹配就返回 false
               */
  
              var usernameSpanObj = document.getElementById("usernameSpan");
              // innerHTML 表示起始标签和结束标签中的内容
              // innerHTML 这个属性可读，可写
              // usernameSpanObj.innerHTML = "你好世界";
  
              if (patt.test(usernameText)) {
                  // alert("用户名合法!");
                  // usernameSpanObj.innerHTML = "用户名合法!";
                  usernameSpanObj.innerHTML = "<img src=\"right.png\" width=\"15\" height=\"15\" />";
              } else {
                  // alert("用户名不合法!");
                  // usernameSpanObj.innerHTML = "用户名不合法!";
                  usernameSpanObj.innerHTML = "<img src=\"wrong.png\" width=\"15\" height=\"15\" />";
              }
          }
      </script>
  </head>
  <body>
  用户名：<input type="text" id="username" value="wzg"/>
  <span id="usernameSpan" style="color: red;"></span>
  <button onclick="onclickFun()">校验</button>
  </body>
  </html>
  ```

- getElementsByName 方法示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          // 全选
          function checkAll() {
              // 让所有复选框都选中
              // document.getElementsByName(); 是根据指定的 name 属性查询返回多个标签对象集合
              // 这个集合的操作跟数组一样
              // 集合中每个元素都是 dom 对象
              // 这个集合中的元素顺序是他们在 html 页面中从上到下的顺序
              var hobbies = document.getElementsByName("hobby");
              // checked 表示复选框的选中状态，如果选中是true，不选中是false
              // checked 这个属性可读，可写
              for (var i = 0; i < hobbies.length; i++) {
                  hobbies[i].checked = true;
              }
          }
  
          // 全不选
          function checkNo() {
              var hobbies = document.getElementsByName("hobby");
              // checked 表示复选框的选中状态，如果选中是true，不选中是false
              // checked 这个属性可读，可写
              for (var i = 0; i < hobbies.length; i++) {
                  hobbies[i].checked = false;
              }
          }
  
          // 反选
          function checkReverse() {
              var hobbies = document.getElementsByName("hobby");
              for (var i = 0; i < hobbies.length; i++) {
                  hobbies[i].checked = !hobbies[i].checked
                  // if (hobbies[i].checked) {
                  //     hobbies[i].checked = false;
                  // } else {
                  //     hobbies[i].checked = true;
                  // }
              }
          }
      </script>
  </head>
  <body>
  兴趣爱好：
  <input type="checkbox" name="hobby" value="cpp"/>C++
  <input type="checkbox" name="hobby" value="java"/>Java
  <input type="checkbox" name="hobby" value="js"/>JavaScript
  <br/>
  <button onclick="checkAll()">全选</button>
  <button onclick="checkNo()">全不选</button>
  <button onclick="checkReverse()">反选</button>
  </body>
  </html>
  ```

- getElementsByTagName 方法示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          // 全选
          function checkAll() {
              // document.getElementsByTagName();
              // 是根据指定标签名来进行查询并返回集合
              // 这个集合的操作跟数组一样
              // 集合中都是 dom 对象
              // 集合中元素顺序，是他们在 html 页面中从上到下的顺序
              var inputs = document.getElementsByTagName("input");
              for (var i = 0; i < inputs.length; i++) {
                  inputs[i].checked = true;
              }
          }
      </script>
  </head>
  <body>
  兴趣爱好：
  <input type="checkbox" name="hobby" value="cpp"/>C++
  <input type="checkbox" name="hobby" value="java"/>Java
  <input type="checkbox" name="hobby" value="js"/>JavaScript
  <br/>
  <button onclick="checkAll()">全选</button>
  </body>
  </html>
  ```

- createElement 方法示例代码：

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Title</title>
      <script type="text/javascript">
          window.onload = function () {
              // 现在需要我们使用 js 代码来创建 html标签，并显示在页面上
              // 标签的内容就是：<div>国哥，我爱你</div>
              var divObj = document.createElement("div"); // 在内存中<div></div>
  
              var textNodeObj = document.createTextNode("国哥，我爱你");    // 有一个文本节点对象 #国哥，我爱你
              divObj.appendChild(textNodeObj);    // <div>国哥，我爱你</div>
  
              // divObj.innerHTML = "国哥，我爱你";  // <div>国哥，我爱你</div>，但，还只是在内存中
              // 添加子元素
              document.body.appendChild(divObj);
          }
      </script>
  </head>
  <body>
  
  </body>
  </html>
  ```

#### 11.3 节点的常用属性和方法

节点就是标签对象

- 方法：

  - 通过具体的元素节点调用 getElementsByTagName() 方法，获取当前节点的指定标签名孩子节点
  - appendChild(oChildNode) 方法，可以添加一个子节点，oChildNode 是要添加的孩子节点

- 属性：

  - childNodes 属性，获取当前节点的所有子节点
  - firstChild 属性，获取当前节点的第一个子节点
  - lastChild 属性，获取当前节点的最后一个子节点
  - parentNode 属性，获取当前节点的父节点
  - nextSibling 属性，获取当前节点的下一个节点
  - previousSibling 属性，获取当前节点的上一个节点
  - className 用于获取或设置标签的 class 属性值
  - innerHTML 属性，表示获取/设置起始标签和结束标签中的内容
  - innerText 属性，表示获取/设置起始标签和结束标签中的文本

- DOM查询练习

  ```html
  <!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>dom查询</title>
      <link rel="stylesheet" type="text/css" href="style/css.css"/>
      <script type="text/javascript">
          window.onload = function () {
              //1.查找#bj节点
              document.getElementById("btn01").onclick = function () {
                  var bjObj = document.getElementById("bj");
                  alert(bjObj.innerHTML);
              };
              //2.查找所有li节点
              var btn02Ele = document.getElementById("btn02");
              btn02Ele.onclick = function () {
                  var lis = document.getElementsByTagName("li");
                  alert(lis.length);
              };
              //3.查找name=gender的所有节点
              var btn03Ele = document.getElementById("btn03");
              btn03Ele.onclick = function () {
                  var genders = document.getElementsByName("gender");
                  alert(genders.length);
              };
              //4.查找#city下所有li节点
              var btn04Ele = document.getElementById("btn04");
              btn04Ele.onclick = function () {
                  // 1. 获取 id 为 city 的节点
                  // 2. 通过 city 节点.getElementsByTagName 按标签名查子节点
                  var lis = document.getElementById("city").getElementsByTagName("li");
                  alert(lis.length);
              };
              //5.返回#city的所有子节点
              var btn05Ele = document.getElementById("btn05");
              btn05Ele.onclick = function () {
                  // 1. 获取 id 为 city 的节点
                  // 2. 通过 city 获取所有子节点
                  alert(document.getElementById("city").childNodes.length);
              };
              //6.返回#phone的第一个子节点
              var btn06Ele = document.getElementById("btn06");
              btn06Ele.onclick = function () {
                  // 查询 id 为 phone 的节点
                  alert(document.getElementById("phone").firstChild.innerHTML);
              };
              //7.返回#bj的父节点
              var btn07Ele = document.getElementById("btn07");
              btn07Ele.onclick = function () {
                  // 1. 查询 id 为 bj 的节点
                  var bjObj = document.getElementById("bj");
                  // 2. bj 节点获取父节点
                  alert(bjObj.parentNode.innerHTML);
              };
              //8.返回#android的前一个兄弟节点
              var btn08Ele = document.getElementById("btn08");
              btn08Ele.onclick = function () {
                  // 获取 id 为 android 的节点
                  // 通过 android 节点获取前面兄弟节点
                  var androidObj = document.getElementById("android");
                  alert(androidObj.previousSibling.innerHTML);
              };
              //9.读取#username的value属性值
              var btn09Ele = document.getElementById("btn09");
              btn09Ele.onclick = function () {
                  var usernameObj = document.getElementById("username");
                  alert(usernameObj.value);
              };
              //10.设置#username的value属性值
              var btn10Ele = document.getElementById("btn10");
              btn10Ele.onclick = function () {
                  var usernameObj = document.getElementById("username");
                  usernameObj.value = "nihao";
              };
              //11.返回#bj的文本值
              var btn11Ele = document.getElementById("btn11");
              btn11Ele.onclick = function () {
                  // alert(document.getElementById("city").innerText);
                  alert(document.getElementById("city").innerHTML);
              };
          };
      </script>
  </head>
  <body>
  <div id="total">
      <div class="inner">
          <p>
              你喜欢哪个城市?
          </p>
  
          <ul id="city">
              <li id="bj">北京</li>
              <li>上海</li>
              <li>东京</li>
              <li>首尔</li>
          </ul>
  
          <br>
          <br>
  
          <p>
              你喜欢哪款单机游戏?
          </p>
  
          <ul id="game">
              <li id="rl">红警</li>
              <li>实况</li>
              <li>极品飞车</li>
              <li>魔兽</li>
          </ul>
  
          <br/>
          <br/>
  
          <p>
              你手机的操作系统是?
          </p>
  
          <ul id="phone"><li>IOS</li><li id="android">Android</li><li>Windows Phone</li></ul>
      </div>
  
      <div class="inner">
          gender:
          <input type="radio" name="gender" value="male"/>
          Male
          <input type="radio" name="gender" value="female"/>
          Female
          <br>
          <br>
          name:
          <input type="text" name="name" id="username" value="abcde"/>
      </div>
  </div>
  <div id="btnList">
      <div>
          <button id="btn01">查找#bj节点</button>
      </div>
      <div>
          <button id="btn02">查找所有li节点</button>
      </div>
      <div>
          <button id="btn03">查找name=gender的所有节点</button>
      </div>
      <div>
          <button id="btn04">查找#city下所有li节点</button>
      </div>
      <div>
          <button id="btn05">返回#city的所有子节点</button>
      </div>
      <div>
          <button id="btn06">返回#phone的第一个子节点</button>
      </div>
      <div>
          <button id="btn07">返回#bj的父节点</button>
      </div>
      <div>
          <button id="btn08">返回#android的前一个兄弟节点</button>
      </div>
      <div>
          <button id="btn09">返回#username的value属性值</button>
      </div>
      <div>
          <button id="btn10">设置#username的value属性值</button>
      </div>
      <div>
          <button id="btn11">返回#bj的文本值</button>
      </div>
  </div>
  </body>
  </html>
  ```

## 三、jQuery

### 1. jQuery 介绍

- 什么是 jQuery

  jQuery，顾名思义，也就是 JavaScript 和查询(Query)，它就是辅助 JavaScript 开发的 js 类库

- jQuery 核心思想

  它的核心思想是 write less, do more (写得更少，做得更多)，所以它实现了很多浏览器的兼容问题

- jQuery 流行程度

  jQuery 现在已经成为最流行的 JavaScript 库，在世界前 10000 个访问最多的网站中，有超过 55%在使用 jQuery

- jQuery 好处

  jQuery 是免费、开源的，jQuery 的语法设计可以使开发更加便捷，例如操作文档对象、选择 DOM 元素、制作动画效果、事件处理、使用 Ajax 以及其他功能

### 2. jQuery 的初体验

- 需求：使用 jQuery 给一个按钮绑定单击事件

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Insert title here</title>
      <script type="text/javascript" src="../script/jquery-1.7.2.js"></script>
      <script type="text/javascript">
          // window.onload = function () {
          //     var btnObj = document.getElementById("btnId");
          //     // alert(btnObj);  // [Object HTMLButtonElement]  =====>>>  dom 对象
          //     btnObj.onclick = function () {
          //         alert("js 原生的单击事件");
          //     }
          // }
  
          $(function () { // 表示页面加载完成之后，相当 window.onload = function(){}
              var $btnObj = $("#btnId");    // 表示按 id 查询标签对象
              $btnObj.click(function () {
                  alert("jQuery 的单击事件");
              });
          });
      </script>
  </head>
  <body>
  <button id="btnId">SayHello</button>
  </body>
  </html>
  ```

- 常见问题

  1. 使用 jQuery 一定要引入 jQuery 库吗

     答：是，必须

  2. jQuery 中的$到底是什么

     答：它是一个函数

  3. 怎么为按钮添加点击响应函数的

     答：1. 使用 jQuery 查询到标签对象

     ​		2. 使用标签对象.click(function(){});

### 3. jQuery 核心函数

$ 是 jQuery 的核心函数，能完成 jQuery 的很多功能。 $() 就是调用$这个函数

1. 传入参数为 [函数] 时：表示页面加载完成之后。相当于 window.onload = function(){}
2. 传入参数为 [HTML 字符串] 时：会对我们创建这个 html 标签对象
3. 传入参数为 [选择器字符串] 时：
   - $("#id 属性值");  id 选择器，根据 id 查询标签对象
   - $("标签名");  标签名选择器，根据指定的标签名查询标签对象
   - $(".class 属性值");  类型选择器，可以根据 class 属性查询标签对象
4. 传入参数为 [DOM 对象] 时：会把这个 dom 对象转换为 jQuery 对象

### 4. jQuery 对象和 dom 对象区分

#### 4.1 什么是 jQuery 对象，什么是 dom 对象

- Dom 对象

  1. 通过 getElementById() 查询出来的标签对象是 Dom 对象
  2. 通过 getElementsByName() 查询出来的标签对象是 Dom 对象
  3. 通过 getElementsByTagName() 查询出来的标签对象是 Dom 对象
  4. 通过 createElement() 方法创建的对象，是 Dom 对象

  DOM 对象 Alert 出来的效果是：[object HTML 标签名 Element]

- jQuery 对象

  5. 通过 jQuery 提供的 API 创建的对象，是 jQuery 对象
  6. 通过 jQuery 包装的 Dom 对象，也是 jQuery 对象
  7. 通过 jQuery 提供的 API 查询到的对象，是 jQuery 对象

  jQuery 对象 Alert 出来的效果是：[object Object]

#### 4.2 jQuery 对象的本质是什么

jQuery 对象是 dom 对象的数组 + jQuery 提供的一系列功能函数

#### 4.3 jQuery 对象和 Dom 对象使用区别

jQuery 对象不能使用 DOM 对象的属性和方法

DOM 对象也不能使用 jQuery 对象的属性和方法

#### 4.4 Dom 对象和 jQuery 对象互转

1. dom 对象转化为 jQuery 对象
   1. 先有 DOM 对象
   2. $(DOM 对象)就可以转换成为 jQuery 对象
2. jQuery 对象转为 dom 对象
   1. 先有 jQuery 对象
   2. jQuery 对象[下标]取出相应的 DOM 对象

![](JavaWeb学习笔记尚硅谷/JavaScript图片/jQuery对象和Dom对象相互转换.png)

### 5. jQuery 选择器

#### 5.1 基本选择器

- #ID 选择器：根据 id 查找标签对象
- .class 选择器：根据 class 查找标签对象
- element 选择器：根据标签名查找标签对象
- \* 选择器：表示任意的，所有的元素
- selector1，selector2 组合选择器：合并选择器1，选择器2的结果并返回

注：`p.myClass`：表示标签名必须是 p 标签，而且 class 类型还要是 myClass

#### 5.2 层级选择器

- ancestor descendant 后代选择器：在给定的祖先元素下匹配所有的后代元素
- parent > child 子元素选择器：在给定的父元素下匹配所有的子元素
- prev + next 相邻元素选择器：匹配所有紧接在 prev 元素后的 next 元素
- prev~sibings 之后的兄弟元素选择器：匹配 prev 元素之后的所有 siblings 元素

#### 5.3 过滤选择器

- 基本过滤器：
  - :first：获取第一个元素
  - :last：获取最后一个元素
  - :not(selector)：去除所有与给定选择器匹配的元素
  - :even：匹配所有索引值为偶数的元素，从0开始计数
  - :odd：匹配所有索引值为奇数的元素，从0开始计数
  - :eq(index)：匹配一个给定索引值的元素
  - :gt(index)：匹配所有大于给定索引值的元素
  - :lt(index)：匹配所有小于给定索引值的元素
  - :header：匹配如 h1,h2,h3 之类的标题元素
  - :animated：匹配所有正在执行动画效果的元素
- 内容过滤器：
  - :contains(text)：匹配包含给定文本的元素
  - :empty：匹配所有不包含子元素或者文本的空元素
  - :parent：匹配含有子元素或者文本的元素
  - :has(selector)：匹配含有选择器所匹配的元素的元素
- 属性过滤器
  - [attribute]：匹配包含给定属性的元素
  - [attribute=value]：匹配给定的属性是某个特定值的元素
  - [attribute!=value]：匹配所有不含有指定的属性，或者属性不等于特定值的元素
  - [attribute^=value]：匹配给定的属性是以某些值开始的元素
  - [attribute$=value]：匹配给定的属性是以某些值结尾的元素
  - [attribute*=value]：匹配给定的属性是以包含某些值的元素
  - \[attrSel1\]\[attrSel2\][attrSelN\]：复合属性选择器，需要同时满足多个条件时使用
- 表单过滤器：
  - :input：匹配所有 input,textarea,select 和 button 元素
  - :text：匹配所有文本输入框
  - :password：匹配所有的密码输入框
  - :radio：匹配所有的单选框
  - :checkbox：匹配所有的复选框
  - :submit：匹配所有提交按钮
  - :image：匹配所有 img 标签
  - :reset：匹配所有重置按钮
  - :button：匹配所有 input type=button \<button\>按钮
  - :file：匹配所有 input type=file 文件上传
  - :hidden：匹配所有不可见元素 display:none 或 input type=hidden
- 表单对象属性过滤器：
  - :enabled：匹配所有可用元素
  - :disabled：匹配所有不可用元素
  - :checked：匹配所有选中的单选，复选，和下拉列表中的 option 标签对象
  - :selected：匹配所有选中的 option

### 6. jQuery 元素筛选

- eq()：获取给定索引的元素——功能跟 :eq 一样
- first()：获取第一个元素——功能跟 :first 一样
- last()：获取最后一个元素——功能跟 :last 一样
- filter(exp)：留下匹配的元素
- is(exp)：判断是否匹配给定的选择器，只要有一个匹配就返回，true
- has(exp)：返回包含有匹配选择器的元素的元素——功能跟 :has 一样
- not(exp)：删除匹配选择器的元素——功能跟 :not 一样
- children(exp)：返回匹配给定选择器的子元素——功能跟 parent>child 一样
- find(exp)：返回匹配给定选择器的后代元素——功能跟 ancestor descendant 一样
- next()：返回当前元素的下一个兄弟元素——功能跟 prev+next 功能一样
- nextAll()：返回当前元素后面所有的兄弟元素——功能跟 prev~siblings 功能一样
- nextUntil()：返回当前元素到指定匹配的元素为止的后面元素
- parent()：返回父元素
- prev(exp)：返回当前元素的上一个兄弟元素
- prevAll()：返回当前元素前面所有的兄弟元素
- prevUnit(exp)：返回当前元素到指定匹配的元素为止的前面元素
- siblings(exp)：返回所有兄弟元素
- add()：把 add 匹配的选择器的元素添加到当前 jQuery 对象中

### 7. jQuery 的属性操作

- html()：它可以设置和获取起始标签和结束标签中的内容——跟 dom 属性 innerHTML 一样
- text()：它可以设置和获取起始标签和结束标签中的文本——跟 dom 属性 innerText 一样
- val()：它可以设置和获取表单项的value 属性值——跟 dom 属性 value 一样
- attr()：可以设置和获取属性的值，不推荐操作 checked、readOnly、selected、disabled 等等。attr 方法还可以操作非标准的属性。比如自定义属性：abc, bbj
- prop()：可以设置和获取属性的值，只推荐操作 checked、readOnly、selected、disabled 等等

val 方法同时设置多个表单项的选中状态示例代码：

```html
<!DOCTYPE html>
<html lang="zh_CN">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script type="text/javascript" src="script/jquery-1.7.2.js"></script>
    <script type="text/javascript">
        $(function () {
            /*// 批量操作单选
            $(":radio").val(["radio2"]);
            // 批量操作复选框的选中状态
            $(":checkbox").val(["checkbox1", "checkbox3", "checkbox2"]);
            // 批量操作多选的下拉框选中状态
            $("#multiple").val(["mul2", "mul3", "mul4"]);
            // 操作单选的下拉框选中状态
            $("#single").val(["sin3"]);*/

            $(":radio,:checkbox,#multiple,#single").val(["radio2", "checkbox1", "checkbox2", "mul2", "mul4", "sin2"]);
        });
    </script>
</head>
<body>
单选：
<input name="radio" type="radio" value="radio1"/>radio1
<input name="radio" type="radio" value="radio2"/>radio2
<br/>
多选：
<input name="checkbox" type="checkbox" value="checkbox1"/>checkbox1
<input name="checkbox" type="checkbox" value="checkbox2"/>checkbox2
<input name="checkbox" type="checkbox" value="checkbox3"/>checkbox3
<br/>
下拉多选 ：
<select id="multiple" multiple="multiple" size="4">
    <option value="mul1">mul1</option>
    <option value="mul2">mul2</option>
    <option value="mul3">mul3</option>
    <option value="mul4">mul4</option>
</select>
<br/>
下拉单选 ：
<select id="single">
    <option value="sin1">sin1</option>
    <option value="sin2">sin2</option>
    <option value="sin3">sin3</option>
</select>
</body>
</html>
```

### 8. jQuery 练习

全选，全不选，反选示例代码：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <script type="text/javascript" src="../../script/jquery-1.7.2.js"></script>
    <script type="text/javascript">
        $(function () {
            // 给全选绑定单击事件
            $("#checkedAllBtn").click(function () {
                $(":checkbox").prop("checked", true);
            });
            // 给全不选绑定单击事件
            $("#checkedNoBtn").click(function () {
                $(":checkbox").prop("checked", false);
            });
            //反选单击事件
            $("#checkedRevBtn").click(function () {
                // 查询全部球类的复选框
                $(":checkbox[name='items']").each(function () {
                    // 在 each 遍历的 function函数中，有一个this 对象，这个 this 对象是当前正在遍历到的 dom 对象
                    this.checked = !this.checked;
                });

                // 要检查 是否满选
                // 获取全部的球类的个数
                var allCount = $(":checkbox[name='items']").length;
                // 再获取选中的球类个数
                var checkedCount = $(":checkbox[name='items']:checked").length;
                // if (allCount == checkedCount) {
                //     $("#checkedAllBtn").prop("checked", true);
                // } else {
                //     $("#checkedAllBtn").prop("checked", false);
                // }
                $("#checkedAllBox").prop("checked", allCount == checkedCount);
            });
            // 提交按钮单击事件
            $("#sendBtn").click(function () {
                // 获取选中的球类的复选框
                $(":checkbox[name='items']:checked").each(function () {
                    alert(this.value);
                });
            });
            // 给 全选/全不选绑定单击事件
            $("#checkedAllBox").click(function () {
                // 在事件的 function 函数中，有一个 this 对象，这个 this 对象是当前正在响应事件的 dom 对象
                // alert(this.id);
                $(":checkbox[name='items']").prop("checked", this.checked);
            });
            // 给全部类绑定单击事件
            $(":checkbox[name='items']").click(function () {
                // 要检查 是否满选
                // 获取全部的球类的个数
                var allCount = $(":checkbox[name='items']").length;
                // 再获取选中的球类个数
                var checkedCount = $(":checkbox[name='items']:checked").length;

                $("#checkedAllBox").prop("checked", allCount == checkedCount);
            });
        });
    </script>
</head>
<body>

<form method="post" action="">
    你爱好的运动是？<input type="checkbox" id="checkedAllBox"/>全选/全不选
    <br/>
    <input type="checkbox" name="items" value="足球"/>足球
    <input type="checkbox" name="items" value="篮球"/>篮球
    <input type="checkbox" name="items" value="羽毛球"/>羽毛球
    <input type="checkbox" name="items" value="乒乓球"/>乒乓球
    <br/>
    <input type="button" id="checkedAllBtn" value="全　选"/>
    <input type="button" id="checkedNoBtn" value="全不选"/>
    <input type="button" id="checkedRevBtn" value="反　选"/>
    <input type="button" id="sendBtn" value="提　交"/>
</form>
</body>
</html>
```

### 9. DOM 的增删改

- 内部插入
  - appendTo()：——a.appendTo(b)——把a插入到b子元素末尾，成为最后一个子元素
  - prependTo()：——a.prependTo(b)——把a插到b所有子元素前面，成为第一个子元素
- 外部插入
  - insertAfter()——a.insertAfter(b)——得到 ba
  - insertBefore()——a.insertBefore(b)——得到 ab
- 替换
  - replaceWith()——a.replaceWith(b)——用b替换掉a
  - replaceAll()——a.replaceAll(b)——用a替换掉所有b
- 删除
  - remove()——a.remove();——删除a标签
  - empty()——a.empty();——清空a标签里的内容

### 10. jQuery 练习二

- 从右到左，从左到右示例代码

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Insert title here</title>
      <style type="text/css">
          select {
              width: 100px;
              height: 140px;
          }
  
          div {
              width: 130px;
              float: left;
              text-align: center;
          }
      </style>
      <script type="text/javascript" src="script/jquery-1.7.2.js"></script>
      <script type="text/javascript">
          // 页面加载完成
          $(function () {
              // 第一个按钮【选中添加到右边】
              $("button:eq(0)").click(function () {
                  $("select[name=sel01] option:selected").appendTo($("select:eq(1)"));
              });
              // 第二个按钮【全部添加到右边】
              $("button:eq(1)").click(function () {
                  $("select[name=sel01] option").appendTo($("select:eq(1)"));
              });
              // 第三个按钮【选中删除到左边】
              $("button:eq(2)").click(function () {
                  $("select:eq(1) option:selected").appendTo($("select:eq(0)"));
              });
              // 第四个按钮【全部删除到左边】
              $("button:eq(3)").click(function () {
                  $("select:eq(1) option").appendTo($("select:eq(0)"));
              });
          })
      </script>
  </head>
  <body>
  <div id="left">
      <select multiple="multiple" name="sel01">
          <option value="opt01">选项1</option>
          <option value="opt02">选项2</option>
          <option value="opt03">选项3</option>
          <option value="opt04">选项4</option>
          <option value="opt05">选项5</option>
          <option value="opt06">选项6</option>
          <option value="opt07">选项7</option>
          <option value="opt08">选项8</option>
      </select>
  
      <button>选中添加到右边</button>
      <button>全部添加到右边</button>
  </div>
  <div id="rigth">
      <select multiple="multiple" name="sel02">
      </select>
      <button>选中删除到左边</button>
      <button>全部删除到左边</button>
  </div>
  </body>
  </html>
  ```

- 动态添加、删除表格记录示例代码

  ```html
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Untitled Document</title>
      <link rel="stylesheet" type="text/css" href="styleB/css.css"/>
      <script type="text/javascript" src="../../script/jquery-1.7.2.js"></script>
      <script type="text/javascript">
          $(function () {
              // 创建一个用于复用的删除的function函数
              var deleteFun = function () {
                  // 在事件响应的function 函数中，有一个 this 对象，这个 this 对象是当前正在响应事件的 dom 对象
                  var $strObj = $(this).parent().parent();
  
                  var name = $strObj.find("td:first").text();
  
                  /**
                   * confirm 是 JavaScript 语言提供的一个确认提示函数，你给它传什么，它就提示什么
                   * 当用户点击了确定，就返回 true，当用户点击取消，就返回 false
                   */
                  if (confirm("你确定要删除[" + name + "]吗？")) {
                      $strObj.remove();
                  }
  
                  // return false; 可以阻止元素的默认行为
                  return false;
              };
  
              // 给【Submit】按钮绑定单击事件
              $("#addEmpButton").click(function () {
                  // 获取输入框，姓名，邮箱，工资的内容
                  var name = $("#empName").val();
                  var email = $("#email").val();
                  var salary = $("#salary").val();
  
                  // 创建一个行标签对象，添加到显示数据的表格中
                  var $strObj = $("<tr>" +
                      "        <td>" + name + "</td>" +
                      "        <td>" + email + "</td>" +
                      "        <td>" + salary + "</td>" +
                      "        <td><a href=\"deleteEmp?id=002\">Delete</a></td>" +
                      "    </tr>");
                  // 添加到显示数据的表格中
                  $strObj.appendTo($("#employeeTable"));
  
                  // 给添加的行的a标签绑上事件
                  $strObj.find("a").click(deleteFun);
              });
  
              // 给删除的a标签绑定单击事件
              $("a").click(deleteFun);
          });
      </script>
  </head>
  <body>
  <table id="employeeTable">
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>&nbsp;</th>
      </tr>
      <tr>
          <td>Tom</td>
          <td>tom@tom.com</td>
          <td>5000</td>
          <td><a href="deleteEmp?id=001">Delete</a></td>
      </tr>
      <tr>
          <td>Jerry</td>
          <td>jerry@sohu.com</td>
          <td>8000</td>
          <td><a href="deleteEmp?id=002">Delete</a></td>
      </tr>
      <tr>
          <td>Bob</td>
          <td>bob@tom.com</td>
          <td>10000</td>
          <td><a href="deleteEmp?id=003">Delete</a></td>
      </tr>
  </table>
  
  <div id="formDiv">
  
      <h4>添加新员工</h4>
  
      <table>
          <tr>
              <td class="word">name:</td>
              <td class="inp">
                  <input type="text" name="empName" id="empName"/>
              </td>
          </tr>
          <tr>
              <td class="word">email:</td>
              <td class="inp">
                  <input type="text" name="email" id="email"/>
              </td>
          </tr>
          <tr>
              <td class="word">salary:</td>
              <td class="inp">
                  <input type="text" name="salary" id="salary"/>
              </td>
          </tr>
          <tr>
              <td colspan="2" align="center">
                  <button id="addEmpButton" value="abc">
                      Submit
                  </button>
              </td>
          </tr>
      </table>
  </div>
  </body>
  </html>
  ```

### 11. CSS 样式操作

- addClass()：添加样式
- removeClass()：删除样式
- toggleClass()：有就删除，没有就添加样式
- offset()：获取和设置元素的坐标

### 12. jQuery 动画

- 基本动画

  - show()：将隐藏的元素显示
  - hide()：将可见的元素隐藏
  - toggle()：可见就隐藏，不可见就显示

  以上动画方法都可以添加参数

  1. 第一个参数是动画执行的时长，以毫秒为单位
  2. 第二个参数是动画的回调函数(动画完成后自动调用的函数)

- 淡入淡出动画

  - fadeln()：淡入(慢慢可见)
  - fadeOut()：淡出(慢慢消失)
  - fadeTo()：在指定时长内慢慢的将透明度修改到指定的值。0透明，1完全可见，0.5半透明
  - fadeToggle()：淡入/淡出 切换

- CSS动画品牌展示示例代码

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <title>品牌展示练习</title>
      <style type="text/css">
          * {
              margin: 0;
              padding: 0;
          }
  
          body {
              font-size: 12px;
              text-align: center;
          }
  
          a {
              color: #04D;
              text-decoration: none;
          }
  
          a:hover {
              color: #F50;
              text-decoration: underline;
          }
  
          .SubCategoryBox {
              width: 600px;
              margin: 0 auto;
              text-align: center;
              margin-top: 40px;
          }
  
          .SubCategoryBox ul {
              list-style: none;
          }
  
          .SubCategoryBox ul li {
              display: block;
              float: left;
              width: 200px;
              line-height: 20px;
          }
  
          .showmore, .showless {
              clear: both;
              text-align: center;
              padding-top: 10px;
          }
  
          .showmore a, .showless a {
              display: block;
              width: 120px;
              margin: 0 auto;
              line-height: 24px;
              border: 1px solid #AAA;
          }
  
          .showmore a span {
              padding-left: 15px;
              background: url(img/down.gif) no-repeat 0 0;
          }
  
          .showless a span {
              padding-left: 15px;
              background: url(img/up.gif) no-repeat 0 0;
          }
  
          .promoted a {
              color: #F50;
          }
      </style>
      <script type="text/javascript" src="script/jquery-1.7.2.js"></script>
      <script type="text/javascript">
          $(function () {
              // 基本初始状态
              $("li:gt(5):not(:last)").hide();
              // 给功能的按钮绑定单击事件
              $("div div a").click(function () {
                  // 让某些品牌，显示，或隐藏
                  $("li:gt(5):not(:last)").toggle();
                  // 判断 品牌，当前是否可见
                  if ($("li:gt(5):not(:last)").is(":hidden")) {
                      // 品牌隐藏的状态 1. 显示全部品牌     == 角标向下
                      $("div div a span").text("显示全部品牌");
                      $("div div").removeClass();
                      $("div div").addClass("showmore");
                      // 去掉高亮
                      $("li:contains('明基')").removeClass("promoted");
                  } else {
                      // 品牌显示的状态 2. 显示精简品牌     == 角标向上
                      $("div div a span").text("显示精简品牌");
                      $("div div").removeClass();
                      $("div div").addClass("showless");
                      // 加高亮
                      $("li:contains('明基')").addClass("promoted");
                  }
                  return false;
              });
          });
      </script>
  </head>
  <body>
  <div class="SubCategoryBox">
      <ul>
          <li><a href="#">佳能</a><i>(30440) </i></li>
          <li><a href="#">索尼</a><i>(27220) </i></li>
          <li><a href="#">三星</a><i>(20808) </i></li>
          <li><a href="#">尼康</a><i>(17821) </i></li>
          <li><a href="#">松下</a><i>(12289) </i></li>
          <li><a href="#">卡西欧</a><i>(8242) </i></li>
          <li><a href="#">富士</a><i>(14894) </i></li>
          <li><a href="#">柯达</a><i>(9520) </i></li>
          <li><a href="#">宾得</a><i>(2195) </i></li>
          <li><a href="#">理光</a><i>(4114) </i></li>
          <li><a href="#">奥林巴斯</a><i>(12205) </i></li>
          <li><a href="#">明基</a><i>(1466) </i></li>
          <li><a href="#">爱国者</a><i>(3091) </i></li>
          <li><a href="#">其它品牌相机</a><i>(7275) </i></li>
      </ul>
      <div class="showmore">
          <a href="more.html"><span>显示全部品牌</span></a>
      </div>
  </div>
  </body>
  </html>
  ```

### 13. jQuery 事件操作

- $(function(){}); 和 window.onload = function(){} 的区别
  - 他们分别是在什么时候触发
    1. jQuery 的页面加载完成之后是浏览器的内核解析完页面的标签创建好 DOM 对象之后就会马上执行
    2. 原生 js 的页面加载完成之后，除了要等浏览器内核解析完标签创建好 DOM 对象，还要等标签显示时需要的内容加载完成
  - 他们触发的顺序
    1. jQuery 页面加载完成之后先执行
    2. 原生 js 的页面加载完成之后
  - 他们执行的次数
    1. 原生 js 的页面加载完成之后，只会执行最后一次的赋值函数
    2. jQuery 的页面加载完成之后是全部把注册的 function 函数，依次顺序全部执行

- jQuery中其他的事件处理方法

  - click()：它可以绑定单击事件，以及触发单击事件
  - mouseover()：鼠标移入事件
  - mouseout()：鼠标移出事件
  - bind()：可以给元素一次性绑定一个或多个事件
  - one()：使用上跟 bind 一样。但是 one 方法绑定的事件只会响应一次
  - unbind()：跟 bind 方法相反的操作，解除事件的绑定
  - live()：也是用来绑定事件。它可以用来绑定选择器匹配的所有元素的事件。哪怕这个元素是后面动态创建出来的也有效

- 事件的冒泡

  - 什么是事件的冒泡

    事件的冒泡是指，父子元素同时监听同一个事件。当触发子元素的事件的时候，同一个事件也被传递到了父元素的事件里去响应

  - 那么如何阻止事件冒泡

    在子元素事件函数体内，return false; 可以阻止事件的冒泡传递

- JavaScript 事件对象

  - 事件对象，是封装有触发的事件信息的一个 JavaScript 对象。我们重点关心的是怎么拿到这个 JavaScript 的事件对象，以及使用。

  - 如何获取 JavaScript 事件对象

    在给元素绑定事件的时候，在事件的 function(event) 参数列表中添加一个参数，这个参数名，我们习惯取名为 event。这个 event 就是 JavaScript 传递参事件处理函数的事件对象。

  - 示例代码

    1. 原生 JavaScript 获取事件对象

       ```javascript
       window.onload = function () {
           document.getElementById("areaDiv").onclick = function (event) {
               console.log(event);
           }
       }
       ```

    2. jQuery 代码获取事件对象

       ```javascript
       $(function () {
       	$("#areaDiv").click(function () {
       		console.log(event);
       	});
       });
       ```

    3. 使用 bind 同时对多个事件绑定同一个函数。怎么获取当前操作是什么事件

       ```javascript
       $("#areaDiv").bind("mouseover mouseout", function (event) {
       	if (event.type == "mouseover") {
       		console.log("鼠标移入");
       	} else if (event.type == "mouseout") {
       		console.log("鼠标移出");
       	}
       });
       ```

- 事件图片跟随示例代码

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
  <html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Insert title here</title>
      <style type="text/css">
          body {
              text-align: center;
          }
  
          #small {
              margin-top: 150px;
          }
  
          #showBig {
              position: absolute;
              display: none;
          }
      </style>
      <script type="text/javascript" src="script/jquery-1.7.2.js"></script>
      <script type="text/javascript">
          $(function () {
              $("#small").bind("mouseover mouseout mousemove", function (event) {
                  if (event.type == "mouseover") {
                      $("#showBig").show();
                  } else if (event.type == "mouseout") {
                      $("#showBig").hide();
                  } else if (event.type == "mousemove") {
                      $("#showBig").offset({
                          left: event.pageX + 10,
                          top: event.pageY + 10
                      });
                  }
              });
          });
      </script>
  </head>
  <body>
  <img id="small" src="img/small.jpg"/>
  <div id="showBig">
      <img src="img/big.jpg">
  </div>
  </body>
  </html>
  ```




