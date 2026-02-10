# Vercel 部署指南和故障排除

## 当前状态

您的项目已配置为支持 Vercel 部署，但遇到了 `404: NOT_FOUND` 错误。

## 已完成的配置

### 1. 创建了 `vercel.json` 配置文件
```json
{
  "version": 2,
  "buildCommand": "pnpm build",
  "outputDirectory": ".next",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["hkg1"]
}
```

### 2. 更新了 `package.json` 脚本
添加了 Vercel 兼容的构建脚本：
- `vercel-build`: 标准的 Next.js 构建命令
- `vercel-start`: 标准的 Next.js 启动命令

## 故障排除步骤

### 方法 1：重新部署（推荐）

1. **访问 Vercel 项目**
   - 登录 https://vercel.com/dashboard
   - 找到 `adnu-landing-page` 项目

2. **检查构建日志**
   - 点击进入项目
   - 查看 "Deployments" 标签
   - 点击最新的部署查看详细日志
   - 查找红色错误信息

3. **重新触发部署**
   - 点击 "Redeploy" 按钮
   - 确保分支选择 `main`
   - 点击 "Redeploy" 确认

### 方法 2：在 Vercel 中手动配置

1. **访问项目设置**
   - 进入项目 → Settings → General

2. **检查 Root Directory**
   - 确保设置为 `/`（根目录）
   - 如果不正确，修改后重新部署

3. **检查 Build & Development Settings**
   - 进入 Settings → Build & Development
   - **Framework Preset**: Next.js
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`
   - **Development Command**: `pnpm dev`

4. **保存并重新部署**

### 方法 3：使用 GitHub 集成（推荐长期方案）

1. **重新连接 GitHub 仓库**
   - 在 Vercel 项目中，进入 Settings → Git
   - 断开现有连接
   - 重新连接到 https://github.com/ricarvy/adnu-landing-page.git

2. **配置环境变量**（如果需要）
   - 进入 Settings → Environment Variables
   - 添加任何必需的环境变量

3. **触发自动部署**
   - 确保分支设置为 `main`
   - 推送新代码会自动触发部署

### 方法 4：使用 Vercel CLI

```bash
# 1. 安装 Vercel CLI
pnpm add -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel --prod
```

## 常见问题和解决方案

### 问题 1: 构建失败 - "bash: ./scripts/build.sh: No such file or directory"

**原因**: Vercel 不支持自定义 bash 脚本作为构建命令

**解决方案**:
- 已在 `vercel.json` 中配置了标准的 Next.js 构建命令
- 在 Vercel 设置中，将 Build Command 改为 `pnpm build`

### 问题 2: 依赖安装失败

**原因**: `preinstall` 脚本强制使用 pnpm

**解决方案**:
1. 在 Vercel 项目设置中，确保 Package Manager 设置为 `pnpm`
2. 或者在 `vercel.json` 中明确指定：
   ```json
   {
     "installCommand": "pnpm install --prefer-frozen-lockfile"
   }
   ```

### 问题 3: 404 NOT_FOUND

**可能原因**:
1. 构建失败但没有正确报告
2. 输出目录配置错误
3. 构建命令没有正确执行

**解决方案**:
1. 检查构建日志，查看具体错误
2. 确保 Output Directory 设置为 `.next`
3. 尝试手动清理部署缓存：
   - 进入项目 → Deployments
   - 点击问题部署 → Rebuild with Cache Disabled

### 问题 4: Next.js 16 兼容性问题

Next.js 16 是较新版本，可能需要特定配置：

**解决方案**:
1. 确保 `package.json` 中 Next.js 版本为 `16.1.1`
2. 在 `next.config.ts` 中添加：
   ```typescript
   const nextConfig: NextConfig = {
     // ... 其他配置
     experimental: {
       serverActions: {
         allowedOrigins: ['localhost:3000']
       }
     }
   };
   ```

## 验证部署

部署成功后，检查以下内容：

1. **访问首页**
   - 应该显示 ADNU 首页
   - URL 类似: `https://adnu-landing-page.vercel.app`

2. **访问论文页**
   - 访问 `/paper` 路径
   - 应该显示完整的论文详情

3. **检查控制台**
   - 打开浏览器开发者工具
   - 查看是否有 JavaScript 错误
   - 检查网络请求是否成功

4. **测试响应式**
   - 在移动设备上测试
   - 检查导航菜单是否正常工作

## 性能优化建议

### 1. 启用图片优化
Next.js 自动优化图片，确保使用 `<Image>` 组件：
```tsx
import Image from 'next/image';
<Image src="/path/to/image.jpg" alt="Description" width={800} height={600} />
```

### 2. 配置缓存策略
在 `vercel.json` 中添加：
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, must-revalidate"
        }
      ]
    }
  ]
}
```

### 3. 优化构建时间
- 使用 `--prefer-offline` 标志加速安装
- 在 `vercel.json` 中配置：
  ```json
  {
    "installCommand": "pnpm install --prefer-offline"
  }
  ```

## 自定义域名（可选）

部署成功后，可以添加自定义域名：

1. 在 Vercel 项目中，进入 Settings → Domains
2. 点击 "Add Domain"
3. 输入您的域名
4. 按照提示配置 DNS 记录

## 监控和分析

### 1. Vercel Analytics
自动启用，可在 Dashboard 查看：
- 页面浏览量
- 唯一访客
- 核心网页指标

### 2. 错误追踪
- 在项目 → Logs 中查看实时日志
- 设置错误通知

### 3. 性能监控
- 使用 Vercel Speed Insights
- 查看 Core Web Vitals

## 获取帮助

如果问题仍然存在：

1. **查看 Vercel 文档**
   - https://vercel.com/docs

2. **联系 Vercel 支持**
   - 在 Dashboard 中提交支持工单

3. **检查项目日志**
   - 详细的错误信息通常在构建日志中

## 下一步

部署成功后，您可以考虑：
1. 配置持续部署（CD）
2. 添加性能监控
3. 设置错误警报
4. 配置自定义域名
5. 优化 SEO 设置

## 快速参考

### 重要的 Vercel 配置文件
- `vercel.json` - Vercel 部署配置
- `package.json` - 构建脚本
- `next.config.ts` - Next.js 配置

### 常用命令
```bash
# 本地测试构建
pnpm build

# 本地测试生产环境
pnpm start

# 使用 Vercel CLI 部署
vercel --prod

# 查看部署状态
vercel ls
```

### 关键设置
- Framework: Next.js
- Build Command: `pnpm build`
- Output Directory: `.next`
- Install Command: `pnpm install`
