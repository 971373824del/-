# 惠王中心小学学生科学素养测评系统 - 详细部署指南

本指南将帮助您将网站部署到互联网上，以便您可以通过微信或QQ分享的链接在非局域网环境下访问和使用测评系统。

## 方案一：使用GitHub Pages（推荐 - 完全免费）

GitHub Pages是GitHub提供的免费静态网站托管服务，非常适合部署我们的测评系统。

### 步骤1：创建GitHub账号
1. 打开浏览器，访问 https://github.com/
2. 点击右上角的「Sign up」按钮
3. 填写以下信息：
   - 用户名：选择一个您喜欢的用户名（如 WangHuiCenterPrimary）
   - 邮箱：使用您常用的邮箱地址
   - 密码：设置一个安全的密码（至少7个字符）
4. 点击「Create account」
5. 完成邮箱验证（登录您的邮箱，点击GitHub发送的验证链接）

### 步骤2：创建新仓库
1. 登录GitHub后，点击右上角的「+」图标，选择「New repository」
2. 在「Repository name」中填写：`scientific-literacy-assessment`（或其他您喜欢的名称）
3. 仓库描述可以填写：「惠王中心小学学生科学素养测评系统」
4. 选择「Public」（公开）
5. 勾选「Add a README file」
6. 点击「Create repository」

### 步骤3：上传网站文件
1. 进入刚创建的仓库页面
2. 点击「Add file」按钮，然后选择「Upload files」
3. 点击「choose your files」按钮，打开文件选择窗口
4. 找到您的网站文件所在文件夹（c:\Users\asus\Desktop\科学评价）
5. 选择并上传以下3个文件：
   - `index.html`
   - `style.css`
   - `script.js`
6. 在页面底部的「Commit changes」部分：
   - 在「Commit message」中填写：`Initial upload of scientific literacy assessment system`
   - 点击「Commit changes」按钮

### 步骤4：启用GitHub Pages
1. 在仓库页面，点击顶部导航栏中的「Settings」（设置）
2. 在左侧菜单中，向下滚动并点击「Pages」
3. 在「Build and deployment」部分的「Source」中，选择「Deploy from a branch」
4. 在「Branch」部分：
   - 从第一个下拉菜单选择「main」（或「master」，取决于您的仓库默认分支）
   - 从第二个下拉菜单选择「/root」
   - 点击「Save」按钮
5. 页面会显示：「Your site is ready to be published at https://[您的用户名].github.io/scientific-literacy-assessment/」
6. 等待约5分钟，刷新页面，您的网站就会上线！

### 步骤5：分享您的网站
1. 复制生成的网站URL（如：https://yourusername.github.io/scientific-literacy-assessment/）
2. 直接通过微信或QQ分享这个链接给您的朋友
3. 他们现在就可以在任何地方访问和使用测评系统了！

## 方案二：使用本地服务器（详细指南）

如果您希望在本地环境或局域网内使用系统，或者需要频繁测试修改，可以使用以下本地部署方法：

### 方法1：使用Python内置服务器（推荐 - 无需额外安装）
1. **检查Python是否已安装**：
   - 打开命令提示符（按下Win+R，输入`cmd`后按回车）
   - 输入`python --version`并按回车
   - 如果显示Python 3.x.x（如Python 3.8.10），表示已安装
   - 如果未安装，可从官网下载：https://www.python.org/downloads/

2. **启动本地服务器**：
   - 打开「文件资源管理器」，找到网站文件所在文件夹（c:\Users\asus\Desktop\科学评价）
   - 在文件夹地址栏中输入`cmd`并按回车，打开命令提示符
   - 在命令提示符中输入以下命令并按回车：
     ```
     python -m http.server 8000
     ```
   - 您会看到类似以下输出：
     ```
     Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)
     ```

3. **访问本地网站**：
   - 打开浏览器，在地址栏输入`http://localhost:8000`并按回车
   - 您应该能看到测评系统的首页

4. **局域网访问（可选）**：
   - 查看本机IP地址：在命令提示符中输入`ipconfig`并按回车
   - 找到「IPv4地址」（如：192.168.1.100）
   - 同一局域网内的其他设备（如手机、平板）可通过`http://192.168.1.100:8000`访问网站

### 方法2：使用Node.js的http-server
1. **检查Node.js是否已安装**：
   - 打开命令提示符，输入`node --version`并按回车
   - 如果显示版本号（如v14.17.0），表示已安装
   - 如果未安装，可从官网下载：https://nodejs.org/zh-cn/

2. **启动本地服务器**：
   - 打开命令提示符，进入网站文件所在文件夹：
     ```
     cd c:\Users\asus\Desktop\科学评价
     ```
   - 输入以下命令并按回车：
     ```
     npx http-server -p 8000
     ```

3. **访问本地网站**：
   - 打开浏览器，在地址栏输入`http://localhost:8000`并按回车

### 方法3：直接打开HTML文件（简单但功能受限）
1. 找到`index.html`文件（c:\Users\asus\Desktop\科学评价\index.html）
2. 右键点击该文件，选择「打开方式」→「Microsoft Edge」或「Google Chrome」
3. 浏览器会直接打开网站

**注意事项**：
- 直接打开HTML文件时，部分功能（如数据存储）可能受限
- 建议使用方法1或方法2以获得完整功能

## 方案三：使用Netlify（高级选项 - 支持更多功能）

Netlify也是一个免费的静态网站托管服务，提供更丰富的功能。

### 步骤1：创建Netlify账号
1. 访问 https://www.netlify.com/
2. 点击「Sign up」，可以使用GitHub账号直接登录

### 步骤2：部署网站
1. 登录后，点击「Add new site」→「Import an existing project」
2. 选择「GitHub」，并授权Netlify访问您的仓库
3. 选择您的 `scientific-literacy-assessment` 仓库
4. 点击「Deploy site」按钮
5. Netlify会自动部署您的网站，并生成一个随机URL
6. 您可以点击「Site settings」→「Change site name」来自定义域名

## 重要注意事项

### 数据存储说明
- 本系统是纯前端实现，所有数据都存储在浏览器的本地存储中
- 学生的测评数据和管理员的密码都保存在浏览器的localStorage中
- 如果您使用不同的浏览器或设备登录，需要重新设置管理员密码

### 管理员账号使用
- 管理员账号：`admin`
- 默认密码：`HWZXXX`
- 首次登录后，建议通过「系统设置」修改密码
- 忘记密码时，可以使用「找回密码」功能（需要您设置安全问题）

### 网站更新步骤
当您需要更新网站内容时：
1. 修改本地的网站文件（index.html、style.css或script.js）
2. 登录到您的托管服务（GitHub/Gitee/Netlify）
3. 重新上传修改后的文件
4. 网站会自动更新（可能需要等待几分钟）

### 访问速度优化
- 如果您的用户主要在国内，推荐使用Gitee Pages或Netlify
- GitHub Pages在国内部分地区访问可能较慢
- 您可以考虑使用CDN服务进一步优化访问速度

## 常见问题与故障排除

### 问题1：网站部署后无法访问
- 检查URL是否正确输入
- 等待几分钟后重试（部署可能需要时间）
- 确认您上传了所有必要的文件（index.html、style.css、script.js）

### 问题2：网站样式显示不正常
- 检查style.css文件是否正确上传
- 确认index.html中是否正确引用了style.css文件
- 按Ctrl+F5强制刷新浏览器缓存

### 问题3：测评功能无法使用
- 检查script.js文件是否正确上传
- 打开浏览器控制台（按F12）查看是否有错误信息
- 确认您使用的是现代浏览器（Chrome、Firefox、Edge等）

### 问题4：管理员登录失败
- 确认账号是：`admin`
- 确认默认密码是：`HWZXXX`
- 如果修改过密码，请使用新密码
- 如果忘记密码，使用「找回密码」功能

## 测试您的网站

部署完成后，请按照以下步骤测试所有功能：

1. **学生端测试**：
   - 访问您的网站URL
   - 填写学生信息并点击「保存学生信息」
   - 进入「科学素养测试」页面，完成40道测试题
   - 点击「提交测试」查看测评报告

2. **管理端测试**：
   - 点击导航栏的「后台管理」
   - 使用账号 `admin` 和密码 `HWZXXX` 登录
   - 查看学生数据列表
   - 点击「查看报告」查看学生的详细测评结果
   - 尝试导出数据
   - 修改管理员密码

3. **功能完整性测试**：
   - 确认雷达图正常显示
   - 确认报告可以正常生成
   - 测试找回密码功能

## 联系支持

如果您在部署或使用过程中遇到任何问题，可以：
1. 查阅相关服务的官方文档
2. 在GitHub或Gitee的社区寻求帮助
3. 请技术人员协助您完成部署

祝您使用愉快！