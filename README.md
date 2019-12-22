 #### 说明
基于vue-cli 实现单页面和多页面开发。
涉及技术vue vuex vue-router axios vant(M) element-ui(PC)

### 框架架构
```
  |-public
	|-css           样式
	|-js            js
	|-img           图片
	|-index.html    单页面入口
  |-src
	|-api           接口
	|-assets        默认资源
	|-components    组件库
	  |-ui 
	  |-page
	|-config        配置文件
	|-page          多页面文件
	  |-demo        测试多页面 
		|-app.vue   入口配置
		|-demo.html 入口页面
		|-demo.js   页面js
		|-demo.vue  
	|-router        路由
	|-store         数据状态
	|-utils         常用工具
	|-view          单页面应用
  |-Vue.config.js   配置文件
  |-page.js         单页面多页面配置
  
```	  

## 安装依赖
```
npm install
```

### 开发编译热加载
```
npm run serve
```

### 生产构建

```
npm run build
```



### 设置淘宝源
```
npm config set registry https://registry.npm.taobao.org

```

