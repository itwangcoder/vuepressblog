---
title: JavaWeb学习笔记尚硅谷中篇
description: JavaWeb学习笔记尚硅谷中篇
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

## 四、Xml

### 1. XML 简介

- 什么是 xml

  xml 是可扩展的标记性语言

- xml 的作用

  1. 用来保存数据，而且这些数据具有自我描述性
  2. 它还可以做为项目或者模块的配置文件
  3. 还可以做为网络传输数据的格式(现在 JSON 为主)

### 2. Xml 语法

1. 文档声明
2. 元素(标签)
3. xml 属性
4. xml 注释
5. 文本区域(CDATA 区)

#### 2.1 文档声明

我们先创建一个简单 XML 文件，用来描述图片信息

1. 创建一个 xml 文件

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>  xml 声明
   <!-- xml 声明
       version 表示 xml 的版本
       encoding 表示 xml 文件本身的编码
   -->
   属性
   version					是版本号
   encoding				是 xml 的文件编码
   standalone="yes/no"		表示这个 xml 文件是否是独立的 xml 文件
   ```

2. 图书有 id 属性 表示唯一标识，书名，有作者，价格的信息

   ```xml
   <?xml version="1.0" encoding="utf-8" ?>
   <!--
       <?xml version="1.0" encoding="utf-8" ?>
       以上内容就是 xml 文件的声明
       version="1.0"       version 表示 xml 的版本
       encoding="utf-8"    encoding 表示 xml 文件本身的编码
   -->
   <books> <!-- books 表示多个图书信息 -->
       <book sn="SN123456654123"> <!-- book 表示一个图书信息  sn 属性表示图书序列号 -->
           <name>时间简史</name> <!-- name 标签表示书名 -->
           <author>霍金</author> <!-- author 表示作者 -->
           <price>75</price> <!-- price 表示图书价格 -->
       </book>
       <book sn="SN123478954123"> <!-- book 表示一个图书信息  sn 属性表示图书序列号 -->
           <name>java从入门到放弃</name> <!-- name 标签表示书名 -->
           <author>沙师兄</author> <!-- author 表示作者 -->
           <price>9.9</price> <!-- price 表示图书价格 -->
       </book>
   </books>
   ```

   在浏览器中可以查看到文档

#### 2.2 xml 注释

html 和 XML 注释一样：

`<!-- html 注释 -->`

#### 2.3 元素(标签)

- html 标签

  格式：<标签>封装的数据</标签名>

  单标签：<标签名 />  \<br /\>换行   \<hr /\> 水平线

  双标签：<标签名>封装的数据</标签名>

  标签名大小写不敏感

  标签有属性，有基本属性和事件属性

  标签要闭合(不闭合，html中不报错。但我们要养成良好的书写习惯。)

- 什么是 xml 元素

  ![](JavaWeb学习笔记尚硅谷/Xml/什么是XML元素.png)

  元素是指从开始标签到结束标签的内容

  例如：\<title\>java 编程思想</title\>

  元素我们可以简单的理解为是标签，Element翻译元素

- XML 命名规则

  1. 名称可以含字母、数字以及其他的字符
  2. 名称不能以数字或者标点符号开始
  3. 名称不能以字符"xml"(或者 XML、Xml)开始(**它是可以的**)
  4. 名称不能包含空格

- xml 中的元素(标签)也分成单标签和双标签

  - 单标签

    格式：<标签名 属性="值" 属性="值"....../>

  - 双标签

    格式：<标签名 属性="值" 属性="值"......>文本数据或子标签</标签名>

#### 2.4 xml 属性

xml 的标签属性和 html 的标签属性是非常类似的，属性可以提供元素的额外信息

在标签上可以书写属性：一个标签上可以书写多个属性。每个属性的值必须使用引号引起来。规则和标签的书写规则一致

![](JavaWeb学习笔记尚硅谷/Xml/XML属性.png)

1. 属性必须使用引号引起来，不引会报错示例代码

#### 2.5 语法规则

1. 所有 XML 元素都须有关闭标签(也就是闭合)

2. XML 标签对大小写敏感

3. XML 必须正确地嵌套

4. XML 文档必须有根元素

   根元素就是顶级元素，没有父标签的元素，叫顶级元素。根元素是没有父标签的顶级元素，而且是唯一一个才行。

5. XML 的属性值须加引号

6. XML 中的特殊字符

7. 文本区域(CDATA 区)

   CDATA 语法可以告诉 xml 解析器，我 CDATA 里的文本内容，只是纯文本，不需要 xml 语法解析

   CDATA 格式：

   ```
   <![CDATA[ 这里可以把你输入的字符原样显示，不会解析 xml \]\]\>
   ```

### 3. Xml 解析技术介绍

xml 可扩展的标记语言。不管是 html 文件还是 xml 文件它们都是标记型文档，都可以使用 w3c 组织制定的 dom 技术来解析

![](JavaWeb学习笔记尚硅谷/Xml/xml解析技术介绍.png)

document 对象表示的是整个文档(可以是 html 文档，也可以是 xml 文档)

早期 JDK 为我们提供了两种 xml 解析技术 DOM 和 Sax 简介(已经过时，但我们需要知道这两种技术)

- dom 解析技术是 W3C 组织制定的，而所有的编程语言都对这个解析技术使用了自己语言的特点进行实现。Java 对 dom 技术解析标记也做了实现

- sun 公司在 JDK5 版本对 dom 解析技术进行升级：SAX(Simple API for XML)。sax 解析，它跟 W3C 制定的解析不太一样。它是以类似事件机制通过回调告诉用户当前正在解析的内容。它是一行一行的读取 xml 文件进行解析的。不会创建大量的 dom 对象。所以它在解析 xml 的时候，在内存的使用上和性能上，都优于 Dom 解析。

- 第三方的解析：

  jdom 在 dom 基础上进行了封装。

  dom4j 又对 jdom 进行了封装。

  pull 主要用在 Android 手机开发，是在跟 sax 非常类似都是事件机制解析 xml 文件。

这个 Dom4j 它是第三方的解析技术。我们需要使用第三方给我们提供好的类库才可以解析 xml 文件

### 4. dom4j 解析技术

由于 dom4j 它不是 sun 公司的技术，而属于第三方公司的技术，我们需要使用 dom4j 就需要到 dom4j 官网下载 dom4j 的 jar 包。

#### 4.1 Dom4j 类库的使用

#### 4.2 dom4j 目录的介绍

1. docs 是文档目录

2. 如何查 Dom4j 的文档

   1. 找到 dom4j 的包目录
   2. 找到 docs 目录
   3. 找到 index.html 文件双击打开

3. Dom4j 快速入门

   Quick Start 是快速入门示例

4. lib 目录：它是 dom4j 需要依赖其他第三方类库

5. src 目录是第三方类库的源码目录

#### 4.3 dom4j 编程步骤

1. 第一步：先加载 xml 文件创建 Document 对象
2. 第二步：通过 Document 对象拿到根元素对象
3. 第三步：通过根元素.elements(标签名); 可以返回一个集合，这个集合里放着。所有你指定的标签名的元素对象
4. 第四步：找到你想要修改、删除的子元素，进行相应的操作
5. 第五步：保存到硬盘上

#### 4.4 获取 document 对象

创建一个 lib 目录，并添加 dom4j 的 jar 包。并添加到类路径

需要解析的 books.xml 文件内容

```xml
<?xml version="1.0" encoding="UTF-8"?>
<books>
    <book sn="SN12341232">
        <name>辟邪剑谱</name>
        <price>9.9</price>
        <author>班主任</author>
    </book>
    <book sn="SN12341231">
        <name>葵花宝典</name>
        <price>99.99</price>
        <author>班长</author>
    </book>
</books>
```

解析获取 Document 对象的代码

第一步，先创建 SaxReader 对象，这个对象，用于读取 xml 文件，并创建 Document

```java
/**
* dom4j 获取 Documet 对象
*/
@Test
public void getDocument() throws DocumentException {
    // 要创建一个 Document 对象，需要我们先创建一个 SAXReader 对象
    SAXReader reader = new SAXReader();
    // 这个对象用于读取 xml 文件，然后返回一个 Document。
    Document document = reader.read("src/books.xml");
    // 打印到控制台，看看是否创建成功
    System.out.println(document);
}
```



#### 4.5 遍历标签，获取所有标签中的内容

1. 第一步，通过创建 SAXReader 对象。来读取 xml 文件，获取 Document
2. 第二步，通过 Document 对象，拿到 XML 的根元素对象
3. 第三步，通过根元素对象，获取所有的 book 标签对象
4. 第四步，遍历每个 book 标签对象，然后获取到 book 标签对象内的每一个元素，再通过 getText() 方法拿到起始标签和结束标签之间的文本内容

示例代码：

```java
/**
 * 读取 books.xml 文件生成 Book 类
 */
@Test
public void test2() throws DocumentException {
    // 1. 读取 books.xml 文件
    SAXReader reader = new SAXReader();
    // 在 Junit 测试中，相对路径是从模块名开始算
    Document document = reader.read("src/books.xml");
    // 2. 通过 Document 对象获取根元素
    Element rootElement = document.getRootElement();
    // 3. 通过根元素获取 book 标签对象
    // element() 和 elements() 都是通过标签名查找子元素
    List<Element> books = rootElement.elements("book");
    // 4. 遍历，处理每个 book 标签转换为 Book 类
    for (Element book : books) {
        // asXML() 把标签对象，转换为标签字符串
        // System.out.println(book.asXML());
        Element nameElement = book.element("name");
        // getText() 方法可以获取标签中的文本内容
        String nameText = nameElement.getText();
        // 直接获取指定标签名的文本内容
        String priceText = book.elementText("price");
        String authorText = book.elementText("author");

        String snValue = book.attributeValue("sn");
        System.out.println(new Book(snValue, nameText, BigDecimal.valueOf(Double.parseDouble(priceText)), authorText));
    }
}
```

打印内容：

![](JavaWeb学习笔记尚硅谷/Xml/Xml遍历打印结果.png)

## 五、Tomcat

### 1. JavaWeb 的概念

1. 什么是 JavaWeb

   JavaWeb 是指，所有通过 Java 语言编写可以通过浏览器访问的程序的总称，叫 JavaWeb。JavaWeb 是基于请求和响应开发的

2. 什么是请求

   请求是指客户端给服务器发送数据，叫请求 Request

3. 什么是响应

   响应是指服务器给客户端回传数据，叫响应 Response

4. 请求和响应的关系

   请求和响应是成对出现的，有请求就有响应

![](JavaWeb学习笔记尚硅谷/Tomcat/请求和响应.png)

### 2. Web 资源的分类

web 资源按实现的技术和呈现的效果的不同，又分为静态资源和动态资源两种

- 静态资源：html、css、js、txt、mp4 视频，jpg 图片
- 动态资源：jsp 页面，Servlet 程序

### 3. 常用的 Web 服务器

- Tomcat：由 Apache 组织提供的一种 Web 服务器，提供对 jsp 和 Servlet 的支持。它是一种轻量级的 javaWeb 容器（服务 器），也是当前应用最广的 JavaWeb 服务器（免费）。
-  Jboss：是一个遵从 JavaEE 规范的、开放源代码的、纯 Java 的 EJB 服务器，它支持所有的 JavaEE 规范（免费）。
-  GlassFish： 由 Oracle 公司开发的一款 JavaWeb 服务器，是一款强健的商业服务器，达到产品级质量（应用很少）。
-  Resin：是 CAUCHO 公司的产品，是一个非常流行的服务器，对 servlet 和 JSP 提供了良好的支持， 性能也比较优良，resin 自身采用 JAVA 语言开发（收费，应用比较多）。
-  WebLogic：是 Oracle 公司的产品，是目前应用最广泛的 Web 服务器，支持 JavaEE 规范， 而且不断的完善以适应新的开发要求，适合大型项目（收费，用的不多，适合大公司）。

### 4. Tomcat 服务器和 Servlet 版本的对应关系

当前企业常用版本 7.\*、8.\*

![](JavaWeb学习笔记尚硅谷/Tomcat/Tomcat服务器和Servlet版本的对应关系.png)

Servlet 程序从 2.5 版本是现在世面使用最多的版本(xml 配置)，到了 Servlet3.0 之后，就是注解版本的 Servlet 使用。

以 2.5 版本为主线讲解 Servlet 程序

### 5. Tomcat 的使用

1. 安装

   找到你需要用的 Tomcat 版本对应的 zip 压缩包，解压到需要安装的目录即可

2. 目录介绍

   - bin：专门用来存放 Tomcat 服务器的可执行程序 
   - conf：专门用来存放 Tocmat 服务器的配置文件
   - lib：专门用来存放 Tomcat 服务器的 jar 包
   - logs：专门用来存放 Tomcat 服务器运行时输出的日记信息
   - temp：专门用来存放 Tomcat 运行时产生的临时数据 
   - webapps：专门用来存放部署的 Web 工程。 
   - work：是 Tomcat 工作时的目录，用来存放 Tomcat 运行时 jsp 翻译为 Servlet 的源码，和 Session 钝化的目录。

3. 如何启动 Tomcat 服务器

   - 找到 Tomcat 目录下的 bin 目录下的 startup.bat 文件，双击，就可以启动 Tomcat 服务器。

   - 如何测试 Tomcat 服务器启动成功？？？ 

     打开浏览器，在浏览器地址栏中输入以下地址测试：

     1. http://localhost:8080 
     2. http://127.0.0.1:8080 
     3. http://真实 ip:8080

     当出现如下界面，说明 Tomcat 服务器启动成功！！！

     ![](JavaWeb学习笔记尚硅谷/Tomcat/Tomcat启动成功界面.png)

   - 常见的启动失败的情况有，双击 startup.bat 文件，就会出现一个小黑窗口一闪而来。 这个时候，失败的原因基本上都是因为没有配置好 JAVA_HOME 环境变量。 

   - 常见的 JAVA_HOME 配置错误有以下几种情况：

     1. JAVA_HOME 必须全大写。

     1. JAVA_HOME 中间必须是下划线，不是减号- 

     1. JAVA_HOME 配置的路径只需要配置到 

   - 另一种启动 tomcat 服务器的方式
     1. 打开命令行
     2. cd 到你的 Tomcat 的 bin 目录下
     3. 敲入启动命令：catalina run

4. Tomcat 的停止

   1. 点击 tomcat 服务器窗口的 x 关闭按钮 
   2. 把 Tomcat 服务器窗口置为当前窗口，然后按快捷键 Ctrl+C 
   3. 找到 Tomcat 的 bin 目录下的 shutdown.bat 双击，就可以停止 Tomcat 服务

5. 如何修改 Tomcat 的端口号

   Mysql 默认的端口号是：3306

   Tomcat 默认的端口号是：8080

   找到 Tomcat 目录下的 conf 目录，找到 server.xml 配置文件。

   ![](JavaWeb学习笔记尚硅谷/Tomcat/修改Tomcat的端口号.png)

   平时上百度：http://www.baidu.com:80。HTTP 协议默认的端口号是：80

6. 如何部署 web 工程到 Tomcat 中

   - 第一种部署方法：只需要把 web 工程的目录拷贝到 Tomcat 的 webapps 目录下即可

     1. 在 webapps 目录下创建一个 book 工程

     2. 把上午做的书城第一阶段的内容拷贝到里面

     3. 如何访问 Tomcat 下的 web 工程

        只需要在浏览器中输入访问地址格式如下：http://ip:port/工程名/目录下/文件名

   - 第二种部署方法：

     找到 Tomcat 下的 conf 目录 \Catalina\localhost\ 下，创建如下的配置文件：

     abc.xml 配置文件内容如下

     ```xml
     <!-- Context 表示一个工程上下文
             path 表示工程的访问路径:/abc
             docBase 表示你的工程目录在哪里
      -->
     <Context path="/abc" docBase="D:\book" />
     ```

     访问这个工程的路径如下：http://ip:port/abc/	就表示访问 E:\book 目录

7. 手拖 html 页面到浏览器和在浏览器中输入 http://ip:端口号/工程名/访问的区别

   手拖 html 页面的原理：

   ![](JavaWeb学习笔记尚硅谷/Tomcat/手拖html页面的原理.png)

   输入访问地址访问的原因是：

   ![](JavaWeb学习笔记尚硅谷/Tomcat/输入访问地址访问的原因.png)

8. ROOT的工程的访问，以及默认 index.html 页面的访问

   - 当我们在浏览器地址栏中输入访问地址如下： http://ip:port/ ====>>>> 没有工程名的时候，默认访问的是 ROOT 工程。 
   - 当我们在浏览器地址栏中输入的访问地址如下： http://ip:port/工程名/ ====>>>> 没有资源名，默认访问 index.html

### 6. IDEA 整合 Tomcat 服务器

操作的菜单如下：File | Settings | Build, Execution, Deployment | Application Server

### 7. IDEA 中动态 Web 工程的操作

1. IDEA 中如何创建动态 web 工程

   1. 创建一个新模块

   2. 选择你要创建什么类型的模块

   3. 输入你的模块名，点击【finish】完成创建

   4. 创建成功如下图

      ![](JavaWeb学习笔记尚硅谷/Tomcat/IDEA创建动态web工程成功结构.png)

2. Web 工程的目录介绍

   ![](JavaWeb学习笔记尚硅谷/Tomcat/Web工程的目录介绍.png)

3. 如何给动态 web 工程添加额外 jar 包

   1. 可以打开项目结构菜单操作界面，添加一个自己的类库
   2. 添加你类库需要的 jar 包文件
   3. 选择你添加的类库，给哪个模块使用
   4. 选择 Artifacts 选项，将类库，添加到打包部署中

4. 如何在 IDEA 中部署工程到 Tomcat 上运行

   1. 建议修改 web 工程对应的 Tomcat 运行实例名称

   2. 确认你的 Tomcat 实例中有你要部署运行的 web 工程模块

   3. 你还可以修改你的 Tomcat 实例启动后默认的访问地址

   4. 在 IDEA 中如何运行和停止 Tomcat 实例

      ![](JavaWeb学习笔记尚硅谷/Tomcat/Tomcat启动和停止运行实例.png)

5. 修改工程访问路径

   ![](JavaWeb学习笔记尚硅谷/Tomcat/修改工程访问路径.png)

6. 修改运行的端口号

   ![](JavaWeb学习笔记尚硅谷/Tomcat/修改运行的端口号.png)

7. 修改运行使用的浏览器

   ![](JavaWeb学习笔记尚硅谷/Tomcat/修改运行使用的浏览器.png)

8. 配置资源热部署

   ![](JavaWeb学习笔记尚硅谷/Tomcat/配置资源热部署.png)


## 六、Servlet

### 1. Servlet 技术

1. 什么是 Servlet

   1. Servlet 是 JavaEE 规范之一。规范就是接口
   2. Servlet 就是 JavaWeb 三大组件之一。三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器
   3. Servlet 是运行在服务器上的一个 java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端

2. 手动实现 Servlet 程序

   1. 编写一个类去实现 Servlet 接口
   2. 实现 service 方法，处理请求，并响应数据
   3. 到 web.xml 中去配置 servlet 程序的访问地址

   Servlet 程序的示例代码：

   ```java
   public class HelloServlet implements Servlet {
       /**
        * service 方法是专门用来处理请求和响应的
        * @param servletRequest
        * @param servletResponse
        * @throws ServletException
        * @throws IOException
        */
       @Override
       public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
           System.out.println("Hello Servlet 被访问了");
       }
   }
   ```

   web.xml 中的配置示例代码：

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
            version="4.0">
       <!-- servlet 标签给 Tomcat 配置 Servlet 程序 -->
       <servlet>
           <!-- servlet-name 标签 Servlet 程序起一个别名(一般是类名) -->
           <servlet-name>HelloServlet</servlet-name>
           <!-- servlet-class 是 Servlet 程序的全类名 -->
           <servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>
       </servlet>
       <!-- servlet-mapping 标签给 servlet 程序配置访问地址 -->
       <servlet-mapping>
           <!-- servlet-name 标签的作用是告诉服务器，我当前配置的地址给哪个 Servlet 程序使用 -->
           <servlet-name>HelloServlet</servlet-name>
           <!-- url-pattern 标签配置访问地址
                   / 斜杠在服务器解析的时候，表示地址为：http://ip:port/工程路径
                   /hello 表示地址为：http://ip:port/工程路径/hello
            -->
           <url-pattern>/hello</url-pattern>
       </servlet-mapping>
   </web-app>
   ```

   常见的错误

   1. url-pattern 中配置的路径没有以斜杠打头

      ![](JavaWeb学习笔记尚硅谷/Servlet/常见错误1urlpattern配置路径没有以斜杠打头.png)

   2. servlet-name 配置的值不存在

      ![](JavaWeb学习笔记尚硅谷/Servlet/常见错误2servletname配置的值不存在.png)

   3. servlet-class 标签的全类名配置错误

      ![](JavaWeb学习笔记尚硅谷/Servlet/常见错误3servletclass标签的全类名配置错误.png)

3. url 地址到 Servlet 程序的访问

   ![](JavaWeb学习笔记尚硅谷/Servlet/url地址到Servlet程序的访问.png)

4. Servlet 的生命周期

   1. 执行 Servlet 构造器方法

   2. 执行 init 初始化方法

      第一、二步，是在第一次访问的时候创建 Servlet 程序会调用

   3. 执行 service 方法

      第三步，每次访问都会调用

   4. 执行 destroy 销毁方法

      第四步，在 web 工程停止的时候调用

5. GET 和 POST 请求的分发处理

   ```java
   public class HelloServlet implements Servlet {
       /**
        * service 方法是专门用来处理请求和响应的
        *
        * @param servletRequest
        * @param servletResponse
        * @throws ServletException
        * @throws IOException
        */
       @Override
       public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
           System.out.println("3 service === Hello Servlet 被访问了");
           // 类型转换(因为它有 getMethod() 方法)
           HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
           String method = httpServletRequest.getMethod();
           if ("GET".equals(method)) {
               doGet();
           } else if ("POST".equals(method)) {
               doPost();
           }
       }
   
       /**
        * 做 get 请求的操作
        */
       public void doGet() {
           System.out.println("get 请求");
           System.out.println("get 请求");
           System.out.println("get 请求");
       }
   
       /**
        * 做 post 请求的操作
        */
       public void doPost() {
           System.out.println("post 请求");
           System.out.println("post 请求");
           System.out.println("post 请求");
       }
   }
   ```

   web.xml 中的配置

   ```xml
   <servlet>
       <servlet-name>HelloServlet</servlet-name>
       <servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>
   </servlet>
   <servlet-mapping>
       <servlet-name>HelloServlet</servlet-name>
       <url-pattern>/hello</url-pattern>
   </servlet-mapping>
   ```

6. 通过继承 HTTPServlet 实现 Servlet 程序

   一般在实际项目开发中，都是使用继承 HttpServlet 类的方式去实现 Servlet 程序

   1. 编写一个类去继承 HttpServlet 类
   2. 根据业务需要重写 doGet 或 doPost 方法
   3. 到 web.xml 中配置 Servlet 程序的访问地址

   Servlet 类的代码：

   ```java
   public class HelloServlet2 extends HttpServlet {
       /**
        * doGet() 在 get 请求的时候调用
        *
        * @param req
        * @param resp
        * @throws ServletException
        * @throws IOException
        */
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           System.out.println("HelloServlet2 的doGet方法");
       }
   
       /**
        * doPost() 在 post 请求的时候调用
        *
        * @param req
        * @param resp
        * @throws ServletException
        * @throws IOException
        */
       @Override
       protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           System.out.println("HelloServlet2 的doPost方法");
       }
   }
   ```

   web.xml 中的配置：

   ```xml
   <servlet>
       <servlet-name>HelloServlet2</servlet-name>
       <servlet-class>com.atguigu.servlet.HelloServlet2</servlet-class>
   </servlet>
   <servlet-mapping>
       <servlet-name>HelloServlet2</servlet-name>
       <url-pattern>/hello2</url-pattern>
   </servlet-mapping>
   ```

7. 使用 IDEA 创建 Servlet 程序

   菜单：new -> Servlet 程序

   配置 Servlet 的信息：

8. Servlet 类的继承体系

   ![](JavaWeb学习笔记尚硅谷/Servlet/Servlet类的继承体系.png)

### 2. ServletConfig 类

ServletConfig 类从类名上来看，就知道是 Servlet 程序的配置信息类。

Servlet 程序和 ServletConfig 对象都是由 Tomcat 负责创建，我们负责使用

Servlet 程序默认是第一次访问的时候创建，ServletConfig 是每个 Servlet 程序创建时，就创建一个对应的 ServletConfig 对象

- ServletConfig 类的三大作用

  1. 可以获取 Servlet 程序的别名 servlet-name 的值
  2. 获取初始化参数 init-param
  3. 获取 ServletContext 对象

  web.xml 中的配置：

  ```xml
  <!-- servlet 标签给 Tomcat 配置 Servlet 程序 -->
  <servlet>
      <!-- servlet-name 标签 Servlet 程序起一个别名(一般是类名) -->
      <servlet-name>HelloServlet</servlet-name>
      <!-- servlet-class 是 Servlet 程序的全类名 -->
      <servlet-class>com.atguigu.servlet.HelloServlet</servlet-class>
      <!-- init-param 是初始化参数 -->
      <init-param>
          <!-- 是参数名 -->
          <param-name>username</param-name>
          <!-- 是参数值 -->
          <param-value>root</param-value>
      </init-param>
      <!-- init-param 是初始化参数 -->
      <init-param>
          <!-- 是参数名 -->
          <param-name>url</param-name>
          <!-- 是参数值 -->
          <param-value>jdbc:mysql://localhost:3306/test</param-value>
      </init-param>
  </servlet>
  <!-- servlet-mapping 标签给 servlet 程序配置访问地址 -->
  <servlet-mapping>
      <!-- servlet-name 标签的作用是告诉服务器，我当前配置的地址给哪个 Servlet 程序使用 -->
      <servlet-name>HelloServlet</servlet-name>
      <!-- url-pattern 标签配置访问地址
              / 斜杠在服务器解析的时候，表示地址为：http://ip:port/工程路径
              /hello 表示地址为：http://ip:port/工程路径/hello
       -->
      <url-pattern>/hello</url-pattern>
  </servlet-mapping>
  ```

  Servlet 中的代码：

  ```java
  @Override
  public void init(ServletConfig servletConfig) throws ServletException {
      System.out.println("2 init 初始化方法");
      // 1. 可以获取 Servlet 程序的别名 servlet-name 的值
      System.out.println("HelloServlet 程序的别名是：" + servletConfig.getServletName());
      // 2. 获取初始化参数 init-param
      System.out.println("初始化参数 username 的值是：" + servletConfig.getInitParameter("username"));
      System.out.println("初始化参数 url 的值是：" + servletConfig.getInitParameter("url"));
      // 3. 获取 ServletContext 对象
      System.out.println(servletConfig.getServletContext());
  }
  ```

  注意点：

  ![](JavaWeb学习笔记尚硅谷/Servlet/ServletConfig注意点.png)

### 3. ServletContext 类

1. 什么是 ServletContext

   1. ServletContext 是一个接口，它表示 Servlet 上下文对象
   2. 一个 web 工程，只有一个 ServletContext 对象实例
   3. ServletContext 对象是一个域对象
   4. ServletContext 是在 web 工程部署启动的时候创建。在 web 工程停止的时候销毁

   - 什么是域对象

     域对象，是可以像 Map 一样存取数据的对象，叫域对象。这里的域指的是存取数据的操作范围，整个 web 工程

   |        |     存数据     |     取数据     |     删除数据      |
   | :----: | :------------: | :------------: | :---------------: |
   |  Map   |     put()      |     get()      |     remove()      |
   | 域对象 | setAttribute() | getAttribute() | removeAttribute() |

2. ServletContext 类的四个作用

   1. 获取 web.xml 中配置的上下文参数 context-param
   2. 获取当前的工程路径，格式：/工程路径
   3. 获取工程部署后在服务器硬盘上的绝对路径
   4. 像 Map 一样存取数据

   ServletContext 演示代码：

   ```java
   @Override
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
   //        1. 获取 web.xml 中配置的上下文参数 context-param
       ServletContext context = getServletConfig().getServletContext();
       String username = context.getInitParameter("username");
       System.out.println("context-param 参数 username 的值是：" + username);
       System.out.println("context-param 参数 password 的值是：" + context.getInitParameter("password"));
   //        2. 获取当前的工程路径，格式：/工程路径
       System.out.println("当前工作路径：" + context.getContextPath());
   //        3. 获取工程部署后在服务器硬盘上的绝对路径
       /**
        * / 斜杠被服务器解析为地址：http://ip:port/工程名/    映射到 IDEA 代码的 web 目录
        */
       System.out.println("工程真实部署的路径是：" + context.getRealPath("/"));
       System.out.println("工程下css目录的绝对路径是：" + context.getRealPath("/css"));
   }
   ```
   
   web.xml 中的配置：
   
   ```xml
   <!-- context-param 上下文参数(它属于整个 web 工程) -->
       <context-param>
           <param-name>username</param-name>
           <param-value>context</param-value>
       </context-param>
       <!-- context-param 上下文参数(它属于整个 web 工程) -->
       <context-param>
           <param-name>password</param-name>
           <param-value>root</param-value>
       </context-param>
   ```
   
   ServletContext 像 Map 一样存取数据
   
   ContextServlet1 代码：
   
   ```java
   public class ContextServlet1 extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
           // 获取 ServletContext 对象
           ServletContext context = getServletContext();
           System.out.println("保存之前 context1 中获取key1的值是：" + context.getAttribute("key1"));
           context.setAttribute("key1", "value1");
           System.out.println("context1 中获取域数据key1的值是：" + context.getAttribute("key1"));
           System.out.println("context1 中获取域数据key1的值是：" + context.getAttribute("key1"));
           System.out.println("context1 中获取域数据key1的值是：" + context.getAttribute("key1"));
       }
   }
   ```
   
   ContextServlet2 代码：
   
   ```java
   public class ContextServlet2 extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
           ServletContext context = getServletContext();
           System.out.println("context2 中获取域数据key1的值是：" + context.getAttribute("key1"));
       }
   }
   ```
   

### 4. HTTP 协议

1. 什么是 HTTP 协议

   协议是指双方，或多方，相互约定好，大家都需要遵守的规则，叫协议。 所谓 HTTP 协议，就是指，客户端和服务器之间通信时，发送的数据，需要遵守的规则，叫 HTTP 协议。 HTTP 协议中的数据又叫报文

2. 请求的 HTTP 协议格式

   客户端给服务器发送数据叫请求。 服务器给客户端回传数据叫响应。 请求又分为 GET 请求，和 POST 请求两种。

   1. GET 请求

      1. 请求行 

         1. 请求的方式——GET
         2. 请求的资源路径[+?+请求参数]
         3. 请求的协议的版本号——HTTP/1.1 

      2. 请求头 

         key : value 组成 不同的键值对，表示不同的含义。

      ![](JavaWeb学习笔记尚硅谷/Servlet/GET请求协议格式.png)

   2. POST 请求

      1. 请求行 

         1. 请求的方式 POST 
         2. 请求的资源路径[+?+请求参数] 
         3. 请求的协议的版本号 HTTP/1.1 

      2. 请求头

         - key : value 不同的请求头，有不同的含义 

         空行 

      3. 请求体 ===>>> 就是发送给服务器的数据

      ![](JavaWeb学习笔记尚硅谷/Servlet/POST请求协议格式.png)

   3. 常用请求头的说明

      - Accept: 表示客户端可以接收的数据类型 
      - Accpet-Languege: 表示客户端可以接收的语言类型 
      - User-Agent: 表示客户端浏览器的信息 
      - Host： 表示请求时的服务器 ip 和端口号

   4. 哪些是 GET 请求，哪些是 POST 请求

      - GET 请求有哪些： 
        1. form 标签 method=get 
        2. a 标签 
        3. link 标签引入 css 
        4. Script 标签引入 js 文件 
        5. img 标签引入图片 
        6. iframe 引入 html 页面 
        7. 在浏览器地址栏中输入地址后敲回车 
      - POST 请求有哪些： 
        - form 标签 method=post

3. 响应的 HTTP 协议格式

   1. 响应行 

      1. 响应的协议和版本号 
      2. 响应状态码 
      3. 响应状态描述符 

   2. 响应头 

      - key : value 不同的响应头，有其不同含义 

      空行 

   3. 响应体 ---->>> 就是回传给客户端的数据

   ![](JavaWeb学习笔记尚硅谷/Servlet/响应的HTTP协议格式.png)

4. 常用的响应码说明

   - 200：表示请求成功 
   - 302：表示请求重定向（明天讲） 
   - 404：表示请求服务器已经收到了，但是你要的数据不存在（请求地址错误） 
   - 500：表示服务器已经收到请求，但是服务器内部错误（代码错误）

5. MIME 类型说明

   MIME 是 HTTP 协议中数据类型。 MIME 的英文全称是"Multipurpose Internet Mail Extensions" 多功能 Internet 邮件扩充服务。MIME 类型的格式是“大类型/小 类型”，并与某一种文件的扩展名相对应。 

   常见的 MIME 类型：

   ![](JavaWeb学习笔记尚硅谷/Servlet/常见的MIME类型1.png)

   ![](JavaWeb学习笔记尚硅谷/Servlet/常见的MIME类型2.png)

   谷歌浏览器如何查看 HTTP 协议：

   ![](JavaWeb学习笔记尚硅谷/Servlet/谷歌浏览器查看HTTP协议.png)

   火狐浏览器如何查看 HTTP 协议：

   ![](JavaWeb学习笔记尚硅谷/Servlet/火狐浏览器查看HTTP协议.png)

### 5.HttpServletRequest 类

1. HttpServletRequest 类有什么用

   每次只要有请求进入 Tomcat 服务器，Tomcat 服务器就会把请求过来的 HTTP 协议信息解析好封装到 Request 对象中。 然后传递到 service 方法（doGet 和 doPost）中给我们使用。我们可以通过 HttpServletRequest 对象，获取到所有请求的信息。

2. HttpServletRequest 类的常用方法

   1. getRequestURI()：获取请求的资源路径 
   2. getRequestURL()：获取请求的统一资源定位符（绝对路径） 
   3. getRemoteHost()：获取客户端的 ip 地址 
   4. getHeader()：获取请求头 
   5. getParameter()：获取请求的参数 
   6. getParameterValues()：获取请求的参数（多个值的时候使用） 
   7. getMethod()：获取请求的方式 GET 或 POST 
   8. setAttribute(key, value)：设置域数据 
   9. getAttribute(key)：获取域数据 
   10. getRequestDispatcher()：获取请求转发对象

   常用 API 示例代码：

   ```java
   public class RequestAPIServlet extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           // i. getRequestURI() 获取请求的资源路径
           System.out.println("URI =>" + req.getRequestURI());
           // ii. getRequestURL() 获取请求的统一资源定位符（绝对路径）
           System.out.println("URL =>" + req.getRequestURL());
           // iii. getRemoteHost() 获取客户端的 ip 地址
           /**
            * 在 IDEA 中，使用 localhost 访问时，得到的客户端 ip 地址是 ===>>> 0:0:0:0:0:0:0:1 本机测试
            * 在 IDEA 中，使用 localhost 访问时，得到的客户端 ip 地址是 ===>>> 127.0.0.1
            * 在 IDEA 中，使用 127.0.0.1 访问时，得到的客户端 ip 地址是 ===>>> 127.0.0.1
            * 在 IDEA 中，使用 真实ip 访问时，得到的客户端 ip 地址是 ===>>> 真实的客户端 ip 地址
            */
           System.out.println("客户端 ip 地址 =>" + req.getRemoteHost());
           // iv. getHeader() 获取请求头
           System.out.println("请求头 User-Agent ==>> " + req.getHeader("User-Agent"));
           // vii. getMethod() 获取请求的方式 GET 或 POST
           System.out.println("请求的方式 =>" + req.getMethod());
       }
   }
   ```

3. 如何获取请求参数

   表单：

   ```html
   <form action="http://localhost:8080/07_servlet/parameterServlet" method="post">
       用户名：<input type="text" name="username"/><br/>
       密码：<input type="password" name="password"/><br/>
       兴趣爱好：<input type="checkbox" name="hobby" value="cpp"/>C++
       <input type="checkbox" name="hobby" value="java"/>Java
       <input type="checkbox" name="hobby" value="js"/>JavaScript<br/>
       <input type="submit"/>
   </form>
   ```

   Java 代码：

   ```java
   public class ParameterServlet extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           System.out.println("----------------doGet------------------");
           // 获取请求参数
           String username = req.getParameter("username");
           String password = req.getParameter("password");
           String[] hobby = req.getParameterValues("hobby");
   
           System.out.println("用户名：" + username);
           System.out.println("密码：" + password);
           System.out.println("兴趣爱好：" + Arrays.asList(hobby));
       }
   }
   ```

   doGet 请求的中文乱码解决：

   ```java
   // 获取请求参数
   String username = req.getParameter("username");
   //1 先以 iso8859-1 进行编码
   //2 再以 utf-8 进行解码
   username = new String(username.getBytes("iso-8859-1"), "UTF-8");
   ```

4. POST 请求的中文乱码解决

   ```java
   @Override
   protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
       // 设置请求体的字符集为 UTF-8，从而解决 post 请求的中文乱码问题
       // 也要在获取请求参数之前调用才有效
       req.setCharacterEncoding("UTF-8");
       System.out.println("----------------doPost------------------");
       // 获取请求参数
       String username = req.getParameter("username");
       String password = req.getParameter("password");
       String[] hobby = req.getParameterValues("hobby");
   
       System.out.println("用户名：" + username);
       System.out.println("密码：" + password);
       System.out.println("兴趣爱好：" + Arrays.asList(hobby));
   }
   ```

5. 请求的转发

   - 什么是请求的转发

     请求转发是指，服务器收到请求后，从一次资源跳转到另一个资源的操作叫请求转发。

   ![](JavaWeb学习笔记尚硅谷/Servlet/请求转发.png)

   Servlet1 代码：

   ```java
   public class Servlet1 extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           // 获取请求的参数(办事的材料)查看
           String username = req.getParameter("username");
           System.out.println("在 Servlet1(柜台1)中查看参数(材料)：" + username);
   
           // 给材料盖一个章，并传递到 Servlet2(柜台2)去查看
           req.setAttribute("key1", "柜台1的章");
   
           // 问路：Servlet2(柜台2)怎么走
           /**
            * 请求转发必须以斜杠打头，/ 斜杠表示地址为：http://ip:port/工程名/，映射到 IDEA 代码的web 目录
            */
           RequestDispatcher requestDispatcher = req.getRequestDispatcher("/servlet2");
   
           // 走向 servlet2（柜台2）
           requestDispatcher.forward(req, resp);
       }
   }
   ```

   Servlet2 代码：

   ```java
   public class Servlet2 extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           // 获取请求的参数(办事的材料)查看
           String username = req.getParameter("username");
           System.out.println("在 Servlet2(柜台2)中查看参数(材料)：" + username);
   
           // 查看柜台1是否有盖章
           Object key1 = req.getAttribute("key1");
           System.out.println("柜台1是否有章：" + key1);
   
           // 处理自己的业务
           System.out.println("Servlet2 处理自己的业务");
       }
   }
   ```

6. base 标签的作用

   ![](JavaWeb学习笔记尚硅谷/Servlet/base标签的作用.png)

   示例代码：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Title</title>
       <!-- base 标签设置页面相对路径工作时参照的地址
               href 属性就是参照的地址值-->
       <base href="http://localhost:8080/07_servlet/a/b/c.html"/>
   </head>
   <body>
   这是a下的b下的c.html 页面
   <a href="../../index.html">跳回首页</a>
   </body>
   </html>
   ```

7. Web 中的相对路径和绝对路径

   - 在 javaWeb 中，路径分为相对路径和绝对路径两种： 
     - 相对路径是： 
       - .   表示当前目录 
       - ..   表示上一级目录 
       - 资源名   表示当前目录/资源名 
     - 绝对路径： http://ip:port/工程路径/资源路径 
   - 在实际开发中，路径都使用绝对路径，而不简单的使用相对路径。 
     1. 绝对路径 
     2. base+相对

8. web 中/斜杠的不同意义

   在 web 中 / 斜杠 是一种绝对路径。 

   - / 斜杠 如果被浏览器解析，得到的地址是：http://ip:port/ 

     <a href="/"\>斜杠</a\>

   - / 斜杠 如果被服务器解析，得到的地址是：http://ip:port/工程路径 

     1. \<url-pattern\>/servlet1\</url-pattern\>
     2. servletContext.getRealPath(“/”); 
     3. request.getRequestDispatcher(“/”); 

   - 特殊情况： response.sendRediect(“/”); 把斜杠发送给浏览器解析。得到 http://ip:port/

### 6.HttpServletReponse 类

1. HttpServletResponse 类的作用

   HttpServletResponse 类和 HttpServletRequest 类一样。每次请求进来，Tomcat 服务器都会创建一个 Response 对象传 递给 Servlet 程序去使用。HttpServletRequest 表示请求过来的信息，HttpServletResponse 表示所有响应的信息， 我们如果需要设置返回给客户端的信息，都可以通过 HttpServletResponse 对象来进行设置

2. 两个输出流的说明

   - 字节流：getOutputStream(); ——常用于下载（传递二进制数据） 

   - 字符流：getWriter(); ——常用于回传字符串（常用） 

   两个流同时只能使用一个。 使用了字节流，就不能再使用字符流，反之亦然，否则就会报错

   ![](JavaWeb学习笔记尚硅谷/Servlet/输出流错误说明.png)

3. 如何往客户端回传数据

   ```java
   public class ResponseIOServlet extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           // 要求：往客户端回传字符串数据
           PrintWriter writer = resp.getWriter();
           writer.write("国哥很帅");
       }
   }
   ```

4. 响应的乱码解决

   解决响应中文乱码方案一(不推荐使用)：

   ```java
   // 设置服务器字符集为 UTF-8
   resp.setCharacterEncoding("UTF-8");
   // 通过响应头，设置浏览器也使用 UTF-8字符集
   resp.setHeader("Content-Type", "text/html;charset=UTF-8");
   ```

   解决响应中文乱码方案二(推荐)：

   ```java
   // 它会同时设置服务器和客户端都使用UTF-8字符集，还设置了响应头
   // 此方法一定要在获取流对象之前调用才有效
   resp.setContentType("text/html;charset=UTF-8");
   ```

5. 请求重定向

   请求重定向，是指客户端给服务器发请求，然后服务器告诉客户端说。我给你一些地址。你去新地址访问。叫请求 重定向（因为之前的地址可能已经被废弃）。

   ![](JavaWeb学习笔记尚硅谷/Servlet/请求重定向.png)

   请求重定向的第一种方案：

   ```java
   // 设置响应状态码302，表示重定向，（已搬迁）
   resp.setStatus(302);
   // 设置响应头，说明新的地址在哪里
   resp.setHeader("Location", "http://localhost:8080/07_servlet/response2");
   ```
   
   请求重定向的第二种方案：
   
   ```java
   resp.sendRedirect("http://localhost:8080/07_servlet/response2");
   ```
   

## 七、JSP

### 1. 什么是 jsp，它有什么用？

jsp 的全称是 java server pages，Java 的服务器页面。 jsp 的主要作用是代替 Servlet 程序回传 html 页面的数据。 因为 Servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。

Servlet 回传 html 页面数据的代码：

```java
public class PrintHtml extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 通过响应的回传流回传 html 页面数据
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = resp.getWriter();
        writer.write("<!DOCTYPE html>\r\n");
        writer.write("<html lang=\"en\">\r\n");
        writer.write("<head>\r\n");
        writer.write("    <meta charset=\"UTF-8\">\r\n");
        writer.write("    <title>Title</title>\r\n");
        writer.write("</head>\r\n");
        writer.write("<body>\r\n");
        writer.write("    这是 html页面数据\r\n");
        writer.write("</body>\r\n");
        writer.write("</html>\r\n");
        writer.write("\r\n");
    }
}
```

jsp 回传一个简单的 html 页面的代码：

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
这是 jsp 页面数据
</body>
</html>
```

jsp 的小结：

1. 如何创建 jsp 的页面？

   输入文件名敲回车即可！！

2. jsp 如何访问：

   jsp 页面和 html 页面一样，都是存放在 web 目录下。访问也跟访问 html 页面一样。

   比如：在 web 目录下有如下的文件

   a.html 页面：访问地址是 ======>>>>>> http://ip:port/工程路径/a.html

   b.jsp页面：访问地址是 ======>>>>>> http://ip:port/工程路径/b.jsp

### 2. jsp 的本质是什么

jsp 页面本质上是一个 Servlet 程序。 当我们第一次访问 jsp 页面的时候。Tomcat 服务器会帮我们把 jsp 页面翻译成为一个 java 源文件。并且对它进行编译成 为.class 字节码程序。我们打开 java 源文件不难发现其里面的内容是：

![](JavaWeb学习笔记尚硅谷/Jsp/jsp的本质1.png)

我们跟踪原代码发现，HttpJspBase 类。它直接地继承了 HttpServlet 类。也就是说。jsp 翻译出来的 java 类，它间接了继 承了 HttpServlet 类。也就是说，翻译出来的是一个 Servlet 程序

![](JavaWeb学习笔记尚硅谷/Jsp/jsp的本质2.png)

总结：通过翻译的 java 源代码我们就可以得到结果：jsp 就是 Servlet 程序。 大家也可以去观察翻译出来的 Servlet 程序的源代码，不难发现。其底层实现，也是通过输出流。把 html 页面数据回传 给客户端。

```java
public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    final java.lang.String _jspx_method = request.getMethod();
    if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP 只允许 GET、POST 或 HEAD。Jasper 还允许 OPTIONS");
      return;
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			"/error500.jsp", true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("    <title>Title</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("b.jsp 页面\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
```

### 3. jsp 的三种语法

#### 1. jsp 头部的 page 指令

jsp 的 page 指令可以修改 jsp 页面中一些重要的属性，或者行为。 `<%@ page contentType="text/html;charset=UTF-8" language="java" %>` 

1. language 属性：表示 jsp 翻译后是什么语言文件。暂时只支持 java。 
2. contentType 属性：表示 jsp 返回的数据类型是什么。也是源码中 response.setContentType()参数值 
3. pageEncoding 属性：表示当前 jsp 页面文件本身的字符集。 
4. import 属性：跟 java 源代码中一样。用于导包，导类。 

========================两个属性是给 out 输出流使用=============================

5. autoFlush 属性：设置当 out 输出流缓冲区满了之后，是否自动刷新缓冲区。默认值是 true。 

6. buffer 属性：设置 out 缓冲区的大小。默认是 8kb 

   缓冲区溢出错误：

   ![](JavaWeb学习笔记尚硅谷/Jsp/缓冲区溢出错误.png)

========================两个属性是给 out 输出流使用============================= 

7. errorPage 属性：设置当 jsp 页面运行时出错，自动跳转去的错误页面路径。

   ```jsp
   <!--
   errorPage 表示错误后自动跳转去的路径 <br/>
   这个路径一般都是以斜杠打头，它表示请求地址为 http://ip:port/工程路径/映射到代码的 Web 目录 -->
   ```

8. isErrorPage 属性：设置当前 jsp 页面是否是错误信息页面。默认是 false。如果是 true 可以 获取异常信息。 

9. session 属性：设置访问当前 jsp 页面，是否会创建 HttpSession 对象。默认是 true。 

10. extends 属性：设置 jsp 翻译出来的 java 类默认继承谁。

#### 2. jsp 中的常用脚本

1. 声明脚本（极少使用）

   - 声明脚本的格式是：`<!% 声明java代码 %>`

   - 作用：可以给 jsp 翻译出来的 java 类定义属性和方法甚至是静态代码块。内部类等。

   代码示例：

   ```jsp
   <%--1. 声明类属性--%>
   <%! private Integer id;
       private String name;
       private static Map<String, Object> map;
   %>
   <%-- 2. 声明static静态代码块 --%>
   <%!
       static {
           map = new HashMap<String, Object>();
           map.put("key1", "value1");
           map.put("key2", "value2");
           map.put("key3", "value3");
       }
   %>
   <%-- 3. 声明类方法 --%>
   <%!
       public int abc() {
           return 12;
       }
   %>
   <%-- 4. 声明内部类 --%>
   <%!
       public static class A {
           private Integer id = 12;
           private String abc = "abc";
       }
   %>
   ```

   声明脚本代码翻译对照：

   ![](JavaWeb学习笔记尚硅谷/Jsp/声明脚本代码翻译对照.png)

2. 表达式脚本（常用）

   - 表达式脚本的格式是：`<%=表达式%> `
   - 表达式脚本的作用是：在 jsp 页面上输出数据。 
   - 表达式脚本的特点： 
     1. 所有的表达式脚本都会被翻译到 _jspService() 方法中 
     2. 表达式脚本都会被翻译成为 out.print()输出到页面上 
     3. 由于表达式脚本翻译的内容都在 _jspService() 方法中,所以 _jspService()方法中的对象都可以直接使用。 
     4. 表达式脚本中的表达式不能以分号结束。

   示例代码：

   ```jsp
   <%--
       1. 输出整型
       2. 输出浮点型
       3. 输出字符串
       4. 输出对象
   --%>
   <%=12 %><br/>
   <%=12.12 %><br/>
   <%="我是字符串" %><br/>
   <%=map %><br/>
   <%=request.getParameter("username") %><br/>
   ```

   翻译对照：

   ![](JavaWeb学习笔记尚硅谷/Jsp/表达式脚本翻译对照.png)

3. 代码脚本

   - 代码脚本的格式是： `<% java 语句 %> `
   - 代码脚本的作用是：可以在 jsp 页面中，编写我们自己需要的功能（写的是 java 语句）。 
   - 代码脚本的特点是： 
     1. 代码脚本翻译之后都在 _jspService 方法中
     2. _代码脚本由于翻译到 _jspService()方法中，所以在 _jspService()方法中的现有对象都可以直接使用。 
     3. 还可以由多个代码脚本块组合完成一个完整的 java 语句。 
     4. 代码脚本还可以和表达式脚本一起组合使用，在 jsp 页面上输出数据

   示例代码：

   ```jsp
   <%-- 1. 代码脚本----if语句 --%>
   <%
       int i = 12;
       if (i == 12) {
   %>
       <h1>国哥好帅！</h1>
   <%
   } else {
   %>
       <h1>国哥又骗人了！</h1>
   <%
       }
   %>
   <%-- 2. 代码脚本----for 循环语句 --%>
   <table border="1" cellspacing="0">
       <%
           for (int j = 0; j < 10; j++) {
       %>
       <tr>
           <td>第<%=j %>行</td>
       </tr>
       <%
           }
       %>
   </table>
   <%-- 3. 翻译后java文件中_jspService方法内的代码都可以实现 --%>
   <%
       String username = request.getParameter("username");
       System.out.println("用户名的请求参数值是：" + username);
   %>
   ```

   翻译对照：

   ![](JavaWeb学习笔记尚硅谷/Jsp/代码脚本翻译对比.png)

#### 3. jsp 中的三种注释

1. html 注释

   `<!-- 这是html注释 -->`

   html 注释会被翻译到 java 源代码中。在 _jspService 方法里，以 out.writer 输出到客户端

2. java 注释

   ```jsp
   <%
       // 单行java 注释
       /* 多行java 注释 */
   %>
   ```

   java 注释会被翻译到 java 源代码中。

3. jsp 注释

   `<%-- 这是jsp注释 --%>`

   jsp 注释可以注掉，jsp 页面中所有代码

### 4. jsp 九大内置对象

jsp 中的内置对象，是指 Tomcat 在翻译 jsp 页面成为 Servlet 源代码后，内部提供的九大对象，叫内置对象。

![](JavaWeb学习笔记尚硅谷/Jsp/jsp九大内置对象.png)

### 5. jsp 四大域对象

四个域对象分别是： 

- pageContext (PageContextImpl 类)：当前 jsp 页面范围内有效 
- request (HttpServletRequest 类)： 一次请求内有效 
- session (HttpSession 类)：一个会话范围内有效（打开浏览器访问服务器，直到关闭浏览器） 
- application (ServletContext 类)：整个 web 工程范围内都有效（只要 web 工程不停止，数据都在） 

域对象是可以像 Map 一样存取数据的对象。四个域对象功能一样。不同的是它们对数据的存取范围。 虽然四个域对象都可以存取数据。在使用上它们是有优先顺序的。 四个域在使用的时候，优先顺序分别是，他们从小到大的范围的顺序。 

pageContext ====>>> request ====>>> session ====>>> application

scope.jsp 页面：

```jsp
<body>
<h1>scope.jsp页面</h1>
<%
    // 在四个域中都分别保存了数据
    pageContext.setAttribute("key", "pageContext");
    request.setAttribute("key", "request");
    session.setAttribute("key", "session");
    application.setAttribute("key", "application");
%>
pageContext域是否有值：<%=pageContext.getAttribute("key")%><br/>
request域是否有值：<%=request.getAttribute("key")%><br/>
session域是否有值：<%=session.getAttribute("key")%><br/>
application域是否有值：<%=application.getAttribute("key")%><br/>
<%
    request.getRequestDispatcher("/scope2.jsp").forward(request, response);
%>
</body>
```

scope2.jsp 页面：

```jsp
<body>
<h1>scope2.jsp页面</h1>
pageContext域是否有值：<%=pageContext.getAttribute("key")%><br/>
request域是否有值：<%=request.getAttribute("key")%><br/>
session域是否有值：<%=session.getAttribute("key")%><br/>
application域是否有值：<%=application.getAttribute("key")%><br/>
</body>
```

### 6. jsp 中的 out 输出和 response.getWriter 输出的区别

response 中表示响应，我们经常用于设置返回给客户端的内容（输出），out 也是给用户做输出使用的。

![](JavaWeb学习笔记尚硅谷/Jsp/jsp中out和response.getWriter输出区别.png)

由于 jsp 翻译之后，底层源代码都是使用 out 来进行输出，所以一般情况下。我们在 jsp 页面中统一使用 out 来进行输出，避 免打乱页面输出内容的顺序。 

- out.write() 输出字符串没有问题 
- out.print() 输出任意数据都没有问题（都转换成为字符串后调用的 write 输出） 

深入源码，浅出结论：在 jsp 页面中，可以统一使用 out.print()来进行输出

### 7. jsp的常用标签

#### 1. jsp 静态包含

示例说明：

```jsp
<%--
    <%@include file="" %>   就是静态包含
        file 属性指定你要包含的 jsp 页面的路径
        地址中第一个斜杠 / 表示为http://ip:port/工程路径/  映射到代码的 web 目录

    静态包含的特点：
        1. 静态包含不会翻译被包含的jsp页面
        2. 静态包含其实是把被包含的jsp页面的代码拷贝到包含的位置执行输出
--%>
<%@include file="/include/footer.jsp" %>
```

#### 2. jsp 动态包含

示例说明：

```jsp
<%--
    <jsp:include page=""></jsp:include>     这是动态包含
        page 属性是指定你要包含的jsp页面的路径
        动态包含也可以像静态包含一样。把被包含的内容执行输出到包含位置

    动态包含的特点：
        1. 动态包含会把包含的jsp页面也翻译成为java代码
        2. 动态包含底层代码使用如下代码去调用被包含的jsp页面执行输出
            JspRuntimeLibrary.include(request, response, "/include/footer.jsp", out, false);
        3. 动态包含，还可以传递参数
--%>
<jsp:include page="/include/footer.jsp">
    <jsp:param name="username" value="bbj"/>
    <jsp:param name="password" value="root"/>
</jsp:include>
```

动态包含的底层原理：

![](JavaWeb学习笔记尚硅谷/Jsp/jsp动态包含的底层原理.png)

#### 3. jsp 标签-转发

示例说明：

```jsp
<%--
    <jsp:forward page=""></jsp:forward> 是请求转发标签，它的功能就是请求转发
        page 属性设置请求转发的路径
--%>
<jsp:forward page="/scope2.jsp"></jsp:forward>
```

### 8. jsp的练习题

1. 练习一：在 jsp 页面中输出九九乘法口诀表

   ```jsp
   <%--
     Created by IntelliJ IDEA.
     User: 25795
     Date: 2023/1/20
     Time: 19:11
     To change this template use File | Settings | File Templates.
   --%>
   <%@ page contentType="text/html;charset=UTF-8" language="java" %>
   <html>
   <head>
       <title>Title</title>
       <style type="text/css">
           table {
               width: 650px;
           }
       </style>
   </head>
   <body>
   <%-- 在jsp页面中输出九九乘法口诀表 --%>
   <h1 align="center">九九乘法口诀表</h1>
   <table align="center">
       <% for (int i = 1; i <= 9; i++) { %>
       <tr>
           <% for (int j = 1; j <= i; j++) { %>
           <td>
               <%=j + "x" + i + "=" + (i * j) %>
           </td>
           <% } %>
       </tr>
       <% } %>
   </table>
   </body>
   </html>
   ```

2. 练习二：输出一个表格，里面有10个学生信息

   ![](JavaWeb学习笔记尚硅谷/Jsp/jsp练习题二结构图.png)

   Student 类：

   ```java
   /**
    * @author 汪重阳
    * @version 1.0
    */
   public class Student {
       private Integer id;
       private String name;
       private Integer age;
       private String phone;
   }
   ```

   SearchStudentServlet 程序：

   ```java
   public class SearchStudentServlet extends HttpServlet {
       @Override
       protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           // 获取请求的参数
           // 发 sql 语句查询学生的信息
           // 使用for 循环生成查询到的数据做模拟
           List<Student> studentList = new ArrayList<Student>();
           for (int i = 0; i < 10; i++) {
               int t = i + 1;
               studentList.add(new Student(t, "name" + t, 18 + t, "phone" + t));
           }
           // 保存查询到的结果(学生信息)到 request 域中
           req.setAttribute("stuList", studentList);
           // 请求转发到 showStudent.jsp 页面
           req.getRequestDispatcher("/test/showStudent.jsp").forward(req, resp);
       }
   }
   ```

   jsp 页面代码：

   ```jsp
   <%@ page import="com.atguigu.pojo.Student" %>
   <%@ page import="java.util.List" %>
   <%@ page import="java.util.ArrayList" %><%--
     Created by IntelliJ IDEA.
     User: 25795
     Date: 2023/1/20
     Time: 19:41
     To change this template use File | Settings | File Templates.
   --%>
   <%@ page contentType="text/html;charset=UTF-8" language="java" %>
   <html>
   <head>
       <title>Title</title>
       <style type="text/css">
           table {
               border: 1px blue solid;
               width: 600px;
               border-collapse: collapse;
               text-align: center;
           }
   
           tr, td {
               border: 1px blue solid;
           }
       </style>
   </head>
   <body>
   <%-- jsp输出一个表格，里面有10个学生信息 --%>
   <%
       List<Student> studentList = (List<Student>) request.getAttribute("stuList");
   %>
   <table>
       <tr>
           <td>编号</td>
           <td>姓名</td>
           <td>年龄</td>
           <td>电话</td>
           <td>操作</td>
       </tr>
       <% for (Student student : studentList) { %>
       <tr>
           <td>
               <%=student.getId()%>
           </td>
           <td>
               <%=student.getName()%>
           </td>
           <td>
               <%=student.getAge()%>
           </td>
           <td>
               <%=student.getPhone()%>
           </td>
           <td>
               删除、修改
           </td>
       </tr>
       <% } %>
   </table>
   </body>
   </html>
   ```

### 9. 什么是 Listener 监听器

1. Listener 监听器它是 JavaWeb 的三大组件之一。JavaWeb 的三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监 听器。 
2. Listener 它是 JavaEE 的规范，就是接口 
3. 监听器的作用是，监听某种事物的变化。然后通过回调函数，反馈给客户（程序）去做一些相应的处理。

#### 1. ServletContextListener 监听器

ServletContextListener 它可以监听 ServletContext 对象的创建和销毁。

 ServletContext 对象在 web 工程启动的时候创建，在 web 工程停止的时候销毁。 

监听到创建和销毁之后都会分别调用 ServletContextListener 监听器的方法反馈。

两个方法分别是：

```java
public interface ServletContextListener extends EventListener {
	/**
	* 在 ServletContext 对象创建之后马上调用，做初始化
	*/
	public void contextInitialized(ServletContextEvent sce);
	/**
	* 在 ServletContext 对象销毁之后调用
	*/
	public void contextDestroyed(ServletContextEvent sce);
}
```

如何使用 ServletContextListener 监听器监听 ServletContext 对象。 使用步骤如下：

1. 编写一个类去实现 ServletContextListener 
2. 实现其两个回调方法 
3. 到 web.xml 中去配置监听

监听器实现类：

```java
public class MyServletContextListenerImpl implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        System.out.println("ServletContext 对象被创建了");
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        System.out.println("ServletContext 对象被销毁了");
    }
}
```

web.xml 中的配置：

```xml
<!-- 配置监听器 -->
<listener>
	<listener-class>com.atguigu.listener.MyServletContextListenerImpl</listener-class>
</listener>
```



