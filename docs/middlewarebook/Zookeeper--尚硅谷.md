---
title: Zookeeper学习笔记尚硅谷
description: Zookeeper学习笔记尚硅谷
author: itwangcoder
date: '2023-12-20'
categories:
 - 框架
tags:
 - 尚硅谷
 - Java
 - 框架
 - Apache项目
---

## 一、基础操作

### 1、Zookeeper 入门

#### 1.1 概述

Zookeeper 是一个开源的分布式的，为分布式框架提供协调服务的 Apache 项目。

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/概述1.png)

Zookeeper 工作机制

Zookeeper从设计模式角度来理解：是一个基于观察者模式设计的分布式服务管理框架，它负 责 存储和管理大家都关心的数据，然 后接受观察者的 注 册，一旦这些数据的状态发生变化，Zookeeper 就 将负责通知已经在Zookeeper上注册的那些观察 者做出相应的反应。

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/概述工作机制.png)

#### 1.2 特点

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/特点.png)

1. Zookeeper：一个领导者（Leader），多个跟随者（Follower）组成的集群。
2. 集群中只要有半数以上节点存活，Zookeeper集群就能正常服务。所 以Zookeeper适合安装奇数台服务器。
3. 全局数据一致：每个Server保存一份相同的数据副本，Client无论连接到哪个Server，数据都是一致的。
4. 更新请求顺序执行，来自同一个Client的更新请求按其发送顺序依次执行。
5. 数据更新原子性，一次数据更新要么成功，要么失败。
6. 实时性，在一定时间范围内，Client能读到最新数据。

#### 1.3 数据结构

ZooKeeper 数据模型的结构与 Unix 文件系统很类似，整体上可以看作是一棵树，每个 节点称做一个 ZNode。每一个 ZNode 默认能够存储 1MB 的数据，每个 ZNode 都可以通过 其路径唯一标识。

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/数据结构.png)

#### 1.4 应用场景

提供的服务包括：统一命名服务、统一配置管理、统一集群管理、服务器节点动态上下 线、软负载均衡等。

1. 统一命名服务

   在分布式环境下，经常需要对应用/服 务进行统一命名，便于识别。 例如：IP不容易记住，而域名容易记住。

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/应用场景统一命名服务.png)

2. 统一配置管理

   - 分布式环境下，配置文件同步非常常见。
     - 一般要求一个集群中，所有节点的配置信息是 一致的，比如 Kafka 集群。
     - 对配置文件修改后，希望能够快速同步到各个 节点上。

   - 配置管理可交由ZooKeeper实现。
     - 可将配置信息写入ZooKeeper上的一个Znode。
     - 各个客户端服务器监听这个Znode。
     - 一 旦Znode中的数据被修改，ZooKeeper将通知 各个客户端服务器。

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/应用场景统一配置管理.png)

3. 统一集群管理

   - 分布式环境中，实时掌握每个节点的状态是必要的。
     - 可根据节点实时状态做出一些调整。
   - ZooKeeper可以实现实时监控节点状态变化
     - 可将节点信息写入ZooKeeper上的一个ZNode。
     - 监听这个ZNode可获取它的实时状态变化。

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/应用场景统一集群管理.png)

4. 服务器节点动态上下线

   客户端能实时洞察到服务 器上下线的变化

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/应用场景服务器动态上下线.png)

5. 软负载均衡

   在Zookeeper中记录每台服务器的访问数，让访问数最少的服务器去处理最新的客户端请求

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper入门/应用场景软负载均衡.png)

#### 1.5 下载地址

1. 官网首页： https://zookeeper.apache.org/

2. 下载步骤

   > Download -> in the archive，然后选择相应的版本，下载 bin.tar.gz 后缀的文件

### 2、Zookeeper 本地安装

#### 2.1 本地模式安装

1. 安装前准备

   1. 安装 JDK

   2. 拷贝 apache-zookeeper-3.5.7-bin.tar.gz 安装包到 Linux 系统下

   3. 解压到指定目录

      ``` shell
      [atguigu@hadoop102 software]$ tar -zxvf apache-zookeeper-3.5.7-bin.tar.gz -C /opt/module/
      ```

   4. 修改名称

      ``` shell
      [atguigu@hadoop102 module]$ mv apache-zookeeper-3.5.7 -bin/ zookeeper-3.5.7

2. 配置修改

   1. 将/opt/module/zookeeper-3.5.7/conf 这个路径下的 zoo_sample.cfg 修改为 zoo.cfg

      ``` shell
      [atguigu@hadoop102 conf]$ mv zoo_sample.cfg zoo.cfg

   2. 打开 zoo.cfg 文件，修改 dataDir 路径

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ vim zoo.cfg
      ```

      修改如下内容

      ``` shell
      dataDir=/opt/module/zookeeper-3.5.7/zkData

   3. 在/opt/module/zookeeper-3.5.7/这个目录上创建 zkData 文件夹

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ mkdir zkData

3. 操作 Zookeeper

   1. 启动 Zookeeper

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh start

   2. 查看进程是否启动

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ jps
      4020 Jps
      4001 QuorumPeerMain

   3. 查看状态

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh status
      ZooKeeper JMX enabled by default
      Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg
      Mode: standalone

   4. 启动客户端

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkCli.sh

   5. 退出客户端

      ``` shell
      [zk: localhost:2181(CONNECTED) 0] quit

   6. 停止 Zookeeper

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh stop

#### 2.2 配置参数解读

Zookeeper中的配置文件zoo.cfg中参数含义解读如下：

1. tickTime = 2000：通信心跳时间，Zookeeper服务器与客户端心跳时间，单位毫秒

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper本地安装/配置参数解读tickTime.png)

2. initLimit = 10：LF初始通信时限

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper本地安装/配置参数解读Limit.png)

   > Leader和Follower初始连接时能容忍的最多心跳数（tickTime的数量）

3. syncLimit = 5：LF同步通信时限

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper本地安装/配置参数解读Limit.png)

   > Leader和Follower之间通信时间如果超过syncLimit * tickTime，Leader认为Follwer死 掉，从服务器列表中删除Follwer。

4. dataDir：保存Zookeeper中的数据

   > 注意：默认的tmp目录，容易被Linux系统定期删除，所以一般不用默认的tmp目录。

5. clientPort = 2181：客户端连接端口，通常不做修改。

### 3、Zookeeper 集群操作

#### 3.1 集群操作

##### 3.1.1 集群安装

首先按照Zookeeper 本地安装的格式进行安装。

1. 配置服务器编号

   在/opt/module/zookeeper-3.5.7/zkData 目录下创建一个 myid 的文件

   ``` shell
   [atguigu@hadoop102 zkData]$ vim myid
   ```

   在文件中添加与 server 对应的编号（注意：上下不要有空行，左右不要有空格）

   ``` shell
   1
   ```

   > 注意：添加 myid 文件，一定要在 Linux 里面创建，在 notepad++里面很可能乱码
   >
   > zookeeper-3.5.7 对应为1
   >
   > zookeeper2 对应为2
   >
   > zookeeper3 对应为3

2. 配置zoo.cfg文件

   打开 zoo.cfg 文件

   \#增加如下配置

   ``` shell
   #######################cluster##########################
   server.1=127.0.0.1:2881:3881
   server.2=127.0.0.1:2882:3882
   server.3=127.0.0.1:2883:3883
   ```

   > 配置参数解读
   >
   > A 是一个数字，表示这个是第几号服务器； 
   >
   > 集群模式下配置一个文件 myid，这个文件在 dataDir 目录下，这个文件里面有一个数据 就是 A 的值，Zookeeper 启动时读取此文件，拿到里面的数据与 zoo.cfg 里面的配置信息比 较从而判断到底是哪个 server。 
   >
   > B 是这个服务器的地址； 
   >
   > C 是这个服务器 Follower 与集群中的 Leader 服务器交换信息的端口； 
   >
   > D 是万一集群中的 Leader 服务器挂了，需要一个端口来重新进行选举，选出一个新的 Leader，而这个端口就是用来执行选举时服务器相互通信的端口。

3. 集群操作

   1. 分别启动 Zookeeper

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkServer.sh start
      [atguigu@hadoop103 zookeeper-3.5.7]$ bin/zkServer.sh start
      [atguigu@hadoop104 zookeeper-3.5.7]$ bin/zkServer.sh start

   2. 查看状态

      ``` shell
      [atguigu@hadoop102 zookeeper-3.5.7]# bin/zkServer.sh status
      JMX enabled by default
      Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg
      Mode: follower
      [atguigu@hadoop103 zookeeper-3.5.7]# bin/zkServer.sh status
      JMX enabled by default
      Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg
      Mode: leader
      [atguigu@hadoop104 zookeeper-3.4.5]# bin/zkServer.sh status
      JMX enabled by default
      Using config: /opt/module/zookeeper-3.5.7/bin/../conf/zoo.cfg
      Mode: follower

##### 3.1.2 选举机制

1. Zookeeper 选举机制——第一次启动

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper集群操作/集群操作选举机制第一次.png)

   1. 服务器1启 动，发起一次选举。服务器1投自己一票。此时服务器1票数一票，不够半数以上（3票），选举无法完成，服务器1状态保持为 LOOKING； 
   2. 服务器2启动，再发起一次选举。服务器1和2分别投自己一票并交换选票信息：此时服务器1发现服务器2的myid比自己目前投票推举的（服务器1） 大，更改选票为推举服务器2。此时服务器1票数0票，服务器2票数2票，没有半数以上结果，选举无法完成，服务器1，2状态保持LOOKING
   3. 服务器3启动，发起一次选举。此时服务器1和2都会更改选票为服务器3。此次投票结果：服务器1为0票，服务器2为0票，服务器3为3票。此时服 务器3的票数已经超过半数，服务器3当选Leader。服务器1，2更改状态为FOLLOWING，服务器3更改状态为LEADING； LOOKING LOOKING 1 0 1 2 0 3 
   4. 服务器4启动，发起一次选举。此时服务器1，2，3已经不是LOOKING状态，不会更改选票信息。交换选票信息结果：服务器3为3票，服务器4为 1票。此时服务器4服从多数，更改选票信息为服务器3，并更改状态为FOLLOWING；
   5. 服务器5启动，同4一样当小弟。

2. Zookeeper 选举机制——非第一次启动

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper集群操作/集群操作选举机制非第一次.png)

   1. 当ZooKeeper集群中的一台服务器出现以下两种情况之一时，就会开始进入Leader选举：

      - 服务器初始化启动。
      - 服务器运行期间无法和Leader保持连接。

   2. 而当一台机器进入Leader选举流程时，当前集群也可能会处于以下两种状态：

      - 集群中本来就已经存在一个Leader。 

        对于第一种已经存在Leader的情况，机器试图去选举Leader时，会被告知当前服务器的Leader信息，对于该机器来说，仅仅需要和Leader机器建立连 接，并进行状态同步即可。

      - 集群中确实不存在Leader。 

        假设ZooKeeper由5台服务器组成，SID分别为1、2、3、4、5，ZXID分别为8、8、8、7、7，并且此时SID为3的服务器是Leader。某一时刻， 3和5服务器出现故障，因此开始进行Leader选举。 

         SID为1、2、4的机器投票情况： （EPOCH，ZXID，SID ）（1，8，1） （EPOCH，ZXID，SID ）（1，8，2） （EPOCH，ZXID，SID ）（1，7，4）

        选举Leader规则： **①EPOCH大的直接胜出 ②EPOCH相同，事务id大的胜出 ③事务id相同，服务器id大的胜出**

##### 3.1.3 ZK 集群启动停止脚步

1. 在 hadoop102 的/home/atguigu/bin 目录下创建脚本

   ``` shell
   [atguigu@hadoop102 bin]$ vim zk.sh
   ```

   在脚本中编写如下内容

   ``` sh
   #!/bin/bash
   
   case $1 in
   "start"){
       for i in hadoop102 hadoop103 hadoop104
       do
           echo ---------- zookeeper $i 启动 ------------
           ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh start"
       done
   };;
   "stop"){
       for i in hadoop102 hadoop103 hadoop104
       do
           echo ---------- zookeeper $i 停止 ------------ 
           ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh stop"
       done
   };;
   "status"){
       for i in hadoop102 hadoop103 hadoop104
       do
           echo ---------- zookeeper $i 状态 ------------ 
           ssh $i "/opt/module/zookeeper-3.5.7/bin/zkServer.sh status"
       done
   };;
   
   esac
   ```

   ``` sh
   #!/bin/bash
   
   case $1 in
   "start"){
     echo ---------- zookeeper1 启动 ------------
     /opt/module/zookeeper-3.5.7/bin/zkServer.sh start
     echo ---------- zookeeper2 启动 ------------
     /opt/module/zookeeper2/bin/zkServer.sh start
     echo ---------- zookeeper3 启动 ------------
     echo "/opt/module/zookeeper3/bin/zkServer.sh start
   };;
   "stop"){
     echo ---------- zookeeper1 停止 ------------
     /opt/module/zookeeper-3.5.7/bin/zkServer.sh stop"
     echo ---------- zookeeper2 停止 ------------
     /opt/module/zookeeper2/bin/zkServer.sh stop"
     echo ---------- zookeeper3 停止 ------------
     /opt/module/zookeeper3/bin/zkServer.sh stop
   };;
   "status"){
     echo ---------- zookeeper1 状态 ------------
     /opt/module/zookeeper-3.5.7/bin/zkServer.sh status
     echo ---------- zookeeper2 状态 ------------
     /opt/module/zookeeper2/bin/zkServer.sh status
     echo ---------- zookeeper3 状态 ------------
     /opt/module/zookeeper3/bin/zkServer.sh status
   };;
   
   esac
   ```

2. 增加脚本执行权限

   ``` shell
   [atguigu@hadoop102 bin]$ chmod u+x zk.sh

3. Zookeeper 集群启动脚本

   ``` shell
   [atguigu@hadoop102 module]$ /home/wang/bin/zk.sh start

4. Zookeeper 集群停止脚本

   ``` shell
   [atguigu@hadoop102 module]$ /home/wang/bin/zk.sh stop

#### 3.2 客户端命令行操作

##### 3.2.1 命令行语法

| 命令基本语法 | 功能描述                                                     |
| ------------ | ------------------------------------------------------------ |
| help         | 显示所有操作命令                                             |
| ls path      | 使用 ls 命令来查看当前 znode 的子节点 [可监听]  -w 监听子节点变化      -s 附加次级信息 |
| create       | 普通创建  -s 含有序列  -e 临时（重启或者超时消失）           |
| get path     | 获得节点的值 [可监听]  -w 监听节点内容变化  -s 附加次级信息  |
| set          | 设置节点的具体值                                             |
| stat         | 查看节点状态                                                 |
| delete       | 删除节点                                                     |
| deleteall    | 递归删除节点                                                 |

1. 启动客户端

   ``` shell
   [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkCli.sh -server hadoop102:2181

2. 显示所有操作命令

   ``` shell
   [zk: hadoop102:2181(CONNECTED) 1] help

##### 3.2.2 znode 节点数据信息

1. 查看当前znode中所包含的内容

   ``` shell
   [zk: hadoop102:2181(CONNECTED) 0] ls /
   [zookeeper]

2. 查看当前节点详细数据

   ``` shell
   [zk: hadoop102:2181(CONNECTED) 5] ls -s /
   [zookeeper]cZxid = 0x0
   ctime = Thu Jan 01 08:00:00 CST 1970
   mZxid = 0x0
   mtime = Thu Jan 01 08:00:00 CST 1970
   pZxid = 0x0
   cversion = -1
   dataVersion = 0
   aclVersion = 0
   ephemeralOwner = 0x0
   dataLength = 0
   numChildren = 1
   ```

   > 1. czxid：创建节点的事务 zxid 每次修改 ZooKeeper 状态都会产生一个 ZooKeeper 事务 ID。事务 ID 是 ZooKeeper 中所 有修改总的次序。每次修改都有唯一的 zxid，如果 zxid1 小于 zxid2，那么 zxid1 在 zxid2 之 前发生。
   > 2. ctime：znode 被创建的毫秒数（从 1970 年开始）
   > 3. mzxid：znode 最后更新的事务 zxid
   > 4. mtime：znode 最后修改的毫秒数（从 1970 年开始）
   > 5. pZxid：znode 最后更新的子节点 zxid
   > 6. cversion：znode 子节点变化号，znode 子节点修改次数
   > 7. dataversion：znode 数据变化号
   > 8. aclVersion：znode 访问控制列表的变化号
   > 9. ephemeralOwner：如果是临时节点，这个是 znode 拥有者的 session id。如果不是 临时节点则是 0。
   > 10. dataLength：znode 的数据长度
   > 11. numChildren：znode 子节点数量

##### 3.2.3 节点类型（持久/短暂/有序号/无序号）

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper集群操作/客户端命令行操作节点类型.png)

> 1. 持久化目录节点 
>
>    客户端与Zookeeper断开连接后，该节点依旧存在
>
> 2. 持久化顺序编号目录节点 
>
>    客户端与Zookeeper断开连接后，该节点依旧存 在，只是Zookeeper给该节点名称进行顺序编号
>
> 3. 临时目录节点 
>
>    客户端与Zookeeper断开连接后，该节点被删除
>
> 4. 临时顺序编号目录节点 
>
>    客户端与 Zookeeper 断开连接后 ， 该 节 点 被 删 除 ， 只 是 Zookeeper给该节点名称进行顺序编号。

1. 分别创建2个普通节点（永久节点 + 不带序号）

   ``` shell
   [zk: localhost:2181(CONNECTED) 3] create /sanguo "diaochan"
   Created /sanguo
   [zk: localhost:2181(CONNECTED) 4] create /sanguo/shuguo "liubei"
   Created /sanguo/shuguo
   ```

   > 注意：创建节点时，要赋值

2. 获得节点的值

   ``` shell
   [zk: localhost:2181(CONNECTED) 5] get -s /sanguo
   diaochan
   cZxid = 0x100000003
   ctime = Wed Aug 29 00:03:23 CST 2018
   mZxid = 0x100000003
   mtime = Wed Aug 29 00:03:23 CST 2018
   pZxid = 0x100000004
   cversion = 1
   dataVersion = 0
   aclVersion = 0
   ephemeralOwner = 0x0
   dataLength = 7
   numChildren = 1
   
   [zk: localhost:2181(CONNECTED) 6] get -s /sanguo/shuguo
   liubei
   cZxid = 0x100000004
   ctime = Wed Aug 29 00:04:35 CST 2018
   mZxid = 0x100000004
   mtime = Wed Aug 29 00:04:35 CST 2018
   pZxid = 0x100000004
   cversion = 0
   dataVersion = 0
   aclVersion = 0
   ephemeralOwner = 0x0
   dataLength = 6
   numChildren = 0

3. 创建带序号的节点（永久节点 + 带序号）

   1. 先创建一个普通的根节点/sanguo/weiguo

      ``` shell
      [zk: localhost:2181(CONNECTED) 1] create /sanguo/weiguo "caocao"
      Created /sanguo/weiguo

   2. 创建带序号的节点

      ``` shell
      [zk: localhost:2181(CONNECTED) 2] create -s /sanguo/weiguo/zhangliao "zhangliao"
      Created /sanguo/weiguo/zhangliao0000000000
      [zk: localhost:2181(CONNECTED) 3] create -s /sanguo/weiguo/zhangliao "zhangliao"
      Created /sanguo/weiguo/zhangliao0000000001
      [zk: localhost:2181(CONNECTED) 4] create -s /sanguo/weiguo/xuchu "xuchu"
      Created /sanguo/weiguo/xuchu0000000002
      ```

      > 如果原来没有序号节点，序号从 0 开始依次递增。如果原节点下已有 2 个节点，则再排 序时从 2 开始，以此类推。

4. 创建短暂节点（短暂节点 + 不带序号 or 带序号）

   1. 创建短暂的不带序号的节点

      ``` shell
      [zk: localhost:2181(CONNECTED) 7] create -e /sanguo/wuguo "zhouyu"
      Created /sanguo/wuguo

   2. 创建短暂的带序号的节点

      ``` shell
      [zk: localhost:2181(CONNECTED) 2] create -e -s /sanguo/wuguo "zhouyu"
      Created /sanguo/wuguo0000000001

   3. 在当前客户端是能查看到的

      ``` shell
      [zk: localhost:2181(CONNECTED) 3] ls /sanguo 
      [wuguo, wuguo0000000001, shuguo]

   4. 退出当前客户端然后再重启客户端

      ``` shell
      [zk: localhost:2181(CONNECTED) 12] quit
      [atguigu@hadoop102 zookeeper-3.5.7]$ bin/zkCli.sh -server hadoop102:2181

   5. 再次查看根目录下短暂节点已经删除

      ``` shell
      [zk: localhost:2181(CONNECTED) 0] ls /sanguo
      [shuguo]

5. 修改节点数据值

   ``` shell
   [zk: localhost:2181(CONNECTED) 6] set /sanguo/weiguo "simayi"

##### 3.2.4 监听器原理

客户端注册监听它关心的目录节点，当目录节点发生变化（数据改变、节点删除、子目 录节点增加删除）时，ZooKeeper 会通知客户端。监听机制保证 ZooKeeper 保存的任何的数 据的任何改变都能快速的响应到监听了该节点的应用程序。

1. 监听原理详解

   1. 首先要有一个main()线程
   2. 在main线程中创建Zookeeper客户端，这时就会创建两个线 程，一个负责网络连接通信（connet），一个负责监听（listener）。
   3. 通过connect线程将注册的监听事件发送给Zookeeper。
   4. 在Zookeeper的注册监听器列表中将注册的监听事件添加到列表中。
   5. Zookeeper监听到有数据或路径变化，就会将这个消息发送给listener线程。
   6. listener线程内部调用了process()方法。

2. 常见的监听

   1. 监听节点数据的变化

      get path [watch]

   2. 监听子节点增减的变化

      ls path [watch]

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper集群操作/客户端命令行监听器原理.png)

1. 节点的值变化监听

   1. 在 hadoop104 主机上注册监听/sanguo 节点数据变化

      ``` shell
      [zk: localhost:2181(CONNECTED) 26] get -w /sanguo

   2. 在 hadoop103 主机上修改/sanguo 节点的数据

      ``` shell
      [zk: localhost:2181(CONNECTED) 1] set /sanguo "xisi"

   3. 观察 hadoop104 主机收到数据变化的监听

      ``` shell
      WATCHER::
      WatchedEvent state:SyncConnected type:NodeDataChanged path:/sanguo
      ```

      > 注意：在hadoop103再多次修改/sanguo的值，hadoop104上不会再收到监听。因为注册 一次，只能监听一次。想再次监听，需要再次注册。

2. 节点的子节点变化监听（路径变化）

   1. 在 hadoop104 主机上注册监听/sanguo 节点的子节点变化

      ``` shell
      [zk: localhost:2181(CONNECTED) 1] ls -w /sanguo
      [shuguo, weiguo]

   2. 在 hadoop103 主机/sanguo 节点上创建子节点

      ``` shell
      [zk: localhost:2181(CONNECTED) 2] create /sanguo/jin "simayi"
      Created /sanguo/jin

   3. 观察 hadoop104 主机收到子节点变化的监听

      ``` shell
      WATCHER::
      WatchedEvent state:SyncConnected type:NodeChildrenChanged path:/sanguo
      ```

      > 注意：节点的路径变化，也是注册一次，生效一次。想多次生效，就需要多次注册。

##### 3.2.5 节点删除与查看

1. 删除节点

   ``` shell
   [zk: localhost:2181(CONNECTED) 4] delete /sanguo/jin
   ```

2. 递归删除节点

   ``` shell
   [zk: localhost:2181(CONNECTED) 15] deleteall /sanguo/shuguo

3. 查看节点状态

   ``` shell
   [zk: localhost:2181(CONNECTED) 17] stat /sanguo
   cZxid = 0x100000003
   ctime = Wed Aug 29 00:03:23 CST 2018
   mZxid = 0x100000011
   mtime = Wed Aug 29 00:21:23 CST 2018
   pZxid = 0x100000014
   cversion = 9
   dataVersion = 1
   aclVersion = 0
   ephemeralOwner = 0x0
   dataLength = 4
   numChildren = 1

#### 3.3 客户端 API 操作

前提：保证 hadoop102、hadoop103、hadoop104 服务器上 Zookeeper 集群服务端启动。

##### 3.3.1 IDEA 环境搭建

1. 创建一个工程：zookeeper

2. 添加pom文件

   ``` xml
   <dependencies>
       <dependency>
           <groupId>junit</groupId>
           <artifactId>junit</artifactId>
           <version>4.13.2</version>
           <scope>test</scope>
       </dependency>
   
       <dependency>
           <groupId>org.apache.logging.log4j</groupId>
           <artifactId>log4j-core</artifactId>
           <version>2.17.1</version>
       </dependency>
   
       <dependency>
           <groupId>org.apache.zookeeper</groupId>
           <artifactId>zookeeper</artifactId>
           <version>3.5.7</version>
       </dependency>
   </dependencies>

3. 拷贝log4j.properties文件到项目根目录

   需要在项目的 src/main/resources 目录下，新建一个文件，命名为“log4j.properties”，在 文件中填入。

   ``` properties
   log4j.rootLogger=INFO, stdout
   log4j.appender.stdout=org.apache.log4j.ConsoleAppender
   log4j.appender.stdout.layout=org.apache.log4j.PatternLayout
   log4j.appender.stdout.layout.ConversionPattern=%d %p [%c] - %m%n
   log4j.appender.logfile=org.apache.log4j.FileAppender
   log4j.appender.logfile.File=target/spring.log
   log4j.appender.logfile.layout=org.apache.log4j.PatternLayout
   log4j.appender.logfile.layout.ConversionPattern=%d %p [%c] - %m%n
   ```

4. 创建包名com.atguigu.zk

5. 创建类名称zkClient

##### 3.3.2 创建 Zookeeper 客户端

``` java
// 注意：逗号左右不能有空格
private String connectString = "wang128:2181,wang128:2182,wang128:2183";
private int sessionTimeout = 2000;
private ZooKeeper zkClient;

@Before
public void init() throws IOException {
  zkClient = new ZooKeeper(connectString, sessionTimeout, new Watcher() {
    @Override
    public void process(WatchedEvent watchedEvent) {
      System.out.println("---------------------------------");
      try {
        List<String> children = zkClient.getChildren("/", true);

        // 再次启动监听
        for (String child : children) {
          System.out.println("获取Zookeeper根节点的子节点信息 " + child);
        }

        System.out.println("---------------------------------");
      } catch (KeeperException e) {
        throw new RuntimeException(e);
      } catch (InterruptedException e) {
        throw new RuntimeException(e);
      }
    }
  });
}
```

##### 3.3.3 创建子节点

``` java
@Test
public void create() throws InterruptedException, KeeperException {
  // 参数 1：要创建的节点的路径； 参数 2：节点数据 ； 参数 3：节点权限 ；参数 4：节点的类型
  String nodeCreated = zkClient.create("/atguigu", "ss.avi".getBytes(), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
}
```

测试：在 hadoop102 的 zk 客户端上查看创建节点情况

``` shell
[zk: localhost:2181(CONNECTED) 16] get -s /atguigu
shuaige
```

##### 3.3.4 获取子节点并监听节点变化

``` java
@Test
public void getChildren() throws InterruptedException, KeeperException {
  List<String> children = zkClient.getChildren("/", true);

  for (String child : children) {
    System.out.println("获取Zookeeper根节点的子节点信息 " + child);
  }

  // 延时
  Thread.sleep(Long.MAX_VALUE);
}
```

1. 在 IDEA 控制台上看到如下节点：

   ``` shell
   zookeeper
   sanguo
   atguigu

2. 在 hadoop102 的客户端上创建再创建一个节点/atguigu1，观察 IDEA 控制台

   ``` shell
   [zk: localhost:2181(CONNECTED) 3] create /atguigu1 "atguigu1"

3. 在 hadoop102 的客户端上删除节点/atguigu1，观察 IDEA 控制

   ``` shell
   [zk: localhost:2181(CONNECTED) 4] delete /atguigu1

##### 3.3.5 判断 Znode 是否存在

``` java
@Test
public void exist() throws InterruptedException, KeeperException {
  // 判断 znode 是否存在
  Stat stat = zkClient.exists("/atguigu1", false);

  System.out.println(stat == null ? "not exists" : "exist");
}
```

#### 3.4 客户端向服务器写数据流程

1. 写流程之写入请求直接发送给 Leader 节点

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper集群操作/客户端API操作客户端向服务端写数据之写入请求直接发送Leader节点.png)

2. 写流程之写入请求发送给 follower 节点

   ![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper集群操作/客户端API操作客户端向服务端写数据之写入请求发送follower节点.png)

### 4、服务器动态上下线监听案例

#### 4.1 需求

某分布式系统中，主节点可以有多台，可以动态上下线，任意一台客户端都能实时感知 到主节点服务器的上下线。

#### 4.2 需求分析

服务器动态上下线

客户端能实时洞察到服务 器上下线的变化

![](Zookeeper学习笔记尚硅谷/基础操作/服务器动态上下线监听案例/需求分析.png)

#### 4.3 具体实现

1. 先在集群上创建/servers 节点

   ``` shell
   [zk: localhost:2181(CONNECTED) 10] create /servers "servers"
   Created /servers

2. 在 Idea 中创建包名：com.atguigu.case1

3. 服务器端向 Zookeeper 注册代码

   ```java
   public class DistributeServer {
   
       private String connectString = "wang128:2181,wang128:2182,wang128:2183";
       private int sessionTimeout = 2000;
       private ZooKeeper zk;
   
       public static void main(String[] args) throws IOException, InterruptedException, KeeperException {
           DistributeServer server = new DistributeServer();
   
           // 1 获取 zk 连接
           server.getConnect();
   
           // 2 注册服务器到 zk 集群
           server.regist(args[0]);
   
           // 3 启动业务逻辑
           server.business();
       }
   
       // 业务功能
       private void business() throws InterruptedException {
           Thread.sleep(Long.MAX_VALUE);
       }
   
       // 注册服务器
       private void regist(String hostname) throws InterruptedException, KeeperException {
           String create = zk.create("/servers/" + hostname, hostname.getBytes(), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.EPHEMERAL_SEQUENTIAL);
   
           System.out.println(hostname + " is online");
       }
   
       // 创建到 zk 的客户端连接
       private void getConnect() throws IOException {
           zk = new ZooKeeper(connectString, sessionTimeout, new Watcher() {
               @Override
               public void process(WatchedEvent watchedEvent) {
   
               }
           });
       }
   }

4. 客户端代码

   ``` java
   public class DistributeClient {
   
       private String connectString = "wang128:2181,wang128:2182,wang128:2183";
       private int sessionTimeout = 2000;
       private ZooKeeper zk;
   
       public static void main(String[] args) throws IOException, InterruptedException, KeeperException {
           DistributeClient client = new DistributeClient();
           // 1 获取 zk 连接
           client.getConnect();
   
           // 2 监听/servers 下面子节点的增加和删除
           client.getServerList();
   
           // 3 业务逻辑（睡觉）
           client.business();
       }
   
       // 业务功能
       private void business() throws InterruptedException {
           Thread.sleep(Long.MAX_VALUE);
       }
   
       private void getServerList() throws InterruptedException, KeeperException {
           // 获取服务器子节点信息，并且对父节点进行监听
           List<String> children = zk.getChildren("/servers", true);
   
           // 存储服务器信息列表
           ArrayList<String> servers = new ArrayList<>();
   
           // 遍历所有节点，获取节点中的主机名称信息
           for (String child : children) {
               byte[] data = zk.getData("/servers/" + child, false, null);
   
               servers.add(new String(data));
           }
   
           // 打印
           System.out.println(servers);
       }
   
       // 创建到 zk 的客户端连接
       private void getConnect() throws IOException {
           zk = new ZooKeeper(connectString, sessionTimeout, new Watcher() {
               @Override
               public void process(WatchedEvent watchedEvent) {
                   // 再次启动监听
                   try {
                       getServerList();
                   } catch (InterruptedException e) {
                       throw new RuntimeException(e);
                   } catch (KeeperException e) {
                       throw new RuntimeException(e);
                   }
               }
           });
       }
   }

#### 4.4 测试

1. 在 Linux 命令行上操作增加减少服务器

   1. 启动 DistributeClient 客户端

   2. 在 hadoop102 上 zk 的客户端/servers 目录上创建临时带序号节点

      ``` shell
      [zk: localhost:2181(CONNECTED) 1] create -e -s /servers/hadoop102 "hadoop102"
      [zk: localhost:2181(CONNECTED) 2] create -e -s /servers/hadoop103 "hadoop103"

   3. 观察 Idea 控制台变化

      ``` shell
      [hadoop102, hadoop103]

   4. 执行删除操作

      ``` shell
      [zk: localhost:2181(CONNECTED) 8] delete /servers/hadoop1020000000000

   5. 观察 Idea 控制台变化

      ``` shell
      [hadoop103]

2. 在 Idea 上操作增加减少服务器

   1. 启动 DistributeClient 客户端（如果已经启动过，不需要重启）
   2. 启动 DistributeServer 服务
      1. 点击 Edit Configurations…
      2. 在弹出的窗口中（Program arguments）输入想启动的主机，例如，hadoop102
      3. 回到 DistributeServer 的 main 方 法 ， 右 键 ， 在 弹 出 的 窗 口 中 点 击 Run “DistributeServer.main()”
      4. 观察 DistributeServer 控制台，提示 hadoop102 is working
      5. 观察 DistributeClient 控制台，提示 hadoop102 已经上线

### 5、Zookeeper 分布式锁案例

什么叫做分布式锁呢？ 

- 比如说"进程 1"在使用该资源的时候，会先去获得锁，"进程 1"获得锁以后会对该资源保持独占，这样其他进程就无法访问该资源，"进程 1"用完该资源以后就将锁释放掉，让其 他进程来获得锁，那么通过这个锁机制，我们就能保证了分布式系统中多个进程能够有序的 访问该临界资源。那么我们把这个分布式环境下的这个锁叫作分布式锁。

![](Zookeeper学习笔记尚硅谷/基础操作/Zookeeper分布式锁案例/分布式锁案例分析.png)

#### 5.1 原生 Zookeeper 实现分布式锁案例

1. 分布式锁实现

   ``` java
   public class DistributedLock {
   
       private final String connectString = "wang128:2181,wang128:2182,wang128:2183";
       private final int sessionTimeout = 2000;
       private final ZooKeeper zk;
   
       private CountDownLatch connectLatch = new CountDownLatch(1);
       private CountDownLatch waitLatch = new CountDownLatch(1);
   
       private String waitPath;
   
       private String currentMode;
   
       public DistributedLock() throws IOException, InterruptedException, KeeperException {
           // 获取连接
           zk = new ZooKeeper(connectString, sessionTimeout, new Watcher() {
               @Override
               public void process(WatchedEvent watchedEvent) {
                   // connectLatch，如果连接上 zk，可以释放
                   if (watchedEvent.getState() == Event.KeeperState.SyncConnected) {
                       connectLatch.countDown();
                   }
   
                   // waitLatch 需要释放
                   if (watchedEvent.getType() == Event.EventType.NodeDeleted && watchedEvent.getPath().equals(waitPath)) {
                       waitLatch.countDown();
                   }
               }
           });
   
           // 等待 zk 正常连接后，往下走程序
           connectLatch.await();
   
           // 判断根节点 /locks 是否存在
           Stat stat = zk.exists("/locks", false);
   
           if (stat == null) {
               // 创建一下根节点
               zk.create("/locks", "locks".getBytes(), ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.PERSISTENT);
           }
       }
   
       // 对 zk 加锁
       public void zkLock() {
           // 创建对应的临时带序号节点
           try {
               currentMode = zk.create("/locks/" + "seq-", null, ZooDefs.Ids.OPEN_ACL_UNSAFE, CreateMode.EPHEMERAL_SEQUENTIAL);
   
               // 判断创建的节点是否是最小的序号节点，如果是获取到锁；如果不是，监听他序号前一个节点
   
               List<String> children = zk.getChildren("/locks", false);
   
               // 如果 children 只有一个值，那就直接获取锁；如果有多个节点，需要判断，谁最小
               if (children.size() == 1) {
                   return;
               } else {
                   Collections.sort(children);
   
                   // 获取节点名称 seq-00000000
                   String thisNode = currentMode.substring("/locks/".length());
                   // 通过 seq-00000000 获取该节点在 children 集合的位置
                   int index = children.indexOf(thisNode);
   
                   // 判断
                   if (index == -1) {
                       System.out.println("数据异常");
                   } else if (index == 0) {
                       // 就一个节点，可以获取锁了
                       return;
                   } else {
                       // 需要监听 他前一个节点变化
                       waitPath = "/locks/" + children.get(index - 1);
                       zk.getData(waitPath, true, null);
   
                       // 等待监听
                       waitLatch.await();
   
                       return;
                   }
               }
           } catch (KeeperException e) {
               throw new RuntimeException(e);
           } catch (InterruptedException e) {
               throw new RuntimeException(e);
           }
       }
   
       // 解锁
       public void unZkLock() {
           // 删除节点
           try {
               zk.delete(currentMode, -1);
           } catch (InterruptedException e) {
               throw new RuntimeException(e);
           } catch (KeeperException e) {
               throw new RuntimeException(e);
           }
       }
   }

2. 分布式锁测试

   1. 代码创建

   ``` java
   public class DistributedLockTest {
       public static void main(String[] args) throws IOException, InterruptedException, KeeperException {
           final DistributedLock lock1 = new DistributedLock();
           final DistributedLock lock2 = new DistributedLock();
   
           new Thread(new Runnable() {
               @Override
               public void run() {
                   try {
                       lock1.zkLock();
                       System.out.println("线程1启动，获取到锁");
                       Thread.sleep(5 * 1000);
   
                       lock1.unZkLock();
                       System.out.println("线程1 释放锁");
                   } catch (InterruptedException e) {
                       throw new RuntimeException(e);
                   }
               }
           }).start();
   
           new Thread(new Runnable() {
               @Override
               public void run() {
                   try {
                       lock2.zkLock();
                       System.out.println("线程2启动，获取到锁");
                       Thread.sleep(5 * 1000);
   
                       lock2.unZkLock();
                       System.out.println("线程2 释放锁");
                   } catch (InterruptedException e) {
                       throw new RuntimeException(e);
                   }
               }
           }).start();
       }
   }
   ```

   2. 观察控制台变化

      线程 1 获取锁

      线程 1 释放锁

      线程 2 获取锁

      线程 2 释放锁

#### 5.2 Curator 框架实现分布式锁案例

1. 原生的 Java API 开发存在的问题

   1. 会话连接是异步的，需要自己去处理。比如使用 CountDownLatch
   2. Watch 需要重复注册，不然就不能生效
   3. 开发的复杂性还是比较高的
   4. 不支持多节点删除和创建。需要自己去递归

2. Curator 是一个专门解决分布式锁的框架，解决了原生 JavaAPI 开发分布式遇到的问题。

   详情请查看官方文档：https://curator.apache.org/index.html

3. Curator 案例实操

   1. 添加依赖

      ``` xml
      <dependency>
          <groupId>org.apache.curator</groupId>
          <artifactId>curator-framework</artifactId>
          <version>4.3.0</version>
      </dependency>
      <dependency>
          <groupId>org.apache.curator</groupId>
          <artifactId>curator-recipes</artifactId>
          <version>4.3.0</version>
      </dependency>
      <dependency>
          <groupId>org.apache.curator</groupId>
          <artifactId>curator-client</artifactId>
          <version>4.3.0</version>
      </dependency>

   2. 代码实现

      ``` java
      public class CuratorLockTest {
          public static void main(String[] args) {
              // 创建分布式锁1
              InterProcessMutex lock1 = new InterProcessMutex(getCuratorFramework(), "/locks");
      
              // 创建分布式锁2
              InterProcessMutex lock2 = new InterProcessMutex(getCuratorFramework(), "/locks");
      
              new Thread(() -> {
                  try {
                      lock1.acquire();
                      System.out.println("线程1 获取到锁");
      
                      lock1.acquire();
                      System.out.println("线程1 再次获取到锁");
      
                      Thread.sleep(5 * 1000);
      
                      lock1.release();
                      System.out.println("线程1 释放锁");
      
                      lock1.release();
                      System.out.println("线程1 再次释放锁");
      
                  } catch (Exception e) {
                      throw new RuntimeException(e);
                  }
              }).start();
      
      
              new Thread(new Runnable() {
                  @Override
                  public void run() {
                      try {
                          lock2.acquire();
                          System.out.println("线程2 获取到锁");
      
                          lock2.acquire();
                          System.out.println("线程2 再次获取到锁");
      
                          Thread.sleep(5 * 1000);
      
                          lock2.release();
                          System.out.println("线程2 释放锁");
      
                          lock2.release();
                          System.out.println("线程2 再次释放锁");
      
                      } catch (Exception e) {
                          throw new RuntimeException(e);
                      }
                  }
              }).start();
      
          }
      
          // 分布式锁初始化
          private static CuratorFramework getCuratorFramework() {
              //重试策略，初试时间 3 秒，重试 3 次
              ExponentialBackoffRetry policy = new ExponentialBackoffRetry(3000, 3);
      
              //通过工厂创建 Curator
              CuratorFramework client = CuratorFrameworkFactory.builder().connectString("wang128:2181,wang128:2182,wang128:2183")
                      .connectionTimeoutMs(2000)
                      .sessionTimeoutMs(2000)
                      .retryPolicy(policy).build();
      
              // 启动客户端
              client.start();
      
              System.out.println("Zookeeper 启动成功");
      
              return client;
          }
      }

   3. 观察控制台变化：

      线程 1 获取锁 

      线程 1 再次获取锁 

      线程 1 释放锁 

      线程 1 再次释放锁 

      线程 2 获取锁 

      线程 2 再次获取锁 

      线程 2 释放锁 

      线程 2 再次释放锁

### 6、企业面试真题

#### 6.1 选举机制

半数机制，超过半数的投票通过，即通过。

1. 第一次启动选举规则： 

   投票过半数时，服务器 id 大的胜出

2. 第二次启动选举规则： 

   1. EPOCH 大的直接胜出
   2. EPOCH 相同，事务 id 大的胜出
   3. 事务 id 相同，服务器 id 大的胜出

#### 6.2 生产集群安装多少 zk 合适

安装奇数台。

生产经验：

- 10 台服务器：3 台 zk；
- 20 台服务器：5 台 zk；
- 100 台服务器：11 台 zk；
- 200 台服务器：11 台 zk 

服务器台数多：好处，提高可靠性；坏处：提高通信延时

#### 6.3 常用命令

ls、get、create、delete

## 二、算法源码