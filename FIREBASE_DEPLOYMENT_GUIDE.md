# Firebase云端数据库部署指南

## 一、什么是Firebase？

Firebase是Google提供的一款云端服务平台，包含数据库、认证、存储等功能。我们可以利用Firebase的实时数据库功能，实现跨设备的数据共享，解决A电脑测试数据无法在B电脑端后台看到的问题。

## 二、Firebase项目创建与配置

### 1. 访问Firebase官网

打开浏览器，访问 [Firebase官网](https://firebase.google.com/)，点击右上角的 "Go to console" 按钮。

### 2. 创建Firebase项目

1. 登录您的Google账号（如果没有，请先注册）
2. 点击 "Add project" 创建新项目
3. 输入项目名称（如 "科学素养测评系统"）
4. 选择您所在的国家/地区（如 "中国"）
5. 点击 "Create project" 完成创建

### 3. 启用实时数据库

1. 在Firebase控制台左侧菜单中，点击 "Realtime Database"
2. 点击 "Create Database" 按钮
3. 选择数据库位置（建议选择 "asia-east1" 或 "asia-northeast1"）
4. 选择 "测试模式"（后续可改为安全模式）
5. 点击 "Enable" 启用数据库

### 4. 获取Firebase配置信息

1. 在Firebase控制台左侧菜单中，点击 "Project settings"
2. 在 "General" 选项卡中，找到 "Your apps" 部分
3. 点击 "添加应用" 按钮（选择 Web 图标）
4. 输入应用名称（如 "科学素养测评系统"）
5. 不要勾选 "Also set up Firebase Hosting"（可选）
6. 点击 "Register app" 完成注册
7. 在 "SDK setup and configuration" 部分，复制 `firebaseConfig` 对象的内容

## 三、系统配置

### 1. 配置Firebase参数

打开 `script.js` 文件，找到以下代码段：

```javascript
// Firebase配置（用户需要替换为自己的配置）
this.firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

将从Firebase控制台复制的 `firebaseConfig` 对象内容替换上述代码。

### 2. 启动系统

1. 确保Firebase SDK已在 `index.html` 中正确引用（系统已自动添加）
2. 启动本地HTTP服务器
3. 访问系统页面
4. 在浏览器控制台中查看是否有 "Firebase初始化成功" 的提示

## 四、数据同步测试

### 1. 测试数据保存

1. 使用A电脑完成一个学生的测评
2. 登录管理后台，检查数据是否已保存
3. 在Firebase控制台的 "Realtime Database" 中查看数据是否已同步

### 2. 测试数据共享

1. 使用B电脑启动系统
2. 登录管理后台
3. 点击 "同步数据" 按钮
4. 检查是否能看到A电脑保存的测评数据

## 五、数据安全设置

### 1. 设置数据库安全规则

当系统稳定运行后，建议将数据库从 "测试模式" 改为 "安全模式"：

1. 在Firebase控制台左侧菜单中，点击 "Realtime Database"
2. 点击 "Rules" 选项卡
3. 将规则修改为：

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

4. 点击 "Publish" 发布规则

### 2. 添加用户认证（可选）

如果需要更严格的安全控制，可以启用Firebase的用户认证功能，只允许授权用户访问数据库。

## 六、常见问题与解决方案

### 1. Firebase初始化失败

**问题：** 浏览器控制台显示 "Firebase SDK未加载，将使用本地存储"

**解决方案：**
- 检查 `index.html` 中Firebase SDK的引用是否正确
- 确保网络连接正常

### 2. 数据无法同步

**问题：** A电脑的数据无法在B电脑中显示

**解决方案：**
- 检查Firebase配置是否正确
- 检查数据库安全规则是否允许读取数据
- 确保两台电脑都连接到了互联网

### 3. 数据保存失败

**问题：** 测评数据无法保存到云端

**解决方案：**
- 检查Firebase配置是否正确
- 检查数据库安全规则是否允许写入数据
- 检查网络连接是否正常

## 七、注意事项

1. Firebase提供免费的使用额度，对于一般的学校使用场景应该足够
2. 定期备份Firebase数据，以防数据丢失
3. 不要将Firebase配置信息泄露给未授权的人员
4. 如果数据量较大，可以考虑升级Firebase套餐

---

通过以上步骤，您就可以实现科学素养测评系统的云端数据共享功能，解决A电脑测试数据无法在B电脑端后台看到的问题。如果在配置过程中遇到任何问题，请参考Firebase官方文档或联系技术支持。