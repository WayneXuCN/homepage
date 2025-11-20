# Simple Portfolio

一个使用 React 19、Tailwind CSS 3 和 esbuild 构建的现代化、功能丰富的个人作品集。

## 预览

![网站预览](https://github.com/aaronzjc/homepage/blob/main/preview.png)

> **提示**：你可以替换上面的链接为你自己的项目截图。

## ✨ 功能特性

- **单页应用**：使用 `react-router-dom` 实现流畅的页面导航，无需重新加载页面。
- **多语言支持**：通过 `content.json` 集中管理中英文内容，轻松切换网站语言。
- **主题切换**：内置明亮（Light）与黑暗（Dark）两种主题模式。
- **动态内容与 SEO**：网站内容、页面标题和 meta 标签均由 `content.json` 动态生成，有利于 SEO。
- **纯静态邮件发送**：集成 [EmailJS](https.www.emailjs.com/)，无需后端即可实现联系表单功能。

## 🚀 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务器
npm run dev

# 3. 构建生产版本
npm run build
```

> **注意**：提交代码或部署前，请务必运行 `npm run build` 来生成最新的静态资源。

## 📂 项目结构

```text
├── .github/               # GitHub Actions CI/CD 配置
├── assets/                # 编译后的静态资源（CSS, JS）
├── src/                   # 应用源码
│   ├── components/        # React 组件（页面、布局、UI 元素）
│   ├── lib/               # 核心逻辑（上下文、工具函数等）
│   └── styles/            # Tailwind CSS 入口和自定义样式
├── build.js               # esbuild 构建脚本
├── content.json           # 网站所有内容的统一数据源 (中/英文)
├── index.html             # SPA 的唯一 HTML 入口文件
├── tailwind.config.js     # Tailwind CSS 配置文件
└── package.json           # 项目依赖与脚本配置
```

## 🛠️ 开发约定

- **核心架构**：项目为单页应用（SPA），`index.html` 是唯一的 HTML 入口。所有页面和路由由 React (`src/main.jsx`) 管理。
- **组件化开发**：所有功能和 UI 元素都应作为 React 组件在 `src/components/` 目录下进行模块化开发。
- **集中式内容管理**：所有文本、链接和元数据都存储在 `content.json` 中。新增或修改内容时，请直接编辑此文件。
- **样式方案**：所有样式通过 Tailwind CSS 和 `src/styles/main.css` 管理，编译后输出到 `assets/css/main.css`。
- **代码格式化**：项目使用 Prettier 自动格式化代码。提交前请运行 `npm run format` 以确保代码风格一致。

## 部署说明

为了确保 React Router 在生产环境中正常工作，你的 Web 服务器必须配置为将所有未匹配到的路径（例如 `/about`, `/contact`）重定向到根路径 `index.html`。这允许客户端路由接管并渲染正确的页面。

对于像 Netlify、Vercel 或 GitHub Pages 这样的现代托管平台，这通常是默认配置或可以通过简单的配置实现。

## 常用脚本

- `npm run dev`：启动开发服务器，并实时监听 JS、CSS 的变化。
- `npm run build`：为生产环境构建和优化所有资源。
- `npm run build:js`：仅使用 esbuild 构建 React 应用。
- `npm run build:css`：仅使用 Tailwind CLI 构建样式。
- `npm run format`：使用 Prettier 格式化所有相关文件。
- `npm run format:check`：检查代码是否符合 Prettier 格式化标准，但不修改文件。

## 邮件发送功能

联系表单使用 [EmailJS](https.www.emailjs.com/) 实现纯静态邮件发送，无需后端服务。

### 配置步骤

1. **注册 EmailJS**
   - 访问 [EmailJS 官网](https.www.emailjs.com/) 注册账号
   - 创建一个 Email Service（如 Gmail）
   - 创建一个 Email Template，确保模板变量名与表单字段一致：
     - `{{user_name}}` 对应 `name="user_name"`
     - `{{user_email}}` 对应 `name="user_email"`
     - `{{topic}}` 对应 `name="topic"`
     - `{{message}}` 对应 `name="message"`

2. **获取配置信息**
   - Service ID：在 Email Services 页面获取
   - Template ID：在 Email Templates 页面获取
   - Public Key：在 Account -> General 页面获取

3. **配置环境变量**
   - 在项目根目录的 `.env` 文件中添加：

     ```env
     EMAILJS_SERVICE_ID=your_service_id
     EMAILJS_TEMPLATE_ID=your_template_id
     EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **部署配置**
   - **本地开发**：直接运行 `npm run dev`，环境变量会自动加载
   - **服务器部署**：在部署平台（如 Vercel/Netlify）的环境变量设置中添加上述三个变量
