---
title: JavaWeb学习笔记尚硅谷下篇
description: JavaWeb学习笔记尚硅谷下篇
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



## 八、EL 表达式 & JSTL 标签库

### 1. EL 表达式

#### 1. 什么是 EL 表达式，EL 表达式的作用

EL 表达式的全称是：Expression Language。是表达式语言。 

EL 表达式的什么作用：EL 表达式主要是代替 jsp 页面中的表达式脚本在 jsp 页面中进行数据的输出。 因为 EL 表达式在输出数据的时候，要比 jsp 的表达式脚本要简洁很多。

```jsp
<body>
<%
    request.setAttribute("key", "值");
%>
表达式脚本输出key的值是：<%=request.getAttribute("key1")==null?"":request.getAttribute("key1")%> <br/>
EL表达式输出key的值是：${key1}
</body>
```

EL 表达式的格式是：${表达式} 

EL 表达式在输出 null 值的时候，输出的是空串。jsp 表达式脚本输出 null 值的时候，输出的是 null 字符串

#### 2. EL 表达式搜索域数据的顺序

EL 表达式主要是在 jsp 页面中输出数据。 主要是输出域对象中的数据。

当四个域中都有相同的 key 的数据的时候，EL 表达式会按照四个域的从小到大的顺序去进行搜索，找到就输出

```jsp
<body>
<%
    // 往四个域中都保存了相同的 key 的数据
    pageContext.setAttribute("key", "pageContext");
    request.setAttribute("key", "request");
    session.setAttribute("key", "session");
    application.setAttribute("key", "application");
%>
${key}
</body>
```

#### 3. EL 表达式输出 Bean 的普通属性，数组属性。List 集合属性，map 集合属性

需求——输出 Person 类中普通属性，数组属性。list 集合属性和 map 集合属性。

Person 类：

```java
public class Person {
    private String name;
    private String[] phones;
    private List<String> cities;
    private Map<String, Object> map;

    public int getAge() {
        return 18;
    }
}
```

输出的代码：

```jsp
<body>
<%
    Person person = new Person();
    person.setName("国哥好帅!");
    person.setPhones(new String[]{"15129080542", "17691356341", "151888855564"});

    List<String> cities = new ArrayList<String>();
    cities.add("北京");
    cities.add("上海");
    cities.add("深圳");
    person.setCities(cities);

    Map<String, Object> map = new HashMap<>();
    map.put("key1", "value1");
    map.put("key2", "value2");
    map.put("key3", "value3");
    person.setMap(map);

    pageContext.setAttribute("person", person);
%>
输出Person：${person}<br/>
输出Person的name属性：${person.name}<br/>
输出Person的phones数组属性值：${person.phones[0]}<br/>
输出Person的cities集合中的元素值：${person.cities}<br/>
输出Person的List集合中个别元素值：${person.cities[1]}<br/>
输出Person的Map集合：${person.map}<br/>
输出Person的Map集合中某个key的值：${person.map.key1}<br/>
输出Person的age属性：${person.age}<br/>
</body>
```

#### 4. EL 表达式——运算

语法：${ 运算表达式 } ， EL 表达式支持如下运算符：

1. 关系运算

   | 关系运算符 |   说明   |         范例         | 结果  |
   | :--------: | :------: | :------------------: | :---: |
   |  == 或 eq  |   等于   |  ${5==5}或${5 eq 5}  | true  |
   |  != 或 ne  |  不等于  |  ${5!=5}或${5 ne 5}  | false |
   |  < 或 lt   |   小于   |  ${3<5}或${3 lt 5}   | true  |
   |  > 或 gt   |   大于   | ${2>10}或${2 gt 10}  | false |
   |  <= 或 le  | 小于等于 | ${5<=12}或${5 le 12} | true  |
   |  >= 或 ge  | 大于等于 |  ${3>=5}或${3 ge 5}  | false |

2. 逻辑运算

   | 逻辑运算符 |   说明   |                    范例                    | 结果  |
   | :--------: | :------: | :----------------------------------------: | :---: |
   | && 或 and  |  与运算  | ${12==12 && 12<11} 或 ${12==12 and 12<11}  | false |
   | \|\| 或 or |  或运算  | ${12==12 \|\| 12<11} 或 ${12==12 or 12<11} | true  |
   |  ! 或 not  | 取反运算 |          ${!true} 或 ${not true}           | false |

3. 算数运算

   | 算数运算符 | 说明 |             范例             | 结果 |
   | :--------: | :--: | :--------------------------: | :--: |
   |     +      | 加法 |           ${12+18}           |  30  |
   |     -      | 减法 |           ${18-8}            |  10  |
   |     *      | 乘法 |           ${12*12}           | 144  |
   |  / 或 div  | 除法 |  ${144/12} 或 ${144 div 12}  |  12  |
   |  % 或 mod  | 取模 | ${144 % 10} 或 ${144 mod 10} |  4   |

   1. empty 运算

      empty 运算可以判断一个数据是否为空，如果为空，则输出 true,不为空输出 false。 

      以下几种情况为空： 

      1. 值为 null 值的时候，为空 
      2. 值为空串的时候，为空 
      3. 值是 Object 类型数组，长度为零的时候 
      4. list 集合，元素个数为零 
      5. map 集合，元素个数为零

      ```jsp
      <body>
      <%
          // 1、值为null值的时候，为空
          request.setAttribute("emptyNull", null);
          // 2、值为空串的时候，为空
          request.setAttribute("emptyStr", "");
          // 3、值是Object类型数组，长度为零的时候
          request.setAttribute("emptyArr", new Object[]{});
          // 4、list集合，元素个数为零
          List<String> list = new ArrayList<>();
          request.setAttribute("emptyList", list);
          // 5、map集合，元素个数为零
          Map<String, Object> map = new HashMap<>();
          request.setAttribute("emptyMap", map);
      %>
      ${empty emptyNull}<br/>
      ${empty emptyStr}<br/>
      ${empty emptyArr}<br/>
      ${empty emptyList}<br/>
      ${empty emptyMap}<br/>
      </body>
      ```

   2. 三元运算

      表达式 1？表达式 2：表达式 3 

      如果表达式 1 的值为真，返回表达式 2 的值，如果表达式 1 的值为假，返回表达式3 的值

      示例：`${12 == 12 ? "国哥帅呆了" : "国哥又骗人了"}`

   3. "."点运算和[]中括号运算符

      - .点运算，可以输出 Bean 对象中某个属性的值。 
      - []中括号运算，可以输出有序集合中某个元素的值。 并且[]中括号运算，还可以输出 map 集合中 key 里含有特殊字符的 key 的值

      ```jsp
      <body>
      <%
          Map<String, Object> map = new HashMap<>();
          map.put("a.a.a", "aaaValue");
          map.put("b+b+b", "bbbValue");
          map.put("c-c-c", "cccValue");
      
          request.setAttribute("map", map);
      %>
      ${map['a.a.a']}<br/>
      ${map["b+b+b"]}<br/>
      ${map.c-c-c}<br/>
      </body>
      ```

#### 5. EL 表达式的11个隐含对象

EL 表达式中11 个隐含对象，是 EL 表达式中自己定义的，可以直接使用

|       变量       |         类型          |                          作用                           |
| :--------------: | :-------------------: | :-----------------------------------------------------: |
|   pageContext    |    PageContextImpl    |             它可以获取 jsp 中的九大内置对象             |
|    pageScope     |  Map<String,Object\>  |            它可以获取 pageContext 域中的数据            |
|   requestScope   |  Map<String,Object\>  |              它可以获取 Request 域中的数据              |
|   sessionScope   |  Map<String,Object\>  |              它可以获取 Session 域中的数据              |
| applicationScope |  Map<String,Object\>  |          它可以获取 ServletContext 域中的数据           |
|      param       |  Map<String,String\>  |                 它可以获取请求参数的值                  |
|   paramValues    | Map<String,String[]\> |     它也可以获取请求参数的值，获取多个值的时候使用      |
|      header      |  Map<String,String\>  |                 它可以获取请求头的信息                  |
|   headerValues   | Map<String,String[]\> |     它可以获取请求头的信息，它可以获取多个值的情况      |
|      cookie      |  Map<String,Cookie\>  |            它可以获取当前请求的 Cookie 信息             |
|    initParam     |  Map<String,String\>  | 它可以获取在 web.xml 中配置的<context-param\>上下文参数 |

1. EL 获取四个特定域中的属性

   - pageScope ====== pageContext 域 
   - requestScope ====== Request 域 
   - sessionScope ====== Session 域 
   - applicationScope ====== ServletContext 域

   ```jsp
   <body>
   <%
       pageContext.setAttribute("key1", "pageContext1");
       pageContext.setAttribute("key2", "pageContext2");
       request.setAttribute("key2", "request");
       session.setAttribute("key2", "session");
       application.setAttribute("key2", "application");
   %>
   ${application.key2}
   </body>
   ```

2. pageContext 对象的使用

   1. 协议： 
   2. 服务器 ip： 
   3. 服务器端口： 
   4. 获取工程路径： 
   5. 获取请求方法： 
   6. 获取客户端 ip 地址： 
   7. 获取会话的 id 编号：

   ```jsp
   <body>
   <%--
       request.getScheme() 它可以获取请求的协议
       request.getServerName() 获取请求的服务器ip或域名
       request.getServerPort() 获取请求的服务器端口号
       request.getContextPath() 获取当前工作路径
       request.getMethod() 获取请求的方式（GET或POST）
       request.getRemoteHost() 获取客户端的ip地址
       session.getId() 获取会话的唯一标识
   --%>
   <%
       pageContext.setAttribute("req", request);
   %>
   <%=session.getId()%>
   1. 协议：${req.scheme}<br/>
   2. 服务器ip：${pageContext.request.serverName}<br/>
   3. 服务器端口：${pageContext.request.serverPort}<br/>
   4. 获取工程路径：${pageContext.request.contextPath}<br/>
   5. 获取请求方法：${pageContext.request.method}<br/>
   6. 获取客户端ip地址：${pageContext.request.remoteHost}<br/>
   7. 获取会话的id编号：${pageContext.session.id}<br/>
   </body>
   ```

3. EL 表达式其他隐含对象的使用

   - param：Map<String,String\>——它可以获取请求参数的值
   - paramValues：Map<String,String[]\>——它也可以获取请求参数的值，获取多个值的时候使用

   示例代码：

   ```jsp
   输出请求参数username的值：${param.username}<br/>
   输出请求参数password的值：${param.password}<br/>
   输出请求参数username的值：${paramValues.username[0]}<br/>
   输出请求参数hobby的值：${paramValues.hobby[0]}<br/>
   输出请求参数hobby的值：${paramValues.hobby[1]}<br/>
   ```

   请求地址：`http://localhost:8080/09_EL_JSTL/other_el_obj.jsp?username=wzg168&password=666666&hobby=java&hobby=cpp`

   - header：Map<String,String\>——它可以获取请求头的信息
   - headerValues：Map<String,String[]\>——它可以获取请求头的信息，它可以获取多个值的情况

   示例代码：

   ```jsp
   输出请求头【User-Agent】的值：${header['User-Agent']}<br/>
   输出请求头【Connection】的值：${header.Connection}<br/>
   输出请求头【User-Agent】的值：${headerValues['User-Agent'][0]}<br/>
   ```

   - cookie：Map<String,Cookie\>——它可以获取当前请求的 Cookie 信息

   示例代码：

   ```jsp
   获取Cookie的名称：${cookie.JSESSIONID.name}<br/>
   获取Cookie的值：${cookie.JSESSIONID.value}<br/>
   ```

   - initParam：Map<String,String\>——它可以获取在 web.xml 中配置的<context-param\>上下文参数

   web.xml 中的配置：

   ```xml
   <context-param>
       <param-name>username</param-name>
       <param-value>root</param-value>
   </context-param>
   <context-param>
       <param-name>url</param-name>
       <param-value>jdbc:mysql:///test</param-value>
   </context-param>
   ```

   示例代码：

   ```jsp
   输出&lt;Context-param&gt;username的值：${initParam.username}<br/>
   输出&lt;Context-param&gt;url的值：${initParam.url}<br/>
   ```

### 2. JSTL 标签库

JSTL 标签库 全称是指 JSP Standard Tag Library JSP 标准标签库。是一个不断完善的开放源代码的 JSP 标 签库。

 EL 表达式主要是为了替换 jsp 中的表达式脚本，而标签库则是为了替换代码脚本。这样使得整个 jsp 页面 变得更佳简洁。

JSTL 由五个不同功能的标签库组成

|     功能范围     |                  URI                   | 前缀 |
| :--------------: | :------------------------------------: | :--: |
| 核心标签库-重点  |   http://java.sun.com/jsp/jstl/core    |  c   |
|      格式化      |    http://java.sun.com/jsp/jstl/fmt    | fmt  |
|       函数       | http://java.sun.com/jsp/jstl/functions |  fn  |
| 数据库（不使用） |    http://java.sun.com/jsp/jstl/sql    | sql  |
|  XML（不使用）   |    http://java.sun.com/jsp/jstl/xml    |  x   |

在 jsp 标签库中使用 taglib 指令引入标签库

```jsp
CORE 标签库
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
XML 标签
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
FMT 标签库
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
SQL 标签库
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
FUNCTIONS 标签库
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
```

#### 1. JSTL 标签库的使用步骤

1. 先导入 jstl 标签库的 jar 包

   taglibs-standard-impl-1.2.1.jar 

   taglibs-standard-spec-1.2.1.jar

2. 第二步，使用 taglib 指令引入标签库

   `<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>`

#### 2. core 核心库使用

1. <c:set />（使用很少）

   作用：set 标签可以往域中保存数据

   ```jsp
   <%--
       <c:set />
           作用：set 标签可以往域中保存数据
           域对象.setAttribute(key, value)
           scope 属性保存到哪个域
               page 表示 PageContext 域(默认值)
               request 表示 Request 域
               session 表示 Session 域
               application 表示 ServletContext 域
           var 属性设置 key 是多少
           value 属性设置值
   --%>
   保存之前：${requestScope.abc}<br/>
   <c:set scope="request" var="abc" value="abcValue"/>
   保存之后：${requestScope.abc}<br/>
   ```

2. <c:if />

   if 标签用来做 if 判断

   ```jsp
   <%--
       <c:if />
           if 标签用来做 if 判断
           test 属性表示判断的条件(使用EL 表达式输出)
   --%>
   <c:if test="${12==12}">
       <h2>12等于12</h2>
   </c:if>
   <c:if test="${12!=12}">
       <h2>12不等于12</h2>
   </c:if>
   ```

3. \<c:choose\> \<c:when> \<c:otherwise> 标签

   作用：多路判断。跟 switch...case...default 非常接近

   ```jsp
   <%--
       <c:choose /> <c:when /> <c:otherwise /> 标签
           作用：多路判断。跟 switch...case...default 非常接近
       choose 标签开始选择判断
       when 标签表示每一种判断情况
           test 属性表示当前这种判断情况的值
       otherwise 标签表示剩下的情况
       <c:choose /> <c:when /> <c:otherwise /> 标签使用时需要注意的点：
           1、标签里不能使用 html 注释，要使用 jsp 注释
           2、when 标签的父标签一定要是 choose 标签
   --%>
   <%
       request.setAttribute("height", 18);
   %>
   <c:choose>
       <c:when test="${requestScope.height>190}">
           <h2>小巨人</h2>
       </c:when>
       <c:when test="${requestScope.height>180}">
           <h2>很高</h2>
       </c:when>
       <c:when test="${requestScope.height>170}">
           <h2>还可以</h2>
       </c:when>
       <c:otherwise>
           <c:choose>
               <c:when test="${requestScope.height>160}">
                   <h3>大于160</h3>
               </c:when>
               <c:when test="${requestScope.height>150}">
                   <h3>大于150</h3>
               </c:when>
               <c:when test="${requestScope.height>140}">
                   <h3>大于140</h3>
               </c:when>
               <c:otherwise>
                   其他小于140
               </c:otherwise>
           </c:choose>
       </c:otherwise>
   </c:choose>
   ```

4. \<c:forEach />

   作用：遍历输出使用

   1. 遍历1到10，输出

      示例代码：

      ```jsp
      <%--
          1. 遍历1到10，输出
              begin 属性设置开始的索引
              end 属性设置结束的索引
              var 属性表示循环的变量(也是当前正在遍历到的数据)
              for(int i=0; i<10; i++)
      --%>
      <table border="1">
          <c:forEach begin="1" end="10" var="i">
              <tr>
                  <td>第${i}行</td>
              </tr>
          </c:forEach>
      </table>
      ```

   2. 遍历 Object 数组

      示例代码：

      ```jsp
      <%--
          2. 遍历Object数组
          for(Object : arr)
          items 表示遍历的数据源(遍历的集合)
          var 表示当前遍历到的数据
      --%>
      <%
          request.setAttribute("arr", new String[]{"18610541354", "18688886666", "18699998888"});
      %>
      <c:forEach items="${requestScope.arr}" var="item">
          ${item}<br/>
      </c:forEach>
      ```

   3. 遍历 Map 集合

      示例代码：

      ```jsp
      <%
          Map<String, Object> map = new HashMap<>();
          map.put("key1", "value1");
          map.put("key2", "value2");
          map.put("key3", "value3");
          request.setAttribute("map", map);
      %>
      <c:forEach items="${requestScope.map}" var="entry">
          <h1>${entry.key}=${entry.value}</h1>
      </c:forEach>
      ```

   4. 遍历 List 集合-- list 中存放 Student类，有属性：编号，用户名，密码，年龄，电话信息

      Student 类：

      ```java
      public class Student {
          private Integer id;
          private String username;
          private String password;
          private Integer age;
          private String phone;
      }
      ```

      示例代码：

      ```jsp
      <%--
          4. 遍历 List 集合，Student类
      --%>
      <%
          List<Student> studentList = new ArrayList<>();
          for (int i = 1; i <= 10; i++) {
              studentList.add(new Student(1, "username" + i, "pass" + i, 18 + i, "phone" + i));
          }
          request.setAttribute("stus", studentList);
      %>
      <table>
          <tr>
              <th>编号</th>
              <th>用户名</th>
              <th>密码</th>
              <th>年龄</th>
              <th>电话</th>
              <th>操作</th>
          </tr>
          <%--
              items 表示遍历的集合
              var 表示遍历到的数据
              begin 表示遍历开始的索引值
              end 表示遍历结束的索引值
              step 属性表示遍历的步长值
              varStatus 属性表示当前遍历到的数据的状态
           --%>
          <c:forEach items="${requestScope.stus}" var="stu">
              <tr>
                  <td>${stu.id}</td>
                  <td>${stu.username}</td>
                  <td>${stu.password}</td>
                  <td>${stu.age}</td>
                  <td>${stu.phone}</td>
                  <td>删除、修改</td>
              </tr>
          </c:forEach>
      </table>
      ```

## 九、文件的上传和下载

1. 要有一个 form 标签，method=post 请求 
2. form 标签的 encType 属性值必须为 multipart/form-data 值 
3. 在 form 标签中使用 input type=file 添加上传的文件 
4. 编写服务器代码（Servlet 程序）接收，处理上传的数据。 

encType=multipart/form-data 表示提交的数据，以多段（每一个表单项一个数据段）的形式进行拼 接，然后以二进制流的形式发送给服务器

### 1. 文件的上传介绍

#### 1. 文件上传，HTTP 协议的说明

![](JavaWeb学习笔记尚硅谷/文件的上传和下载/文件上传http协议说明.png)

#### 2. commons-fileupload.jar 常用 API 介绍说明

- commons-fileupload.jar 需要依赖 commons-io.jar 这个包，所以两个包我们都要引入

  第一步，就是需要导入两个 jar 包

  - commons-fileupload-1.2.1.jar
  - commons-io-1.4.jar

- commons-fileupload.jar 和 commons-io.jar 包中，我们常用的类有哪些？

  - ServletFileUpload 类，用于解析上传的数据。 

  - FileItem 类，表示每一个表单项。 

  - boolean ServletFileUpload.isMultipartContent(HttpServletRequest request); 

    判断当前上传的数据格式是否是多段的格式。 

  - public List parseRequest(HttpServletRequest request) 

    解析上传的数据 

  - boolean FileItem.isFormField() 

    判断当前这个表单项，是否是普通的表单项。还是上传的文件类型。 

    true 表示普通类型的表单项

    false 表示上传的文件类型 

  - String FileItem.getFieldName() 

    获取表单项的 name 属性值

  - String FileItem.getString() 

    获取当前表单项的值。 

  - String FileItem.getName(); 

    获取上传的文件名 

  - void FileItem.write( file ); 

    将上传的文件写到 参数 file 所指向抽硬盘位置

#### 3. fileupload 类库的使用

上传文件的表单：

```jsp
<form action="http://localhost:8080/09_EL_JSTL/uploadServlet" method="post" enctype="multipart/form-data">
    用户名：<input type="text" name="username"/><br/>
    头像：<input type="file" name="photo"/><br/>
    <input type="submit" value="上传">
</form>
```

解析上传的数据的代码：

```java
public class UploadServlet extends HttpServlet {
    /**
     * 用来处理上传的数据
     * @param req
     * @param resp
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        System.out.println("文件上传过来了");

//        ServletInputStream inputStream = req.getInputStream();
//        byte[] buffer = new byte[102400];
//        int read = inputStream.read(buffer);
//        System.out.println(new String(buffer, 0, read));

        // 1. 先判断上传的数据是否多段数据（只有是多段的数据，才是文件上传的）
        if (ServletFileUpload.isMultipartContent(req)) {
            // 创建 FileItemFactory 工厂实现类
            FileItemFactory fileItemFactory = new DiskFileItemFactory();
            // 创建用于解析上传数据的工具类 ServletFileUpload 类
            ServletFileUpload servletFileUpload = new ServletFileUpload(fileItemFactory);
            try {
                // 解析上传的数据，得到每一个表单项 FileItem
                List<FileItem> list = servletFileUpload.parseRequest(req);
                // 循环判断，每一个表单项，是普通类型，还是上传的文件
                for (FileItem fileItem : list) {
                    if (fileItem.isFormField()) {
                        // 普通表单项
                        System.out.println("表单项的 name 属性值：" + fileItem.getFieldName());
                        // 参数 UTF-8，解决乱码问题
                        System.out.println("表单项的 value 属性值：" + fileItem.getString("UTF-8"));
                    } else {
                        // 上传的文件
                        System.out.println("表单项的 name 属性值：" + fileItem.getFieldName());
                        System.out.println("上传的文件名：" + fileItem.getName());
                        fileItem.write(new File("e:\\" + fileItem.getName()));
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 2. 文件下载

- 下载的常用 API 说明

  - response.getOutputStream(); 
  - servletContext.getResourceAsStream(); 
  - servletContext.getMimeType(); 
  - response.setContentType();

- response.setHeader("Content-Disposition", "attachment; fileName=1.jpg"); 

  这个响应头告诉浏览器。这是需要下载的。而 attachment 表示附件，也就是下载的一个文件。fileName=后面， 表示下载的文件名。 

  完成上面的两个步骤，下载文件是没问题了。但是如果我们要下载的文件是中文名的话。你会发现，下载无法正确显示出正确的中文名。 

  原因是在响应头中，不能包含有中文字符，只能包含 ASCII 码

#### 中文乱码解决方案

- 方案一：URLEncoder 解决 IE 和谷歌浏览器的 附件中文名问题。

  如果客户端浏览器是 IE 浏览器 或者 是谷歌浏览器。我们需要使用 URLEncoder 类先对中文名进行 UTF-8 的编码 操作。

   因为 IE 浏览器和谷歌浏览器收到含有编码后的字符串后会以 UTF-8 字符集进行解码显示

  ```java
  // 把中文名进行 UTF-8 编码操作。
  String str = "attachment; fileName=" + URLEncoder.encode("中文.jpg", "UTF-8");
  // 然后把编码后的字符串设置到响应头中
  response.setHeader("Content-Disposition", str);
  ```

- 方案二：BASE64 编解码 解决 火狐浏览器的附件中文名问题

  如果客户端浏览器是火狐浏览器。 那么我们需要对中文名进行 BASE64 的编码操作。 

  这时候需要把请求头 Content-Disposition: attachment; filename=中文名 编码成为：Content-Disposition: attachment; filename==?charset?B?xxxxx?=

  =?charset?B?xxxxx?= 现在我们对这段内容进行一下说明。 
  
  - =? 			表示编码内容的开始
  - charset    表示字符集
  - B               表示 BASE64 编码
  - xxxx          表示文件名 BASE64 编码后的内容
  - ?=               表示编码内容的结束
  
  BASE64 编解码操作：
  
  因为火狐使用的是 BASE64 的编解码方式还原响应中的汉字。所以需要使用 BASE64Encoder 类进行编码操作。
  
  ```java
  // 使用下面的格式进行 BASE64 编码后
  String str = "attachment; fileName=" + "=?utf-8?B?"
  + new BASE64Encoder().encode("中文.jpg".getBytes("utf-8")) + "?=";
  // 设置到响应头中
  response.setHeader("Content-Disposition", str);
  ```
  
  那么我们如何解决上面两种不同编解码方式呢。我们只需要通过判断请求头中 User-Agent 这个请求头携带过来的 浏览器信息即可判断出是什么浏览器
  
  ```java
  if (req.getHeader("User-Agent").contains("Firefox")) {
      // 如果是火狐浏览器使用 Base64 编码
      resp.setHeader("Content-Disposition", "attachment; filename==?UTF-8?B?" + new BASE64Encoder().encode("中国.jpg".getBytes("UTF-8")) + "?=");
  } else {
      // 如果不是火狐，是 IE 或谷歌，使用URL 编码操作
      resp.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode("中国.jpg", "UTF-8"));
  }
  ```

## 十、Cookie 和 Session

### 1. Cookie 饼干

#### 1. 什么是 Cookie

1. Cookie 翻译过来是饼干的意思。 
2. Cookie 是服务器通知客户端保存键值对的一种技术。 
3. 客户端有了 Cookie 后，每次请求都发送给服务器。 
4. 每个 Cookie 的大小不能超过4kb

#### 2. 如何创建 Cookie

![](JavaWeb学习笔记尚硅谷/Cookie和Session/Cookie的创建.png)

Servlet 程序中的代码：

```java
protected void createCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 1. 创建 Cookie 对象
    Cookie cookie = new Cookie("key1", "value1");
    // 2. 通知客户端保存 Cookie
    resp.addCookie(cookie);
    // 1. 创建 Cookie 对象
    Cookie cookie1 = new Cookie("key2", "value2");
    // 2. 通知客户端保存 Cookie
    resp.addCookie(cookie1);
    resp.getWriter().write("Cookie 创建成功");
}
```

#### 3. 服务器如何获取 Cookie

服务器获取客户端的 Cookie 只需要一行代码：req.getCookies()：Cookie[]

![](JavaWeb学习笔记尚硅谷/Cookie和Session/服务器如何获取Cookie.png)

Cookie 的工具类:

```java
public class CookieUtils {
    /**
     * 查找指定名称的 Cookie 对象
     *
     * @param name
     * @param cookies
     * @return
     */
    public static Cookie findCookie(String name, Cookie[] cookies) {
        if (name == null || cookies == null || cookies.length == 0) {
            return null;
        }

        for (Cookie cookie : cookies) {
            if (name.equals(cookie.getName())) {
                return cookie;
            }
        }
        return null;
    }
}
```

Servlet 程序中的代码：

```java
protected void getCookie(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie[] cookies = req.getCookies();

    for (Cookie cookie : cookies) {
        // getName 方法返回 Cookie 的 key（名）
        // getValue 方法返回 Cookie 的 value 值
        resp.getWriter().write("Cookie[" + cookie.getName() + "=" + cookie.getValue() + "]<br/>");
    }
    Cookie iWantCookie = CookieUtils.findCookie("key1", cookies);
//        for (Cookie cookie : cookies) {
//            if ("key2".equals(cookie.getName())) {
//                iWantCookie = cookie;
//                break;
//            }
//        }

    // 如果不等于 null，说明赋过值，也就是找到了需要的 Cookie
    if (iWantCookie != null) {
        resp.getWriter().write("找到了需要的Cookie");
    }
}
```

#### 4. Cookie 值的修改

- 方案一：

  1. 先创建一个要修改的同名（指的就是 key）的 Cookie 对象 
  2. 在构造器，同时赋于新的 Cookie 值。 
  3. 调用 response.addCookie( Cookie )

  ```java
  // 方案一：
  // 1、先创建一个要修改的同名的Cookie 对象
  // 2、在构造器，同时赋于新的 Cookie 值
  Cookie cookie = new Cookie("key1", "newValue1");
  // 3、调用 response.addCookie( Cookie); 通知客户端保存修改
  resp.addCookie(cookie);
  ```

- 方案二：

  1. 先查找到需要修改的 Cookie 对象 
  2. 调用 setValue()方法赋于新的 Cookie 值。 
  3. 调用 response.addCookie()通知客户端保存修改

  ```java
  // 方案二：
  // 1、先查找到需要修改的 Cookie 对象
  Cookie cookie = CookieUtils.findCookie("key2", req.getCookies());
  if (cookie != null) {
      // 2、调用 setValue() 方法赋于新的 Cookie 值
      cookie.setValue("newValue2");
      // 3、调用 response.addCookie()通知客户端保存修改
      resp.addCookie(cookie);
  }
  ```

#### 5. 浏览器查看 Cookie

- 谷歌浏览器查看 Cookie

  ![](JavaWeb学习笔记尚硅谷/Cookie和Session/谷歌浏览器查看Cookie.png)

- 火狐浏览器查看 Cookie

  ![](JavaWeb学习笔记尚硅谷/Cookie和Session/火狐浏览器查看Cookie.png)

#### 6. Cookie 生命控制

Cookie 的生命控制指的是如何管理 Cookie 什么时候被销毁（删除） 

setMaxAge()

- 正数，表示在指定的秒数后过期 
- 负数，表示浏览器一关，Cookie 就会被删除（默认值是-1） 
- 零，表示马上删除 Cookie

```java
protected void life3600(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("life3600", "life3600");
    cookie.setMaxAge(60 * 60);   // 设置 Cookie 一小时之后被删除/无效
    resp.addCookie(cookie);

    resp.getWriter().write("已经创建了一个存活一小时的 Cookie");
}

protected void deleteNow(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 先找到你要删除的 Cookie 对象
    Cookie cookie = CookieUtils.findCookie("key2", req.getCookies());
    if (cookie != null) {
        // 调用 setMaxAge(0)
        cookie.setMaxAge(0);   // 表示马上删除，不需要浏览器等待
        // 调用 response.addCookie( Cookie);
        resp.addCookie(cookie);

        resp.getWriter().write("key2 的 Cookie 已经被删除");
    }
}

protected void defaultLife(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("defaultKey", "defaultValue");
    cookie.setMaxAge(-1);   // 设置存活时间
    resp.addCookie(cookie);
}
```

#### 7. Cookie 有效路径 Path 的设置

Cookie 的 path 属性可以有效的过滤哪些 Cookie 可以发送给服务器。哪些不发。 path 属性是通过请求的地址来进行有效的过滤。

- CookieA：path=/工程路径 
- CookieB：path=/工程路径/abc 

请求地址如下：

- http://ip:port/工程路径/a.html 
  - CookieA：发送 
  - CookieB：不发送 
- http://ip:port/工程路径/abc/a.html 
  - CookieA：发送 
  - CookieB：发送

```java
protected void testPath(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Cookie cookie = new Cookie("path1", "path1");
    // getContextPath() ===>>> 得到工程路径
    cookie.setPath(req.getContextPath() + "/abc");    // ===>>> /工程路径/abc
    resp.addCookie(cookie);
    resp.getWriter().write("创建了一个带有 Path 路径的 Cookie");
}
```

#### 8. Cookie 练习——免输入用户名登录

![](JavaWeb学习笔记尚硅谷/Cookie和Session/Cookie练习免输入用户名登录.png)

login.jsp 页面

```html
<form action="http://localhost:8080/13_cookie_session/loginServlet" method="get">
    用户名：<input type="text" name="username" value="${cookie.username.value}"/><br/>
    密 码：<input type="password" name="password"/><br/>
    <input type="submit" value="登录"/>
</form>
```

LoginServlet 程序

```java
public class LoginServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        if ("wzg168".equals(username) && "123456".equals(password)) {
            // 登录成功
            Cookie cookie = new Cookie("username", username);
            cookie.setMaxAge(60 * 60 * 24 * 7);
            resp.addCookie(cookie);
            System.out.println("登录成功！");
        } else {
            // 登录失败
            System.out.println("登录失败！");
        }
    }
}
```

### 2. Session 会话

#### 1. 什么是 Session 会话

1. Session 就一个接口（HttpSession）。 
2. Session 就是会话。它是用来维护一个客户端和服务器之间关联的一种技术。 
3. 每个客户端都有自己的一个 Session 会话。 
4. Session 会话中，我们经常用来保存用户登录之后的信息。

#### 2. 如何创建 Session 和获取（id 号，是否为新）

如何创建和获取 Session。它们的 API 是一样的。

- request.getSession() 

  第一次调用是：创建 Session 会话 

  之后调用都是：获取前面创建好的 Session 会话对象。 

- isNew(); 判断到底是不是刚创建出来的（新的） 

  true：表示刚创建 

  false：表示获取之前创建 

- 每个会话都有一个身份证号。也就是 ID 值。而且这个 ID 是唯一的。 

  getId() 得到 Session 的会话 id 值。

#### 3. Session 域数据的存取

示例代码：

```java
/**
 * 往 Session 中保存数据
 *
 * @param req
 * @param resp
 * @throws ServletException
 * @throws IOException
 */
protected void setAttribute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    req.getSession().setAttribute("key1", "value1");
    resp.getWriter().write("已经往 Session中保存了数据");
}

/**
 * 获取 Session 域中的数据
 *
 * @param req
 * @param resp
 * @throws ServletException
 * @throws IOException
 */
protected void getAttribute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    Object attribute = req.getSession().getAttribute("key1");
    resp.getWriter().write("从Session中获取出key1的数据是：" + attribute);
}
```

#### 4. Session 生命周期控制

- public void setMaxInactiveInterval(int interval)：设置 Session 的超时时间（以秒为单位），超过指定的时长，Session 就会被销毁。 

  - 值为正数的时候，设定 Session 的超时时长。 
  - 负数表示永不超时（极少使用） 

- public int getMaxInactiveInterval()：获取 Session 的超时时间 

- public void invalidate()：让当前 Session 会话马上超时无效。 

- Session 默认的超时时长是多少！ 

  Session 默认的超时时间长为 30 分钟。 

  因为在 Tomcat 服务器的配置文件 web.xml中默认有以下的配置，它就表示配置了当前 Tomcat 服务器下所有的 Session 超时配置默认时长为：30 分钟。

  \<session-config>

  ​	<session-timeout\>30</session-timeout\>

  </session-config\>

如果说。你希望你的 web 工程，默认的 Session 的超时时长为其他时长。你可以在你自己的 web.xml 配置文件中做 以上相同的配置。就可以修改你的 web 工程所有 Seession 的默认超时时长。

```xml
<!-- 表示当前 web 工程，创建出来的所有Session默认是20分钟 超时时长 -->
<session-config>
    <session-timeout>20</session-timeout>
</session-config>
```

如果你想只修改个别 Session 的超时时长。就可以使用上面的 API。setMaxInactiveInterval(int interval)来进行单独的设 置。 

- session.setMaxInactiveInterval(int interval)单独设置超时时长。

Session 超时的概念介绍：

![](JavaWeb学习笔记尚硅谷/Cookie和Session/session超时概念.png)

示例代码：

```java
protected void life3(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 先获取 Session 对象
    HttpSession session = req.getSession();
    // 设置当前Session 3秒后超时
    session.setMaxInactiveInterval(3);

    resp.getWriter().write("当前Session已经设置为3秒后超时");
}
```

Session马上被超时示例：

```java
protected void deleteNow(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 先获取 Session 对象
    HttpSession session = req.getSession();
    // 让 Session 会话马上超时
    session.invalidate();

    resp.getWriter().write("Session已经设置为超时（无效）");
}
```

#### 5. 浏览器 和 Session 之间关联的技术内幕

Session 技术，底层其实是基于 Cookie 技术实现的。

![](JavaWeb学习笔记尚硅谷/Cookie和Session/浏览器和Session之间关联的技术内幕.png)

## 十一、Filter 过滤器

### 1. Filter 什么是过滤器

1. Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器 
2. Filter 过滤器它是 JavaEE 的规范。也就是接口 
3. Filter 过滤器它的作用是：拦截请求，过滤响应。 

拦截请求常见的应用场景有： 

1. 权限检查 
2. 日记操作 
3. 事务管理 
4. ……等等

### 2. Filter 的初体验

要求：在你的 web 工程下，有一个 admin 目录。这个 admin 目录下的所有资源（html 页面、jpg 图片、jsp 文件、等等）都必 须是用户登录之后才允许访问。 

思考：根据之前我们学过内容。我们知道，用户登录之后都会把用户登录的信息保存到 Session 域中。所以要检查用户是否 登录，可以判断 Session 中否包含有用户登录的信息即可！！！

```jsp
<%
	Object user = session.getAttribute("user");
	// 如果等于 null，说明还没有登录
	if (user == null) {
		request.getRequestDispatcher("/login.jsp").forward(request,response);
		return;
	}
%>
```

Filter 的工作流程图：

![](JavaWeb学习笔记尚硅谷/Filter/Filter的工作流程图.png)

Filter 的代码：

```java
public class AdminFilter implements Filter {
    /**
     * doFilter 方法，专门用于拦截请求，可以做权限检查
     *
     * @param servletRequest
     * @param servletResponse
     * @param filterChain
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        HttpSession session = httpServletRequest.getSession();
        Object user = session.getAttribute("user");
        // 如果等于null，说明还没有登录
        if (user == null) {
            servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest, servletResponse);
            return;
        } else {
            // 让程序继续往下访问用户的目标资源
            filterChain.doFilter(servletRequest, servletResponse);
        }
    }
}
```

web.xml中的配置：

```xml
<!-- filter 标签用于配置一个Filter过滤器 -->
<filter>
    <!-- 给 filter 起一个别名 -->
    <filter-name>AdminFilter</filter-name>
    <!-- 配置 filter 的全类名 -->
    <filter-class>com.atguigu.filter.AdminFilter</filter-class>
</filter>
<!-- filter-mapping 配置Filter过滤器的拦截路径 -->
<filter-mapping>
    <!-- filter-name 表示当前的拦截路径给哪个filter使用 -->
    <filter-name>AdminFilter</filter-name>
    <!-- url-pattern 配置拦截路径
        / 表示请求地址为：http://ip:port/工程路径/      映射到IDEA的 web 目录
     -->
    <url-pattern>/admin/*</url-pattern>
</filter-mapping>
```

Filter 过滤器的使用步骤： 

1. 编写一个类去实现 Filter 接口 
2. 实现过滤方法 doFilter() 
3. 到 web.xml 中去配置 Filter

- 完整的用户登录

  - login.jsp 页面 == 登录表单

  ```jsp
  <body>
  这是登录页面 login.jsp 页面<br/>
  <form action="http://localhost:8080/15_filter/loginServlet" method="get">
      用户名：<input type="text" name="username"/><br/>
      密 码：<input type="password" name="password"/><br/>
      <input type="submit" value="登录"/>
  </form>
  </body>
  ```

  - LoginServlet 程序

  ```java
  public class LoginServlet extends HttpServlet {
      @Override
      protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          resp.setContentType("text/html;charset=UTF-8");
          String username = req.getParameter("username");
          String password = req.getParameter("password");
          if ("wzg168".equals(username) && "123456".equals(password)) {
              req.getSession().setAttribute("user", username);
              resp.getWriter().write("登录成功！！！");
          } else {
              req.getRequestDispatcher("/login.jsp").forward(req, resp);
          }
      }
  }
  ```

### 3. Filter 的生命周期

Filter 的生命周期包含几个方法 

1. 构造器方法 

2. init 初始化方法 

   第 1，2 步，在 web 工程启动的时候执行（Filter 已经创建） 

3. doFilter 过滤方法 

   第 3 步，每次拦截到请求，就会执行 

4. destroy 销毁 

   第 4 步，停止 web 工程的时候，就会执行（停止 web 工程，也会销毁 Filter 过滤器）

### 4. FilterConfig 类

FilterConfig 类见名知义，它是 Filter 过滤器的配置文件类。

Tomcat 每次创建 Filter 的时候，也会同时创建一个 FilterConfig 类，这里包含了 Filter 配置文件的配置信息。 

FilterConfig 类的作用是获取 filter 过滤器的配置内容 

1. 获取 Filter 的名称 filter-name 的内容 
2. 获取在 Filter 中配置的 init-param 初始化参数 
3. 获取 ServletContext 对象

java代码：

```java
@Override
public void init(FilterConfig filterConfig) throws ServletException {
    System.out.println("2.Filter的 init(FilterConfig filterConfig) 初始化方法");
    // 1. 获取 Filter 的名称 filter-name 的内容
    System.out.println("filter-name 的值是：" + filterConfig.getFilterName());
    // 2. 获取在 web.xml 中配置的 init-param 初始化参数
    System.out.println("初始化参数 username 的值是：" + filterConfig.getInitParameter("username"));
    System.out.println("初始化参数 url 的值是：" + filterConfig.getInitParameter("url"));
    // 3. 获取 ServletContext 对象
    System.out.println(filterConfig.getServletContext());
}
```

web.xml 配置：

```xml
<!-- filter 标签用于配置一个Filter过滤器 -->
<filter>
    <!-- 给 filter 起一个别名 -->
    <filter-name>AdminFilter</filter-name>
    <!-- 配置 filter 的全类名 -->
    <filter-class>com.atguigu.filter.AdminFilter</filter-class>
    <init-param>
        <param-name>username</param-name>
        <param-value>root</param-value>
    </init-param>
    <init-param>
        <param-name>url</param-name>
        <param-value>jdbc:mysql://localhost:3306/test</param-value>
    </init-param>
</filter>
```

### 5. FilterChain 过滤器链

Filter：过滤器 

Chain：链，链条 

FilterChain：就是过滤器链（多个过滤器如何一起工作）

![](JavaWeb学习笔记尚硅谷/Filter/FilterChain过滤器链.png)

### 6. Filter 的拦截路径

- 精确匹配

  `<url-pattern>/target.jsp</url-pattern>`

  以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/target.jsp

- 目录匹配

  `<url-pattern>/admin/*</url-pattern>`

  以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/admin/*

- 后缀名匹配

  `<url-pattern>*.html</url-pattern>`

  以上配置的路径，表示请求地址必须以.html 结尾才会拦截到 

  `<url-pattern>*.do</url-pattern>`

  以上配置的路径，表示请求地址必须以.do 结尾才会拦截到 

  `<url-pattern>*.action</url-pattern>`

  以上配置的路径，表示请求地址必须以.action 结尾才会拦截到 

  Filter 过滤器它只关心请求的地址是否匹配，不关心请求的资源是否存在！！！

## 十二、JSON、AJAX、i18n

### 1. 什么是 JSON

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。JSON 采用完全独立于语言的文本格式，而且很多语言都提供了对 json 的支持（包括 C, C++, C#, Java, JavaScript, Perl, Python 等）。 这样就使得 JSON 成为理想的数据交换格式。

 json 是一种轻量级的数据交换格式。

- 轻量级指的是跟 xml 做比较。

- 数据交换指的是客户端和服务器之间业务数据的传递格式。

#### 1. JSON 在 JavaScript 中的使用

##### 1.1 json 的定义

json 是由键值对组成，并且由花括号（大括号）包围。每个键由引号引起来，键和值之间使用冒号进行分隔， 多组键值对之间进行逗号进行分隔。

json 定义示例：

```json
var jsonObj = {
    "key1": 12,
    "key2": "abc",
    "key3": true,
    "key4": [11, "arr", false],
    "key5": {
        "key5_1": 551,
        "key5_2": "key5_2_value"
    },
    "key6": [{
        "key6_1_1": 6611,
        "key6_1_2": "key6_1_2_value"
    }, {
        "key6_2_1": 6621,
        "key6_2_2": "key6_2_2_value"
    }]
};
```

##### 1.2 json 的访问

json 本身是一个对象。 

json 中的 key 我们可以理解为是对象中的一个属性。 

json 中的 key 访问就跟访问对象的属性一样： json 对象.key

json 访问示例：

```json
alert(typeof(jsonObj));// object json 就是一个对象
alert(jsonObj.key1); //12
alert(jsonObj.key2); // abc
alert(jsonObj.key3); // true
alert(jsonObj.key4);// 得到数组[11,"arr",false]
// json 中 数组值的遍历
for(var i = 0; i < jsonObj.key4.length; i++) {
alert(jsonObj.key4[i]);
}
alert(jsonObj.key5.key5_1);//551
alert(jsonObj.key5.key5_2);//key5_2_value
alert( jsonObj.key6 );// 得到 json 数组
// 取出来每一个元素都是 json 对象
var jsonItem = jsonObj.key6[0];
// alert( jsonItem.key6_1_1 ); //6611
alert( jsonItem.key6_1_2 );	// key6_1_2_value
```

##### 1.3 json 的两个常用方法

json 的存在有两种形式。

- 一种是：对象的形式存在，我们叫它 json 对象。 

- 一种是：字符串的形式存在，我们叫它 json 字符串。

一般我们要操作 json 中的数据的时候，需要 json 对象的格式。

一般我们要在客户端和服务器之间进行数据交换的时候，使用 json 字符串。

- JSON.stringify() 把 json 对象转换成为 json 字符串

- JSON.parse() 把 json 字符串转换成为 json 对象

示例代码：

```json
// 把 json 对象转换成为 json 字符串
var jsonObjString = JSON.stringify(jsonObj); // 特别像 Java 中对象的 toString
alert(jsonObjString)
// 把 json 字符串。转换成为 json 对象
var jsonObj2 = JSON.parse(jsonObjString);
alert(jsonObj2.key1);// 12
alert(jsonObj2.key2);// abc
```

#### 2. JSON 在 java 中的使用

##### 2.1 javaBean 和 json 的互转

```java
// javaBean 和 json 的转换
@Test
public void test1() {
    Person person = new Person(1, "国哥还帅！");
    // 创建 Gson 对象实例
    Gson gson = new Gson();
    // toJson 方法可以把 java 对象转换成为 json 字符串
    String personJsonString = gson.toJson(person);
    System.out.println(personJsonString);
    // fromJson 把 json 字符串转换回 Java 对象
    // 第一个参数是 json 字符串
    // 第二个参数是转换回去的 Java 对象类型
    Person person1 = gson.fromJson(personJsonString, Person.class);
    System.out.println(person1);
}
```

##### 2.2 List 和 json 的互转

```java
// List 和 json 的互转
@Test
public void test2() {
    List<Person> personList = new ArrayList<>();
    personList.add(new Person(1, "国哥"));
    personList.add(new Person(2, "康师傅"));
    Gson gson = new Gson();
    // 把 List 转换为 json 字符串
    String personListJsonString = gson.toJson(personList);
    System.out.println(personListJsonString);

    List<Person> list = gson.fromJson(personListJsonString, new PersonListType().getType());
    System.out.println(list);
    Person person = list.get(0);
    System.out.println(person);
}
```

##### 2.3 map 和 json 的互转

```java
// map 和 json 的互转
@Test
public void test3() {
    Map<Integer, Person> personMap = new HashMap<>();
    personMap.put(1, new Person(1, "国哥好帅！"));
    personMap.put(2, new Person(2, "康师傅好帅！"));
    Gson gson = new Gson();
    // 把 map 集合转换成为 json 字符串
    String personMapJsonString = gson.toJson(personMap);
    System.out.println(personMapJsonString);
//        Map<Integer, Person> personMap2 = gson.fromJson(personMapJsonString, new PersonMapType().getType());
    Map<Integer, Person> personMap2 = gson.fromJson(personMapJsonString, new TypeToken<HashMap<Integer, Person>>() {
    }.getType());
    System.out.println(personMap2);
    Person p = personMap2.get(1);
    System.out.println(p);
}
```

### 2. AJAX 请求

#### 1. 什么是 AJAX 请求

AJAX 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发 技术。 

ajax 是一种浏览器通过 js 异步发起请求，局部更新页面的技术。 

- Ajax 请求的局部更新，浏览器地址栏不会发生变化 

- 局部更新不会舍弃原来页面的内容

#### 2. 原生 AJAX 请求的示例

```jsp
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
    <script type="text/javascript">
        // 在这里使用 JavaScript 语言发起 Ajax 请求，访问服务器 AjaxServlet 中的 javaScriptAjax
        function ajaxRequest() {
// 			1、我们首先要创建XMLHttpRequest
            var xmlhttprequest = new XMLHttpRequest();
// 			2、调用open方法设置请求参数
            xmlhttprequest.open("GET", "http://localhost:8080/16_json_ajax_i18n/ajaxServlet?action=javaScriptAjax", true);
// 			4、在send方法前绑定onreadystatechange事件，处理请求完成后的操作。
            xmlhttprequest.onreadystatechange = function () {
                if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {
                    var jsonObj = JSON.parse(xmlhttprequest.responseText);
                    // 把响应的数据显示在页面上
                    document.getElementById("div01").innerHTML = "编号：" + jsonObj.id + "，姓名：" + jsonObj.name;
                }
            };
// 			3、调用send方法发送请求
            xmlhttprequest.send();
        }
    </script>
</head>
<body>
<a href="http://localhost:8080/16_json_ajax_i18n/ajaxServlet?action=javaScriptAjax">非Ajax</a><br/>
<button onclick="ajaxRequest()">ajax request</button>
<div id="div01">
</div>
<table border="1">
    <tr>
        <td>1.1</td>
        <td>1.2</td>
    </tr>
    <tr>
        <td>2.1</td>
        <td>2.2</td>
    </tr>
</table>
</body>
</html>
```

#### 3. jQuery 中的 AJAX 请求

- $.ajax 方法 

  - url：表示请求的地址 

  - type：表示请求的类型 GET 或 POST 请求 

  - data：表示发送给服务器的数据 

    格式有两种： 

    - 一：name=value&name=value 

    - 二：{key:value} 

  - success：请求成功，响应的回调函数 

  - dataType：响应的数据类型 

    常用的数据类型有： 

    - text：表示纯文本 
    - xml：表示 xml 数据 
    - json：表示 json 对象

```javascript
// ajax请求
$("#ajaxBtn").click(function () {
    $.ajax({
        url: "http://localhost:8080/16_json_ajax_i18n/ajaxServlet",
        // data: "action=jQueryAjax",
        data: {action: "jQueryAjax"},
        type: "GET",
        success: function (data) {
            // alert("服务器返回的数据是：" + data);
            // var jsonObj = JSON.parse(data);
            $("#msg").html("ajax 编号：" + data.id + "，姓名：" + data.name);
        },
        dataType: "json"
    });
    // alert("ajax btn");
});
```

- $.get 方法和 $.post 方法
  - url：请求的 url 地址 
  - data：发送的数据 
  - callback：成功的回调函数 
  - type：返回的数据类型

```javascript
// ajax--get请求
$("#getBtn").click(function () {
    $.get("http://localhost:8080/16_json_ajax_i18n/ajaxServlet", "action=jQueryGet", function (data) {
        $("#msg").html("get 编号：" + data.id + "，姓名：" + data.name);
    }, "json");
    // alert(" get btn ");
});
// ajax--post请求
$("#postBtn").click(function () {
    $.post("http://localhost:8080/16_json_ajax_i18n/ajaxServlet", "action=jQueryPost", function (data) {
        $("#msg").html("post 编号：" + data.id + "，姓名：" + data.name);
    }, "json");
    // post请求
    // alert("post btn");
});
```

- $.getJSON 方法
  - url：请求的 url 地址 
  - data：发送给服务器的数据 
  - callback：成功的回调函数

```javascript
// ajax--getJson请求
$("#getJSONBtn").click(function () {
    // 调用
    $.getJSON("http://localhost:8080/16_json_ajax_i18n/ajaxServlet", "action=jQueryGetJSON", function (data) {
        $("#msg").html("getJSON 编号：" + data.id + "，姓名：" + data.name);
    });
    // alert("getJSON btn");
});
```

- 表单序列化 serialize() 

  serialize()可以把表单中所有表单项的内容都获取到，并以 name=value&name=value 的形式进行拼接

```javascript
// ajax请求
$("#submit").click(function () {
    // 把参数序列化
    alert($("#form01").serialize());
    $.getJSON("http://localhost:8080/16_json_ajax_i18n/ajaxServlet", "action=jQuerySerialize&" + $("#form01").serialize(), function (data) {
        $("#msg").html("Serialize 编号：" + data.id + "，姓名：" + data.name);
    });
    // alert("serialize()");
});
```

### 3. i18n 国际化

#### 1. 什么是 i18n 国际化

- 国际化（Internationalization）指的是同一个网站可以支持多种不同的语言，以方便不同国家，不同语种的用户访问。 
- 关于国际化我们想到的最简单的方案就是为不同的国家创建不同的网站，比如苹果公司，他的英文官网是： http://www.apple.com 而中国官网是 http://www.apple.com/cn 
- 苹果公司这种方案并不适合全部公司，而我们希望相同的一个网站，而不同人访问的时候可以根据用户所在的区域显示 不同的语言文字，而网站的布局样式等不发生改变。 
- 于是就有了我们说的国际化，国际化总的来说就是同一个网站不同国家的人来访问可以显示出不同的语言。但实际上这 种需求并不强烈，一般真的有国际化需求的公司，主流采用的依然是苹果公司的那种方案，为不同的国家创建不同的页 面。所以国际化的内容我们了解一下即可。 
- 国际化的英文 Internationalization，但是由于拼写过长，老外想了一个简单的写法叫做 I18N，代表的是 Internationalization 这个单词，以 I 开头，以 N 结尾，而中间是 18 个字母，所以简写为 I18N。以后我们说 I18N 和国际化是一个意思。

#### 2. 国际化相关要素介绍

![](JavaWeb学习笔记尚硅谷/JSON和Ajax和i18n/国际化相关要素介绍.png)

#### 3. 国际化资源 properties 测试

配置两个语言的配置文件：

i18n_en_US.properties 英文

```properties
username=username
password=password
sex=sex
age=age
regist=regist
boy=boy
girl=girl
email=email
reset=reset
submit=submit
```

i18n_zh_CN.properties 中文

```properties
username=姓名
password=密码
sex=性别
age=年龄
regist=注册
boy=男
girl=女
email=邮箱
reset=重置
submit=提交
```

国际化测试代码：

```java
public class I18nTest {
    @Test
    public void testLocale() {
        // 获取你系统默认的语言、国家信息
        Locale locale = Locale.getDefault();
        System.out.println(locale);
//        for (Locale availableLocale : Locale.getAvailableLocales()) {
//            System.out.println(availableLocale);
//        }
        // 获取中文，中国的常量的 Locale 对象
        System.out.println(Locale.CHINA);
        // 获取英文，美国的常量的 Locale 对象
        System.out.println(Locale.US);
    }

    @Test
    public void testI18n() throws UnsupportedEncodingException {
        // 得到我们需要的 Locale 对象
        Locale locale = Locale.CHINA;
        // 通过指定的 basename 和 Locale 对象，读取相应的配置文件
        ResourceBundle bundle = ResourceBundle.getBundle("i18n", locale);
        System.out.println("username：" + bundle.getString("username"));
        System.out.println("password：" + bundle.getString("password"));
        System.out.println("sex：" + bundle.getString("sex"));
        System.out.println("age：" +bundle.getString("age"));
    }
}
```

#### 4. 通过请求头国际化页面

```jsp
<%@ page import="java.util.Locale" %>
<%@ page import="java.util.ResourceBundle" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
</head>
<body>
<%
    // 从请求头中获取 Locale 信息（语言）
    Locale locale = request.getLocale();
    System.out.println(locale);
    // 获取读取包（根据指定的 baseName 和 Locale 读取语言信息）
    ResourceBundle i18n = ResourceBundle.getBundle("i18n", locale);
%>
<a href="">中文</a>|
<a href="">english</a>
<center>
    <h1><%=i18n.getString("regist")%>
    </h1>
    <table>
        <form>
            <tr>
                <td>
                    <%=i18n.getString("username")%>
                </td>
                <td><input name="username" type="text"/></td>
            </tr>
            <tr>
                <td>
                    <%=i18n.getString("password")%>
                </td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td>
                    <%=i18n.getString("sex")%>
                </td>
                <td>
                    <input type="radio"/><%=i18n.getString("boy")%>
                    <input type="radio"/><%=i18n.getString("girl")%>
                </td>
            </tr>
            <tr>
                <td>
                    <%=i18n.getString("email")%>
                </td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="reset" value="<%=i18n.getString("reset")%>"/>&nbsp;&nbsp;
                    <input type="submit" value="<%=i18n.getString("submit")%>"/></td>
            </tr>
        </form>
    </table>
    <br/> <br/> <br/> <br/>
</center>
国际化测试：
<br/> 1、访问页面，通过浏览器设置，请求头信息确定国际化语言。
<br/> 2、通过左上角，手动切换语言
</body>
</html>
```

#### 5. 通过显示的选择语言类型进行国际化

```jsp
<%@ page import="java.util.Locale" %>
<%@ page import="java.util.ResourceBundle" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
</head>
<body>
<%
    // 从请求头中获取 Locale 信息（语言）
    Locale locale = null;
    String country = request.getParameter("country");
    if ("cn".equals(country)) {
        locale = Locale.CHINA;
    } else if ("usa".equals(country)) {
        locale = Locale.US;
    } else {
        locale = request.getLocale();
    }
    System.out.println(locale);
    // 获取读取包（根据指定的 baseName 和 Locale 读取语言信息）
    ResourceBundle i18n = ResourceBundle.getBundle("i18n", locale);
%>
<a href="i18n.jsp?country=cn">中文</a>|
<a href="i18n.jsp?country=usa">english</a>
<center>
    <h1><%=i18n.getString("regist")%>
    </h1>
    <table>
        <form>
            <tr>
                <td>
                    <%=i18n.getString("username")%>
                </td>
                <td><input name="username" type="text"/></td>
            </tr>
            <tr>
                <td>
                    <%=i18n.getString("password")%>
                </td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td>
                    <%=i18n.getString("sex")%>
                </td>
                <td>
                    <input type="radio"/><%=i18n.getString("boy")%>
                    <input type="radio"/><%=i18n.getString("girl")%>
                </td>
            </tr>
            <tr>
                <td>
                    <%=i18n.getString("email")%>
                </td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="reset" value="<%=i18n.getString("reset")%>"/>&nbsp;&nbsp;
                    <input type="submit" value="<%=i18n.getString("submit")%>"/></td>
            </tr>
        </form>
    </table>
    <br/> <br/> <br/> <br/>
</center>
国际化测试：
<br/> 1、访问页面，通过浏览器设置，请求头信息确定国际化语言。
<br/> 2、通过左上角，手动切换语言
</body>
</html>
```

#### 6. JSTL 标签库实现国际化

```jsp
<%--1 使用标签设置 Locale 信息--%>
<fmt:setLocale value="" />
<%--2 使用标签设置 baseName--%>
<fmt:setBundle basename=""/>
<%--3 输出指定 key 的国际化信息--%>
<fmt:message key="" />
```

```jsp
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="pragma" content="no-cache"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
</head>
<body>
<%-- 1. 使用标签设置 Locale 信息 --%>
<fmt:setLocale value="${param.locale}"/>
<%-- 2. 使用标签设置 baseName --%>
<fmt:setBundle basename="i18n"/>
<%-- 3. 使用标签输出国际化信息 --%>
<a href="i18n_fmt.jsp?locale=zh_CN">中文</a>|
<a href="i18n_fmt.jsp?locale=en_US">english</a>
<center>
    <h1><fmt:message key="regist"/></h1>
    <table>
        <form>
            <tr>
                <td><fmt:message key="username"/></td>
                <td><input name="username" type="text"/></td>
            </tr>
            <tr>
                <td><fmt:message key="password"/></td>
                <td><input type="password"/></td>
            </tr>
            <tr>
                <td><fmt:message key="sex"/></td>
                <td><input type="radio"/><fmt:message key="boy"/>
                    <input type="radio"/><fmt:message key="girl"/></td>
            </tr>
            <tr>
                <td><fmt:message key="email"/></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="reset" value="<fmt:message key="reset"/>"/>&nbsp;&nbsp;
                    <input type="submit" value="<fmt:message key="submit"/>"/></td>
            </tr>
        </form>
    </table>
    <br/> <br/> <br/> <br/>
</center>
</body>
</html>
```





