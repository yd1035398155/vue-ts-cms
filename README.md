# 项目初始化

## vue-cli 搭建项目

```shell
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

```shell
git remote add origin https://github.com/yd1035398155/vue-ts-cms.git
git branch -M main
git push -u origin main
```

# 代码规范

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

## 配置 git Husky 和 eslint

- 在 git commit 之前会规范代码

```shell
npx husky-init ; npm install
```

- Commitizen 是一个帮助我们编写规范 commit message 的工具；

```shell
npm install commitizen -D
```

- 安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog：

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

- 这个时候我们提交代码需要使用 `npx cz`：

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

如果我们按照 cz 来规范了提交风格，但是依然有同事通过 `git commit` 按照不规范的格式提交应该怎么办呢？

- 我们可以通过 commitlint 来限制提交；

  1.安装 @commitlint/config-conventional 和 @commitlint/cli

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2.在根目录创建 commitlint.config.js 文件，配置 commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3.使用 husky 生成 commit-msg 文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

# 配置 router 和 vuex

## 创建文件夹 router,创建 index.ts

```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default router
```

## 创建文件夹 store,创建 index.ts

```ts
import { createStore } from 'vuex'
const store = createStore({
  state: () => {
    return {
      name: 'coderwhy'
    }
  }
})
export default store
```

## 最后在 main.js 中注册

# Element-plus 配置(PC 端)

安装 element-plus

```shell
npm install element-plus
```

可选择
全局引入:集成简单,但会打包整个 Element-Plus

```js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import store from './store'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
```

局部引入:包会小一些,但引用比较麻烦,

```js
import { defineComponent } from 'vue'

import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'App',
  components: {
    ElButton
  }
})
```

可查看官方文档自动局部引入,直接使用就可以自动引入元素和样式

# Axios 封装

npm i axios
默认为安装在生产环境 -S 生产环境 -D 开发环境

## 区分环境变量

生产环境和开发环境

- 1.手动区分
- 2.根据 process.env.NODE\*ENV 来区分
- 3.创建.env.development,.env.production,.env.test 设置环境变量,但必须以 VUE_APP***开头
  然后通过 process.env.VUE*APP\*** 来使用

  npm run build 打包后的文件在生产环境下,修改 vue.config.js,配置 publicPath: './'以解决资源加载问题,在部署到服务器时要删掉该配置

## 为 Axios 配置拦截器 service

# 开发登录页面

## 表单规则

编写好规则后,利用 :rules 进行绑定,在对应的 item 上 加 prop = 'property',最后:model = 'account'实时获取最新的输入
