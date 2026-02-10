# Git 推送指南

## 当前配置

- **Remote**: `git@github.com:ricarvy/adnu-landing-page.git`
- **Branch**: main
- **Protocol**: SSH (推荐)

## 推送步骤

### 方法1：SSH推送（已配置，推荐）

由于 remote 已设置为 SSH 地址，您可以直接推送：

```bash
# 推送到远程
cd /workspace/projects
git push -u origin main
```

如果提示 SSH 密钥未配置，请按以下步骤操作：

#### 配置SSH密钥

```bash
# 1. 检查是否已有SSH密钥
ls ~/.ssh/id_rsa.pub

# 2. 如果没有，生成SSH密钥
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 3. 复制SSH公钥到GitHub
cat ~/.ssh/id_rsa.pub
# 访问 https://github.com/settings/keys 添加公钥

# 4. 测试SSH连接
ssh -T git@github.com
```

### 方法2：HTTPS推送（备用）

如果SSH配置遇到问题，可以改用HTTPS：

```bash
# 1. 修改remote为HTTPS地址
git remote set-url origin https://github.com/ricarvy/adnu-landing-page.git

# 2. 推送到远程（需要输入GitHub用户名和Personal Access Token）
git push -u origin main
```

**注意**: GitHub 不再支持密码认证，需要使用 Personal Access Token。获取方式：
1. 访问 https://github.com/settings/tokens
2. 生成新的 token (repo权限)
3. 使用 token 作为密码

### 方法3：从沙箱导出后推送

如果您想保留沙箱中的所有更改：

```bash
# 1. 从沙箱导出项目文件
# （将 /workspace/projects 目录下的所有文件打包下载）

# 2. 在本地创建项目目录
mkdir adnu-landing-page
cd adnu-landing-page

# 3. 初始化Git仓库
git init

# 4. 添加remote
git remote add origin git@github.com:ricarvy/adnu-landing-page.git

# 5. 添加所有文件并提交
git add .
git commit -m "feat: 完成 ADNU 项目论文展示网站"

# 6. 推送到远程
git push -u origin main
```

## 当前项目状态

- **Branch**: main
- **Remote**: git@github.com:ricarvy/adnu-landing-page.git
- **Latest Commits**:
  - `9b243ac` feat: 更新会议信息为 NeurIPS 2026
  - `1f5dee2` feat: 完成 ADNU 项目论文展示网站
  - `061cdc4` feat: 创建学术项目网站 - Draw and Understand

## 推送后验证

推送成功后，您可以访问：
- https://github.com/ricarvy/adnu-landing-page

## 下一步

推送成功后，您可以在GitHub上：

1. **开启GitHub Pages服务**
   - 进入仓库 → Settings → Pages
   - 选择部署分支：main
   - 选择部署目录：根目录 (/)
   - 保存后等待几分钟，GitHub会提供访问URL

2. **配置自定义域名**（可选）
   - 在Pages设置中添加自定义域名
   - 配置DNS解析

3. **设置自动化部署**
   - 使用GitHub Actions
   - 或连接到其他部署平台（Vercel、Netlify等）

## 常见问题

### SSH连接失败

```bash
# 测试SSH连接
ssh -T git@github.com

# 如果提示权限被拒绝，确保：
# 1. SSH密钥已添加到GitHub账户
# 2. 使用正确的SSH密钥
# 3. GitHub的SSH指纹已确认
```

### 推送被拒绝

```bash
# 如果远程有更新，先拉取
git pull --rebase origin main

# 然后再推送
git push origin main
```

### HTTPS认证失败

```bash
# GitHub不再支持密码，必须使用Personal Access Token
# 访问 https://github.com/settings/tokens 生成token
# 在推送时输入GitHub用户名作为用户名，token作为密码
```

## 注意事项

- 推荐使用SSH方式，避免每次输入凭据
- HTTPS方式需要使用Personal Access Token（不是密码）
- 确保远程仓库地址正确无误
