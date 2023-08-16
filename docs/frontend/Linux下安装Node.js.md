---
title: Linux中安装Node.js
description: 在 CentOS 中安装 Node.jsv16.20.2
author: itwangcoder
date: '2023-08-15'
categories:
 - 其他
tags:
 - Linux
 - Node.js
 - 安装
---

## 一、下载文件

### 1、官网地址

官网地址：[https://nodejs.org/](https://nodejs.org/)<br/>
下载地址：[https://nodejs.org/dist](https://nodejs.org/dist)<br/>

### 2、文件下载

#### 2.1 进行官网下载安装包进行安装

对应版本下载地址：[https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.gz](https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.gz)

#### 2.2 在 Linux 系统中由网络进行下载安装

下载命令
```shell
wget https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.gz
```

## 二、文件安装

### 1、解压

执行以下命令将其解压到指定目录
```shell
tar -zxvf node-v16.20.2-linux-x64.tar.gz -C /usr/local/
```

### 2、重命名

执行以下命令更改文件名称
```shell
mv node-v16.20.2-linux-x64 nodejs
```

### 3、配置 node 和 npm 命令全局可见

配置 `node、npm` 命令全局可用，就是在任意路径可用使用命令，没配置的话，就只能在 `/usr/local/nodejs/bin` 安装目录下使用命令。

#### 3.1 方式一<font style="color:red;font-weight:bold;">（采用）</font>

把node和npm创建软链接到 `/usr/local/bin/` 目录下，系统在使用命令时，默认会到 `/usr/local/bin/` 读取命令。
```shell
ln -s /usr/local/nodejs/bin/node /usr/local/bin/node
ln -s /usr/local/nodejs/bin/npm /usr/local/bin/npm
```

#### 3.2 方式二

把node和npm创建软链接到` /usr/local/bin/` 目录下，系统在使用命令时，默认会到` /usr/bin/` 读取命令。
```shell
ln -s /usr/local/nodejs/bin/node /usr/bin/node
ln -s /usr/local/nodejs/bin/npm /usr/bin/npm
```

### 4、确认命令可用

调用下列命令查看全局可见是否配置成功
```shell
node -v         # 查看 node 版本
npm -v          # 查看 npm 版本
```
执行结果如下：
![](Linux下安装Node.js/02确认命令可用.png)

## 三、相关配置