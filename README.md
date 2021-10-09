# 前端开发


## 考试提交要求
  
1、本次测试是以开放式实践考试为主，可以选择在自己的电脑上操作，也可以使用[codesandbox](http://codesandbox.io/)注册账号，在线编码完成考试。考试截至时间为2021-10-09 12:00 <br>
2、为阅卷方便，请将考试所完成内容通过codesandbox 中的Deployment发布，如下图：
![输入图片说明](https://images.gitee.com/uploads/images/2021/0929/152712_5c7f0120_5165327.png "屏幕截图.png")<br>
3、将发布出来的网址保存在TXT文档里面，文档以个人姓名命名，提交到本仓库下。



## 前言
经过前端工作实践，想必各位想测试一下自己有何收获。

本Quiz模拟迭代开发一个小而功能完善的前端应用，共20个功能点。在检查功能点时只需检查最终实现即可。例如：当你完成了6.6，并且功能正确，即可认为在此之前的功能点都已正确完成。

请结合所学，尽力完成本次Quiz中的各个题目。

提示：善于参考文档和资源网站是Web开发的重要能力，如果发现自己所学内容有所遗忘，可以善用搜索引擎和我们提供的参考网站，如:
- https://reactjs.org/
- https://developer.mozilla.org/zh-CN/
- https://ant.design/index-cn
- https://umijs.org/guide/

## 0. git的使用(10')(累计: 10')
git是团队开发项目的基础工具，请回忆git的使用方式，并从Gitee上下载此考试文档。
git的三个基本动作


## 1. 项目创建(10')(累计: 20')
使用脚手架创建一个React项目，并成功运行，展示index界面。

提示：你可以使用umi或create-react-app，不要忘记安装依赖。

效果参考:
![](./images/1.png)

## 2. 路由(20')
### 2.1 路由配置(10')(累计: 30')
现在你已经有了一个项目，请在项目中添加路由，并提供至少两个页面，employee和list。

效果参考：输入不同的url，可以切换到不同的页面即可。

### 2.2 页面切换(10')(累计: 40')
为你的页面提供切换功能，即在你的页面中添加页面跳转的按钮/菜单/导航栏，使得页面切换可以在页面中完成。

效果参考：
![](./images/2-2-1.png)
![](./images/2-2-2.png)

## 3. 组件(10')(累计: 50')
在你的list页面中实现一个表格组件，表格需要展示如下信息，并在每行最后提供两个操作按钮 edit与delete：
```JSON
[
  {
    "key": "1",
    "firstName":  "John",
    "lastName":  "Brown",
    "age":  32,
    "address":  "New York No. 1 Lake Park",
    "tags":  ["nice", "developer"],
  },
  {
    "key": "2",
    "firstName":  "Jim",
    "lastName":  "Green",
    "age":  42,
    "address":  "London No. 1 Lake Park",
    "tags":  ["loser"],
  },
  {
    "key": "3",
    "firstName":  "Joe",
    "lastName":  "Black",
    "age":  32,
    "address":  "Sidney No. 1 Lake Park",
    "tags":  ["cool", "teacher"],
  }
]
```

提示：你可以直接引入ant desing的Table组件，事实上以上数据就来自于ant design table的官方例子（https://ant.design/components/table-cn/），并在此基础上稍作修改。

效果参考：
![](./images/3.png)

## 4. state(10')(累计: 60')
如果你直接引入了antd的table，那么此时数据是静态的，即使点击了delete，数据也不会被删除。请将上述data转移到组件的state中，并添加delete功能，使得delete被点击时，该条数据被删除。

提示：请仔细回忆如何在组件中初始化一个state，以及setState方法如何使用？

效果参考：点击delete后该条数据被删除即可。

## 5. 页面间数据共享(30')

### 5.2 从state到store-1(10')(累计: 70')
我们的学习过程中提到state管理的是组件内部的状态，如果想要employee和list页面共享一份数据，我们需要使用的是一个共享的数据store，请把之前保存在state内的数据改写到store内，并使用store内的数据初始化list页面中的表格。

提示：你可以使用redux或dva，如果你遗忘了如何使用，可以参考官方文档或善用搜索引擎。

效果参考：同第3题。

### 5.3 从state到store-2(10')(累计: 80')
在4中，我们通过state实现了delete功能，现在请将其改为通过store实现。

效果参考：同第4题。

### 5.4 从state到store-3(10')(累计: 90')
现在，你可以将employee页面与list页面相连接了，你需要在employee页面中打印出store内的数据。

效果参考：在employee中能打印出
```JSON
[
  {
    "key": "1",
    "firstName":  "John",
    "lastName":  "Brown",
    "age":  32,
    "address":  "New York No. 1 Lake Park",
    "tags":  ["nice", "developer"],
  },
  {
    "key": "2",
    "firstName":  "Jim",
    "lastName":  "Green",
    "age":  42,
    "address":  "London No. 1 Lake Park",
    "tags":  ["loser"],
  },
  {
    "key": "3",
    "firstName":  "Joe",
    "lastName":  "Black",
    "age":  32,
    "address":  "Sidney No. 1 Lake Park",
    "tags":  ["cool", "teacher"],
  },
]
```
在list中删除一条数据（如第一条）后，跳转回employee页面，打印出删除后的数据。
```JSON
[{
    "key": "2",
    "firstName":  "Jim",
    "lastName":  "Green",
    "age":  42,
    "address":  "London No. 1 Lake Park",
    "tags":  ["loser"],
  },
  {
    "key": "3",
    "firstName":  "Joe",
    "lastName":  "Black",
    "age":  32,
    "address":  "Sidney No. 1 Lake Park",
    "tags":  ["cool", "teacher"],
  },
]
```


## 6 综合题(60')
### 6.1 employee详情页面(10')(累计: 100')
请在employee页面中添加表单组件，形成employee的编辑页面，你需要提供FirstName，LastName，Age，Address的编辑组件，并提供一个Submit按钮用于提交数据。

提示1：本次测验全过程不会使用复杂的表单功能，因此你可以使用自己实现的简易表单组件，或是不使用表单组件，简单地插入4个input组件，和一个按钮，并分别进行管理。

提示2： 你也可以使用ant design的Form组件(https://ant.design/components/form/)，事实上这是antd组件库的重要部分，也是实际开发中更常用的选项。如果你选用ant design的Form组件，由于ant design的1-4四个大版本中Form的API都有大幅不同，请务必确保你使用的ant design版本与你查看的ant design/form文档**版本一致**。你可以查看package.json来确认自己的ant design版本号。

效果参考：
![](./images/5-1.png)

### 6.2 路由-2(10')(累计: 110')
在第二题中，我们实现了list和employee的跳转。在第5题中，我们在employee页面打印了整个数组。

真正的详情页需要单独展示一条数据，请在list页面中的edit按钮上实现新的路由跳转，使得点击某条数据的edit页面后，能够跳转到该条数据对应的详情页。

提示：你可以使用在employee页面的路由中添加**query参数**或**约定式路由**或来区分不同的数据，例如对于Joe，你可以跳转到"\/employee?key=3"或"/employee/3"。

### 6.3 路由-3(10')(累计: 120')
如果你完成了5.4，想必你已经可以在employee页面中获取到所有的store中的数据。在6.2中，我们已经可以从路由区分当前的详情页属于哪一条数据。

请依据路由中的信息，将5.4中在employee打印的所有数据改为打印与路由信息标识的那一条数据。

提示：还记得第2题吗，之前我们通过第2题的按钮跳转到"/employee"，这时employee可能并不是从6.2的edit跳转而来，因此没有query参数，或是约定式子路由。实际开发中如果不处理这种情况，很可能导致bug。因此在读取路由信息时，别忘了处理不带query参数或是约定式子路由的情况，例如你可以在此时打印完整的store数据。

效果参考：例如当前路由为"\/employee?key=3"，则打印
```JSON
  {
    "key": "3",
    "firstName":  "Joe",
    "lastName":  "Black",
    "age":  32,
    "address":  "Sidney No. 1 Lake Park",
    "tags":  ["cool", "teacher"],
  }
```

### 6.4 employee详情页面2(10')(累计: 130')
我们已经从6.3得到了当前页面的数据，从6.1得到了这些数据对应的编辑组件。

请使用6.3的数据初始化6.2的组件。

提示1：请参考该组件对应的文档来实现初始化。

提示2：和6.3一样，别忘了处理不带query参数或是约定式子路由的情况，例如你可以在此时，不对组件进行初始化。

效果参考：在组件中显示对应的值即可。

### 6.5 employee详情页面3(10')(累计: 140')
是时候让Submit按钮发挥作用了。

请实现Submit功能，使用employee页面组件编辑数据，并在list页面正常显示。

效果参考：例如在employee页面中将Joe的age改为99，跳转到list查看，对应数据变为99。

### 6.6 employee详情页面4(10')(累计: 150')
6.3中的提示已经指出，employee页面除了"/employee?key=1"，"/employee?key=2"，"/employee?key=3"以外，还有个"/employee"页面，让我们为这个页面分配一个功能。

当employee页面没有query参数或是约定式子路由时，可以通过Submit将表单内容push到store中的数组。

提示1: 6.1中employee页面上只有FirstName，LastName，Age，Address四个输入组件，而实际的data还有key和tags字段。

- tags：对于tags字段，我们不作要求，你可以在Submit时简单地添加一个tags字段并设置为空数组。
- key：如果你在6.3中是通过key来区分Joe，Jim和John，那么对于新的数据，你也需要为它分配一个key，例如你可以将key设置为当前store中的数组长度+1。否则该数据的edit功能会出现bug。

效果参考: 在"/employee"页面新增一条数据，Submit后在list页面查看成功即可。
![](./images/6-6-1.png)
![](./images/6-6-2.png)

## 结语
上述题目实现的例子，小鸟虽小而五脏俱全。如果你顺利完成了0-6的内容，恭喜你已经掌握了前端开发的新潮核心科技。

## 7 附加题(50')
培训过程中附加题内容并非重点，因为时间有限，且此部分内容并非前端开发核心。然而掌握附加题技能想必可以令各位成为**更高阶**的前端开发者，请各位善用搜索引擎和官方文档，攻克难关。
### 7.1 mock(10')(累计: 160')
在前端后台分离的开发中，有时后端大哥不可避免地API实现的很慢，这时我们就需要模拟(mock)出一套和后台一致的接口，从而使得我们避免等待，早写完早下班。

请把第3题中的数据复制，并保存到data.json。

请实现一个mock接口，"GET /api/data"，并返回data.json中的数据。

提示1：如果你不知道什么是GET，请善用搜索引擎，学习Restful接口知识。

提示2：如果你使用了umi框架，你可以查阅https://umijs.org/zh-CN/docs/mock。如果你没有使用umi，可以使用第三方的库，例如mockjs，并善用搜索引擎学习其使用，例如https://juejin.cn/post/6844904104750219271。

提示3：在react中引用data.json并不复杂，import data from "./data.json"(你需要改为data.json所在的路径)。

效果参考：如果前端项目运行于localhost:8000，只需在浏览器访问localhost:8000/api/data，查看是否打印正确即可。

### 7.2 mock-2: 简易持久化(20')(累计: 180')
请实现一个mock接口，"POST /api/data"。接收一个post请求，发起请求时需要附带一个body，接口收到body后将body数据写入data.json。

提示1：如果你不知道什么是POST，什么是body，请善用搜索引擎，学习POST请求格式。

提示2：如果你不知道如何获取body，可以查看以下umi示例，如果你使用的不是umi，请善用浏览器查阅相关文档。
```javascript
// mock/api.js
export default {
  "POST /api/users/create": (req, res) => {
    // 添加跨域请求头
    res.setHeader("Access-Control-Allow-Origin", "*');
    console.log(req.body);
    res.end("ok');
  },
}
```
提示3：如果你不知道如何写入文件，可以使用Nodejs自带的fs库（无需通过npm install来安装）：
```javascript
import fs from "fs"
```
并调用writeFileSync方法
```javascript
fs.writeFileSync(...)
```
关于writeFileSync方法的使用，请善用搜索引擎，查阅MDN等网站。

提示4：当写入文件时，通常不能直接写入一个JavaScript对象（如Object或Array），你需要将它转换为字符串，例如使用JSON.stringify()等库函数（无需安装，无需import）。如果你不清楚它的用法，请善用搜索引擎，查阅MDN等网站。

效果参考：你可以使用命令行工具如wget，或是带GUI的应用如postman来模拟一个post请求，如果你不清楚他们的使用，请善用搜索引擎。发起post请求，在body中写入一个object或array，发起请求后发现data.json内容变化即可。

### 7.3 mock-3: 模拟后台调用(20')(累计: 200')
我们已经实现了从静态文件(data.json)的数据获取和写入，最后一步我们需要将数据接入到store，模拟从前端请求数据->初始化store->在前端修改数据->将store中的数据发送到后台的完整流程。

你需要将store中原有的初始化数据改成空数组，并通过调用"GET /api/data"来初始化数据。

你需要实现一个Commit按钮，点击Commit按钮后调用"POST /api/data"数据将当前store数据写入data.json。

提示1：如果你不清楚如何发起向后台的请求，请参考dva或redux的相关文档和帖子，如https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/tutorial/07-%E6%B7%BB%E5%8A%A0Effects.md。

提示2：dva的官方文档写的并不详细，很可能无法解决你的问题，这种情况也不只限于dva，搜索一些相关的帖子和样例代码可以令你有所收获。

效果参考：在employee或list页面修改数据后查看data.json，发现数据出现对应改变即可。

## 结语-2
如果你完成了所有的附加题，恭喜你已经成为全面的前端技术人员，请自信地从事前端开发。如果你是初学者，请务必给予攻克难关的自己一些奖励，这真的很了不起。