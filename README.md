# Hydrus

基于Canvas的可视化行为树编辑工具，包含编辑和调试2大模块，
+ 编辑模块：提供可视化行为树编辑功能
+ 调试模块：提供JS代码加载绑定和运行功能，查看输出日志和Blackboard变量值

![image](https://github.com/guobinnew/Hydrus/blob/master/screenshots/editor.png?raw=true)

## 编译

```
npm install -g vue-cli
git clone https://github.com/guobinnew/Hydrus.git
npm install
npm run serve
```

## 使用说明

### 编辑器

![image](https://github.com/guobinnew/Hydrus/blob/master/screenshots/editor.png?raw=true)

#### 行为树节点
+ Selector 选择节点
+ Sequence 序列节点
+ Parallel 并行节点
+ Task 任务节点

#### 行为树标签
+ Decorator 条件标签
+ Service 服务标签

### 调试器
