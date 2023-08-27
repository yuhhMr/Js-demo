# Js-demo

这是一个学习项目，使用 [vanilla-js](http://vanilla-js.com/) 技术。

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) +
[IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
## Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
### preview
```sh
npm run preview
```
## Git 代码提交规范

### Commit Message Specifications:

type: Description

Example:

feat: Support for async execution

1. Between type and description MUST has a colon and a space.

Type 类型必须是下面之一，并且为小写:

* feat: 修改/增加新功能
* fix: 修改bug的变更
* docs: 文档相关变更
* style: 不影响代码含义的变更(空白、格式、缺少符号等)
* refactor: 代码重构变更
* perf: 改进性能的变更
* test: 添加/修改现有的测试
* chore: Build, .gitignore或辅助工具、库(如文档生成)等变更

### Branch Name Regex

Branches must begin with these types: bugfix/ feature/ release/ hotfix/