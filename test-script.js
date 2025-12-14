// 简化的测试脚本，直接测试generateGradeBasedQuestions方法

// 1. 读取script.js文件内容
const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

// 2. 提取generateGradeBasedQuestions方法和相关数据
// 这里我们需要手动提取方法，因为直接eval可能会有问题

// 模拟数据结构
const mockData = {
    // 这里添加我们修改后的1-3年级数据作为测试
    1: [
        // 科学知识
        { dimension: "科学知识", text: "以下哪个是植物？", options: [{text: "石头", value: 1}, {text: "花朵", value: 2}, {text: "汽车", value: 1}, {text: "电脑", value: 1}] },
        { dimension: "科学知识", text: "以下哪个是动物？", options: [{text: "树木", value: 1}, {text: "小狗", value: 2}, {text: "书包", value: 1}, {text: "桌子", value: 1}] },
        { dimension: "科学知识", text: "水在常温下是什么状态？", options: [{text: "固体", value: 1}, {text: "液体", value: 2}, {text: "气体", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学知识", text: "以下哪个会发光？", options: [{text: "月亮", value: 1}, {text: "太阳", value: 2}, {text: "星星", value: 1}, {text: "地球", value: 1}] },
        { dimension: "科学知识", text: "以下哪个是水果？", options: [{text: "萝卜", value: 1}, {text: "苹果", value: 2}, {text: "白菜", value: 1}, {text: "土豆", value: 1}] },
        { dimension: "科学知识", text: "空气有颜色吗？", options: [{text: "没有", value: 2}, {text: "有", value: 1}, {text: "有时候有", value: 1}, {text: "不确定", value: 1}] },
        { dimension: "科学知识", text: "我们用什么器官听声音？", options: [{text: "耳朵", value: 2}, {text: "眼睛", value: 1}, {text: "鼻子", value: 1}, {text: "嘴巴", value: 1}] },
        { dimension: "科学知识", text: "石头是有生命的吗？", options: [{text: "没有", value: 2}, {text: "有", value: 1}, {text: "不确定", value: 1}, {text: "有时候有", value: 1}] },
        { dimension: "科学知识", text: "下雨是怎么形成的？", options: [{text: "云中的水滴变大掉落", value: 2}, {text: "天空破了个洞", value: 1}, {text: "神仙洒水", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学知识", text: "哪种动物会飞？", options: [{text: "鸟", value: 2}, {text: "狗", value: 1}, {text: "猫", value: 1}, {text: "兔子", value: 1}] },
        
        // 科学探究能力
        { dimension: "科学探究能力", text: "想要知道水是否热，我们可以？", options: [{text: "用眼睛看", value: 1}, {text: "用手摸", value: 2}, {text: "用耳朵听", value: 1}, {text: "用鼻子闻", value: 1}] },
        { dimension: "科学探究能力", text: "想要知道物体的长度，我们可以用？", options: [{text: "天平", value: 1}, {text: "尺子", value: 2}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
        { dimension: "科学探究能力", text: "想要观察小蚂蚁，我们可以用？", options: [{text: "望远镜", value: 1}, {text: "放大镜", value: 2}, {text: "显微镜", value: 1}, {text: "眼镜", value: 1}] },
        { dimension: "科学探究能力", text: "想要知道今天的天气，我们可以？", options: [{text: "看电视天气预报", value: 2}, {text: "问同学", value: 1}, {text: "猜一猜", value: 1}, {text: "不关心", value: 1}] },
        { dimension: "科学探究能力", text: "想要知道种子如何发芽，我们应该？", options: [{text: "种下来观察", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学探究能力", text: "观察植物时，我们可以用什么工具？", options: [{text: "放大镜", value: 2}, {text: "锤子", value: 1}, {text: "剪刀", value: 1}, {text: "铅笔", value: 1}] },
        { dimension: "科学探究能力", text: "发现问题后，我们应该怎么做？", options: [{text: "忽略它", value: 1}, {text: "思考并寻找答案", value: 2}, {text: "告诉老师", value: 1}, {text: "哭鼻子", value: 1}] },
        { dimension: "科学探究能力", text: "记录观察结果时，我们应该怎么做？", options: [{text: "随便画", value: 1}, {text: "如实记录", value: 2}, {text: "编一个", value: 1}, {text: "不记录", value: 1}] },
        { dimension: "科学探究能力", text: "比较两个物体的大小，我们可以怎么做？", options: [{text: "用眼睛看", value: 2}, {text: "猜一猜", value: 1}, {text: "扔出去", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学探究能力", text: "做实验时，我们应该遵守什么？", options: [{text: "实验规则", value: 2}, {text: "自己随便做", value: 1}, {text: "玩实验器材", value: 1}, {text: "不戴手套", value: 1}] },
        
        // 科学态度与情感
        { dimension: "科学态度与情感", text: "当你看到小昆虫时，你会？", options: [{text: "害怕地跑开", value: 1}, {text: "仔细观察它们", value: 2}, {text: "想要抓住它们", value: 1}, {text: "觉得它们很脏", value: 1}] },
        { dimension: "科学态度与情感", text: "你喜欢上科学课吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
        { dimension: "科学态度与情感", text: "当你做实验失败时，你会？", options: [{text: "放弃", value: 1}, {text: "再试一次", value: 2}, {text: "问老师", value: 1}, {text: "生气", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意参加科学小制作活动吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你觉得科学有趣吗？", options: [{text: "没趣", value: 1}, {text: "非常有趣", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意和同学一起做科学实验吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "当你发现新奇的事物时，你会？", options: [{text: "忽略它", value: 1}, {text: "仔细观察", value: 2}, {text: "告诉父母", value: 1}, {text: "害怕", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意阅读科学书籍吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你会爱护实验器材吗？", options: [{text: "不会", value: 1}, {text: "会", value: 2}, {text: "有时候会", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你觉得科学对我们的生活重要吗？", options: [{text: "不重要", value: 1}, {text: "非常重要", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
        
        // 科学、技术与社会的关系
        { dimension: "科学、技术与社会的关系", text: "我们乘坐的公交车是？", options: [{text: "自然现象", value: 1}, {text: "交通工具", value: 2}, {text: "植物", value: 1}, {text: "动物", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来打电话？", options: [{text: "电视", value: 1}, {text: "手机", value: 2}, {text: "收音机", value: 1}, {text: "电脑", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来照明？", options: [{text: "蜡烛", value: 1}, {text: "电灯", value: 2}, {text: "火把", value: 1}, {text: "月光", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来做饭？", options: [{text: "微波炉", value: 2}, {text: "石头", value: 1}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来写字？", options: [{text: "石头", value: 1}, {text: "钢笔", value: 2}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来洗衣服？", options: [{text: "洗衣机", value: 2}, {text: "手洗", value: 1}, {text: "脚洗", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来看电视？", options: [{text: "遥控器", value: 2}, {text: "手", value: 1}, {text: "脚", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来上网？", options: [{text: "电脑", value: 2}, {text: "电视", value: 1}, {text: "收音机", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来拍照？", options: [{text: "手机", value: 2}, {text: "铅笔", value: 1}, {text: "石头", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来计算？", options: [{text: "计算器", value: 2}, {text: "手指", value: 1}, {text: "石头", value: 1}, {text: "不知道", value: 1}] }
    ],
    
    // 2年级题目
    2: [
        // 科学知识
        { dimension: "科学知识", text: "下列哪个是哺乳动物？", options: [{text: "青蛙", value: 1}, {text: "兔子", value: 2}, {text: "蛇", value: 1}, {text: "鸟", value: 1}] },
        { dimension: "科学知识", text: "植物的茎有什么作用？", options: [{text: "吸收水分", value: 1}, {text: "输送营养", value: 2}, {text: "光合作用", value: 1}, {text: "储存食物", value: 1}] },
        { dimension: "科学知识", text: "磁铁的哪部分磁性最强？", options: [{text: "中间", value: 1}, {text: "两端", value: 2}, {text: "表面", value: 1}, {text: "内部", value: 1}] },
        { dimension: "科学知识", text: "空气的成分有哪些？", options: [{text: "只有氧气", value: 1}, {text: "氧气和氮气", value: 2}, {text: "只有二氧化碳", value: 1}, {text: "只有水蒸气", value: 1}] },
        { dimension: "科学知识", text: "什么是导体？", options: [{text: "不导电的物体", value: 1}, {text: "容易导电的物体", value: 2}, {text: "会发光的物体", value: 1}, {text: "会发热的物体", value: 1}] },
        { dimension: "科学知识", text: "以下哪种是液体？", options: [{text: "石头", value: 1}, {text: "水", value: 2}, {text: "空气", value: 1}, {text: "冰", value: 1}] },
        { dimension: "科学知识", text: "以下哪种是固体？", options: [{text: "水", value: 1}, {text: "石头", value: 2}, {text: "空气", value: 1}, {text: "水蒸气", value: 1}] },
        { dimension: "科学知识", text: "以下哪种是气体？", options: [{text: "水", value: 1}, {text: "空气", value: 2}, {text: "石头", value: 1}, {text: "冰", value: 1}] },
        { dimension: "科学知识", text: "植物的叶子有什么作用？", options: [{text: "吸收水分", value: 1}, {text: "光合作用", value: 2}, {text: "输送营养", value: 1}, {text: "储存食物", value: 1}] },
        { dimension: "科学知识", text: "动物的眼睛有什么作用？", options: [{text: "听声音", value: 1}, {text: "看东西", value: 2}, {text: "闻气味", value: 1}, {text: "尝味道", value: 1}] },
        
        // 科学探究能力
        { dimension: "科学探究能力", text: "如何测量物体的重量？", options: [{text: "用尺子", value: 1}, {text: "用天平", value: 2}, {text: "用温度计", value: 1}, {text: "用放大镜", value: 1}] },
        { dimension: "科学探究能力", text: "如何区分植物和动物？", options: [{text: "看颜色", value: 1}, {text: "看是否能运动", value: 2}, {text: "看大小", value: 1}, {text: "看形状", value: 1}] },
        { dimension: "科学探究能力", text: "如何制作一个简单的指南针？", options: [{text: "用石头", value: 1}, {text: "用磁铁和针", value: 2}, {text: "用木头", value: 1}, {text: "用塑料", value: 1}] },
        { dimension: "科学探究能力", text: "如何观察种子的内部结构？", options: [{text: "直接看", value: 1}, {text: "用放大镜看", value: 2}, {text: "用望远镜看", value: 1}, {text: "用显微镜看", value: 1}] },
        { dimension: "科学探究能力", text: "如何证明空气的存在？", options: [{text: "用眼睛看", value: 1}, {text: "用塑料袋装空气", value: 2}, {text: "用鼻子闻", value: 1}, {text: "用耳朵听", value: 1}] },
        { dimension: "科学探究能力", text: "要测量长度，我们可以使用？", options: [{text: "天平", value: 1}, {text: "尺子", value: 2}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
        { dimension: "科学探究能力", text: "要观察微小的物体，我们可以使用？", options: [{text: "望远镜", value: 1}, {text: "放大镜", value: 2}, {text: "显微镜", value: 1}, {text: "眼镜", value: 1}] },
        { dimension: "科学探究能力", text: "要测量温度，我们可以使用？", options: [{text: "天平", value: 1}, {text: "温度计", value: 2}, {text: "尺子", value: 1}, {text: "放大镜", value: 1}] },
        { dimension: "科学探究能力", text: "要测量时间，我们可以使用？", options: [{text: "天平", value: 1}, {text: "钟表", value: 2}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
        { dimension: "科学探究能力", text: "要测量重量，我们可以使用？", options: [{text: "尺子", value: 1}, {text: "天平", value: 2}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
        
        // 科学态度与情感
        { dimension: "科学态度与情感", text: "你愿意和同学一起做科学实验吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你喜欢做科学小制作吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
        { dimension: "科学态度与情感", text: "当你看到新奇的事物时，你会？", options: [{text: "忽略它", value: 1}, {text: "仔细观察", value: 2}, {text: "告诉父母", value: 1}, {text: "害怕", value: 1}] },
        { dimension: "科学态度与情感", text: "你认为科学家的工作有趣吗？", options: [{text: "没趣", value: 1}, {text: "非常有趣", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "当你做实验失败时，你会？", options: [{text: "放弃", value: 1}, {text: "再试一次", value: 2}, {text: "问老师", value: 1}, {text: "生气", value: 1}] },
        { dimension: "科学态度与情感", text: "你喜欢观看科学类的电视节目吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意参加学校组织的科学活动吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你觉得科学有趣吗？", options: [{text: "没趣", value: 1}, {text: "非常有趣", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意和同学一起讨论科学问题吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你想成为一名科学家吗？", options: [{text: "不想", value: 1}, {text: "非常想", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        
        // 科学、技术与社会的关系
        { dimension: "科学、技术与社会的关系", text: "我们用什么来烧开水？", options: [{text: "微波炉", value: 2}, {text: "石头", value: 1}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来制冷？", options: [{text: "空调", value: 2}, {text: "暖气", value: 1}, {text: "风扇", value: 1}, {text: "太阳", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来保存食物？", options: [{text: "冰箱", value: 2}, {text: "烤箱", value: 1}, {text: "微波炉", value: 1}, {text: "炉灶", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来清洁衣物？", options: [{text: "洗衣机", value: 2}, {text: "手洗", value: 1}, {text: "脚洗", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来运输货物？", options: [{text: "汽车", value: 2}, {text: "自行车", value: 1}, {text: "滑板车", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "电脑的主要功能是？", options: [{text: "上网", value: 2}, {text: "做饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "手机的主要功能是？", options: [{text: "打电话", value: 2}, {text: "吃饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "电视的主要功能是？", options: [{text: "看节目", value: 2}, {text: "做饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "冰箱的主要功能是？", options: [{text: "保存食物", value: 2}, {text: "做饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "洗衣机的主要功能是？", options: [{text: "洗衣服", value: 2}, {text: "做饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] }
    ],
    
    // 3年级题目
    3: [
        // 科学知识
        { dimension: "科学知识", text: "什么是光合作用？", options: [{text: "植物吸收氧气释放二氧化碳", value: 1}, {text: "植物吸收二氧化碳释放氧气", value: 2}, {text: "动物吸收氧气释放二氧化碳", value: 1}, {text: "动物吸收二氧化碳释放氧气", value: 1}] },
        { dimension: "科学知识", text: "地球的结构分为哪几层？", options: [{text: "只有地壳", value: 1}, {text: "地壳、地幔、地核", value: 2}, {text: "只有地幔", value: 1}, {text: "只有地核", value: 1}] },
        { dimension: "科学知识", text: "什么是食物链？", options: [{text: "动物吃植物的关系", value: 1}, {text: "生物之间吃与被吃的关系", value: 2}, {text: "植物吃动物的关系", value: 1}, {text: "生物之间的朋友关系", value: 1}] },
        { dimension: "科学知识", text: "什么是摩擦力？", options: [{text: "物体之间的吸引力", value: 1}, {text: "物体之间的阻力", value: 2}, {text: "物体之间的排斥力", value: 1}, {text: "物体之间的重力", value: 1}] },
        { dimension: "科学知识", text: "什么是电路？", options: [{text: "电流通过的路径", value: 2}, {text: "水流通过的路径", value: 1}, {text: "空气流动的路径", value: 1}, {text: "热量传递的路径", value: 1}] },
        { dimension: "科学知识", text: "以下哪个是行星？", options: [{text: "太阳", value: 1}, {text: "地球", value: 2}, {text: "月亮", value: 1}, {text: "北极星", value: 1}] },
        { dimension: "科学知识", text: "声音是如何产生的？", options: [{text: "物体振动", value: 2}, {text: "物体静止", value: 1}, {text: "物体发光", value: 1}, {text: "物体发热", value: 1}] },
        { dimension: "科学知识", text: "什么是绝缘体？", options: [{text: "容易导电的物体", value: 1}, {text: "不容易导电的物体", value: 2}, {text: "会发光的物体", value: 1}, {text: "会发热的物体", value: 1}] },
        { dimension: "科学知识", text: "植物的根有什么作用？", options: [{text: "吸收水分和养分", value: 2}, {text: "进行光合作用", value: 1}, {text: "输送营养", value: 1}, {text: "储存食物", value: 1}] },
        { dimension: "科学知识", text: "什么是蒸发？", options: [{text: "液体变成气体", value: 2}, {text: "气体变成液体", value: 1}, {text: "液体变成固体", value: 1}, {text: "固体变成液体", value: 1}] },
        
        // 科学探究能力
        { dimension: "科学探究能力", text: "如何设计一个对比实验？", options: [{text: "改变多个条件", value: 1}, {text: "只改变一个条件", value: 2}, {text: "不改变任何条件", value: 1}, {text: "随便改变条件", value: 1}] },
        { dimension: "科学探究能力", text: "如何收集和整理实验数据？", options: [{text: "随便记录", value: 1}, {text: "用表格或图表记录", value: 2}, {text: "不记录", value: 1}, {text: "只记录部分数据", value: 1}] },
        { dimension: "科学探究能力", text: "如何撰写实验报告？", options: [{text: "随便写", value: 1}, {text: "包含实验目的、步骤、结果", value: 2}, {text: "只写实验结果", value: 1}, {text: "只写实验目的", value: 1}] },
        { dimension: "科学探究能力", text: "如何提出一个科学问题？", options: [{text: "随便问", value: 1}, {text: "基于观察提出", value: 2}, {text: "不经过观察", value: 1}, {text: "问一些无关的问题", value: 1}] },
        { dimension: "科学探究能力", text: "如何验证一个假设？", options: [{text: "猜一猜", value: 1}, {text: "通过实验验证", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}] },
        { dimension: "科学探究能力", text: "进行实验时，我们应该先？", options: [{text: "直接做实验", value: 1}, {text: "阅读实验指导", value: 2}, {text: "玩实验器材", value: 1}, {text: "不做任何准备", value: 1}] },
        { dimension: "科学探究能力", text: "提出问题后，我们应该？", options: [{text: "直接做实验", value: 1}, {text: "提出假设", value: 2}, {text: "放弃", value: 1}, {text: "问老师", value: 1}] },
        { dimension: "科学探究能力", text: "假设应该是？", options: [{text: "随便猜测", value: 1}, {text: "有依据的猜测", value: 2}, {text: "肯定的结论", value: 1}, {text: "否定的结论", value: 1}] },
        { dimension: "科学探究能力", text: "验证假设的方法是？", options: [{text: "猜一猜", value: 1}, {text: "做实验", value: 2}, {text: "问同学", value: 1}, {text: "查书本", value: 1}] },
        { dimension: "科学探究能力", text: "实验结束后，我们应该？", options: [{text: "随便整理器材", value: 1}, {text: "整理器材并记录结果", value: 2}, {text: "不整理器材", value: 1}, {text: "只整理器材", value: 1}] },
        
        // 科学态度与情感
        { dimension: "科学态度与情感", text: "你愿意与同学合作完成科学项目吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你喜欢观看科学类电视节目吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意参加科学竞赛吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你认为科学对人类生活有什么影响？", options: [{text: "没有影响", value: 1}, {text: "有很大影响", value: 2}, {text: "影响很小", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "当你在科学学习中遇到困难时，你会？", options: [{text: "放弃", value: 1}, {text: "寻求帮助", value: 2}, {text: "生气", value: 1}, {text: "不做了", value: 1}] },
        { dimension: "科学态度与情感", text: "你喜欢做科学小实验吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
        { dimension: "科学态度与情感", text: "你愿意和同学一起讨论科学问题吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你觉得科学有趣吗？", options: [{text: "没趣", value: 1}, {text: "非常有趣", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "你想成为一名科学家吗？", options: [{text: "不想", value: 1}, {text: "非常想", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学态度与情感", text: "当你发现自己的假设错误时，你会？", options: [{text: "生气", value: 1}, {text: "重新提出假设", value: 2}, {text: "放弃", value: 1}, {text: "不做了", value: 1}] },
        
        // 科学、技术与社会的关系
        { dimension: "科学、技术与社会的关系", text: "什么是可再生能源？", options: [{text: "用完就没有的能源", value: 1}, {text: "可以不断再生的能源", value: 2}, {text: "会污染环境的能源", value: 1}, {text: "不会污染环境的能源", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "什么是不可再生能源？", options: [{text: "可以不断再生的能源", value: 1}, {text: "用完就没有的能源", value: 2}, {text: "会污染环境的能源", value: 1}, {text: "不会污染环境的能源", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "什么是环境污染？", options: [{text: "环境变得干净", value: 1}, {text: "环境变得不干净", value: 2}, {text: "环境没有变化", value: 1}, {text: "环境变得更好", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "什么是垃圾分类？", options: [{text: "随便扔垃圾", value: 1}, {text: "将垃圾分成不同类别", value: 2}, {text: "将垃圾烧掉", value: 1}, {text: "将垃圾埋掉", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "什么是互联网？", options: [{text: "连接全世界电脑的网络", value: 2}, {text: "连接全世界电话的网络", value: 1}, {text: "连接全世界电视的网络", value: 1}, {text: "连接全世界手机的网络", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "互联网的主要作用是？", options: [{text: "通信和获取信息", value: 2}, {text: "做饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "人工智能技术可以做什么？", options: [{text: "帮助人类解决问题", value: 2}, {text: "做饭", value: 1}, {text: "睡觉", value: 1}, {text: "不知道", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来治疗疾病？", options: [{text: "药物和医疗器械", value: 2}, {text: "石头", value: 1}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来种植农作物？", options: [{text: "农业机械", value: 2}, {text: "石头", value: 1}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] },
        { dimension: "科学、技术与社会的关系", text: "我们用什么来建造房屋？", options: [{text: "建筑材料和工具", value: 2}, {text: "石头", value: 1}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] }
    ]
};

// 3. 实现简化版的generateGradeBasedQuestions方法
function generateGradeBasedQuestions(grade) {
    const questions = [];
    const gradeQuestions = mockData[grade];
    
    if (!gradeQuestions) return questions;
    
    // 按维度分组
    const dimensionGroups = {};
    gradeQuestions.forEach(q => {
        if (!dimensionGroups[q.dimension]) {
            dimensionGroups[q.dimension] = [];
        }
        dimensionGroups[q.dimension].push(q);
    });
    
    // 为每个维度生成10道题
    Object.entries(dimensionGroups).forEach(([dimension, dimensionQuestions]) => {
        for (let i = 0; i < 10; i++) {
            // 使用模运算循环选择基础问题
            const questionIndex = i % dimensionQuestions.length;
            const baseQuestion = dimensionQuestions[questionIndex];
            
            // 创建新题目对象
            const newQuestion = {
                id: `q_${grade}_${dimension}_${i + 1}`,
                grade: grade,
                dimension: dimension,
                text: baseQuestion.text,
                options: JSON.parse(JSON.stringify(baseQuestion.options)),
                score: dimensionQuestions[questionIndex].score || 5
            };
            
            questions.push(newQuestion);
        }
    });
    
    return questions;
}

// 定义测试函数
function generateAndTestQuestions(grade) {
    console.log(`\n===== ${grade}年级题目生成测试 =====`);
    const questions = generateGradeBasedQuestions(grade);

    // 检查题目数量和唯一性
    const dimensions = ["科学知识", "科学探究能力", "科学态度与情感", "科学、技术与社会的关系"];
    let gradeAllUnique = true;

    dimensions.forEach(dimension => {
        const dimensionQuestions = questions.filter(q => q.dimension === dimension);
        console.log(`\n${dimension}: ${dimensionQuestions.length} 题`);
        
        // 检查题目唯一性
        const uniqueQuestions = new Set(dimensionQuestions.map(q => q.text));
        console.log(`  唯一题目数: ${uniqueQuestions.size}`);
        
        if (uniqueQuestions.size < dimensionQuestions.length) {
            console.log("  ⚠️  发现重复题目！");
            gradeAllUnique = false;
        } else {
            console.log("  ✅ 所有题目都是唯一的！");
        }
        
        // 打印部分题目内容
        console.log("  前5道题目:");
        dimensionQuestions.slice(0, 5).forEach((q, index) => {
            console.log(`    ${index + 1}. ${q.text}`);
        });
    });

    return gradeAllUnique;
}

// 生成并测试1年级的题目
generateAndTestQuestions(1);

// 生成并测试2年级的题目
generateAndTestQuestions(2);

// 生成并测试3年级的题目
generateAndTestQuestions(3);

console.log('\n=== 总测试结果 ===');
console.log('所有年级题目生成测试完成！');
