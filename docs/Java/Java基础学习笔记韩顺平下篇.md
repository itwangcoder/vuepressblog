---
title: Java基础学习笔记韩顺平下篇
description: Java基础学习笔记韩顺平下篇
author: itwangcoder
date: '2023-12-19'
categories:
 - Java
tags:
 - 韩顺平
 - Java
 - 编程语言
---

# Java基础---韩顺平

## 三、分析需求、代码实现能力

### 泛型

#### 泛型的理解和好处

- 看一个需求

  1. 请编写程序，在ArrayList中，添加3个Dog对象
  2. Dog对象中含有name和age，并输出name和age（要求使用getXxx()）

- 使用传统方法的问题分析

  1. 不能对加入到集合ArrayList中的数据类型进行约束（不安全）
  2. 遍历的时候，需要进行类型转换，如果集合中的数据量较大，对效率有影响

- 泛型的好处

  1. 编译时，检查添加元素的类型，提高了安全性

  2. 减少了类型转换的次数，提高效率

     - 不使用泛型

       Dog -> Object -> Dog // 放入到ArrayList会先转成Object，在取出时，还需要转换成Dog

     - 使用泛型

       Dog -> Dog -> Dog // 放入时，和取出时，不需要类型转换，提高效率

  3. 不再提示编译警告

#### 泛型语法

- 泛型介绍

  int a = 10;

  老韩理解：泛(广泛)型(类型) => Integer，String，Dog

  1. 泛型又称参数化类型，是 Jdk5.0 出现的新特性，解决数据类型的安全性问题
  2. 在类声明或实例化只要指定好需要的具体的类型即可
  3. Java泛型可以保证如果程序在编译时没有发出警告，运行时就不会产生ClassCastException异常。同时，代码更加简洁、健壮
  4. 泛型的作用是：可以在类声明时通过一个标识表示类中某个属性的类型，或者是某个方法的返回值的类型，或者是参数类型

- 泛型的声明

  interface 接口\<T\>{} 和 class类<K,V>{}

  // 比如：List，ArrayList

  说明：

  1. 其中，T，K，V不代表值，而是代表类型
  2. 任意字母都可以。常用T表示，是Type的缩写

- 泛型的实例化

  要在类名后面指定类型参数的值（类型）。如：

  1. `List\<String\> strList = new ArrayList\<String\>();`
  2. `Iterator\<Customer\> iterator = customers.iterator();`

- 泛型使用的注意事项和细节

  1. interface List\<T\>{}, public class HashSet\<E\>{}...等等

     说明：T，E只能是引用类型

     看看下面语句是否正确

     ```java
     List<Integer> list = new ArrayList<Integer>();	// OK
     List<int> list2 = new ArrayList<int>();	// 错误
     ```

  2. 在给泛型指定具体类型后，可以传入该类型或者其子类类型

  3. 泛型使用形式

     ```java
     List<Integer> list1 = new ArrayList<Integer>();
     List<Integer> list2 = new ArrayList<>();
     ```

  4. 如果我们这样写 `List list3 = new ArrayList();` 默认给它的泛型是【\<E\>E就是Object】

#### 自定义泛型

- 自定义泛型类(难度)

  - 基本语法：

    ```java
    class 类名<T,R...>{	// 表示可以有多个泛型
        成员
    }
    ```

  - 注意细节

    1. 普通成员可以使用泛型（属性，方法）
    2. 使用泛型的数组，不能初始化
    3. 静态方法中不能使用类的泛型
    4. 泛型类的类型，是在创建对象时确定的（因为创建对象时，需要指定确定类型）
    5. 如果在创建对象时，没有指定类型，默认为Object

- 自定义泛型接口

  - 基本语法

    ```java
    interface 接口名<T,R...>{
    }
    ```

  - 注意细节

    1. 接口中，静态成员也不能使用泛型（这个和泛型类规定一样）
    2. 泛型接口的类型，在继承接口或者实现接口时确定
    3. 没有指定类型，默认为Object

- 自定义泛型方法

  - 基本语法

    ```java
    修饰符 <T,R...>返回类型 方法名(参数列表){
    }
    ```

  - 注意细节

    1. 泛型方法，可以定义在普通类中，也可以定义在泛型类中
    2. 当泛型方法被调用时，类型会确定
    3. public void eat(E e){}，修饰符后没有\<T,R...\> eat方法不是泛型方法，而是使用了泛型

#### 泛型继承和通配符

- 泛型的继承和通配符说明

  1. 泛型不具备继承性

     ```java
     List<Object> list = new ArrayList<String>();
     // 不允许
     ```

  2. <?>：支持任意泛型类型

  3. <? extends A>：支持A类以及A类的子类，规定了泛型的上限

  4. <? super A>：支持A类以及A类的父类，不限于直接父类，规定了泛型的下限

- JUnit

  - 为什么需要JUnit
    1. 一个类有很多功能代码需要测试，为了测试，就需要写入到main方法中
    2. 如果有多个功能代码测试，就需要来回注销，切换很麻烦
    3. 如果可以直接运行一个方法，就方便很多，并且可以给出相关信息，就好了 -> JUnit
  - 基本介绍
    1. JUnit是一个Java语言的单元测试框架
    2. 多数Java的开发环境都已经集成了JUnit作为单元测试的工具

### 坦克大战

#### 坦克大战游戏演示

- 涉及到java各个方面的技术
  1. java面向对象编程
  2. 多线程
  3. 文件I/O操作
  4. 数据库

#### java绘图坐标体系

- 坐标体系-介绍

  下图说明了Java坐标系。坐标原点位于左上角，以像素为单位。在Java坐标系中，第一个是x坐标，表示当前位置为水平方向，距离坐标原点x个像素；第二个是y坐标，表示当前位置为垂直方向，距离坐标原点y个像素

  ![](Java基础学习笔记韩顺平/java绘图坐标体系.png)

- 坐标体系-像素

  1. 绘图还必须要搞清一个非常重要的概念-像素，一个像素等于多少厘米？
  2. 计算机在屏幕上显示的内容都是由屏幕上的每一个像素组成的。例如，计算机显示器的分辨率是800×600，表示计算机屏幕上的每一行由800个点组成，共有600行，整个计算机屏幕共有480000个像素。像素是一个密度单位，而厘米是长度单位，两者无法比较

#### java绘图技术

- 绘图原理

  - Component类提供了两个和绘图相关最重要的方法：
    1. paint(Graphics g)绘制组件的外观
    2. repaint()刷新组件的外观
  - 当组件第一次在屏幕显示的时候，程序会自动的调用paint()方法来绘制组件。
  - 在以下情况paint()将会被调用：
    1. 窗口最小化，再最大化
    2. 窗口的大小发生变化
    3. repaint方法函数被调用

- Graphics类

  Graphics类你可以理解就是画笔，为我们提供了各种绘制图形的方法：

  1. 画直线：drawLine(int x1, int y1, int x2, int y2)
  2. 画矩形边框：drawRect(int x, int y, int width, int height)
  3. 画椭圆边框：drawOval(int x, int y, int width, int height)
  4. 填充矩形：fillRect(int x, int y, int width, int height)
  5. 填充椭圆：fillOval(int x, int y, int width, int height)
  6. 画图片：drawImage(Image img, int x, int y, ..)
  7. 画字符串：drawString(String str, int x, int y)
  8. 设置画笔的字体：setFont(Font font)
  9. 设置画笔的颜色：setColor(Color c)

#### java事件处理机制

- 基本说明

  java事件处理是采取“委派事件模型”。当事件发生时，产生事件的对象，会把此“信息”传递给“事件的监听者”处理，这里所说的“信息”实际上就是 java.awt.event 事件类库里某个类所创建的对象，把它称为“事件的对象”。

- 示意图

  ![](Java基础学习笔记韩顺平/java事件处理机制示意图.png)

- 机制分析

  ![](Java基础学习笔记韩顺平/java事件处理机制分析.png)

- 事件处理机制深入理解

  1. 前面我们提到的几个重要概念：事件源、事件、事件监听器

  2. 事件源：事件源是一个产生事件的对象，比如按钮，窗口等

  3. 事件：事件就是承载事件源状态改变时的对象，比如当键盘事件、鼠标事件、窗口事件等等，会生成一个事件对象，该对象保存着当前事件很多信息，比如KeyEvent对象有含有被按下键的Code值。java.awt.event包和javax.swing.event包中定义了各种事件类型

  4. 事件类型

     ![](Java基础学习笔记韩顺平/java事件处理机制事件类型.png)

  5. 事件监听器接口：

     1. 当事件源产生一个事件，可以传送给事件监听者处理
     2. 事件监听者实际上就是一个类，该类实现了某个事件监听器接口，比如前面我们案例中的MyPanel就是一个类，它实现了KeyListener接口，它就可以作为一个事件监听者，对接受到的事件，进行处理
     3. 事件监听器接口有多种，不同的事件监听器接口可以监听不同的事件，一个类可以实现多个监听接口
     4. 这些接口在java.awt.event包和javax.swing.event包中定义。列出常用的事件监听器接口，查看jdk文档聚集了

### 线程（基础）

#### 线程介绍

- 程序：是为完成特定任务、用某种语言编写的一组指令的集合

  简单的说：就是我们写的代码

- 进程：

  1. 进程是指运行中的程序，比如我们使用QQ，就启动一个进程，操作系统就会为该进程分配内存空间。当我们使用迅雷，又启动了一个进程，操作系统将为迅雷分配新的内存空间
  2. 进程是程序的一次执行过程，或是正在运行的一个程序。是动态过程：有它自身的产生、存在和消亡的过程

- 什么是线程

  1. 线程由进程创建的，是进程的一个实体
  2. 一个进程可以拥有多个线程

- 其他相关概念

  1. 单线程：同一个时刻，只允许执行一个线程
  2. 多线程：同一个时刻，可以执行多个线程，比如：一个qq进程，可以同时打开多个聊天窗口，一个迅雷进程，可以同时下载多个文件
  3. 并发：同一个时刻，多个任务交替执行，造成一种“貌似同时”的错觉，简单的说，单核cpu实现的多任务就是并发
  4. 并行：同一个时刻，多个任务同时执行。多核cpu可以实现并行

#### 线程使用

- 创建线程的两种方式

  在java中线程来使用有两种方法

  1. 继承Thread类，重写run方法
  2. 实现Runnable接口，重写run方法

  ![](Java基础学习笔记韩顺平/线程使用两种方式.png)

- 线程应用案例1-继承Thread类

  ![](Java基础学习笔记韩顺平/线程的基本使用.png)

- 线程应用案例2-实现Runnable接口

  这里底层使用了设计模式【代理模式】

- 线程使用应用案例-多线程执行

- 继承Thread VS 实现Runnable的区别

  1. 从java的设计来看，通过继承Thread或者实现Runnable接口来创建线程本质上没有区别，从jdk帮助文档我们可以看到Thread类本身就实现了Runnable接口
  2. 实现Runnable接口方式更加适合多个线程共享一个资源的情况，并且避免了单继承的限制，建议使用Runnable

- 线程终止

  - 基本说明
    1. 当线程完成任务后，会自动退出
    2. 还可以通过使用变量来控制run方法退出的方式停止线程，即通知方式


#### 线程方法

- 常用方法第一组
  1. setName	// 设置线程名称，使之与参数name相同
  2. getName  // 返回该线程的名称
  3. start  // 使该线程开始执行；Java虚拟机底层调用该线程的start()方法
  4. run  // 调用线程对象run方法
  5. setPriority  // 更改线程的优先级
  6. getPriority  // 获取线程的优先级
  7. sleep  // 在指定的毫秒数内让当前正在执行的线程休眠（暂停执行）
  8. interrupt  // 中断线程
- 注意事项和细节
  1. start底层会创建新的线程，调用run，run就是一个简单的方法调用，不会启动新线程
  2. 线程优先级的范围
  3. interrupt，中断线程，但并没有真正的结束线程。所以一般用于中断正在休眠线程
  4. sleep：线程的静态方法，使当前线程休眠
- 常用方法第二组
  1. yield：线程的礼让。让出cpu，让其他线程执行，但礼让的时间不确定，所以也不一定礼让成功
  2. join：线程的插队。插队的线程一旦插队成功，则肯定先执行完插入的线程所有的任务
- 用户线程和守护线程
  1. 用户线程：也叫工作线程，当线程的任务执行完或通知方式结束
  2. 守护线程：一般是为工作线程服务的，当所有的用户线程结束，守护线程自动结束
  3. 常见的守护线程：垃圾回收机制

#### 线程生命周期

- JDK中用Thread.State枚举表示了线程的几种状态

  ![](Java基础学习笔记韩顺平/线程的生命周期.png)

- 线程状态转换图

  ![](Java基础学习笔记韩顺平/线程状态转换图.png)

#### Synchronized

- 线程同步机制

  1. 在多线程编程，一些敏感数据不允许被多个线程同时访问，此时就使用同步访问技术，保证数据在任何同一时刻，最多有一个线程访问，以保证数据的完整性
  2. 也可以这样理解：线程同步，即当有一个线程在对内存进行操作时，其他线程都不可以对这个内存地址进行操作，直到该线程完成操作，其他线程才能对该内存地址进行操作

- 同步具体方法

  1. 同步代码块

     ```java
     synchronized (对象){	// 得到对象的锁，才能操作同步代码
         // 需要被同步代码
     }
     ```

  2. synchronized还可以放在方法声明中，表示整个方法为同步方法

     ```java
     public synchronized void m(String name){
         // 需要被同步的代码
     }
     ```

  3. 如何理解：

     就好像某小伙伴上厕所前先把门关上（上锁），完事后再出来（解锁），那么其它小伙伴就可以在使用测试了

#### 互斥锁

- 基本介绍
  1. 在Java语言中，引入了对象互斥锁的概念，来保证共享数据操作的完整性
  2. 每个对象都应于一个可称为“互斥锁”的标记，这个标记用来保证在任一时刻，只能有一个线程访问该对象
  3. 关键字synchronized来与对象的互斥锁联系。当某个对象用synchronized修饰时，表明该对象在任一时刻只能由一个线程访问
  4. 同步的局限性：导致程序的执行效率要降低
  5. 同步方法（非静态的）的锁可以是this，也可以是其他对象（要求是同一个对象）
  6. 同步方法（静态的）的锁为当前类本身
- 注意事项和细节
  1. 同步方法如果没有使用static修饰：默认锁对象为this
  2. 如果方法使用static修饰，默认锁对象：当前类.class
  3. 实现的落地步骤
     - 需要先分析上锁的代码
     - 选择同步代码块或同步方法
     - 要求多个线程的锁对象为同一个即可！

#### 死锁

- 基本介绍

  多个线程都占用了对方的锁资源，但不肯相让，导致了死锁，在编程是一定要避免死锁的发生

- 应用案例

  妈妈：你先完成作业，才让你玩手机

  小明：你先让我玩手机，我才完成作业

- 释放锁

  - 下面操作会释放锁

    1. 当前线程的同步方法、同步代码块执行结束

       案例：上厕所，完事出来

    2. 当前线程在同步代码块、同步方法中遇到break、return

       案例：没有正常的完事，经理叫他修改bug，不得已出来

    3. 当前线程在同步代码块、同步方法中出现了未处理的Error或Exception，导致异常结束

       案例：没有正常的完事，发现忘带纸，不得已出来

    4. 当前线程在同步代码块、同步方法中执行了线程对象的wait()方法，当前线程暂停，并释放锁

       案例：没有正常完事，觉得需要酝酿下，所以出来等会再进去

  - 下面的操作不会释放锁

    1. 线程执行同步代码块或同步方法时，程序调用Thread.sleep()、Thread.yield()方法暂停当前线程的执行，不会释放锁

       案例：上厕所，太困了，在坑位上眯了一会

    2. 线程执行同步代码块时，其他线程调用了该线程的suspend()方法将该线程挂起，该线程不会释放锁

       提示：应尽量避免使用suspend()和resume()来控制线程，方法不再推荐使用

### IO流

#### 文件

- 什么是文件

  文件，对我们来说并不陌生，文件是保存数据的地方，比如大家经常使用的word文档，txt文档，excel文件...都是文件。它既可以保存一张图片，也可以保持视频，声音...

- 文件流

  文件在程序中是以流的形式来操作的

  ![](Java基础学习笔记韩顺平/文件流的形式.png)

  流：数据在数据源（文件）和程序（内存）之间经历的路径

  输入流：数据从数据源（文件）到程序（内存）的路径

  输出流：数据从程序（内存）到数据源（文件）的路径

- 创建文件对象相关构造器和方法

  - 相关方法

    ```java
    new File(String pathname)	// 根据路径创建一个File对象
    new File(File parent,String child)	// 根据父目录文件+子路径构建
    new File(String parent,String child)	// 根据父目录+子路径构建
    
    createNewFile 创建新文件
    ```

- 获取文件的相关信息

  getName、getAbsolutePath、getParent、length、exists、isFile、isDirectory

- 目录的操作和文件删除

  mkdir创建一级目录、mkdirs创建多级目录、delete删除空目录或文件

#### IO流原理及流的分类

- Java IO流原理

  1. I/O 是Input/Output的缩写，I/O技术是非常实用的技术，用于处理数据传输
  2. Java程序中，对于数据的输入/输出操作以“流（stream）”的方式进行
  3. java.io 包下提供了各种“流”类和接口，用以获取不同种类的数据，并通过方法输入或输出数据
  4. 输入input：读取外部数据（磁盘、光盘等存储设备的数据）到程序（内存）中
  5. 输出output：将程序（内存）数据输出到磁盘、光盘等存储设备中

- 流的分类

  - 按操作数据单位不同分为：字节流（8bit）二进制文件，字符流（按字符）文本文件

  - 按数据流的流向不同分为：输入流，输出流

  - 按流的角色的不同分为：节点流，处理流/包装流

    ![](Java基础学习笔记韩顺平/IO流的分类.png)

    1. Java的IO流共涉及40多个类，实际上非常规则，都是从如上4个抽象基类派生的
    2. 由这四个类派生出来的子类名称都是以其父名作为子类名后缀

- IO流体系图-常用的类

  ![](Java基础学习笔记韩顺平/IO流体系图常用的类.png)

- InputStream：字节输入流

  InputStream抽象类是所有类字节输入流的超类

  - InputStream常用的子类

    1. FileInputStream：文件输入流
    2. BufferedInputStream：缓冲字节输入流
    3. ObjectInputStream：对象字节输入流

    ![](Java基础学习笔记韩顺平/InputStream及其子类.png)

- FileOutputStream介绍

- FileReader和FileWriter介绍

  FileReader和FileWriter是字符流，即按照字符来操作IO

  - FileReader相关方法

    1. new FileReader(File/String)

    2. read：每次读取单个字符，返回该字符，如果到文件末尾返回-1

    3. read(char [])：批量读取多个字符到数组，返回读取到的字符数，如果到文件末尾返回-1

       相关API：

       1. new String(char [])：将char[] 转换成String
       2. new String(char [], off, len)：将char[]的指定部分转换成String

  - FileWriter常用方法

    1. new FileWriter(File/String)：覆盖模式，相当于流的指针在首端

    2. new FileWriter(File/String, true)：追加模式，相当于流的指针在尾端

    3. write(int)：写入单个字符

    4. write(char[])：写入指定数组

    5. write(char[], off, len)：写入指定数组的指定部分

    6. write(String)：写入整个字符串

    7. write(String, off, len)：写入字符串的指定部分

       相关API：

       String类：toCharArray：将String转换成char[]

       注意：FileWriter使用后，必须要关闭(close)或刷新(flush)，否则写入不到指定的文件！

#### 节点流和处理流

- 基本介绍

  1. 节点流可以从一个特定的数据源读写数据，如FileReader、FileWriter

     ![](Java基础学习笔记韩顺平/节点流基本介绍流程图.png)

  2. 处理流（也叫包装流）是“连接”在已存在的流（节点流或处理流）之上，为程序提供更为强大的读写功能，也更加灵活，如BufferedReader、BufferedWriter

     ![](Java基础学习笔记韩顺平/处理流基本介绍示意图.png)

- 节点流和处理流一览图

  ![](Java基础学习笔记韩顺平/节点流和处理流一览图.png)

  数据源：就是存放数据的地方

  BufferedReader类中，有属性Reader，即可以封装一个节点流，该节点流可以是任意的。只要是Reader子类

- 节点流和处理流的区别和联系

  1. 节点流是底层流/低级流，直接跟数据源相接
  2. 处理流（包装流）包装节点流，既可以消除不同节点流的实现差异，也可以提供更方便的方法来完成输入输出
  3. 处理流（也叫包装流）对节点流进行包装，使用了修饰器设计模式，不会直接与数据源相连

- 处理流的功能主要体现在以下两个方面：

  1. 性能的提高：主要以增加缓冲的方式来提高输入输出的效率
  2. 操作的便捷：处理流可能提供了一系列便捷的方法来一次输入输出大批量的数据，使用更加灵活方便

- 处理流-BufferedReader和BufferedWriter

  - BufferedReader和BufferedWriter属于字符流，是按照字符来读取数据的

  - 关闭处理流时，只需要关闭外层流即可

- 处理流-BufferedInputStream和BufferedOutputStream

  - 介绍BufferedInputStream

    BufferedInputStream是字节流，在创建BufferedInputStream时，会创建一个内部缓冲区数组

  - 介绍BufferedOutputStream

    BufferedOutputStream是字节流，实现缓冲的输出流，可以将多个字节写入底层输出流中，而不必对每次字节写入调用底层系统

- 对象流-ObjectInputStream 和 ObjectOutputStream

  - 看一个需求
    1. 将 int num = 100 这个 int 数据保存到文件中，注意不是 100 数字，而是 int 100，而且，能够从文件中直接恢复 int 100
    2. 将 Dog dog = new Dog("小黄", 3) 这个dog对象保存到文件中，并且能够从文件中恢复
    3. 上面的要求，就是能够将基本数据类型或者对象进行序列化和反序列化操作
  - 序列化和反序列化
    1. 序列化就是在保存数据时，保存数据的值和数据类型
    2. 反序列化就是在恢复数据时，恢复数据的值和数据类型
    3. 需要让某个对象支持序列化机制，则必须让其类是可序列化的，该类必须实现如下两个接口之一：
       - Serializable	// 这是一个标记接口，没有方法
       - Externalizable  // 该接口有方法需要实现，因此我们一般实现上面的 Serializable 接口
  - 基本介绍
    1. 功能：提供了对基本类型或对象类型的序列化和反序列化的方法
    2. ObjectOutputStream 提供序列化功能
    3. ObjectInputStream 提供反序列化功能
  - 注意事项和细节说明
    1. 读写顺序要一致
    2. 要求序列化或反序列化对象，需要实现 Serializable
    3. 序列化的类中建议添加SerialVersionUID，为了提高版本的兼容性
    4. 序列化对象时，默认将里面所有属性都进行序列化，但除了static或transient修饰的成员
    5. 序列化对象时，要求里面属性的类型也需要实现序列化接口
    6. 序列化具备可继承性，也就是如果某类已经实现了序列化，则它的所有子类也已经默认实现了序列化

- 标准输入输出流

  - 介绍

    |                     | 类型        | 默认设备 |
    | ------------------- | ----------- | -------- |
    | System.in 标准输入  | InputStream | 键盘     |
    | System.out 标准输出 | PrintStream | 显示器   |

  - 应用案例

    - 传统方法System.out.println(""); 是使用out对象将数据输出到显示器
    - 传统的方法，Scanner是从标准输入键盘接收数据

- 转换流-InputStreamReader 和 OutputStreamWriter

  - 介绍
    1. InputStreamReader：Reader的子类，可以将InputStream(字节流)包装成(转换)Reader(字符流)
    2. OutputStreamWriter：Writer的子类，实现将OutputStream(字节流)包装成Writer(字符流)
    3. 当处理纯文本数据时，如果使用字符流效率更高，并且可以有效解决中文问题，所以建议将字节流转换成字符流
    4. 可以在使用时指定编码格式(比如 utf-8，gbk，gb2312，ISO8859-1等)
  
- 打印流-PrintStream和PrintWriter

  打印流只有输出流，没有输入流

#### Properties类

- 基本介绍

  1. 专门用于读写配置文件的集合类

     配置文件的格式：

     键=值

     键=值

  2. 注意：键值对不需要有空格，值不需要用引号一起来，默认类型是String

  3. Properties的常用方法

     - load：加载配置文件的键值对到Properties对象

     - list：将数据显示到指定设备/流对象

     - getProperty(key)：根据键获取值

     - setProperty(key,value)：设置键值对到Properties对象

     - store：将Properties中的键值对存储到配置文件，在idea中，保存信息到配置文件，如果含有中文，会存储为unicode码

       http://tool.chinaz.com/tools/unicode.aspx unicode码查询工具

## 三、分析需求，代码实现能力

### 网络编程

#### 网络基础

- 网络通信

  1. 概念：两台设备之间通过网络实现数据传输
  2. 网络通信：将数据通过网络从一台设备传输到另一台设备
  3. java.net包下提供了一系列的类或接口，供程序员使用，完成网络通信

  ![](Java基础学习笔记韩顺平/20章/网络通信.png)

- 网络

  1. 概念：两台或多台设备通过一定物理设备连接起来构成了网络

  2. 根据网络的覆盖范围不同，对网络进行分类：

     局域网：覆盖范围最小，仅仅覆盖一个教室或一个机房

     城域网：覆盖范围较大，可以覆盖一个城市

     广域网：覆盖范围最大，可以覆盖全国，甚至全球，万维网是广域网的代表

  ![](Java基础学习笔记韩顺平/20章/网络.png)

- IP地址

  1. 概念：用于唯一标识网络中的每台计算机/主机
  2. 查看ip地址：ipconfig
  3. ip地址的表示形式：点分十进制 xx.xx.xx.xx
  4. 每一个十进制数的范围：0~255
  5. ip地址的组成=网络地址+主机地址，比如：192.168.16.69
  6. iIPv6是互联网工程任务组设计的用于替代IPv4的下一代IP协议，其地址数量号称可以为全世界的每一粒沙子编上一个地址
  7. 由于IPv4最大的问题在于网络地址资源有限，严重制约了互联网的应用和发展。IPv6的使用，不仅能解决网络地址资源数量的问题，而且也解决了多种接入设备连入互联网的障碍

- IPv4地址分类

  ![](Java基础学习笔记韩顺平/20章/IPv4地址分类.png)

- 域名

  1. www.baidu.com
  2. 好处：为了方便记忆，解决记ip的困难
  3. 概念：将ip地址映射成域名

- 端口号

  1. 概念：用于标识计算机上某个特定的网络程序
  2. 表示形式：以整数形式，端口范围0~65535
  3. 0~1024已经被占用，比如 ssh 22，ftp 21，smtp 25，http 80
  4. 常见的网络程序端口号
     - tomcat：8080
     - mysql：3306
     - oracle：1521
     - sqlserver：1433

- 网络通信协议

  - 协议（tcp/ip）

    TCP/IP(Transmission Control Protocol/Internet Protocol)的简写，中文译名为传输控制协议/因特网互联协议，又叫网络通讯协议，这个协议是Internet最基本的协议、Internet国际互联网络的基础，简单的说，就是由网络层的IP协议和传输层的TCP协议组成的

    ![](Java基础学习笔记韩顺平/20章/网络通信协议.png)

  ![](Java基础学习笔记韩顺平/20章/网络通信协议2.png)

- TCP和UDP

  - TCP协议：传输控制协议
    1. 使用TCP协议前，须先建立TCP连接，形成传输数据通道
    2. 传输前，采用“三次握手”方式，是可靠的
    3. TCP协议进行通信的两个应用进程：客户端、服务端
    4. 在连接中可进行大数据量的传输
    5. 传输完毕，需释放已建立的连接，效率低
  - UDP协议：
    1. 将数据、源、目的封装成数据包，不需要建立连接
    2. 每个数据报的大小限制在64K内
    3. 因无需连接，故是不可靠的
    4. 发送数据结束时无需释放资源（因为不是面向连接的），速度快
    5. 举例：厕所通知；发短信

#### InetAddress

- 相关方法
  1. 获取本机InetAddress对象getLocalHost
  2. 根据指定主机名/域名获取ip地址对象getByName
  3. 获取InetAddress对象的主机名getHostName
  4. 获取InetAddress对象的地址getHostAddress

#### Socket

- 基本介绍
  1. 套接字(Socket)开发网络应用程序被广泛采用，以至于成为事实上的标准
  2. 通信的两端都要有Socket，是两台机器间通信的端点
  3. 网络通信其实就是Socket间的通信
  4. Socket允许程序把网络连接当成一个流，数据在两个Socket间通过IO传输
  5. 一般主动发起通信的应用程序属客户端，等待通信请求的为服务端

![](Java基础学习笔记韩顺平/20章/Socket编程.png)

#### TCP编程

- 基本介绍

  1. 基于客户端-服务端的网络通信
  2. 底层使用的是TCP/IP协议
  3. 应用场景举例：客户端发送数据，服务端接收并显示控制台
  4. 基于Socket的TCP编程

  ![](Java基础学习笔记韩顺平/20章/TCP网络通信编程.png)

- netstat指令

  1. netstat -an 可以查看当前主机网络情况，包括端口监听情况和网络连接情况
  2. netstat -an|more 可以分页显示
  3. 要求在dos控制台下执行

  说明：

  (1)Listening表示某个端口在监听

  (2)如果有一个外部程序(客户端)连接到该端口，就会显示一条连接信息

  (3)可以输入 ctrl+c 退出指令

- TCP网络通讯不为人知的密码

  1. 当客户端连接到服务端后，实际上客户端也是通过一个端口和服务端进行通讯的，这个端口是TCP/IP来分配的，是不确定的，是随机的

#### UDP编程

- 基本介绍

  1. 类 DatagramSocket 和 DatagramPacket[数据包/数据报]实现了基于UDP协议网络程序
  2. UDP数据报通过数据报套接字 DatagramSocket 发送和接收，系统不保证UDP数据报一定能够安全送到目的地，也不能确定什么时候可以抵达
  3. DatagramPacket 对象封装了UDP数据报，在数据报中包含了发送端的IP地址和端口号以及接收端的IP地址和端口号
  4. UDP协议中每个数据报都给出了完整的地址信息，因此无须建立发送方和接收方的连接

  ![](Java基础学习笔记韩顺平/20章/UDP网络编程原理.png)

- 基本流程

  1. 核心的两个类/对象 DatagramSocket与DatagramPacket
  2. 建立发送端，接收端(没有服务端和客户端概念)
  3. 发送数据前，建立数据包/报DatagramPacket对象
  4. 调用DatagramSocket的发送、接收方法
  5. 关闭DatagramSocket

### 反射

#### 反射机制

- Java Reflection
  1. 反射机制允许程序在执行期借助于Reflection API取得任何类的内部信息（比如成员变量，构造器，成员方法等等），并能操作对象的属性及方法。反射在设计模式和框架底层都会用到
  2. 加载完类之后，在堆中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象包含了类的完整结构信息。通过这个对象得到类的结构。这个Class对象就像一面镜子，透过这个镜子看到类的结构，所以，形象的称之为：反射
  
- Java反射机制原理示意图

  ![](Java基础学习笔记韩顺平/23章/反射原理图.png)

- Java反射机制可以完成

  1. 在运行时判断任意一个对象所属的类
  2. 在运行时构造任意一个类的对象
  3. 在运行时得到任意一个类所具有的成员变量和方法
  4. 在运行时调用任意一个对象的成员变量和方法
  5. 生成动态代理

- 反射相关的主要类

  1. java.lang.Class：代表一个类，Class对象表示某个类加载后在堆中的对象
  2. java.lang.reflect.Method：代表类的方法，Method对象表示某个类的方法
  3. java.lang.reflect.Field：代表类的成员变量，Field对象表示某个类的成员变量
  4. java.lang.reflect.Constructor：代表类的构造方法，Constructor对象表示构造器

  这些类在 java.lang.reflection

- 反射的优点和缺点

  1. 优点：可以动态的创建和使用对象(也是框架底层核心)，使用灵活，没有反射机制，框架技术就失去底层支撑
  2. 缺点：使用反射基本是解释执行，对执行速度有影响

- 反射调用优化-关闭访问检查

  1. Method和Field、Constructor对象都有setAccessible()方法
  2. setAccessible作用是启动和禁用访问安全检查的开关
  3. 参数值为true表示反射的对象在使用时取消访问检查，提高反射的效率。参数值为false则表示反射的对象执行访问检查

#### Class类

- 基本介绍

  1. Class也是类，因此也继承Object类
  2. Class类对象不是new出来的，而是系统创建的
  3. 对于某个类的Class类对象，在内存中只有一份，因为类只加载一次
  4. 每个类的实例都会记得自己是由哪个Class实例所生成
  5. 通过Class对象可以完整地得到一个类地完整结构，通过一系列API
  6. Class对象是存放在堆地
  7. 类的字节码二进制数据，是放在方法区的，有的地方称为类的元数据(包括 方法代码，变量名，方法名，访问权限等待) https://www.zhihu.com/question/38496907

- Class类的常用方法：

  ![](Java基础学习笔记韩顺平/23章/Class类的常用方法.png)

- 获取Class类对象

  1. 前提：已知一个类的全类名，且该类在类路径下，可通过Class类的静态方法forName()获取，可能抛出ClassNotFoundException，实例：`Class cls1 = Class.forName("java.lang.Cat");`

     应用场景：多用于配置文件，读取类全路径，加载类

  2. 前提：若已知具体的类，通过类的class获取，该方式最为安全可靠，程序性能最高实例：`Class cls2 = Cat.class;`

     应用场景：多用于参数传递，比如通过反射得到对应构造器对象

  3. 前提：已知某个类的实例，调用该实例的getClass()方法获取Class对象，实例：`Class  clazz = 对象.getClass(); // 运行类型`

     应用场景：通过创建好的对象，获取Class对象

  4. 其他方式

     `ClassLoader cl = 对象.getClass().getClassLoader();`

     `Class clazz4 = cl.loadClass("类的全类名");`

  5. 基本数据(int, char, boolean, float, double, byte, long, short)按如下方式得到Class类对象

     `Class cls = 基本数据类型.class`

  6. 基本数据类型对应的包装类，可以通过 .TYPE 得到Class类对象

     `Class cls = 包装类.TYPE`

- 哪些类型有Class对象

  1. 外部类，成员内部类，静态内部类，局部内部类，匿名内部类
  2. interface：接口
  3. 数组
  4. enum：枚举
  5. annotation：注解
  6. 基本数据类型
  7. void

#### 类加载

- 基本说明

  反射机制是java实现动态语言的关键，也就是通过反射实现类动态加载

  1. 静态加载：编译时加载相关的类，如果没有则报错，依赖性太强
  2. 动态加载：运行时加载需要的类，如果运行时不用该类，即使不存在该类，也不报错，降低了依赖性

- 类加载时机

  1. 当创建对象时(new) // 静态加载
  2. 当子类被加载时，父类也加载 // 静态加载
  3. 调用类中的静态成员时 // 静态加载
  4. 通过反射 // 动态加载

- 类加载过程图

  ![](Java基础学习笔记韩顺平/23章/类加载过程图.png)

- 类加载各阶段完成任务

  ![](Java基础学习笔记韩顺平/23章/类加载各阶段完成任务.png)

  - 加载阶段

    JVM在该阶段的主要目的是将字节码从不同的数据源(可能是class文件、也可能是jar包，甚至网络)转化为二进制字节流加载到内存中，并生成一个代表该类的 java.lang.Class 对象

  - 连接阶段-验证

    1. 目的是为了确保Class文件的字节流中包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身的安全
    2. 包括：文件格式验证(是否以魔数 oxcafebabe开头)、元数据验证、字节码验证和符号引用验证
    3. 可以考虑使用 -Xverify:none 参数来关闭大部分的类验证措施，缩短虚拟机类加载的时间

  - 连接阶段-准备

    1. JVM会在该阶段对静态变量，分配内存并默认初始化(对应数据类型的默认初始值，如 0、0L、null、false 等)。这些变量所使用的内存都将在方法区中进行分配

  - 连接阶段-解析

    1. 虚拟机将常量池内的符号引用替换为直接引用的过程

  - 初始化阶段

    1. 到初始化阶段，才真正开始执行类中定义的Java程序代码，此阶段是执行 \<clinit\>() 方法的过程
    2.  \<clinit\>() 方法是由编译器按语句在源文件中出现的顺序，依次自动收集类中的所有静态变量的赋值动作和静态代码块中的语句，并进行合并。
    3. 虚拟机会保证一个类的\<clinit\>() 方法在多线程环境中被正确地加锁、同步，如果多个线程同时去初始化一个类，那么只会有一个线程去执行这个类的\<clinit\>() 方法，其他线程都需要阻塞等待，直到活动线程执行\<clinit\>() 方法完毕。

#### 反射获取类的结构信息

- 第一组：java.lang.Class类

  1. getName：获取全类名
  2. getSimpleName：获取简单类名
  3. getFields：获取所有public修饰的属性，包含本类以及父类的
  4. getDeclaredFields：获取本类中所有属性
  5. getMethods：获取所有public修饰的方法，包含本类以及父类的
  6. getDeclaredMethods：获取本类中所有方法
  7. getConstructors：获取本类所有public修饰的构造器
  8. getDeclaredConstructors：获取本类中所有构造器
  9. getPackage：以Package形式返回包信息
  10. getSuperClass：以Class形式返回父类信息
  11. getInterfaces：以Class[]形式返回接口信息
  12. getAnnotations：以Annotation[]形式返回注解信息

- 第二组：java.lang.reflect.Field类

  1. getModifiers：以int形式返回修饰符

     [说明：默认修饰符是0，public 是1，private是2，protected是4，static是8，final是16]，public+static=9

  2. getType：以Class形式返回类型

  3. getName：返回属性名

- 第三组：java.lang.reflect.Method类

  1. getModifiers：以int形式返回修饰符

     [说明：默认修饰符是0，public 是1，private是2，protected是4，static是8，final是16]

  2. getReturnType：以Class形式获取返回类型

  3. getName：返回方法名

  4. getParameterTypes：以Class[]返回参数类型数组

- 第四组：java.lang.reflect.Constructor类

  1. getModifiers：以int形式返回修饰符
  2. getName：返回构造器名(全类名)
  3. getParameterTypes：以Class[]返回参数类型数组

- 通过反射创建对象

  1. 方式一：调用类中的public修饰的无参构造器
  2. 方式二：调用类中的指定构造器
  3. Class类相关方法
     - newInstance：调用类中的无参构造器，获取对应类的对象
     - getConstructor(Class...clazz)：根据参数列表，获取对应的public构造器对象
     - getDecalaredConstructor(Class...clazz)：根据参数列表，获取对应的所有构造器对象
  4. Constructor类相关方法
     - setAccessible：暴破
     - newInstance(Object...obj)：调用构造器

- 通过反射访问类中的成员

  - 访问属性

    1. 根据属性名获取Field对象

       `Field f= clazz对象.getDeclaredField(属性名);`

    2. 暴破：f.setAccessible(true); // f是Field

    3. 访问

       f.set(o,值);

       syso(f.get(o))

    4. 如果是静态属性，则set和get中的参数o，可以写成null

  - 访问方法

    1. 根据方法名和参数列表获取Method方法对象：`Method m = clazz.getDeclaredMethod(方法名,XX.class); // 得到本类的所有方法`
    2. 获取对象：`Object o = clazz.newInstance();`
    3. 暴破：`m.setAccessible(true);`
    4. 访问：`Object returnValue = m.invoke(o,实参列表);`
    5. 注意：如果是静态方法，则invoke的参数o，可以写成null

### MySql基础

#### 数据库

- 数据库三层结构-破除MySQL神秘

  1. 所谓安装Mysql数据库，就是在主机安装一个数据库管理系统(DBMS)，这个管理程序可以管理多个数据库。DBMS(database manage system)
  2. 一个数据库中可以创建多个表，以保存数据(信息)
  3. 数据库管理系统(DBMS)、数据库和表的关系如图所示

  ![](Java基础学习笔记韩顺平/MySQL/数据库三层结构.png)

- 数据在数据库中的存储方式

  ![](Java基础学习笔记韩顺平/MySQL/数据在数据库中的存储方式.png)

- SQL语句分类

  - DDL：数据定义语句 【create表，库..】
  - DML：数据操作语句【增加 insert，修改 update，删除 delete''】
  - DQL：数据查询语句【select】
  - DCL：数据控制语句【管理数据库：比如用户权限 grant revoke】

- 创建数据库

  ![](Java基础学习笔记韩顺平/MySQL/创建数据库.png)

  1. CHARCTER SET：指定数据库采用的字符集，如果不指定字符集，默认utf8
  2. COLLATE：指定数据库字符集的校队规则(常用的 utf8_bin、utf8_general_ci (不区分大小写)注意默认是 utf8_general_ci)

  在创建数据库，表的时候，为了规避关键字，可以使用

  `create database 'create'`

- 查看、删除数据库

  ![](Java基础学习笔记韩顺平/MySQL/查看、删除数据库.png)

- 备份恢复数据库

  - 备份数据库(注意：在DOS执行)

    mysqldump -u 用户名 -p -B 数据库1 数据库2 数据库n > 文件名.sql

  - 恢复数据库(注意：进入Mysql命令行再执行)

    Source 文件名.sql

#### 表

- 创建表

  ![](Java基础学习笔记韩顺平/MySQL/创建表.png)

  注意：创建表时，要根据需保存的数据创建相应的列，并根据数据的类型定义相应的列类型

- 修改表

  - 基本介绍

    使用ALTER TABLE 语句追加，修改，或删除列的语法

    ```mysql
    ALTER TABLE tablename ADD(column datatype [DEFAULT expr][,column datatype]...);
    
    ALTER TABLE tablename MODIFY(column datatype [DEFAULT expr][,column datatype]...);
    
    ALTER TABLE tablename DROP(column);
    ```

    查看表的结构： desc 表名;

    修改表名：Rename table 表名 to 新表名

    修改表字符集：alter table 表名 character set 字符集;

#### Mysql数据类型

Mysql常用数据类型(列类型)

![](Java基础学习笔记韩顺平/MySQL/Mysql常用数据类型.png)

- 数值型(整数)的基本使用

  1. 说明，使用规范：在能够满足需求的情况下，尽量选择占用空间小的类型

     ![](Java基础学习笔记韩顺平/MySQL/整数的基本使用说明.png)

  2. 如何定义一个无符号的整数

     ```mysql
     create table t10(id tinyint);	// 默认是有符号的
     create table t11(id tinyint unsigned);	// 无符号的
     ```

- 数值型(bit)的使用

  1. 基本使用

     ```mysql
     mysql > create table t02(num bit(8));
     mysql > insert into t02(1,3);
     mysql > insert into t02 values(2,65);
     ```

  2. 细节说明

     - bit 字段显示时，按照位的方式显示
     - 查询的时候仍然可以用使用添加的数值
     - 如果一个值只有0，1可以考虑使用bit(1)，可以节约空间
     - 位类型。M指定位数，默认值1，范围1-64
     - 使用不多

- 数值型(小数)的基本使用

  1. FLOAT/DOUBLE[UNSIGNED]

     Float 单精度密度，Double双精度

  2. DECIMAL[M,D]\[UNSIGNED\]

     - 可以支持更加精确的小数位。M是小数位数(精度)的总数，D是小数点(标度)后面的位数
     - 如果D是0，则值没有小数点或分数部分。M最大65。D最大是30。如果D被省略，默认是0。如果M被省略，默认是10
     - 建议：如果希望小数的精度高，推荐使用decimal

- 字符串的基本使用

  - CHAR(size)

    固定长度字符串，最大255字符

  - VARCHAR(size) 0-65535

    可变长度字符串，最大65532字节【utf8编码最大21844字符，1-3个字节用于记录大小】

  - 应用案例

    ```mysql
    create table t15(name char(255)) character set utf8;
    create table t16(name,varchar(21844)) character set utf8;
    ```

- 字符串使用细节

  1. 细节1

     char(4)	// 这个4表示字符数(最大255)，不是字节数，不管是中文还是字母都是放四个，按字符计算

     varchar(4)	// 这个4表示字符数，不管是字母还是中文都以定义好的表的编码来存放数据

     不管是中文还是英文字母，都是最多存放4个，是按照字符来存放的

  2. 细节2

     char(4)是定长，就是说，即使你插入'aa'，也会占用分配的4个字符。

     varchar(4)是变长，就是说，如果你插入了'aa'，实际占用空间大小并不是4个字符，而是按照实际占用空间来分配(说明：varchar本身还需要占用1-3个字节来记录存放内容长度) L(实际数据大小)+(1~3)字节

  3. 细节3

     什么时候使用char，什么时候使用varchar

     1. 如果数据是定长，推荐使用char，比如md5的密码，邮编，手机号，身份证号码等。char(32)
     2. 如果一个字段的长度是不确定，我们使用varchar，比如留言，文章

     查询速度：char > varchar

  4. 细节4

     在存放文本时，也可以使用Text数据类型，可以将TEXT列视为VARCHAR列，注意Text不能有默认值。大小0-2^16字节。

     如果希望存放更多字符，可以选择MEDIUMTEXT 0-2^24或者LONGTEXT 0-2^32

- 日期类型的基本使用

  ```mysql
  create table birthday(
  	t1 DATE,
  	t2 DATETIME,
  	t3 TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
  timestamp 时间戳
  mysql > INSERT INTO birthday(t1,t2) VALUES('2022-11-11','2022-11-11 10:10:10');
  ```

- 日期类型的细节说明

  TimeStamp在Insert和update时，自动更新

#### CRUD

- Insert语句

  - 使用INSERT语句向表中插入数据

  ```mysql
  INSERT INTO table_name[(column[,column...])] VALUES(value[,value...]);
  ```

  - 细节说明
    1. 插入的数据应与字段的数据类型相同。比如把'abc'添加到int类型会错误
    2. 数据的长度应在列的规定范围内，例如：不能将一个长度为80的字符串加入到长度为40的列中
    3. 在values中列出的数据位置必须与被加入的列的排列位置相对应。
    4. 字符和日期型数据应包含在单引号中。
    5. 列可以插入空值【前提是该字段允许为空】，insert into table value(null)
    6. insert into tab_name(列名...) values (),(),()形式添加多条记录
    7. 如果是给表中的所有字段添加数据，可以不写前面的字段名称
    8. 默认值的使用，当不给某个字段值时，如果有默认值就会添加，否则报错

- Update语句

  - 使用update语句修改表中数据

    ```mysql
    UPDATE tbl_name SET col_name=exprl[,col_name2=expr2...][WHERE where_definition]
    ```

  - 使用细节

    1. UPDATE语法可以用新值更新原有表行中的各列
    2. SET子句指示要修改哪些列和要给予哪些值
    3. WHERE子句指定应更新哪些行。如没有WHERE子句，则更新所有的行
    4. 如果需要修改多个字段，可以通过 set 字段1=值1，字段2=值2...

- Delete语句

  - 使用delete语句删除表中数据

    ```mysql
    delete from tbl_name[WHERE where_definition]
    ```

  - 使用细节

    1. 如果不使用where子句，将删除表中所有数据
    2. Delete语句不能删除某一列的值（可使用update设为null或者''）
    3. 使用delete语句仅删除记录，不删除表本身。如要删除表，使用drop table语句。drop table 表名;

- Select语句

  - 基本语法

    ```mysql
    SELECT [DISTINCT]*|{column1,column2,column3...} FROM tablename;
    ```

  - 注意事项

    1. Select 指定查询哪些列的数据
    2. column指定列名
    3. *号代表查询所有列
    4. From指定查询哪些表
    5. DISTINCT可选，指显示结果时，是否去掉重复数据

  - 使用表达式对查询的列进行运算

    ```mysql
    SELECT *|{column1|expression, column2|expression,...} FROM tablename;
    ```

  - 在select语句中可使用as语句

    ```mysql
    SELECT columnname as 别名 from 表名;
    ```

  - 在where子句中经常使用的运算符

    ![](Java基础学习笔记韩顺平/MySQL/select语句where子句运算符.png)

  - 使用order by子句排序查询结果

    ```mysql
    SELECT column1,column2,column3.. FROM table; order by column asc|desc, ...
    ```

    1. Order by 指定排序的列，排序的列既可以是表中的列名，也可以是select语句后指定的列名
    2. Asc升序[默认]、Desc降序
    3. ORDER BY 子句应位于SELECT语句的结尾

- mysql查询-加强

  - 使用where子句

  - 如何使用like操作符

  - 分页查询

    - 基本语法：select... limit start, rows

      表示从start+1行开始取，取出rows行，start从0开始计算

    - 公式

      ```mysql
      select * from emp order by empno LIMIT 每页显示记录数 * (每几页-1). 每页显示记录数
      ```

  - 使用分组函数和分组子句group by

  - 数据分组的总结

    如果select语句同时包含有group by，having，limit，order by那么他们的顺序是group by，having，order by

    ```mysql
    SELECT column1,column2,column3... FROM table group by column having condition order by column limit start,rows;
    ```

  - 查看表结构

    desc 表名

- mysql多表查询

  - 说明

    多表查询是指基于两个和两个以上的表查询。在实际应用中，查询单个表可能不能满足你的需求。

    在默认情况下：当两个表查询时，规则

    1. 从第一张表中，取出一行和第二章表的每一行进行组合，返回结果【含有两张表的所有列】
    2. 一共返回的记录数，第一张表行数*第二张表行数
    3. 这样多表查询默认处理返回的结果，称为笛卡尔集
    4. 解决这个多表的关键就是要写出正确的过滤条件where

    小技巧：多表查询的条件不能少于表的个数-1，否则会出现笛卡尔集

  - 自连接

    自连接是指在同一张表的连接查询【将同一张表看做两张表】

    特点：

    1. 把同一张表当做两张表使用
    2. 需要给表取别名——表名 表别名
    3. 列名不明确，可以指定列的别名——列名 as 列的别名

- mysql表子查询

  - 什么是子查询

    子查询是指嵌入在其它sql语句中的select语句，也叫嵌套查询

  - 单行子查询

    单行子查询是指只返回一行数据的子查询语句

  - 多行子查询

    多行子查询指返回多行数据的子查询 使用关键字 in

  - 子查询当做临时表使用

  - 在多行子查询中使用all操作符

  - 在多行子查询中使用any操作符

  - 多列子查询

    多列子查询则是指查询返回多个列数据的子查询语句

    (字段1，字段2)=(select 字段1，字段2 from ...)

  - 在from子句中使用子查询

- 表复制

  - 自我复制数据

    有时，为了对某个sql语句进行效率测试，我们需要海量数据时，可以使用此法为表创建海量数据

    ```mysql
    create table my_tab02 like emp;	// 这个语句把emp表的结构(列),复制到my_tab02
    ```

- 合并查询

  - 介绍

    有时在实际应用中，为了合并多个select语句的结果，可以使用集合操作符号union，union all

    1. union all

       该操作用于取得两个结果集的并集。当使用该操作符时，不会取消重复行

       ```mysql
       select ename,sal,job from emp where sal>2500 union select ename,sal,job from emp where job='MANAGER';
       ```

    2. union

       该操作与union all相似，但是会自动去掉结果集中重复行

       ```mysql
       select ename,sal,job from emp where sal>2500 union all select ename,sal,job from emp where job='manager';
       ```


#### 函数

- 统计函数

  - 合计/统计函数-count

    Count返回行的总数

    ```mysql
    Select count(*)|count(列名) from tablename [WHERE where_definition]
    ```

    count(*)和count(列)的区别

    - count(*)：返回满足条件的记录的行数
    - count(列)：统计满足条件的某列有多少个，但是会排除为null的情况

  - 合计函数-sum

    Sum函数返回满足where条件的行的和-一般使用在数值列

    ```mysql
    Select sum(列名){,sum(列名)...} from tablename [WHERE where_definition]
    ```

    注意：sum仅对数值起作用，否则会报错

    注意：对多列求和，","号不能少

  - 合计函数-avg

    AVG函数返回满足where条件的一列的平均值

    ```mysql
    Select avg(列名){,avg(列名)...} from tablename [WHERE where_definition]
    ```

  - 合计函数-Max/min

    Max/min函数返回满足where条件的一列的最大/最小值

    ```mysql
    Select max(列名) from tablename [WHERE where_definition]
    ```

  - 使用group by子句对列进行分组

    ```mysql
    SELECT column1,column2,column3... FROM table group by column
    ```

    group by用于对查询的结果分组统计

  - 使用having子句对分组后的结果进行过滤

    ```mysql
    SELECT column1,column2,column3... FROM table group by column having...
    ```

    having子句用于限制分组显示结果

- 字符串函数

  插入

  ![](Java基础学习笔记韩顺平/MySQL/字符串相关函数.png)

  dual，亚元表，系统表可以作为测试表使用

- 数学函数

  ![](Java基础学习笔记韩顺平/MySQL/数学相关函数.png)

- 时间日期

  ![](Java基础学习笔记韩顺平/MySQL/时间日期相关函数.png)

  细节说明

  1. DATE_ADD() 中的interval后面可以是year minute second day等
  2. DATE_SUB() 中的interval后面可以是year minute second hour day等
  3. DATEIFF(date1,date2)得到的是天数，而且是date1-date2的天数，因此可以取负数
  4. 这四个函数的日期类型可以是date，datetime或者timestamp

  unix_timestamp()：返回的是1970-1-1 到现在的秒数

  FROM_UNIXTIME()：可以把一个unix_timestamp秒数，转成指定格式的日期

- 加密和系统函数

  ![](Java基础学习笔记韩顺平/MySQL/加密和系统函数.png)

- 流程控制

  ![](Java基础学习笔记韩顺平/MySQL/流程控制函数.png)

#### 外连接

- 提出问题
  1. 前面我们学习的查询，是利用where子句对两张表或者多张表，形成的笛卡尔积进行筛选，根据关联条件，显示所有匹配的记录，匹配不上的，不显示
  
- 外连接
  1. 左外连接（如果左侧的表完全显示我们就说是左外连接）
  
     ```mysql
     select ... from 表1 left join 表2 on 条件[表1:就是左表 表2:就是右表]
     ```
  
  2. 右外连接（如果右侧的表完全显示我们就说是右外连接）
  
     ```mysql
     select ... from 表1 left join 表2 on 条件[表1:就是左表 表2:就是右表]
     ```

#### 约束

- 基本介绍

  约束用于确保数据库的数据满足特定的商业规则。在mysql中，约束包括：not null、unique、primary key、foreign key和check五种

- primary key(主键)-基本使用

  ```mysql
  字段名 字段类型 primary key
  ```

  用于唯一的标示表行的数据，当定义主键约束后，该列不能重复

- primary key(主键)-细节说明

  1. primary key不能重复而且不能为null。
  2. 一张表最多只能有一个主键，但可以是复合主键
  3. 主键的指定方式有两种
     - 直接在字段名后指定：字段名 primary key
     - 在表定义最后写 primary key(列名);
  4. 使用desc表名，可以看到primary key的情况

- not null(非空)

  如果在列上定义了not null，那么当播入数据时，必须为列提供数据

  ```mysql
  字段名 字段类型 not null
  ```

- unique(唯一)

  当定义了唯一约束后，该列值是不能重复的

  ```mysql
  字段名 字段类型 unique
  ```

  细节

  1. 如果没有指定not null，则unique字段可以有多个null
  2. 一张表可以有多个unique字段

- foreign key(外键)

  用于定义主表和从表之间的关系：外键约束要定义在从表上，主表则必须具有主键约束或者是unique约束后，当定义外键约束后，要求外键列数据必须在主表的主键列存在或是为null(学生/班级)

  ```mysql
  FOREIGN KEY(本表字段名) REFERENCES 主表名(主键名或unique字段名)
  ```

  细节说明

  1. 外键指向的表的字段，要求是primary key 或者是unique
  2. 表的类型是innodb，这样的表才支持外键
  3. 外键字段的类型要和主键字段的类型一致(长度可以不同)
  4. 外键字段的值，必须在主键字段中出现过，或者为null【前提是外键字段允许为null】
  5. 一旦建立主外键的关系，数据不能随意删除了

- check

  用于强制行数据必须满足的条件，假定在sal列上定义了check约束，并要求sal列值在1000~2000之间如果不再1000~2000之间就会提示出错

  oracle 和 sql server均支持check，但是mysql5.7目前还不支持check，只做语法校验，但不会生效

  ```mysql
  基本语法：列名 类型 check (check条件) user表
  id, name, sex(man,woman), sal(大于100小于900)
  ```

  在mysql中实现check的功能，一般是在程序中控制，或者通过触发器完成

- 自增长

  - 基本介绍

    在某张表中，存在一个id列(整数)，我们希望在添加记录的时候，该列从1开始，自动的增长。

    ```mysql
    字段名 整型 primary key auto_increment
    添加 自增长的字段方式
    insert into xxx(字段1, 字段2) values(null, '值'......);
    insert into xxx(字段2......) values('值1', '值2'......);
    insert into xxx values(null, '值1'......);
    ```

  - 自增长使用细节

    1. 一般来说自增长是和primary key配合使用的
    2. 自增长也可以单独使用【但是需要配合一个unique】
    3. 自增长修饰的字段为整数型的(虽然小数也可以但是非常非常少这样使用)
    4. 自增长默认从1开始，你也可以通过如下命令修改alter table 表名 auto_increment = xxx;
    5. 如果你添加数据时，给自增长字段(列)指定的有值，则以指定的值为准。如果指定了自增长，一般来说，就按照自增长的规则来添加数据


#### 索引

说起提高数据库性能，索引是最物美价廉的东西了。不用加内存，不用改程序，不用调sql，查询速度就可能提高百倍千倍。

- 索引的原理

  没有索引为什么会慢？因为全表扫描

  使用索引为什么会快？形成一个索引的数据结构，比如二叉树

- 索引的代价

  1. 磁盘占用
  2. 对dm(update delete insert)语句的效率影响

- 索引的类型

  1. 主键索引，主键自动的为主索引(类型Primary)

  2. 唯一索引(UNIQUE)

  3. 普通索引(INDEX)

  4. 全文索引(FULLTEXT)【适用于MyISAM】

     一般开发，不使用mysql自带的全文索引，而是使用：全文搜索Solr和ElasticSearch(ES)

- 索引使用

  1. 添加索引(建小麦测试 id，name)

     ```mysql
     create [UNIQUE] index index_name on tbl_name(col_name[(length)][ASC|DESC],......);
     alter table table_name ADD INDEX[index_name](index_col_name,...);
     ```

  2. 添加主键(索引)

     ```mysql
     ALTER TABLE 表名 ADD PRIMARY KEY(列名,...);
     ```

  3. 删除索引

     ```mysql
     DROP INDEX index_name ON tbl_name;
     alter table table_name drop index index_name;
     ```

  4. 删除主键索引 比较特别：

     ```mysql
     alter table t_b drop primary key;
     ```

  5. 查询索引(三种方式)

     ```mysql
     show index(es) from table_name;
     show keys from table_name;
     desc table_Name;
     ```

- 小结：哪些列适合使用索引

  1. 较频繁的作为查询条件字段应该创建索引
  2. 唯一性太差的字段不适合单独创建索引，即使频繁作为查询条件
  3. 更新非常频繁的字段不适合创建索引
  4. 不会出现在WHERE子句中字段不该创建索引

#### 事务

- 什么是事务

  事务用于保证数据的一致性，它由一组相关的dml语句组成，该组的dml语句要么全部成功，要么全部失败。如：转账就要用事务来处理，用以保证数据的一致性。

- 事务和锁

  当执行事务操作时(dml语句)，mysql会在表上加锁，防止其它用户改表的数据。这对用户来讲是非常重要的。

  mysql数据库控制台事务的几个重要操作(基本操作)

  1. start transaction——开始一个事务
  2. savepoint保存点名——设置保存点
  3. rollback to保存点名——回退事务
  4. rollback——回退全部事务
  5. commit——提交事务，所有的操作生效，不能回退

  细节：

  1. 没有设置保存点
  2. 多个保存点
  3. 存储引擎
  4. 开始事务方式

- 回退事务

  在介绍回退事务前，先介绍一下保存点(savepoint)。保存点是事务中的点。用于取消部分事务，当结束事务时，会自动地删除该事务所定义地所有保存点。

  当执行回退事务时，通过指定保存点可以回退到指定地点，这里我们作图说明

- 提交事务

  使用commit语句可以提交事务。当执行了commit语句子后，会确认事务地变化、结束事务、删除保存点、释放锁，数据生效。当使用commit语句结束事务子后，其它会话【其它连接】将可以查看到事务变化后地新数据【所有数据就正式生效】。

- 事务细节讨论

  1. 如果不开始事务，默认情况下，dml操作是自动提交地，不能回滚
  2. 如果开始一个事务，你没有创建保存点。你可以执行rollback，默认就是回退到你事务开始地状态
  3. 你也可以在这个事务中(还没有提交时)，创建多个保存点。比如：savepoint aaa; 执行 dml，savepoint bbb;
  4. 你可以在事务没有提交前，选择回退到哪个保存点
  5. mysql的事务机制需要innodb的存储引擎还可以使用，myisam不好使。
  6. 开始一个事务 start transaction，set autocommit=off;

- 事务隔离级别介绍

  1. 多个连接开启各自事务操作数据库中数据时，数据库系统要负责隔离操作，以保证各个连接在获取数据时的准确性。
  2. 如果不考虑隔离性，可能会引发如下问题：
     - 脏读
     - 不可重复读
     - 幻读

- 查看事务隔离级别

  查看当前会话隔离级别 select @@tx_isolation

  脏读(dirty read)：当一个事务读取另一个事务尚未提交的修改时，产生脏读

  不可重复读(nonrepeatable read)：同一查询在同一事务中多次进行，由于其他提交事务所做的修改或删除，每次返回不同的结果集，此时发生不可重复读。

  幻读(phantom read)：同一查询在同一事务中多次进行，由于其他提交事务所做的插入操作，每次返回不同的结果集，此时发生幻读

- 事务隔离级别

  概念：Mysql隔离级别定义了事务与事务之间的隔离程度

  ![](Java基础学习笔记韩顺平/MySQL/事务隔离级别.png)

  说明：√可能出现 ×不会出现

  1. 查看当前会话隔离级别

     `select @@transaction_isolation;`

  2. 查看系统当前隔离级别

     `select @@global.transaction_isolation;`

  3. 设置当前会话隔离级别

     `set session transaction isolation level repeatable read;`

  4. 设置系统当前隔离级别

     `set global transaction isolation level repeatable read;`

  5. mysql默认的事务隔离级别是repeatable read，一般情况下，没有特殊要求，没有必要修改(因为该级别可以满足绝大部分项目需求)

  全局修改，修改mysql.ini配置文件，在最后加上

  #可选参数有：

  ```mysql
  READ-UNCOMMITTED,READ-COMMITTED,REPEATABLE-READ,SERIALIZABLE
  [mysqlId]
  transaction-isolation = REPEATABLE-READ
  ```

- mysql事务ACID

  - 事务的acid特性

    1. 原子性(Atomicity)

       原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生

    2. 一致性(Consistency)

       事务必须使数据库从一个一致性状态变换到另外一个一致性状态

    3. 隔离性(Isolation)

       事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离

    4. 持久性(Durability)

       持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影

- mysql表类型和存储引擎

  - 基本介绍

    1. MySQL的表类型由存储引擎(Storage Engines)决定，主要包括MyISAM、innoDB、Memory等。
    2. MySQL数据表主要支持六种类型，分别是：CSV、Memory、ARCHIVE、MRG_MYISAM、MYISAM、InnoBDB。
    3. 这六种又分为两类，一类是"事务安全型"(transaction-safe)，比如：InnoDB；其余都属于第二类，称为"非事务安全型"(non-transaction-safe)[mysiam 和 memory]

    显示当前数据库支持的存储引擎：show engines;

  - 主要的存储引擎/表类型特点

    ![](Java基础学习笔记韩顺平/MySQL/mysql主要存储引擎表类型特点.png)

  - 细节说明

    我这里重点给大家介绍三种：MyISAM、InnoDB、MEMORY

    1. MyISAM不支持事务、也不支持外键，但其访问速度快，对事务完整性没有要求
    2. InnoDB存储引擎提供了具有提交、回滚和崩溃恢复能力的事务安全。但是比起MyISAM存储引擎，InnoDB写的处理效率差一些并且会占用更多的磁盘空间以保留数据和索引
    3. MEMORY存储引擎使用存在内存中的内容来创建表。每个MEMORY表只实际对应一个磁盘文件。MEMORY类型的表访问非常得快，因为它的数据是放在内存中的，并且默认使用HASH索引。但是一旦MySQL服务关闭，表中的数据就会丢失掉，表的结构还在。

  - 如何选择表的存储引擎

    1. 如果你的应用不需要事务，处理的只是基本的CRUD操作，那么MyISAM是不二选择，速度快
    2. 如果需要支持事务，选择InnoDB。
    3. Memory存储引擎就是将数据存储在内存中，由于没有磁盘I/O的等待，速度极快。但由于是内存存储引擎，所做的任何修改在服务器重启后都将消失(经典用法 用户的在线状态().)

  - 修改存储引擎

    `alter table '表名' engine = 储存引擎;`

#### 视图

- 基本概念

  1. 视图是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含列，其数据来自对应的真实表(基表)
  2. 视图和基表关系的示意图

  对视图的总结

  1. 视图是根据基表(可以是多个基表)本来创建的，视图是虚拟的表
  2. 视图也有列，数据来自基表
  3. 通过视图可以修改基表的数据
  4. 基本的改变，也会影响到视图的数据

- 视图的基本使用

  1. create view 视图名 as select语句
  2. alter view 视图名 as select语句
  3. show create view 视图名
  4. drop view 视图名1，视图名2

- 视图细节讨论

  1. 创建视图后，到数据库去看，对应视图只有一个视图结构文件(形式：视图名.frm)
  2. 视图的数据变化会影响到基表，基表的数据变化也会影响到视图[insert update delete]
  3. 视图中可以再使用视图，数据仍然来自基表

- 视图最佳实践

  1. 安全。一些数据表有着重要的信息。有些字段是保密的，不能让用户直接看到。这时就可以创建一个视图，在这张视图中只保留一部分字段。这样，用户就可以查询自己需要的字段，不能查看保密的字段。
  2. 性能。关系数据库的数据常常会分表存储，使用外键建立这些表的之间关系。这时，数据库查询通常会用到连接(JOIN)。这样做不但麻烦，效率相对也比较低。如果建立一个视图，将相关的表和字段组合在一起，就可以避免使用JOIN查询数据。
  3. 灵活。如果系统中有一张旧的表，这张表由于设计的问题，即将被废弃。然而，很多应用都是基于这张表，不易修改。这时就可以建立一张视图，视图中的数据直接映射到新建的表。这样，就可以少做很多改动，也达到了升级数据表的目的。

#### MySQL管理

- MySQL用户

  mysql中的用户，都存储在系统数据库mysql中user表中

  ![](Java基础学习笔记韩顺平/MySQL/mysql用户.png)

  其中user表的重要字段说明：

  1. host：允许登录的"位置"，localhost表示该用户只允许本机登录，也可以指定ip地址，比如：192.168.1.100
  2. user：用户名
  3. authentication_string：密码，是通过mysql的password()函数加密之后的密码

  - 创建用户

  ```mysql
  create user `用户名`@`允许登录位置` identified by `密码`
  ```

  说明：创建用户，同时指定密码

  - 删除用户

  ```mysql
  drop user `用户名`@`允许登录位置`;
  ```

  - 用户修改密码

  修改自己的密码：

  set password = password("密码");

  修改他人的密码(需要有修改用户密码权限)：

  set password for \`用户名\`@\`登录位置\` = password("密码");

- MySQL中的权限

  ![](Java基础学习笔记韩顺平/MySQL/mysql中权限.png)

  - 给用户授权

  ![](Java基础学习笔记韩顺平/MySQL/mysql用户授权.png)

  - 回收用户授权

    基本语法：

    ```mysql
    revoke 权限列表 on 库.对象名 from '用户名'@'登录位置';
    ```

  - 权限生效指令

    如果权限没有生效，可以执行下面命令。

    基本语法：

    ```mysql
    FLUSH PRIVILEGES;
    ```

- MySQLZ用户管理细节说明

  1. 在创建用户的时候，如果不指定Host，则为%，%表示所有IP都有连接权限 create user xxx;

  2. 你也可以这样指定

     create user 'xxx'@'192.168.1.%'表示xxx用户在192.168.1.*的ip可以登录mysql

  3. 在删除用户的时候，如果host不是%，需要明确指定'用户'@'host值'

### JDBC和连接池

#### JDBC概述

- 基本介绍

  1. JDBC为访问不同的数据库提供了统一的接口，为使用者屏蔽了细节问题

  2. Java程序员使用JDBC，可以连接任何提供了JDBC驱动程序的数据库系统，从而完成对数据库的各种操作

  3. JDBC的基本原理图

     ![](Java基础学习笔记韩顺平/JDBC/jdbc原理示意图.png)

  4. 模拟JDBC

- JDBC带来的好处

  1. 如果Java直接访问数据库

     ![](Java基础学习笔记韩顺平/JDBC/JDBC带来的好处1.png)

  2. JDBC带来的好处

     ![](Java基础学习笔记韩顺平/JDBC/JDBC带来的好处2.png)

  3. 说明:JDBC是Java提供一套用于数据库操作的接口API，Java程序员只需要面向这套接口编程即可。不同的数据库厂商，需要针对这套接口，提供不同实现

- JDBC API

  JDBC API是一系列的接口，它统一和规范了应用程序与数据库的连接、执行SQL语句，并得到返回结果等各类操作，相关类和接口在java.sql与javax.sql包中

  ![](Java基础学习笔记韩顺平/JDBC/JDBC概述API.png)

#### JDBC快速入门

- JDBC程序编写步骤

  1. 注册驱动 - 加载Driver类
  2. 获得连接 - 得到Connection
  3. 执行增删改查 - 发送SQL给mysql执行
  4. 释放资源 - 关闭相关连接

- 获取数据库连接5种方式

  - 方式1

    ```java
    // 获取Driver实现类对象
    Driver driver = new com.mysql.jdbc.Driver();
    
    String url = "jdbc:mysql://localhost:3306/hsp_db02?useSSL=false&serverTimezone=UTC";
    
    Properties info = new Properties();
    info.setProperty("user","root");
    info.setProperty("password","root");
    Connection conn = driver.connect(url,info);
    System.out.println(conn);
    ```

  - 方式2

    ```java
    // 方式1 会直接使用 com.mysql.jdbc.Driver(),属于静态加载，灵活性差，依赖强
    // ---推出--->方式2
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
    Driver driver = (Driver)clazz.newInstance();
    
    String url = "jdbc:mysql://localhost:3306/hsp_db02?useSSL=false&serverTimezone=UTC";
    
    Properties info = new Properties();
    info.setProperty("user","root");
    info.setProperty("password","root");
    
    Connection conn = driver.connect(url,info);
    System.out.println(conn);
    ```

  - 方式3

    ```java
    // 使用DriverManager替换Driver
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
    Driver driver = (Driver)clazz.newInstance();
    
    String url = "jdbc:mysql://localhost:3306/hsp_db02?useSSL=false&serverTimezone=UTC";
    String user = "root";
    String password = "root";
    
    DriverManager.registerDriver(driver);
    
    Connection conn = DriverManager.getConnection(url,user,password);
    System.out.println(conn);
    ```

  - 方式4

    ```java
    // 使用Class.forName 自动完成注册驱动，简化代码 => 分析源码
    Class.forName("com.mysql.cj.jdbc.Driver");
    String url = "jdbc:mysql://localhost:3306/hsp_db02?useSSL=false&serverTimezone=UTC";
    String user = "root";
    String password = "root";
    
    Connection conn = DriverManager.getConnection(url,user,password);
    System.out.println(conn);
    ```

    提示：

    1. mysql驱动5.1.6可以无需Class.forName("com.mysql.cj.jdbc.Driver")；
    2. 从jdk1.5以后使用了jdbc4，不再需要显示调用class.forName()注册驱动而是自动调用jar包下META-INF\services\java.sql.Driver文本中的类名称去注册
    3. 建议还是写上Class.forName("com.mysql.cj.jdbc.Driver")，更加明确

  - 方式5【使用最多】

    ```java
    // 使用配置文件，连接数据库更灵活
    1.Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/hsp_db02?useSSL=false&serverTimezone=UTC","root","root");中的字符串各个值，比如端口，数据库，用户名，密码为了方便，我们可以将信息写入到.properties文件中，方便操作
    2.jdbc.proerpties
      user=root
      password=root
      url=jdbc:mysql://localhost:3306/hsp_db02?useSSL=false&serverTimezone=UTC
      driver=com.mysql.cj.jdbc.Driver
    
    Properties info = new Properties(); 
    ```

#### JDBC API

![](Java基础学习笔记韩顺平/JDBC/JdbcAPI图1.png)

![](Java基础学习笔记韩顺平/JDBC/JdbcAPI图2.png)

- DriverManager驱动管理类
- Connection接口
- Statement接口
  - 基本介绍
    1. Statement对象 用于执行静态SQL语句并返回其生成的结果的对象
    2. 在连接建立后，需要对数据库进行访问，执行命名或是SQL语句，可以通过
       - Statement【存在SQL注入问题】
       - PreparedSatement【预处理】
       - CallableStatement【存储过程】
    3. Statement对象执行SQL语句，存在SQL注入风险
    4. SQL注入是利用某些系统没有对用户输入的数据进行充分的检查，而在用户输入数据中注入非法的SQL语句段或命令，恶意攻击数据库
    5. 要防范SQL注入，只要用PreparedSatement(从Statement扩展而来)取代Statement就可以了
- PreparedStatement接口
  - 基本介绍
    1. PreparedStatement 执行的 SQL 语句中的参数用问号(?)来表示，调用PreparedStatement对象的setXxx()方法来设置这些参数。setXxx()方法有两个参数，第一个参数是要设置的SQL语句中的参数的索引(从1开始)，第二个是设置的SQL语句中的参数的值
    2. 调用executeQuery()，返回ResultSet对象
    3. 调用executeUpdate：执行更新，包括增、删、修改
  - 预处理好处
    1. 不再使用 + 拼接sql语句，减少语法错误
    2. 有效的解决了sql注入问题!
    3. 大大减少了编译次数，效率较高
- ResultSet(结果集)
  - 基本介绍
    1. 表示数据库结果集的数据表，通常通过执行查询数据库的语句生成
    2. ResultSet对象保持一个光标指向其当前的数据行。最初，光标位于第一行之前
    3. next方法将光标移动到下一行，并且由于在ResultSet对象中没有更多行时返回false，因此可以在while循环中使用循环来遍历结果集

#### JDBCUtils

- 封装JDBCUtils

  - 说明

    在jdbc操作中，获取连接和释放资源是经常使用到，可以将其封装JDBC连接的工具类JDBCUtils

#### 事务

- 基本介绍
  1. JDBC程序中当一个Connection对象创建时，默认情况下是自动提交事务：每次执行一个SQL语句时，如果执行成功，就会向数据库自动提交，而不能回滚
  2. JDBC程序中为了让多个SQL语句作为一个整体执行，需要使用事务
  3. 调用Connection的setAutoCommit(false)可以取消自动提交事务
  4. 在所有的SQL语句都成功执行后，调用commit()方法提交事务
  5. 在某个操作失败或出现异常时，调用rollback()方法回滚事务

#### 批处理

- 基本介绍

  1. 当需要成批插入或者更新记录时，可以采用Java的批量更新机制，这一机制允许多条语句一次性提交给数据库批量处理。通过情况下比单独提交处理更有效率。

  2. JDBC的批量处理语句包括下面方法：

     addBatch()：添加需要批量处理的SQL语句或参数

     executeBatch()：执行批量处理语句

     clearBatch()：清空批处理包的语句

  3. JDBC连接MySQL时，如果要使用批处理功能，请再url中加参数?rewriteBatchedStatements=true

  4. 批处理往往和PreparedStatement一起搭配使用，可以既减少编译次数，又减少运行次数，效率大大提高

#### 连接池

- 传统获取Connection问题分析
  1. 传统的JDBC数据库连接使用DriverManager来获取，每次向数据库建立连接的时候都要将Connection加载到内存中，再验证IP地址，用户名和密码(0.05s~1s时间)。需要数据库连接的时候，就向数据库要求一个，频繁的进行数据库连接操作将占用很多的系统资源，容易造成服务器崩溃。
  2. 每一次数据库连接，使用完后都得断开，如果程序出现异常而未能关闭，将导致数据库内存泄漏，最终将导致重启数据库
  3. 传统获取连接的方式，不能控制创建的连接数量，如连接过多，也可能导致内存泄漏，MySQL崩溃
  4. 解决传统开发中的数据库连接问题，可以采用数据库连接池技术(connection pool)

- 数据库连接池基本介绍

  ![](Java基础学习笔记韩顺平/JDBC/数据库连接池基本介绍.png)

  1. 预先在缓冲池中放入一定数量的连接，当需要建立数据库连接时，只需从"缓冲池"中取出一个，使用完毕之后再放回去
  2. 数据库连接池负责分配、管理和释放数据库连接，它允许应用程序重复使用一个现有的数据库连接，而不是重新建立一个
  3. 当应用程序向连接池请求的连接数超过最大连接数量时，这些请求将被加入到等待队列中

- 数据库连接池种类

  1. JDBC的数据库连接池使用 javax.sql.DataSource来表示，DataSource只是一个接口，该接口通常由第三方提供实现【提供.jar】
  2. **C3P0** 数据库连接池，速度相对较慢，稳定性不错(hibernate,spring)
  3. DBCP数据库连接池，速度相对c3p0较快，但不稳定
  4. Proxool数据库连接池，有监控连接池状态的功能，稳定性较c3p0差一点
  5. BoneCP 数据库连接池，速度快
  6. **Druid**(德鲁伊)是阿里提供的数据库连接池，集DBCP、C3P0、Proxool优点于一身的数据库连接池

#### Apache-DBUtils

- 先分析一个问题
  1. 关闭connection后，resultSet结果集无法使用
  2. resultSet不利于数据的管理
  
  ![](Java基础学习笔记韩顺平/JDBC/Java程序Result结果集.png)
  
- 基本介绍

  1. commons-dbutils 是 Apache 组织提供的一个开源JDBC工具类库，它是对JDBC的封装，使用dbutils能极大简化jdbc编码的工作量

- DbUtils类

  1. QueryRunner类：该类封装了SQL的执行，是线程安全的。可以实现增、删、改、查、批处理
  2. 使用QueryRunner类实现查询
  3. ResultSetHandler接口：该接口用于处理 java.sql.ResultSet，将数据按要求转换为另一种形式

  ArrayHandler：把结果集中的第一行数据转成对象数组

  ArrayListHandler：把结果集中的每一行数据都转成一个数组，再存放到List中

  BeanHandler：将结果集中的第一行数据封装到一个对应的JavaBean实例中。

  BeanListHandler：将结果集中的每一行数据都封装到一个对应的JavaBean实例中，存放到List里

  ColumnListHandler：将结果集中某一列的数据存放到List中

  KeyedHandler(name)：将结果集中的每行数据都封装到Map里，再把这些map再存到一个map里，其key为指定的key

  MapHandler：将结果集中的第一行数据封装到一个Map里，key是列名，value就是对应的值

  MapListHandler：将结果集中的每一行数据都封装到一个Map里，然后再存放到List

- 表和JavaBean的类型映射关系

  ![](Java基础学习笔记韩顺平/JDBC/表和JavaBean的类型映射关系.png)

#### DAO增删改查-BasicDao

- 先分析一个问题

  apache-dbutils+Druid 简化了JDBC开发，但还有不足：

  1. SQL语句是固定，不能通过参数传入，通用性不好，需要进行改进，更方便执行增删改查

  2. 对于select操作，如果有返回值，返回类型不能固定，需要使用泛型

  3. 将来的表很多，业务需求复杂，不可能只靠一个Java类完成

  4. 引出 => BasicDAO 画出示意图

     ![](Java基础学习笔记韩顺平/JDBC/BasicDao问题.png)

- 基本说明

  1. DAO：data access object数据访问对象
  2. 这样的通用类，称为BasicDao，是专门和数据库交互的，即完成对数据库(表)的crud操作
  3. 在BasicDao的基础上，实现一张表对应一个Dao，更好的完成功能，比如Customer表-Customer.java类(javabean)-CustomerDao.java

### 正则表达式

#### 快速入门

- 解决之道-正则表达式
  1. 简单的说：正则表达式是对字符串执行模式匹配的技术
  2. 正则表达式：regular expression => RegExp
  
- 基本介绍

  1. 一个正则表达式，就是用某种模式去匹配字符串的一个公式。很多人因为它们看上去比较古怪而且复杂所以不敢去使用，不过，经过练习后，就觉得这些复杂的表达式写起来还是相当简单的，而且，一旦你弄懂它们，你就能把数小时辛苦而且易错的文本处理工作缩短在几分钟(甚至几秒钟)内完成

  2. 老韩这里要特别强调，正则表达式不是只有java才有，实际上很多编程语言都支持正则表达式进行字符串操作！

     ![](Java基础学习笔记韩顺平/正则表达式/正则表达式基本介绍.png)

#### 正则表达式基本语法

- 基本介绍

  如果要想灵活的运用正则表达式，必须了解其中各种元字符的功能，元字符从功能上大致分为：

  1. 限定符
  2. 选择匹配符
  3. 分组组合和反向引用符
  4. 特殊字符
  5. 字符匹配符
  6. 定位符

- 元字符(Metacharacter)-转义号 \\\\

  \\\\符号 说明：在我们使用正则表达式去检索某些特殊字符的时候，需要用到转义符号，否则检索不到结果，甚至会报错。案例：用$去匹配"abc$("会怎样?

  ​		用(去匹配"abc$("会怎样?

  再次提示：在Java 的正则表达式中，两个\\\\代表其他语言中的一个\\

  需要用到转义符号的字符有以下： .*+()$/\?[]^{}

- 元字符-字符匹配符

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符字符匹配符.png)

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符字符匹配符2.png)

![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符字符匹配符应用案例1.png)

![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符字符匹配符应用案例2.png)

![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符字符匹配符应用案例3.png)

- 元字符-选择匹配符

  在匹配某个字符串的时候是选择性的，即：既可以匹配这个，又可以匹配那个，这时你需要用到选择匹配符号|

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符选择匹配符.png)

- 元字符-限定符

  用于指定其前面的字符和组合项连续出现多少次

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符限定符.png)

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符限定符2.png)

  举例说明

  1. {n}说明：

     n表示出现的次数，比如a{3},1{4},(\\\\d){2}

     但是这里要注意一点，1{3}去匹配1111111的话，会得到什么结果呢?

  2. {n,m}说明：

     n表示至少出现的n次最多m次，比如a{3,4},1{4,5},\\\\d{2,5},我们看看1{3,4}去匹配1111111的话，会得到什么结果呢?

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符限定符应用案例1.png)

- 元字符-定位符

  定位符，规定要匹配的字符串出现的位置，比如在字符串的开始还是在结束的位置，这个也是相当有用的，必须掌握

  ![](Java基础学习笔记韩顺平/正则表达式/正则表达式元字符定位符.png)

- 分组

  - 常用分组

    ![](Java基础学习笔记韩顺平/正则表达式/正则表达式常用分组.png)

  - 特别分组

    ![](Java基础学习笔记韩顺平/正则表达式/正则表达式特别分组.png)

#### 三个常用类

java.util.regex 包主要包括以下三个类 Pattern类、Matcher类和PatternSyntaxException

- Pattern类

  pattern 对象是一个正则表达式对象。Pattern类没有公共构造方法。要创建一个Pattern对象，调用其公共静态方法，它返回一个Pattern对象。该方法接受一个正则表达式作为它的第一个参数，比如：`Pattern r = Pattern.compile(pattern);`

  - Pattern类的方法matches

    ```java
    import java.util.regex.Pattern;
    public class Hello{
        public static void main(String[] main){
            String content = "I am hsp from hspedu.com";
            String pattern = ".*hspedu.*";
            boolean isMatch = Pattern.matches(pattern,content);
            System.out.println("是否整体匹配成功"+isMatch);
        }
    }
    ```

- Matcher类

  Matcher对象是对输入字符串进行解释和匹配的引擎。与Pattern类一样，Matcher也没有公共构造方法。你需要调用Pattern对象的matcher方法来获得一个Matcher对象

  - 方法一览

    ![](Java基础学习笔记韩顺平/正则表达式/Matcher类方法一览.png)

    ![](Java基础学习笔记韩顺平/正则表达式/Matcher类方法一览2.png)

- PatternSyntaxException

  PatternSyntaxException是一个非强制异常类，它表示一个正则表达式模式中的语法错误

#### 分组、捕获、反向引用

- 介绍

  1. 分组

     我们可以用圆括号组成一个比较复杂的匹配模式，那么一个圆括号的部分我们可以看作是一个子表达式/一个分组

  2. 捕获

     把正则表达式中子表达式/分组匹配的内容，保存到内存中以数字编号或显式命名的组里，方便后面引用，从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推。组0代表的是整个正则式

  3. 反向引用

     圆括号的内容被捕获后，可以在这个括号后被使用，从而写出一个比较实用的匹配模式，这个我们称为反向引用，这种引用既可以是在正则表达式内部，也可以是在正则表达式外部，内部反向引用 \\\\分组号，外部反向引用 $ 分组号

- String类中使用正则表达式

  - 替换功能

    String 类 public String replaceAll(String regex, String replacement)

  - 判断功能

    String 类 public boolean matches(String regex){}

  - 分割功能

    String 类 public String[] split(String regex)

### Java 8和Java 10新特性





