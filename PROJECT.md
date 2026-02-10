# Draw and Understand - Project Website

这是一个学术项目网站，展示"Draw and Understand"研究项目。

## 项目概述

本项目是一个基于 Next.js 16 + shadcn/ui 构建的现代化学术项目网站，用于展示研究成果、论文内容和团队信息。

## 功能特性

- **首页展示**
  - 项目简介和核心价值
  - 三大核心特点展示
  - 论文快速入口

- **论文详情页**
  - 论文摘要
  - 方法论介绍
  - 实验结果
  - 引用信息和 BibTeX

- **响应式设计**
  - 支持桌面端和移动端
  - 自适应布局

- **现代化 UI**
  - 使用 shadcn/ui 组件库
  - 简洁大气的学术风格
  - 支持深色模式

## 页面结构

```
/                    # 首页 - 项目概览
/paper              # 论文详情页
```

## 自定义内容

### 修改论文信息

编辑 `src/app/page.tsx` 和 `src/app/paper/page.tsx`，替换以下占位内容：

1. **作者信息**
   - `Author Name 1, Author Name 2, Author Name 3`
   - `Affiliation`

2. **论文标题**
   - `Draw and Understand: Visual Understanding through Sketch-based Interaction`

3. **论文内容**
   - Abstract（摘要）
   - Method（方法论）
   - Results（结果）

4. **引用信息**
   - BibTeX 格式
   - 会议信息

### 添加论文 PDF

1. 将 PDF 文件放入 `public/` 目录
2. 更新 `src/app/paper/page.tsx` 中的链接

### 添加 Demo

在 `src/app/page.tsx` 的 Demo 部分添加实际演示内容。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **UI 组件**: shadcn/ui (Radix UI + Tailwind CSS)
- **样式**: Tailwind CSS 4
- **图标**: Lucide React
- **语言**: TypeScript

## 开发指南

### 启动开发服务器

```bash
coze dev
```

访问 http://localhost:5000

### 构建生产版本

```bash
coze build
```

### 启动生产服务器

```bash
coze start
```

## 自定义建议

### 添加更多页面

1. 在 `src/app/` 下创建新文件夹
2. 添加 `page.tsx` 文件
3. 更新导航链接

### 添加主题色

编辑 `src/app/globals.css` 中的 CSS 变量：

```css
@layer base {
  :root {
    --primary: ...
    --secondary: ...
  }
}
```

### 添加动画效果

可以使用 `framer-motion` 或 CSS transitions 添加动画：

```tsx
<m.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  内容
</m.div>
```

## 部署

本项目使用 `.coze` 配置文件，可以一键部署到生产环境。

## 许可证

© 2024 Draw and Understand. All rights reserved.
