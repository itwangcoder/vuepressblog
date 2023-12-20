---
title: SpringSecurity学习笔记尚硅谷
description: SpringSecurity学习笔记尚硅谷
author: itwangcoder
date: '2023-12-20'
categories:
 - Java
 - 框架
tags:
 - 尚硅谷
 - Java
 - 框架
 - Spring框架
---

# Spring Security

## 1、SpringSecurity 框架简介

### 1.1 概要

Spring 是非常流行和成功的 Java 应用开发框架，Spring Security 正是 Spring 家族中的 成员。Spring Security 基于 Spring 框架，提供了一套 Web 应用安全性的完整解决方案。 

正如你可能知道的关于安全方面的两个主要区域是“认证”和“授权”（或者访问控 制），一般来说，Web 应用的安全性包括用户认证（Authentication）和用户授权 （Authorization）两个部分，这两点也是 Spring Security 重要核心功能。 

（1）用户认证指的是：验证某个用户是否为系统中的合法主体，也就是说用户能否访问 该系统。用户认证一般要求用户提供用户名和密码。系统通过校验用户名和密码来完成认 证过程。通俗点说就是系统认为用户是否能登录 

（2）用户授权指的是验证某个用户是否有权限执行某个操作。在一个系统中，不同用户 所具有的权限是不同的。比如对一个文件来说，有的用户只能进行读取，而有的用户可以 进行修改。一般来说，系统会为不同的用户分配不同的角色，而每个角色则对应一系列的 权限。通俗点讲就是系统判断用户是否有权限去做某些事情。

### 1.2 历史

“Spring Security 开始于 2003 年年底,““spring 的 acegi 安全系统”。 起因是 Spring 开发者邮件列表中的一个问题,有人提问是否考虑提供一个基于 spring 的安全实现。 

Spring Security 以“The Acegi Secutity System for Spring” 的名字始于 2013 年晚些 时候。一个问题提交到 Spring 开发者的邮件列表，询问是否已经有考虑一个机遇 Spring  的安全性社区实现。那时候 Spring 的社区相对较小（相对现在）。实际上 Spring 自己在 2013 年只是一个存在于 ScourseForge 的项目，这个问题的回答是一个值得研究的领 域，虽然目前时间的缺乏组织了我们对它的探索。 

考虑到这一点，一个简单的安全实现建成但是并没有发布。几周后，Spring 社区的其他成 员询问了安全性，这次这个代码被发送给他们。其他几个请求也跟随而来。到 2014 年一 月大约有 20 万人使用了这个代码。这些创业者的人提出一个 SourceForge 项目加入是为 了，这是在 2004 三月正式成立。 

在早些时候，这个项目没有任何自己的验证模块，身份验证过程依赖于容器管理的安全性 和 Acegi 安全性。而不是专注于授权。开始的时候这很适合，但是越来越多的用户请求额 外的容器支持。容器特定的认证领域接口的基本限制变得清晰。还有一个相关的问题增加 新的容器的路径，这是最终用户的困惑和错误配置的常见问题。 

Acegi 安全特定的认证服务介绍。大约一年后，Acegi 安全正式成为了 Spring 框架的子项 目。1.0.0 最终版本是出版于 2006 -在超过两年半的大量生产的软件项目和数以百计的改 进和积极利用社区的贡献。 

Acegi 安全 2007 年底正式成为了 Spring 组合项目，更名为"Spring Security"。

### 1.3 同款产品对比

#### 1.3.1 Spring Security

Spring 技术栈的组成部分。

![](SpringSecurity学习笔记尚硅谷/SpringSecurity框架简介/同款产品对比SpringSecurity.png)

通过提供完整可扩展的认证和授权支持保护你的应用程序。 https://spring.io/projects/spring-security

SpringSecurity 特点： 

- 和 Spring 无缝整合。 
- 全面的权限控制。 
- 专门为 Web 开发而设计。 
  - 旧版本不能脱离 Web 环境使用。 
  - 新版本对整个框架进行了分层抽取，分成了核心模块和 Web 模块。单独 引入核心模块就可以脱离 Web 环境。 
- 重量级。

#### 1.3.2 Shiro

Apache 旗下的轻量级权限控制框架。

![](SpringSecurity学习笔记尚硅谷/SpringSecurity框架简介/同款产品对比Shiro.png)

特点： 

- 轻量级。Shiro 主张的理念是把复杂的事情变简单。针对对性能有更高要求 的互联网应用有更好表现。 

- 通用性。 
  - 好处：不局限于 Web 环境，可以脱离 Web 环境使用。 
  - 缺陷：在 Web 环境下一些特定的需求需要手动编写代码定制。

Spring Security 是 Spring 家族中的一个安全管理框架，实际上，在 Spring Boot 出现之 前，Spring Security 就已经发展了多年了，但是使用的并不多，安全管理这个领域，一直 是 Shiro 的天下。 

相对于 Shiro，在 SSM 中整合 Spring Security 都是比较麻烦的操作，所以，Spring  Security 虽然功能比 Shiro 强大，但是使用反而没有 Shiro 多（Shiro 虽然功能没有 Spring Security 多，但是对于大部分项目而言，Shiro 也够用了）。 

自从有了 Spring Boot 之后，Spring Boot 对于 Spring Security 提供了自动化配置方 案，可以使用更少的配置来使用 Spring Security。 

因此，一般来说，常见的安全管理技术栈的组合是这样的： 

- SSM + Shiro 
- Spring Boot/Spring Cloud + Spring Security 

以上只是一个推荐的组合而已，如果单纯从技术上来说，无论怎么组合，都是可以运行 的。

### 1.4 模块划分

![](SpringSecurity学习笔记尚硅谷/SpringSecurity框架简介/模块划分.png)

## 2、SpringSecurity 入门案例

### 2.1 创建一个项目

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/创建一个项目.png)

添加一个配置类：

```java
@Configuration
public class SecurityConfigextends WebSecurityConfigurerAdapter {
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.formLogin() // 表单登录
			.and()
        	.authorizeRequests() // 认证配置
			.anyRequest() // 任何请求
			.authenticated(); // 都需要身份验证
	}
}
```

### 2.2 运行这个项目

访问 localhost:8080

默认的用户名：user 密码在项目启动的时候在控制台会打印，注意每次启动的时候密码都回发生变化！

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/运行这个项目密码.png)

输入用户名，密码，这样表示可以访问了，404 表示我们没有这个控制器，但是我们可以 访问了。

### 2.3 权限管理中的相关概念

#### 2.3.1 主体

英文单词：principal 

使用系统的用户或设备或从其他系统远程登录的用户等等。简单说就是谁使用系 统谁就是主体。

#### 2.3.2 认证

英文单词：authentication 

权限管理系统确认一个主体的身份，允许主体进入系统。简单说就是“主体”证 明自己是谁。 

笼统的认为就是以前所做的登录操作。

#### 2.3.3 授权

英文单词：authorization 

将操作系统的“权力”“授予”“主体”，这样主体就具备了操作系统中特定功能的能力。 

所以简单来说，授权就是给用户分配权限。

### 2.4 添加一个控制器进行访问

```java
package com.atguigu.controller;
@Controller
public class IndexController {
    
    @GetMapping("index")
    @ResponseBody
    public String index(){
    	return "success";
    }
}
```

### 2.5 SpringSecurity 基本原理

SpringSecurity 本质是一个过滤器链： 

从启动是可以获取到过滤器链：

```java
org.springframework.security.web.context.request.async.WebAsyncManagerIntegrationFilter
org.springframework.security.web.context.SecurityContextPersistenceFilter 
org.springframework.security.web.header.HeaderWriterFilter
org.springframework.security.web.csrf.CsrfFilter
org.springframework.security.web.authentication.logout.LogoutFilter 
org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter 
org.springframework.security.web.authentication.ui.DefaultLoginPageGeneratingFilter 
org.springframework.security.web.authentication.ui.DefaultLogoutPageGeneratingFilter
org.springframework.security.web.savedrequest.RequestCacheAwareFilter
org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestFilter
org.springframework.security.web.authentication.AnonymousAuthenticationFilter 
org.springframework.security.web.session.SessionManagementFilter 
org.springframework.security.web.access.ExceptionTranslationFilter 
org.springframework.security.web.access.intercept.FilterSecurityInterceptor
```

代码底层流程：重点看三个过滤器： 

FilterSecurityInterceptor：是一个方法级的权限过滤器, 基本位于过滤链的最底部。

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/SpringSecurity基本原理1.png)

super.beforeInvocation(fi) 表示查看之前的 filter 是否通过。 

fi.getChain().doFilter(fi.getRequest(), fi.getResponse());表示真正的调用后台的服务。 

ExceptionTranslationFilter：是个异常过滤器，用来处理在认证授权过程中抛出的异常

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/SpringSecurity基本原理2.png)

UsernamePasswordAuthenticationFilter ：对/login 的 POST 请求做拦截，校验表单中用户 名，密码。

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/SpringSecurity基本原理3.png)

### 2.6 UserDetailsService 接口讲解

当什么也没有配置的时候，账号和密码是由 Spring Security 定义生成的。而在实际项目中 账号和密码都是从数据库中查询出来的。 所以我们要通过自定义逻辑控制认证逻辑。 

如果需要自定义逻辑时，只需要实现 UserDetailsService 接口即可。接口定义如下：

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/UserDetailsService接口讲解1.png)

- 返回值 UserDetails  

这个类是系统默认的用户“主体”

```java
// 表示获取登录用户所有权限
Collection<? extends GrantedAuthority> getAuthorities();
// 表示获取密码
String getPassword();
// 表示获取用户名
String getUsername();
// 表示判断账户是否过期
boolean isAccountNonExpired();
// 表示判断账户是否被锁定
boolean isAccountNonLocked();
// 表示凭证{密码}是否过期
boolean isCredentialsNonExpired();
// 表示当前用户是否可用
boolean isEnabled();
```

以下是 UserDetails 实现类

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/UserDetailsService接口讲解2.png)

以后我们只需要使用 User 这个实体类即可！

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/UserDetailsService接口讲解3.png)

- 方法参数 username 

表示用户名。此值是客户端表单传递过来的数据。默认情况下必须叫 username，否则无法接收。

### 2.7 PasswordEncoder 接口讲解

```java
// 表示把参数按照特定的解析规则进行解析
String encode(CharSequence rawPassword);
// 表示验证从存储中获取的编码密码与编码后提交的原始密码是否匹配。如果密码匹配，则返回 true；如果不匹配，则返回 false。第一个参数表示需要被解析的密码。第二个参数表示存储的密码。
boolean matches(CharSequence rawPassword, String encodedPassword);
// 表示如果解析的密码能够再次进行解析且达到更安全的结果则返回 true，否则返回false。默认返回 false。
default boolean upgradeEncoding(String encodedPassword) {
	return false;
}
```

接口实现类

![](SpringSecurity学习笔记尚硅谷/SpringSecurity入门案例/PasswordEncoder接口讲解.png)

BCryptPasswordEncoder 是 Spring Security 官方推荐的密码解析器，平时多使用这个解析器。 

BCryptPasswordEncoder 是对 bcrypt 强散列方法的具体实现。是基于 Hash 算法实现的单 向加密。可以通过 strength 控制加密强度，默认 10.

- 查用方法演示

```java
@Test
public void test01(){
    // 创建密码解析器
    BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
    // 对密码进行加密
    String atguigu = bCryptPasswordEncoder.encode("atguigu");
    // 打印加密之后的数据
    System.out.println("加密之后数据：\t"+atguigu);
    //判断原字符加密后和加密之前是否匹配
    boolean result = bCryptPasswordEncoder.matches("atguigu", atguigu);
    // 打印比较结果
    System.out.println("比较结果：\t"+result);
}
```

### 2.8 SpringBoot 对 Security 的自动配置

https://docs.spring.io/springsecurity/site/docs/5.3.4.RELEASE/reference/html5/#servlet-hello

## 3、SpringSecurity Web 权限方案

### 3.1 设置登录系统的账号、密码

方式一：在application.properties

```properties
spring.security.user.name=atguigu
spring.security.user.password=atguigu
```

方式二：编写类实现接口

```java
package com.atguigu.config;
@Configuration
public class SecurityConfig {
    // 注入 PasswordEncoder 类到 spring 容器中
    @Bean
    public PasswordEncoder passwordEncoder(){
    	return new BCryptPasswordEncoder();
    }
}


package com.atguigu.service;
@Service
public class LoginService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 判断用户名是否存在
        if (!"admin".equals(username)){
        	throw new UsernameNotFoundException("用户名不存在！");
        }
        // 从数据库中获取的密码 atguigu 的密文
        String pwd = "$2a$10$2R/M6iU3mCZt3ByG7kwYTeeW0w7/UqdeXrb27zkBIizBvAven0/na";
        // 第三个参数表示权限
        return new User(username,pwd,AuthorityUtils.commaSeparatedStringToAuthorityList("admin,"));
    }
}
```

### 3.2 实现数据库认证来完成用户登录

完成自定义登录

#### 3.2.1 准备sql

```sql
create table users(
    id bigint primary key auto_increment,
    username varchar(20) unique not null,
    password varchar(100)
);
-- 密码 atguigu
insert into users values(1,'张san','$2a$10$2R/M6iU3mCZt3ByG7kwYTeeW0w7/UqdeXrb27zkBIizBvAven0/na');
-- 密码 atguigu
insert into users values(2,'李si','$2a$10$2R/M6iU3mCZt3ByG7kwYTeeW0w7/UqdeXrb27zkBIizBvAven0/na');

create table role(
    id bigint primary key auto_increment,
    name varchar(20)
);
insert into role values(1,'管理员');
insert into role values(2,'普通用户');

create table role_user(
    uid bigint,
    rid bigint
);
insert into role_user values(1,1);
insert into role_user values(2,2);

create table menu(
    id bigint primary key auto_increment,
    name varchar(20),
    url varchar(100),
    parentid bigint,
    permission varchar(20)
);
insert into menu values(1,'系统管理','',0,'menu:system');
insert into menu values(2,'用户管理','',0,'menu:user');

create table role_menu(
    mid bigint,
    rid bigint
);
insert into role_menu values(1,1);
insert into role_menu values(2,1);
insert into role_menu values(2,2);
```



#### 3.2.2 添加依赖

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    
    <!--mybatis-plus-->
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.0.5</version>
    </dependency>
    
    <!--mysql-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
    </dependency>
    
    <!--lombok 用来简化实体类-->
	<dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
	</dependency>
</dependencies>
```

#### 3.2.3 制作实体类

```java
@Data
public class Users{
	private Integer id;
    private String username;
    private String password;
}
```

#### 3.2.4 整合MybatisPlus 制作 mapper

```java
@Repository
public interface UsersMapper extends BaseMapper<Users> {
}

配置文件添加数据库配置 
#mysql 数据库连接
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/spring_security?serverTimezone=GMT%2B8&characterEncoding=utf-8&userSSL=false
spring.datasource.username=root
spring.datasource.password=root
```

#### 3.2.5 制作登录实现类

```java
@Service("userDetailsService")
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UsersMapper usersMapper;
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        QueryWrapper<Users> wrapper = new QueryWrapper();
        wrapper.eq("username",s);
        Users users = usersMapper.selectOne(wrapper);
        if(users == null) {
            throw new UsernameNotFoundException("用户名不存在！");
        }
        System.out.println(users);
        List<GrantedAuthority> auths = AuthorityUtils.commaSeparatedStringToAuthorityList("role");
        return new User(users.getUsername(), new BCryptPasswordEncoder().encode(users.getPassword()),auths);
    }
}
```

#### 3.2.6 测试访问

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/测试访问.png)

输入用户名，密码

### 3.3 未认证请求跳转到登录页

#### 3.3.1 引入前端模板依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

#### 3.3.2 引入登录页面

将准备好的登录页面导入项目中

#### 3.3.3 编写控制器

```java
@Controller
public class IndexController {
    @GetMapping("index")
    public String index(){
        return "login";
    }
    
    @GetMapping("findAll")
    @ResponseBody
    public String findAll(){
        return "findAll";
    }
}
```

#### 3.3.4 编写配置类放行登录页面以及静态资源

```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // 注入 PasswordEncoder 类到 spring 容器中
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .antMatchers("/layui/**","/index") //表示配置请求路径
            .permitAll() // 指定 URL 无需保护。
            .anyRequest() // 其他请求
            .authenticated(); //需要认证
    }
}
```

#### 3.3.5 测试

访问 localhost:8090/index

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/未认证请求跳转至登录页面测试.png)

访问 localhost:8090/findAll 会提示 403 错误 表示没有这个权限。

#### 3.3.6 设置未授权的请求跳转到登录页

```java
配置类
@Override
protected void configure(HttpSecurity http) throws Exception {
    // 配置认证
    http.formLogin()
        .loginPage("/index") // 配置哪个 url 为登录页面
        .loginProcessingUrl("/login") // 设置哪个是登录的 url。
        .successForwardUrl("/success") // 登录成功之后跳转到哪个 url
        .failureForwardUrl("/fail");// 登录失败之后跳转到哪个 url
    http.authorizeRequests()
        .antMatchers("/layui/**","/index") //表示配置请求路径
        .permitAll() // 指定 URL 无需保护。
        .anyRequest() // 其他请求
        .authenticated(); //需要认证
    // 关闭 csrf
    http.csrf().disable();
}


控制器
@PostMapping("/success")
public String success(){
    return "success";
}
@PostMapping("/fail")
public String fail(){
    return "fail";
}


<form action="/login"method="post">
    用户名:<input type="text"name="username"/><br/>
    密码：<input type="password"name="password"/><br/>
    <input type="submit"value="提交"/>
</form>
```

注意：页面提交方式必须为 post 请求，所以上面的页面不能使用，用户名，密码必须为 username,password 

原因： 在执行登录的时候会走一个过滤器 UsernamePasswordAuthenticationFilter

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/设置未认证请求跳转至登录页1.png)

如果修改配置可以调用 usernameParameter()和 passwordParameter()方法。

```html
<form action="/login"method="post">
    用户名:<input type="text"name="loginAcct"/><br/>
    密码：<input type="password"name="userPswd"/><br/>
    <input type="submit"value="提交"/>
</form>
```

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/设置未认证请求跳转至登录页2.png)

### 3.4 基于角色或权限进行访问控制

#### 3.4.1 hasAuthority 方法

如果当前的主体具有指定的权限，则返回 true,否则返回 false

- 修改配置类

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasAuthority修改配置类.png)

- 添加一个控制器

```java
@GetMapping("/find")
@ResponseBody
public String find(){
	return "find";
}
```

- 给用户登录主体赋予权限

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasAuthority给用户登录主体赋予权限.png)

- 测试：

http://localhost:8090/findAll 访问 findAll 进入登录页面

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasAuthority测试.png)

认证完成之后返回登录成功

#### 3.4.2 hasAnyAuthority 方法

如果当前的主体有任何提供的角色（给定的作为一个逗号分隔的字符串列表）的话，返回 true. 

访问 http://localhost:8090/find

#### 3.4.3 hasRole 方法

如果用户具备给定角色就允许访问,否则出现 403。 

如果当前主体具有指定的角色，则返回 true。 

底层源码：

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasRole底层源码.png)

给用户添加角色：

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasRole给用户添加角色.png)

修改配置文件： 

注意配置文件中不需要添加”ROLE_“，因为上述的底层代码会自动添加与之进行匹配。

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasRole修改配置文件.png)

#### 3.4.4 hasAnyRole

表示用户具备任何一个条件都可以访问。 

给用户添加角色：

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasAnyRole给用户添加角色.png)

修改配置文件：

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/hasAnyRole修改配置文件.png)

### 3.5 基于数据库实现权限认证

#### 3.5.1 添加实体类

```java
@Data
public class Menu {
    private Long id;
    private String name;
    private String url;
    private Long parentId;
    private String permission;
}

@Data
public class Role {
    private Long id;
    private String name;
}
```

#### 3.5.2 编写接口与实现类

UserInfoMapper

```java
/**
* 根据用户 Id 查询用户角色
* @param userId
* @return
*/
List<Role> selectRoleByUserId(Long userId);
/**
* 根据用户 Id 查询菜单
* @param userId
* @return
*/
List<Menu> selectMenuByUserId(Long userId);

上述接口需要进行多表管理查询：
需要在 resource/mapper 目录下自定义 UserInfoMapper.xml 
<?xml version="1.0"encoding="utf-8"?>
<!DOCTYPEmapperPUBLIC"-//mybatis.org//DTD Mapper 3.0//EN""http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.atguigu.mapper.UserInfoMapper">
    <!--根据用户 Id 查询角色信息-->
    <select id="selectRoleByUserId"resultType="com.atguigu.bean.Role">
        SELECT r.id,r.name FROM role r INNER JOIN role_user ru ON ru.rid=r.id where ru.uid=#{0}
    </select>
    <!--根据用户 Id 查询权限信息-->
    <select id="selectMenuByUserId"resultType="com.atguigu.bean.Menu">
        SELECT m.id,m.name,m.url,m.parentid,m.permission FROM menu m
        INNER JOIN role_menu rm ON m.id=rm.mid
        INNER JOIN role r ON r.id=rm.rid
        INNER JOIN role_user ru ON r.id=ru.rid
        WHERE ru.uid=#{0}
    </select>
</mapper>
```

UsersServiceImpl

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/基于数据库实现权限认证编写接口与实现类.png)

#### 3.5.3 在配置文件中添加映射

在配置文件中 application.yml 添加

```yaml
mybatis:
	mapper-locations: classpath:mapper/*.xml
```

#### 3.5.4 修改访问配置类

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/基于数据库实现权限认证修改访问配置类.png)

#### 3.5.5 使用管理员与非管理员进行测试

如果非管理员测试会提示 403 没有权限

### 3.6 自定义403页面

#### 3.6.1 修改访问配置类

```java
http.exceptionHandling().accessDeniedPage("/unauth");
```

#### 3.6.2 添加对应控制器

```java
@GetMapping("/unauth")
public String accessDenyPage(){
	return "unauth";
}


unauth.html
<body>
	<h1>对不起，您没有访问权限！</h1>
</body>
```

#### 3.6.3 测试

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/自定义403页面测试.png)

### 3.7 注解使用

#### 3.7.1 @Secured

判断是否具有角色，另外需要注意的是这里匹配的字符串需要添加前缀“ROLE_“。 使用注解先要开启注解功能！ 

@EnableGlobalMethodSecurity(securedEnabled=true)

```java
@SpringBootApplication
@EnableGlobalMethodSecurity(securedEnabled=true)
public class DemosecurityApplication {
    public static void main(String[] args) {
		SpringApplication.run(DemosecurityApplication.class, args);
    }
}
```

在控制器方法上添加注解

```java
// 测试注解：
@RequestMapping("testSecured")
@ResponseBody
@Secured({"ROLE_normal","ROLE_admin"})
public String helloUser() {
	return "hello,user";
}
@Secured({"ROLE_normal","ROLE_管理员"})
```

登录之后直接访问：http://localhost:8090/testSecured 控制器 

将上述的角色改为 @Secured({"ROLE_normal","ROLE_管理员"})即可访问

#### 3.7.2 @PreAuthorize

先开启注解功能： 

@EnableGlobalMethodSecurity(prePostEnabled = true) 

@PreAuthorize：注解适合进入方法前的权限验证， @PreAuthorize 可以将登录用 户的 roles/permissions 参数传到方法中。

```java
@RequestMapping("/preAuthorize")
@ResponseBody
//@PreAuthorize("hasRole('ROLE_管理员')")
@PreAuthorize("hasAnyAuthority('menu:system')")
public String preAuthorize(){
    System.out.println("preAuthorize");
    return "preAuthorize";
}
```

使用李四登录测试：

#### 3.7.3 @PostAuthorize

先开启注解功能： 

@EnableGlobalMethodSecurity(prePostEnabled = true) 

@PostAuthorize 注解使用并不多，在方法执行后再进行权限验证，适合验证带有返回值 的权限.

```java
@RequestMapping("/testPostAuthorize")
@ResponseBody
@PostAuthorize("hasAnyAuthority('menu:system')")
public String preAuthorize(){
    System.out.println("test--PostAuthorize");
    return "PostAuthorize";
}
```

使用李四登录测试：

#### 3.7.4 @PostFilter

@PostFilter ：权限验证之后对数据进行过滤 留下用户名是 admin1 的数据 

表达式中的 filterObject 引用的是方法返回值 List 中的某一个元素

```java
@RequestMapping("getAll")
@PreAuthorize("hasRole('ROLE_管理员')")
@PostFilter("filterObject.username == 'admin1'")
@ResponseBody
public List<UserInfo> getAllUser(){
    ArrayList<UserInfo> list = new ArrayList<>();
    list.add(new UserInfo(1l,"admin1","6666"));
    list.add(new UserInfo(2l,"admin2","888"));
    return list;
}
```

#### 3.7.5 @PreFilter

@PreFilter: 进入控制器之前对数据进行过滤

```java
@RequestMapping("getTestPreFilter")
@PreAuthorize("hasRole('ROLE_管理员')")
@PreFilter(value = "filterObject.id%2==0")
@ResponseBody
public List<UserInfo> getTestPreFilter(@RequestBody List<UserInfo> list){
    list.forEach(t-> {
        System.out.println(t.getId()+"\t"+t.getUsername());
    });
    return list;
}
```

先登录，然后使用 postman 进行测试

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/注解使用@PreFilter测试1.png)

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/注解使用@PreFilter测试2.png)

测试的 Json 数据：

```json
[
    {
        "id": "1",
        "username": "admin",
        "password": "666"
    },
    {
        "id": "2",
        "username": "admins",
        "password": "888"
    },
    {
        "id": "3",
        "username": "admins11",
        "password": "11888"
    },
    {
        "id": "4",
        "username": "admins22",
        "password": "22888"
    }
]
```

#### 3.7.6 权限表达式

https://docs.spring.io/springsecurity/site/docs/5.3.4.RELEASE/reference/html5/#el-access

### 3.8 基于数据库的记住我

#### 3.8.1 创建表

```sql
CREATE TABLE `persistent_logins` (
    `username` varchar(64) NOT NULL,
    `series` varchar(64) NOT NULL,
    `token` varchar(64) NOT NULL,
    `last_used` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE 
    CURRENT_TIMESTAMP,
    PRIMARY KEY (`series`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

#### 3.8.2 添加数据库的配置文件

```yaml
spring:
datasource:
driver-class-name: com.mysql.jdbc.Driver
url: jdbc:mysql://192.168.200.128:3306/test
username: root
password: root
```

#### 3.8.3 编写配置类

创建配置类

```java
@Configuration
public class BrowserSecurityConfig {
    @Autowired
    private DataSource dataSource;
    @Bean
    public PersistentTokenRepository persistentTokenRepository(){
        JdbcTokenRepositoryImpl jdbcTokenRepository = new JdbcTokenRepositoryImpl();
        // 赋值数据源
        jdbcTokenRepository.setDataSource(dataSource);
        // 自动创建表,第一次执行会创建，以后要执行就要删除掉！
        jdbcTokenRepository.setCreateTableOnStartup(true);
        return jdbcTokenRepository;
    }
}
```

#### 3.8.4 修改安全配置类

```java
@Autowired
private UsersServiceImpl usersService;
@Autowired
private PersistentTokenRepository tokenRepository;
// 开启记住我功能
http.rememberMe()
    .tokenRepository(tokenRepository)
    .userDetailsService(usersService);
```

#### 3.8.5 页面添加记住我复选框

```html
记住我：<input type="checkbox"name="remember-me"title="记住密码"/><br/>
```

此处：name 属性值必须位 remember-me.不能改为其他值

#### 3.8.6 使用张三进行登录测试

登录成功之后，关闭浏览器再次访问 http://localhost:8090/find，发现依然可以使用！

#### 3.8.7 设置有效期

默认 2 周时间。但是可以通过设置状态有效时间，即使项目重新启动下次也可以正常登录。 

在配置文件中设置

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/基于数据库的记住我设置有效期.png)

### 3.9 用户注销

#### 3.9.1 在登录页面添加一个退出连接

success.html

```html
<body>
    登录成功<br>
    <a href="/logout">退出</a>
</body>
```

#### 3.9.2 在配置类中添加退出映射地址

```java
http.logout().logoutUrl("/logout").logoutSuccessUrl("/index").permitAll();
```

#### 3.9.3 测试

退出之后，是无法访问需要登录时才能访问的控制器！

### 3.10 CSRF

#### 3.10.1 CSRF 理解

跨站请求伪造（英语：Cross-site request forgery），也被称为 one-click  attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已 登录的 Web 应用程序上执行非本意的操作的攻击方法。跟跨网站脚本（XSS）相比，XSS 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。 

跨站请求攻击，简单地说，是攻击者通过一些技术手段欺骗用户的浏览器去访问一个 自己曾经认证过的网站并运行一些操作（如发邮件，发消息，甚至财产操作如转账和购买 商品）。由于浏览器曾经认证过，所以被访问的网站会认为是真正的用户操作而去运行。 这利用了 web 中用户身份验证的一个漏洞：简单的身份验证只能保证请求发自某个用户的 浏览器，却不能保证请求本身是用户自愿发出的。 

从 Spring Security 4.0 开始，默认情况下会启用 CSRF 保护，以防止 CSRF 攻击应用 程序，Spring Security CSRF 会针对 PATCH，POST，PUT 和 DELETE 方法进行防护。

#### 3.10.2 案例

在登录页面添加一个隐藏域：

```html
<input type="hidden"th:if="${_csrf}!=null"th:value="${_csrf.token}"name="_csrf"/>
```

关闭安全配置的类中的 csrf

```java
// http.csrf().disable();
```

#### 3.10.3 Spring Security 实现 CSRF 的原理：

1. 生成 csrfToken 保存到 HttpSession 或者 Cookie 中。

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/CSRF中SpringSecurity实现CSRF的原理1.png)

SaveOnAccessCsrfToken 类有个接口 CsrfTokenRepository

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/CSRF中SpringSecurity实现CSRF的原理2.png)

当前接口实现类：HttpSessionCsrfTokenRepository，CookieCsrfTokenRepository

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/CSRF中SpringSecurity实现CSRF的原理3.png)

2. 请求到来时，从请求中提取 csrfToken，和保存的 csrfToken 做比较，进而判断当 前请求是否合法。主要通过 CsrfFilter 过滤器来完成。

![](SpringSecurity学习笔记尚硅谷/SpringSecurityWeb权限方案/CSRF中SpringSecurity实现CSRF的原理4.png)

## 4、SpringSecurity 微服务权限方案

### 4.1

### 4.2

### 4.3

### 4.4

## 5、SpringSecurity 原理总结

### 5.1 

### 5.2

### 5.3

### 5.4

### 5.5