---
title: Linux中安装Docker
description: 在 CentOS 中安装 Docker
author: itwangcoder
date: '2023-07-02'
categories:
 - 其他
tags:
 - Docker
 - 安装
---

## 一、安装步骤

官网安装教程：[https://docs.docker.com/engine/install/centos/](https://docs.docker.com/engine/install/centos/)

### 1、前提条件

目前，CentOS 仅发行版本中的内核支持 Docker。Docker 运行在CentOS 7 (64-bit)上，要求系统为64位、Linux系统内核版本为 3.8以上，这里选用Centos7.x <br/>
因此需要查看自己的内核，执行以下命令：
```shell
cat /etc/redhat-release
uname -r
```
![](/handbook/Docker%E5%AE%89%E8%A3%85/%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6%E6%9F%A5%E7%9C%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E5%86%85%E6%A0%B8.png)

### 2、卸载旧版本

官网地址：[https://docs.docker.com/engine/install/centos/](https://docs.docker.com/engine/install/centos/)
![](/handbook/Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E5%8D%B8%E8%BD%BD%E6%97%A7%E7%89%88%E6%9C%AC.png)


### 3、yum 安装 gcc 相关

首先应确保CentOS7能上外网，接着执行以下代码
```shell
yum -y install gcc
yum -y install gcc-c++
```

### 4、安装需要的软件包

#### 4.1 官网要求

![](/handbook/Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E5%AE%89%E8%A3%85%E9%9C%80%E8%A6%81%E7%9A%84%E8%BD%AF%E4%BB%B6%E5%8C%85%E5%AE%98%E7%BD%91%E9%9C%80%E6%B1%82.png)

#### 4.2 执行命令

```shell
yum install -y yum-utils
```

### 5、设置 stable 镜像仓库

- 大坑
  ``` shell
  yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
  ```
  报错：
  1. [Errno 14] curl#35 - TCP connection reset by peer
  2. [Errno 12] curl#35 - Timeout
  > 此代码是官网推荐安装步骤，用户执行此代码后，会链接国外的网址进行下载，因此会出现网络卡顿等现象，**不建议使用该网址，建议使用国内镜像地址**

- 推荐
  ``` shell
  yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  ```
  > 出现错误：
  > [root@wang128 ~]# yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  > 已加载插件：fastestmirror, langpacks
  > adding repo from: https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  > grabbing file https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo
  > Could not fetch/save url https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to file /etc/yum.repos.d/docker-ce.repo: [Errno 14] HTTPS Error 403 - Forbidden
  > ![](/handbook/Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E8%AE%BE%E7%BD%AEstable%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%8E%A8%E8%8D%90%E5%87%BA%E7%8E%B0%E9%94%99%E8%AF%AF.png)
  >
  > 原因：
  > - 访问该网址次数过多把你屏蔽了
  >
  > 解决方案：
  > - 更换网络

### 6、更新 yum 软件包索引

``` shell
yum makecache fast
```

### 7、安装 DOCKER CE

``` shell
yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
安装结果：
![](handbook/Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E5%AE%89%E8%A3%85DOCKERCE%E5%AE%89%E8%A3%85%E7%BB%93%E6%9E%9C.png)


### 8、启动 Docker

``` shell
systemctl start docker
```

### 9、测试

#### 9.1 查看 docker 版本

``` shell
docker version  # 查看 docker版本
```
![](/handbook/Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E6%B5%8B%E8%AF%95%E6%9F%A5%E7%9C%8Bdocker%E7%89%88%E6%9C%AC.png)

#### 9.2 从远程镜像仓库中拉取 hello-world 项目并运行

``` shell
docker run hello-world		# 从远程镜像仓库中拉取 hello-world 项目并运行
```
![](/handbook/Docker%E5%AE%89%E8%A3%85/%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4%E6%B5%8B%E8%AF%95%E8%BF%9C%E7%A8%8B%E6%8B%89%E5%8F%96helloworld%E5%B9%B6%E8%BF%90%E8%A1%8C.png)

### 10、卸载

``` shell
systemctl stop docker		# 停止 docker 服务
yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras		# 卸载 docker
rm -rf /var/lib/docker		# 删除相关配置文件，镜像文件，容器和卷等信息
rm -rf /var/lib/containerd	# 删除相关配置文件，镜像文件，容器和卷等信息
```
> 运行 `systemctl stop docker` 时出现如下提示：
> Warning: Stopping docker.service, but it can still be activated by:
>   docker.socket
>
> 原因：
> - 这是docker在关闭状态下被访问自动唤醒机制，很人性化，即这时再执行任意docker命令会直接启动
>
> 解决方案：
> - 如果真的不希望docker被访问自动唤醒，执行 `systemctl stop docker` 后再执行`systemctl stop docker.socket`即可


## 二、常用命令

