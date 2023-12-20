---
title: Nginx学习笔记尚硅谷
description: Nginx学习笔记尚硅谷
author: itwangcoder
date: '2023-12-20'
categories:
 - 软件工具
tags:
 - 尚硅谷
 - Nginx
 - 中间件
 - 后端服务器
---

## 一、Nginx 安装

### 1、版本区别

常用版本分为四大阵营

- Nginx开源版

  http://nginx.org/

- Nginx plus 商业版

  https://www.nginx.com

- openresty

  http://openresty.org/cn/

- Tengine

  http://tengine.taobao.org/

### 2、Nginx 开源版本安装

1. 编译安装

   ``` shell
   tar -zxvf nginx-1.24.0.tar.gz
   cd nginx-1.24.0
   ./configure --prefix=/usr/local/nginx
   make
   make install
   ```

2. 如果提示或报错

   - 提示1：

     ```shell
     checking for OS
     + Linux 3.10.0-693.el7.x86_64 x86_64
     checking for C compiler ... not found
     ./configure: error: C compiler cc is not found
     ```

     安装 gcc

     ``` shell
     yum install -y gcc
     ```

   - 提示2：

     ``` shell
     ./configure: error: the HTTP rewrite module requires the PCRE library.
     You can either disable the module by using --without-http_rewrite_module
     option, or install the PCRE library into the system, or build the PCRE library
     statically from the source with nginx by using --with-pcre=<path> option.
     ```

     安装 perl 库

     ``` shell
     yum install -y pcre pcre-devel
     ```

   - 提示3：

     ``` shell
     ./configure: error: the HTTP gzip module requires the zlib library.
     You can either disable the module by using --without-http_gzip_module
     option, or install the zlib library into the system, or build the zlib library
     statically from the source with nginx by using --with-zlib=<path> option.
     ```

     安装 zlib 库

     ``` shell
     yum install -y zlib zlib-devel
     ```

3. 启动Nginx

   ```shell
   cd /usr/local/nginx
   ./nginx 启动
   ./nginx -s stop 快速停止
   ./nginx -s quit 优雅关闭，在退出前完成已经接受的连接请求
   ./nginx -s reload 重新加载配置
   ```

4. 关于防火墙

   ```shell
   systemctl stop firewalld.service		# 关闭防火墙
   systemctl disable firewalld.service		# 禁止防火墙开机启动
   firewall-cmd --zone=public --add-port=80/tcp --permanent		# 放行 80 端口
   firewall-cmd --reload			# 重启防火墙
   ```

5. 安装成系统服务

   - 创建服务脚本

     ```shell
     vim /usr/lib/systemd/system/nginx.service
     ```

   - 服务脚本内容

     ``` shell
     [Unit]
     Description=nginx - web server
     After=network.target remote-fs.target nss-lookup.target
     
     [Service]
     Type=forking
     PIDFile=/usr/local/nginx/logs/nginx.pid
     ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
     ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
     ExecReload=/usr/local/nginx/sbin/nginx -s reload
     ExecStop=/usr/local/nginx/sbin/nginx -s stop
     ExecQuit=/usr/local/nginx/sbin/nginx -s quit
     PrivateTmp=true
     
     [Install]
     WantedBy=multi-user.target
     ```

   - 重新加载系统服务

     ``` shell
     systemctl daemon-reload
     ```

   - 启动服务

     ``` shell
     systemctl start nginx.service
     ```

   - 开机启动

     ```shell
     systemctl enable nginx.service
     ```

## 二、Nginx 基础使用

### 1、目录结构

进入Nginx的主目录我们可以看到这些文件夹

> client_body_temp
>
> conf
>
> fastcgi_temp
>
> html
>
> logs
>
> proxy_temp
>
> sbin
>
> scgi_temp
>
> uwsgi_temp

其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件

> client_body_temp
>
> fastcgi_temp
>
> proxy_temp
>
> scgi_temp
>
> uwsgi_temp

- conf

  用来存放配置文件相关

- html

  用来存放静态文件的默认目录 html、css等

- sbin

  nginx的主程序

- logs

  存放 nginx的登录日志文件 access.log，错误日志文件 error.log 和 nginx的进程Id

### 2、基本运行原理

![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用基本运行原理.png)

> Nginx主进程不负责处理业务，只负责协调子进程处理业务。
>
> 子进程获取用户请求后进行处理

### 3、Nginx 配置与应用场景

#### 3.1 最小配置

``` shell
user nobody;		# 指定 nginx 启动时什么用户来启动	
```

- worker_processes

  ``` shell
  worker_processes 1;  	# 默认为1，表示开启一个业务进程，基本上一个cpu内核对应一个 worker_processes

- worker_connections

  ``` shell
  worker_connections 1024;  		# 单个业务进程可接受连接数

- include mime.types

  ``` shell
  include mime.types;  		# 引入http mime类型的配置文件，该文件存储的所有的请求头信息，可以识别要发送的文件的类型

- default_type application/octet-stream

  ``` shell
  default_type application/octet-stream;  		# 如果mime类型没匹配上，默认使用二进制流的方式传输。
  ```

- sendfile on

  ``` shell
  sendfile on;  		# 使用linux的 sendfile(socket, file, len) 高效网络传输，也就是数据0拷贝。
  ```

  - 未开启sendfile

    ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Nginx配置与应用场景最小配置sendfile未开启.png)

  - 开启后

    ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Nginx配置与应用场景最小配置sendfile开启后.png)

- keepalive_timeout 65

  ``` shell
  keepalive_timeout 65;		# 可以理解为保持链接，超时的时间
  ```

- server

  ``` shell
  server {		# 一个 server 就是一个主机，开启多个主机的方式叫虚拟主机（vhost）
      listen 80;  	# 监听端口号
      server_name localhost;  	# 主机名，可以在此配置域名或主机名
      
      location / {  			# 匹配路径，指定是网络地址中主机名后面的部分
          root html;  		# 文件根目录
          index index.html index.htm;  		# 默认页名称
      }
      
      error_page 500 502 503 504 /50x.html;  		# 报错编码对应页面
      location = /50x.html {	# 为50x.html设置访问路径，当用户访问50x.html，会去访问 html 目录下去寻找 50x.html页面
          root html;
      }
  }
  ```

#### 3.2 虚拟主机

![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Nginx配置与应用场景最小配置server.png)

- 浏览器、Nginx与http协议

  1. TCP协议：tcp是一个广泛的浏览器协议,它是以流的形式,进行传递数据的(数据是二进制的)
  2. 数据流:相当于一个水龙头,开启之后一直流通,没有关掉的动作
  3. HTTP协议:是一个在TCP之上的协议,它会在里面告诉TCP协议什么时候关掉流,当用户的浏览器和Nginx服务器都遵守和实现了HTTP协议之后,他们之间就可以进行信息的交流、传递了。
  4. HTTPS协议:HTTP之上的一个协议,加了一层数据加密的措施,保护数据。
  5. 请求流程:用户浏览器发送请求---> 网关(层层网关)--->--->互联网--->Nginx服务器--->解析请求--->找到资源--->返回给用户

- 虚拟主机原理

  如果有这样一个场景,假如一台主机只挂载了一个站点,当这个站点并没有太多的访问量时,就会造成资源过剩(有剩余资源),这时我们可以开启虚拟主机,挂载多个站点,合理的利用主机的资源。

  一个IP地址可以对应多个域名,根据域名的不同,我们去寻找这些域名对应的资源目录,找到这些资源之后,返回给用户。

  当然,我们需要在请求报文中加上这个域名,不然服务器不知道我们需要哪个域名的资源

- 使用host 文件解析域名

  进行 C:\Windows\System32\drivers\etc 找到 hosts 文件，对文件内容进行修改，添加如下内容

  ```
  192.168.37.128 wang128.com
  ```

  > 设置完成后可以ping通，但是网页访问出现 502 错误
  >
  > 解决方法：在网页设置中的代理选项中添加 `wang128.com` 
  >
  > 这样可以在浏览器中输入该域名进而访问虚拟机中nginx对应的网页

- 公网域名配置与泛域名解析实战

  进入阿里云管理，点击域名，选择域名列表中自己申请的域名，点击解析，点击添加记录

  ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Nginx配置与应用场景虚拟主机公网域名配置与泛域名解析实战.png)

  > 在主机记录中可以添 * 以此来配置多级域名

- Nginx虚拟主机域名配置

  首先需要在阿里云服务配置公网域名，并且公网域名的主机记录应当为 * ；接着在虚拟机中创建两个网页，分别是

  ```
  /usr/local/nginx/www/www/index.html
  /usr/local/nginx/www/vod/index.html
  ```

  接着在 `/usr/local/nginx/conf/nginx.conf` 配置文件中进行如下配置

  ```shell
  server {		# 一个 server 就是一个主机，开启多个主机的方式叫虚拟主机（vhost）
      listen 80;  	# 监听端口号
      server_name www.itwangcoder.top;  	# 主机名，可以在此配置域名或主机名
      
      location / {  			# 匹配路径，指定是网络地址中主机名后面的部分
          root www/www;  		# 文件根目录
          index index.html index.htm;  		# 默认页名称
      }
      
      error_page 500 502 503 504 /50x.html;  		# 报错编码对应页面
      location = /50x.html {	# 为50x.html设置访问路径，当用户访问50x.html，会去访问 html 目录下去寻找 50x.html页面
          root html;
      }
  }
  
  server {		# 一个 server 就是一个主机，开启多个主机的方式叫虚拟主机（vhost）
      listen 80;  	# 监听端口号
      server_name vod.itwangcoder.top;  	# 主机名，可以在此配置域名或主机名
      
      location / {  			# 匹配路径，指定是网络地址中主机名后面的部分
          root www/vod;  		# 文件根目录
          index index.html index.htm;  		# 默认页名称
      }
      
      error_page 500 502 503 504 /50x.html;  		# 报错编码对应页面
      location = /50x.html {	# 为50x.html设置访问路径，当用户访问50x.html，会去访问 html 目录下去寻找 50x.html页面
          root html;
      }
  }
  ```

  > 注：在更改配置后需要重启服务
  >
  > ```shell
  > systemctl reload nginx.service
  > ```
  >
  > 这样就可以通过网址`www.itwangcoder.top`和`vod.itwangcoder.top`分别访问不同的虚拟主机（即配置的不同网页）

- serverName的多种匹配方式

  - serverName匹配规则

    我们需要注意的是serverName匹配分先后顺序，写在前面的匹配上就不会继续往下匹配了。

  - 完整匹配

    我们可以在同一serverName中匹配多个域名

    ``` shell
    server_name vod.itwangcoder.top vod1.itwangcoder.top;
    ```

  - 通配符匹配

    ``` shell
    server_name *.itwangcoder.top;
    ```

  - 通配符结束匹配

    ``` shell
    server_name vod.*;
    ```

  - 正则匹配

    ``` shell
    server_name ~^[0-9]+\.itwangcoder\.top$;
    ```

- 基于域名的几种互联网企业需求解析

  ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Nginx配置与应用场景虚拟主机基于域名的几种互联网企业需求解析1.png)

  ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Nginx配置与应用场景虚拟主机基于域名的几种互联网企业需求解析2.png)

### 4、反向代理

![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用反向代理.png)

、![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用反向代理中正向代理.png)

1. 网关、代理与反向代理

   正向代理是代理客户端，服务端不知道实际发起请求的客户端；反向代理是代理服务端，客户端不知道实际提供服务的服务端。

   访问网络的入口称为**网关**，代理服务器也是一种网关，所有请求都得经过网关转发

   隧道式代理：Nginx的带宽就是整个网络集群的带宽，比较高的IO请求下，nginx做反向代理不合适。隧道式代理的含义是所有请求都只能通过nginx才能进出

   lvs：指进入需要通过nginx进行访问，回传数据时由后端服务器直接把数据传给用户，这种称之为 DR 模型

2. 反向代理在企业中的应用场景

   ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用反向代理中反向代理在企业中的应用场景.png)

### 5、基于反向代理的负载均衡

1. 什么是负载均衡

   早期的网站流量和业务功能都比较简单，单台服务器就可以满足基本需求，但是随着互联网的发展业务流量越来越大并且业务逻辑也越来越复杂，单台服务器的性能及单点故障问题就凸显出来了，因此需要多台服务器组成应用集群，进行性能的水平扩展以及避免单点故障出现。

   - 应用集群：将同一应用部署到多台机器上，组成应用集群，接收负载均衡器分发的请求，进行业务处理并返回响应数据
   - 负载均衡器：将用户请求根据对应的负载均衡算法分发到应用集群中的一台服务器进行处理

2. 反向代理到外网与内网的主机配置

   配置跳转至外网网站，nginx.conf 配置文件修改如下

   ```shell
    server {
           listen       80;
           server_name  localhost;
         
           location / {
               proxy_pass http://www.atguigu.com;
               # root   html/dist;
               # index  index.html index.htm;
           }
   
           error_page   500 502 503 504  /50x.html;
           location = /50x.html {
               root   html;
           }
   }
   ```

   配置跳转至本机的服务器，nginx.conf 配置文件修改如下

   ```shell
     server {
           listen       80;
           server_name  localhost;
         
           location / {
           	proxy_pass http://192.168.37.101;
               # proxy_pass http://www.atguigu.com;
               # root   html/dist;
               # index  index.html index.htm;
           }
   
           error_page   500 502 503 504  /50x.html;
           location = /50x.html {
               root   html;
           }
   }
   ```

   ```shell
   server {
           listen       80;
           server_name  localhost;
   
           location / {
               root html;
               # root   www/www;
               index  index.html index.htm;
           }
   
           error_page   500 502 503 504  /50x.html;
           location = /50x.html {
               root   html;
           }
   }
   ```

3. 负载均衡基本配置

   nginx.conf 配置文件修改如下

   ``` shell
   	upstream httpds{
           server 192.168.37.128:8081;
           server 192.168.37.101:80;
       }
   
       server {
           listen       80;
           server_name  localhost;
   
           location / {
               # proxy_pass http://qq.com;
               # proxy_pass http://192.168.37.101;
               proxy_pass http://httpds;
               # root   html/dist;
               # root   www/www;
               # index  index.html index.htm;
           }
           
           error_page   500 502 503 504  /50x.html;
           location = /50x.html {
               root   html;
           }
        }
   
        server {
           listen       8081;
           server_name  localhost;
           
           location / {
               root html;
               index  index.html index.htm;
           }
   
           error_page  500 502 503 504  /50x.html;
           location = /50x.html {
               root html;
           }
   	}
   ```

4. 负载均衡策略

   1. 轮询

      默认情况下使用轮询方式，逐一转发，这种方式适用于无状态请求。

      > 轮询策略无法保持会话

   2. weight(权重)

      指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。nginx.conf 配置文件修改如下

      ```shell
      	upstream httpds{
              server 192.168.37.128:8081 weight=4 down;
              server 192.168.37.101:80 weight=6 backup;
          }
      ```

      - down：表示当前的server暂时不参与负载
      - weight：默认为1.weight越大，负载的权重就越大。
      - backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。

   3. ip_hash（**不经常使用**）

      根据客户端的ip地址转发同一台服务器，可以保持回话。

   4. least_conn（**不经常使用**）

      最少连接访问

   5. url_hash（**不经常使用**）

      根据用户访问的url定向转发请求

   6. fair（**不经常使用**）

      根据后端服务器响应时间转发请求

5. 动静分离的原理和使用场景

   ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用基于反向代理的负载均衡动静分离的原理和使用场景.png)

   首先将前端页面复制到apache-tomcat中的 webapps目录下，接着更改 conf/server.xml 配置文件，添加如下代码

   ```xml
   <Context path="" docBase="dist" reloadable="true" />
   ```

   nginx.conf 配置文件修改如下

   ```shell
   server {
           listen       80;
           server_name  localhost;
   
           location / {
               proxy_pass http://192.168.37.101:8080;
           }
           
           #location /css {
           #	root   html/dist;
           #    index  index.html index.htm;
           #}
           
           #location /js {
           #	root   html/dist;
           #    index  index.html index.htm;
           #}
           
           #location /img {
           #	root   html/dist;
           #    index  index.html index.htm;
           # }
           
           # 下面是正则表达式写法
           location ~*/(css|img|js|fonts) {
           	root   html/dist;
               index  index.html index.htm;
           }
           
           error_page   500 502 503 504  /50x.html;
           location = /50x.html {
               root   html;
           }
        }
   ```

   > 正则表达式：location 前缀
   >
   > - `/` 通用匹配，任何请求都会匹配到。
   > - `=` 精准匹配，不是以指定模式开头
   > - `~` 正则匹配，区分大小写
   > - `~*` 正则匹配，不区分大小写
   > - `^~` 非正则匹配，匹配以指定模式开头的location
   >
   > location匹配顺序
   >
   > - 多个正则location直接按书写顺序匹配，成功后就不会继续往后面匹配
   > - 普通（非正则）location会一直往下，直到找到匹配度最高的（最大前缀匹配）
   > - 当普通location与正则location同时存在，如果正则匹配成功,则不会再执行普通匹配
   > - 所有类型location存在时，“=”匹配 > “^~”匹配 > 正则匹配 > 普通（最大前缀匹配）

6. alias与root

   ```shell
   location /css {
       alias /usr/local/nginx/static/css;
       index index.html index.htm;
   }
   ```

   > root用来设置根目录，而alias在接受请求的时候在路径上不会加上location。
   >
   > 1. alias指定的目录是准确的，即location匹配访问的path目录下的文件直接是在alias目录下查找的；
   > 2. root指定 的目录是location匹配访问的path目录的上一级目录,这个path目录一定要是真实存在root指定目录下的；
   > 3. 使用 alias标签的目录块中不能使用rewrite的break（具体原因不明）；另外，alias指定的目录后面必须要加上"/"符 号！！
   > 4. alias虚拟目录配置中，location匹配的path目录如果后面不带"/"，那么访问的url地址中这个path目录后 面加不加"/"不影响访问，访问时它会自动加上"/"； 但是如果location匹配的path目录后面加上"/"，那么访问的url地 址中这个path目录必须要加上"/"，访问时它不会自动加上"/"。如果不加上"/"，访问就会失败！
   > 5. root目录配置 中，location匹配的path目录后面带不带"/"，都不会影响访问。

7. URLRewrite

   nginx.conf 配置文件修改如下

   ```shell
   location / {
   	rewrite ^/([0-9]+).html$ /index.jsp?pageNum=$1 break;
       proxy_pass http://192.168.37.128:8080;
   }
   ```

   > rewrite是实现URL重写的关键指令，根据regex (正则表达式)部分内容， 重定向到replacement，结尾是flag标记。
   >
   > ```shell
   > rewrite <regex> <replacement> [flag];
   > ```
   >
   > | rewrite | \<regex\> | \<replacement\> | \[flag\] |
   > | ------- | --------- | --------------- | -------- |
   > | 关键字  | 正则      | 替代内容        | flag标记 |
   >
   > - 关键字：其中关键字error_log不能改变
   > - 正则：perl兼容正则表达式语句进行规则匹配
   >
   > - 替代内容：将正则匹配的内容替换成replacement
   > - flag标记：rewrite支持的flag标记
   >
   > rewrite参数的标签段位置： server,location,if
   >
   > flag标记说明：
   >
   > - last #本条规则匹配完成后，继续向下匹配新的location URI规则
   > - break #本条规则匹配完成即终止，不再匹配后面的任何规则
   > - redirect #返回302临时重定向，浏览器地址会显示跳转后的URL地址
   > - permanent #返回301永久重定向，浏览器地址栏会显示跳转后的URL地址

8. 负载均衡与URLRewrite

   应用服务器防火墙配置

   1. 开启防火墙

      ```shell
      systemctl start firewalld

   2. 重启防火墙

      ```shell
      systemctl restart firewalld

   3. 重载规则

      ```shell
      firewall-cmd --reload

   4. 查看已配置规则

      ```shell
      firewall-cmd --list-all

   5. 指定端口和ip访问

      ```shell
      firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="192.168.37.128" port protocol="tcp" port="8080" accept"

   6. 移除规则

      ```shell
      firewall-cmd --permanent --remove-rich-rule="rule family="ipv4" source address="192.168.37.128" port port="8080" protocol="tcp" accept"

   7. 网关配置

      ```shell
      upstream httpds {
          server 192.168.44.128 weight=8;
          server 192.168.44.101:8080 weight=2;
      }
      location / {
          # rewrite ^/([0-9]+).html$ /index.jsp?pageNum=$1 redirect;
          proxy_pass http://httpds;
      }
      

9. 防盗链

   ```shell
   valid_referers none | blocked | server_names | strings ....
   ```

   > - none， 检测 Referer 头域不存在的情况。
   > - blocked，检测 Referer 头域的值被防火墙或者代理服务器删除或伪装的情况。这种情况该头域的值不以 “http://” 或 “https://” 开头。
   > - server_names ，设置一个或多个 URL ，检测 Referer 头域的值是否是这些 URL 中的某一个。

   在需要防盗链的location中配置

   ```shell
       	location ~*/(css|img|js|fonts) {
               valid_referers none 192.168.37.128;
               if ($invalid_referer) {
                   return 403;
               }
               root   html/dist;
               index  index.html index.htm;
           }
   ```

   1. 使用curl测试

      ```shell
      curl -I http://192.168.37.128/img/logo.053d32eb.png
      ```

   2. 带引用

      ```shell
      curl -e "http://baidu.com" -I http://192.168.37.128/img/logo.053d32eb.png
      ```

   3. 企业实战盗链资源返回页面或提示图片

      首先创建一个页面 401.html

      接着修改配置文件内容 nginx.conf，添加如下内容

      ```shell
       		error_page   403  /401.html;
              location = /401.html {
                  root   html;
              }
      
      		# 想要返回图片，需要修改如下内容
      		location ~*/(css|img|js|fonts) {
                  valid_referers none 192.168.37.128;
                  if ($invalid_referer) {
                  	rewrite ^/	/img/x.png	break;
                      # return 403;
                  }
                  root   html/dist;
                  index  index.html index.htm;
              }
      ```


### 6、高可用配置

1. 高可用场景及解决方案

   ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用高可用配置场景及解决方案.png)

2. 安装 keepalived

   - 编译安装

     下载地址：https://www.keepalived.org/download.html#

     使用 ./configure 编译安装

     > 如遇报错提示
     >
     > ```shell
     > configure: error:
     >  !!! OpenSSL is not properly installed on your system. !!!
     >  !!! Can not include OpenSSL headers files. !!!
     > ```
     >
     >  安装依赖
     >
     > ```shell
     > yum install openssl-devel
     > ```

   - yum 安装

     ```shell
     yum install -y keepalived
     ```

     > **出现错误**：
     >
     > 错误：软件包：1:net-snmp-agent-libs-5.7.2-49.el7_9.2.x86_64 (updates)
     >           需要：libmysqlclient.so.18()(64bit)
     > 错误：软件包：2:postfix-2.10.1-9.el7.x86_64 (@anaconda)
     >           需要：libmysqlclient.so.18(libmysqlclient_18)(64bit)
     >
     > **解决方案**：
     >
     > ```shell
     > 到官网（https://dev.mysql.com/downloads/mysql/）下载mysql-community-libs-compat-8.0.31-1.el7.x86_64.rpm
     > rpm -ivh mysql-community-libs-compat-8.0.31-1.el7.x86_64.rpm
     > ```

   - 配置

     使用 yum 安装后配置文件位置在 `/etc/keepalived/keepalived.conf`

     第一台机器

     ```shell
     ! Configuration File for keepalived
     global_defs {
     	router_id lb111
     }
     
     vrrp_instance itwang {		# keepalived 在内网中通讯的协议 ， 后面的是实例名称
         state MASTER
         interface ens33			# 需要和电脑上的网卡对应上
         virtual_router_id 51
         priority 100			# 优先级
         advert_int 1			# 间隔检测时间
         authentication {		# 对 keepaliveed 同一组的认证配置
             auth_type PASS
             auth_pass 1111
         }
         virtual_ipaddress {		# 虚拟的ip地址
         	192.168.37.200
         }
     }
     ```

     第二台机器

     ```shell
     ! Configuration File for keepalived
     global_defs {
     	router_id lb110
     }
     
     vrrp_instance itwang {		# keepalived 在内网中通讯的协议 ， 后面的是实例名称
         state BACKUP
         interface ens33			# 需要和电脑上的网卡对应上
         virtual_router_id 51
         priority 50			# 优先级
         advert_int 1			# 间隔检测时间
         authentication {		# 对 keepaliveed 同一组的认证配置
             auth_type PASS
             auth_pass 1111
         }
         virtual_ipaddress {		# 虚拟的ip地址
         	192.168.37.200
         }
     }
     ```

     启动服务

     ```shell
     systemctl start keepalived
     ```

### 7、Https 证书配置

1. 不安全的http协议

   ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Http证书配置不安全的http协议.png)

2. 非对称加密算法原理

   ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Http证书配置非对称加密算法原理.png)

3. HTTPS中CA机构参与保证互联网安全

   ![](Nginx学习笔记尚硅谷/核心技术篇/Nginx基本使用Https中CA机构参与保证互联网安全.png)

   window上查看所有证书信息：win+R后输入 certmgr.msc 即可

4. 证书自签名

   - OpenSSL

     openssl包含：SSL协议库、应用程序以及密码算法库，系统内置

   - 图形化工具 XCA

     下载地址：https://www.hohnstaedt.de/xca/index.php/download

5. 在线证书申请

## 三、