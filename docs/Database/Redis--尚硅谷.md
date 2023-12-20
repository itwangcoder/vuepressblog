---
title: Redis学习笔记尚硅谷
description: Redis学习笔记尚硅谷
author: itwangcoder
date: '2023-12-20'
categories:
 - 数据库
tags:
 - 尚硅谷
 - Redis
 - 中间件
 - 数据库
---

# Redis

## 一、Redis 入门概述

### 1、Redis 是什么

1. Redis：REmote Dictionary Server（远程字典服务器）

2. 官网解释

   Remote Dictionary Server(远程字典服务)是完全开源的，使用ANSIC语言编写遵守BSD协议，是一个高性能的Key-Value数据库提供了丰富的数据结构，例如String、Hash、List、Set、SortedSet等等。数据是存在内存中的，同时Redis支持事务、持久化、LUA脚本、发布/订阅、缓存淘汰、流技术等多种功能特性提供了主从模式、Redis Sentinel和Redis Cluster集群架构方案

3. Redis之父安特雷兹

   - Github：https://github.com/antirez
   - 个人博客：http://antirez.com/latest/0

### 2、Redis 能干嘛

#### 2.1 主流功能与应用

1. 分布式缓存，挡在mysql数据库之前的带刀护卫

   与传统数据库关系(mysql)相比

   - Redis是key-value数据库(NoSQL一种)，mysql是关系数据库

   - Redis数据操作主要在内存，而mysql主要存储在磁盘

   - Redis在某一些场景使用中要明显优于mysql，比如计数器、排行榜等方面

   - Redis通常用于一些特定场景，需要与Mysql一起配合使用

   两者并不是相互替换和竞争关系，而是共用和配合使用

2. 内存存储和持久化(RDB+AOF)redis支持异步将内存中的数据写到硬盘上，同时不影响继续服务

3. 高可用架构搭配

   - 单机
   - 主从
   - 哨兵
   - 集群

4. 缓存穿透、击穿、雪崩

5. 分布式锁

6. .队列

   Reids提供list和set操作，这使得Redis能作为一个很好的消息队列平台来使用。

   我们常通过Reids的队列功能做购买限制。比如到节假日或者推广期间，进行一些活动，对用户购买行为进行限制，限制今天只能购买几次商品或者一段时间内只能购买一次。也比较适合适用。

7. 排行版＋点赞

   在互联网应用中，有各种各样的排行榜，如电商网站的月度销量排行榜、社交APP的礼物排行榜、小程序的投票排行榜等等。Redis提供的zset数据类型能够快速实现这些复杂的排行榜。

   比如小说网站对小说进行排名，根据排名，将排名靠前的小说推荐给用户

8. ......

#### 2.2 总体功能概述

![](Redis学习笔记尚硅谷/Redis入门概述/Redis能干嘛总体功能概述.jpg)

#### 2.3 优势

- 性能极高-Redis能读的速度是110000次/秒。写的速度是81000次/秒
- Redis数据类型丰富，不仅仅支持简单的key-value类型的数据，同时还提供list。set，zset。hash等数据结构的存储
- Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用
- Redis支持数据的备份，即master-slave模式的数据备份

#### 2.4 小总结

![](Redis学习笔记尚硅谷/Redis入门概述/Redis能干嘛小总结.jpg)

### 3、Redis 去哪下载

1. 官网地址
   - 英文：https://redis.io/
   - 中文：
     - http://www.redis.cn/
     - https://www.redis.com.cn/documention.html
2. 下载安装包
   - https://redis.io/download/
   - 安装包为：redis-7.0.10.tar.gz
3. 其它文档资料
   - Redis 源码地址：https://github.com/redis/redis
   - Redis 在线测试：https://try.redis.io/
   - Redis 命令参考：http://doc.redisfans.com/

### 4、Redis 怎么玩

- 官网
- 多种数据类型基本操作和配置
- 持久化和复制，RDB/AOF
- 事务的控制
- 复制，集群等

### 5、Redis 迭代演化和 Redis7 新特性浅谈

#### 5.1 时间推移，版本升级

- VCR：https://www.bilibili.com/video/BV1oW411u75R?p=1
- Redis之父安特雷兹的发言：http://antirez.com/news/132

#### 5.2 Redis版本迭代推演介绍

- 几个里程碑式的重要版本

  ![](Redis学习笔记尚硅谷/Redis入门概述/Redis版本迭代历史大版本.jpg)

- 命名规则

  Redis从发布至今，已经有十余年的时光了，一直遵循着自己的命名规则：

  - 版本号第二位如果是奇数，则为非稳定版本 如2.7、2.9、3.1

  - 版本号第二位如果是偶数，则为稳定版本 如2.6、2.8、3.0、3.2

  当前奇数版本就是下一个稳定版本的开发版本，如2.9版本是3.0版本的开发版本

  我们可以通过redis.io官网来下载自己感兴趣的版本进行源码阅读：

  历史发布版本的源码：https://download.redis.io/releases/

#### 5.3 Redis7.O新特性概述

- https://github.com/redis/redis/releases 新特性

- 部分新特性总览

  - Redis Functions
  - Client-eviction
  - Multi-part AOF

  - ACL V2
  - 新增命令
  - listpack替代ziplist
  - 底层性能提升(和编码关系不大)
  - .......

#### 5.4 本次将对Redis7的一部分新特性做说明(not all)

大体和之前的redis版本保持一致和稳定，主要是自身底层性能和资源利用率上的优化和提高，如果你生产上系统稳定，不用着急升级到最新的redis7版本，当然，O(∩\_∩)O哈哈~，如果你是从零开始的新系统，直接上Redis7.0-GA版。^\_^

| 名称                              | 说明                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| 多AOF文件支持                     | 7.0 版本中一个比较大的变化就是 aof 文件由一个变成了多个，主要分为两种类型：基本文件(base files)、增量文件(incr files)，请注意这些文件名称是复数形式说明每一类文件不仅仅只有一个。在此之外还引入了一个清单文件(manifest) 用于跟踪文件以及文件的创建和应用顺序（恢复） |
| config命令增强                    | 对于Config Set 和Get命令，支持在一次调用过程中传递多个配置参数。例如，现在我们可以在执行一次Config Set命令中更改多个参数： config set maxmemory 10000001 maxmemory-clients 50% port 6399 |
| 限制客户端内存使用Client-eviction | 一旦 Redis 连接较多，再加上每个连接的内存占用都比较大的时候， Redis总连接内存占用可能会达到maxmemory的上限，可以增加允许限制所有客户端的总内存使用量配置项，redis.config 中对应的配置项// 两种配置形式：指定内存大小、基于 maxmemory 的百分比。maxmemory-clients 1gmaxmemory-clients 10% |
| listpack紧凑列表调整              | listpack 是用来替代 ziplist 的新数据结构，在 7.0 版本已经没有 ziplist 的配置了（6.0版本仅部分数据类型作为过渡阶段在使用）listpack 已经替换了 ziplist 类似 hash-max-ziplist-entries 的配置 |
| 访问安全性增强ACLV2               | 在redis.conf配置文件中，protected-mode默认为yes，只有当你希望你的客户端在没有授权的情况下可以连接到Redis server的时候可以将protected-mode设置为no |
| Redis Functions                   | Redis函数，一种新的通过服务端脚本扩展Redis的方式，函数与数据本身一起存储。简言之，redis自己要去抢夺Lua脚本的饭碗 |
| RDB保存时间调整                   | 将持久化文件RDB的保存规则发生了改变，尤其是时间记录频度变化  |
| 命令新增和变动                    | Zset (有序集合)增加 ZMPOP、BZMPOP、ZINTERCARD 等命令Set (集合)增加 SINTERCARD 命令LIST (列表)增加 LMPOP、BLMPOP ，从提供的键名列表中的第一个非空列表键中弹出一个或多个元素。 |
| 性能资源利用率、安全、等改进      | 自身底层部分优化改动，Redis核心在许多方面进行了重构和改进主动碎片整理V2：增强版主动碎片整理，配合Jemalloc版本更新，更快更智能，延时更低HyperLogLog改进：在Redis5.0中，HyperLogLog算法得到改进，优化了计数统计时的内存使用效率，7更加优秀更好的内存统计报告如果不为了API向后兼容，我们将不再使用slave一词......(政治正确) |

## 二、Redis 安装配置

### 1、自己购买云服务器

自己购买阿里云、青牛云、腾讯云或华为云服务器，自带CentoOS或者Ubuntu环境，直接开干
### 2、VMWare本地虚拟机

如何查看自己的linux是32位还是64位

```shell
getconf LONG_BIT`
```

返回是多少就是几位

### 3、Redis的安装

小白同学注意，日常用什么系统安装redis?

- 由于企业里面做Redis开发，99%都是Linux版的运用和安装，几乎不会涉及到Windows版，上一步的讲解只是为了知识的完整性，Windows版不作为重点，同学可以下去自己玩，企业实战就认一个版：Linux

Linux版安装

1. Linux环境安装 Redis 必须先具备 gcc 编译环境

   1. 什么是gcc

      gcc是linux下的一个编译程序，是C程序的编译工具。

      GCC(GNU Compiler Collection) 是 GNU(GNU's Not Unix) 计划提供的编译器家族，它能够支持 C, C++, Objective-C, Fortran, Java 和 Ada 等等程序设计语言前端，同时能够运行在 x86, x86-64, IA-64, PowerPC, SPARC和Alpha 等等几乎目前所有的硬件平台上。鉴于这些特征，以及 GCC 编译代码的高效性，使得 GCC 成为绝大多数自由软件开发编译的首选工具。虽然对于程序员们来说，编译器只是一个工具，除了开发和维护人员，很少有人关注编译器的发展，但是 GCC 的影响力是如此之大，它的性能提升甚至有望改善所有的自由软件的运行效率，同时它的内部结构的变化也体现出现代编译器发展的新特征。

   2. 查看

      ``` shell
      gcc -v

   3. 安装

      安装之前需要具备c++库环境

      ``` shell
      yum -y install gcc-c++
      ```

2. 版本选择

   查看自己 Redis 版本的命令

   ``` shell
   redis-server -v
   ```

   安全Bug 按照官网提示，升级成为 6.0.8及以上

   本次使用 Redis7.0

3. Redis7 安装步骤

   1. 下载获得 redis-7.0.10.tar.gz 后将它放入我们的 Linux 目录 /opt

   2. /opt目录下解压 redis

      ``` shell
      tar -zxvf redis-7.0.10.tar.gz

   3. 进入目录

   4. 在redis-7.0.0目录下执行make命令

      ``` shell
      make && make install
      ```

      ![](Redis学习笔记尚硅谷/Redis安装配置/Redis安装成功.png)

   5. 查看默认安装目录: usr/local/bin

      Linux 下的 /usr/local 类似我们 windows 系统的 C:\Program Files

      - redis-benchmark：性能测试工具，服务启动后运行该命令，看看自己本子性能如何
      - redis-check-aof：修复有问题的AOF文件，rdb和aof后面讲
      - redis-check-dump：修复有问题的dump.rdb文件
      - redis-cli：客户端，操作入口
      - redis-sentinel：redis集群使用
      - redis-server：Redis服务器启动命令

   6. 将默认的redis.conf拷考贝到自己定义好的一个路径下，比如/myredis

      ``` shell
      cp redis.conf /myredis/

   7. 修改/myredis目录下redis.conf配管文件做初始化设置

      redis.conf配置文件，改完后确保生效，记得重启，记得重启

      - 默认daemonize no        改为 daemonize yes

      - 默认protected-mode yes   改为 protected-mode no

      - 默认bind 127.0.0.1       改为 直接注释掉(默认bind 127.0.0.1只能本机访问)或改成本机IP地址，否则影响远程IP连接

      - 添加redis密码           改为 requirepass 你自己设置的密码

   8. 启动服务

      /usr/local/bin 目录下运行 redis-server，启用 /myredis 目录下的 redis.conf 文件

      ``` shell
      redis-server /myredis/redis7.conf

   9. 连接服务

      ![](Redis学习笔记尚硅谷/Redis安装配置/Redis安装中连接服务.png)

   10. 大家知道Redis端口为啥是6379么?

       Redis的默认端口是6379，是由手机键盘字母MERZ的位置决定的。MERZ在Antirez的朋友圈语言中是"愚蠢和傻B"的代名词，它源于意大利广告女郎Alessia Merz在电视节目上说了一堆愚蠢的话，redis之父对她有"特殊"印象，就给她弄成端口号了

   11. 永远的helloworld

   12. 关闭

       - 单实例关闭：redis-cli -a 123456 shutdown
       - 多实例关闭，指定端口关闭：redis-cli -p 6379 shutdown

4. Redis7 卸载步骤

   1. 停止 redis-server 服务
   2. 删除 /usr/local/lib 目录下与redis相关的文件

docker版的redis安装配置参考：https://www.bilibili.com/video/BV1gr4y1U7CY/?spm_id_from=333.337.search-card.all.click&vd_source=fe27230f0c2dfb94c1429fd039a0655a

## 三、Redis 10大数据类型

### 1、which 10

![](Redis学习笔记尚硅谷/Redis10大数据类型/which10/Redis10大数据类型.png)

提前声明：这里说的数据类型是value的数据类型，key的类型都是字符串

1. redis 字符串（String）

   string是redis最基本的类型，一个key对应一个value。

   string类型是二进制安全的，意思是redis的string可以包含任何数据，比如jpg图片或者序列化的对象 。

   string类型是Redis最基本的数据类型，一个redis中字符串value最多可以是512M

2. redis 列表（List）

   Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）

   它的底层实际是个双端链表，最多可以包含 2^32 - 1 个元素 (4294967295, 每个列表超过40亿个元素)

3. redis 哈希表（Hash）

   Redis hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象。

   Redis 中每个 hash 可以存储 2^32 - 1 键值对（40多亿）

4. redis 集合（Set）

   Redis 的 Set 是 String 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据，集合对象的编码可以是 intset 或者 hashtable。

   Redis 中Set集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。

   集合中最大的成员数为 2^32 - 1 (4294967295, 每个集合可存储40多亿个成员)

5. redis 有序集合（ZSet）

   Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。

   不同的是每个元素都会关联一个double类型的分数，redis正是通过分数来为集合中的成员进行从小到大的排序。

   zset的成员是唯一的,但分数(score)却可以重复。

   zset集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。 集合中最大的成员数为 2^32 - 1

6. redis 地理空间（GEO）

   Redis GEO 主要用于存储地理位置信息，并对存储的信息进行操作，包括

   - 添加地理位置的坐标。

   - 获取地理位置的坐标。

   - 计算两个位置之间的距离。

   - 根据用户给定的经纬度坐标来获取指定范围内的地理位置集合

7. redis 基数统计（HyperLogLog）

   HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定且是很小的。

   在 Redis 里面，每个 HyperLogLog 键只需要花费 12 KB 内存，就可以计算接近 2^64 个不同元素的基 数。这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。

   但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会储存输入元素本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。

8. redis 位图（bitmap）

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/which10/redis位图.png)

   由0和1状态表现的二进制位的bit数组

9. redis 位域（bitfield）

   通过bitfield命令可以一次性操作多个比特位域(指的是连续的多个比特位)，它会执行一系列操作并返回一个响应数组，这个数组中的元素对应参数列表中的相应操作的执行结果。

   说白了就是通过bitfield命令我们可以一次性对多个比特位域进行操作。

10. redis 流（Stream）

    Redis Stream 是 Redis 5.0 版本新增加的数据结构。

    Redis Stream 主要用于消息队列（MQ，Message Queue），Redis 本身是有一个 Redis 发布订阅 (pub/sub) 来实现消息队列的功能，但它有个缺点就是消息无法持久化，如果出现网络断开、Redis 宕机等，消息就会被丢弃。

    简单来说发布订阅 (pub/sub) 可以分发消息，但无法记录历史消息。

    而 Redis Stream 提供了消息的持久化和主备复制功能，可以让任何客户端访问任何时刻的数据，并且能记住每一个客户端的访问位置，还能保证消息不丢失

### 2、如何获得 Redis 常见数据类型操作命令

- 官网英文：https://redis.io/commands/
- 中文：http://www.redis.cn/commands.html

### 3、Redis 键（key）

#### 3.1 常用

![](Redis学习笔记尚硅谷/Redis10大数据类型/Redis键/常用命令.png)

#### 3.2 案例

- keys *：查看当前库所有的 key

- exists key：判断某个 key 是否存在

- type key：查看你的 key 是什么类型

- del key：删除指定的 key 数据

- unlink key：非阻塞删除，仅仅将 keys 从 keyspace 元数据中删除，真正的删除会在后续异步中操作

- ttl key：查看还有多少秒过期，-1 表示永不过期，-2 表示已过期

- expire key 秒钟：为给定的 key 设置过期时间

  设置 Key 过期时间，默认-1表示永不过期，-2表示已过期

  Redis 的过期时间设置有四种形式：

  - EXPIRE 秒——设置指定的过期时间(秒)，表示的是时间间隔。

  - PEXPIRE 毫秒——设置指定的过期时间，以毫秒为单位，表示的是时间间隔。

  - EXPIREAT 时间戳-秒——设置指定的 Key 过期的 Unix 时间，单位为秒，表示的是时间/时刻。

  - PEXPIREAT 时间戳-毫秒——设置指定的 Key 到期的 Unix 时间，以毫秒为单位，表示的是时间/时刻。

  expire key seconds [NX|XX|GT|LT]

- move key dbindex【0-15】：将当前数据库的 key 移动到给定的数据库 db 当中

- select dbindex：切换数据库【0-15】，默认为0

- dbsize：查看当前数据库 key 的数量

- flushdb：清空当前库

- flushall：通杀全部库

### 4、数据类型命令及落地应用

#### 4.1 备注

1. 命令不区分大小写，而 key 是区分大小写的
2. 帮助命令，help@类型
   - help @string
   - help @list
   - help @hash
   - help @hyperloglog
   - ......

#### 4.2 Redis 字符串（String）

1. 常用命令

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令.png)

2. 值类型

   单值单value

3. 案例

   1. 最常用

      - set key value

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令set命令.png)

        - keepttl

          ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令set命令keepttl参数.png)

      - get key

   2. 同时设置/获取多个键值

      - MSET key value [key value ......]

      - MGET key [key ......]

      - mset/mget/msetnx

        mset：同时设置一个或多个 key-value 对。

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令mset.png)

        mget：获取所有(一个或多个)给定 key 的值。
        
        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令mget.png)
        
        msetnx：同时设置一个或多个 key-value 对，当且仅当所有给定 key 都不存在。
        
        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令msetnx.png)

   3. 获取指定区间范围内的值
   
      getrange：获取指定区间范围内的值，类似between......and的关系，从零到负一表示全部
   
      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令getrange.png)
   
      setrange：设置指定区间范围内的值，格式是setrange key值 具体值
   
      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令setrange.png)
   
   4. 数值增减
   
      - 一定是数字才能进行加减
      - 递增数字：INCR key
      - 增加指定的整数：INCRBY key increment
      - 递减数值：DECR key
      - 减少指定的整数：DECRBY key decrement
   
   5. 获取字符串长度和内容追加
   
      - STRLEN key
      - APPEND key value
   
   6. 分布式锁
   
      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串案例分布式锁.png)
   
      - setnx key value
   
      - setex（set with expire）键秒值/setnx（set if not exist）
   
        - setex：设置带过期时间的key，动态设置。setex 键 秒值 真实值
   
          ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令setex.png)
   
        - setnx：只有在 key 不存在时设置 key 的值。
   
          ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令setnx.png)
   
   7. getset
   
      getset：将给定 key 的值设为 value ，并返回 key 的旧值(old value)。
   
      简单一句话，先get然后立即set
   
      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis字符串常用命令案例getset.png)
   
   8. 应用场景
   
      - 比如抖音无限点赞某个视频或者商品，点一下加一次
   
      - 是否喜欢的文章
   
        阅读数：只要点击了rest地址，直接可以使用incr key 命令增加一个数字1，完成记录数字。

#### 4.3 Redis 列表（List）

1. 常用

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表常用.png)

2. 值类型

   单key多value

3. 简单说明

   一个双端链表的结构，容量是2的32次方减1个元素，大概40多亿，主要功能有push/pop等，一般用在栈、队列、消息队列等场景。

   left、right都可以插入添加；

   如果键不存在，创建新的链表；

   如果键已存在，新增内容；

   如果值全移除，对应的键也就消失了。

   - 它的底层实际是个**双向链表，对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。**

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表简单说明.png)

4. 案例

   1. lpush/rpush/lrange

   2. lpop/rpop

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例lpoprpop.png)

   3. lindex：按照索引下标获得元素（从上到下）

      通过索引获取列表中的元素 lindex key index

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例lindex.png)

   4. llen：获取列表中元素的个数

   5. lrem key 数字N 给定值v1 解释（删除N个值等于v1的元素）

      - 从left往right删除2个值等于v1的元素，返回的值为实际删除的数量

      - LREM list3 0 值，表示删除全部给定的值。零个就是全部值

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例lrem.png)

   6. ltrim key 开始index 结束index，截取指定范围的值后再赋值给key

      ltrim：截取指定索引区间的元素，格式是ltrim list的key 起始索引 结束索引

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例ltrim.png)

   7. rpoplpush 源列表 目的列表

      移除列表的最后一个元素，并将该元素添加到另一个列表并返回

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例rpoplpush.png)

   8. lset key index value

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例lset.png)

   9. linsert key before/after 已有值 插入的新值

      在list某个已有值的前后再添加具体值

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis列表案例linsert.png)

   10. 应用场景：微信公众号订阅的信息

       1. 大V作者李永乐老师和CSDN发布了文章分别是 11 和 22

       2. 阳哥关注了他们两个，只要他们发布了新文章，就会安装进我的List 

          lpush likearticle:阳哥id 11 22

       3. 查看阳哥自己的号订阅的全部文章，类似分页，下面0~10就是一次显示10条

          lrange likearticle:阳哥id 0 9

#### 4.4 Redis 哈希（Hash）

1. 常用

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis哈希/Redis哈希常用.png)

2. KV模式不变，但V是一个键值对

   Map<String, Map\<Object, Object>\>

3. 案例

   1. hset/hget/hmset/hmget/hgetall/hdel

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis哈希/Redis哈希案例hsethget.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis哈希/Redis哈希案例hdel.png)

   2. hlen：获取某个key内的全部数量

   3. hexists key 在 key 里面的某个值的 key

   4. hkeys/hvals

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis哈希/Redis哈希案例hkeyshvals.png)

   5. hincrby/hincrbyfloat

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis哈希/Redis哈希案例hincrby.png)

   6. hsetnx

      不存在赋值，存在了无效。

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis哈希/Redis哈希案例hsetnx.png)

   7. 应用场景

      JD购物车早期，设计目前不再采用，当前小中厂可用

      - 新增商品 → hset shopcar:uid1024 334488 1

      - 新增商品 → hset shopcar:uid1024 334477 1

      - 增加商品数量 → hincrby shopcar:uid1024 334477 1

      - 商品总数 → hlen shopcar:uid1024

      - 全部选择 → hgetall shopcar:uid1024

#### 4.5 Redis 集合（Set）

1. 常用

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合常用.png)

2. 值类型

   单值多value，且无重复

3. 案例

   1. SADD key member [member...]：添加元素

   2. SMEMBERS key：遍历集合中的所有元素

   3. SISMEMBER key member：判断元素是否在集合中

   4. SREM key member [member...]：删除元素

   5. scard：获取集合里面的元素个数

      获取集合里面的元素个数

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合案例scard.png)

   6. SRANDMEMBER key [数字]：从集合中随机展现设置的数字个数元素，元素不删除

      - 从set集合里面随机取出2个

      - 如果超过最大数量就全部取出，

      - 如果写的值是负数，比如-3 ，表示需要取出3个，但是可能会有重复值。

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合案例srandmember.png)

   7. SPOP key [数字]：从集合中随机弹出一个元素，出一个删一个

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合案例spop.png)

   8. smove key1 key2 在 key1 里已存在的某个值：将 key1 里已存在的某个值赋给 key2

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合案例smove.png)

   9. 集合运算

      - A、B

        - A：abc12
        - B：123ax

      - 集合的差集运算 A-B

        - 属于 A 但不属于 B 的元素构成的集合
        - SDIFF key [key...]

      - 集合的并集运算 AUB

        - 属于 A 或者属于 B 的元素合并后的集合
        - SUNION key [key ...]

      - 集合的交集运算 A∩B

        - 属于 A 同时也属于 B 的共同拥有的元素构成的集合

        - SINTER key [key...]

        - SINTERCARD numkeys key [key...] [LIMIT limit]

          - redis7 新命令

          - 它不返回结果集，而只返回结果的基数。返回由所有给定集合的交集产生的集合的基数

          - 案例

            ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合案例集合运算案例.png)

   10. 应用场景

       - 微信抽奖小程序

         | 功能                                      | 代码                                                         |
         | ----------------------------------------- | ------------------------------------------------------------ |
         | 1 用户ID，立即参与按钮                    | sadd key 用户ID                                              |
         | 2 显示已经有多少人参与了，上图23208人参加 | SCARD key                                                    |
         | 3 抽奖(从set中任意选取N个中奖人)          | SRANDMEMBER key 2    随机抽奖2个人，元素不删除SPOP key 3             随机抽奖3个人，元素会删除 |

       - 微信朋友圈点赞查看赞朋友

         | 功能                                     | 代码                                   |
         | ---------------------------------------- | -------------------------------------- |
         | 1 新增点赞                               | sadd pub:msgID 点赞用户ID1 点赞用户ID2 |
         | 2 取消点赞                               | srem pub:msgID 点赞用户ID              |
         | 3 展现所有点赞过的用户                   | SMEMBERS pub:msgID                     |
         | 4 点赞用户数统计，就是常见的点赞红色数字 | scard pub:msgID                        |
         | 5 判断某个朋友是否对楼主点赞过           | SISMEMBER pub:msgID 用户ID             |

       - QQ内推可能认识的人

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis集合Set/Redis集合案例应用场景QQ可能认识的人.png)

#### 4.6 Redis 有序集合（sorted set）

1. 多说一句

   在 set 基础上，每个 val 值前加一个 score 分数值。之前 set 是 k1 v1 v2 v3，现在 zset 是 k1 score v1 score2 v2

2. 常用

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合常用.png)

3. 案例

   1. 向有序集合中加入一个元素和该元素的分数

   2. ZADD key score member [score member...]：添加元素

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zadd.png)

   3. ZRANGE key start stop [WITHSCORES]：按照元素分数从小到大的顺序，返回索引从 start 到 stop 之间的所有元素

   4. zrevrange

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zrevrange.png)

   5. ZRANGEBYSCORE key min max [WITHSCORES\]\[LIMIT offset count]：获取指定分数范围的元素

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zrangebyscore.png)

      - withscores
      - （不包含
      - limit 作用是返回限制：limit 开始下标步，多少步

   6. ZSCORE key member：获取元素的分数

      zscore：按照值获得对应的分数

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zscore.png)

   7. ZCARD key：获取集合中元素的数量

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zcard.png)

   8. zrem key 某 score 下对应的 value 值，作用是删除元素

      删除元素，格式是zrem zset的key 项的值，项的值可以是多个

      zrem key score某个对应值，可以是多个值

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zrem.png)

   9. ZINCRBY key increment member：增加某个元素的分数

   10. ZCOUNT key min max：获取指定分数范围内的元素个数

       zcount ：获取分数区间内元素个数，zcount key 开始分数区间 结束分数区间

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zcount.png)

   11. ZMPOP：从键名列表中的第一个非空排序集中弹出一个或多个元素，它们是成员分数对

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zmpop.png)

   12. zrank key values 值，作用是获得下标值

       zrank： 获取value在zset中的下标位置

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zrank.png)

   13. zrevrank key values 值，作用是逆序获得下标值

       正序、逆序获得下标索引值

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例zrevrank.png)

   14. 应用场景：根据商品销售对商品进行排序显示

       思路：定义商品销售排行榜(sorted set集合)，key为goods:sellsort，分数为商品销售数量。

       | 功能                                             | 代码                                 |
       | ------------------------------------------------ | ------------------------------------ |
       | 商品编号1001的销量是9，商品编号1002的销量是15    | zadd goods:sellsort 9 1001 15 1002   |
       | 有一个客户又买了2件商品1001，商品编号1001销量加2 | zincrby goods:sellsort 2 1001        |
       | 求商品销量前10名                                 | ZRANGE goods:sellsort 0 9 withscores |

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis有序集合Zset/Redis有序集合案例应用场景商品排序显示.png)

#### 4.7 Redis 位图（bitmap）

1. 一句话

   由 0 和 1 状态表现的二进制位的 bit 数组

2. 看需求

   - 用户是否登陆过Y、N，比如京东每日签到送京豆
   - 电影、广告是否被点击播放过
   - 钉钉打卡上下班，签到统计

3. 是什么

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图是什么.png)

   说明：用String类型作为底层数据结构实现的一种统计二值状态的数据类型

   位图本质是数组，它是基于String数据类型的按位的操作。该数组由多个二进制位组成，每个二进制位都对应一个偏移量(我们称之为一个索引)。

   Bitmap支持的最大位数是2^32位，它可以极大的节约存储空间，使用512M内存就可以存储多达42.9亿的字节信息(2^32 = 4294967296)

4. 能干嘛

   用于状态统计：Y、N，类似于AtomicBoolean

5. 基本命令

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令.png)

   1. setbit：

      - setbit key offset value

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令setbit.png)

      - setbit 键的偏移位只能为零或者1

      - Bitmap的偏移量是从零开始算的

   2. getbit：

      getbit key offset

   3. strlen：

      统计字节数占用多少

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令strlen.png)

      不是字符串长度而是占据几个字节，超过8位后自己按照8位一组一byte再扩容

   4. bitcount：

      全部键里面含有1的有多少个

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令bitcount.png)

   5. bitop：

      连续2天都签到的用户

      加入某个网站或者系统，它的用户有1000W，做个用户id和位置的映射

      比如0号位对应用户id：uid-092iok-lkj

      比如1号位对应用户id：uid-7388c-xxx

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令bitop.png)

   6. setbit 和 getbit 案例说明：

      按照天

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令setbit和getbit案例说明1.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图基本命令setbit和getbit案例说明2.png)

6. 应用场景

   - 一年 365 天，全年天天登录占用多少字节

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位图bitmap/Redis位图应用场景一年登录占用.png)

   - 按照年

     按年去存储一个用户的签到情况，365 天只需要 365 / 8 ≈ 46 Byte，1000W 用户量一年也只需要 44 MB 就足够了。

     假如是亿级的系统，每天使用1个1亿位的Bitmap约占12MB的内存（10^8/8/1024/1024），10天的Bitmap的内存开销约为120MB，内存压力不算太高。

     此外，在实际使用时，最好对Bitmap设置过期时间，让Redis自动删除不再需要的签到记录以节省内存开销。

#### 4.8 Redis 基数统计（HyperLogLog）

1. 看需求

   1. 统计某个网站的UV，统计某个文章的UV
   2. 什么是UV
      - Unique Visitor，独立访客，一般理解为客户端IP
      - 需要去重考虑
   3. 用户搜索网站关键词的数量
   4. 统计用户每天搜索不同词条个数

2. 是什么

   1. 去重复统计功能的基数估计算法，就是HyperLogLog

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis基数统计HyperLogLog/Redis基数统计是什么去重.png)

   2. 基数

      - 是一种数据集，去重复后的真实个数

      - 案例Case

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis基数统计HyperLogLog/Redis基数统计是什么基数案例.png)

   3. 基数统计：用于统计一个集合中不重复的元素个数，就是对集合去重复后剩余元素的计算

   4. 一句话：去重脱水后的真实数据

3. 基本命令

   案例见最下：

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis基数统计HyperLogLog/Redis基数统计基本命令1.png)

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis基数统计HyperLogLog/Redis基数统计基本命令2.png)

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis基数统计HyperLogLog/Redis基数统计基本命令3.png)

4. 应用场景

   编码实战案例见高级篇：天猫网站首页亿级UV的 Redis 统计方案

#### 4.9 Redis 地理空间（GEO）

1. 简介

   移动互联网时代LBS应用越来越多，交友软件中附近的小姐姐、外卖软件中附近的美食店铺、高德地图附近的核酸检查点等等，那这种附近各种形形色色的XXX地址位置选择是如何实现的？

   地球上的地理位置是使用二维的经纬度表示，经度范围 (-180, 180]，纬度范围 (-90, 90]，只要我们确定一个点的经纬度就可以名取得他在地球的位置。

   例如滴滴打车，最直观的操作就是实时记录更新各个车的位置，然后当我们要找车时，在数据库中查找距离我们(坐标x0,y0)附近r公里范围内部的车辆

   使用如下SQL即可：

   select taxi from position where x0-r < x < x0 + r and y0-r < y < y0+r

   但是这样会有什么问题呢？

   1. 查询性能问题，如果并发高，数据量大这种查询是要搞垮数据库的

   2. 这个查询的是一个矩形访问，而不是以我为中心r公里为半径的圆形访问。

   3. 精准度的问题，我们知道地球不是平面坐标系，而是一个圆球，这种矩形计算在长距离计算时会有很大误差

2. 原理

   - 地理知识说明：https://baike.baidu.com/item/%E7%BB%8F%E7%BAR%6AC%E7%BA%BF/5596978?fr=aladdin

   核心思想就是将球体转换为平面，区块转换为一点

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间原理1.png)

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间原理2.png)

3. Redis 在3.2版本以后增加了地理位置的处理

4. 命令

   1. GEOADD：多个经度（longitude）、纬度（latitude）、位置名称（member）添加到指定的 key 中
   2. GEOPOS：从键里面返回所有给定位置元素的位置（经度和纬度）
   3. GEODIST：返回两个给定位置之间的距离
   4. GEORADIUS：以给定的经纬度为中心，返回与中心的距离不超过给定最大距离的所有位置元素
   5. GEORADIUSBYMEMBER 跟 GEORADIUS 类似
   6. GEOHASH 返回一个或多个位置元素的 Geohash 表示

5. 命令实操

   1. 如何获得某个地址的经纬度：http://api.map.baidu.com/lbsapi/getpoint/

   2. GEOADD 添加经纬度坐标

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操添加经纬度坐标1.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操添加经纬度坐标2.png)

      命令如下：

      ``` redis
      GEOADD city 116.403963 39.915119 "天安门" 116.403414 39.924091 "故宫" 116.024067 40.362639 "长城"
      ```

      - 中文乱码如何处理

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操添加经纬度坐标中文乱码解决.png)

   3. GEOPOS 返回经纬度

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操返回经纬度1.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操返回经纬度2.png)

      ``` redis
      GEOPOS city 天安门 故宫 长城
      ```

   4. GEOHASH 返回坐标的 geohash 表示

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操返回坐标的geohash表示1.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操返回坐标的geohash表示2.png)

      - geohash 算法生成的 base32 编码值

      - 3维变2维变1维

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操返回坐标的geohash表示三维变二维吧变一维.png)

   5. GEODIST 两个位置之间距离

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操两个位置之间的距离1.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操两个位置之间的距离2.png)

       GEODIST city 天安门 故宫 km

      > 后面参数是距离单位：
      >
      > m 米
      >
      > km 千米
      >
      > ft 英尺
      >
      > mi 英里

   6. GEORADIUS

      以半径为中心，查找附近的XXX

      georadius 以给定的经纬度为中心， 返回键包含的位置元素当中， 与中心的距离不超过给定最大距离的所有位置元素。

      ``` redis
      GEORADIUS city 116.418017 39.914402 10 km withdist withcoord count 10 withhash desc
      GEORADIUS city 116.418017 39.914402 10 km withdist withcoord withhash count 10 desc
      ```

      > WITHDIST: 在返回位置元素的同时， 将位置元素与中心之间的距离也一并返回。 距离的单位和用户给定的范围单位保持一致。
      >
      > WITHCOORD: 将位置元素的经度和维度也一并返回。
      >
      > WITHHASH: 以 52 位有符号整数的形式， 返回位置元素经过原始 geohash 编码的有序集合分值。 这个选项主要用于底层应用或者调试， 实际中的作用并不大
      >
      > COUNT 限定返回的记录数。

       当前位置(116.418017 39.914402),阳哥在北京王府井

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操GEORADIUS半径查找.png)

   7. GEORADIUSBYMEMBER

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操GEORADIUSBYMEMBER1.png)

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis地里空间GEO/Redis地理空间命令实操GEORADIUSBYMEMBER2.png)

6. 应用场景

   - 美团地图位置附近的酒店推送
   - 高德地图附近的核酸检查点

#### 4.10 Redis 流（Stream）

1. 是什么

   1. redis5.0 之前的痛点

      Redis 消息队列的2种方案

      - List 实现消息队列

        按照插入顺序排序，你可以添加一个元素到列表的头部（左边）或者尾部（右边）。 

        所以常用来做异步队列使用，将需要延后处理的任务结构体序列化成字符串塞进 Redis 的列表，另一个线程从这个列表中轮询数据进行处理。

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流是什么消息队列List实现1.png)

        LPUSH、RPOP 左进右出  RPUSH、LPOP 右进左出

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流是什么消息队列List实现2.png)

        > List 实现方式其实就是点对点的模式

      - Pub/Sub

        ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流是什么消息队列PubSub.png)

        Redis 发布订阅 (pub/sub) 有个缺点就是消息无法持久化，如果出现网络断开、Redis 宕机等，消息就会被丢弃。而且也没有 Ack 机制来保证数据的可靠性，假设一个消费者都没有，那消息就直接被丢弃了。

   2. redis5.0 版本新增了一个更强大的数据结构-------Stream

   3. 一句话

      Redis 版的 MQ 消息中间件 + 阻塞队列

2. 能干嘛

   实现消息队列，它支持消息的持久化、支持自动生成全局唯一ID、支持ack 确认消息的模式、支持消费组模式等，让消息队列更加的稳定和可靠

3. 底层结构和原理说明

   Stream 结构

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流底层结构和原理说明stream结构.png)

   一个消息链表，将所有加入的消息都串起来，每个消息都有一个唯一的 ID 和对应的内容

   | 编号 | 代码              | 功能介绍                                                     |
   | ---- | ----------------- | ------------------------------------------------------------ |
   | 1    | Message Content   | 消息内容                                                     |
   | 2    | Consumer group    | 消费组，通过XGROUP CREATE 命令创建，同一个消费组可以有多个消费者 |
   | 3    | Last_delivered_id | 游标，每个消费组会有个游标 last_delivered_id，任意一个消费者读取了消息都会使游标 last_delivered_id 往前移动。 |
   | 4    | Consumer          | 消费者，消费组中的消费者                                     |
   | 5    | Pending_ids       | 消费者会有一个状态变量，用于记录被当前消费已读取但未ack的消息Id，如果客户端没有ack，这个变量里面的消息ID会越来越多，一旦某个消息被ack它就开始减少。这个pending_ids变量在Redis官方被称之为 PEL(Pending Entries List)，记录了当前已经被客户端读取的消息，但是还没有 ack (Acknowledge character：确认字符），它用来确保客户端至少消费了消息一次，而不会在网络传输的中途丢失了没处理 |

4. 基本命令理论简介

   1. 队列相关指令

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本命令理论简介队列相关指令.png)

   2. 消费组相关指令

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本命令理论简介消费组相关指令.png)

   3. 四个特殊符号

      - \- \+：最小和最大可能出现的id
      - $：$ 表示只消费新的消息，当前流中最大的id，可用于将要来的消息
      - \>：用于 XREADGROUP 命令，表示迄今为止还没有发送给组中使用者的消息，会更新消费组的最后 ID
      - \*：用于 XADD 命令中，让系统自动生成 id

5. 基本命令代码实操

   1. 队列相关指令

      1. XADD

         添加消息到队列末尾：

         XADD 用于向Stream 队列中添加消息，如果指定的Stream 队列不存在，则该命令执行时会新建一个Stream 队列

         > \* 号表示服务器自动生成 MessageID(类似mysql里面主键auto_increment)，后面顺序跟着一堆 业务key/value

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XADD添加消息到队列末尾.png)

         | 说明                                                         |
         | ------------------------------------------------------------ |
         | 信息条目指的是序列号，在相同的毫秒下序列号从0开始递增，序列号是64位长度，理论上在同一毫秒内生成的数据量无法到达这个级别，因此不用担心序列号会不够用。millisecondsTime指的是Redis节点服务器的本地时间，如果存在当前的毫秒时间戳比以前已经存在的数据的时间戳小的话（本地时间钟后跳），那么系统将会采用以前相同的毫秒创建新的ID，也即redis 在增加信息条目时会检查当前 id 与上一条目的 id， 自动纠正错误的情况，一定要保证后面的 id 比前面大，一个流中信息条目的ID必须是单调增的，这是流的基础。 |
         | 客户端显示传入规则:Redis对于ID有强制要求，格式必须是时间戳-自增Id这样的方式，且后续ID不能小于前一个ID |
         | Stream的消息内容，也就是图中的Message Content它的结构类似Hash结构，以key-value的形式存在。 |

         - 消息 ID 必须要比上个 ID 大

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XADD消息ID必须比上个大.png)

         - 默认使用星号表示自动生成规矩

         - \*：用于 XADD 命令中，让系统自动生成 id

      2. XRANGE

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XRANGE.png)

         - 用于获取消息列表（可以指定范围），忽略删除的消息
         - start 表示开始值，- 代表最小值
         - end 表示结束值，+ 代表最大值
         - count 表示最多获取多少个值

      3. XREVRANGE

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XREVRANGE.png)

         > 与 XRANGE 的区别在于，获取消息列表元素的方向是相反的，end 在前，start 在后

      4. XDEL

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XDEL.png)

      5. XLEN

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XLEN.png)

         > 用于获取 Stream 队列的消息的长度

      6. XTRIM

         - 用于对 Stream 的长度进行截取，如超长会进行截取

         - MAXLEN

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XTRIM中MAXLEN.png)

           > 允许的最大长度，对流进行修剪限制长度

         - MINID

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XTRIM中MINID.png)

           > 允许的最小 id，从某个 id 值开始比该 id 值小的将会被抛弃

      7. XREAD

         - 用于获取消息（阻塞/非阻塞），只会返回大于指定 ID 的消息

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XREAD作用.png)

         - 非阻塞

           | 说明                                                         |
           | ------------------------------------------------------------ |
           | $代表特殊ID，表示以当前Stream已经存储的最大的ID作为最后一个ID，当前Stream中不存在大于当前最大ID的消息，因此此时返回nil |
           | 0-0代表从最小的ID开始获取Stream中的消息，当不指定count，将会返回Stream中的所有消息，注意也可以使用0（00/000也都是可以的……） |

            ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XREAD非阻塞.png)

         - 阻塞

           请redis-cli启动第2个客户端连接上来 

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XREAD阻塞.png)

         - 小总结（类似 java 里面的阻塞队列）

           Stream的基础方法，使用xadd存入消息和xread循环阻塞读取消息的方式可以实现简易版的消息队列，交互流程如下

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XREAD小总结1.png)

           对比List结构

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操队列相关命令XREAD小总结2.png)

   2. 消费组相关指令

      1. XGROUP CREATE

         用于创建消费组组

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XGROUPCREATE.png)

         > $表示从Stream尾部开始消费
         >
         > 0表示从Stream头部开始消费
         >
         > 创建消费者组的时候必须指定 ID, ID 为 0 表示从头开始消费，为 $ 表示只消费新的消息，队尾新来

      2. XREADGROUP GROUP

         - ">"，表示从第一条尚未被消费的信息开始读取

         - 消费组 groupA 内的消费者 consumer1 从 mystream 消息队列中读取所有消息

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XREADGROUP读取所有信息.png)

         - 但是，不同消费组的消费组可以消费同一条消息

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XREADGROUP不同消费组消费同一条信息.png)

         - 消费组的目的？

           让组内的多个消费者共同分担读取消息，所以，我们通常会让每个消费者读取部分消息，从而实现消息读取负载在多个消费者间是均衡分布的

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XREADGROUP消费组的目的.png)

      3. 重点问题

         | 1问题 | 基于 Stream 实现的消息队列，如何保证消费者在发生故障或宕机再次重启后，仍然可以读取未处理完的消息？ |
         | ----- | ------------------------------------------------------------ |
         | 2     | Streams 会自动使用内部队列（也称为 PENDING List）留存消费组里每个消费者读取的消息保底措施，直到消费者使用 XACK 命令通知 Streams“消息已经处理完成”。 |
         | 3     | 消费确认增加了消息的可靠性，一般在业务处理完成之后，需要执行 XACK 命令确认消息已经被消费完成 |

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令重点问题.png) 

      4. XPENDING

         - 查询每个消费组内所有消费者「已读取，但尚未确认」的消息

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XPENDING查询已读取但尚未确认.png)

         - 查看某个消费者具体读取了哪些数据

           ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XPENDING查看消费组具体读取的数据1.png)

           下面抓图所示：consumer2已读取的消息的 ID是1659430293537-0一旦消息1659430293537-0被consumer2处理了consumer2就可以使用 XACK 命令通知 Streams，然后这条消息就会被删除

            ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XPENDING查看消费组具体读取的数据2.png)

      5. XACK

         向消息队列确认消息处理已完成

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XACK1.png)

         ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操消费组相关命令XACK2.png)

   3. XINFO 用于打印 Stream\Consumer\Group 的详细信息

      ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis流Stream/Redis流基本代码案例实操XINFO演示.png)

6. 使用建议

   Stream 还是不能 100% 等价于 Kafka、RabbitMQ 来使用时，生产案例少，慎用

#### 4.11 Redis 位域（bitfield）

1. 是什么

   - 官网

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域是什么官网.png)

   - https://redis.com.cn/commands/bitfield.html

2. 能干嘛

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域能干嘛.png)

   >   hello 等价于 0110100001100101011011000110110001101111

   - 位域修改
   - 溢出控制

3. 一句话

   将一个 Redis 字符串看作是一个由二进制位组成的数组，并能对变长位宽和任意没有字节对齐的指定整型位域进行寻址和修改

4. 命令基本语法

   ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域命令基本语法.png)

   ```redis
   BITFIELD key [GET type offset] [SET type offset value] [INCRBY type offset increment] [OVERFLOW WRAP|SAT|FAIL]
   ```

5. 案例

   Ascii 码表：https://ascii.org.cn/

   基本命令代码实操

   - BITFIELD key [GET type offset]

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDGET1.png)

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDGET2.png)

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDGET3.png)

     > hello 等价于 0110100001100101011011000110110001101111

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDGET4.png)

   - BITFIELD key [SET type offset value]

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDSET1.png)

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDSET2.png)

   - BITFIELD key [INCRBY type offset increment]

     ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操BITFIELDINCRBY.png)

     > 默认情况下，INCRBY 使用 WRAP 参数

   - 溢出控制 OVERFLOW[WRAP|SAT|FAIL]

     - WRAP：使用回绕（wrap around）方法处理有符号整数和无符号整数的溢出情况

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操OVERFLOW中WRAP.png)

     - SAT：使用饱和计算（saturation arithmetic）方法处理溢出，下溢计算的结果为最小的整数值，而上溢计算的结果为最大的整数值

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操OVERFLOW中SAT.png)

     - FAIL：命令将拒绝执行那些会导致上溢或者下溢情况出现的计算，并向用户返回空值表示计算未被执行

       ![](Redis学习笔记尚硅谷/Redis10大数据类型/数据类型命令及落地应用/Redis位域bitfield/Redis位域案例基本代码实操OVERFLOW中FAIL.png)

#### 4.12 案例实战

高级篇再见

## 四、Redis 持久化

## 五、Redis 事务

## 六、Redis 管道

## 七、Redis 发布订阅

## 八、Redis 复制（replica）

## 九、Redis 哨兵（sentinel）

## 十、Redis 集群（cluster）

## 十一、SpringBoot 集成 Redis