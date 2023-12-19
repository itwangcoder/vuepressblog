---
title: Dubbo学习笔记尚硅谷
description: Dubbo学习笔记尚硅谷
author: itwangcoder
date: '2023-12-19'
categories:
 - Java
tags:
 - 尚硅谷
 - Dubbo
 - 中间件
---

## 一、基础知识

### 1、分布式基础理论

#### 1.1 什么是分布式系统

《分布式系统原理与范型》定义：“分布式系统是若干独立计算机的集合，这些计算机对于用户来说就像单个相关系统”

分布式系统（distributed system）是建立在网络之上的软件系统。

随着互联网的发展，网站应用的规模不断扩大，常规的垂直应用架构已无法应对，分布式服务架构以及流动计算架构势在必行，亟需**一个治理系统**确保架构有条不紊的演进。

#### 1.2 发展演变

![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论发展演变.png)

- 单一应用架构

  当网站流量很小时，只需一个应用，将所有功能都部署在一起，以减少部署节点和成本。此时，用于简化增删改查工作量的数据访问框架(ORM)是关键。

  ![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论发展演变单一应用架构.png)

  > 适用于小型网站，小型管理系统，将所有功能都部署到一个功能里，简单易用。
  >
  > 缺点： 
  >
  > 1. 性能扩展比较难
  > 2. 协同开发问题
  > 3. 不利于升级维护

- 垂直应用架构

  当访问量逐渐增大，单一应用增加机器带来的加速度越来越小，将应用拆成互不相干的几个应用，以提升效率。此时，用于加速前端页面开发的Web框架(MVC)是关键。

  ![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论发展演变垂直应用架构.png)

  > 通过切分业务来实现各个模块独立部署，降低了维护和部署的难度，团队各司其职更易管理，性能扩展也更方便，更有针对性。
  >
  > 缺点： 公用模块无法重复利用，开发性的浪费

- 分布式服务架构

  当垂直应用越来越多，应用之间交互不可避免，将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，使前端应用能更快速的响应多变的市场需求。此时，用于提高业务复用及整合的**分布式服务框架****(RPC)**是关键。

  ![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论发展演变分布式服务架构.png)

- 流动计算架构

  当服务越来越多，容量的评估，小服务资源的浪费等问题逐渐显现，此时需增加一个调度中心基于访问压力实时管理集群容量，提高集群利用率。此时，用于**提高机器利用率的资源调度和治理中心(SOA)[ Service Oriented Architecture]是关键**。

  ![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论发展演变流动计算架构.png)

#### 1.3 RPC

1. 什么叫 RPC

   **RPC【Remote Procedure Call】**是指远程过程调用，是一种进程间通信方式，他是一种技术的思想，而不是规范。它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。即程序员无论是调用本地的还是远程的函数，本质上编写的调用代码基本相同。

2. RPC 基本原理

   ![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论RPC基本原理1.png)

   ![](Dubbo学习笔记尚硅谷/基础知识/分布式基础理论RPC基本原理2.png)

   RPC两个核心模块：通讯，序列化。

### 2、Dubbo 核心概念

#### 2.1 简介

Apache Dubbo (incubating) |ˈdʌbəʊ| 是一款高性能、轻量级的开源Java RPC框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。

官网：http://dubbo.apache.org/

#### 2.2 基本概念

![](Dubbo学习笔记尚硅谷/基础知识/Dubbo核心概念基本概念.png)  

> - **服务提供者（Provider)**：暴露服务的服务提供方，服务提供者在启动时，向注册中心注册自己提供的服务。
> - **服务消费者（Consumer）**: 调用远程服务的服务消费方，服务消费者在启动时，向注册中心订阅自己所需的服务，服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。
> - **注册中心（Registry）**：注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者
> - **监控中心（Monitor）**：服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心

- 调用关系说明
  - 服务容器负责启动，加载，运行服务提供者。
  - 服务提供者在启动时，向注册中心注册自己提供的服务。
  - 服务消费者在启动时，向注册中心订阅自己所需的服务。
  - 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。
  - 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。
  - 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。

### 3、Dubbo 环境搭建

#### 3.1 【Windows】- 安装 Zookeeper

1. 下载zookeeper 

   网址 https://archive.apache.org/dist/zookeeper/zookeeper-3.5.7/ 

2. 解压zookeeper

   解压运行zkServer.cmd ，初次运行会报错，没有 zoo.cfg 配置文件

3. 修改 zoo.cfg 配置文件

   将 conf 下的 zoo_sample.cfg 复制一份改名为 zoo.cfg 即可。  

   > 注意几个重要位置：  dataDir=./  临时数据存储的目录（可写相对路径）  clientPort=2181  zookeeper的端口号  修改完成后再次启动zookeeper 

4. 使用zkCli.cmd测试  ls /：列出zookeeper根下保存的所有节点  create –e /atguigu 123：创建一个atguigu节点，值为123  get /atguigu：获取/atguigu节点的值

#### 3.2 【Windows】- 安装 Dubbo-admin 管理控制台

dubbo本身并不是一个服务软件。它其实就是一个jar包能够帮你的java程序连接到zookeeper，并利用zookeeper消费、提供服务。所以你不用在Linux上启动什么dubbo服务。

但是为了让用户更好的管理监控众多的dubbo服务，官方提供了一个可视化的监控程序，不过这个监控即使不装也不影响使用。

1. 下载dubbo-admin

   https://github.com/apache/incubator-dubbo-ops

2. 进入目录，修改dubbo-admin配置

   修改 src\main\resources\application.properties 指定zookeeper地址

3. 打包 dubbo-admin

   ``` cmd
   mvn clean package -Dmaven.test.skip=true`
   ```

4. 运行 dubbo-admin

   ```cmd
   java -jar dubbo-admin-0.0.1-SNAPSHOT.jar
   ```

   > **注意：【有可能控制台看着启动了，但是网页打不开，需要在控制台按下ctrl+c即可】**
   >
   > 访问地址为 localhost:7001
   >
   > **运行时的java版本必须为 java8，否则会报错**
   >
   > 默认使用root/root 登陆

#### 3.3 【Linux】- 安装Linux Zookeeper

#### 3.4 【Linux】- 安装 Dubbo-admin 管理控制台

### 4、Dubbo - HelloWorld

#### 4.1 提出需求

某个电商系统，订单服务需要调用用户服务获取某个用户的所有地址；

我们现在 需要创建两个服务模块进行测试 

| 模块                | 功能           |
| ------------------- | -------------- |
| 订单服务web模块     | 创建订单等     |
| 用户服务service模块 | 查询用户地址等 |

测试预期结果：订单服务web模块在A服务器，用户服务模块在B服务器，A可以远程调用B的功能。

#### 4.2 工程架构

根据 dubbo《服务化最佳实践》

1. 分包

   建议将服务接口，服务模型，服务异常等均放在 API 包中，因为服务模型及异常也是 API 的一部分，同时，这样做也符合分包原则：重用发布等价原则(REP)，共同重用原则(CRP)。

   如果需要，也可以考虑在 API 包中放置一份 spring 的引用配置，这样使用方，只需在 spring 加载过程中引用此配置即可，配置建议放在模块的包目录下，以免冲突，如：com/alibaba/china/xxx/dubbo-reference.xml。

2. 粒度

   服务接口尽可能大粒度，每个服务方法应代表一个功能，而不是某功能的一个步骤，否则将面临分布式事务问题，Dubbo 暂未提供分布式事务支持。

   服务接口建议以业务场景为单位划分，并对相近业务做抽象，防止接口数量爆炸。

   不建议使用过于抽象的通用接口，如：Map query(Map)，这样的接口没有明确语义，会给后期维护带来不便。

   ![](Dubbo学习笔记尚硅谷/基础知识/dubbohelloworld工程架构.png)

#### 4.3 创建模块

1. gmall-interface：公共接口层（model，service，exception…）

   作用：定义公共接口，也可以导入公共依赖

   1. Bean模型

      ``` java
      public class UserAddress implements Serializable {
          private Integer id;
          private String userAddress; //用户地址
          private String userId; //用户id
          private String consignee; //收货人
          private String phoneNum; //电话号码
          private String isDefault; //是否为默认地址    Y-是     N-否
      
          public UserAddress() {
              super();
              // TODO Auto-generated constructor stub
          }
      
          public UserAddress(Integer id, String userAddress, String userId, String consignee, String phoneNum,
                             String isDefault) {
              super();
              this.id = id;
              this.userAddress = userAddress;
              this.userId = userId;
              this.consignee = consignee;
              this.phoneNum = phoneNum;
              this.isDefault = isDefault;
          }
      
          public Integer getId() {
              return id;
          }
          public void setId(Integer id) {
              this.id = id;
          }
          public String getUserAddress() {
              return userAddress;
          }
          public void setUserAddress(String userAddress) {
              this.userAddress = userAddress;
          }
          public String getUserId() {
              return userId;
          }
          public void setUserId(String userId) {
              this.userId = userId;
          }
          public String getConsignee() {
              return consignee;
          }
          public void setConsignee(String consignee) {
              this.consignee = consignee;
          }
          public String getPhoneNum() {
              return phoneNum;
          }
          public void setPhoneNum(String phoneNum) {
              this.phoneNum = phoneNum;
          }
          public String getIsDefault() {
              return isDefault;
          }
          public void setIsDefault(String isDefault) {
              this.isDefault = isDefault;
          }
      }

   2. Service接口

      ```java
      /**
       * @author 汪重阳
       * @version 1.0
       * 用户服务
       */
      public interface UserService {
          /**
           * 按照用户id返回所有的收货地址
           *
           * @param userId
           * @return
           */
          public List<UserAddress> getUserAddressList(String userId);
      }
      ```

      ```java
      public interface OrderService {
          /**
           * 初始化订单
           * @param userId
           */
          public List<UserAddress> initOrder(String userId);
      }

2. user-service-provider：用户模块（对用户接口的实现）

   1. pom.xml

      ``` xml
      <dependencies>
          <dependency>
              <groupId>com.atguigu.gmall</groupId>
              <artifactId>gmall-interface</artifactId>
              <version>1.0-SNAPSHOT</version>
          </dependency>
      </dependencies>

   2. Service

      ``` java
      public class UserServiceImpl implements UserService {
      
          @Override
          public List<UserAddress> getUserAddressList(String userId) {
              return null;
          }
      }

3. order-service-consumer：订单模块（调用用户模块）

   1. pom.xml

      ``` xml
      <dependencies>
          <dependency>
              <groupId>com.atguigu.gmall</groupId>
              <artifactId>gmall-interface</artifactId>
              <version>1.0-SNAPSHOT</version>
          </dependency>
      </dependencies>

   2. Service

      ``` java
      public class OrderServiceImpl implements OrderService {
      
          UserService userService;
      
          @Override
          public List<UserAddress> initOrder(String userId) {
              //1、查询用户的收货地址
              List<UserAddress> addressList = userService.getUserAddressList(userId);
              return addressList;
          }
      }
      ```

      现在这样是无法进行调用的。我们 order-service-consumer 引入了gmall-interface，但是interface的实现是user-service-provider，我们并没有引入，而且实际他可能还在别的服务器中。

#### 4.4 使用 Dubbo 改造

1. 改造 user-service-provider 作为服务提供者

   1. 引入 dubbo，更改 pom.xml 文件

      ``` xml
      <dependencies>
          <dependency>
              <groupId>com.atguigu.gmall</groupId>
              <artifactId>gmall-interface</artifactId>
              <version>1.0-SNAPSHOT</version>
          </dependency>
      
          <!-- 引入dubbo -->
          <dependency>
              <groupId>com.alibaba</groupId>
              <artifactId>dubbo</artifactId>
              <version>2.6.2</version>
          </dependency>
          <!-- 由于我们使用zookeeper作为注册中心，所以需要操作zookeeper
              dubbo 2.6以前的版本引入zkclient操作zookeeper 
              dubbo 2.6及以后的版本引入curator操作zookeeper
              下面两个zk客户端根据dubbo版本2选1即可
          -->
          <dependency>
              <groupId>com.101tec</groupId>
              <artifactId>zkclient</artifactId>
              <version>0.10</version>
          </dependency>
          <!-- curator-framework -->
          <dependency>
              <groupId>org.apache.curator</groupId>
              <artifactId>curator-framework</artifactId>
              <version>2.12.0</version>
          </dependency>
      </dependencies>

   2. 配置提供者

      资源文件夹 resources 中创建 provider.xml 配置文件

      ``` xml
      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xmlns:dubbo="http://code.alibabatech.com/schema/dubbo"
             xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
      		http://dubbo.apache.org/schema/dubbo http://dubbo.apache.org/schema/dubbo/dubbo.xsd
      		http://code.alibabatech.com/schema/dubbo http://code.alibabatech.com/schema/dubbo/dubbo.xsd">
      
          <!-- 1、指定当前服务/应用的名字（同样的服务名字相同，不要和别的服务同名） -->
          <dubbo:application name="user-service-provider"></dubbo:application>
      
          <!-- 2、指定注册中心的位置/地址 -->
          <!-- <dubbo:registry address="zookeeper://127.0.0.1:2181"></dubbo:registry> -->
          <dubbo:registry protocol="zookeeper" address="127.0.0.1:2181"></dubbo:registry>
      
          <!-- 3、指定通信规则（通信协议？通信端口） -->
          <dubbo:protocol name="dubbo" port="20880"></dubbo:protocol>
      
          <!-- 4、暴露服务   ref：指向服务的真正的实现对象 -->
          <dubbo:service interface="com.atguigu.gmall.service.UserService" ref="userServiceImpl"></dubbo:service>
      
          <!-- 服务的实现 -->
          <bean id="userServiceImpl" class="com.atguigu.gmall.service.Impl.UserServiceImpl"></bean>
      </beans>

   3. 更改 Service 实现类

      ``` java
      public class UserServiceImpl implements UserService {
      
          @Override
          public List<UserAddress> getUserAddressList(String userId) {
              UserAddress address1 = new UserAddress(1, "北京市昌平区宏福科技园综合楼3层", "1", "李老师", "010-56253825", "Y");
              UserAddress address2 = new UserAddress(2, "深圳市宝安区西部硅谷大厦B座3层（深圳分校）", "1", "王老师", "010-56253825", "N");
              return Arrays.asList(address1, address2);
          }
      }

   4. 启动服务

      创建主启动类

      ``` java
      public class MainApplication {
          public static void main(String[] args) throws IOException {
              ClassPathXmlApplicationContext ioc = new ClassPathXmlApplicationContext("provider.xml");
              ioc.start();
      
              System.in.read();
          }
      }

2. 改造 order-service-consumer 作为服务消费者

   1. 引入 dubbo，更改 pom.xml 配置文件

      ``` xml
      <dependencies>
          <dependency>
              <groupId>com.atguigu.gmall</groupId>
              <artifactId>gmall-interface</artifactId>
              <version>1.0-SNAPSHOT</version>
          </dependency>
      
          <!-- 引入dubbo -->
          <dependency>
              <groupId>com.alibaba</groupId>
              <artifactId>dubbo</artifactId>
              <version>2.6.2</version>
          </dependency>
          <!-- 由于我们使用zookeeper作为注册中心，所以需要引入zkclient和curator操作zookeeper -->
          <dependency>
              <groupId>com.101tec</groupId>
              <artifactId>zkclient</artifactId>
              <version>0.10</version>
          </dependency>
          <!-- curator-framework -->
          <dependency>
              <groupId>org.apache.curator</groupId>
              <artifactId>curator-framework</artifactId>
              <version>2.12.0</version>
          </dependency>
      </dependencies>

   2. 配置消费者信息

      资源文件夹 resources 中创建 consumer.xml 配置文件

      ``` xml
      <?xml version="1.0" encoding="UTF-8"?>
      <beans xmlns="http://www.springframework.org/schema/beans"
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xmlns:dubbo="http://dubbo.apache.org/schema/dubbo"
             xmlns:context="http://www.springframework.org/schema/context"
             xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
      		http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.3.xsd
      		http://dubbo.apache.org/schema/dubbo http://dubbo.apache.org/schema/dubbo/dubbo.xsd
      		http://code.alibabatech.com/schema/dubbo http://code.alibabatech.com/schema/dubbo/dubbo.xsd">
          <!-- 启动注解扫描 -->
          <context:component-scan base-package="com.atguigu.gmall.service.Impl"></context:component-scan>
      
          <!-- 应用名 -->
          <dubbo:application name="order-service-consumer"></dubbo:application>
      
          <!-- 指定注册中心地址 -->
          <dubbo:registry address="zookeeper://127.0.0.1:2181"></dubbo:registry>
          
          <!--声明需要调用的远程服务的接口；生成远程服务代理  -->
          <dubbo:reference interface="com.atguigu.gmall.service.UserService" id="userService"></dubbo:reference>
      </beans>
      ```

   3. 更改 Service 实现类

      ``` java
      /**
       * @author 汪重阳
       * @version 1.0
       * 1、将服务提供者注册到注册中心（暴露服务）
       *      1）、导入dubbo依赖（2.6.2）\操作zookeeper的客户端(curator)
       *      2）、配置服务提供者
       * <p>
       * 2、让服务消费者去注册中心订阅服务提供者的服务地址
       */
      @Service
      public class OrderServiceImpl implements OrderService {
      
          @Autowired
          UserService userService;
      
          @Override
          public List<UserAddress> initOrder(String userId) {
              System.out.println("用户id：" + userId);
              //1、查询用户的收货地址
              List<UserAddress> addressList = userService.getUserAddressList(userId);
              for (UserAddress userAddress : addressList) {
                  System.out.println(userAddress.getUserAddress());
              }
              return addressList;
          }
      }

   4. 启动类

      ``` java
      public class MainApplication {
          @SuppressWarnings("resource")
          public static void main(String[] args) throws IOException {
              ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("consumer.xml");
      
              OrderService orderService = applicationContext.getBean(OrderService.class);
      
              orderService.initOrder("1");
              System.out.println("调用完成......");
              System.in.read();
          }
      }

3. 测试调用

   访问 order-service-consumer 的initOrder请求，会调用UserService获取用户地址；

   调用成功。说明我们order已经可以调用远程的UserService了；

4. 注解版

   1. 服务提供方

      ```
      <dubbo:application name="gmall-user"></dubbo:application>
          <dubbo:registry address="zookeeper://118.24.44.169:2181" />
          <dubbo:protocol name="dubbo" port="20880" />
      <dubbo:annotation package="com.atguigu.gmall.user.impl"/>
      import com.alibaba.dubbo.config.annotation.Service;
      import com.atguigu.gmall.bean.UserAddress;
      import com.atguigu.gmall.service.UserService;
      import com.atguigu.gmall.user.mapper.UserAddressMapper;
      
      @Service //使用dubbo提供的service注解，注册暴露服务
      public class UserServiceImpl implements UserService {
      
      	@Autowired
      	UserAddressMapper userAddressMapper;

   2. 服务消费方

      ```
      <dubbo:application name="gmall-order-web"></dubbo:application>
      <dubbo:registry address="zookeeper://118.24.44.169:2181" />
      <dubbo:annotation package="com.atguigu.gmall.order.controller"/>
      
      @Controller
      public class OrderController {
      	
      	@Reference  //使用dubbo提供的reference注解引用远程服务
      	UserService userService;

### 5、监控中心

#### 5.1 Dubbo-admin

图形化的服务管理页面；安装时需要指定注册中心地址，即可从注册中心中获取到所有的提供者/消费者进行配置管理

#### 5.2 Dubbo-monitor-simple

简单的监控中心；

1. 安装

   1. 下载 dubbo-ops

      https://github.com/apache/incubator-dubbo-ops

   2. 修改配置指定注册中心地址

      进入 dubbo-monitor-simple\src\main\resources\conf

      修改 dubbo.properties文件

      ![](Dubbo学习笔记尚硅谷/基础知识/监控中心dubbomonitorsimple安装修改配置指定注册中心地址.png)

   3. 打包 dubbo-monitor-simple

      ``` cmd
      mvn clean package -Dmaven.test.skip=true

   4. 解压 tar.gz 文件，并运行 start.bat

   5. 启动访问 8080

2. 监控中心配置

   所有服务配置连接监控中心，进行监控统计

   ``` xml
   <!-- 连接监控中心 -->
   <dubbo:monitor protocol="registry"></dubbo:monitor>
   <!--<dubbo:monitor address="127.0.0.1:7070"></dubbo:monitor>-->
   ```

   Simple Monitor 挂掉不会影响到 Consumer 和 Provider 之间的调用，所以用于生产环境不会有风险。

   Simple Monitor 采用磁盘存储统计信息，请注意安装机器的磁盘限制，如果要集群，建议用mount共享磁盘。

### 6、整合 SpringBoot

1. 创建项目 boot-user-service-provider

   1. 配置 pom.xml 文件

      ``` xml
      <dependencies>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter</artifactId>
              <version>2.7.10</version>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.10</version>
          </dependency>
      
          <dependency>
              <groupId>com.atguigu.gmall</groupId>
              <artifactId>gmall-interface</artifactId>
              <version>1.0-SNAPSHOT</version>
          </dependency>
      </dependencies>

   2. 复制项目 user-service-provider 的 service 文件

   3. 士大夫

2. 创建项目 boot-order-service-consumer

   1. 配置 pom.xml 文件

      ``` xml
      <dependencies>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
              <version>2.7.10</version>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.10</version>
          </dependency>
      
          <dependency>
              <groupId>com.atguigu.gmall</groupId>
              <artifactId>gmall-interface</artifactId>
              <version>1.0-SNAPSHOT</version>
          </dependency>
      </dependencies>

   2. 复制项目 order-service-consumer 的 service 文件

   3. 

## 二、Dubbo 配置

### 1、配置原则

### 2、重试次数

### 3、超时时间

### 4、版本号

## 三、高可用

### 1、Zookeeper 宕机与 Dubbo 直连

### 2、集群下 Dubbo 负载均衡配置

### 3、整合 hystrix，服务熔断与降级处理

## 四、Dubbo 原理