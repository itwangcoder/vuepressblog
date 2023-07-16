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
![](Docker安装/安装步骤01前提条件查看自己的内核.png)

### 2、卸载旧版本

官网地址：[https://docs.docker.com/engine/install/centos/](https://docs.docker.com/engine/install/centos/)
![](Docker安装/安装步骤02卸载旧版本.png)


### 3、yum 安装 gcc 相关

首先应确保CentOS7能上外网，接着执行以下代码
```shell
yum -y install gcc
yum -y install gcc-c++
```

### 4、安装需要的软件包
#### 4.1 官网要求

![](Docker安装/安装步骤04安装需要的软件包官网需求.png)

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
  > **出现错误**：<br/>
  > [root@wang128 ~]# yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  > 已加载插件：fastestmirror, langpacks
  > adding repo from: https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  > grabbing file https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo
  > Could not fetch/save url https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo to file /etc/yum.repos.d/docker-ce.repo: [Errno 14] HTTPS Error 403 - Forbidden
  > ![](Docker安装/安装步骤05设置stable镜像仓库推荐出现错误.png)
  >
  > **原因**：<br/>
  > 访问该网址次数过多把你屏蔽了
  >
  > **解决方案**：<br/>
  > 更换网络

### 6、更新 yum 软件包索引

``` shell
yum makecache fast
```

### 7、安装 DOCKER CE

``` shell
yum -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
安装结果：
![](Docker安装/安装步骤07安装DOCKERCE安装结果.png)


### 8、启动 Docker

``` shell
systemctl start docker
```

### 9、测试
#### 9.1 查看 docker 版本

``` shell
docker version  # 查看 docker版本
```
![](Docker安装/安装步骤09测试查看docker版本.png)

#### 9.2 从远程镜像仓库中拉取 hello-world 项目并运行

``` shell
docker run hello-world		# 从远程镜像仓库中拉取 hello-world 项目并运行
```
![](Docker安装/安装步骤09测试远程拉取helloworld并运行.png)

### 10、卸载

``` shell
systemctl stop docker		# 停止 docker 服务
yum remove docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras		# 卸载 docker
rm -rf /var/lib/docker		# 删除相关配置文件，镜像文件，容器和卷等信息
rm -rf /var/lib/containerd	# 删除相关配置文件，镜像文件，容器和卷等信息
```
> **运行 `systemctl stop docker` 时出现如下提示**：<br/>
> Warning: Stopping docker.service, but it can still be activated by:
>   docker.socket
>
> **原因**：<br/>
> 这是docker在关闭状态下被访问自动唤醒机制，很人性化，即这时再执行任意docker命令会直接启动
>
> **解决方案**：<br/>
> 如果真的不希望docker被访问自动唤醒，执行 `systemctl stop docker` 后再执行`systemctl stop docker.socket`即可


## 二、Docker 配置

### 1、阿里云镜像加速配置

  1. 首先进入阿里云官网地址：[https://promotion.aliyun.com/ntms/act/kubernetes.html](https://promotion.aliyun.com/ntms/act/kubernetes.html)

  2. 注册一个属于自己的阿里云账户（可复用淘宝账号）

  3. 获得加速器地址连接
     1. 登陆阿里云开发者平台
     2. 点击控制台
     3. 选择容器镜像服务
     4. 获取加速器地址
  4. 粘贴脚本直接执行
  ```shell
  mkdir -p /etc/docker
  tee /etc/docker/daemon.json <<-'EOF'
  {
    "registry-mirrors": ["https://i4mas7hh.mirror.aliyuncs.com"]
  }
  EOF
  ```

  5. 重启服务器
  ```shell
  sudo systemctl daemon-reload
  sudo systemctl restart docker
  ```


## 三、常用命令

### 1、帮助启动类命令

1. 启动docker

```shell
systemctl start docker
```

2. 停止docker

```shell
systemctl stop docker
```

3. 重启docker

```shell
systemctl restart docker
```

4. 查看docker状态

```shell
systemctl status docker
```

5. 开机启动

```shell
systemctl enable docker
```

6. 查看docker概要信息

```shell
docker info
```

7. 查看docker总体帮助文档

```shell
docker --help
```

8. 查看docker命令帮助文档

```shell
docker 具体命令 --help
```

### 2、镜像命令

1. 列出本地主机上的镜像

   ```shell
   docker images [OPTIONS] 镜像名字
   ```
   > OPTIONS说明：
   >
   > - -a :列出本地所有的镜像（含历史映像层）
   > - -q :只显示镜像ID。

   ![](Docker安装/常用命令02镜像命令列出本地主机上的镜像.png)
   > 各个选项说明：
   > - REPOSITORY：表示镜像的仓库源 
   > - TAG：镜像的标签版本号 
   > - IMAGE ID：镜像ID 
   > - CREATED：镜像创建时间 
   > - SIZE：镜像大小
   >
   > 同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像

2. 在网络仓库上查看相关镜像信息

   ```shell
   docker search [OPTIONS] 镜像名字
   ```

   > 网站：https://hub.docker.com
   >
   > OPTIONS说明：
   >
   > --limit : 只列出N个镜像，默认25个
   >
   > ```shell
   > docker search --limit 5 redis
   > ```

   ![](Docker安装/常用命令02镜像命令查询命令.png)

   | 参数        | 说明             |
   | ----------- | ---------------- |
   | NAME        | 镜像名称         |
   | DESCRIPTION | 镜像说明         |
   | STARS       | 点赞数量         |
   | OFFICIAL    | 是否是官方的     |
   | AUTOMATED   | 是否是自动构建的 |

3. 下载镜像

   ```shell
   docker pull 镜像名字[:TAG]
   ```

   > docker pull 镜像名字
   >
   > - 没有TAG就是最新版
   >
   > - 等价于 docker pull 镜像名字:latest
   >
   > - docker pull ubuntu

4. 查看镜像/容器/数据卷所占的空间

   ```shell
   docker system df
   ```

5. 删除镜像

   ```shell
   docker rmi -f 镜像ID						# 删除单个，-f 表示强制删除
   docker rmi -f 镜像名1:TAG 镜像名2:TAG			# 删除多个
   docker rmi -f $(docker images -qa)			# 删除全部
   ```

6. 面试题：谈谈docker虚悬镜像是什么？

   仓库名、标签都是\<none\>的镜像，俗称虚悬镜像dangling image，这种镜像是由于下载失败等原因造成的，**需要立即删除**


### 3、容器命令

1. 前提

   有镜像才能创建容器，这是根本前提（下载一个CentOS或者ubuntu镜像演示）

   ``` shell
   docker pull centos
   docker pull ubuntu
   ```

   > 本次演示用ubuntu演示

2. 新建并启动容器

   - 新建
     ```shell
     docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
     ```
     > OPTIONS说明（常用）：有些是一个减号，有些是两个减号
     >
     > - --name="容器新名字"    为容器指定一个名称；
     > - -d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；
     > - -i：以交互模式运行容器，通常与 -t 同时使用；
     > - -t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；也即启动交互式容器(前台有伪终端，等待交互)；
     > - -P: 随机端口映射，大写P
     > - -p: 指定端口映射，小写p

     | 参数                          | 说明                               |
     | ----------------------------- | ---------------------------------- |
     | -p hostPort:containerPort     | 端口映射 -p 8080:80                |
     | -p ip:hostPort:containerPort  | 配置监听地址 -p 10.0.0.100:8080:80 |
     | -p ip::containerPort          | 随机分配端口 -p 10.0.0.100::80     |
     | -p hostPort:containerPort:udp | 指定协议 -p 8080:80:tcp            |
     | -p 81:80 -p 443:443           | 指定多个                           |

   - 启动
     使用镜像 ubuntu:latest 以**交互模式**启动一个容器,在容器内执行 /bin/bash 命令。
     ``` shell
     docker run -it ubuntu /bin/bash
     ```
     > 参数说明： 
     >
     > - -i：交互式操作。 （interactive）
     > - -t：终端。 （tyy）
     > - ubuntu：ubuntu 镜像。 
     > - /bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。 
     >
     > 要退出终端，直接输入 exit

3. 列出当前所有正在运行的容器

   ```shell
   docker ps [OPTIONS]
   ```

   > OPTIONS说明（常用）：
   >
   > - -a：列出当前所有正在运行的容器+历史上运行过的
   > - -l：显示最近创建的容器。
   > - -n：显示最近n个创建的容器。
   > - -q：静默模式，只显示容器编号。

4. 退出容器

   - exit：run进去容器，exit退出，容器停止

   - ctrl+p+q：run进去容器，ctrl+p+q退出，容器不停止

5. 启动已停止运行的容器

   ``` shell
   docker start 容器ID或者容器名
   ```

6. 重启容器

   ``` shell
   docker restart 容器ID或者容器名
   ```

7. 停止容器

   ```shell
   docker stop 容器ID或者容器名
   ```

8. 强制停止容器

   ```shell
   docker kill 容器ID或容器名
   ```

9. 删除已停止的容器

   ```shell
   docker rm 容器ID
   # 一次性删除多个容器实例
   docker rm -f $(docker ps -a -q)
   docker ps -a -q | xargs docker rm
   ```
   
10. 重要

### 4、小总结

![img](Docker安装/常用命令04小总结.png)

```shell
attach   Attach to a running container         # 当前 shell 下 attach 连接指定运行镜像
build   Build an image from a Dockerfile        # 通过 Dockerfile 定制镜像
commit   Create a new image from a container changes  # 提交当前容器为新的镜像
cp     Copy files/folders from the containers filesystem to the host path  #从容器中拷贝指定文件或者目录到宿主机中
create   Create a new container             # 创建一个新的容器，同 run，但不启动容器
diff    Inspect changes on a container's filesystem  # 查看 docker 容器变化
events   Get real time events from the server      # 从 docker 服务获取容器实时事件
exec    Run a command in an existing container     # 在已存在的容器上运行命令
export   Stream the contents of a container as a tar archive  # 导出容器的内容流作为一个 tar 归档文件[对应 import ]
history  Show the history of an image          # 展示一个镜像形成历史
images   List images                  # 列出系统当前镜像
import   Create a new filesystem image from the contents of a tarball # 从tar包中的内容创建一个新的文件系统映像[对应export]
info    Display system-wide information        # 显示系统相关信息
inspect  Return low-level information on a container  # 查看容器详细信息
kill    Kill a running container            # kill 指定 docker 容器
load    Load an image from a tar archive        # 从一个 tar 包中加载一个镜像[对应 save]
login   Register or Login to the docker registry server   # 注册或者登陆一个 docker 源服务器
logout   Log out from a Docker registry server      # 从当前 Docker registry 退出
logs    Fetch the logs of a container         # 输出当前容器日志信息
port    Lookup the public-facing port which is NAT-ed to PRIVATE_PORT   # 查看映射端口对应的容器内部源端口
pause   Pause all processes within a container     # 暂停容器
ps     List containers                # 列出容器列表
pull    Pull an image or a repository from the docker registry server  # 从docker镜像源服务器拉取指定镜像或者库镜像
push    Push an image or a repository to the docker registry server   # 推送指定镜像或者库镜像至docker源服务器
restart  Restart a running container          # 重启运行的容器
rm     Remove one or more containers         # 移除一个或者多个容器
rmi    Remove one or more images    # 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]
run    Run a command in a new container        # 创建一个新的容器并运行一个命令
save    Save an image to a tar archive         # 保存一个镜像为一个 tar 包[对应 load]
search   Search for an image on the Docker Hub     # 在 docker hub 中搜索镜像
start   Start a stopped containers           # 启动容器
stop    Stop a running containers           # 停止容器
tag    Tag an image into a repository         # 给源中镜像打标签
top    Lookup the running processes of a container  # 查看容器中运行的进程信息
unpause  Unpause a paused container           # 取消暂停容器
version  Show the docker version information      # 查看 docker 版本号
wait    Block until a container stops, then print its exit code  # 截取容器停止时的退出状态值
```

