# 项目初始化

## vue-cli 搭建项目

```
vue create vue-ts-cms
Babel 代码转换
Typescript
Vue-router 手动配置
Vuex 手动配置
Css pre-process
Linter/Formatter 代码规范
```

## github 托管代码

github 上先创建一个仓库 vue-ts-cms

```
git remote add origin https://github.com/yd1035398155/vue-ts-cms.git
git branch -M main
git push -u origin main
```

## 配置.editorconfig

实现多人开发代码的统一.
配置好后,vscode 需安装插件

```
EditorConfig for VS Code
```

## 安装配置.prettierrc

统一代码规范
配置.prettierignore
package.json 中的 script 中配置
"prettier": "prettier --write ."
