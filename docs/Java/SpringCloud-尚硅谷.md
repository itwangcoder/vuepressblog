---
title: SpringCloud学习笔记尚硅谷
description: SpringCloud学习笔记尚硅谷
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

## 一、Spring Cloud 理论入门

### 1、微服务架构概述

- 什么是微服务

  微服务架构是一种架构模式，它提倡将单一应用程序划分成一组小的服务，服务之间互相协调、互相配合，为用户提供最终价值。每个服务运行在其独立的进程中，服务与服务间采用轻量级的通信机制互相协作（通常是基于HTTP协议的RESTful API）。每个服务都围绕着具体业务进行构建，并且能够被独立的部署到生产环境、类生产环境等。另外，应当尽量避免统一的、集中式的服务管理机制，对具体的一个服务而言，应根据业务上下文，选择合适的语言、工具对其进行构建

  > 主题词：基于分布式的微服务架构

### 2、Spring Cloud 简介

![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud简介.png)

SpringCloud=分布式微服务架构的一站式解决方案，是多种微服务架构落地技术的集合体,俗称微服务全家桶

- 相关技术集成

![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud技术集成.png)

- 京东案例

  ![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud京东项目案例.png)

- 阿里案例

  ![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud阿里项目案例.png)

- 京东物流案例

  ![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud京东物流项目案例.png)

- SpringCloud服务相关

  ![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud技术相关服务.png)

### 3、Spring Cloud 技术栈

- 各个技术栈功能介绍

![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud主流技术栈.png)

![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud主流技术栈使用.png)

### 4、总结

![](SpringCloud学习笔记尚硅谷/SpringCloud简介/SpringCloud总结.png)

## 二、SpringBoot 和 SpringCloud 版本选择

### 1、SpringBoot2.x 版 和 SpringCloud H 版

1. SpringBoot
   - github：https://github.com/spring-projects/spring-boot
   - 官网：https://spring.io/projects/spring-boot
2. SpringCloud
   - 官网：https://spring.io/projects/spring-cloud
   - github：https://github.com/spring-cloud/spring-cloud-connectors

3. 对应版本

   详细版本选型：https://start.spring.io/actuator/info

   ![](SpringCloud学习笔记尚硅谷/版本选择/SpringBoot和SpringCloud对应版本.png)



### 2、组件升级和替换

![](SpringCloud学习笔记尚硅谷/版本选择/SpringCloud组件升级.png)

## 三、微服务架构编码构建

**约定 > 配置 > 编码**

### 1、IDEA 新建父工程

1. Maven中相关知识说明-DependencyManagement 和 Dependencies

   - dependencyManagement

     Maven 使用dependencyManagement 元素来提供了一种管理依赖版本号的方式。

     通常会在一个组织或者项目的最顶层的父POM 中看到dependencyManagement 元素。

     使用pom.xml 中的dependencyManagement 元素能让所有在子项目中引用一个依赖而不用显式的列出版本号。Maven 会沿着父子层次向上走，直到找到一个拥有dependencyManagement 元素的项目，然后它就会使用这个dependencyManagement 元素中指定的版本号。

     > 这样做的好处就是：如果有多个子项目都引用同一样依赖，则可以避免在每个使用的子项目里都声明一个版本号，这样当想升级或切换到另一个版本时，只需要在顶层父容器里更新，而不需要一个一个子项目的修改 ；另外如果某个子项目需要另外的一个版本，只需要声明version就可。
     >
     > - dependencyManagement里只是声明依赖，*并不实现引入*，因此子项目需要显示的声明需要用的依赖。
     > - 如果不在子项目中声明依赖，是不会从父项目中继承下来的；只有在子项目中写了该依赖项，并且没有指定具体版本，才会从父项目中继承该项，并且version和scope都读取自父pom;
     > -  如果子项目中指定了版本号，那么会使用子项目中指定的jar版本。

2. 父工程pom 文件

   ``` xml
   <packaging>pom</packaging>
   
   <properties>
       <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
       <java.version>1.8</java.version>
       <spring-cloud.version>2021.0.7</spring-cloud.version>
       <junit.version>4.13.2</junit.version>
       <log4j.version>1.2.17</log4j.version>
       <lombok.version>1.18.26</lombok.version>
       <mysql.version>8.0.23</mysql.version>
       <druid.version>1.2.15</druid.version>
       <mybatisplus.version>3.5.2</mybatisplus.version>
   </properties>
   
   <dependencyManagement>
       <dependencies>
           <!-- SpringBoot -->
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-dependencies</artifactId>
               <version>2.7.12</version>
               <type>pom</type>
               <scope>import</scope>
           </dependency>
   
           <!-- SpringCloud -->
           <dependency>
               <groupId>org.springframework.cloud</groupId>
               <artifactId>spring-cloud-dependencies</artifactId>
               <version>${spring-cloud.version}</version>
               <type>pom</type>
               <scope>import</scope>
           </dependency>
   
           <!-- SpringCloud alibaba-->
           <dependency>
               <groupId>com.alibaba.cloud</groupId>
               <artifactId>spring-cloud-alibaba-dependencies</artifactId>
               <version>2021.0.5.0</version>
               <type>pom</type>
               <scope>import</scope>
           </dependency>
   
           <!-- mysql -->
           <dependency>
               <groupId>mysql</groupId>
               <artifactId>mysql-connector-java</artifactId>
               <version>${mysql.version}</version>
           </dependency>
   
           <!-- druid -->
           <dependency>
               <groupId>com.alibaba</groupId>
               <artifactId>druid</artifactId>
               <version>${druid.version}</version>
           </dependency>
   
           <!-- mybatis-plus -->
           <dependency>
               <groupId>com.baomidou</groupId>
               <artifactId>mybatis-plus-boot-starter</artifactId>
               <version>${mybatisplus.version}</version>
           </dependency>
   
           <!-- log4j -->
           <dependency>
               <groupId>log4j</groupId>
               <artifactId>log4j</artifactId>
               <version>${log4j.version}</version>
           </dependency>
   
           <!-- lombok -->
           <dependency>
               <groupId>org.projectlombok</groupId>
               <artifactId>lombok</artifactId>
               <version>${lombok.version}</version>
               <optional>true</optional>
           </dependency>
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-test</artifactId>
               <scope>test</scope>
           </dependency>
   
       </dependencies>
   </dependencyManagement>
   
   <build>
       <plugins>
           <plugin>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-maven-plugin</artifactId>
               <configuration>
                   <excludes>
                       <exclude>
                           <groupId>org.projectlombok</groupId>
                           <artifactId>lombok</artifactId>
                       </exclude>
                   </excludes>
               </configuration>
           </plugin>
       </plugins>
   </build>
   ```

### 2、微服务模块构建

1. 构建微服务提供者支付 Module 模块

   - 建立 Module 项目：cloud-provider-payment8001

   - 改写 POM

     ``` xml
     <dependencies>
         <dependency>
             <groupId>org.springframework.boot</groupId>
             <artifactId>spring-boot-starter-web</artifactId>
         </dependency>
     
         <dependency>
             <groupId>org.springframework.boot</groupId>
             <artifactId>spring-boot-starter-actuator</artifactId>
         </dependency>
     
         <dependency>
             <groupId>com.baomidou</groupId>
             <artifactId>mybatis-plus-boot-starter</artifactId>
         </dependency>
     
         <dependency>
             <groupId>com.alibaba</groupId>
             <artifactId>druid-spring-boot-starter</artifactId>
             <version>1.2.15</version>
         </dependency>
     
         <dependency>
             <groupId>mysql</groupId>
             <artifactId>mysql-connector-java</artifactId>
         </dependency>
     
         <dependency>
             <groupId>org.springframework.boot</groupId>
             <artifactId>spring-boot-starter-jdbc</artifactId>
         </dependency>
     
         <dependency>
             <groupId>org.projectlombok</groupId>
             <artifactId>lombok</artifactId>
             <optional>true</optional>
         </dependency>
     
         <dependency>
             <groupId>org.springframework.boot</groupId>
             <artifactId>spring-boot-starter-test</artifactId>
         </dependency>
     </dependencies>
     ```

   - 填写 YML

     ``` yml
     server:
       port: 8001
     
     spring:
       application:
         name: cloud-payment-service
     
       datasource:
         type: com.alibaba.druid.pool.DruidDataSource            # 当前数据源操作类型
         driver-class-name: com.mysql.cj.jdbc.Driver             # mysql驱动包 com.mysql.jdbc.Driver
         url: jdbc:mysql://localhost:3306/mybatis_plus?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false
         username: root
         password: root
     
     mybatis-plus:
       configuration:
         # mybatis-plus 日志
         log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
     
       # 设置MyBatis-Plus的全局配置
       global-config:
         db-config:
           # 设置统一的主键生成策略
           id-type: auto
       # 配置类型别名所对应的包
       type-aliases-package: com.atguigu.springcloud.entities
       mapper-locations: classpath:mapper/*.xml
     ```

   - 主启动

     ``` java
     @SpringBootApplication
     public class PaymentMain8001 {
         public static void main(String[] args) {
             SpringApplication.run(PaymentMain8001.class, args);
         }
     }
     ```

   - 业务类

     1. 建立数据库表SQL

        ``` sql
        CREATE TABLE `payment` (
          `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
          `serial` varchar(200) DEFAULT '',
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8
        ```

     2. 创建 entity

        - 主实体 Payment

        ``` java
        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class Payment implements Serializable {
            private Long id;
            private String serial;
        }
        ```

        - Json 封装体

        ``` java
        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class CommonResult<T> {
        
            private Integer code;
            private String message;
            private T data;
        
            public CommonResult(Integer code, String message) {
                this(code, message, null);
            }
        }
        ```

     3. 创建 dao

        ``` java
        @Mapper
        public interface PaymentDao extends BaseMapper<Payment> {
        }

     4. 创建 service

        ``` java
        public interface PaymentService extends IService<Payment> {
        }
        
        @Service
        public class PaymentServiceImpl extends ServiceImpl<PaymentDao, Payment> implements PaymentService {
            @Resource
            private PaymentDao paymentDao;
        }

     5. 建立controller

        ``` java
        @Slf4j
        @RestController
        public class PaymentController {
        
            @Resource
            private PaymentService paymentService;
        
            /**
             * 保存数据
             *
             * @param payment
             * @return
             */
            @PostMapping(value = "/payment/create")
            public CommonResult create(@RequestBody Payment payment) {
                boolean result = paymentService.save(payment);
                log.info("*****插入结果：{}", result);
        
                if (result) {
                    return new CommonResult(200, "插入数据库成功", result);
                } else {
                    return new CommonResult(444, "插入数据库失败", null);
                }
            }
        
            /**
             * 根据id获取数据
             * @param id
             * @return
             */
            @GetMapping(value = "/payment/get/{id}")
            public CommonResult getPaymentById(@PathVariable("id") Long id) {
                Payment payment = paymentService.getById(id);
                log.info("*****查询结果：{}", payment);
        
                if (payment != null) {
                    return new CommonResult(200, "查询成功", payment);
                } else {
                    return new CommonResult(444, "没有对应记录，查询ID：" + id, null);
                }
            }
        }

2. 测试

   使用postman工具进行测试

3. 热部署 Devtools

   1. 添加热部署jar包到子项目的 pom.xml 文件中

      ``` xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-devtools</artifactId>
          <scope>runtime</scope>
          <optional>true</optional>
      </dependency>
      ```

   2. 添加插件到父项目的 pom.xml 文件中

      ``` xml
      <build>
          <finalName>cloud2020</finalName>
          <plugins>
              <plugin>
                  <groupId>org.springframework.boot</groupId>
                  <artifactId>spring-boot-maven-plugin</artifactId>
                  <configuration>
                      <fork>true</fork>
                      <addResources>true</addResources>
                      <excludes>
                          <exclude>
                              <groupId>org.projectlombok</groupId>
                              <artifactId>lombok</artifactId>
                          </exclude>
                      </excludes>
                  </configuration>
              </plugin>
          </plugins>
      </build>

   3. 开启 IDEA 中自动编译的选项

      ![](SpringCloud学习笔记尚硅谷/微服务架构编码构建/开启IDEA中自动热部署选项.png)

   4. 设置自动编译相关配置选项

      ![](SpringCloud学习笔记尚硅谷/微服务架构编码构建/开启IDEA中设置自动热部署选项1.png)

      IDEA 中使用快捷键 ctrl + alt + shift + / ，并选择 **Registry**，并勾选下面图片中的选项

      ![](SpringCloud学习笔记尚硅谷/微服务架构编码构建/开启IDEA中设置自动热部署选项2.png)

   5. 重启 IDEA

4. 构建微服务消费者订单 Module 模块

   1. 创建 Module 项目：cloud-consumer-order80

   2. 改写 POM

      ``` xml
      <dependencies>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-actuator</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
          </dependency>
      </dependencies>

   3. 写 YML 配置文件

      ``` yml
      server:
        port: 80

   4. 完成主启动类

      ``` java
      @SpringBootApplication
      public class OrderMain80 {
          public static void main(String[] args) {
              SpringApplication.run(OrderMain80.class, args);
          }
      }

   5. 业务类

      1. entities编写

         - 主实体 Payment

           ``` java
           @Data
           @NoArgsConstructor
           @AllArgsConstructor
           public class Payment implements Serializable {
               private Long id;
               private String serial;
           }

         - Json 封装体

           ``` java
           @Data
           @NoArgsConstructor
           @AllArgsConstructor
           public class CommonResult<T> {
           
               private Integer code;
               private String message;
               private T data;
           
               public CommonResult(Integer code, String message) {
                   this(code, message, null);
               }
           }
           ```

      2. 首说 RestTemplate

         - 是什么

           RestTemplate 提供了多种便捷访问远程Http服务的方法， 是一种简单便捷的访问restful服务模板类，是Spring提供的用于访问Rest服务的**客户端模板工具集**

         - 官网地址

           https://docs.spring.io/spring-framework/docs/5.2.2.RELEASE/javadoc-api/org/springframework/web/client/RestTemplate.html

         - 使用

           使用restTemplate访问restful接口非常的简单粗暴无脑。(url, requestMap, ResponseBean.class)这三个参数分别代表。REST请求地址、请求参数、HTTP响应转换被转换成的对象类型。

      3. config 配置类

         ``` java
         @Configuration
         public class ApplicationContextConfig {
         
             @Bean
             public RestTemplate getRestTemplate() {
                 return new RestTemplate();
             }
         }
         // applicationContext.xml  <bean id="" class=""/>
         ```

      4. 编写 controller 类

         ``` java
         @Slf4j
         @RestController
         public class OrderController {
         
             public static final String PAYMENT_URL = "http://localhost:8001";
         
             @Resource
             private RestTemplate restTemplate;
         
             @GetMapping("/consumer/payment/create")
             public CommonResult<Payment> create(Payment payment) {
                 log.info("******order中create方法中的payment值为：{}", payment);
         
                 return restTemplate.postForObject(PAYMENT_URL + "/payment/create", payment, CommonResult.class);
             }
         
             @GetMapping("/consumer/payment/get/{id}")
             public CommonResult<Payment> getPayment(@PathVariable("id") Long id) {
                 log.info("*******order中的getPayment方法的id为：{}", id);
         
                 return restTemplate.getForObject(PAYMENT_URL + "/payment/get/" + id, CommonResult.class);
             }
         }

   6. 测试

      调用 http://localhost:8888/consumer/payment/get/1 来测试功能

      > 注意：代码编写中，Post接收实体类型时需要加入 @RequestBody 注解，否则服务引用传递过去的数据为 null
      >
      > IDEA 中 View -> Tools Window -> Services 中即可添加代码下方的Services栏。如果Services栏为空，则点击 Add service -> Run Configuration Type -> SpringBoot 即可显示所有的项目，可以更加方便管理项目

5. 工程重构

   上面的代码中两个项目中有重复代码，需要重构

   1. 新建 Module 项目：cloud-api-commons

   2. 改写pom.xml 文件

      ``` xml
      <modelVersion>4.0.0</modelVersion>
      <parent>
          <groupId>com.atguigu.springcloud</groupId>
          <artifactId>cloud2020</artifactId>
          <version>0.0.1-SNAPSHOT</version>
      </parent>
      
      <artifactId>cloud-api-commons</artifactId>
      
      <dependencies>
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>cn.hutool</groupId>
              <artifactId>hutool-all</artifactId>
              <version>5.8.16</version>
          </dependency>
      </dependencies>

   3. entities

      - 主实体 Payment

        ``` java
        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class Payment implements Serializable {
            private Long id;
            private String serial;
        }

      - Json 封装体

        ``` java
        @Data
        @NoArgsConstructor
        @AllArgsConstructor
        public class CommonResult<T> {
        
            private Integer code;
            private String message;
            private T data;
        
            public CommonResult(Integer code, String message) {
                this(code, message, null);
            }
        }

   4. 调用IDEA 右侧 maven 中的 clean 和 install 命令

      > 注意：打包时需要在父项目的 pom.xml文件中添加以下代码，否则会提示 **Unable to find main class**
      >
      > ``` xml
      > <configuration>
      > 	 <skip>true</skip>
      > </configuration>

   5. 配置其它项目中的pom文件来引入该配置类

      首先删除其它类中的公共部分，如 entities

      接着为其它类的 pom.xml 文件中引入配置类

      ``` xml
      <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
      <dependency>
          <groupId>com.atguigu.springcloud</groupId>
          <artifactId>cloud-api-commons</artifactId>
          <version>${project.version}</version>
      </dependency>
      ```

## 四、Eureka 服务注册与发现

### 1、Eureka 基础知识

1.  什么是服务治理 

   Spring Cloud 封装了 Netflix 公司开发的 Eureka 模块来**实现服务治理**

   在传统的rpc远程调用框架中，管理每个服务与服务之间依赖关系比较复杂，管理比较复杂，所以需要使用服务治理，管理服务于服务之间依赖关系，可以实现服务调用、负载均衡、容错等，实现服务发现与注册。

2. 什么是服务注册与发现

   Eureka采用了CS的设计架构，Eureka Server 作为服务注册功能的服务器，它是服务注册中心。而系统中的其他微服务，使用 Eureka的客户端连接到 Eureka Server并维持心跳连接。这样系统的维护人员就可以通过 Eureka Server 来监控系统中各个微服务是否正常运行。

   在服务注册与发现中，有一个注册中心。当服务器启动的时候，会把当前自己服务器的信息 比如 服务地址通讯地址等以别名方式注册到注册中心上。另一方（消费者|服务提供者），以该别名的方式去注册中心上获取到实际的服务通讯地址，然后再实现本地RPC调用RPC远程调用框架核心设计思想：在于注册中心，因为使用注册中心管理每个服务与服务之间的一个依赖关系(服务治理概念)。在任何rpc远程框架中，都会有一个注册中心(存放服务地址相关信息(接口地址))

   下左图是Eureka系统架构，右图是Dubbo的架构，请对比

   ![img](SpringCloud学习笔记尚硅谷/Eureka 服务注册与发现/Eureka基础知识服务注册与发现.png)

3. Eureka包含两个组件

   - Eureka Server 提供服务注册服务

     各个微服务节点通过配置启动后，会在 Eureka Server 中进行注册，这样 Eureka Server 中的服务注册表中将会存储所有可用服务节点的信息，服务节点的信息可以在界面中直观看到。

   - Eureka Client 通过注册中心进行访问

     是一个Java客户端，用于简化Eureka Server的交互，客户端同时也具备一个内置的、使用轮询(round-robin)负载算法的负载均衡器。在应用启动后，将会向Eureka Server发送心跳(默认周期为30秒)。如果Eureka Server在多个心跳周期内没有接收到某个节点的心跳，Eureka Server 将会从服务注册表中把这个服务节点移除（默认90秒）

### 2、单机 Eureka 构建步骤

1. IDEA 生成 Eureka Server 端服务注册中心类似物业公司

   1. 建立 Module 项目：cloud-eureka-server7001

   2. 改写 pom.xml 文件

      ``` xml
      <dependencies>
          <!-- eureka-server -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
          </dependency>
      
          <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
          <dependency>
              <groupId>com.atguigu.springcloud</groupId>
              <artifactId>cloud-api-commons</artifactId>
              <version>${project.version}</version>
          </dependency>
      
          <!-- boot web actuator -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-actuator</artifactId>
          </dependency>
      
          <!-- 一般通用配置 -->
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
              <scope>test</scope>
          </dependency>
      
          <dependency>
              <groupId>junit</groupId>
              <artifactId>junit</artifactId>
              <version>4.13.2</version>
              <scope>test</scope>
          </dependency>
      </dependencies>
      ```

   3. 配置 yml 文件

      ``` yml
      server:
        port: 7001
      
      eureka:
        instance:
          hostname: localhost #eureka服务端的实例名称
        client:
          #false表示不向注册中心注册自己。
          register-with-eureka: false
          #false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
          fetch-registry: false
          service-url:
            #设置与Eureka Server交互的地址查询服务和注册服务都需要依赖这个地址。
            defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
      ```

   4. 写主启动类

      ``` java
      /**
       * @author 汪重阳
       * @version 1.0
       * @EnableEurekaServer 表示该项目为 Eureka 的服务注册中心
       */
      @SpringBootApplication
      @EnableEurekaServer
      public class EurekaMain7001 {
          public static void main(String[] args) {
              SpringApplication.run(EurekaMain7001.class, args);
          }
      }

   5. 测试

      启动服务，进入 http://localhost:7001/ 页面查看是否出现 Spring Eureka 页面

      > No application available 没有服务被发现 O(∩_∩)O。因为没有注册服务进来当然不可能有服务被发现

2. Eureka Client 端将注册进 Eureka Server 成为服务提供者 provider，类似于尚硅谷学校对外提供授课服务

   1. 选择 Module 项目：cloud-provider-payment8001

   2. 改写 pom.xml 文件

      ``` xml
      <!-- eureka-client -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
      </dependency>

   3. 改写 yml 配置文件

      ``` yml
      eureka:
        client:
          #表示是否将自己注册进EurekaServer默认为true。
          register-with-eureka: true
          #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡
          fetchRegistry: true
          service-url:
            defaultZone: http://localhost:7001/eureka

   4. 改写主启动类

      ``` java
      @SpringBootApplication
      @EnableEurekaClient
      public class PaymentMain8001 {
          public static void main(String[] args) {
              SpringApplication.run(PaymentMain8001.class, args);
          }
      }

   5. 测试

      启动服务，进入 http://localhost:7001/ 页面查看

      > Application 中出现项目，项目名称为 application.yml 配置文件中的 **spring.application.name** 的值

   6. 自我保护机制

      下面内容是 Eureka 的自我保护机制

      > #### **EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY'RE NOT. RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE.**

3. Eureka Client 端将注册进 Eureka Server 成为服务消费者consumer，类似于尚硅谷上课消费的各位同学

   1. 选择 Module 项目：cloud-consumer-order80

   2. 改写 pom.xml 文件

      ``` xml
      <!-- eureka-client -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
      </dependency>

   3. 改写 yml 配置文件

      ``` yml
      spring:
        application:
          name: cloud-order-service
      
      eureka:
        client:
          #表示是否将自己注册进EurekaServer默认为true。
          register-with-eureka: true
          #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡
          fetchRegistry: true
          service-url:
            defaultZone: http://localhost:7001/eureka

   4. 改写主启动类

      ``` java
      @SpringBootApplication
      @EnableEurekaClient
      public class OrderMain80 {
          public static void main(String[] args) {
              SpringApplication.run(OrderMain80.class, args);
          }
      }

   5. 测试

      启动服务，进入 http://localhost:7001/ 页面查看

      > Application 中出现项目，项目名称为 application.yml 配置文件中的 **spring.application.name** 的值

      调用 http://localhost:8888/consumer/payment/get/1 来测试功能

### 3、集群 Eureka 构建步骤

1. Eureka 集群原理说明

   ![img](SpringCloud学习笔记尚硅谷/Eureka 服务注册与发现/Eureka集群构建原理说明.png)

   > 问题：微服务RPC远程服务调用最核心的是什么
   >
   > 高可用，试想你的注册中心只有一个only one， 它出故障了那就呵呵(￣▽￣)"了，会导致整个为服务环境不可用，所以
   >
   > 解决办法：搭建Eureka注册中心集群 ，实现负载均衡+故障容错

2. Eureka Server 集群环境构建步骤

   1. 创建 Module 项目：cloud-eureka-server7002

   2. 修改 pom.xml 文件

      ``` xml
      <dependencies>
          <!-- eureka-server -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
          </dependency>
      
          <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
          <dependency>
              <groupId>com.atguigu.springcloud</groupId>
              <artifactId>cloud-api-commons</artifactId>
              <version>${project.version}</version>
          </dependency>
      
          <!-- boot web actuator -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-actuator</artifactId>
          </dependency>
      
          <!-- 一般通用配置 -->
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
              <scope>test</scope>
          </dependency>
      
          <dependency>
              <groupId>junit</groupId>
              <artifactId>junit</artifactId>
              <version>4.13.2</version>
              <scope>test</scope>
          </dependency>
      </dependencies>

   3. 修改映射配置

      进入 C:\Windows\System32\drivers\etc 路径下的 hosts 文件，在文件中添加以下内容

      ```
      127.0.0.1 eureka7001.com
      127.0.0.1 eureka7002.com
      ```

   4. 写 yml 配置文件

      项目 cloud-eureka-server7001 中的 application.yml

      ``` yml
      server:
        port: 7001
      
      eureka:
        instance:
          hostname: eureka7001.com #eureka服务端的实例名称
        client:
          #false表示不向注册中心注册自己。
          register-with-eureka: false
          #false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
          fetch-registry: false
          service-url:
            defaultZone: http://eureka7002.com:7002/eureka/
      ```

      项目 cloud-eureka-server7002 中的 application.yml

      ``` yml
      server:
        port: 7002
      
      eureka:
        instance:
          hostname: eureka7002.com #eureka服务端的实例名称
        client:
          #false表示不向注册中心注册自己。
          register-with-eureka: false
          #false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
          fetch-registry: false
          service-url:
            defaultZone: http://eureka7001.com:7001/eureka/

   5. 添加主启动类

      ``` java
      @SpringBootApplication
      @EnableEurekaServer
      public class EurekaMain7002 {
          public static void main(String[] args) {
              SpringApplication.run(EurekaMain7002.class, args);
          }
      }

3. 将支付服务8001微服务发布到上面2台 Eureka 集群配置中

   ``` yml
   eureka:
     client:
     	service-url:
   	  defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka  # 集群版

4. 将订单服务80微服务发布到上面2台 Eureka 集群配置中

   ``` yml
   eureka:
     client:
     	service-url:
   	  defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka  # 集群版

5. 测试

   先启动 Eureka Server 7001/7002 服务，接着启动 支付服务8001 和订单服务80，调用 http://localhost:8888/consumer/payment/get/1 来测试功能

6. 支付服务提供者8001集群环境创建

   1. 创建 Module 项目：cloud-provider-payment8002

   2. 改写 pom.xml 文件

      ``` xml
      <dependencies>
          <!-- eureka-client -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
          </dependency>
      
          <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
          <dependency>
              <groupId>com.atguigu.springcloud</groupId>
              <artifactId>cloud-api-commons</artifactId>
              <version>${project.version}</version>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-actuator</artifactId>
          </dependency>
      
          <dependency>
              <groupId>com.baomidou</groupId>
              <artifactId>mybatis-plus-boot-starter</artifactId>
          </dependency>
      
          <dependency>
              <groupId>com.alibaba</groupId>
              <artifactId>druid-spring-boot-starter</artifactId>
              <version>1.2.15</version>
          </dependency>
      
          <dependency>
              <groupId>mysql</groupId>
              <artifactId>mysql-connector-java</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-jdbc</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
          </dependency>
      </dependencies>

   3. 编写 yml 配置文件

      ``` yml
      server:
        port: 8002
      
      spring:
        application:
          name: cloud-payment-service
      
        datasource:
          type: com.alibaba.druid.pool.DruidDataSource            # 当前数据源操作类型
          driver-class-name: com.mysql.cj.jdbc.Driver             # com.mysql.cj.jdbc.Driver
          url: jdbc:mysql://localhost:3306/springcloud_atguigu?serverTimezone=GMT%2B8&characterEncoding=utf-8&useSSL=false
          username: root
          password: root
      
      eureka:
        client:
          #表示是否将自己注册进EurekaServer默认为true。
          register-with-eureka: true
          #是否从EurekaServer抓取已有的注册信息，默认为true。单节点无所谓，集群必须设置为true才能配合ribbon使用负载均衡
          fetchRegistry: true
          service-url:
            #      defaultZone: http://localhost:7001/eureka
            defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka  # 集群版
      
      mybatis-plus:
        configuration:
          # mybatis-plus 日志
          log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
      
        # 设置MyBatis-Plus的全局配置
        global-config:
          db-config:
            # 设置统一的主键生成策略
            id-type: auto
        # 配置类型别名所对应的包
        type-aliases-package: com.atguigu.springcloud.entities
        mapper-locations: classpath:mapper/*.xml

   4. 添加主启动类

      直接从项目 cloud-provider-payment8001 中复制即可

   5. 添加业务类

      直接从项目 cloud-provider-payment8001 中复制即可

   6. 修改 8001/8001 的 Controller

      ``` java
      @Slf4j
      @RestController
      public class PaymentController {
      
          @Resource
          private PaymentService paymentService;
      
          @Value("${server.port}")
          private String serverPort;
      
          /**
           * 保存数据
           *
           * @param payment
           * @return
           */
          @PostMapping(value = "/payment/create")
          public CommonResult create(@RequestBody Payment payment) {
              log.info("******要插入的数据为：{}", payment);
      
              boolean result = paymentService.save(payment);
              log.info("*****插入结果：{}", result);
      
              if (result) {
                  return new CommonResult(200, "插入数据库成功，serverPort：" + serverPort, result);
              } else {
                  return new CommonResult(444, "插入数据库失败", null);
              }
          }
      
          /**
           * 根据id获取数据
           *
           * @param id
           * @return
           */
          @GetMapping(value = "/payment/get/{id}")
          public CommonResult<Payment> getPaymentById(@PathVariable("id") Long id) {
              Payment payment = paymentService.getById(id);
              log.info("*****查询结果：{}", payment + "\t");
      
              if (payment != null) {
                  return new CommonResult(200, "查询成功，serverPort：" + serverPort, payment);
              } else {
                  return new CommonResult(444, "没有对应记录，查询ID：" + id, null);
              }
          }
      }

7. 负载均衡

   1. 出现的 bug

      订单服务访问地址不能写死

      ``` java
      // public static final String PAYMENT_URL = "http://localhost:8001";
      // 通过在eureka上注册过的微服务名称调用
      public static final String PAYMENT_SRV = "http://CLOUD-PAYMENT-SERVICE";

   2. 使用 @LoadBalanced 注解赋予 RestTemplate 负载均衡的能力

      ``` java
      @Configuration
      public class ApplicationContextConfig {
          @Bean
          @LoadBalanced
          public RestTemplate getRestTemplate() {
              return new RestTemplate();
          }
      }
      ```

      > ApplicationContextBean，这就是 Ribbon 的负载均衡功能

8. 测试

   先启动 Eureka Server 7001/7002 服务，接着启动 支付服务8001/8002 和订单服务80，调用 http://localhost:8888/consumer/payment/get/1 来测试功能

   结果：负载均衡效果达到，8001/8002 端口交替出现

   > Ribbon 和 Eureka 整合后 Consumer 可以直接调用服务而不用再关心地址和端口号，且该服务还有负载功能了。

### 4、actuator 微服务信息完善

1. 主机名称：服务名称修改

   1. 当前问题

      Eureka 网页显示的信息中有主机名称

   2. 修改 支付服务8001/8002 项目的 yml 配置文件

      ``` yml
      eureka:
        instance:
          instance-id: payment8001
      ```

2. 访问信息有 IP 信息提示

   1. 当前问题

      Eureka 网页显示的信息中没有 IP 提示

   2. 修改 支付服务8001/8002 项目的 yml 配置文件

      ``` yml
      eureka:
        instance:
      	prefer-ip-address: true    #访问路径可以显示IP地址

### 5、服务发现 Discovery

对于注册进eureka里面的微服务，可以通过服务发现来获得该服务的信息

1. 修改 项目 cloud-provider-payment8001的Controller

   ``` java
   @Slf4j
   @RestController
   public class PaymentController {
   
       @Resource
       private PaymentService paymentService;
   
       @Value("${server.port}")
       private String serverPort;
   
       @Resource
       private DiscoveryClient discoveryClient;
   
       ......
   
       @GetMapping(value = "/payment/discovery")
       public Object discovery() {
           List<String> services = discoveryClient.getServices();
           for (String service : services) {
               log.info("********* service：" + service);
           }
   
           List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");
           for (ServiceInstance instance : instances) {
               log.info(instance.getServiceId() + "\t" + instance.getHost() + "\t" + instance.getPort() + "\t" + instance.getUri());
           }
   
           return this.discoveryClient;
       }
   }
   ```

2. 修改主启动类

   主启动类中添加 @EnableDiscoveryClient 注解

3. 自测

   先启动 Eureka Server 服务，接着启动 支付服务8001主启动类，调用 http://localhost:8001/payment/discovery 来测试功能

### 6、eureka 自我保护

1. 故障现象

   保护模式主要用于一组客户端和 Eureka Server 之间存在网络分区场景下的保护。一旦进入保护模式，Eureka Server 将会尝试保护其服务注册表中的信息，不再删除服务注册表中的数据，也就是不会注销任何微服务。

   > 如果在Eureka Server的首页看到以下这段提示，则说明Eureka进入了保护模式：
   >
   > EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY'RE NOT. RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE 

2. 导致原因

   一句话：某时刻某一个微服务不可用了，Eureka不会立刻清理，依旧会对该微服务的信息进行保存

   > 属于CAP里面的AP分支

   - *为什么会产生 Eureka 自我保护机制？*

     为了防止 EurekaClient 可以正常运行，但是 与 EurekaServer 网络不通情况下，EurekaServer **不会立刻**将 EurekaClient 服务剔除

   - *什么是自我保护模式？*

     默认情况下，如果EurekaServer在一定时间内没有接收到某个微服务实例的心跳，EurekaServer将会注销该实例（默认90秒）。但是当网络分区故障发生(延时、卡顿、拥挤)时，微服务与EurekaServer之间无法正常通信，以上行为可能变得非常危险了——因为微服务本身其实是健康的，**此时本不应该注销这个微服务**。Eureka通过“自我保护模式”来解决这个问题——当EurekaServer节点在短时间内丢失过多客户端时（可能发生了网络分区故障），那么这个节点就会进入自我保护模式。

   ![img](SpringCloud学习笔记尚硅谷/Eureka 服务注册与发现/Eureka自我保护.png)

   - 在自我保护模式中，Eureka Server会保护服务注册表中的信息，不再注销任何服务实例。

     它的设计哲学就是宁可保留错误的服务注册信息，也不盲目注销任何可能健康的服务实例。一句话讲解：**好死不如赖活着**

     综上，自我保护模式是一种应对网络异常的安全保护措施。它的架构哲学是宁可同时保留所有微服务（健康的微服务和不健康的微服务都会保留）也不盲目注销任何健康的微服务。使用自我保护模式，可以让Eureka集群更加的健壮、稳定。

3. 怎么禁止自我保护

   1. 注册中心 eurekaServer 端7001

      出厂默认，自我保护机制是开启的

      使用 eureka.server.enable-self-preservation=false可以禁用自我保护机制

      ```yml
      eureka:
        server:
          # 关闭自我保护机制，保证不可用服务被及时踢除
          enable-self-preservation: false
          eviction-interval-timer-in-ms: 2000

   2. 生产者客户端 eurekaClient 端8001

      1. 默认配置为

         eureka.instance.lease-renewal-interval-in-seconds=30

         eureka.instance.lease-expiration-duration-in-seconds=90

      2. 配置

         ``` yml
         eureka:
           instance:
             #Eureka客户端向服务端发送心跳的时间间隔，单位为秒(默认是30秒)
             lease-renewal-interval-in-seconds: 1
             #Eureka服务端在收到最后一次心跳后等待时间上限，单位为秒(默认是90秒)，超时将剔除服务
             lease-expiration-duration-in-seconds: 2

      3. 测试

         先启动 7001 服务，接着启动 8001 服务。然后关闭 8001 服务，结果马上就被删除了

## 五、Zookeeper 服务注册与发现

### 1、Eureka停止更新了你怎么办

进入官网地址查看：https://github.com/Netflix/eureka/wiki

### 2、SpringCloud整合Zookeeper代替Eureka

1. 注册中心 Zookeeper

   zookeeper是一个分布式协调工具，可以实现注册中心功能。

   关闭Linux服务器防火墙后启动zookeeper服务器，或者开放指定端口。

   zookeeper服务器取代Eureka服务器，zk作为服务注册中心。

2. 服务提供者

   1. 新建 cloud-provider-payment8004 项目

   2. 改写 pom.xml 文件

      ``` xml
      <dependencies>
          <!-- SpringBoot 整合 web 组件 -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
      
          <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
          <dependency>
              <groupId>com.atguigu.springcloud</groupId>
              <artifactId>cloud-api-commons</artifactId>
              <version>${project.version}</version>
          </dependency>
      
          <!-- SpringBoot 整合 Zookeeper 客户端 -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>
          </dependency>
      
      
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
          </dependency>
      </dependencies>

   3. 改写 yml 配置文件

      ``` yml
      #8004表示注册到zookeeper服务器的支付服务提供者端口号
      server:
        port: 8004
      #服务别名----注册zookeeper到注册中心名称
      spring:
        application:
          name: cloud-provider-payment
        cloud:
          zookeeper:
            connect-string: 192.168.37.128:2181

   4. 添加主启动类

      ``` java
      @SpringBootApplication
      @EnableDiscoveryClient  //该注解用于向使用consul或者zookeeper作为注册中心时注册服务
      public class PaymentMain8004 {
          public static void main(String[] args) {
              SpringApplication.run(PaymentMain8004.class, args);
          }
      }

   5. 更改 Controller

      ``` java
      package com.atguigu.springcloud.controller;
      
      import lombok.extern.slf4j.Slf4j;
      import org.springframework.beans.factory.annotation.Value;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;
      
      import java.util.UUID;
      
      /**
       * @author 汪重阳
       * @version 1.0
       */
      @Slf4j
      @RestController
      public class PaymentController {
      
          @Value("${server.port}")
          private String serverPort;
      
          @RequestMapping(value = "/payment/zk")
          public String paymentzk() {
              return "springcloud with zookeeper：" + serverPort + "\t" + UUID.randomUUID().toString();
          }
      }

   6. 启动 8004 注册进 zookeeper

      启动时出现问题

      解决zookeeper版本jar包冲突问题，更改 pom.xml 配置文件

      ``` xml
      <dependencies>
          <!-- SpringBoot 整合 web 组件 -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
      
          <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
          <dependency>
              <groupId>com.atguigu.springcloud</groupId>
              <artifactId>cloud-api-commons</artifactId>
              <version>${project.version}</version>
          </dependency>
      
          <!-- SpringBoot 整合 Zookeeper 客户端 -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>
              <exclusions>
                  <exclusion>
                      <groupId>org.apache.zookeeper</groupId>
                      <artifactId>zookeeper</artifactId>
                  </exclusion>
              </exclusions>
          </dependency>
      
          <dependency>
              <groupId>org.apache.zookeeper</groupId>
              <artifactId>zookeeper</artifactId>
              <version>3.5.7</version>
          </dependency>
      
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
          </dependency>
      </dependencies>

   7. 验证测试

      进入 http://localhost:8004/payment/zk 网页，查看是否正常访问

   8. 验证测试2

      Linux 中的 Zookeeper 客户端中调用 get /services/cloud-provider-payment/dbda1ed2-dbc6-4424-bb97-9c76fd2b696a 获取字符串，并使用 JSON 格式化工具将获得的字符串格式化，查看结果

   9. 思考

      服务节点是临时节点还是持久节点

      > 答案：临时节点

3. 服务消费者

   1. 新建 cloud-consumerzk-order80 项目

   2. 修改 pom.xml 文件

      ``` xml
      <dependencies>
          <!-- SpringBoot 整合 web 组件 -->
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
      
          <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
          <dependency>
              <groupId>com.atguigu.springcloud</groupId>
              <artifactId>cloud-api-commons</artifactId>
              <version>${project.version}</version>
          </dependency>
      
          <!-- SpringBoot 整合 Zookeeper 客户端 -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-zookeeper-discovery</artifactId>
              <exclusions>
                  <exclusion>
                      <groupId>org.apache.zookeeper</groupId>
                      <artifactId>zookeeper</artifactId>
                  </exclusion>
              </exclusions>
          </dependency>
      
          <dependency>
              <groupId>org.apache.zookeeper</groupId>
              <artifactId>zookeeper</artifactId>
              <version>3.5.7</version>
          </dependency>
      
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
          </dependency>
      </dependencies>

   3. 改写 yml 配置文件

      ``` yml
      server:
        port: 8888
      
      spring:
        application:
          name: cloud-consumer-order
        cloud:
          #注册到zookeeper地址
          zookeeper:
            connect-string: 192.168.37.128:2181

   4. 创建主启动类

      ``` java
      @SpringBootApplication
      @EnableDiscoveryClient
      public class OrderZKMain80 {
          public static void main(String[] args) {
              SpringApplication.run(OrderZKMain80.class, args);
          }
      }

   5. 创建业务类

      1. 配置类

         ``` java
         @Configuration
         public class ApplicationContextConfig {
         
             @Bean
             @LoadBalanced
             public RestTemplate getRestTemplate() {
                 return new RestTemplate();
             }
         }

      2. Controller

         ``` java
         @Slf4j
         @RestController
         public class OrderZKController {
         
             public static final String INVOKE_URL = "http://cloud-provider-payment";
         
             @Resource
             private RestTemplate restTemplate;
         
             @GetMapping(value = "/consumer/payment/zk")
             public String paymentInfo() {
                 log.info("cloud-consumerzk-order80 调用了 paymentInfo 方法");
                 String result = restTemplate.getForObject(INVOKE_URL + "/payment/zk", String.class);
                 return result;
             }
         }

   6. 验证测试

      在 Linux 中的 Zookeeper 中 调用 ls /services 查看是否出现新的数据

   7. 访问测试地址

      进入 http://localhost:8888/consumer/payment/zk 网址，查看是否引用 cloud-provider-payment 项目的方法

## 六、Consul 服务注册与发现

### 1、Consul 简介

1. 是什么

   官网：https://www.consul.io/intro/index.html

   Consul 是一套开源的分布式服务发现和配置管理系统，由 HashiCorp 公司用 Go 语言开发。

   提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之Consul提供了一种完整的服务网格解决方案。

   它具有很多优点。包括： 基于 raft 协议，比较简洁； 支持健康检查, 同时支持 HTTP 和 DNS 协议 支持跨数据中心的 WAN 集群 提供图形界面 跨平台，支持 Linux、Mac、Windows。

2. 能干嘛

   ![img](SpringCloud学习笔记尚硅谷/Consul服务注册与发现/Consul简介特性.png)

   Spring Cloud Consul 具有如下特性：

   - 服务发现

     提供HTTP和DNS两种发现方式。

   - 健康监测

     支持多种方式，HTTP、TCP、Docker、Shell脚本定制化监控

   - KV存储

     Key、Value的存储方式

   - 多数据中心

     Consul支持多数据中心

   - 可视化Web界面

3. 去哪下、

   官网：https://www.consul.io/downloads.html

4. 怎么完

   相关网址：https://www.springcloud.cc/spring-cloud-consul.html

### 2、安装并允许 Consul

1. 官网安装说明

   网络地址：https://learn.hashicorp.com/consul/getting-started/install.html

2. 下载完成后只有一个consul.exe文件，硬盘路径下双击运行，查看版本号信息

   ```
   consul --version

3. 使用开发模式启动

   ``` cmd
   consul agent -dev
   ```

   通过以下地址可以访问Consul的首页：http://localhost:8500

### 3、服务提供者

1. 新建 cloud-providerconsul-payment8006 项目

2. 改写 pom.xml 文件

   ``` xml
   <dependencies>
       <!-- SpringCloud consul-server -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-consul-discovery</artifactId>
       </dependency>
   
       <!-- SpringBoot 整合 web 组件 -->
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-web</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-actuator</artifactId>
       </dependency>
   
       <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
       <dependency>
           <groupId>com.atguigu.springcloud</groupId>
           <artifactId>cloud-api-commons</artifactId>
           <version>${project.version}</version>
       </dependency>
   
       <!-- 日常通用 jar 包配置 -->
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <optional>true</optional>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-test</artifactId>
           <version>2.7.12</version>
       </dependency>
   </dependencies>

3. 改写 yml 配置文件

   ``` yml
   ###consul服务端口号
   server:
     port: 8006
   
   spring:
     application:
       name: consul-provider-payment
     ####consul注册中心地址
     cloud:
       consul:
         host: localhost
         port: 8500
         discovery:
           #hostname: 127.0.0.1
           service-name: ${spring.application.name}

4. 创建主启动类

   ``` java
   @SpringBootApplication
   @EnableDiscoveryClient
   public class PaymentMain8006 {
       public static void main(String[] args) {
           SpringApplication.run(PaymentMain8006.class, args);
       }
   }

5. 编写业务类 Controller

   ``` java
   @Slf4j
   @RestController
   public class PaymentController {
   
       @Value("${server.port}")
       private String serverPort;
   
       @RequestMapping(value = "/payment/consul")
       public String paymentConsul() {
           return "springcloud with consul：" + serverPort + "\t" + UUID.randomUUID().toString();
       }
   }

6. 验证测试

   

### 4、服务消费者

1. 新建cloud-consumerconsul-order80 项目

2. 改写 pom.xml 文件

   ``` xml
   <dependencies>
       <!-- SpringCloud consul-server -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-consul-discovery</artifactId>
       </dependency>
   
       <!-- SpringBoot 整合 web 组件 -->
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-web</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-actuator</artifactId>
       </dependency>
   
       <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
       <dependency>
           <groupId>com.atguigu.springcloud</groupId>
           <artifactId>cloud-api-commons</artifactId>
           <version>${project.version}</version>
       </dependency>
   
       <!-- 日常通用 jar 包配置 -->
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <optional>true</optional>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-test</artifactId>
           <version>2.7.12</version>
       </dependency>
   </dependencies>

3. 编写 yml 配置文件

   ``` yml
   ###consul服务端口号
   server:
     port: 8888
   
   spring:
     application:
       name: cloud-consumer-order
     ####consul注册中心地址
     cloud:
       consul:
         host: localhost
         port: 8500
         discovery:
           #hostname: 127.0.0.1
           service-name: ${spring.application.name}

4. 配置主启动类

   ``` java
   @SpringBootApplication
   @EnableDiscoveryClient  //该注解用于向使用consul或者zookeeper作为注册中心时注册服务
   public class OrderConsulMain80 {
       public static void main(String[] args) {
           SpringApplication.run(OrderConsulMain80.class, args);
       }
   }

5. 配置 Bean，即Config

   ``` java
   @Configuration
   public class ApplicationContextConfig {
   
       @Bean
       @LoadBalanced
       public RestTemplate getRestTemplate() {
           return new RestTemplate();
       }
   }
   ```

6. 配置 Controller

   ``` java
   @Slf4j
   @RestController
   public class OrderConsulController {
   
       public static final String INVOKE_URL = "http://consul-provider-payment";
   
       @Resource
       private RestTemplate restTemplate;
   
       @GetMapping(value = "/consumer/payment/consul")
       public String paymentInfo() {
           log.info("cloud-consumerconsul-order80 调用了 paymentInfo 方法");
           String result = restTemplate.getForObject(INVOKE_URL + "/payment/consul", String.class);
           return result;
       }
   }

7. 验证测试

   首先查看上面 的consul 中是否出现项目，接着进入 http://localhost:8888/consumer/payment/consul 网页查看是否有数据

### 5、三个注册中心异同点

![img](SpringCloud学习笔记尚硅谷/Consul服务注册与发现/三个注册中心异同点.png)

1. CAP

   - C:Consistency（强一致性）
   - A:Availability（可用性）
   - P:Partition tolerance（分区容错性）
   - CAP理论关注粒度是数据，而不是整体系统设计的策略

2. 经典 CAP 图

   ![img](SpringCloud学习笔记尚硅谷/Consul服务注册与发现/三个注册中心异同点经典CAP图.png)

   >最多只能同时较好的满足两个。
   >
   >CAP理论的核心是：一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求，因此，根据 CAP 原理将 NoSQL 数据库分成了满足 CA 原则、满足 CP 原则和满足 AP 原则三 大类：
   >
   >- CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。
   >
   >- CP - 满足一致性，分区容忍必的系统，通常性能不是特别高。
   >
   >- AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。

   1. AP(Eureka)

      ![img](SpringCloud学习笔记尚硅谷/Consul服务注册与发现/三个注册中心异同点经典CAP图AP.png)

      >AP架构
      >
      >当网络分区出现后，为了保证可用性，系统B可以返回旧值，保证系统的可用性。
      >
      >结论：违背了一致性C的要求，只满足可用性和分区容错，即AP

   2. CP(Zookeeper/Consul)

      ![img](SpringCloud学习笔记尚硅谷/Consul服务注册与发现/三个注册中心异同点经典CAP图CP.png)

      > CP架构
      >
      > 当网络分区出现后，为了保证一致性，就必须拒接请求，否则无法保证一致性
      >
      > 结论：违背了可用性A的要求，只满足一致性和分区容错，即CP

## 七、Ribbon 负载均衡服务调用

### 1、概述

1. 是什么

   Spring Cloud Ribbon是基于Netflix Ribbon实现的一套*客户端*负载均衡的工具。

   简单的说，Ribbon是Netflix发布的开源项目，主要功能是提供客户端的软件负载均衡算法和服务调用。Ribbon客户端组件提供一系列完善的配置项如连接超时，重试等。简单的说，就是在配置文件中列出Load Balancer（简称LB）后面所有的机器，Ribbon会自动的帮助你基于某种规则（如简单轮询，随机连接等）去连接这些机器。我们很容易使用Ribbon实现自定义的负载均衡算法。

2. 官网资料

   官网地址：https://github.com/Netflix/ribbon/wiki/Getting-Started

   Ribbon目前也进入维护模式

3. 能干嘛

   LB（负载均衡）

   > **LB负载均衡(Load Balance)是什么**
   >
   > 简单的说就是将用户的请求平摊的分配到多个服务上，从而达到系统的HA（高可用）。常见的负载均衡有软件Nginx，LVS，硬件 F5等。
   >
   > **Ribbon本地负载均衡客户端 VS Nginx服务端负载均衡区别**
   >
   > - Nginx是服务器负载均衡，客户端所有请求都会交给nginx，然后由nginx实现转发请求。即负载均衡是由服务端实现的。
   > - Ribbon本地负载均衡，在调用微服务接口时候，会在注册中心上获取注册信息服务列表之后缓存到JVM本地，从而在本地实现RPC远程服务调用技术。

   - 集中式LB

     即在服务的消费方和提供方之间使用独立的LB设施(可以是硬件，如F5, 也可以是软件，如nginx, 由该设施负责把访问请求通过某种策略转发至服务的提供方；

   - 进程内LB

     将LB逻辑集成到消费方，消费方从服务注册中心获知有哪些地址可用，然后自己再从这些地址中选择出一个合适的服务器。Ribbon就属于进程内LB，它只是一个类库，集成于消费方进程，消费方通过它来获取到服务提供方的地址。

   > 负载均衡+RestTemplate调用

### 2、Ribbon 负载均衡演示

1. 架构说明

   ![img](SpringCloud学习笔记尚硅谷/Ribbon负载均衡服务调用/负载均衡演示架构说明.png)

   Ribbon在工作时分成两步

   - 第一步先选择 EurekaServer ,它优先选择在同一个区域内负载较少的server.

   - 第二步再根据用户指定的策略，在从server取到的服务注册列表中选择一个地址。

   其中Ribbon提供了多种策略：比如轮询、随机和根据响应时间加权。

   > 总结：Ribbon其实就是一个软负载均衡的客户端组件，他可以和其他所需请求的客户端结合使用，和eureka结合只是其中的一个实例。

2. POM

   之前写样例时候没有引入spring-cloud-starter-ribbon也可以使用ribbon，猜测spring-cloud-starter-netflix-eureka-client自带了spring-cloud-starter-ribbon引用。

   > 证明如下：
   >
   > - 可以看到 spring-cloud-starter-netflix-eureka-client 确实引入了Ribbon
   > - spring-cloud-starter-netflix-eureka-client 3.0 以上抛弃了 Ribbon，转而使用了 loadbalancer

3. RestTemplate的使用

   1. 官网

      官网地址：https://docs.spring.io/spring-framework/docs/5.2.2.RELEASE/javadoc-api/org/springframework/web/client/RestTemplate.html

      ![img](SpringCloud学习笔记尚硅谷/Ribbon负载均衡服务调用/负载均衡演示RestTemplate的使用.png)

   2. getForObject方法/getForEntity方法

      - getForObject：返回对象为响应体中数据转化成的对象，基本上可以理解为Json

        ![img](SpringCloud学习笔记尚硅谷/Ribbon负载均衡服务调用/负载均衡演示RestTemplate的使用getForObject.png)

      - getForEntity：返回对象为ResponseEntity对象，包含了响应中的一些重要信息，比如响应头、响应状态码、响应体等

        ![img](SpringCloud学习笔记尚硅谷/Ribbon负载均衡服务调用/负载均衡演示RestTemplate的使用getForEntity.png)

   3. postForObject/postForEntity方法

      ![img](SpringCloud学习笔记尚硅谷/Ribbon负载均衡服务调用/负载均衡演示RestTemplate的使用postEntity.png)

   4. GET请求方法

      - T getForObject(String url, Class responseType, Object... uriVariables);

      - T getForObject(String url, Class responseType, Map uriVariables);

      - T getForObject(URI url, Class responseType);

      - ResponseEntity getForEntity(String url, Class responseType, Object... uriVariables);

      - ResponseEntity getForEntity(String url, Class responseType, Map uriVariables);

      - ResponseEntity getForEntity(URI var1, Class responseType);

   5. POST请求方法

      - T postForObject(String url, @Nullable Object request, Class responseType, Object... uriVariables);

      - T postForObject(String url, @Nullable Object request, Class responseType, Map uriVariables);

      - T postForObject(URI url, @Nullable Object request, Class responseType);

      - ResponseEntity postForEntity(String url, @Nullable Object request, Class responseType, Object... uriVariables);

      - ResponseEntity postForEntity(String url, @Nullable Object request, Class responseType, Map uriVariables);

      - ResponseEntity postForEntity(URI url, @Nullable Object request, Class responseType);

### 3、Ribbon 核心组件 IRule

1. IRule：根据特定算法中从服务列表中选取一个要访问的服务

   ![img](SpringCloud学习笔记尚硅谷/Ribbon负载均衡服务调用/核心组件IRule.png)

   - com.netflix.loadbalancer.RoundRobinRule：轮询
   - com.netflix.loadbalancer.RandomRule：随机
   - com.netflix.loadbalancer.RetryRule：先按照RoundRobinRule的策略获取服务，如果获取服务失败则在指定时间内会进行重试，获取可用的服务
   - WeightedResponseTimeRule：对RoundRobinRule的扩展，响应速度越快的实例选择权重越大，越容易被选择
   - BestAvailableRule：会先过滤掉由于多次访问故障而处于断路器跳闸状态的服务，然后选择一个并发量最小的服务
   - AvailabilityFilteringRule：先过滤掉故障实例，再选择并发较小的实例
   - ZoneAvoidanceRule：默认规则,复合判断server所在区域的性能和server的可用性选择服务器

2. 如何替换

   1. 修改cloud-consumer-order80

   2. 注意配置细节

      官方文档明确给出了警告：

      这个自定义配置类不能放在 @ComponentScan 所扫描的当前包下以及子包下，否则我们自定义的这个配置类就会被所有的Ribbon客户端所共享，达不到特殊化定制的目的了。

   3. 新建package 

      com.atguigu.myrule

   4. 上面包下新建 MySelfRule 规则类

      ``` java
      @Configuration
      public class MySelfRule {
          @Bean
          public IRule myRule(){
              return new RandomRule();    // 定义为随机
          }
      }

   5. 主启动类添加 @RibbonClient

      ``` java
      @SpringBootApplication
      @EnableEurekaClient
      @RabbonClient(name="CLOUD-PAYMENT-SERVICE",configuration= MySelfRule.class)
      public class OrderMain80 {
          public static void main(String[] args) {
              SpringApplication.run(OrderMain80.class, args);
          }
      }

   6. 测试

      打开网页 http://localhost/consumer/payment/get/31，查看显示内容

### 4、Ribbon 负载均衡算法

1. 原理

   负载均衡算法：rest接口第几次请求数 % 服务器集群总数量 = 实际调用服务器位置下标 ，每次服务重启动后rest接口计数从1开始。

   List instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");

   如：  List [0] instances = 127.0.0.1:8002

   List [1] instances = 127.0.0.1:8001

   8001+ 8002 组合成为集群，它们共计2台机器，集群总数为2， 按照轮询算法原理：

   当总请求数为1时： 1 % 2 =1 对应下标位置为1 ，则获得服务地址为127.0.0.1:8001

   当总请求数位2时： 2 % 2 =0 对应下标位置为0 ，则获得服务地址为127.0.0.1:8002

   当总请求数位3时： 3 % 2 =1 对应下标位置为1 ，则获得服务地址为127.0.0.1:8001

   当总请求数位4时： 4 % 2 =0 对应下标位置为0 ，则获得服务地址为127.0.0.1:8002

   如此类推......

2. 源码

3. 手写

   1. 7001/7002集群启动

   2. 8001/8002微服务改造

      给两个服务的 Controller类中添加如下方法

      ``` java
      @GetMapping(value = "/payment/lb")
      public String getPaymentLB() {
          return serverPort;
      }

   3. 80订单微服务改造

      1. ApplicationContextBean去掉注解@LoadBalanced

         ``` java
         @Configuration
         public class ApplicationContextConfig {
         
             @Bean
             //@LoadBalanced()   //使用@LoadBalanced注解赋予RestTemplate负载均衡的能力
             public RestTemplate getRestTemplate() {
                 return new RestTemplate();
             }
         }

      2. LoadBalancer接口

         ``` java
         import org.springframework.cloud.client.ServiceInstance;
         
         import java.util.List;
         
         /**
          * @author 汪重阳
          * @version 1.0
          */
         public interface LoadBalancer {
             ServiceInstance instances(List<ServiceInstance> serviceInstances);
         }

      3. MyLB

         ``` java
         import org.springframework.cloud.client.ServiceInstance;
         import org.springframework.stereotype.Component;
         
         import java.util.List;
         import java.util.concurrent.atomic.AtomicInteger;
         
         /**
          * @author 汪重阳
          * @version 1.0
          */
         @Component
         public class MyLB implements LoadBalancer {
         
             private AtomicInteger atomicInteger = new AtomicInteger(0);
         
             public final int getAndIncrement() {
                 int current;
                 int next;
                 do {
                     current = atomicInteger.get();
                     next = current >= 2147483647 ? 0 : current + 1;
                 } while (!this.atomicInteger.compareAndSet(current, next));
                 System.out.println("******第几次访问，次数next：" + next);
                 return next;
             }
         
             // 负载均衡算法：rest接口第几次请求数 % 服务器集群总数量 = 实际调用服务器位置下标  ，每次服务重启动后rest接口计数从1开始。
             @Override
             public ServiceInstance instances(List<ServiceInstance> serviceInstances) {
                 int index = getAndIncrement() % serviceInstances.size();
                 return serviceInstances.get(index);
             }
         }

      4. OrderController类修改

         ``` java
         @Slf4j
         @RestController
         public class OrderController {
         
             .......
         
             @Resource
             private LoadBalancer loadBalancer;
             @Resource
             private DiscoveryClient discoveryClient;
         
            .......
         
             @GetMapping(value = "/consumer/payment/lb")
             public String getPaymentLB() {
                 List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");
         
                 if (instances == null || instances.size() <= 0) {
                     return null;
                 }
         
                 ServiceInstance serviceInstance = loadBalancer.instances(instances);
                 URI uri = serviceInstance.getUri();
         
                 return restTemplate.getForObject(uri + "/payment/lb", String.class);
             }
         }

      5. 测试

         进入网页 http://localhost/consumer/payment/lb，查看页面数据是否正确

## 八、OpenFeign 服务接口调用

### 1、概述

1. OpenFeign是什么

   官网解释：https://cloud.spring.io/spring-cloud-static/Hoxton.SR1/reference/htmlsingle/#spring-cloud-openfeign

   Feign是一个声明式WebService客户端。使用Feign能让编写Web Service客户端更加简单。它的使用方法是定义一个服务接口然后在上面添加注解。Feign也支持可拔插式的编码器和解码器。Spring Cloud对Feign进行了封装，使其支持了Spring MVC标准注解和HttpMessageConverters。Feign可以与Eureka和Ribbon组合使用以支持负载均衡

   Feign是一个声明式的Web服务客户端，让编写Web服务客户端变得非常容易，只需创建一个接口并在接口上添加注解即可

   Github地址：https://github.com/spring-cloud/spring-cloud-openfeign

2. 能干嘛

   - Feign旨在使编写Java Http客户端变得更容易。

     前面在使用Ribbon+RestTemplate时，利用RestTemplate对http请求的封装处理，形成了一套模版化的调用方法。但是在实际开发中，由于对服务依赖的调用可能不止一处，往往一个接口会被多处调用，所以通常都会针对每个微服务自行封装一些客户端类来包装这些依赖服务的调用。所以，Feign在此基础上做了进一步封装，由他来帮助我们定义和实现依赖服务接口的定义。在Feign的实现下，我们只需创建一个接口并使用注解的方式来配置它(以前是Dao接口上面标注Mapper注解,现在是一个微服务接口上面标注一个Feign注解即可)，即可完成对服务提供方的接口绑定，简化了使用Spring cloud Ribbon时，自动封装服务调用客户端的开发量。

   - Feign集成了Ribbon

     利用Ribbon维护了Payment的服务列表信息，并且通过轮询实现了客户端的负载均衡。而与Ribbon不同的是，通过feign只需要定义服务绑定接口且以声明式的方法，优雅而简单的实现了服务调用

3. Feign和OpenFeign两者区别

   - Feign

     Feign是Spring Cloud组件中的一个轻量级RESTful的HTTP服务客户端。Feign内置了Ribbon，用来做客户端负载均衡，去调用服务注册中心的服务。Feign的使用方式是：使用Feign的注解定义接口，调用这个接口，就可以调用服务注册中心的服务。

     ``` xml
     <dependency>
         <groupId>org.springframework.cloud</groupId>
         <artifactId>spring-cloud-starter-feign</artifactId>
     </dependency>

   - OpenFeign

     OpenFeign是Spring Cloud 在Feign的基础上支持了SpringMVC的注解，如@RequesMapping等等。OpenFeign的@FeignClient可以解析SpringMVC的@RequestMapping注解下的接口，并通过动态代理的方式产生实现类，实现类中做负载均衡并调用其他服务。

     ``` xml
     <dependency>
         <groupId>org.springframework.cloud</groupId>
         <artifactId>spring-cloud-starter-openfeign</artifactId>
     </dependency>

### 2、OpenFeign 使用步骤

1. 接口+注解

   微服务调用接口+@FeignClient

2. 新建 cloud-consumer-feign-order80 项目

   Feign在消费端使用

3. 改写 POM.xml 文件

   ``` xml
   <dependencies>
       <!-- openfeign -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-openfeign</artifactId>
       </dependency>
   
       <!-- eureka-client -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
       </dependency>
   
       <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
       <dependency>
           <groupId>com.atguigu.springcloud</groupId>
           <artifactId>cloud-api-commons</artifactId>
           <version>${project.version}</version>
       </dependency>
   
       <!-- web -->
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-web</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-actuator</artifactId>
       </dependency>
   
       <!-- 一般通用配置 -->
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <optional>true</optional>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-test</artifactId>
           <version>2.7.12</version>
       </dependency>
   </dependencies>

4. 编写 yml 配置文件

   ``` yml
   server:
     port: 8888
   
   eureka:
     client:
       register-with-eureka: false
       service-url:
         defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/

5. 创建主启动类

   ``` java
   @SpringBootApplication
   @EnableFeignClients
   public class OrderFeignMain80 {
       public static void main(String[] args) {
           SpringApplication.run(OrderFeignMain80.class, args);
       }
   }

6. 编写业务类

   业务逻辑接口+@FeignClient配置调用provider服务

   1. 新建PaymentFeignService接口并新增注解@FeignClient

      ``` java
      @Component
      @FeignClient(value = "CLOUD-PAYMENT-SERVICE")
      public interface PaymentFeignService {
          @GetMapping(value = "/payment/get/{id}")
          public CommonResult<Payment> getPaymentById(@PathVariable("id") Long id);
      }

   2. 控制层 Controller

      ``` java
      @Slf4j
      @RestController
      public class OrderFeignController {
          @Resource
          private PaymentFeignService paymentFeignService;
      
          @GetMapping(value = "/consumer/payment/get/{id}")
          public CommonResult<Payment> getPaymentById(@PathVariable("id") Long id) {
              return paymentFeignService.getPaymentById(id);
          }
      }

7. 测试

   先启动2个eureka集群7001/7002，再启动2个微服务8001/8002，启动OpenFeign启动，进入网页 http://localhost:8888/consumer/payment/get/31，查看数据。

   > Feign自带负载均衡配置项

### 3、OpenFeign 超时控制

1. 超时设置，故意设置超时演示出错情况

   1. 服务提供方8001故意写暂停程序

      ``` java
      @Slf4j
      @RestController
      public class PaymentController {
      
          @Value("${server.port}")
          private String serverPort;
          
          ......
      
          @GetMapping(value = "/payment/feign/timeout")
          public String paymentFeignTimeout() {
              try {
                  TimeUnit.SECONDS.sleep(3);
              } catch (InterruptedException e) {
                  throw new RuntimeException(e);
              }
              return serverPort;
          }
      }

   2. 服务消费方80添加超时方法PaymentFeignService

      ``` java
      @Component
      @FeignClient(value = "CLOUD-PAYMENT-SERVICE")
      public interface PaymentFeignService {
          
          .......
      
          @GetMapping(value = "/payment/feign/timeout")
          public String paymentFeignTimeout();
      }

   3. 服务消费方80添加超时方法OrderFeignController

      ``` java
      @Slf4j
      @RestController
      public class OrderFeignController {
          @Resource
          private PaymentFeignService paymentFeignService;
      
          ......
      
          @GetMapping(value = "/consumer/payment/feign/timeout")
          public String paymentFeignTimeout() {
              // openfeign-ribbon，客户端一般默认等待1秒钟
              return paymentFeignService.paymentFeignTimeout();
          }
      }

   4. 测试

      进入网页 http://localhost:8888/consumer/payment/feign/timeout 测试

2. OpenFeign默认等待1秒钟，超过后报错

3. 是什么

   默认Feign客户端只等待一秒钟，但是服务端处理需要超过1秒钟，导致Feign客户端不想等待了，直接返回报错。

   为了避免这样的情况，有时候我们需要设置Feign客户端的超时控制。

   > yml 文件中开启配置

4. YML文件里需要开启OpenFeign客户端超时控制

   ``` yml
   feign:
     client:
       config:
         default:
           #指的是建立连接所用的时间，适用于网络状况正常的情况下,两端连接所用的时间
           connectTimeout: 5000
           #指的是建立连接后从服务器读取到可用资源所用的时间
           readTimeout: 5000

### 4、OpenFeign 日志打印功能

1. 是什么

   Feign 提供了日志打印功能，我们可以通过配置来调整日志级别，从而了解 Feign 中 Http 请求的细节。说白了就是对Feign接口的调用情况进行监控和输出

2. 日志级别

   - NONE：默认的，不显示任何日志；
   - BASIC：仅记录请求方法、URL、响应状态码及执行时间；
   - HEADERS：除了 BASIC 中定义的信息之外，还有请求和响应的头信息；
   - FULL：除了 HEADERS 中定义的信息之外，还有请求和响应的正文及元数据。

3. 配置日志bean

   ``` java
   @Configuration
   public class FeignConfig {
       @Bean
       Logger.Level feignLoggerLevel() {
           return Logger.Level.FULL;
       }
   }

4. YML文件里需要开启日志的Feign客户端

   ``` yml
   logging:
     level:
       # feign日志以什么级别监控哪个接口
       com.atguigu.springcloud.service.PaymentFeignService: debug

5. 后台日志查看

   ![img](SpringCloud学习笔记尚硅谷/OpenFeign服务接口调用/日志打印功能后台日志查看.png)

## 九、Hystrix 断路器

### 1、概述

1. 分布式系统面临的问题

   复杂分布式体系结构中的应用程序有数十个依赖关系，每个依赖关系在某些时候将不可避免地失败。

   ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/概述分布式系统面临的问题.png)

   > 服务雪崩
   >
   > 多个微服务之间调用的时候，假设微服务A调用微服务B和微服务C，微服务B和微服务C又调用其它的微服务，这就是所谓的“扇出”。如果扇出的链路上某个微服务的调用响应时间过长或者不可用，对微服务A的调用就会占用越来越多的系统资源，进而引起系统崩溃，所谓的“雪崩效应”.
   >
   > 对于高流量的应用来说，单一的后端依赖可能会导致所有服务器上的所有资源都在几秒钟内饱和。比失败更糟糕的是，这些应用程序还可能导致服务之间的延迟增加，备份队列，线程和其他系统资源紧张，导致整个系统发生更多的级联故障。这些都表示需要对故障和延迟进行隔离和管理，以便单个依赖关系的失败，不能取消整个应用程序或系统。
   >
   > 所以，通常当你发现一个模块下的某个实例失败后，这时候这个模块依然还会接收流量，然后这个有问题的模块还调用了其他的模块，这样就会发生级联故障，或者叫雪崩。

2. 是什么

   Hystrix是一个用于处理分布式系统的延迟和容错的开源库，在分布式系统里，许多依赖不可避免的会调用失败，比如超时、异常等，Hystrix能够保证在一个依赖出问题的情况下，不会导致整体服务失败，避免级联故障，以提高分布式系统的弹性。

   “断路器”本身是一种开关装置，当某个服务单元发生故障之后，通过断路器的故障监控（类似熔断保险丝），向调用方返回一个符合预期的、可处理的备选响应（FallBack），而不是长时间的等待或者抛出调用方无法处理的异常，这样就保证了服务调用方的线程不会被长时间、不必要地占用，从而避免了故障在分布式系统中的蔓延，乃至雪崩。

3. 能干嘛

   - 服务降级
   - 服务熔断
   - 接近实时的监控

4. 官网资料

   官网地址：https://github.com/Netflix/Hystrix/wiki/How-To-Use

5. Hystrix官宣，停更进维

   官网地址：https://github.com/Netflix/Hystrix

   - 被动修复bugs
   - 不再接受合并请求
   - 不再发布新版本

### 2、Hystrix 重要概念

1. 服务降级

   - 服务器忙，请稍后再试，不让客户端等待并立刻返回一个友好提示，fallback

   - 哪些情况会出发降级
     - 程序运行异常
     - 超时
     - 服务熔断触发服务降级
     - 线程池/信号量打满也会导致服务降级

2. 服务熔断

   - 类比保险丝达到最大服务访问后，直接拒绝访问，拉闸限电，然后调用服务降级的方法并返回友好提示

   - 就是保险丝

     服务的降级->进而熔断->恢复调用链路

3. 服务限流

   秒杀高并发等操作，严禁一窝蜂的过来拥挤，大家排队，一秒钟N个，有序进行

### 3、Hystrix 案例

1. 构建

   1. 新建 cloud-provider-hystrix-payment8001 项目

   2. 更改 pom.xml 文件

      ``` xml
      <dependencies>
           <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-netflix-hystrix -->
           <dependency>
               <groupId>org.springframework.cloud</groupId>
               <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
               <version>2.2.10.RELEASE</version>
           </dependency>
      
           <!-- eureka-client -->
           <dependency>
               <groupId>org.springframework.cloud</groupId>
               <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
           </dependency>
      
           <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
           <dependency>
               <groupId>com.atguigu.springcloud</groupId>
               <artifactId>cloud-api-commons</artifactId>
               <version>${project.version}</version>
           </dependency>
      
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-web</artifactId>
           </dependency>
      
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-actuator</artifactId>
           </dependency>
      
           <dependency>
               <groupId>org.projectlombok</groupId>
               <artifactId>lombok</artifactId>
               <optional>true</optional>
           </dependency>
      
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-starter-test</artifactId>
               <version>2.7.12</version>
           </dependency>
      </dependencies>

   3. 改写 yml 配置文件

      ``` yml
      server:
        port: 8001
      
      spring:
        application:
          name: cloud-provider-hystrix-payment
      
      eureka:
        client:
          register-with-eureka: true
          fetch-registry: true
          service-url:
            #defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka
            defaultZone: http://eureka7001.com:7001/eureka

   4. 创建主启动类

      ``` java
      @SpringBootApplication
      @EnableEurekaClient
      public class PaymentHystrixMain8001 {
          public static void main(String[] args) {
              SpringApplication.run(PaymentHystrixMain8001.class, args);
          }
      }

   5. 编写业务类

      - service

        ``` java
        @Service
        public class PaymentService {
            /**
             * 正常访问，肯定OK
             *
             * @param id
             * @return
             */
            public String paymentInfo_OK(Integer id) {
                return "线程池：" + Thread.currentThread().getName() + "   paymentInfo_OK, id：  " + id + "\t" + "o(n_n)o哈哈~";
            }
        
            public String paymentInfo_TimeOut(Integer id) {
                int timeNumber = 3;
                try {
                    TimeUnit.SECONDS.sleep(timeNumber);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                return "线程池：" + Thread.currentThread().getName() + "   paymentInfo_TimeOut, id：  " + id + "\t" + "o(n_n)o哈哈~" + "   耗时(秒)：" + timeNumber;
            }
        }

      - controller

        ``` java
        @Slf4j
        @RestController
        public class PaymentController {
        
            @Resource
            private PaymentService paymentService;
        
            @Value("${server.port}")
            private String serverPort;
        
            @GetMapping(value = "/payment/hystrix/ok/{id}")
            public String paymentInfo_OK(@PathVariable("id") Integer id) {
                String result = paymentService.paymentInfo_OK(id);
                log.info("*******result：" + result);
                return result;
            }
        
            @GetMapping(value = "/payment/hystrix/timeout/{id}")
            public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
                String result = paymentService.paymentInfo_TimeOut(id);
                log.info("*******result：" + result);
                return result;
            }
        }

   6. 正常测试

      启动eureka7001，启动cloud-provider-hystrix-payment8001，访问网页 http://localhost:8001/payment/hystrix/ok/31 和网页 http://localhost:8001/payment/hystrix/timeout/31 即可。

      > 以上述为根基平台，从正确->错误->降级熔断->恢复

2. 高并发测试

   1. 上述在非高并发情形下，还能勉强满足   but......

   2. Jmeter压测测试

      开启Jmeter，来20000个并发压死8001，20000个请求都去访问paymentInfo_TimeOut服务

      使用网址：http://localhost:8001/payment/hystrix/ok/31 来进行访问

      结果：两个都在自己转圈圈

      > 卡死原因：tomcat的默认的工作线程数被打满 了，没有多余的线程来分解压力和处理。

   3. Jmeter压测结论

      上面还是服务提供者8001自己测试，假如此时外部的消费者80也来访问，那消费者只能干等，最终导致消费端80不满意，服务端8001直接被拖死

   4. 看热闹不嫌弃事大，80新建加入

      1. 新建 cloud-consumer-feign-hystrix-order80 项目

      2. 编写 pom.xml 文件

         ``` xml
         <dependencies>
             <dependency>
                 <groupId>org.springframework.cloud</groupId>
                 <artifactId>spring-cloud-starter-openfeign</artifactId>
             </dependency>
         
             <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-netflix-hystrix -->
             <dependency>
                 <groupId>org.springframework.cloud</groupId>
                 <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
                 <version>2.2.10.RELEASE</version>
             </dependency>
         
             <!-- eureka-client -->
             <dependency>
                 <groupId>org.springframework.cloud</groupId>
                 <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
             </dependency>
         
             <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
             <dependency>
                 <groupId>com.atguigu.springcloud</groupId>
                 <artifactId>cloud-api-commons</artifactId>
                 <version>${project.version}</version>
             </dependency>
         
             <dependency>
                 <groupId>org.springframework.boot</groupId>
                 <artifactId>spring-boot-starter-web</artifactId>
             </dependency>
         
             <dependency>
                 <groupId>org.springframework.boot</groupId>
                 <artifactId>spring-boot-starter-actuator</artifactId>
             </dependency>
         
             <dependency>
                 <groupId>org.projectlombok</groupId>
                 <artifactId>lombok</artifactId>
                 <optional>true</optional>
             </dependency>
         
             <dependency>
                 <groupId>org.springframework.boot</groupId>
                 <artifactId>spring-boot-starter-test</artifactId>
                 <version>2.7.12</version>
             </dependency>
         </dependencies>

      3. 改写 yml 配置文件

         ``` yml
         server:
           port: 8888
         
         eureka:
           client:
             register-with-eureka: false
             service-url:
               defaultZone: http://eureka7001.com:7001/eureka/

      4. 添加主启动类

         ``` java
         @SpringBootApplication
         @EnableFeignClients
         public class OrderHystrixMain80 {
             public static void main(String[] args) {
                 SpringApplication.run(OrderHystrixMain80.class, args);
             }
         }

      5. 编写业务类

         - PaymentHystrixService

           ``` java
           @Component
           @FeignClient(value = "CLOUD-PROVIDER-HYSTRIX-PAYMENT")
           public interface PaymentHytrixService {
           
               @GetMapping(value = "/payment/hystrix/ok/{id}")
               public String paymentInfo_OK(@PathVariable("id") Integer id);
           
               @GetMapping(value = "/payment/hystrix/timeout/{id}")
               public String paymentInfo_TimeOut(@PathVariable("id") Integer id);
           }

         - OrderHystirxController

           ``` java
           @Slf4j
           @RestController
           public class OrderHytrixController {
           
               @Resource
               private PaymentHytrixService paymentHytrixService;
           
               @GetMapping(value = "/consumer/payment/hystrix/ok/{id}")
               public String paymentInfo_OK(@PathVariable("id") Integer id) {
                   String result = paymentHytrixService.paymentInfo_OK(id);
                   return result;
               }
           
               @GetMapping(value = "/consumer/payment/hystrix/timeout/{id}")
               public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
                   String result = paymentHytrixService.paymentInfo_TimeOut(id);
                   return result;
               }
           }

      6. 正常测试

         进入网页 http://localhost:8888/consumer/payment/hystrix/ok/31 进行测试

      7. 高并发测试

         使用JMeter 进行访问，消费端80微服务再去访问正常的Ok微服务8001地址，进入网址：http://localhost:8888/consumer/payment/hystrix/ok/3 进行访问

         > 结果：消费者80，o(╥﹏╥)o
         >
         > - 要么转圈圈等待
         > - 要么消费端报超时错误

3. 故障现象和导致原因

   8001同一层次的其它接口服务被困死，因为tomcat线程池里面的工作线程已经被挤占完毕。80此时调用8001，客户端访问响应缓慢，转圈圈

4. 上诉结论

   正因为有上述故障或不佳表现，才有我们的降级/容错/限流等技术诞生

5. 如何解决？解决的要求

   1. 超时导致服务器变慢(转圈)

      超时不再等待

   2. 出错(宕机或程序运行出错)

      出错要有兜底

   3. 解决

      1.  对方服务(8001)超时了，调用者(80)不能一直卡死等待，必须有服务降级
      2. 对方服务(8001)down机了，调用者(80)不能一直卡死等待，必须有服务降级
      3. 对方服务(8001)OK，调用者(80)自己出故障或有自我要求（自己的等待时间小于服务提供者），自己处理降级

6. 服务降级

   1. 降级配置

      @HystrixCommand

   2. 8001先从自身找问题

      设置自身调用超时时间的峰值，峰值内可以正常运行，超过了需要有兜底的方法处理，作服务降级fallback

   3. 8001fallback

      1. 业务类启用

         ``` java
         @Service
         public class PaymentService {
         
             /**
              * 正常访问，肯定OK
              *
              * @param id
              * @return
              */
             public String paymentInfo_OK(Integer id) {
                 return "线程池：" + Thread.currentThread().getName() + "   paymentInfo_OK, id：  " + id + "\t" + "o(n_n)o哈哈~";
             }
         
             @HystrixCommand(fallbackMethod = "paymentInfo_TimeOutHandler", commandProperties = {
                     @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "5000")
             })
             public String paymentInfo_TimeOut(Integer id) {
                 int timeNumber = 3000;
                 try {
                     TimeUnit.MILLISECONDS.sleep(timeNumber);
                 } catch (InterruptedException e) {
                     throw new RuntimeException(e);
                 }
                 //int age = 10 / 0;
                 return "线程池：" + Thread.currentThread().getName() + "   paymentInfo_TimeOut, id：  " + id + "\t" + "o(n_n)o哈哈~" + "   耗时(秒)：" + timeNumber;
             }
         
             public String paymentInfo_TimeOutHandler(Integer id) {
                 return "线程池：" + Thread.currentThread().getName() + "   8001系统繁忙，请稍后再试, id：  " + id + "\t" + "/(ㄒoㄒ)/~~";
             }
         }
         ```

         @HystrixCommand报异常后如何处理

         - 一旦调用服务方法失败并抛出了错误信息后，会自动调用@HystrixCommand标注好的fallbackMethod调用类中的指定方法

         > 上图故意制造两个异常：
         >
         > 1. int age = 10/0; 计算异常
         >
         > 2. 我们能接受3秒钟，它运行5秒钟，超时异常。
         >
         > 当前服务不可用了，做服务降级，兜底的方案都是paymentInfo_TimeOutHandler

      2. 主启动类激活

         ``` java
         @SpringBootApplication
         @EnableEurekaClient
         @EnableCircuitBreaker
         public class PaymentHystrixMain8001 {
             public static void main(String[] args) {
                 SpringApplication.run(PaymentHystrixMain8001.class, args);
             }
         }
         ```

         > 添加新注解@EnableCircuitBreaker

   4. 80fallback

      1. 80订单微服务，也可以更好的保护自己，自己也依样画葫芦进行客户端降级保护

      2. 我们自己配置过的热部署方式对java代码的改动明显，但对@HystrixCommand内属性的修改建议重启微服务

      3. 修改 yml 配置文件

         ``` yml
         feign:
           circuitbreaker:
             enabled: true

      4. 修改主启动类

         ``` java
         @SpringBootApplication
         @EnableFeignClients
         @EnableHystrix
         public class OrderHystrixMain80 {
             public static void main(String[] args) {
                 SpringApplication.run(OrderHystrixMain80.class, args);
             }
         }
         ```

         > 添加 @EnableHystrix 注解

      5. 改写 业务类

         ``` java
         @Slf4j
         @RestController
         public class OrderHytrixController {
         
             @Resource
             private PaymentHytrixService paymentHytrixService;
         
             @GetMapping(value = "/consumer/payment/hystrix/ok/{id}")
             public String paymentInfo_OK(@PathVariable("id") Integer id) {
                 String result = paymentHytrixService.paymentInfo_OK(id);
                 return result;
             }
         
             @GetMapping(value = "/consumer/payment/hystrix/timeout/{id}")
             @HystrixCommand(fallbackMethod = "paymentTimeOutFallbackMethod", commandProperties = {
                     @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "1500")
             })
             public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
         
                 int a = 10 / 0;
                 String result = paymentHytrixService.paymentInfo_TimeOut(id);
                 return result;
             }
         
             public String paymentTimeOutFallbackMethod(@PathVariable("id") Integer id) {
                 return "我是消费者80,对方支付系统繁忙请10秒钟后再试或者自己运行出错请检查自己,o(╥﹏╥)o";
             }
         }

   5. 目前问题

      - 每个业务方法对应一个兜底的方法，代码膨胀
      - 统一和自定义的分开

   6. 解决问题

      - 每个方法配置一个？？？膨胀

        ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/案例服务降级解决问题1.png)

        > @DefaultProperties(defaultFallback = "")
        >
        >  1：1 每个方法配置一个服务降级方法，技术上可以，实际上傻X
        >
        >  1：N 除了个别重要核心业务有专属，其它普通的可以通过@DefaultProperties(defaultFallback = "") 统一跳转到统一处理结果页面
        >
        >  通用的和独享的各自分开，避免了代码膨胀，合理减少了代码量，O(∩_∩)O哈哈~

        Controller类代码：

        ``` java
        @Slf4j
        @RestController
        @DefaultProperties(defaultFallback = "payment_Global_FallbackMethod")
        public class OrderHytrixController {
        
            ......
        
            @GetMapping(value = "/consumer/payment/hystrix/timeout/{id}")
            //@HystrixCommand(fallbackMethod = "paymentTimeOutFallbackMethod", commandProperties = {
            //        @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "1500")
            //})
            @HystrixCommand
            public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
        
                int a = 10 / 0;
                String result = paymentHytrixService.paymentInfo_TimeOut(id);
                return result;
            }
        
          	......
        
            // 下面是全局 fallback 方法
            public String payment_Global_FallbackMethod() {
                return "Global异常处理信息，请稍后再试，/(ㄒoㄒ)/~~";
            }
        }

      - 和业务逻辑混一起？？？混乱

        1. 服务降级，客户端去调用服务端，碰上服务端宕机或关闭

        2. 本次案例服务降级处理是在客户端80实现完成的，与服务端8001没有关系。只需要为Feign客户端定义的接口添加一个服务降级处理的实现类即可实现解耦

        3. 未来我们要面对的异常

           - 运行
           - 超时
           - 宕机

        4. 再看我们的业务类PaymentController、

           混合在一块 ，每个业务方法都要提供一个。

        5. 修改cloud-consumer-feign-hystrix-order80

        6. 根据cloud-consumer-feign-hystrix-order80已经有的PaymentHystrixService接口，重新新建一个类(PaymentFallbackService)实现该接口，统一为接口里面的方法进行异常处理

        7. PaymentFallbackService类实现PaymentFeignClientService接口

           ``` java
           @Component
           public class PaymentFallbackService implements PaymentHytrixService {
               @Override
               public String paymentInfo_OK(Integer id) {
                   return "-----PaymentFallbackService fall back-paymentInfo_OK, /(ㄒoㄒ)/~~";
               }
           
               @Override
               public String paymentInfo_TimeOut(Integer id) {
                   return "-----PaymentFallbackService fall back-paymentInfo_TimeOut, /(ㄒoㄒ)/~~";
               }
           }

        8. 修改 yml 配置文件

           ``` yml
           feign:
             circuitbreaker:
               enabled: true #在Feign中开启Hystrix

        9. PaymentFeignClientService接口

           ``` java
           @Component
           @FeignClient(value = "CLOUD-PROVIDER-HYSTRIX-PAYMENT", fallback = PaymentFallbackService.class)
           public interface PaymentHytrixService {
           	......
           }

        10. 测试

            单个eureka先启动7001，PaymentHystrixMain8001启动，正常访问测试网页 http://localhost:8888/consumer/payment/hystrix/ok/2，故意关闭微服务8001，此时服务端provider已经down了，但是我们做了服务降级处理，让客户端在服务端不可用时也会获得提示信息而不会挂起耗死服务器

7. 服务熔断

   1. 断路器

      一句话就是家里的保险丝

   2. 熔断是什么

      相关网址：https://martinfowler.com/bliki/CircuitBreaker.html

      > - 熔断机制概述
      >
      >   熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务出错不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。
      >
      > - 当检测到该节点微服务调用响应正常后，恢复调用链路。
      >
      >   在Spring Cloud框架里，熔断机制通过Hystrix实现。Hystrix会监控微服务间调用的状况，当失败的调用到一定阈值，缺省是5秒内20次调用失败，就会启动熔断机制。熔断机制的注解是@HystrixCommand。

   3. 实操

      1. 修改cloud-provider-hystrix-payment8001

      2. PaymentService

         ``` java
         //=========服务熔断
         @HystrixCommand(fallbackMethod = "paymentCircuitBreaker_fallback", commandProperties = {
             @HystrixProperty(name = "circuitBreaker.enabled", value = "true"),      // 是否开启断路器
             @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),     // 请求次数
             @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "10000"),       // 时间窗口期
             @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "60"),       // 失败率达到多少后跳闸
         })
         public String paymentCircuitBreaker(@PathVariable("id") Integer id) {
             if (id < 0) {
                 throw new RuntimeException("******id 不能负数");
             }
             String serialNumber = IdUtil.simpleUUID();
         
             return Thread.currentThread().getName() + "\t" + "调用成功，流水号: " + serialNumber;
         }
         
         public String paymentCircuitBreaker_fallback(@PathVariable("id") Integer id) {
             return "id 不能负数，请稍后再试，/(ㄒoㄒ)/~~   id: " + id;
         }

      3. PaymentController

         ``` java
         // ====服务熔断
         @GetMapping("/payment/circuit/{id}")
         public String paymentCircuitBreaker(@PathVariable("id") Integer id) {
             String result = paymentService.paymentCircuitBreaker(id);
             log.info("****result: " + result);
             return result;
         }

      4. 测试

         自测cloud-provider-hystrix-payment8001，进入以下的网址测试：

         - 正确：http://localhost:8001/payment/circuit/31
         - 错误：http://localhost:8001/payment/circuit/-31

         一次正确一次错误trytry，多次错误，然后慢慢正确，发现刚开始不满足条件，就算是正确的访问地址也不能进行

   4. 原理(小总结)

      1. 大神结论

         ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/案例服务熔断原理大神结论.png)

      2. 熔断类型

         - 熔断打开

           请求不再进行调用当前服务，内部设置时钟一般为MTTR（平均故障处理时间)，当打开时长达到所设时钟则进入半熔断状态

         - 熔断关闭

           熔断关闭不会对服务进行熔断

         - 熔断半开

           部分请求根据规则调用当前服务，如果请求成功且符合规则则认为当前服务恢复正常，关闭熔断

      3. 官网断路器流程图

         ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/案例服务熔断原理官网断路器流程图.png)

         1. 官网步骤

            ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/案例服务熔断原理官网断路器流程图官网步骤.png)

         2. 断路器在什么情况下开始起作用

            ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/案例服务熔断原理官网断路器流程图断路器什么情况下开始起作用.png)

            涉及到断路器的三个重要参数：快照时间窗、请求总数阀值、错误百分比阀值。

            - 快照时间窗：断路器确定是否打开需要统计一些请求和错误数据，而统计的时间范围就是快照时间窗，默认为最近的10秒。
            - 请求总数阀值：在快照时间窗内，必须满足请求总数阀值才有资格熔断。默认为20，意味着在10秒内，如果该hystrix命令的调用次数不足20次，即使所有的请求都超时或其他原因失败，断路器都不会打开。
            - 错误百分比阀值：当请求总数在快照时间窗内超过了阀值，比如发生了30次调用，如果在这30次调用中，有15次发生了超时异常，也就是超过50%的错误百分比，在默认设定50%阀值情况下，这时候就会将断路器打开。

         3. 断路器开启或者关闭的条件

            - 当满足一定的阀值的时候（默认10秒内超过20个请求次数）
            - 当失败率达到一定的时候（默认10秒内超过50%的请求失败）
            - 到达以上阀值，断路器将会开启
            - 当开启的时候，所有请求都不会进行转发
            - 一段时间之后（默认是5秒），这个时候断路器是半开状态，会让其中一个请求进行转发。如果成功，断路器会关闭，若失败，继续开启。重复4和5

         4. 断路器打开之后

            - 再有请求调用的时候，将不会调用主逻辑，而是直接调用降级fallback。通过断路器，实现了自动地发现错误并将降级逻辑切换为主逻辑，减少响应延迟的效果。

            - 原来的主逻辑要如何恢复呢？

              对于这一问题，hystrix也为我们实现了自动恢复功能。当断路器打开，对主逻辑进行熔断之后，hystrix会启动一个休眠时间窗，在这个时间窗内，降级逻辑是临时的成为主逻辑，当休眠时间窗到期，断路器将进入半开状态，释放一次请求到原来的主逻辑上，如果此次请求正常返回，那么断路器将继续闭合，主逻辑恢复，如果这次请求依然有问题，断路器继续进入打开状态，休眠时间窗重新计时。

         5. All配置

            ``` java
            //========================All
            @HystrixCommand(fallbackMethod = "str_fallbackMethod",
                    groupKey = "strGroupCommand",
                    commandKey = "strCommand",
                    threadPoolKey = "strThreadPool",
            
                    commandProperties = {
            // 设置隔离策略，THREAD 表示线程池 SEMAPHORE：信号池隔离
            @HystrixProperty(name = "execution.isolation.strategy", value = "THREAD"),
            // 当隔离策略选择信号池隔离的时候，用来设置信号池的大小（最大并发数）
            @HystrixProperty(name = "execution.isolation.semaphore.maxConcurrentRequests", value = "10"),
            // 配置命令执行的超时时间
            @HystrixProperty(name = "execution.isolation.thread.timeoutinMilliseconds", value = "10"),
            // 是否启用超时时间
            @HystrixProperty(name = "execution.timeout.enabled", value = "true"),
            // 执行超时的时候是否中断
            @HystrixProperty(name = "execution.isolation.thread.interruptOnTimeout", value = "true"),
            // 执行被取消的时候是否中断
            @HystrixProperty(name = "execution.isolation.thread.interruptOnCancel", value = "true"),
            // 允许回调方法执行的最大并发数
            @HystrixProperty(name = "fallback.isolation.semaphore.maxConcurrentRequests", value = "10"),
            // 服务降级是否启用，是否执行回调函数
            @HystrixProperty(name = "fallback.enabled", value = "true"),
            // 是否启用断路器
            @HystrixProperty(name = "circuitBreaker.enabled", value = "true"),
            // 该属性用来设置在滚动时间窗中，断路器熔断的最小请求数。例如，默认该值为 20 的时候，
            // 如果滚动时间窗（默认10秒）内仅收到了19个请求， 即使这19个请求都失败了，断路器也不会打开。
            @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "20"),
            // 该属性用来设置在滚动时间窗中，表示在滚动时间窗中，在请求数量超过
            // circuitBreaker.requestVolumeThreshold 的情况下，如果错误请求数的百分比超过50,
                            // 就把断路器设置为 "打开" 状态，否则就设置为 "关闭" 状态。
            @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
            // 该属性用来设置当断路器打开之后的休眠时间窗。 休眠时间窗结束之后，
            // 会将断路器置为 "半开" 状态，尝试熔断的请求命令，如果依然失败就将断路器继续设置为 "打开" 状态，
            // 如果成功就设置为 "关闭" 状态。
            @HystrixProperty(name = "circuitBreaker.sleepWindowinMilliseconds", value = "5000"),
            // 断路器强制打开
            @HystrixProperty(name = "circuitBreaker.forceOpen", value = "false"),
            // 断路器强制关闭
            @HystrixProperty(name = "circuitBreaker.forceClosed", value = "false"),
            // 滚动时间窗设置，该时间用于断路器判断健康度时需要收集信息的持续时间
            @HystrixProperty(name = "metrics.rollingStats.timeinMilliseconds", value = "10000"),
            // 该属性用来设置滚动时间窗统计指标信息时划分"桶"的数量，断路器在收集指标信息的时候会根据
            // 设置的时间窗长度拆分成多个 "桶" 来累计各度量值，每个"桶"记录了一段时间内的采集指标。
            // 比如 10 秒内拆分成 10 个"桶"收集这样，所以 timeinMilliseconds 必须能被 numBuckets 整除。否则会抛异常
            @HystrixProperty(name = "metrics.rollingStats.numBuckets", value = "10"),
            // 该属性用来设置对命令执行的延迟是否使用百分位数来跟踪和计算。如果设置为 false, 那么所有的概要统计都将返回 -1。
            @HystrixProperty(name = "metrics.rollingPercentile.enabled", value = "false"),
            // 该属性用来设置百分位统计的滚动窗口的持续时间，单位为毫秒。
            @HystrixProperty(name = "metrics.rollingPercentile.timeInMilliseconds", value = "60000"),
            // 该属性用来设置百分位统计滚动窗口中使用 “ 桶 ”的数量。
            @HystrixProperty(name = "metrics.rollingPercentile.numBuckets", value = "60000"),
            // 该属性用来设置在执行过程中每个 “桶” 中保留的最大执行次数。如果在滚动时间窗内发生超过该设定值的执行次数，
            // 就从最初的位置开始重写。例如，将该值设置为100, 滚动窗口为10秒，若在10秒内一个 “桶 ”中发生了500次执行，
            // 那么该 “桶” 中只保留 最后的100次执行的统计。另外，增加该值的大小将会增加内存量的消耗，并增加排序百分位数所需的计算时间。
            @HystrixProperty(name = "metrics.rollingPercentile.bucketSize", value = "100"),
            // 该属性用来设置采集影响断路器状态的健康快照（请求的成功、 错误百分比）的间隔等待时间。
            @HystrixProperty(name = "metrics.healthSnapshot.intervalinMilliseconds", value = "500"),
            // 是否开启请求缓存
            @HystrixProperty(name = "requestCache.enabled", value = "true"),
            // HystrixCommand的执行和事件是否打印日志到 HystrixRequestLog 中
            @HystrixProperty(name = "requestLog.enabled", value = "true"),
                    },
                    threadPoolProperties = {
            // 该参数用来设置执行命令线程池的核心线程数，该值也就是命令执行的最大并发量
            @HystrixProperty(name = "coreSize", value = "10"),
            // 该参数用来设置线程池的最大队列大小。当设置为 -1 时，线程池将使用 SynchronousQueue 实现的队列，
            // 否则将使用 LinkedBlockingQueue 实现的队列。
            @HystrixProperty(name = "maxQueueSize", value = "-1"),
            // 该参数用来为队列设置拒绝阈值。 通过该参数， 即使队列没有达到最大值也能拒绝请求。
            // 该参数主要是对 LinkedBlockingQueue 队列的补充,因为 LinkedBlockingQueue
                            // 队列不能动态修改它的对象大小，而通过该属性就可以调整拒绝请求的队列大小了。
            @HystrixProperty(name = "queueSizeRejectionThreshold", value = "5"),
                    }
            )
            public String strConsumer() {
            return "hello 2020";
            }
            public String str_fallbackMethod()
            {
            return "*****fall back str_fallbackMethod";
            }

8. 服务限流

   后面高级篇讲解alibaba的Sentinel说明

### 4、Hystrix 工作流程

1. 官网地址

   https://github.com/Netflix/Hystrix/wiki/How-it-Works

2. Hystrix工作流程

   1. 官网图例

      ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/工作流程官网图例.png)

   2. 步骤说明

      1. 创建 HystrixCommand（用在依赖的服务返回单个操作结果的时候） 或 HystrixObserableCommand（用在依赖的服务返回多个操作结果的时候） 对象。
      2. 命令执行。其中 HystrixComand 实现了下面前两种执行方式；而 HystrixObservableCommand 实现了后两种执行方式：execute()：同步执行，从依赖的服务返回一个单一的结果对象， 或是在发生错误的时候抛出异常。queue()：异步执行， 直接返回 一个Future对象， 其中包含了服务执行结束时要返回的单一结果对象。observe()：返回 Observable 对象，它代表了操作的多个结果，它是一个 Hot Obserable（不论 "事件源" 是否有 "订阅者"，都会在创建后对事件进行发布，所以对于 Hot Observable 的每一个 "订阅者" 都有可能是从 "事件源" 的中途开始的，并可能只是看到了整个操作的局部过程）。toObservable()： 同样会返回 Observable 对象，也代表了操作的多个结果，但它返回的是一个Cold Observable（没有 "订阅者" 的时候并不会发布事件，而是进行等待，直到有 "订阅者" 之后才发布事件，所以对于 Cold Observable 的订阅者，它可以保证从一开始看到整个操作的全部过程）。
      3. 若当前命令的请求缓存功能是被启用的， 并且该命令缓存命中， 那么缓存的结果会立即以 Observable 对象的形式 返回。
      4. 检查断路器是否为打开状态。如果断路器是打开的，那么Hystrix不会执行命令，而是转接到 fallback 处理逻辑（第 8 步）；如果断路器是关闭的，检查是否有可用资源来执行命令（第 5 步）。
      5. 线程池/请求队列/信号量是否占满。如果命令依赖服务的专有线程池和请求队列，或者信号量（不使用线程池的时候）已经被占满， 那么 Hystrix 也不会执行命令， 而是转接到 fallback 处理逻辑（第8步）。
      6. Hystrix 会根据我们编写的方法来决定采取什么样的方式去请求依赖服务。HystrixCommand.run() ：返回一个单一的结果，或者抛出异常。HystrixObservableCommand.construct()： 返回一个Observable 对象来发射多个结果，或通过 onError 发送错误通知。
      7. Hystrix会将 "成功"、"失败"、"拒绝"、"超时" 等信息报告给断路器， 而断路器会维护一组计数器来统计这些数据。断路器会使用这些统计数据来决定是否要将断路器打开，来对某个依赖服务的请求进行 "熔断/短路"。
      8. 当命令执行失败的时候， Hystrix 会进入 fallback 尝试回退处理， 我们通常也称该操作为 "服务降级"。而能够引起服务降级处理的情况有下面几种：第4步： 当前命令处于"熔断/短路"状态，断路器是打开的时候。第5步： 当前命令的线程池、 请求队列或 者信号量被占满的时候。第6步：HystrixObservableCommand.construct() 或 HystrixCommand.run() 抛出异常的时候。
      9. 当Hystrix命令执行成功之后， 它会将处理结果直接返回或是以Observable 的形式返回。

      > tips：如果我们没有为命令实现降级逻辑或者在降级处理逻辑中抛出了异常， Hystrix 依然会返回一个 Observable 对象， 但是它不会发射任何结果数据， 而是通过 onError 方法通知命令立即中断请求，并通过onError()方法将引起命令失败的异常发送给调用者。

### 5、服务监控 HystrixDashboard

1. 概述

   除了隔离依赖服务的调用以外，Hystrix还提供了准实时的调用监控（Hystrix Dashboard），Hystrix会持续地记录所有通过Hystrix发起的请求的执行信息，并以统计报表和图形的形式展示给用户，包括每秒执行多少请求多少成功，多少失败等。Netflix通过hystrix-metrics-event-stream项目实现了对以上指标的监控。Spring Cloud也提供了Hystrix Dashboard的整合，对监控内容转化成可视化界面。

2. 仪表盘9001

   1. 新建 cloud-consumer-hystrix-dashboard9001 项目

   2. 改写 pom.xml 文件

      ``` xml
      <dependencies>
          <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-netflix-hystrix-dashboard -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
              <version>2.2.10.RELEASE</version>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
          </dependency>
      
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-actuator</artifactId>
          </dependency>
      
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
      
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
          </dependency>
      </dependencies>

   3. 编写 yml 配置文件

      ``` yml
      server:
        port: 9001

   4. 编写主启动类

      ``` java
      @SpringBootApplication
      @EnableHystrixDashboard
      public class HystrixDashboardMain9001 {
          public static void main(String[] args) {
              SpringApplication.run(HystrixDashboardMain9001.class, args);
          }
      }

   5. 所有Provider微服务提供类(8001/8002/8003)都需要监控依赖配置

      ``` xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

   6. 测试

      启动cloud-consumer-hystrix-dashboard9001该微服务后续将监控微服务8001，点击网址 http://localhost:9001/hystrix

3. 断路器演示(服务监控hystrixDashboard)

   1. 修改cloud-provider-hystrix-payment8001

      注意:新版本Hystrix需要在主启动类MainAppHystrix8001中指定监控路径

      ``` java
      @SpringBootApplication
      @EnableEurekaClient     //本服务启动后会自动注册进eureka服务中
      @EnableCircuitBreaker   //对hystrixR熔断机制的支持
      public class PaymentHystrixMain8001 {
          public static void main(String[] args) {
              SpringApplication.run(PaymentHystrixMain8001.class, args);
          }
      
          /**
           * 此配置是为了服务监控而配置，与服务容错本身无关，springcloud升级后的坑
           * ServletRegistrationBean因为springboot的默认路径不是"/hystrix.stream"，
           * 只要在自己的项目里配置上下面的servlet就可以了
           */
          @Bean
          public ServletRegistrationBean getServlet() {
              HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
              ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
              registrationBean.setLoadOnStartup(1);
              registrationBean.addUrlMappings("/hystrix.stream");
              registrationBean.setName("HystrixMetricsStreamServlet");
              return registrationBean;
          }
      }
      ```

      > Unable to connect to Command Metric Stream.

   2. 修改 cloud-consumer-hystrix-dashboard9001

      修改 yml 配置文件

      ``` yml
      hystrix:
        dashboard:
          proxy-stream-allow-list: "*"

   3. 监控测试

      启动1个eureka或者3个eureka集群均可，观察监控窗口

      1. 9001监控8001

         ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/服务监控hystrixDashboard监控测试9001监控8001.png)

         > 监控地址为：http://localhost:8001/hystrix.stream
         >
         > - Delay：该参数用来控制服务器上轮询监控信息的延迟时间，默认为2000毫秒，可以通过配置该属性来降低客户端的网络和CPU消耗。
         >
         > - Title：该参数对应了头部标题Hystrix Stream之后的内容，默认会使用具体监控实例的URL，可以通过配置该信息来展示更合适的标题。

      2. 测试地址

         进入以下地址进行测试：http://localhost:8001/payment/circuit/31 和 http://localhost:8001/payment/circuit/-31，先访问正确地址，再访问错误地址，再正确地址，会发现图示断路器都是慢慢放开的。

      3. 如何看？

         - 7色

         - 1圈

           实心圆：共有两种含义。它通过颜色的变化代表了实例的健康程度，它的健康度从绿色

           该实心圆除了颜色的变化之外，它的大小也会根据实例的请求流量发生变化，流量越大该实心圆就越大。所以通过该实心圆的展示，就可以在大量的实例中快速的发现故障实例和高压力实例。

         - 1线

           曲线：用来记录2分钟内流量的相对变化，可以通过它来观察到流量的上升和下降趋势。

         - 整图说明

           ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/服务监控hystrixDashboard监控测试如何看整图说明.png)

         - 整图说明2

           ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/服务监控hystrixDashboard监控测试如何看整图说明2.png)

      4. 搞懂一个才能看懂复杂的

         ![img](SpringCloud学习笔记尚硅谷/Hystrix断路器/服务监控hystrixDashboard监控测试搞懂一个才能看懂复杂的.png)

## 十、zuul 路由网关

### 1、概述简介

### 2、路由基本配置

### 3、路由访问映射规则

### 4、查看路由信息

### 5、过滤器

## 十一、Gateway 新一代网关

### 1、概述简介

1. 官网

   1. 上一代zuul 1.X

      https://github.com/Netflix/zuul/wiki

   2. 当前gateway

      https://cloud.spring.io/spring-cloud-static/spring-cloud-gateway/2.2.1.RELEASE/reference/html/

2. 是什么

   Cloud全家桶中有个很重要的组件就是网关，在1.x版本中都是采用的Zuul网关；但在2.x版本中，zuul的升级一直跳票，SpringCloud最后自己研发了一个网关替代Zuul，那就是SpringCloud Gateway一句话：gateway是原zuul1.x版的替代

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/概述简介是什么.png)

   Gateway是在Spring生态系统之上构建的API网关服务，基于Spring 5，Spring Boot 2和 Project Reactor等技术。Gateway旨在提供一种简单而有效的方式来对API进行路由，以及提供一些强大的过滤器功能， 例如：熔断、限流、重试等

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/概述简介是什么2.png)

   SpringCloud Gateway 是 Spring Cloud 的一个全新项目，基于 Spring 5.0+Spring Boot 2.0 和 Project Reactor 等技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。

   SpringCloud Gateway 作为 Spring Cloud 生态系统中的网关，目标是替代 Zuul，在Spring Cloud 2.0以上版本中，没有对新版本的Zuul 2.0以上最新高性能版本进行集成，仍然还是使用的Zuul 1.x非Reactor模式的老版本。而为了提升网关的性能，SpringCloud Gateway是基于WebFlux框架实现的，而WebFlux框架底层则使用了高性能的Reactor模式通信框架Netty。

   Spring Cloud Gateway的目标提供统一的路由方式且基于 Filter 链的方式提供了网关基本的功能，例如：安全，监控/指标，和限流。

   > SpringCloud Gateway 使用的Webflux中的reactor-netty响应式编程组件，底层使用了Netty通讯框架。

3. 能干嘛

   - 反向代理
   - 鉴权
   - 流量控制
   - 熔断
   - 日志监控

4. 微服务中网关在哪里

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/概述简介微服务网关在哪里.png)

5. 有Zuul了怎么又出来了gateway

   1. 我们为什么选择Gateway？

      - neflix不太靠谱，zuul2.0一直跳票，迟迟不发布

         一方面因为Zuul1.0已经进入了维护阶段，而且Gateway是SpringCloud团队研发的，是亲儿子产品，值得信赖。而且很多功能Zuul都没有用起来也非常的简单便捷。

        Gateway是基于异步非阻塞模型上进行开发的，性能方面不需要担心。虽然Netflix早就发布了最新的 Zuul 2.x，但 Spring Cloud 貌似没有整合计划。而且Netflix相关组件都宣布进入维护期；不知前景如何？

        多方面综合考虑Gateway是很理想的网关选择。

      - SpringCloud Gateway具有如下特性

        - 基于Spring Framework 5, Project Reactor 和 Spring Boot 2.0 进行构建；

        - 动态路由：能够匹配任何请求属性；

        - 可以对路由指定 Predicate（断言）和 Filter（过滤器）；

        - 集成Hystrix的断路器功能；

        - 集成 Spring Cloud 服务发现功能；

        - 易于编写的 Predicate（断言）和 Filter（过滤器）；

        - 请求限流功能；

        - 支持路径重写。

      - SpringCloud Gateway 与 Zuul的区别

        在SpringCloud Finchley 正式版之前，Spring Cloud 推荐的网关是 Netflix 提供的Zuul：

        1. Zuul 1.x，是一个基于阻塞 I/ O 的 API Gateway
        2. Zuul 1.x 基于Servlet 2. 5使用阻塞架构它不支持任何长连接(如 WebSocket) Zuul 的设计模式和Nginx较像，每次 I/ O 操作都是从工作线程中选择一个执行，请求线程被阻塞到工作线程完成，但是差别是Nginx 用C++ 实现，Zuul 用 Java 实现，而 JVM 本身会有第一次加载较慢的情况，使得Zuul 的性能相对较差。
        3. Zuul 2.x理念更先进，想基于Netty非阻塞和支持长连接，但SpringCloud目前还没有整合。 Zuul 2.x的性能较 Zuul 1.x 有较大提升。在性能方面，根据官方提供的基准测试， Spring Cloud Gateway 的 RPS（每秒请求数）是Zuul 的 1. 6 倍。
        4. Spring Cloud Gateway 建立 在 Spring Framework 5、 Project Reactor 和 Spring Boot 2 之上， 使用非阻塞 API。
        5. Spring Cloud Gateway 还 支持 WebSocket， 并且与Spring紧密集成拥有更好的开发体验

   2. Zuul1.x模型

      Springcloud中所集成的Zuul版本，采用的是Tomcat容器，使用的是传统的Servlet IO处理模型。学过尚硅谷web中期课程都知道一个题目，Servlet的生命周期?servlet由servlet container进行生命周期管理。container启动时构造servlet对象并调用servlet init()进行初始化；container运行时接受请求，并为每个请求分配一个线程（一般从线程池中获取空闲线程）然后调用service()。container关闭时调用servlet destory()销毁servlet；

      ![](SpringCloud学习笔记尚硅谷/Gateway新一代网关/概述简介有zuul为什么出现gatewayzuul1x模型.png)

      > 上述模式的缺点：
      >
      > servlet是一个简单的网络IO模型，当请求进入servlet container时，servlet container就会为其绑定一个线程，在并发不高的场景下这种模型是适用的。但是一旦高并发(比如抽风用jemeter压)，线程数量就会上涨，而线程资源代价是昂贵的（上线文切换，内存消耗大）严重影响请求的处理时间。在一些简单业务场景下，不希望为每个request分配一个线程，只需要1个或几个线程就能应对极大并发的请求，这种业务场景下servlet模型没有优势
      >
      > 所以Zuul 1.X是基于servlet之上的一个阻塞式处理模型，即spring实现了处理所有request请求的一个servlet（DispatcherServlet）并由该servlet阻塞式处理处理。所以Springcloud Zuul无法摆脱servlet模型的弊端

   3. GateWay模型

      WebFlux是什么

      ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/概述简介有zuul为什么出现gatewayGateway模型WebFlux1.png)

      ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/概述简介有zuul为什么出现gatewayGateway模型WebFlux2.png)

      > 官网地址：https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html#webflux-new-framework
      >
      > 说明：
      >
      > 传统的Web框架，比如说：struts2，springmvc等都是基于Servlet API与Servlet容器基础之上运行的。但是在Servlet3.1之后有了异步非阻塞的支持。而WebFlux是一个典型非阻塞异步的框架，它的核心是基于Reactor的相关API实现的。相对于传统的web框架来说，它可以运行在诸如Netty，Undertow及支持Servlet3.1的容器上。非阻塞式+函数式编程（Spring5必须让你使用java8）
      >
      > Spring WebFlux 是 Spring 5.0 引入的新的响应式框架，区别于 Spring MVC，它不需要依赖Servlet API，它是完全异步非阻塞的，并且基于 Reactor 来实现响应式流规范。

### 2、三大核心概念

1. Route(路由)

   路由是构建网关的基本模块，它由ID，目标URI，一系列的断言和过滤器组成，如果断言为true则匹配该路由

2. Predicate(断言)

   参考的是Java8的java.util.function.Predicate，开发人员可以匹配HTTP请求中的所有内容(例如请求头或请求参数)，如果请求与断言相匹配则进行路由

3. Filter(过滤)

   指的是Spring框架中GatewayFilter的实例，使用过滤器，可以在请求被路由前或者之后对请求进行修改。

4. 总体

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/三大核心概念总体.png)

   > web请求，通过一些匹配条件，定位到真正的服务节点。并在这个转发过程的前后，进行一些精细化控制。predicate就是我们的匹配条件；而filter，就可以理解为一个无所不能的拦截器。有了这两个元素，再加上目标uri，就可以实现一个具体的路由了

### 3、Gateway 工作流程

1. 官网总结

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/GateWay工作流程官网总结1.png)

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/GateWay工作流程官网总结2.png)

   > 客户端向 Spring Cloud Gateway 发出请求。然后在 Gateway Handler Mapping 中找到与请求相匹配的路由，将其发送到 Gateway Web Handler。Handler 再通过指定的过滤器链来将请求发送到我们实际的服务执行业务逻辑，然后返回。过滤器之间用虚线分开是因为过滤器可能会在发送代理请求之前（“pre”）或之后（“post”）执行业务逻辑。Filter在“pre”类型的过滤器可以做参数校验、权限校验、流量监控、日志输出、协议转换等，在“post”类型的过滤器中可以做响应内容、响应头的修改，日志的输出，流量监控等有着非常重要的作用。

2. 核心逻辑

   路由转发+执行过滤器链

### 4、入门配置

1. 新建 cloud-gateway-gateway9527 项目

2. 改写 pom.xml 文件

   ``` xml
   <dependencies>
       <!-- gateway -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-gateway</artifactId>
           <exclusions>
               <exclusion>
                   <groupId>org.springframework.boot</groupId>
                   <artifactId>spring-boot-starter-web</artifactId>
               </exclusion>
           </exclusions>
       </dependency>
   
       <!-- eureka-client -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
       </dependency>
   
       <!-- 引入自己定义的 api 通用包，可以使用 Payment 支付 Entity -->
       <dependency>
           <groupId>com.atguigu.springcloud</groupId>
           <artifactId>cloud-api-commons</artifactId>
           <version>${project.version}</version>
       </dependency>
   
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <optional>true</optional>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-test</artifactId>
           <version>2.7.12</version>
       </dependency>
   </dependencies>

3. 编写 yml 配置文件

   ``` yml
   server:
     port: 9527
   
   spring:
     application:
       name: cloud-gateway
   
   eureka:
     instance:
       hostname: cloud-gateway-service
     client: #服务提供者provider注册进eureka服务列表内
       service-url:
         register-with-eureka: true
         fetch-registry: true
         defaultZone: http://eureka7001.com:7001/eureka

4. 创建主启动类

   ``` java
   @SpringBootApplication
   @EnableEurekaClient
   public class GateWayMain9527 {
       public static void main(String[] args) {
           SpringApplication.run(GateWayMain9527.class, args);
       }
   }
   ```

5. YML新增网关配置

   ``` yml
   server:
     port: 9527
   
   spring:
     application:
       name: cloud-gateway
     cloud:
       gateway:
         routes:
           - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
             uri: http://localhost:8001          #匹配后提供服务的路由地址
             predicates:
               - Path=/payment/get/**         # 断言，路径相匹配的进行路由
   
           - id: payment_routh2 #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
             uri: http://localhost:8001          #匹配后提供服务的路由地址
             predicates:
               - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
   
   eureka:
     instance:
       hostname: cloud-gateway-service
     client: #服务提供者provider注册进eureka服务列表内
       service-url:
         register-with-eureka: true
         fetch-registry: true
         defaultZone: http://eureka7001.com:7001/eureka

6. 测试

   启动7001，启动8001（cloud-provider-payment8001），启动9527网关，访问说明

   - 添加网关前：http://localhost:8001/payment/get/2
   - 添加网关后：http://localhost:9527/payment/get/2

7. YML配置说明

   Gateway网关路由有两种配置方式：

   - 在配置文件yml中配置

   - 代码中注入RouteLocator的Bean

     1. 官网案例

        ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/入门案例YML配置文件说明官网案例.png)

     2. 百度国内新闻网址，需要外网

        地址：http://news.baidu.com/guonei

     3. 自己写一个

        ``` java
        /**
         * @author 汪重阳
         * @version 1.0
         * 配置了一个id为route-name的路由规则，
         * 当访问地址 http://localhost:9527/guonei时会自动转发到地址：http://news.baidu.com/guonei
         */
        @Configuration
        public class GateWayConfig {
            @Bean
            public RouteLocator customRouteLocator(RouteLocatorBuilder routeLocatorBuilder) {
        
                RouteLocatorBuilder.Builder routes = routeLocatorBuilder.routes();
                routes.route("path_route_atguigu", r -> r.path("/guonei").uri("https://www.mihoyo.com/")).build();
                return routes.build();
            }
        
            @Bean
            public RouteLocator customRouteLocator2(RouteLocatorBuilder builder) {
                RouteLocatorBuilder.Builder routes = builder.routes();
                routes.route("path_route_atguigu2", r -> r.path("/guoji").uri("http://news.baidu.com/guoji")).build();
                return routes.build();
            }
        }

### 5、通过微服务名实现动态路由

1. 默认情况下Gateway会根据注册中心注册的服务列表，以注册中心上微服务名为路径创建动态路由进行转发，从而实现动态路由的功能

2. 启动：

   一个eureka7001 + 两个服务提供者8001/8002

3. POM

   ``` xml
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
   </dependency>

4. YML

   ``` yml
   server:
     port: 9527
   
   spring:
     application:
       name: cloud-gateway
     cloud:
       gateway:
         discovery:
           locator:
             enabled: true   #开启从注册中心动态创建路由的功能，利用微服务名进行路由
         routes:
           - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
             #          uri: http://localhost:8001          #匹配后提供服务的路由地址
             uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
             predicates:
               - Path=/payment/get/**         # 断言，路径相匹配的进行路由
   
           - id: payment_routh2 #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
             #          uri: http://localhost:8001          #匹配后提供服务的路由地址
             uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
             predicates:
               - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
   
   eureka:
     instance:
       hostname: cloud-gateway-service
     client: #服务提供者provider注册进eureka服务列表内
       service-url:
         register-with-eureka: true
         fetch-registry: true
         defaultZone: http://eureka7001.com:7001/eureka
   ```

   > 需要注意的是uri的协议为lb，表示启用Gateway的负载均衡功能。
   >
   > lb://serviceName是spring cloud gateway在微服务中自动为我们创建的负载均衡uri

5. 测试

   进入网页：http://localhost:9527/payment/lb

### 6、Predicate 的使用

1. 是什么

   启动我们的gateway9527

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用是什么.png)

2. Route Predicate Factories这个是什么东东?

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用RoutePredicateFactories是什么东东.png)

   > Spring Cloud Gateway将路由匹配作为Spring WebFlux HandlerMapping基础架构的一部分。Spring Cloud Gateway包括许多内置的Route Predicate工厂。所有这些Predicate都与HTTP请求的不同属性匹配。多个Route Predicate工厂可以进行组合。Spring Cloud Gateway 创建 Route 对象时， 使用 RoutePredicateFactory 创建 Predicate 对象，Predicate 对象可以赋值给 Route。 Spring Cloud Gateway 包含许多内置的Route Predicate Factories。所有这些谓词都匹配HTTP请求的不同属性。多种谓词工厂可以组合，并通过逻辑and。

3. 常用的Route Predicate

   - After Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中After.png)

     我们的问题是：上述这个After好懂，这个时间串串？？？

     ``` java
     public class ZonedDateTimeDemo {
         public static void main(String[] args) {
             ZonedDateTime zbj = ZonedDateTime.now(); // 默认时区
             System.out.println(zbj);
             // 2023-06-11T22:45:00.551+08:00[Asia/Shanghai]
     //        ZonedDateTime zny = ZonedDateTime.now(ZoneId.of("America/New_York")); // 用指定时区获取当前时间
     //        System.out.println(zny);
         }
     }
     ```

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
     			- After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
     ```

   - Before Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Before.png)

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
     ```

   - Between Route Predicate

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
     ```

   - Cookie Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Cookie.png)

     > Cookie Route Predicate需要两个参数，一个是 Cookie name ,一个是正则表达式。路由规则会通过获取对应的 Cookie name 值和正则表达式去匹配，如果匹配上就会执行路由，如果没有匹配上则不执行

     - 不带cookies访问

       ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Cookie不带.png)

       > curl http://localhost:9588/paymentInfo
       >
       > curl http://localhost:9527/payment/lb

     - 带上cookies访问

       ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Cookie带.png)

       > curl http://localhost:9588/paymentInfo --cookie "username=zzyy"
       >
       > curl http://localhost:9527/payment/lb --cookie "username=zzyy"
       >
       > 解决加入curl返回中文乱码：https://blog.csdn.net/leedee/article/details/82685636

     - YML

       ``` yml
       spring:
         cloud:
             routes:
               - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
                 #          uri: http://localhost:8001          #匹配后提供服务的路由地址
                 uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
                 predicates:
                   - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                   - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                   # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                   # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                   - Cookie=username,zzyy

   - Header Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Header.png)

     两个参数：一个是属性名称和一个正则表达式，这个属性值和正则表达式匹配则执行。

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                 # - Cookie=username,zzyy
                 - Header=X-Request-Id, \d+  # 请求头要有X-Request-Id属性并且值为整数的正则表达式
     ```

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Header中curl.png)

     > curl http://localhost:9588/paymentInfo -H "X-Request-Id:123"
     >
     > curl http://localhost:9527/payment/lb -H "X-Request-Id:123"

   - Host Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Host.png)

     Host Route Predicate 接收一组参数，一组匹配的域名列表，这个模板是一个 ant 分隔的模板，用.号作为分隔符。它通过参数中的主机地址作为匹配规则。

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                 # - Cookie=username,zzyy
                 # - Header=X-Request-Id, \d+  # 请求头要有X-Request-Id属性并且值为整数的正则表达式
                 - Host=**.atguigu.com
     ```

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Host中curl.png)

     > curl http://localhost:9588/paymentInfo -H "Host: www.atguigu.com" 
     >
     > curl http://localhost:9588/paymentInfo -H "Host: news.atguigu.com" 
     >
     > ====================================================================================
     >
     > 正确：curl http://localhost:9527/payment/lb -H "Host: www.atguigu.com"
     >
     > 正确：curl http://localhost:9527/payment/lb -H "Host: java.atguigu.com"
     >
     > 错误：curl http://localhost:9527/payment/lb -H "Host: java.atguigu.net"

   - Method Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Method.png)

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                 # - Cookie=username,zzyy
                 # - Header=X-Request-Id, \d+  # 请求头要有X-Request-Id属性并且值为整数的正则表达式
                 # - Host=**.atguigu.com
                 - Method=GET
     ```

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Method中curl.png)

   - Path Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Path.png)

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 # - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                 # - Cookie=username,zzyy
                 # - Header=X-Request-Id, \d+  # 请求头要有X-Request-Id属性并且值为整数的正则表达式
                 # - Host=**.atguigu.com
                 # - Method=GET
     #id：我们自定义的路由 ID，保持唯一
     ##uri：目标服务地址
     ##predicates：路由条件，Predicate接受一个输入参数返回一个布尔值。
     ##            该属性包含多种默认方法来将Predicate组合成其他复杂的逻辑(比如：与，或，非)
     ```

   - Query Route Predicate

     ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Predicate的使用常用的RoutePredicate中Query.png)

     支持传入两个参数，一个是属性名，一个为属性值，属性值可以是正则表达式。

     ``` yml
     spring:
       cloud:
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                 # - Cookie=username,zzyy
                 # - Header=X-Request-Id, \d+  # 请求头要有X-Request-Id属性并且值为整数的正则表达式
                 # - Host=**.atguigu.com
                 - Method=GET
                 - Query=username, \d+  # 要有参数名username并且值还要是整数才能路由
     ```

     > http://localhost:9527/payment/lb?username=31
     >
     > http://localhost:9527/payment/lb?username=-31

   - 小总结

     ``` yml
     server:
       port: 9527
     
     spring:
       application:
         name: cloud-gateway
       cloud:
         gateway:
           discovery:
             locator:
               enabled: true   #开启从注册中心动态创建路由的功能，利用微服务名进行路由
           routes:
             - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/get/**         # 断言，路径相匹配的进行路由
     
             - id: payment_routh2 #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
               #          uri: http://localhost:8001          #匹配后提供服务的路由地址
               uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
               predicates:
                 - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
                 - After=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Before=2020-02-05T15:10:03.685+08:00[Asia/Shanghai]         # 断言，路径相匹配的进行路由
                 # - Between=2020-02-02T17:45:06.206+08:00[Asia/Shanghai],2020-03-25T18:59:06.206+08:00[Asia/Shanghai]
                 # - Cookie=username,zzyy
                 # - Header=X-Request-Id, \d+  # 请求头要有X-Request-Id属性并且值为整数的正则表达式
                 # - Host=**.atguigu.com
                 - Method=GET
                 - Query=username, \d+  # 要有参数名username并且值还要是整数才能路由
     
     #id：我们自定义的路由 ID，保持唯一
     ##uri：目标服务地址
     ##predicates：路由条件，Predicate接受一个输入参数返回一个布尔值。
     ##            该属性包含多种默认方法来将Predicate组合成其他复杂的逻辑(比如：与，或，非)
     
     eureka:
       instance:
         hostname: cloud-gateway-service
       client: #服务提供者provider注册进eureka服务列表内
         service-url:
           register-with-eureka: true
           fetch-registry: true
           defaultZone: http://eureka7001.com:7001/eureka
     ```

     说白了，Predicate就是为了实现一组匹配规则，让请求过来找到对应的Route进行处理。

### 7、Filter 的使用

1. 是什么

   ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Filter的使用是什么.png)

   > 路由过滤器可用于修改进入的HTTP请求和返回的HTTP响应，路由过滤器只能指定路由进行使用。
   >
   > Spring Cloud Gateway 内置了多种路由过滤器，他们都由GatewayFilter的工厂类来产生

2. Spring Cloud Gateway的Filter

   - 生命周期，Only Two

     - pre
     - post

   - 种类，Only Two

     - GatewayFilter 

       ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Filter的使用SpringCloudGateWay中Filter的GateWayFilter.png)

       > https://cloud.spring.io/spring-cloud-static/spring-cloud-gateway/2.2.1.RELEASE/reference/html/#the-addrequestparameter-gatewayfilter-factory
       >
       > 31种之多。。。。。

     - GlobalFilter

       ![img](SpringCloud学习笔记尚硅谷/Gateway新一代网关/Filter的使用SpringCloudGateWay中Filter的GlobalFilter.png)

3. 常用的GatewayFilter

   AddRequestParameter

   ``` yml
   spring:
     cloud:
         routes:
           - id: payment_routh #payment_route    #路由的ID，没有固定规则但要求唯一，建议配合服务名
             #          uri: http://localhost:8001          #匹配后提供服务的路由地址
             uri: lb://cloud-payment-service   #匹配后提供服务的路由地址
             filters:
   			- AddRequestParameter=X-Request-Id,1024 #过滤器工厂会在匹配的请求头加上一对请求头，名称为X-Request-Id值为1024
             predicates:
               - Path=/payment/lb/**         # 断言，路径相匹配的进行路由
   ```

4. 自定义过滤器

   自定义全局GlobalFilter

   1. 两个主要接口介绍

      implements GlobalFilter,Ordered

   2. 能干嘛

      - 全局日志记录
      - 统一网关鉴权

   3. 案例代码

      ``` java
      @Component
      @Slf4j
      public class MyLogGateWayFilter implements GlobalFilter, Ordered {
          @Override
          public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
              log.info("************ com in MyLogGateWayFilter：  " + new Date());
              String uname = exchange.getRequest().getQueryParams().getFirst("uname");
              if (uname == null) {
                  log.info("******** 用户名为null，非法用户，/(ㄒoㄒ)/~~");
                  exchange.getResponse().setStatusCode(HttpStatus.NOT_ACCEPTABLE);
                  return exchange.getResponse().setComplete();
              }
              return chain.filter(exchange);
          }
      
          @Override
          public int getOrder() {
              return 0;
          }
      }

   4. 测试

      启动7001，启动8001（cloud-provider-payment8001），8002，启动9527网关，访问网页：正确：http://localhost:9527/payment/lb?uname=z3 和 错误： http://localhost:9527/payment/lb

## 十二、SpringCloud Config 分布式配置中心

### 1、概述

1. 分布式系统面临的---配置问题

   微服务意味着要将单体应用中的业务拆分成一个个子服务，每个服务的粒度相对较小，因此系统中会出现大量的服务。由于每个服务都需要必要的配置信息才能运行，所以一套集中式的、动态的配置管理设施是必不可少的。

   SpringCloud提供了ConfigServer来解决这个问题，我们每一个微服务自己带着一个application.yml，上百个配置文件的管理......

2. 是什么

   ![](SpringCloud学习笔记尚硅谷/Config分布式配置中心/概述是什么.png)

   - 是什么

     SpringCloud Config为微服务架构中的微服务提供集中化的外部配置支持，配置服务器为各个不同微服务应用的所有环境提供了一个**中心化的外部配置**。

   - 怎么玩

     SpringCloud Config分为服务端和客户端两部分。服务端也称为分布式配置中心，它是一个独立的微服务应用，用来连接配置服务器并为客户端提供获取配置信息，加密/解密信息等访问接口客户端则是通过指定的配置中心来管理应用资源，以及与业务相关的配置内容，并在启动的时候从配置中心获取和加载配置信息配置服务器默认采用git来存储配置信息，这样就有助于对环境配置进行版本管理，并且可以通过git客户端工具来方便的管理和访问配置内容。

3. 能干嘛

   - 集中管理配置文件

   - 不同环境不同配置，动态化的配置更新，分环境部署比如dev/test/prod/beta/release

   - 运行期间动态调整配置，不再需要在每个服务部署的机器上编写配置文件，服务会向配置中心统一拉取配置自己的信息

   - 当配置发生变动时，服务不需要重启即可感知到配置的变化并应用新的配置

   - 将配置信息以REST接口的形式暴露

     post、curl访问刷新均可......

4. 与GitHub整合配置

   由于SpringCloud Config默认使用Git来存储配置文件(也有其它方式,比如支持SVN和本地文件)，但最推荐的还是Git，而且使用的是http/https访问的形式

5. 官网

   地址：https://cloud.spring.io/spring-cloud-static/spring-cloud-config/2.2.1.RELEASE/reference/html/

### 2、Config服务端配置与测试

1. 用你自己的账号在GitHub上新建一个名为springcloud-config的新Repository

   由上一步获得刚新建的git地址：https://github.com/alexofking106/springcloud-config.git

2. 本地硬盘目录上新建git仓库并clone

   本地地址：D:\Code\IDEAJAVA\GitHubCode\AtGuiGu\SpringCloud2020

   git命令

   ``` git
   git clone https://github.com/alexofking106/springcloud-config.git

3. 此时在本地D盘符下D:\Code\IDEAJAVA\GitHubCode\AtGuiGu\SpringCloud2020\springcloud-config

   表示多个环境的配置文件，保存格式必须为UTF-8。如果需要修改，此处模拟运维人员操作git和github

   > git add .
   >
   > git commit -m "init yml"
   >
   >  git remote add origin https://github.com/alexofking106/springcloud-config.git
   >
   > git push origin master

4. 新建Module模块cloud-config-center-3344，它即为Cloud的配置中心模块cloudConfig Center

5. 改写 pom.xml 文件

   ``` xml
   <dependencies>
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-config-server</artifactId>
       </dependency>
   
       <!-- eureka-client -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-web</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-actuator</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <optional>true</optional>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-test</artifactId>
           <version>2.7.12</version>
       </dependency>
   </dependencies>

6. 编写 yml 配置文件

   ``` yml
   server:
     port: 3344
   
   spring:
     application:
       name: cloud-config-center #注册进Eureka服务器的微服务名
     cloud:
       config:
         server:
           git:
             uri: git@github.com:alexofking106/springcloud-config.git #GitHub上面的git仓库名字
             ####搜索目录
             search-paths:
               - springcloud-config
         ####读取分支
         label: master
   
   #服务注册到eureka地址
   eureka:
     client:
       service-url:
         defaultZone: http://localhost:7001/eureka

7. 添加主启动类

   ``` java
   @SpringBootApplication
   @EnableConfigServer
   public class ConfigCenterMain3344 {
       public static void main(String[] args) {
           SpringApplication.run(ConfigCenterMain3344.class, args);
       }
   }

8. 修改hosts文件，增加映射

   127.0.0.1  config-3344.com

9. 测试通过Config微服务是否可以从GitHub上获取配置内容

   启动 7001，启动微服务3344，点击网址：http://config-3344.com:3344/master/config-dev.yml

10. 配置读取规则

    1. 官网

       ![img](SpringCloud学习笔记尚硅谷/Config分布式配置中心/Config服务端配置与测试配置读取规则官网.png)

    2. /{label}/{application}-{profile}.yml

       - master分支
         - http://config-3344.com:3344/master/config-dev.yml
         - http://config-3344.com:3344/master/config-test.yml
         - http://config-3344.com:3344/master/config-prod.yml
       - dev分支
         - http://config-3344.com:3344/dev/config-dev.yml
         - http://config-3344.com:3344/dev/config-test.yml
         - http://config-3344.com:3344/dev/config-prod.yml

    3. /{application}-{profile}.yml

       - http://config-3344.com:3344/config-dev.yml
       - http://config-3344.com:3344/config-test.yml
       - http://config-3344.com:3344/config-prod.yml
       - http://config-3344.com:3344/config-xxxx.yml(不存在的配置)

    4. /{application}/{profile}[/{label}]

       - http://config-3344.com:3344/config/dev/master
       - http://config-3344.com:3344/config/test/master
       - http://config-3344.com:3344/config/test/dev

    5. 重要配置细节总结

       /{name}-{profiles}.yml

       /{label}-{name}-{profiles}.yml

       label：分支(branch)

       name ：服务名

       profiles：环境(dev/test/prod)

11. 成功实现了用SpringCloud Config通过GitHub获取配置信息

### 3、Config客户端配置与测试

1. 新建cloud-config-client-3355 项目

2. 改写pom.xml 文件

   ``` xml
   <dependencies>
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-config</artifactId>
       </dependency>
   
       <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-bootstrap -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-bootstrap</artifactId>
           <version>3.0.3</version>
       </dependency>
   
   
       <!-- eureka-client -->
       <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-web</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-actuator</artifactId>
       </dependency>
   
       <dependency>
           <groupId>org.projectlombok</groupId>
           <artifactId>lombok</artifactId>
           <optional>true</optional>
       </dependency>
   
       <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-test</artifactId>
           <version>2.7.12</version>
       </dependency>
   </dependencies>

3. 创建 bootstrap.yml 配置文件

   - 是什么

     > applicaiton.yml是用户级的资源配置项
     >
     > bootstrap.yml是系统级的，优先级更加高
     >
     > Spring Cloud会创建一个“Bootstrap Context”，作为Spring应用的`Application Context`的父上下文。初始化的时候，`Bootstrap Context`负责从外部源加载配置属性并解析配置。这两个上下文共享一个从外部获取的`Environment`。
     >
     > `Bootstrap`属性有高优先级，默认情况下，它们不会被本地配置覆盖。 `Bootstrap context`和`Application Context`有着不同的约定，所以新增了一个`bootstrap.yml`文件，保证`Bootstrap Context`和`Application Context`配置的分离。
     >
     > 要将Client模块下的application.yml文件改为bootstrap.yml,这是很关键的，
     >
     > 因为bootstrap.yml是比application.yml先加载的。bootstrap.yml优先级高于application.yml

   ``` yml
   server:
     port: 3355
   
   spring:
     application:
       name: config-client
     cloud:
       #Config客户端配置
       config:
         label: master #分支名称
         name: config #配置文件名称
         profile: dev #读取后缀名称   上述3个综合：master分支上config-dev.yml的配置文件被读取http://config-3344.com:3344/master/config-dev.yml
         uri: http://localhost:3344 #配置中心地址k
   
   #服务注册到eureka地址
   eureka:
     client:
       service-url:
         defaultZone: http://localhost:7001/eureka
   ```

   说明：

   ![img](SpringCloud学习笔记尚硅谷/Config分布式配置中心/Config客户端端配置与测试bootstrap配置文件说明.png)

4. 修改config-dev.yml配置并提交到GitHub中，比如加个变量age或者版本号version

5. 添加主启动类

   ``` java
   @SpringBootApplication
   @EnableEurekaClient
   public class ConfigClientMain3355 {
       public static void main(String[] args) {
           SpringApplication.run(ConfigClientMain3355.class, args);
       }
   }

6. 添加业务类

   ``` java
   @RestController
   public class ConfigClientController {
       @Value("${config.info}")
       private String configInfo;
   
       @GetMapping("/configInfo")
       public String getConfigInfo() {
           return configInfo;
       }
   }

7. 测试

   启动Config配置中心3344微服务并自测，地址：http://config-3344.com:3344/master/config-prod.yml 和 http://config-3344.com:3344/master/config-dev.yml

   启动3355作为Client准备访问，地址：http://localhost:3355/configInfo

8. 成功实现了客户端3355访问SpringCloud Config3344通过GitHub获取配置信息

9. 问题随时而来，分布式配置的动态刷新问题

   - Linux运维修改GitHub上的配置文件内容做调整
   - 刷新3344，发现ConfigServer配置中心立刻响应
   - 刷新3355，发现ConfigClient客户端没有任何响应
   - 3355没有变化除非自己重启或者重新加载
   - 难到每次运维修改配置文件，客户端都需要重启？？噩梦

### 4、Config客户端之动态刷新

1. 避免每次更新配置都要重启客户端微服务3355

2. 动态刷新

   1. 修改3355模块

   2. POM引入actuator监控

      ``` xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

   3. 修改YML，暴露监控端口

      ``` yml
      # 暴露监控端点
      management:
        endpoints:
          web:
            exposure:
              include: "*"
      ```

   4. @RefreshScope业务类Controller修改

      ``` java
      @RestController
      @RefreshScope
      public class ConfigClientController {
          @Value("${config.info}")
          private String configInfo;
      
          @GetMapping("/configInfo")
          public String getConfigInfo() {
              return configInfo;
          }
      }

   5. 此时修改github---> 3344 ---->3355

      进入网页：http://localhost:3355/configInfo，结果3355没有改变

   6. 需要运维人员发送Post请求刷新3355

      必须是POST请求，请求代码为：

      ```shell
      curl -X POST "http://localhost:3355/actuator/refresh"

   7. 再次测试

      进入网页：http://localhost:3355/configInfo 进行测试，成功实现了客户端3355刷新到最新配置内容，避免了服务重启

3. 想想还有什么问题？

   1. 假如有多个微服务客户端3355/3366/3377。。。。。。
   2. 每个微服务都要执行一次post请求，手动刷新？
   3. 可否广播，一次通知，处处生效？
   4. 我们想大范围的自动刷新，求方法

## 十三、SpringCloud Bus 消息总线

### 1、概述

1. 上一讲解的加深和扩充，一言以蔽之

   - 分布式自动刷新配置功能
   - Spring Cloud Bus 配合 Spring Cloud Config 使用可以实现配置的动态刷新。

2. 是什么

   Bus支持两种消息代理：RabbitMQ 和 Kafka

   ![img](SpringCloud学习笔记尚硅谷/Bus消息总线/概述是什么.png)

   > Spring Cloud Bus是用来将分布式系统的节点与轻量级消息系统链接起来的框架，它整合了Java的事件处理机制和消息中间件的功能。
   >
   > Spring Clud Bus目前支持RabbitMQ和Kafka。
   
3. 能干嘛

   Spring Cloud Bus能管理和传播分布式系统间的消息，就像一个分布式执行器，可用于广播状态更改、事件推送等，也可以当作微服务间的通信通道。

   ![image-20230701181421924](SpringCloud学习笔记尚硅谷/Bus消息总线/概述能干嘛.png)

4. 为何被称为总线

   - 什么是总线

     在微服务架构的系统中，通常会使用**轻量级的消息代理**来构建一个**共用的消息主题**，并让系统中所有微服务实例都连接上来。由于**该主题中产生的消息会被所有实例监听和消费，所以称它为消息总线**。在总线上的各个实例，都可以方便地广播一些需要让其他连接在该主题上的实例都知道的消息。

   - 基本原理

     ConfigClient实例都监听MQ中同一个topic(默认是springCloudBus)。当一个服务刷新数据的时候，它会把这个信息放入到Topic中，这样其它监听同一Topic的服务就能得到通知，然后去更新自身的配置。

     https://www.bilibili.com/video/av55976700?from=search&seid=15010075915728605208

### 2、RabbitMQ环境配置

> 注：以下内容是RabbitMQ在Windows上的安装配置内容

1. 安装Erlang，下载地址：

   http://erlang.org/download/otp_win64_21.3.exe

2. 安装RabbitMQ，下载地址：

   https://dl.bintray.com/rabbitmq/all/rabbitmq-server/3.7.14/rabbitmq-server-3.7.14.exe

3. 进入RabbitMQ安装目录下的sbin目录

4. 输入以下命令启动管理功能

   使用可视化插件

   1. 运行命令行窗口cmd

   2. 输入下列命令即可添加可视化插件了

      ```shell
      rabbitmq-plugins enable rabbitmq_management
      ```

      这样就添加了rabbitmq界面，只要启动rabbitmq，然后在浏览器输入 http://127.0.0.1:15672/ 就可以访问了

5. 访问地址查看是否安装成功：

   http://localhost:15672/

6. 输入账号密码并登录：guest guest

> **本机已在Linux上面安装RabbitMQ，访问地址为：192.168.37.128:15672，账号密码为：admin   123**

### 3、SpringCloud Bus动态刷新全局广播

1. 必须先具备良好的RabbitMQ环境先

2. 演示广播效果，增加复杂度，再以3355为模板再制作一个3366

   1. 新建项目 cloud-config-client-3366

   2. 改写 pom.xml 文件

      ```xml
      <dependencies>
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-config</artifactId>
          </dependency>
          <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-bootstrap -->
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-bootstrap</artifactId>
              <version>3.0.3</version>
          </dependency>
          <dependency>
              <groupId>org.springframework.cloud</groupId>
              <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
          </dependency>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-web</artifactId>
          </dependency>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-actuator</artifactId>
          </dependency>
          <dependency>
              <groupId>org.projectlombok</groupId>
              <artifactId>lombok</artifactId>
              <optional>true</optional>
          </dependency>
          <dependency>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-starter-test</artifactId>
              <version>2.7.12</version>
              <scope>test</scope>
          </dependency>
      </dependencies>

   3. 编写 yml 配置文件

      ```yml
      server:
        port: 3366
      
      spring:
        application:
          name: config-client
        cloud:
          #Config客户端配置
          config:
            label: master #分支名称
            name: config #配置文件名称
            profile: dev #读取后缀名称   上述3个综合：master分支上config-dev.yml的配置文件被读取http://config-3344.com:3344/master/config-dev.yml
            uri: http://localhost:3344 #配置中心地址
      
      #服务注册到eureka地址
      eureka:
        client:
          service-url:
            defaultZone: http://localhost:7001/eureka
      
      # 暴露监控端点
      management:
        endpoints:
          web:
            exposure:
              include: "*"

   4. 添加主启动类

      ```java
      @EnableEurekaClient
      @SpringBootApplication
      public class ConfigClientMain3366 {
          public static void main(String[] args) {
              SpringApplication.run(ConfigClientMain3366.class, args);
          }
      }

   5. 编写 controller 类

      ```java
      @RefreshScope
      @RestController
      public class ConfigClientController {
          @Value("${server.port}")
          private String serverPort;
      
          @Value("${config.info}")
          private String configInfo;
      
          @GetMapping("/configInfo")
          public String configInfo() {
              return "serverPort：" + serverPort + "\t\n\n configInfo：" + configInfo;
          }
      }
      ```

3. 设计思想

   1. 利用消息总线触发一个客户端/bus/refresh,而刷新所有客户端的配置

      ![img](SpringCloud学习笔记尚硅谷/Bus消息总线/SpringCloudBus动态刷新全局广播设计思想1.png)

   2. 利用消息总线触发一个服务端ConfigServer的/bus/refresh端点，而刷新所有客户端的配置

      ![img](SpringCloud学习笔记尚硅谷/Bus消息总线/SpringCloudBus动态刷新全局广播设计思想2.png)

   3. 图二的架构显然更加适合，图一不适合的原因如下

      - 打破了微服务的职责单一性，因为微服务本身是业务模块，它本不应该承担配置刷新的职责。
      - 破坏了微服务各节点的对等性。
      - 有一定的局限性。例如，微服务在迁移时，它的网络地址常常会发生变化，此时如果想要做到自动刷新，那就会增加更多的修改

4. 给 cloud-config-center-3344 配置中心服务端添加消息总线支持

   1. 在 pom.xml 文件中添加如下配置

      ```xml
      <!-- 添加消息总线RabbitMQ的支持 -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-bus-amqp</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

   2. 向 yml 配置文件中添加如下功能

      ```yml
      spring:
        #rabbitmq相关配置
        rabbitmq:
          host: 192.168.37.128
          port: 5672
          username: admin
          password: 123
      
      ##rabbitmq相关配置,暴露bus刷新配置的端点
      management:
        endpoints: #暴露bus刷新配置的端点
          web:
            exposure:
              include: 'bus-refresh'

5. 给 cloud-config-client-3355 客户端添加消息总线支持

   1. 在 pom.xml 文件中添加如下配置

      ```xml
      <!-- 添加消息总线RabbitMQ的支持 -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-bus-amqp</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

   2. 向 yml 配置文件中添加如下功能

      ```yml
      spring:
        #rabbitmq相关配置，15672是web管理界面的端口，5672是MQ访问的端口
        rabbitmq:
          host: 192.168.37.128
          port: 5672
          username: admin
          password: 123

6. 给 cloud-config-client-3366 客户端添加消息总线支持

   1. 在 pom.xml 文件中添加如下配置

      ```xml
      <!-- 添加消息总线RabbitMQ的支持 -->
      <dependency>
          <groupId>org.springframework.cloud</groupId>
          <artifactId>spring-cloud-starter-bus-amqp</artifactId>
      </dependency>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-actuator</artifactId>
      </dependency>

   2. 向 yml 配置文件中添加如下功能

      ```yml
      spring:
        #rabbitmq相关配置，15672是web管理界面的端口，5672是MQ访问的端口
        rabbitmq:
          host: 192.168.37.128
          port: 5672
          username: admin
          password: 123
      ```

7. 测试

   1. 运维工程师

      修改Github上配置文件增加版本号

      ```shell
      # 发送POST请求
      curl -X POST "http://localhost:3344/actuator/busrefresh"
      ```

   2. 配置中心

      http://config-3344.com:3344/config-dev.yml

      > 出现问题：无法访问3344网页地址，其他都可以访问，修改配置也可以成功
      >
      > 原因：需要在window中的**网络和Internet**中**代理**中添加如下代码 `config-3344.com`

   3. 客户端

      地址1：http://localhost:3355/configInfo

      地址2：http://localhost:3366/configInfo

      获取配置信息，发现都已经刷新了

### 4、SpringCloud Bus动态刷新定点通知

1. 不想全部通知，只想定点通知

   只通知3355，不通知3366

2. 简单一句话

   指定具体某一个实例生效而不是全部。公式：http://localhost:配置中心的端口号/actuator/bus-refresh/{destination}。

   > /bus/refresh请求不再发送到具体的服务实例上，而是发给config server并通过destination参数类指定需要更新配置的服务或实例

3. 案例

   我们这里以刷新运行在3355端口上的config-client为例

   ```shell
   curl -X POST "http://localhost:3344/actuator/busrefresh/config-client:3355"

4. 通知总结All

   ![img](SpringCloud学习笔记尚硅谷/Bus消息总线/SpringCloudBus动态刷新顶点通知总结.png)

## 十四、SpringCloud Stream 消息驱动

### 1、消息驱动概述

#### 1.1 是什么

1. 什么是SpringCloudStream

   官方定义 Spring Cloud Stream 是一个构建消息驱动微服务的框架。应用程序通过 inputs 或者 outputs 来与 Spring Cloud Stream中binder对象交互。通过我们配置来binding(绑定) ，而 Spring Cloud Stream 的 binder对象负责与消息中间件交互。所以，我们只需要搞清楚如何与 Spring Cloud Stream 交互就可以方便使用消息驱动的方式。通过使用Spring Integration来连接消息代理中间件以实现消息事件驱动。Spring Cloud Stream 为一些供应商的消息中间件产品提供了个性化的自动化配置实现，引用了发布-订阅、消费组、分区的三个核心概念。

   **目前仅支持RabbitMQ、Kafka。**

   > 一句话：屏蔽底层消息中间件的差异，降低切换成本，统一消息的编程模型

2. 官网

   Spring Cloud Stream是用于构建与共享消息传递系统连接的高度可伸缩的事件驱动微服务框架，该框架提供了一个灵活的编程模型，它建立在已经建立和熟悉的Spring熟语和最佳实践上，包括支持持久化的发布/订阅、消费组以及消息分区这三个核心概念。

   官网地址：https://spring.io/projects/spring-cloud-stream#overview

   https://cloud.spring.io/spring-cloud-static/spring-cloud-stream/3.0.1.RELEASE/reference/html/

   Spring Cloud Stream中文指导手册：https://m.wang1314.com/doc/webapp/topic/20971999.html

#### 1.2 设计思想

1. 标准MQ

   ![img](SpringCloud学习笔记尚硅谷/Stream消息驱动/消息驱动概述设计思想标准MQ.png)

   - 生产者/消费者之间靠**消息**媒介传递信息内容。Message
   - 消息必须走特定的**通道**。消息通道MessageChannel
   - 消息通道里的消息如何被消费呢，谁负责收发**处理**。消息通道MessageChannel的子接口SubscribableChannel，由MessageHandler消息处理器所订阅

2. 为什么用Cloud Stream

   比方说我们用到了RabbitMQ和Kafka，由于这两个消息中间件的架构上的不同，像RabbitMQ有exchange，kafka有Topic和Partitions分区，这些中间件的差异性导致我们实际项目开发给我们造成了一定的困扰，我们如果用了两个消息队列的其中一种，后面的业务需求，我想往另外一种消息队列进行迁移，这时候无疑就是一个灾难性的，**一大堆东西都要重新推倒重新做**，因为它跟我们的系统耦合了，这时候Springcloud Stream给我们提供了一种解耦合的方式。

   ![image-20230721154149207](SpringCloud学习笔记尚硅谷/Stream消息驱动/消息驱动概述设计思想为什么用CloudStream.png)

   - stream凭什么可以统一底层差异？

     在没有绑定器这个概念的情况下，我们的 SpringBoot 应用要直接与消息中间件进行信息交互的时候，由于各消息中间件构建的初衷不同，它们的实现细节上会有较大的差异性。通过定义绑定器作为中间层，完美地实现了**应用程序与消息中间件细节之间的隔离**。通过向应用程序暴露统一的Channel通道，使得应用程序不需要再考虑各种不同的消息中间件实现。

     **通过定义绑定器Binder作为中间层，实现了应用程序与消息中间件细节之间的隔离**。

   - Binder

     在没有绑定器这个概念的情况下，我们的SpringBoot应用要直接与消息中间件进行信息交互的时候，由于各消息中间件构建的初衷不同，它们的实现细节上会有较大的差异性，通过定义绑定器作为中间层，完美地实现了**应用程序与消息中间件细节之间的隔离**。Stream对消息中间件的进一步封装，可以做到代码层面对中间件的无感知，甚至于动态的切换中间件(rabbitmq切换为kafka)，使得微服务开发的高度解耦，服务可以关注更多自己的业务流程。

     ![img](SpringCloud学习笔记尚硅谷/Stream消息驱动/消息驱动概述设计思想为什么用CloudStreamBinder.png)

     **通过定义绑定器Binder作为中间层，实现了应用程序与消息中间件细节之间的隔离**。

     Binder可以生成Binding，Binding用来绑定消息容器的生产者和消费者，它有两种类型，INPUT和OUTPUT：

     - INPUT对应于消费者
     - OUTPUT对应于生产者

3. Stream中的消息通信方式遵循了发布-订阅模式

   Topic主题进行广播

   - 在RabbitMQ就是Exchange
   - 在 Kakfa 中就是Topic

#### 1.3 Spring Cloud Stream标准流程套路

1. Binder
2. Channel
3. Source和Sink

#### 1.4 编码API和常用注解

### 2、案例说明

### 3、消息驱动之生产者

### 4、消息驱动之消费者

### 5、分组消费与持久化

## 十五、SpringCloud Sleuth 分布式请求链路跟踪

## 十六、SpringCloud Alibaba 入门简介

## 十七、SpringCloud Alibaba Nacos服务注册和配置中心

## 十八、SpringCloud Alibaba Sentinel实现熔断与限流

## 十九、SpringCloud Alibaba Seata处理分布式事务