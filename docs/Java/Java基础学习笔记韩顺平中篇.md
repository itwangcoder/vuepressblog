---
title: Java基础学习笔记韩顺平中篇
description: Java基础学习笔记韩顺平中篇
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

## 二、提高编程能力

### 面向对象编程（高级部分）

#### 类变量和类方法

- 类变量内存布局

  static变量是对象共享，不管static变量在哪里，共识

  1. static变量是同一个类所有对象共享
  2. static变量，在类加载的时候就生成了

- 什么是类变量：类变量也叫静态变量/静态属性，是该类的所有对象共享的变量，任何一个该类的对象去访问它时，取到的都是相同的值，同样任何一个该类的对象去修改它时，修改的也是同一个变量。

- 类变量定义

  定义语法：

  `访问修饰符 static 数据类型 变量名;[推荐]`

  `static 访问修饰符 数据类型 变量名;`

  访问类变量：类名.类变量名【推荐】 或者 对象名.类变量名【静态变量的访问修饰符的访问权限和范围和普通属性是一样的】

- 类变量注意事项和细节讨论
  1. 当我们需要让某个类的所有对象都共享一个变量时，就可以考虑使用类变量（静态变量）
  2. 类变量是该类的所有对象共享的，而实例变量是每个对象独享的
  3. 加上static称为类变量或静态变量，否则称为实例变量/普通变量/非静态变量
  4. 类变量可以通过类名.类变量名 或者 对象名.类变量名来访问，但java设计者推荐我们使用类名.类变量名方式访问【前提是满足访问修饰符的访问权限和范围】
  5. 实例变量不能通过 类名.类变量名 方式访问
  6. 类变量是在类加载时就初始化了，也就是说，即使你没有创建对象，只要类加载了，就可以使用类变量了
  7. 类变量的生命周期是随类的加载开始，随着类的消亡而销毁

- 类方法基本介绍：

  也叫静态方法，形式如下

  `访问修饰符 static 数据返回类型 方法名(){}`【推荐】

  `static 访问修饰符 数据返回类型 方法名(){}`

- 类方法的调用：

  使用方式：类名.类方法名 或者 对象名.类方法名【前提是满足访问修饰符的访问权限和范围】

- 经典使用场景：当方法中不涉及到任何和对象相关的成员，则可以将方法设计成静态方法，提高开发效率

- 类方法使用注意事项和细节讨论

  1. 类方法和普通方法都是随着类的加载而加载，将结构信息存储在方法区：类方法中无this的参数；普通方法中隐含着this的参数
  2. 类方法可以通过类名调用，也可以通过对象名调用
  3. 普通方法和对象有关，需要通过对象名调用，比如对象名.方法名（参数），不能通过类名调用
  4. 类方法中不允许使用和对象有关的关键字，比如this和super。普通方法（成员方法）可以
  5. 类方法（静态方法）中只能访问静态变量或静态方法
  6. 普通成员方法，既可以访问（非静态）普通变量（方法），也可以访问静态变量（方法）

  小结：静态方法，只能访问静态的成员，非静态的方法，可以访问静态成员和非静态成员（必须遵守访问权限）

#### 理解main方法语法

- 深入理解main方法
  1. java虚拟机需要调用类的main()方法，所以该方法的访问权限必须是public
  2. java虚拟机在执行main()方法时不必创建对象，所以该方法必须是static
  3. 该方法接收String类型的数组参数，该数组中保存执行java命令时传递给所运行的类的参数
  4. java执行的程序 参数1 参数2 参数3

- 特别提示
  1. 在main()方法中，我们可以直接调用main方法所在类的静态方法或静态属性
  2. 但是，不能直接访问该类中的非静态成员，必须创建该类的一个实例对象后，才能通过这个对象去访问类中的非静态成员

#### 代码块

- 基本介绍

  代码化块又称为初始化块，属于类中的成员【即是类的一部分】，类似于方法，将逻辑语句封装在方法体中，通过{}包围起来。

  但和方法不同，没有方法名，没有返回，没有参数，只有方法体，而且不用通过对象或类显式调用，而是加载类时，或创建对象时隐式调用

- 基本语法

  `[修饰符]{`

  ​	`代码`

  `};`

  注意：

  1. 修饰符可选，要写的话，也只能写static
  2. 代码块分为两类，使用static修饰的叫静态代码块，没有static修饰的，叫普通代码块
  3. 逻辑语句可以为任何逻辑语句（输入、输出、方法调用、循环、判断等）
  4.  ;号可以写上，也可以省略

- 代码块的好处
  1. 相当于另外一种形式的构造器（对构造器的补充机制），可以做初始化的操作
  2. 如果多个构造器中都有重复的语句，可以抽到初始化块中，提高代码的重用性

- 代码块使用注意事项和细节讨论

  1. static代码块也叫静态代码块，作用就是对类进行初始化，而且它随着类的加载而执行，并且只会执行一次。如果是普通代码块，每创建一个对象，就执行

  2. 类什么时候被加载：

     ①创建对象实例时

     ②创建子类对象实例，父类也会被加载

     ③使用类的静态成员时（静态属性，静态方法）

  3. 普通的代码块，在创建对象实例时，会被隐式的调用。被创建一次，就会调用一次。如果只是使用类的静态成员时，普通代码块并不会执行。

  4. 创建一个对象时，在一个类调用顺序是：

     ①调用静态代码块和静态属性初始化（注意：静态代码块和静态属性初始化调用的优先级一样，如果有多个静态代码和多个静态变量初始化，则按他们定义的顺序调用）

     ②调用普通代码块和普通属性的初始化（注意：普通代码块和普通属性初始化调用的优先级一样，如果多个普通代码块和多个普通属性初始化，则按定义顺序调用）

     ③调用构造方法

  5. 构造方法（构造器）的最前面其实隐含了super()和调用普通代码块，新写一个类演示【截图+说明】，静态相关的代码块，属性初始化，在类加载时，就执行完毕，因此是优先于构造器和普通代码块执行的
  
  6. 创建一个子类对象时（继承关系），他们的静态代码块，静态属性初始化，普通代码块，普通属性初始化，构造方法的调用顺序如下 ：
  
     ①父类的静态代码块和静态属性（优先级一样，按定义顺序执行）
  
     ②子类的静态代码块和静态属性（优先级一样，按定义顺序执行）
  
     ③父类的普通代码块和普通属性初始化（优先级一样，按定义顺序执行）
  
     ④父类的构造方法
  
     ⑤子类的普通代码块和普通属性初始化（优先级一样，按定义顺序执行）
  
     ⑥子类的构造方法
  
  7. 静态代码块只能调用静态成员（静态属性和静态方法），普通代码块可以调用任意成员

#### 单例设计模式

- 什么是设计模式
  1. 静态方法和属性的经典使用
  2. 设计模式是在大量的实践中总结和理论化之后优选的代码结构、编程风格、以及解决问题的思考方式。设计模式就像是经典的棋谱，不同的棋局，我们使用不同的棋谱。

- 什么是单例模式
  1. 所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例，并且该类只提供一个取得其对象实例的方法
  2. 单例模式有两种方式：①饿汉式 ②懒汉式

- 单例设计模式应用步骤
  1. 构造器私有化 ==》 防止直接new
  2. 类的内部创建对象
  3. 向外暴露一个静态的公共方法。getInstance
  4. 代码实现

- 饿汉式VS懒汉式
  1. 二者最主要的区别在于创建对象的时机不同：饿汉式是在类加载就创建了对象实例，而懒汉式是在使用时才创建
  2. 饿汉式不存在线程安全问题，懒汉式存在线程安全问题
  3. 饿汉式存在浪费资源的可能。因为如果程序员一个对象实例都没有使用，那么饿汉式创建的对象就浪费了，懒汉式是使用时才创建，就不存在这个问题
  4. 在我们javaSE标准类中，java.lang.Runtime就是经典的单例模式

#### final关键字

- 基本介绍

  final中文意思：最后的，最终的。

  final可以修饰类、属性、方法和局部变量

  在某些情况下，程序员可能有以下需求，就会使用到final：

  1. 当不希望类被继承时，可以用final修饰
  2. 当不希望父类的某个方法被子类覆盖/重写（override）时，可以用final关键字修饰
  3. 当不希望类的某个属性的值被修改，可以用final修饰
  4. 当不希望某个局部变量被修改，可以使用final修饰

- final使用注意事项和细节讨论

  1. final修饰的属性又叫常量，一般用XX_XX_XX来命名

  2. final修饰的属性在定义时，必须赋初值，并且以后不能再修改，赋值可以在如下位置之一【选择一个位置赋初值即可】

     ①定义时：如public final double TAX_RATE = 0.08;

     ②在构造器中

     ③在代码块中

  3. 如果final修饰的属性是静态的，则初始化的位置只能是

     ①定义时

     ②在静态代码块不能在构造器中赋值

  4. final类不能继承，但是可以实例化对象

  5. 如果类不是final类，但是含有final方法，则该方法虽然不能重写，但是可以被继承

  6. 一般来说，如果一个类已经是final类了，就没有必要再将方法修饰成final方法

  7. final不能修饰构造方法（即构造器）

  8. final和static往往搭配使用，效率更高，不会导致类加载，底层编译器做了优化处理

  9. 包装类（Integer，Double，Float，Boolean等都是final），String也是final类

#### 抽象类

- 当父类的某些方法，需要声明，但是又不确定如何实现时，可以将其声明为抽象方法，那么 这个类就是抽象类

- 抽象类快速入门：当父类的一些方法不能确定时，可以用abstract关键字来修饰该方法，这个方法就是抽象方法，用abstract来修饰该类就是抽象类

- 所谓抽象方法就是没有实现的方法，所谓没有实现就是指，没有方法体，当一个类中存在抽象方法时，需要将该类声明为abstract类，一般来说，抽象类会被继承，有其子类来实现抽象方法

- 抽象类的介绍

  1. 用abstract关键字来修饰一个类时，这个类就叫抽象类

     `访问修饰符 abstract 类名{}`

  2. 用abstract关键字来修饰一个方法时，这个方法就是抽象方法

     `访问修饰符 abstract 返回类型 方法名(参数列表);//没有方法体`

  3. 抽象类的价值更多作用是在于设计 ，是设计者设计好后，让子类继承并实现抽象类()

- 抽象类使用的注意事项和细节讨论
  1. 抽象类不能被实例化
  2. 抽象类不一定要包含abstract方法。也就是说，抽象类可以没有abstract方法
  3. 一旦类包含了abstract方法，则这个类必须声明为abstract
  4. abstract只能修饰类和方法，不能修饰属性和其它的
  5. 抽象类可以有任意成员【因为抽象类本质还是类】，比如：非抽象方法、构造器、静态属性等等
  6. 抽象方法不能有主体，即不能实现
  7. 如果一个类继承了抽象类，则它必须实现抽象类的所有抽象方法，除非它自己也声明为abstract类
  8. 抽象方法不能使用private、final和static来修饰，因为这些关键字都是和重写相违背的

- 抽象类实践-模板设计模式

  需求

  1. 有多个类，完成不同的任务job
  2. 要求能够得到各自完成任务的时间

  其它

#### 接口

- 基本介绍

  接口就是给出一些没有实现的方法，封装到一起，到某个类要使用的时候，在根据具体情况把这些方法写出来。语法：

  `interface 接口名{`

  ​	`//属性`

  ​	`//方法（1.抽象方法：可以省略abstract关键字 2.默认实现方法：jdk8后，需要使用default关键字修饰 3.静态方法：jdk8后）`

  `}`

  `class 类名 implements 接口{`

  ​	`自己属性`

  ​	`自己方法`

  ​	`必须实现的接口的抽象方法`

  `}`

  小结：

  1. 在JDK7.0前，接口里的所有方法都没有方法体，即都是抽象方法
  2. JDK8.0后接口 类可以有静态方法，默认方法，也就是说接口中可以有方法的具体实现

- 注意事项和细节
  1. 接口不能被实例化
  2. 接口中所有的方法是public方法，接口中抽象方法，可以不用abstract修饰
  3. 一个普通类实现接口，就必须将该接口的所有方法都实现
  4. 抽象类实现接口，可以不用实现接口的方法
  5. 一个类同时可以实现多个接口
  6. 接口中的属性，只能是final的，而且是public static final修饰符。比如：int a = 1;实际上是public static final int a = 1;（必须初始化）
  7. 接口中属性的访问形式：接口名.属性名
  8. 一个接口不能继承其它的类，但是可以继承多个别的接口
  9. 接口的修饰符只能是public和默认，这点和类的修饰符是一样的

- 继承类VS实现接口

  当子类继承了父类，就自动的拥有父类的功能。如果子类需要扩展功能，可以通过实现接口的方式扩展。可以理解，实现接口是对java单继承机制的一种补充

  - 接口和继承解决的问题不同

    继承的价值主要在于：解决代码的复用性和可维护性

    接口的价值主要在于：设计，设计好各种规范（方法），让其它类去实现这些方法

  - 接口比继承更加灵活

    接口比继承更加灵活，继承是满足is-a的关系，而接口只需满足like-a的关系

  - 接口在一定程度上实现代码解耦【即接口规范性+动态绑定】

- 接口的多态特性
  1. 多态参数：在前面的Usb接口案例，Usb usb，既可以接收手机对象，又可以接收相机对象，就体现了接口多态（接口引用可以指向实现了接口的类的对象）
  2. 多态数组
  3. 接口存在多态传递现象

#### 内部类

- 基本介绍

  一个类的内部又完整的嵌套了另一个类结构。被嵌套的类称为内部类（inner class），嵌套其他类的类称为外部类（outer class）。是我们类的第五大成员【属性、方法、构造器、代码块、内部类】，内部类最大的特点就是可以直接访问私有属性，并且可以体现类与类之间的包含关系

- 基本语法

  `class Outer{//外部类`

  ​	`class Inner{//内部类`

  ​	`}`

  `}`

  `class Other{//外部其他类`

  `}`

- 内部类的分类
  - 定义在外部类的局部位置上（比如方法内）：
    1. 局部内部类（有类名）
    2. 匿名内部类（没有类名，重点）
  - 定义在外部类的成员位置上：
    1. 成员内部类（没用static修饰）
    2. 静态内部类（使用static修饰）

- 局部内部类的使用

  说明：局部内部类是定义在外部类的局部位置，比如方法中，并且有类名

  1. 可以直接访问外部类的所有成员、包含私有的

  2. 不能添加访问修饰符，因为它的地位就是一个局部变量。局部变量是不能使用修饰符的。但是可以使用final修饰，因为局部变量也可以使用final

  3. 作用域：仅仅在定义它的方法或代码块中

  4. 局部内部类---访问---->外部类的成员【访问方式：直接访问】

  5. 外部类---访问---->局部内部类的成员

     访问方式：创建对象，再访问（注意：必须在作用域内）

  6. 外部其他类---不能访问---->局部内部类（因为局部内部类地位是一个局部变量）

  7. 如果外部类和局部内部类的成员重名时，默认遵循就近原则，如果想访问外部类的成员，则可以使用（外部类名.this.成员）去访问

- 匿名内部类的使用

  (1)本质是类(2)内部类(3)该类没有名字(4)同时还是一个对象

  说明：匿名内部类是定义在外部类的局部位置，比如方法中，并且没有类名

  1. 匿名内部类的基本语法

     `new 类或接口(参数列表){`

     ​	`类体`

     `};`

  2. 匿名内部类的语法比较奇特，请大家注意，因为匿名内部类既是一个类的定义，同时它本身也是一个对象，因此从语法上看，它既有定义类的特征，也有创建对象的特征，对前面代码分析可以看出这个特点，因此可以调用匿名内部类方法

  3. 可以直接访问外部类的所有成员，包含私有的

  4. 不能添加访问修饰符，因为它的地位就是一个局部变量

  5. 作用域：仅仅在定义它的方法或代码块中

  6. 匿名内部类---访问---->外部类成员【访问方式：直接访问】

  7. 外部其他类---不能访问---->匿名内部类（因为匿名内部类地位是一个局部变量）

  8. 如果外部类和内部类的成员重名时，内部类访问的话，默认遵循就近原则，如果想访问外部类的成员，则可以使用（外部类名.this.成员）去访问

- 成员内部类的使用

  说明：成员内部类是定义在外部类的成员位置，并且没有static修饰

  1. 可以直接访问外部类的所有成员，包含私有的
  2. 可以添加任意访问修饰符（public、protected、默认、private），因为它的地位就是一个成员
  3. 作用域：和外部类的其他成员一样，为整个类体比如前面案例，在外部类的成员方法中创建成员内部类对象，再调用方法
  4. 成员内部类---访问---->外部类（比如：属性）【访问方式：直接访问】
  5. 外部类---访问---->内部类（说明）访问方式：创建对象，再访问
  6. 外部其他类---访问--->成员内部类
  7. 如果外部类和内部类的成员重名时，内部类访问的话，默认遵循就近原则，如果想访问外部类的成员，则可以使用（外部类名.this.成员）去访问

- 静态内部类的使用

  说明：静态内部类是定义在外部类的成员位置，并且有static修饰

  1. 可以直接访问外部类的所有静态成员，包含私有的，但不能直接访问非静态成员
  2. 可以添加任意访问修饰符（public、protected、默认、private），因为它的地位就是一个成员
  3. 作用域：同其他的成员，为整个类体
  4. 静态内部类---访问---->外部类（比如：静态属性）【访问方式：直接访问所有静态成员】
  5. 外部类---访问---->静态内部类 访问方式：创建对象，再访问
  6. 外部其他类---访问---->静态内部类
  7. 如果外部类和静态内部类的成员重名时，静态内部类访问的时候，默认遵循就近原则，如果想访问外部类的成员，则可以使用（外部类名.成员）去访问

### 枚举和注解

#### 枚举介绍

枚举是一组常量的集合

- 枚举的二种实现方式
  1. 自定义实现枚举
  2. 使用enum关键字实现枚举

#### 自定义类实现枚举

- 实现
  1. 不需要提供setXxx方法，因为枚举对象通常为只读
  2. 对枚举对象/属性使用final + static共同修饰，实现底层优化
  3. 枚举对象名通常使用全部大写，常量的命名规范
  4. 枚举对象根据需要，也可以有多个属性

- 自定义类实现枚举特点
  1. 构造器私有化
  2. 本类内部创建一组对象
  3. 对外暴露对象（通过为对象添加public final static 修饰符）
  4. 可以提供get方法，但是不要提供set

#### enum关键字实现枚举

- enum关键字实现枚举注意事项
  1. 当我们使用enum关键字开发一个枚举类时，默认会继承Enum类，而且是一个final类
  2. 传统的public static final Season2 SPRING = new Season2("春天","温暖"); 简化成SPRING("春天","温暖")，这里必须知道，它调用的是哪个构造器
  3. 如果使用无参构造器创建枚举对象，则实参列表和小括号都可以省略
  4. 当有多个枚举对象时，使用","间隔，最后有一个分号结尾
  5. 枚举对象必须放在枚举类的行首

- enum常用方法说明

  说明：使用关键字enum时，会隐式继承Enum类，这样我们就可以使用Enum类相关的方法

  `public abstract class Enum<E extends Enum<E>> implements Comparable<E>,Serializable{}`

  1. toString：Enum类已经重写过了，返回的是当前对象名，子类可以重写该方法，用于返回对象的属性信息
  2. name：返回当前对象名（常量名），子类中不能重写
  3. ordinal：返回当前对象的位置号，默认从0开始
  4. values：返回当前枚举类中所有的常量
  5. valueOf：将字符串转换成枚举对象，要求字符串必须为已有的常量名，否则报异常！
  6. compareTo：比较两个枚举常量，比较的就是位置号！

- enum实现接口

  1. 使用enum关键字后，就不能再继承其它类了，因为enum会隐式继承Enum，而Java是单继承机制

  2. 枚举类和普通类一样，可以实现接口，如下形式

     `enum 类名 implements 接口1,接口2{}`

#### JDK内置的基本注解类型

- 注解的理解
  1. 注解（Annotation）也称为元数据（Metadata），用于修饰解释包、类、方法、属性、构造器、局部变量等数据信息
  2. 和注释一样，注解不影响程序逻辑，但注解可以被编译或运行，相当于嵌入在代码中的补充信息
  3. 在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在JavaEE中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替java EE旧版中所遗留的繁冗代码和XML配置等。

- 基本的Annotation介绍

  使用Annotation时要在其前面增加@符号，并把该Annotation当成一个修饰符使用。用于修饰它支持的程序元素

  三个基本的Annotation：

  1. @Override：限定某个方法，是重写父类方法，该注解只能用于方法
  2. @Deprecated：用于表示某个程度元素（类，方法等）已过时
  3. @SuppressWarnings：抑制编译器警告

  补充说明：

  @interface：不是interface，是注解类，是jdk5.0之后加入的

- Override使用说明
  1. @Override表示指定重写父类的方法（从编译层面验证），如果父类没有fly方法，则会报错
  2. 如果不写@Override注解 ，而父类仍有public void fly(){}，仍然构成重写
  3. @Override只能修饰方法，不能修饰其它类、包、属性等等
  4. 查看@Override注解源码为@Target(ElementType.METHOD)，说明只能修饰方法
  5. @Target是修饰注解的注解，称为元注解

- @Deprecated的说明
  1. 用于表示某个程序元素（类，方法等）已过时
  2. 可以修饰方法、类、字段、包、参数等等
  3. @Target(value={CONSTRUCTOR,FIELD,LOCAL_VARIABLE,METHOD,PACKAGE,PARAMETER,TYPE})
  4. @Deprecated的作用可以做到新旧版本的兼容和过渡

- @SuppressWarnings说明
  1. unchecked：是忽略没有检查的警告
  2. rawtypes：是忽略没有指定泛型的警告（传参时没有指定泛型的警告错误）
  3. unused：是忽略没有使用某个变量的警告错误
  4. @SuppressWarnings：可以修饰的程序元素为，查看@Target
  5. 生成@SuppressWarnings时，不用背，直接点击左侧的黄色提示，就可以选择（注意可以指定生成的位置）

#### 元注解：对注解进行注解

- 元注解的基本介绍

  JDK的元Annotation用于修饰其他Annotation

- 元注解的种类（使用不多，了解，不用深入研究）

  1. Retention：指定注解的作用范围，三种SOURCE，CLASS，RUNTIME
  2. Target：指定注解可以在哪些地方使用
  3. Documented：指定该注解是否会在javadoc体现
  4. Inherited：子类会继承父类注解

- @Retention注解

  - 说明

    只能用于修饰一个Annotation定义，用于指定该Annotation可以保留多长时间，@Retention包含一个RetentionPolicy类型的成员变量，使用@Rentention时必须为该value成员变量指定值

  - @Retention的三种值

    1. RetentionPolicy.SOURCE：编译器使用后，直接丢弃这种策略的注释
    2. RetentionPolicy.CLASS：编译器将把注释记录在class文件中，当运行Java程序时，JVM不会保留注释，这是默认值
    3. RetentionPolicy.RUNTIME：编译器将把注释记录在class文件中，当运行Java程序时，JVM会保留注释，程序可以通过反射获取该注释

  - @Override说明：Override的作用域在SOURCE，当编译器编译 时生效，不会写入到.class文件，也不会再runtime（运行时）生效

  - @Target说明：用于修饰Annotation定义，用于指定被修饰的Annotation能用于修饰哪些程序元素。@Target也包含一个名为value的成员变量

- @Inherited注解

  被它修饰的Annotation将具有继承性，如果某个类使用了被@Inherited修饰的Annotation，则其子类将自动具有该注解

  说明：实际应用中，使用较少，了解即可

### 异常-Exception

#### 异常的概念

- 基本概念：Java语言中，将程序执行中发生的不正常情况称为“异常”。（开发过程中的语法错误和逻辑错误不是异常）
- 执行过程中所发生的异常事件可分为两类
  1. Error（错误）：Java虚拟机无法解决的严重问题。如：JVM系统内部错误、资源耗尽等严重情况。比如：StackOverflowError【栈溢出】和OOM（out of memory），Error是严重错误，程序会崩溃
  2. Exception：其它因编程错误或偶然的外在因素导致的一般性问题，可以使用针对性的代码进行处理。例如空指针访问，试图读取不存在的文件，网络连接中断等等，Exception分为两大类：运行时异常【程序运行时，发生的异常】和编译时异常【编程时，编译器检查出的异常】

#### 异常体系图

- 小结
  1. 异常分为两大类，运行时异常和编译时异常
  2. 运行时异常，编译器不要求强制处置的异常。编译器检查不出来，一般是指编程时的逻辑错误，是程序员应该避免其出现的异常。java.lang.RuntimeException类及它的子类都是运行时异常
  3. 对于运行时异常，可以不作处理，因为这类异常很普遍，若全处理可能会对程序的可读性和运行效率产生影响
  4. 编译时异常，是编译器要求必须处置的异常。

#### 常见的异常

- 常见的运行时异常包括
  1. NullPointerException空指针异常：当应用程序试图在需要对象的地方使用null时，抛出该异常
  2. ArithmeticException数学运算异常：当出现异常的运算条件时，抛出此异常
  3. ArrayIndexOutOfBoundsException数组下标越界异常：用非法索引访问数组时抛出的异常。如果索引为负或大于等于数组大小，则该索引为非法索引
  4. ClassCastException类型转换异常：当试图将对象强制转换为不是实例的子类时，抛出该异常
  5. NumberFormatException数字格式不正确异常[]：当应用程序试图将字符串转换成一种数值类型，但该字符串不能转换为适当格式，抛出该异常 = 》使用异常我们可以确保输入是满足条件数字

- 编译异常

  介绍：编译异常是指在编译期间，就必须处理的异常，否则代码不能通过编译

  常见的编译异常

  - SQLException // 操作数据库时，查询表可能发生异常
  - IOException // 操作文件时，发生的异常
  - FileNotFoundException // 当操作一个不存在的文件时，发生异常
  - ClassNotFoundException // 加载类，而该类不存在时，异常
  - EOFException // 操作文件，到文件末尾，发生异常
  - IllegalArguementException // 参数异常

#### 异常处理概念

- 基本介绍：异常处理就是当异常发生时，对异常处理的方式
- 异常处理的方式
  1. try-catch-finally：程序员在代码中捕获发生的异常，自行处理
  2. throws：将发生的异常抛出，交给调用者（方法）来处理，最顶级的处理者就是JVM

#### 异常处理分类

- try-catch异常处理

  - try-catch方式处理异常说明

    1. Java提供try和catch块来处理异常。try块用于包含可能出错的代码。catch块用于处理try块中发生的异常。可以根据需要在程序中有多个数量的try...catch块

    2. 基本语法

       `try{`

       ​	`// 可疑代码`

       ​	`// 将异常生成对应的异常对象，传递给catch块`

       `}catch(异常){`

       ​	`// 对异常的处理`

       `}`
  
  - try-catch方式处理异常-注意事项
  
    1. 如果异常发生了，则异常发生后面的代码不会执行，直接进入到catch块
  
    2. 如果异常没有发生，则顺序执行try的代码块，不会进入到catch
  
    3. 如果希望不管是否发生异常，都执行某段代码（比如关闭连接，释放资源等）则使用如下代码-finally{}
  
       `try{`
  
       ​	`// 可疑代码`
  
       `}catch(异常){`
  
       ​	`// ...`
  
       `}finally{`
  
       ​	`// 释放资源等`
  
       `}`
  
    4. 可以有多个catch语句，捕获不同的异常（进行不同的业务处理），要求父类异常在后，子类异常在前，比如（Exception在后，NullPointerException在前），如果发生异常，只会匹配一个catch
  
       `try{`
  
       `}catch(NullPointerException e){`
  
       `}catch(Exception e){`
  
       `}finally{`
  
       `}`
  
    5. 可以进行try-finally配合使用，这种用法相当于没有捕获异常，因此程序会直接崩掉/退出 。应用场景，就是执行一段代码，不管是否发生异常，都必须执行某个业务逻辑
  
       `try{`
  
       ​	`//代码...`
  
       `}finally{`
  
       ​	`//总是执行`
  
       `}`
  
  - try-catch-finally执行顺序小结
    1. 如果没有出现异常，则执行try块中所有语句，不执行catch块中语句，如果有finally，最后还需要执行finally里面的语句
    2. 如果出现异常，则try块中异常发生后，try块剩下的语句不再执行。将执行catch块中的语句，如果有finally，最后还需要执行finally里面的语句

- throws异常处理
  - 基本介绍
    1. 如果一个方法（中的语句执行时）可能生成某种异常，但是并不能确定如何处理这种异常，则此方法应显示地声明抛出异常，表明该方法将不对这些异常进行处理，而由该方法的调用者负责处理
    2. 在方法声明中用throws语句可以声明抛出异常的列表，throws后面的异常类型可以是方法中产生的异常类型，也可以是它的父类
  - 注意事项和使用细节
    1. 对于编译异常，程序中必须处理，比如try-catch或者throws
    2. 对于运行时异常，程序中如果没有处理，默认就是throws的方式处理
    3. 子类重写父类的方法时，对抛出异常的规定：子类重写的方法，所抛出的异常类型要么和父类抛出的异常一致，要么为父类抛出的异常的类型的子类型
    4. 在throws过程中，如果有方法try-catch，就相当于处理异常，就可以不必throws

#### 自定义异常

- 基本概念：当程序中出现了某些“错误”，但该错误信息并没有在Throwable子类中描述处理，这个时候可以自己设计异常类，用于描述该错误信息
- 自定义异常的步骤
  1. 定义类：自定义异常类名继承Exception或RuntimeException
  2. 如果继承Exception，属于编译异常
  3. 如果继承RuntimeException，属于运行异常（一般来说，继承RuntimeException）

#### throw和throws的对比

|        | 意义                     | 位置       | 后面跟的东西 |
| ------ | ------------------------ | ---------- | ------------ |
| throws | 异常处理的一种方式       | 方法声明处 | 异常类型     |
| throw  | 手动生成异常对象的关键字 | 方法体中   | 异常对象     |

### 常用类

#### 包装类

- 包装类的分类

  1. 针对八种基本数据类型相应的引用类型—包装类
  2. 有了类的特点，就可以调用类中的方法

  | 基本数据类型 |  包装类   |
  | :----------: | :-------: |
  |   boolean    |  Boolean  |
  |     char     | Character |
  |     byte     |   Byte    |
  |    short     |   Short   |
  |     int      |  Integer  |
  |     long     |   Long    |
  |    float     |   Float   |
  |    double    |  Double   |

  父类：Number——Byte、Short、Integer、Long、Float、Double

- 包装类和基本数据的转换

  1. Jdk5前的手动装箱和拆箱方式，装箱：基本类型->包装类型，反之，拆箱
  2. jdk5之后（含jdk5）的自动装箱和拆箱方式
  3. 自动装箱底层调用的是valueOf方法，比如Integer.valueOf()

  `// 基本类型--->包装类型【手动装箱】`

  `int i = 10; `

  `Integer i1 = new Integer(i); `

  `Integer i2 = Integer.valueOf(i);`

  `// 包装类型--->基本类型【手动拆箱】`

  `Integer j = new Integer(99);`

  `int j1 = j.intValue();`

- 包装类和String类型的相互转换

  `// 包装类--->String`

   `// 方式1 `

  `String str1 = i + "";`

  `// 方式2`

  `String str2 = i.toString();`

  `// 方法3`

  `String str3 = String.valueOf(i);`

  `// String --->包装类`

  `// 使用自动装箱`

  `Integer i2 = Integer.parseInt(str);`

  `// 构造器`

  `Integer i3 = new Integer(str);`

- Integer类和Character类的常用方法

  - Integer.MIN_VALUE：返回最小值
  - Integer.MAX_VALUE：返回最大值
  - Character.isDigit('a')：判断是不是数字
  - Character.isLetter('a')：判断是不是字母
  - Character.isUpperCase('a')：判断是不是大写
  - Character.isLowerCase('a')：判断是不是小写
  - Character.isWhitespace('a')：判断是不是空格
  - Character.toUpperCase('a')：转成大写
  - Character.toLowerCase('A')：转成小写

#### String类

- String类的理解和创建对象
  1. String对象用于保存字符串，也就是一组字符序列
  2. 字符串常量对象是用双引号括起的字符序列
  3. 字符串的字符使用Unicode字符编码，一个字符（不区分字母还是汉字）占两个字节
  4. String类比较常用构造方法
     - String s1 = new String();
     - String s2 = new String(String original);
     - String s3 = new String(char[] a);
     - String s4 = new String(char[] a, int startIndex, int count)
  
  5. 注意：String实现了Serializable，说明String可以串行化（数据可以在网络传输）；String实现了Comparable接口，说明String对象可以比较
  6. String是final类，不能被其他的类继承
  7. String有属性private final char value[];用于存放字符串内容 
  8. 一定要注意：value是一个final类型，（value指向的地址）不可修改：即value不能指向新的地址，但是单个字符内容是可以变化
  
- 创建String对象的两种方式

  1. 方式一：直接赋值 String s = "hspedu";
  2. 方式二：调用构造器 String s = new String("hspedu");

- 两种创建String对象的区别

  方式一：直接赋值 String s = "hsp";

  方式二：调用构造器 String s2 = new String("hsp");

  1. 方式一：先从常量池查看是否有"hsp"数据空间，如果有，直接指向；如果没有则重新创建，然后指向。s最终指向的是常量池的空间地址
  2. 方式二：先在堆中创建空间，里面维护了value属性，指向常量池的hsp空间。如果常量池没有"hsp"，重新创建，如果有，直接通过value指向。最终指向的是堆中的空间地址

- 字符串的特性

  1. String是一个final类，代表不可变的字符序列
  2. 字符串是不可变的。一个字符串对象一旦被分配，其内容 是不可变的
  3. 编译器会做一个优化，判断创建的常量池对象，是否有引用指向`String a = "hello" + "abc";  =》 String a = "Helloabc";`
  4. 重要规则，String c1 = "ab" + "cd"；常量相加，看的是池。String c1 = a + b；变量相加，是在堆中

- String类的常用方法：String类是保存字符串常量的。每次更新都需要重新开辟空间，效率较低，因此java设计者还提供了StringBuilder和StringBuffer来增强String的功能，并提高效率

  - equals：区分大小写，判断内容是否相等

  - equalsIgnoreCase：忽略大小写的判断内容是否相等

  - length：获取字符的个数，字符串的长度

  - indexOf：获取字符在字符串中第1次出现的索引，索引从0开始，如果找不到，返回-1

  - lastIndexOf：获取字符在字符串中最后1次出现的索引，索引从0开始，如找不到，返回-1

  - substring：截取指定范围的子串

  - trim：去前后空格

  - charAt：获取某索引处的字符，注意不能使用Str[index]这种方式

  - toUpperCase

  - toLowerCase

  - concat：拼接字符串

  - replace：替换字符串中的字符

  - split：分割字符串，对于某些分割字符，我们需要转义比如|\\\等

  - compare：比较两个字符串的大小

  - toCharArray：转换成字符数组

  - format：格式字符串，%s字符串 %c字符串 %d整型 %.2f浮点型


#### StringBuffer和StringBuilder类

- StringBuffer类基本介绍
  - java.lang.StringBuffer代表可变的字符序列，可以对字符串内容进行增删
  - 很多方法与String相同，但StringBuffer是可变长度的
  - StringBuffer是一个容器
  - 其他：
    1. StringBuffer的直接父类是AbstractStringBuilder
    2. StringBuffer实现了Serializable，即StringBuffer的对象可以串行化
    3. 在父类中，AbstractStringBuilder有属性char[] value，不是final，该value数组存放字符串内容，引出存放在堆中的
    4. StringBuffer是一个final类，不能被继承
    5. 因为StringBuffer字符内容是存在char[] value，所有在变化（增加/删除）不用每次都更换地址（即创建新对象），所以效率高于String
  
- String VS StringBuffer
  1. String保存的是字符串常量，里面的值不能更改，每次String类的更新实际上就是更改地址，效率较低`// private final char value[];`
  2. StringBuffer保存的是字符串变量，里面的值可以更改，每次StringBuffer的更新实际上可以更新内容，不用每次更新地址，效率较高`// char[] value; // 这个放在堆`
  
- StringBuffer的构造器

  - StringBuffer()：构造一个其中不带字符的字符串缓冲区，其初始容量为16个字符
  - StringBuffer(CharSequence seq)：public java.lang.StringBuilder(CharSequence seq)构造一个字符串缓冲区，它包含与指定的CharSequence相同的字符
  - StringBuffer(int capacity)  // capacity[容量]：构造一个不带字符，但具有指定初始容量的字符串缓冲区。即对char[]大小进行指定
  - StringBuffer(String str)：构造一个字符串缓冲区，并将其内容初始化为指定的字符串内容，char[] 大小就是str.length() + 16

- String和StringBuffer相互转换

  - String-->StringBuffer

    `String s = "hello";`

    `// 方式1 - 对str本身没有影响`

    `StringBuffer b1 = new StringBuffer(s);`

    `// 方式2`

    `StringBuffer b2 = new StringBuffer();`

    `b2.append(s);`

  - StringBuffer-->String

    `// 方式1`

    `String s2 = b1.toString(); // b1[StringBuffer]`

    `// 方式2`

    `String s3 = new String(b1);`


- StringBuffer类常见方法
  1. 增 append
  2. 删 delete(start,end)：删除索引大于等于start&&小于end处的字符
  3. 改 replace(start,end,string) //将start---end间的内容替换掉，不含end
  4. 查 indexOf //查找子串在字符串第1次出现的索引，如果找不到返回-1
  5. 插 insert
  6. 获取长度 length
  
- StringBuilder类基本介绍
  1. 一个可变的字符序列。此类提供一个与StringBuffer兼容的API，但不保证同步（StringBuilder不是线程安全的）。该类被设计用作StringBuffer的一个简易替换，用在字符串缓冲区被单个线程使用的时候。如果可能，建议优先采用该类，因为在大多数实现中，它比StringBuffer要快
  2. 在StringBuilder上的主要操作是append和insert方法，可重载这些方法，以接受任意类型的数据。
  
- StringBuilder常用方法

  StringBuilder和StringBuffer均代表可变的字符序列，方法是一样的，所以使用和StringBuffer一样

  1. StringBuilder是final类，不能被继承
  2. 继承了AbstractStringBuilder，属性char[] value，内容（对象字符序列）存到value，字符序列是堆中
  3. 实现了Serializable接口，序列化（所谓序列化即可以保存类型和数据本身），可以串行化（对象可以网络传输，还可以保存到文件）
  4. StringBuilder的方法，没有做互斥处理，即没有synchronized关键字，因此在单线程的情况下使用StringBuilder

- String、StringBuffer和StringBuilder的比较

  1. StringBuilder和StringBuffer非常类似，均代表可变的字符序列，而且方法也一样

  2. String：不可变字符序列，效率低，但是复用率高

  3. StringBuffer：可变字符序列、效率较高（增删）、线程安全

  4. StringBuilder：可变字符序列、效率最高、线程不安全

  5. String使用注意说明：

     string s = "a";// 创建了一个字符串

     s += "b"; // 实际上原来的“a”字符串对象已经丢弃了，现在又产生了一个字符串s+"b"（也就是"ab"）。如果多次执行这些改变串内容的操作，会导致大量副本字符串对象存留在内存中，降低效率。如果这样的操作放到循环中，会极大影响程序的性能=> 结论：如果我们对String做大量修改，不要使用String

- String、StringBuffer和StringBuilder的选择

  1. 如果字符串存在大量的修改操作，一般使用StringBuffer或StringBuilder
  2. 如果字符串存在大量的修改操作，并在单线程的情况，使用StringBuilder
  3. 如果字符串存在大量的修改操作，并在多线程的情况，使用StringBuffer
  4. 如果我们字符串很少修改，被多个对象引用，使用String，比如配置信息等

#### Math类

- 基本介绍：Math类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数
- 方法一览
  1. abs 绝对值
  2. pow 求幂
  3. ceil 向上取整
  4. floor 向下取整
  5. round 四舍五入
  6. sqrt 求开方
  7. random 求随机数
  8. max 求两个数的最大值
  9. min 求两个数的最小值

#### Date日期类、Calendar日历类以及新的日期

- 第一代日期类
  1. Date：精确到毫秒，代表特定的瞬间
  2. SimpleDateFormat：格式和解析日期的类，SimpleDateFormat格式化和解析日期的具体类。它允许格式化（日期->文本）、解析（文本->日期）和规范化

- 第二代日期类

  1. 第二代日期类，主要就是Calendar类（日历）

     `public abstract class Calendar extends Object implements Serializable,Cloneable,Comparable<Calendar>`

  2. Calendar类是一个抽象类，它为特定瞬间与一组诸如YEAR、MONTH、DAY_OF_MONTH、HOUR等日历字段之间的转换提供了一些方法，并为操作日历字段（例如获得下星期的日期）提供了一些方法

- 第三代日期类

  前面两代日期类的不足分析

  JDK1.0中包含一个java.util.Date类，但是它的大多数方法已经在JDK1.1引入Calendar类之后被弃用了。而Calendar也存在问题是：

  1. 可变性：像日期和时间这样的类应该是不可变的
  2. 偏移性：Date中的年份是从1900开始的，而月份都从0开始
  3. 格式化：格式化只对Date有用，Calendar则不行
  4. 此外，它们也不是线程安全的；不能处理闰秒等（每隔2天，多出1s）

- 第三代日期类常见方法

  1. LocalDate（日期）、LocalTime（时间）、LocalDateTime（日期时间）

     LocalDate只包含日期，可以获取日期字段

     LocalTime只包含时间，可以获取时间字段

     LocalDateTime包含日期+时间，可以获取日期和时间字段

  2. DateTimeFormatter格式日期类

     类似于SimpleDateFormat

     DateTimeFormat dtf = DateTimeFormatter.ofPattern(格式);

     String str = dtf.format(日期对象);

  3. Instant时间戳

     类似于Date

     提供了一系列和Date类转换的方式

     Instant ----->Date：

     Date date = Date.from(instant);

     Date ----->Instant：

     Instant instant = date.toInstant();

  4. 第三代日期类更多方法

     - LocalDateTime类
     - MonthDay类：检查重复事件
     - 是否是闰年
     - 增加日期的某个部分
     - 使用plus方法测试增加时间的某个部分
     - 使用minus方法测试查看一年前和一年后的日期

#### System类

- System类常见方法

  1. exit退出当前程序

  2. arraycopy：复制数组元素，比较适合底层调用，一般使用Arrays.copyOf完成复制数组

     `int[] src = {1, 2, 3};`

     `int[] dest = new int[3];`

     `System.arraycopy(src, 0, dest, 0, 3);`

  3. currentTimeMillens：返回当前时间距离1970-1-1的毫秒数

  4. gc：运行垃圾回收机制System.gc()

#### Arrays类

- 常见方法

  1. toString返回数组的字符串形式`Arrays.toString(arr)`

  2. sort排序（自然排序和定制排序）`Integer arr[] = {1, -1, 7, 0, 89};`

  3. binarySearch通过二分搜索法进行查找，要求必须排好序`int index = Arrays.binarySearch(arr, 3);`

  4. copyOf 数组元素的复制`Integer[] newArr = Arrays.copyOf(arr, arr.length);`

  5. fill数组元素的填充`Integer[] num = new Integer[]{9, 3, 2};`

     `Arrays.fill(num, 99);`

  6. equals比较两个数组元素内容是否完全一致`boolean equals = Arrays.equals(arr, arr2);`

  7. asList将一组值，转换成list`List<Integer> asList = Arrays.asList(2, 3, 4, 5, 6, 1);`

     `System.out.println("asList=" + asList);`

#### BigInteger类和BigDecimal类

- 应用场景
  1. BigInteger适合保存比较大的整型
  2. BigDecimal适合保存精度更高的浮点型（小数）
- BigInteger和BigDecimal常见方法
  1. add 加
  2. subtract 减
  3. multiply 乘
  4. divide 除

### 集合

#### 集合框架体系

- 数组的不足
  1. 长度开始时必须指定，而且一旦指定，不能更改
  2. 保存的必须为同一类型的元素
  3. 使用数组进行增加元素的示意代码，比较麻烦

- 集合的理解和好处
  1. 可以动态保存任意多个对象，使用比较方便！
  2. 提供了一系列方便的操作对象的方法：add、remove、set、get等
  3. 使用集合添加，删除新元素的示意代码，简洁明了
  
- 集合框架图

  ![](Java基础学习笔记韩顺平/集合框架图.png)

  解读：

  1. 集合主要是两组（单列集合，双列集合）
  2. Collection接口有两个重要的子接口 List  Set，他们的实现子类都是单列集合
  3. Map接口的实现子类，是双列集合，存放的是 key-value

#### Collection接口

- Collection接口实现类的特点
  1. collection实现子类可以存放多个元素，每个元素可以是Object
  2. 有些Collection的实现类，可以存放重复的元素，有些不可以
  3. 有些Collection的实现类，有些是有序的（List），有些不是有序的（Set）
  4. Collection接口没有直接的实现子类，是通过它的子接口Set和List来实现的
  
- Collection接口常用方法
  1. add：添加单个元素
  2. remove：删除指定元素
  3. contains：查找元素是否存在
  4. size：获取元素个数
  5. isEmpty：判断是否为空
  6. clear：清空
  7. addAll：添加多个元素
  8. containsAll：查找多个元素是否都存在
  9. removeAll：删除多个元素
  
- Collection接口遍历元素方式1-使用Iterator（迭代器）

  - 基本介绍

    ![](Java基础学习笔记韩顺平/Iterator结构.png)

    1. Iterator对象称为迭代器，主要用于遍历Collection集合中的元素
    2. 所有实现了Collection接口的集合类都有一个iterator()方法，用以返回一个实现了Iterator接口的对象，即可以返回一个迭代器
    3. Iterator的结构
    4. Iterator仅用于遍历集合，Iterator本身并不存放对象

  - 迭代器的执行原理

    `Iterator iterator = coll.iterator();//得到一个集合的迭代器`

    `//hasNext()：判断是否还有下一个元素`

    `while(iterator.hasNext()){`

    `//next()作用：①指针下移 ②将下移以后集合位置上的元素返回`

    `System.out.println(iterator.next());`

    `}`

    ![](Java基础学习笔记韩顺平/迭代器的执行原理.png)

    注意：在调用iterator.nexxt()方法之前必须调用iterator.hasNext()进行检测。若不调用，且下一条记录无效，直接调用iterator.next()会抛出NoSuchElementException异常。

- Collection接口遍历对象方式2-for循环增强

  增强for循环，可以代替iterator迭代器，特点：增强for就是简化版的iterator，本质一样。只能用于遍历集合或数组。

  - 基本语法

    `for(元素类型 元素名：集合名或数组名){`

    ​	`访问元素`

    `}`

- List接口和常用方法

  - List接口基本介绍

    List接口是Collection接口的子接口

    1. List集合类中元素有序(即添加顺序和取出顺序一致)、且可重复

    2. List集合中的每个元素都有其对应的顺序索引，即支持索引

    3. List容器中的元素都对应一个整数型的序号记载其在容器中的位置，可以根据序号存取容器中的元素

    4. JDK API中List接口的实现类有：

       常用的有：ArrayList、LinkedList和Vector

  - List接口的常用方法

    List集合里添加了一些根据索引来操作集合元素的方法

    1. void add(int index,Object ele)：在index位置插入ele元素
    2. boolean addAll(int index,Collection eles)：从index位置开始将eles中的所有元素添加进来
    3. Object get(int index)：获取指定index位置的元素
    4. int indexOf(Object obj)：返回obj在集合中首次出现的位置
    5. int lastIndexOf(Object obj)：返回obj在当前集合中末次出现的位置
    6. Object remove(int index)：移除指定index位置的元素，并返回此元素
    7. Object set(int index,Object ele)：设置指定index位置的元素为ele，相当于是替换
    8. List subList(int fromIndex,int toIndex)：返回从fromIndex到toIndex位置的子集合

  - List的三种遍历方式

    1. 方式一：使用iterator

       `Iterator iter = col.iterator();`

       `while(iter.hasNext()){`

       ​	`Object o = iter.next();`

       `}`

    2. 方式二：使用增强for

       `for(Object o:col){`

       `}`

    3. 方式三：使用普通for

       `for(int i = 0; i<list.size(); i++){`

       ​	`Object object = list.get(i);`

       ​	`System.out.println(object);`

       `}`

       说明：使用LinkedList完成使用方式和ArrayList一样

- ArrayList底层结构和源码分析

  - ArrayList的注意事项
    1. permits all elements, including null, ArrayList可以加入null，多个null也可以
    2. ArrayList是由数组来实现数据存储的
    3. ArrayList基本等同于Vector，除了ArrayList是线程不安全(执行效率高)看源码，在多线程情况下，不建议使用ArrayList
    
  - ArrayList的底层操作机制源码分析（重点，难点）

    1. ArrayList中维护了一个Object类型的数组elementData

       `transient Object[] elementData;// transient 表示瞬间，短暂的，表示该属性不会被序列化` 

    2. 当创建对象时，如果使用的是无参构造器，则初始elementData容量为0（jdk7是10）

    3. 当添加元素时：先判断是否需要扩容，如果需要扩容，则调用grow方法，否则直接添加元素到合适位置

    4. 如果使用的是无参构造器，如果第一次添加，需要扩容的话，则扩容elementData为10，如果需要再次扩容的话，则扩容elementData为1.5倍

    5. 如果使用的是指定容量capacity的构造器，则初始elementData容量为capacity

    6. 如果使用的是指定容量capacity的构造器，如果需要扩容，则直接扩容elementData为1.5倍

    ```注释
    注意：IDEA默认情况下，Debug显示的数据是简化后的，如果希望看到完整的数据，需要做设置Build，Execution，Deployment=》Debugger=》Data Views=》Java中取消勾选Enable alternative view for Collections classes
    ```

- Vector底层结构和源码剖析

  - Vector的基本介绍

    1. Vector类的定义说明

       ```java
       public class Vector<E> extends AbstractList<E> implements List<E>,RandomAccess,Cloneable,Serializable
       ```

    2. Vector底层也是一个对象数组

       `protected Object[] elementData;`

    3. Vector是线程同步的，即线程安全，Vector类的操作方法带有synchronized

       ```java
       public synchronized E get(int index){
           if(index >= elementCount)
               throw new ArrayIndexOutOfBoundsException(index);
           return elementData(index);
       }
       ```

    4. 在开发中，需要线程同步安全时，考虑使用Vector

  - Vector和ArrayList的比较

    ![](Java基础学习笔记韩顺平/Vector和ArrayList的比较.png)

- LinkedList底层结构

  - LinkedList的全面说明
    1. LinkedList实现了双向链表和双端队列特点
    2. 可以添加任意元素（元素可以重复），包括null
    3. 线程不安全，没有实现同步
    
  - LinkedList的底层操作机制

    1. LinkedList底层维护了一个双向链表

    2. LinkedList中维护了两个属性first和last分别指向首结点和尾结点

    3. 每个结点（Node对象），里面又维护了prev、next、item三个属性，其中通过prev指向前一个，通过next指向后一个结点。最终实现双向链表

    4. 所有LinkedList的元素的添加和删除，不是通过数组完成的，相对来说效率较高

       ![](Java基础学习笔记韩顺平/LinkedList的底层操作机制.png)

  - ArrayList和LinkedList的比较

    ![](Java基础学习笔记韩顺平/ArrayList和LinkedList的比较.png)

    如何选择ArrayList和LinkedList：

    1. 如果我们改查的操作多，选择ArrayList
    2. 如果我们增删的操作多，选择LinkedList
    3. 一般来说，在程序中，80%-90%都是查询，因此大部分情况下会选择ArrayList
    4. 在一个项目中，根据业务灵活选择，也可能这样，一个模块使用的是ArrayList，另外一个模块是LinkedList，也就是说，要根据业务来进行选择

- Set接口和常用方法

  - Set接口基本介绍

    1. 无序（添加和取出的顺序不一致），没有索引

    2. 不允许重复元素，所以最多包含一个null

    3. JDK API中Set接口的实现类有：

       ![](Java基础学习笔记韩顺平/Set接口和常用方法.png)

  - Set接口的常用方法

    和List接口一样，Set接口也是Collection的子接口，因此，常用方法和Collection接口一样

  - Set接口的遍历方式

    同Collection的遍历方式一样，因为Set接口是Collection接口的子接口。

    1. 可以使用迭代器
    2. 增强for
    3. 不能使用索引的方式来获取

- Set接口实现类-HashSet

  - HashSet的全面说明

    1. HashSet实现了Set接口

    2. HashSet实际上是HashMap

       ```java
       public HashSet(){
           map = new HashMap<>();
       }
       ```

    3. 可以存放null值，但是只能有一个null

    4. HashSet不保证元素是有序的，取决于hash后，再确定索引的结果

    5. 不能有重复元素/对象。在前面Set接口使用已经讲过

  - HashSet底层机制说明

    分析HashSet底层是HashMap，HashMap底层是（数组+链表+红黑树）

    ![](Java基础学习笔记韩顺平/HashSet底层机制说明.png)

    - 分析HashSet的添加元素底层是如何实现(hash()+equals())
      1. HashSet底层是HashMap
      2. 添加一个元素时，先得到hash值 -> 会转成 -> 索引值
      3. 找到存储数据表table，看这个索引位置是否已经存放的有元素
      4. 如果没有，直接加入
      5. 如果有，调用equals比较，如果相同，就放弃添加，如果不相同，则添加到最后
      6. 在Java8中，如果一条链表的元素个数到达TREEIFY_THRESHOLD（默认是8），并且table的大小>=MIN_TREEIFY_CAPACITY（默认是64），就会进行树化（红黑树)
    - 分析HashSet的扩容和转成红黑树机制
      1. HashSet底层是HashMap，第一次添加时，table数组扩容到16，临界值(threshold)是16\*加载因子(loadFactor)是0.75=12
      2. 如果table数组使用到了临界值12，就会扩容到16\*2=32，新的临界值就是32\*0.75=24，依次类推
      3. 在Java8中，如果一条链表的元素个数到达TREEIFY_THRESHOLD(默认是8)，并且table的大小>=MIN_TREEIFY_CAPACITY(默认是64)，就会进行树化(红黑树)，否则仍然采用数组扩容机制

- Set接口实现类-LinkedHashSet

  - LinkedHashSet的全面说明

    1. LinkedHashSet是HashSet的子类
    2. LinkedHashSet底层是一个LinkedHashMap，底层维护了一个数组+双向链表
    3. LinkedHashSet根据元素的hashCode值来决定元素的存储位置，同时使用链表维护元素的次序，这使得元素看起来是以插入顺序保存的
    4. LinkedHashSet不允许添重复元素

  - LinkedHashSet底层机制示意图

    ![](Java基础学习笔记韩顺平/LinkedHashSet底层机制示意图.png)

    说明

    1. 在LinkedHashSet中维护了一个hash表和双向链表(LinkedHashSet有head和tail)

    2. 每一个节点有pre和next属性，这样可以形成双向链表

    3. 在添加一个元素时，先求hash值，在求索引，确定该元素在hashtable的位置，然后将添加的元素加入到双向链表(如果已经存在，不添加【原则和和hashset一样】)

       ```java
       tail.next = newElement; // 简单指定
       newElement.pre = tail;
       tail = newElement;
       ```

    4. 这样的话，我们遍历LinkedHashSet也能确保插入顺序和遍历顺序一致

#### Map接口

- Map接口和常用方法

  - Map接口实现类的特点

    注意：这里讲的是JDK8的Map接口特点

    1. Map与Collection并列存在。用于保存具有映射关系的数据：key-value（双列元素）

    2. Map中的key和value可以是任何引用类型的数据，会封装到HashMap$Node对象中

    3. Map中的key不允许重复，原因和HashSet一样，前面分析过源码

    4. Map中的value可以重复

    5. Map的key可以为null，value也可以为null，注意key为null，只能有一个，value为null，可以多个

    6. 常用String类作为Map的key

    7. key和value之间存在单向一对一关系，即通过指定的key总能找到对应的value

    8. Map存放数据的key-value示意图，一对k-v是放在一个HashMap$Node中的，有因为Node实现了Entry接口，有些书上也说，一对k-v就是一个Entry

       ![](Java基础学习笔记韩顺平/Map接口的特点.png)

  - Map体系的继承图

    ![](Java基础学习笔记韩顺平/Map体系的继承图.png)

  - Map接口常用方法

    1. put：添加
    2. remove：根据键删除映射关系
    3. get：根据键获取值
    4. size：获取元素个数
    5. isEmpty：判断个数是否为0
    6. clear：清除
    7. containsKey：查找键是否存在

  - Map接口遍历方法

    - Map遍历的示意图（比List，和Set复杂点，但是基本原理一样）


    - Map遍历方式案例演示
      1. containsKey：查找键是否存在
      2. keySet：获取所有的键
      3. entrySet：获取所有关系
      4. values：获取所有的值

- Map接口实现类-HashMap

  - HashMap小结
    1. Map接口的常用实现类：HashMap、Hashtable和Properties
    2. HashMap是Map接口使用频率最高的实现类
    3. HashMap是以key-val对的方式来存储数据
    4. key不能重复，但是值可以重复，允许使用null键和null值
    5. 如果添加相同的key，则会覆盖原来的key-val，等同于修改（key不会替换，val会替换）
    6. 与HashSet一样，不保证映射的顺序，因为底层是以hash表的方式来存储的
    7. HashMap没有实现同步，因此是线程不安全的，方法没有做同步互斥操作，没有synchronized
    
  - HashMap底层机制及源码剖析

    ![](Java基础学习笔记韩顺平/HashMap底层机制示意图.png)

    1. (k,v)是一个Node实现了Map.Entry<K,V>，查看HashMap的源码可以看到
    2. jdk7.0的hashmap底层实现[数组+链表]，jdk8.0底层[数组+链表+红黑树]

    扩容机制：（和HashSet相同）

    1. HashMap底层维护了Node类型的数组table，默认为null
    2. 当创建对象时，将加载因子(loadfactor)初始化为0.75
    3. 当添加key-val时，通过key的哈希值得到在table的索引。然后判断该索引处是否有元素，如果没有元素直接添加。如果该索引处有元素，继续判断该元素的key和准备加入的key是否相等，如果相等，则直接替换val；如果不相等需要判断是树结构还是链表结构，做出相应处理。如果添加时发现容量不够，则需要扩容
    4. 第1次添加，则需要扩容table容量为16，临界值(threshold)为12
    5. 以后再扩容，则需要扩容table容量为原来的2倍，临界值为原来的2倍，即24，依此类推
    6. 在Java8中，如果一条链表的元素个数超过TREEIFY_THRESHOLD（默认是8），并且table的大小>=MIN_TREEIFY_CAPACITY（默认64），就会进行树化（红黑树）

- Map接口实现类-Hashtable

  - HashTable的基本介绍

    1. 存放的元素是键值对：即K-V
    2. hashtable的键和值都不能为null，否则会抛出NullPointerException
    3. hashTable使用方法基本上和HashMap一样
    4. hashTable是线程安全的(synchronized)，hashMap是线程不安全的

  - Hashtable和HashMap对比

    ![](Java基础学习笔记韩顺平/Hashtable和HashMap对比.png)

- Map接口实现类-Properties

  - 基本介绍

    1. Properties类继承自Hashtable类并且实现了Map接口，也是使用一种键值对的形式来保存数据

    2. 他的使用特点和Hashtable类似

    3. Properties还可以用于从 xxx.properties 文件中，加载数据到Properties类对象，并进行读取和修改

    4. 说明：工作后 xxx.properties 文件通常作为配置文件，这个知识点在IO流举例，有兴趣可先看文章

       https://www.cnblogs.com/xudong-bupt/p/3758136.html

- 总结-开发中如何选择集合实现类

  在开发中，选择什么集合实现类，主要取决于业务操作特点，然后根据集合实现类特性进行选择，分析如下：

  1. 先判断存储的类型（一组对象[单列]或一组键值对[双列]）
  2. 一组对象[单列]：Collection接口
  
     - 允许重复：List
       - 增删多：LinkedList [底层维护了一个双向链表]
       - 改查多：ArrayList [底层维护了Object类型的可变数组]
  
     - 不允许重复：Set
       - 无序：HashSet [底层是HashMap，维护了一个哈希表，即（数组+链表+红黑树）]
       - 排序：TreeSet
       - 插入和取出顺序一致：LinkedHashSet [底层LinkedHashMap的底层HashMap]，维护数组+双向链表
  3. 一组键值对[双列]：Map

     - 键无序：HashMap [底层是：哈希表 jdk7：数组+链表，jdk8：数组+链表+红黑树]
     - 键排序：TreeMap
     - 键插入和取出顺序一致：LinkedHashMap
     - 读取文件 Properties

#### Collections工具类的使用

- Collections工具类
  - Collections工具类介绍
    1. Collections是一个操作Set、List和Map等集合的工具类
    2. Collections中提供了一系列静态的方法对集合元素进行排序、查询和修改等操作
  - 排序操作：（均为static方法）
    1. reverse(List)：反转List中元素的顺序
    2. shuffle(List)：对List集合元素进行随机排序
    3. sort(List)：根据元素的自然顺序对指定的List集合元素按升序排序
    4. sort(List, Comparator)：根据指定的Comparator产生的顺序对List集合元素进行排序
    5. swap(List, int, int)：将指定list集合中的i处元素和j处元素进行交换
  - 查找、替换
    1. Object max(Collection)：根据元素的自然排序，返回给指定集合中的最大元素
    2. Object max(Collection, Comparator)：根据Comparator指定的顺序，返回给定集合中的最大元素
    3. Object min(Collection)
    4. Object min(Collection, Comparator)
    5. int frequency(Collection, Object)：返回指定集合中指定元素的出现次数
    6. void copy(List dest, List src)：将src中的内容复制到dest中
    7. boolean replaceAll(List list, Object oldVal, Object newVal)：使用新值替换List对象的所有旧值





