# Git 推送指南

## 环境限制说明

由于沙箱环境无法交互式输入Git凭据，您需要在本地环境中完成推送操作。

## 推送步骤

### 方法1：HTTPS推送（需要Gitee账号）

```bash
# 1. 如果还没有克隆项目，先克隆
git clone https://gitee.com/ricarvy/adnu-landing-page.git
cd adnu-landing-page

# 2. 或者如果已经有本地项目，添加remote
git remote add origin https://gitee.com/ricarvy/adnu-landing-page.git

# 3. 推送到远程（需要输入Gitee用户名和密码）
git push -u origin main
```

### 方法2：SSH推送（推荐，需要配置SSH密钥）

```bash
# 1. 检查是否已有SSH密钥
ls ~/.ssh/id_rsa.pub

# 2. 如果没有，生成SSH密钥
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# 3. 复制SSH公钥到Gitee
cat ~/.ssh/id_rsa.pub
# 访问 https://gitee.com/profile/sshkeys 添加公钥

# 4. 修改remote为SSH地址
git remote set-url origin git@gitee.com:ricarvy/adnu-landing-page.git

# 5. 推送到远程
git push -u origin main
```

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
git remote add origin https://gitee.com/ricarvy/adnu-landing-page.git

# 5. 添加所有文件并提交
git add .
git commit -m "feat: 完成 ADNU 项目论文展示网站"

# 6. 推送到远程
git push -u origin main
```

## 当前项目状态

- **Branch**: main
- **Remote**: https://gitee.com/ricarvy/adnu-landing-page.git
- **Latest Commits**:
  - `1f5dee2` feat: 完成 ADNU 项目论文展示网站
  - `061cdc4` feat: 创建学术项目网站 - Draw and Understand

## 推送后验证

推送成功后，您可以访问：
- https://gitee.com/ricarvy/adnu-landing-page

## 下一步

推送成功后，您可以在Gitee上：
1. 开启Gitee Pages服务
2. 配置自定义域名
3. 设置部署流水线

## 注意事项

- 首次推送HTTPS需要输入Gitee用户名和密码（不是邮箱）
- 如果启用了两步验证，需要使用个人访问令牌（Access Token）
- 建议使用SSH方式以避免每次输入凭据
