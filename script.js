// 惠王中心小学学生科学素养测评系统
class ScientificLiteracyEvaluation {
    constructor() {
        this.currentStudent = null;
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.testCompleted = false;
        this.adminLoggedIn = false;
        this.testData = this.generateGradeBasedQuestions();
        this.init();
    }

    // 按年级生成不同的科学知识问题
    generateGradeBasedQuestions() {
        // 每个年级为每个维度提供多个基础问题
        const gradeQuestions = {
            // 一年级科学知识问题
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
            
            // 二年级科学知识问题
            2: [
                // 科学知识
                { dimension: "科学知识", text: "以下哪种动物是哺乳动物？", options: [{text: "鸡", value: 1}, {text: "猫", value: 2}, {text: "青蛙", value: 1}, {text: "蛇", value: 1}] },
                { dimension: "科学知识", text: "以下哪种动物是鸟类？", options: [{text: "兔子", value: 1}, {text: "燕子", value: 2}, {text: "鱼", value: 1}, {text: "乌龟", value: 1}] },
                { dimension: "科学知识", text: "植物生长需要什么？", options: [{text: "水和阳光", value: 2}, {text: "土壤", value: 1}, {text: "肥料", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "以下哪种是磁性材料？", options: [{text: "塑料", value: 1}, {text: "铁", value: 2}, {text: "木材", value: 1}, {text: "玻璃", value: 1}] },
                { dimension: "科学知识", text: "声音是通过什么传播的？", options: [{text: "空气", value: 2}, {text: "真空", value: 1}, {text: "水", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "以下哪种是液体？", options: [{text: "冰", value: 1}, {text: "水", value: 2}, {text: "石头", value: 1}, {text: "空气", value: 1}] },
                { dimension: "科学知识", text: "以下哪种是固体？", options: [{text: "水", value: 1}, {text: "冰", value: 2}, {text: "空气", value: 1}, {text: "蒸汽", value: 1}] },
                { dimension: "科学知识", text: "以下哪种是气体？", options: [{text: "水", value: 1}, {text: "冰", value: 1}, {text: "空气", value: 2}, {text: "石头", value: 1}] },
                { dimension: "科学知识", text: "植物的叶子有什么作用？", options: [{text: "吸收水分", value: 1}, {text: "进行光合作用", value: 2}, {text: "储存营养", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "动物的眼睛有什么作用？", options: [{text: "听声音", value: 1}, {text: "看东西", value: 2}, {text: "闻气味", value: 1}, {text: "尝味道", value: 1}] },
                
                // 科学探究能力
                { dimension: "科学探究能力", text: "要比较两个物体的重量，我们可以使用？", options: [{text: "尺子", value: 1}, {text: "天平", value: 2}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
                { dimension: "科学探究能力", text: "要测量体温，我们可以使用？", options: [{text: "尺子", value: 1}, {text: "温度计", value: 2}, {text: "天平", value: 1}, {text: "放大镜", value: 1}] },
                { dimension: "科学探究能力", text: "观察蜗牛时，我们应该记录什么？", options: [{text: "蜗牛的颜色", value: 2}, {text: "蜗牛的大小", value: 1}, {text: "蜗牛的爬行方式", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学探究能力", text: "做实验时，我们应该先做什么？", options: [{text: "准备材料", value: 2}, {text: "开始实验", value: 1}, {text: "记录结果", value: 1}, {text: "整理器材", value: 1}] },
                { dimension: "科学探究能力", text: "想要知道种子发芽需要水吗？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要测量长度，我们可以使用？", options: [{text: "尺子", value: 2}, {text: "天平", value: 1}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
                { dimension: "科学探究能力", text: "要观察微小的物体，我们可以使用？", options: [{text: "尺子", value: 1}, {text: "放大镜", value: 2}, {text: "温度计", value: 1}, {text: "天平", value: 1}] },
                { dimension: "科学探究能力", text: "做实验时，我们应该佩戴什么？", options: [{text: "手套", value: 1}, {text: "护目镜", value: 1}, {text: "以上都是", value: 2}, {text: "不需要", value: 1}] },
                { dimension: "科学探究能力", text: "记录实验数据时，我们应该？", options: [{text: "随意记录", value: 1}, {text: "准确记录", value: 2}, {text: "不记录", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "实验结束后，我们应该？", options: [{text: "整理器材", value: 2}, {text: "离开实验室", value: 1}, {text: "忘记清理", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学态度与情感
                { dimension: "科学态度与情感", text: "当实验没有得到预期结果时，你会？", options: [{text: "放弃实验", value: 1}, {text: "重新尝试一次", value: 2}, {text: "询问老师帮助", value: 2}, {text: "觉得实验很无聊", value: 1}] },
                { dimension: "科学态度与情感", text: "你喜欢阅读科学小故事吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
                { dimension: "科学态度与情感", text: "你愿意和同学一起做科学实验吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你觉得科学对我们的生活重要吗？", options: [{text: "不重要", value: 1}, {text: "非常重要", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "当你看到有趣的科学现象时，你会？", options: [{text: "忽略它", value: 1}, {text: "仔细观察", value: 2}, {text: "告诉同学", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你喜欢观看科学类的电视节目吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没看过", value: 1}] },
                { dimension: "科学态度与情感", text: "你愿意参加学校组织的科学活动吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你觉得科学实验有趣吗？", options: [{text: "没趣", value: 1}, {text: "非常有趣", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "当你遇到科学问题时，你会？", options: [{text: "忽略它", value: 1}, {text: "查找资料", value: 2}, {text: "问老师", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你愿意尝试自己做小实验吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学、技术与社会的关系
                { dimension: "科学、技术与社会的关系", text: "电话的主要功能是？", options: [{text: "做饭", value: 1}, {text: "通信联系", value: 2}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "电视的主要功能是？", options: [{text: "提供信息和娱乐", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "冰箱的主要功能是？", options: [{text: "保存食物", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "洗衣机的主要功能是？", options: [{text: "洗衣服", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "电风扇的主要功能是？", options: [{text: "降温", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "电脑的主要功能是？", options: [{text: "做饭", value: 1}, {text: "处理信息", value: 2}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "手机的主要功能是？", options: [{text: "通信和上网", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "加热", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "微波炉的主要功能是？", options: [{text: "加热食物", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "降温", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "空调的主要功能是？", options: [{text: "调节温度", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "洗衣服", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "自行车的主要功能是？", options: [{text: "运输工具", value: 2}, {text: "做饭", value: 1}, {text: "照明", value: 1}, {text: "加热", value: 1}] }
            ],
            
            // 三年级科学知识问题
            3: [
                // 科学知识
                { dimension: "科学知识", text: "水在什么温度下会结冰？", options: [{text: "0°C", value: 2}, {text: "10°C", value: 1}, {text: "20°C", value: 1}, {text: "100°C", value: 1}] },
                { dimension: "科学知识", text: "水在什么温度下会沸腾？", options: [{text: "0°C", value: 1}, {text: "50°C", value: 1}, {text: "100°C", value: 2}, {text: "200°C", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是导体？", options: [{text: "塑料", value: 1}, {text: "铜丝", value: 2}, {text: "木材", value: 1}, {text: "玻璃", value: 1}] },
                { dimension: "科学知识", text: "地球是什么形状的？", options: [{text: "方形", value: 1}, {text: "圆形", value: 2}, {text: "三角形", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是太阳系的中心？", options: [{text: "地球", value: 1}, {text: "太阳", value: 2}, {text: "月亮", value: 1}, {text: "火星", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是行星？", options: [{text: "太阳", value: 1}, {text: "地球", value: 2}, {text: "月亮", value: 1}, {text: "流星", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是恒星？", options: [{text: "地球", value: 1}, {text: "太阳", value: 2}, {text: "月亮", value: 1}, {text: "火星", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是绝缘体？", options: [{text: "铜丝", value: 1}, {text: "塑料", value: 2}, {text: "铁", value: 1}, {text: "铝", value: 1}] },
                { dimension: "科学知识", text: "声音是如何产生的？", options: [{text: "物体振动", value: 2}, {text: "空气流动", value: 1}, {text: "不知道", value: 1}, {text: "其他", value: 1}] },
                { dimension: "科学知识", text: "光在真空中的传播速度是多少？", options: [{text: "300000千米/秒", value: 2}, {text: "300千米/秒", value: 1}, {text: "30千米/秒", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学探究能力
                { dimension: "科学探究能力", text: "观察植物生长时，我们应该记录？", options: [{text: "植物的颜色", value: 1}, {text: "植物的高度变化", value: 2}, {text: "植物的叶子数量", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学探究能力", text: "进行科学实验时，我们应该记录什么？", options: [{text: "实验步骤", value: 1}, {text: "实验结果", value: 1}, {text: "实验现象", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学探究能力", text: "要研究种子发芽需要阳光吗？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "观察物体时，我们可以用哪些感官？", options: [{text: "眼睛", value: 1}, {text: "耳朵", value: 1}, {text: "鼻子", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学探究能力", text: "要比较不同材料的吸水性，我们应该？", options: [{text: "把材料放入水中", value: 2}, {text: "用眼睛看", value: 1}, {text: "用手摸", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "进行实验时，我们应该先？", options: [{text: "开始实验", value: 1}, {text: "设计实验步骤", value: 2}, {text: "整理实验器材", value: 1}, {text: "记录实验结果", value: 1}] },
                { dimension: "科学探究能力", text: "提出问题后，我们应该？", options: [{text: "直接得出结论", value: 1}, {text: "提出假设", value: 2}, {text: "做实验", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "验证假设的最好方法是？", options: [{text: "问老师", value: 1}, {text: "做实验", value: 2}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "分析实验数据时，我们应该？", options: [{text: "只看最大值", value: 1}, {text: "只看最小值", value: 1}, {text: "全面分析", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究电磁铁的磁力大小与什么有关？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学态度与情感
                { dimension: "科学态度与情感", text: "你喜欢阅读科学书籍吗？", options: [{text: "不喜欢", value: 1}, {text: "一般", value: 1}, {text: "喜欢", value: 2}, {text: "非常喜欢", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意参加科学竞赛吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学实验有趣吗？", options: [{text: "没趣", value: 1}, {text: "一般", value: 1}, {text: "有趣", value: 2}, {text: "非常有趣", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意主动探索科学问题吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你尊重科学事实吗？", options: [{text: "不尊重", value: 1}, {text: "一般", value: 1}, {text: "尊重", value: 2}, {text: "非常尊重", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意与同学合作完成科学项目吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你喜欢观看科学类电视节目吗？", options: [{text: "不喜欢", value: 1}, {text: "一般", value: 1}, {text: "喜欢", value: 2}, {text: "非常喜欢", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意尝试自己设计科学实验吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你尊重科学家吗？", options: [{text: "不尊重", value: 1}, {text: "一般", value: 1}, {text: "尊重", value: 2}, {text: "非常尊重", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学研究重要吗？", options: [{text: "不重要", value: 1}, {text: "一般", value: 1}, {text: "重要", value: 2}, {text: "非常重要", value: 2}] },
                
                // 科学、技术与社会的关系
                { dimension: "科学、技术与社会的关系", text: "电脑可以帮助我们？", options: [{text: "处理文档", value: 2}, {text: "浏览信息", value: 2}, {text: "与朋友交流", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "互联网可以帮助我们？", options: [{text: "学习知识", value: 2}, {text: "购物", value: 2}, {text: "看电影", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "手机的主要功能是？", options: [{text: "打电话", value: 2}, {text: "发短信", value: 2}, {text: "上网", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "汽车的主要功能是？", options: [{text: "运输人或货物", value: 2}, {text: "装饰", value: 1}, {text: "炫耀", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "飞机的主要功能是？", options: [{text: "空中运输", value: 2}, {text: "装饰", value: 1}, {text: "炫耀", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "互联网的主要作用是？", options: [{text: "提供娱乐", value: 1}, {text: "传播信息", value: 2}, {text: "促进交流", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "人工智能技术可以做什么？", options: [{text: "语音识别", value: 2}, {text: "图像识别", value: 2}, {text: "自动驾驶", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "纳米技术可以应用于哪些领域？", options: [{text: "医学", value: 2}, {text: "材料科学", value: 2}, {text: "电子学", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "克隆技术有什么应用？", options: [{text: "医学研究", value: 2}, {text: "农业生产", value: 2}, {text: "保护濒危物种", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "基因编辑技术可以用来做什么？", options: [{text: "治疗疾病", value: 2}, {text: "改良作物", value: 2}, {text: "研究基因功能", value: 2}, {text: "以上都是", value: 2}] }
            ],
            
            // 四年级科学知识问题
            4: [
                // 科学知识
                { dimension: "科学知识", text: "以下哪个是导体？", options: [{text: "塑料", value: 1}, {text: "金属", value: 2}, {text: "木材", value: 1}, {text: "玻璃", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是绝缘体？", options: [{text: "铜丝", value: 1}, {text: "塑料", value: 2}, {text: "铁", value: 1}, {text: "铝", value: 1}] },
                { dimension: "科学知识", text: "声音是如何产生的？", options: [{text: "物体振动", value: 2}, {text: "空气流动", value: 1}, {text: "不知道", value: 1}, {text: "其他", value: 1}] },
                { dimension: "科学知识", text: "光在真空中的传播速度是多少？", options: [{text: "300000千米/秒", value: 2}, {text: "300千米/秒", value: 1}, {text: "30千米/秒", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是简单机械？", options: [{text: "电脑", value: 1}, {text: "滑轮", value: 2}, {text: "手机", value: 1}, {text: "汽车", value: 1}] },
                { dimension: "科学知识", text: "地球的形状是什么？", options: [{text: "正方形", value: 1}, {text: "长方形", value: 1}, {text: "球形", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "水的三态变化包括哪些？", options: [{text: "固态、液态", value: 1}, {text: "液态、气态", value: 1}, {text: "固态、液态、气态", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是重力？", options: [{text: "物体向上的力", value: 1}, {text: "物体向下的力", value: 2}, {text: "物体左右的力", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是摩擦力？", options: [{text: "物体之间的吸引力", value: 1}, {text: "物体之间的阻力", value: 2}, {text: "物体之间的排斥力", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是惯性？", options: [{text: "物体保持运动的性质", value: 2}, {text: "物体改变运动的性质", value: 1}, {text: "物体停止运动的性质", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学探究能力
                { dimension: "科学探究能力", text: "进行实验时，我们应该先？", options: [{text: "开始实验", value: 1}, {text: "设计实验步骤", value: 2}, {text: "整理实验器材", value: 1}, {text: "记录实验结果", value: 1}] },
                { dimension: "科学探究能力", text: "提出问题后，我们应该？", options: [{text: "直接得出结论", value: 1}, {text: "提出假设", value: 2}, {text: "做实验", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "验证假设的最好方法是？", options: [{text: "问老师", value: 1}, {text: "做实验", value: 2}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "分析实验数据时，我们应该？", options: [{text: "只看最大值", value: 1}, {text: "只看最小值", value: 1}, {text: "全面分析", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究电磁铁的磁力大小与什么有关？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "设计实验时，我们应该控制什么？", options: [{text: "所有变量", value: 1}, {text: "一个变量", value: 2}, {text: "没有变量", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "进行对比实验时，我们应该保持什么相同？", options: [{text: "所有条件", value: 1}, {text: "所有条件除了一个变量", value: 2}, {text: "没有条件", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "得出结论时，我们应该基于什么？", options: [{text: "个人猜测", value: 1}, {text: "实验数据", value: 2}, {text: "同学的说法", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究植物生长需要阳光，我们应该？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "观察物体时，我们应该使用哪些感官？", options: [{text: "只使用眼睛", value: 1}, {text: "使用多种感官", value: 2}, {text: "只使用耳朵", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学态度与情感
                { dimension: "科学态度与情感", text: "你愿意与同学合作完成科学项目吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你喜欢观看科学类电视节目吗？", options: [{text: "不喜欢", value: 1}, {text: "一般", value: 1}, {text: "喜欢", value: 2}, {text: "非常喜欢", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意尝试自己设计科学实验吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你尊重科学家吗？", options: [{text: "不尊重", value: 1}, {text: "一般", value: 1}, {text: "尊重", value: 2}, {text: "非常尊重", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学研究重要吗？", options: [{text: "不重要", value: 1}, {text: "一般", value: 1}, {text: "重要", value: 2}, {text: "非常重要", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意参加学校组织的科学活动吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学有趣吗？", options: [{text: "不有趣", value: 1}, {text: "一般", value: 1}, {text: "有趣", value: 2}, {text: "非常有趣", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意学习更多的科学知识吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学可以解决生活中的问题吗？", options: [{text: "不能", value: 1}, {text: "一般", value: 1}, {text: "能", value: 2}, {text: "非常能", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意将来从事科学相关的工作吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                
                // 科学、技术与社会的关系
                { dimension: "科学、技术与社会的关系", text: "互联网的主要作用是？", options: [{text: "提供娱乐", value: 1}, {text: "传播信息", value: 2}, {text: "促进交流", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "人工智能技术可以做什么？", options: [{text: "语音识别", value: 2}, {text: "图像识别", value: 2}, {text: "自动驾驶", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "纳米技术可以应用于哪些领域？", options: [{text: "医学", value: 2}, {text: "材料科学", value: 2}, {text: "电子学", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "克隆技术有什么应用？", options: [{text: "医学研究", value: 2}, {text: "农业生产", value: 2}, {text: "保护濒危物种", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "基因编辑技术可以用来做什么？", options: [{text: "治疗疾病", value: 2}, {text: "改良作物", value: 2}, {text: "研究基因功能", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "电脑的主要功能是？", options: [{text: "娱乐", value: 1}, {text: "工作", value: 1}, {text: "学习", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "手机的主要功能是？", options: [{text: "通讯", value: 1}, {text: "上网", value: 1}, {text: "拍照", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "微波炉的主要功能是？", options: [{text: "煮水", value: 1}, {text: "加热食物", value: 2}, {text: "制冷", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "空调的主要功能是？", options: [{text: "调节温度", value: 2}, {text: "照明", value: 1}, {text: "通讯", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "自行车的主要功能是？", options: [{text: "运输", value: 1}, {text: "代步", value: 2}, {text: "娱乐", value: 1}, {text: "不知道", value: 1}] }
            ],
            
            // 五年级科学知识问题
            5: [
                // 科学知识
                { dimension: "科学知识", text: "地球自转一圈需要多长时间？", options: [{text: "1天", value: 2}, {text: "1周", value: 1}, {text: "1月", value: 1}, {text: "1年", value: 1}] },
                { dimension: "科学知识", text: "地球公转一圈需要多长时间？", options: [{text: "1天", value: 1}, {text: "1周", value: 1}, {text: "1月", value: 1}, {text: "1年", value: 2}] },
                { dimension: "科学知识", text: "以下哪个是化学变化？", options: [{text: "水蒸发", value: 1}, {text: "蜡烛燃烧", value: 2}, {text: "冰融化", value: 1}, {text: "玻璃破碎", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是物理变化？", options: [{text: "铁生锈", value: 1}, {text: "水结冰", value: 2}, {text: "食物腐烂", value: 1}, {text: "木材燃烧", value: 1}] },
                { dimension: "科学知识", text: "人体需要哪些营养物质？", options: [{text: "蛋白质和维生素", value: 1}, {text: "碳水化合物", value: 1}, {text: "脂肪", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学知识", text: "什么是光合作用？", options: [{text: "植物制造食物的过程", value: 2}, {text: "植物呼吸的过程", value: 1}, {text: "植物生长的过程", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是食物链？", options: [{text: "动物吃植物的链条", value: 2}, {text: "植物吃动物的链条", value: 1}, {text: "动物和植物的链条", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是生态系统？", options: [{text: "生物和环境的总和", value: 2}, {text: "只有生物", value: 1}, {text: "只有环境", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是太阳系？", options: [{text: "太阳和行星的系统", value: 2}, {text: "地球和月球的系统", value: 1}, {text: "恒星和行星的系统", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是原子？", options: [{text: "构成物质的基本粒子", value: 2}, {text: "构成分子的粒子", value: 1}, {text: "构成元素的粒子", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学探究能力
                { dimension: "科学探究能力", text: "分析实验数据时，我们应该？", options: [{text: "只关注符合预期的结果", value: 1}, {text: "客观分析所有数据", value: 2}, {text: "忽略异常数据", value: 1}, {text: "修改数据以符合预期", value: 1}] },
                { dimension: "科学探究能力", text: "设计实验时，我们应该控制哪些变量？", options: [{text: "只有一个变量不同", value: 2}, {text: "多个变量不同", value: 1}, {text: "所有变量相同", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "进行对比实验时，我们应该？", options: [{text: "保持其他条件相同", value: 2}, {text: "改变所有条件", value: 1}, {text: "随便做", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "得出结论时，我们应该？", options: [{text: "基于实验数据", value: 2}, {text: "基于个人猜测", value: 1}, {text: "基于同学的说法", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究酸雨对植物的影响，我们应该？", options: [{text: "做模拟实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "提出假设后，我们应该？", options: [{text: "直接得出结论", value: 1}, {text: "设计实验验证假设", value: 2}, {text: "忽略假设", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "收集实验数据时，我们应该？", options: [{text: "只收集符合预期的数据", value: 1}, {text: "客观记录所有数据", value: 2}, {text: "随意记录数据", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "实验失败了，我们应该？", options: [{text: "放弃实验", value: 1}, {text: "分析原因重新实验", value: 2}, {text: "修改实验结果", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究种子萌发需要什么条件，我们应该？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "设计实验方案时，我们应该考虑什么？", options: [{text: "实验步骤", value: 1}, {text: "实验材料", value: 1}, {text: "变量控制", value: 1}, {text: "以上都是", value: 2}] },
                
                // 科学态度与情感
                { dimension: "科学态度与情感", text: "你是否关注环保问题？", options: [{text: "不关注", value: 1}, {text: "偶尔关注", value: 1}, {text: "比较关注", value: 2}, {text: "非常关注", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意参加环保活动吗？", options: [{text: "不愿意", value: 1}, {text: "偶尔愿意", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得节约资源重要吗？", options: [{text: "不重要", value: 1}, {text: "一般", value: 1}, {text: "重要", value: 2}, {text: "非常重要", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意学习更多的科学知识吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学可以解决很多问题吗？", options: [{text: "不能", value: 1}, {text: "一般", value: 1}, {text: "能", value: 2}, {text: "非常能", value: 2}] },
                { dimension: "科学态度与情感", text: "当实验结果与预期不符时，你会？", options: [{text: "放弃实验", value: 1}, {text: "分析原因重新实验", value: 2}, {text: "修改实验结果", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你愿意分享自己的科学发现吗？", options: [{text: "不愿意", value: 1}, {text: "有点愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你认为学习科学知识有用吗？", options: [{text: "没用", value: 1}, {text: "有点用", value: 1}, {text: "非常有用", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你会关注生活中的科学现象吗？", options: [{text: "不会", value: 1}, {text: "有时会", value: 1}, {text: "总是会", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学态度与情感", text: "你尊重他人的科学观点吗？", options: [{text: "不尊重", value: 1}, {text: "有时尊重", value: 1}, {text: "总是尊重", value: 2}, {text: "不知道", value: 1}] },
                
                // 科学、技术与社会的关系
                { dimension: "科学、技术与社会的关系", text: "人工智能技术可以应用于？", options: [{text: "医疗健康", value: 2}, {text: "交通运输", value: 2}, {text: "教育教学", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "新能源包括哪些？", options: [{text: "太阳能", value: 2}, {text: "风能", value: 2}, {text: "水能", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "生物技术可以应用于哪些领域？", options: [{text: "农业", value: 2}, {text: "医学", value: 2}, {text: "环境保护", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "信息技术的发展对我们的生活有什么影响？", options: [{text: "方便了交流", value: 2}, {text: "提高了效率", value: 2}, {text: "丰富了生活", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "航天技术的发展有什么意义？", options: [{text: "探索宇宙", value: 2}, {text: "促进科技发展", value: 2}, {text: "提高国家实力", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "互联网技术对我们的学习有什么帮助？", options: [{text: "获取信息", value: 2}, {text: "在线学习", value: 2}, {text: "交流讨论", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "克隆技术的发展有哪些争议？", options: [{text: "伦理问题", value: 2}, {text: "法律问题", value: 2}, {text: "社会问题", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "转基因技术可以应用于哪些领域？", options: [{text: "农业生产", value: 2}, {text: "医疗健康", value: 2}, {text: "环境保护", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "信息技术的发展带来了哪些挑战？", options: [{text: "信息安全", value: 2}, {text: "隐私保护", value: 2}, {text: "数字鸿沟", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "新能源技术的发展对环境有什么影响？", options: [{text: "减少污染", value: 2}, {text: "节约资源", value: 2}, {text: "保护环境", value: 2}, {text: "以上都是", value: 2}] }
            ],
            
            // 六年级科学知识问题
            6: [
                // 科学知识
                { dimension: "科学知识", text: "以下哪个是化学变化？", options: [{text: "水结冰", value: 1}, {text: "铁生锈", value: 2}, {text: "玻璃破碎", value: 1}, {text: "蜡烛融化", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是化学变化？", options: [{text: "酒精挥发", value: 1}, {text: "食物消化", value: 2}, {text: "纸张撕裂", value: 1}, {text: "石头破碎", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是物理变化？", options: [{text: "汽油燃烧", value: 1}, {text: "冰雪融化", value: 2}, {text: "火药爆炸", value: 1}, {text: "牛奶变质", value: 1}] },
                { dimension: "科学知识", text: "原子由什么组成？", options: [{text: "质子和中子", value: 1}, {text: "电子", value: 1}, {text: "原子核和电子", value: 2}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是可再生能源？", options: [{text: "煤炭", value: 1}, {text: "石油", value: 1}, {text: "太阳能", value: 2}, {text: "天然气", value: 1}] },
                { dimension: "科学知识", text: "什么是化学反应？", options: [{text: "物质变化的过程", value: 1}, {text: "产生新物质的变化", value: 2}, {text: "物质形态的变化", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "什么是元素？", options: [{text: "构成物质的基本单元", value: 2}, {text: "构成原子的粒子", value: 1}, {text: "构成分子的粒子", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是导体？", options: [{text: "塑料", value: 1}, {text: "玻璃", value: 1}, {text: "金属", value: 2}, {text: "木头", value: 1}] },
                { dimension: "科学知识", text: "以下哪个是绝缘体？", options: [{text: "橡胶", value: 2}, {text: "铁", value: 1}, {text: "铜", value: 1}, {text: "铝", value: 1}] },
                { dimension: "科学知识", text: "什么是力？", options: [{text: "物体之间的相互作用", value: 2}, {text: "物体的质量", value: 1}, {text: "物体的体积", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学探究能力
                { dimension: "科学探究能力", text: "提出假设后，我们应该？", options: [{text: "直接得出结论", value: 1}, {text: "设计实验验证假设", value: 2}, {text: "忽略假设", value: 1}, {text: "修改假设以符合预期", value: 1}] },
                { dimension: "科学探究能力", text: "进行科学研究时，我们应该遵循什么原则？", options: [{text: "实事求是", value: 2}, {text: "随意猜测", value: 1}, {text: "抄袭他人", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究化学反应的速率与什么有关？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "分析科学现象时，我们应该？", options: [{text: "从多角度思考", value: 2}, {text: "只从一个角度思考", value: 1}, {text: "随便想想", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "要研究生态系统的稳定性，我们应该？", options: [{text: "建立生态模型", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "设计科学实验时，我们应该考虑什么？", options: [{text: "实验目的", value: 1}, {text: "实验变量", value: 1}, {text: "实验步骤", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学探究能力", text: "科学实验中，重复实验的目的是什么？", options: [{text: "增加实验次数", value: 1}, {text: "提高实验准确性", value: 2}, {text: "浪费时间", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "科学研究中，观察的重要性是什么？", options: [{text: "获取第一手资料", value: 2}, {text: "浪费时间", value: 1}, {text: "随便看看", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学探究能力", text: "科学探究的基本过程包括？", options: [{text: "提出问题", value: 1}, {text: "做出假设", value: 1}, {text: "实验验证", value: 1}, {text: "以上都是", value: 2}] },
                { dimension: "科学探究能力", text: "科学结论应该基于什么？", options: [{text: "个人猜测", value: 1}, {text: "实验数据", value: 2}, {text: "他人说法", value: 1}, {text: "不知道", value: 1}] },
                
                // 科学态度与情感
                { dimension: "科学态度与情感", text: "你是否愿意参与科学实践活动？", options: [{text: "不愿意", value: 1}, {text: "偶尔愿意", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学对人类的发展重要吗？", options: [{text: "不重要", value: 1}, {text: "一般", value: 1}, {text: "重要", value: 2}, {text: "非常重要", value: 2}] },
                { dimension: "科学态度与情感", text: "你愿意将来从事科学研究工作吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你尊重科学规律吗？", options: [{text: "不尊重", value: 1}, {text: "一般", value: 1}, {text: "尊重", value: 2}, {text: "非常尊重", value: 2}] },
                { dimension: "科学态度与情感", text: "你觉得科学实验失败了还有价值吗？", options: [{text: "没有价值", value: 1}, {text: "一般", value: 1}, {text: "有价值", value: 2}, {text: "非常有价值", value: 2}] },
                { dimension: "科学态度与情感", text: "你是否愿意分享自己的科学发现？", options: [{text: "不愿意", value: 1}, {text: "偶尔愿意", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你是否关注科学技术的最新发展？", options: [{text: "不关注", value: 1}, {text: "偶尔关注", value: 1}, {text: "关注", value: 2}, {text: "非常关注", value: 2}] },
                { dimension: "科学态度与情感", text: "你是否愿意合作完成科学项目？", options: [{text: "不愿意", value: 1}, {text: "偶尔愿意", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你是否愿意质疑科学结论？", options: [{text: "不愿意", value: 1}, {text: "偶尔愿意", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
                { dimension: "科学态度与情感", text: "你是否觉得科学是有趣的？", options: [{text: "没有趣", value: 1}, {text: "一般", value: 1}, {text: "有趣", value: 2}, {text: "非常有趣", value: 2}] },
                
                // 科学、技术与社会的关系
                { dimension: "科学、技术与社会的关系", text: "可再生能源包括？", options: [{text: "太阳能", value: 2}, {text: "风能", value: 2}, {text: "水能", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "不可再生能源包括？", options: [{text: "煤炭", value: 2}, {text: "石油", value: 2}, {text: "天然气", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "科学技术的发展带来了哪些问题？", options: [{text: "环境污染", value: 2}, {text: "资源短缺", value: 2}, {text: "生态破坏", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "如何正确使用科学技术？", options: [{text: "遵循伦理道德", value: 2}, {text: "只考虑利益", value: 1}, {text: "随意使用", value: 1}, {text: "不知道", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "科学技术对经济发展有什么作用？", options: [{text: "促进经济增长", value: 2}, {text: "提高生产效率", value: 2}, {text: "创造新产业", value: 2}, {text: "以上都是", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "以下哪个是信息技术的应用？", options: [{text: "蒸汽机", value: 1}, {text: "电话", value: 1}, {text: "电视", value: 1}, {text: "互联网", value: 2}] },
                { dimension: "科学、技术与社会的关系", text: "以下哪个是生物技术的应用？", options: [{text: "天气预报", value: 1}, {text: "转基因作物", value: 2}, {text: "航天技术", value: 1}, {text: "核技术", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "以下哪个是航天技术的应用？", options: [{text: "人造卫星", value: 2}, {text: "显微镜", value: 1}, {text: "望远镜", value: 1}, {text: "照相机", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "以下哪个是材料科学的应用？", options: [{text: "塑料", value: 2}, {text: "木材", value: 1}, {text: "石头", value: 1}, {text: "金属", value: 1}] },
                { dimension: "科学、技术与社会的关系", text: "科学技术对医疗健康有什么作用？", options: [{text: "提高诊断准确性", value: 2}, {text: "开发新药", value: 2}, {text: "延长寿命", value: 2}, {text: "以上都是", value: 2}] }
            ]
        };

        // 为每个年级生成40道题（10题/维度）
        const fullQuestions = {};
        for (let grade = 1; grade <= 6; grade++) {
            fullQuestions[grade] = [];
            const baseQuestions = gradeQuestions[grade];
            
            // 每个维度生成10道题
            const dimensions = ["科学知识", "科学探究能力", "科学态度与情感", "科学、技术与社会的关系"];
            dimensions.forEach(dimension => {
                const dimensionQuestions = baseQuestions.filter(q => q.dimension === dimension);
                
                // 循环使用基础问题，确保每个维度有10道题
                for (let i = 0; i < 10; i++) {
                    // 使用模运算循环选择基础问题
                    const questionIndex = i % dimensionQuestions.length;
                    // 深拷贝问题对象
                    const question = JSON.parse(JSON.stringify(dimensionQuestions[questionIndex]));
                    fullQuestions[grade].push(question);
                }
            });
        }

        return fullQuestions;
    }

    init() {
        this.bindEvents();
        this.loadStudentData();
        this.loadAdminData();
        this.setDefaultDate();
    }

    bindEvents() {
        // 学生信息保存
        document.getElementById('save-info-btn').addEventListener('click', () => this.saveStudentInfo());
        
        // 测试导航
        document.getElementById('prev-btn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('submit-btn').addEventListener('click', () => this.submitTest());
        
        // 管理员登录
        document.getElementById('login-btn').addEventListener('click', () => this.adminLogin());
        document.getElementById('logout-btn').addEventListener('click', () => this.adminLogout());
        document.getElementById('forgot-password-btn').addEventListener('click', () => this.showForgotPassword());
        document.getElementById('back-to-login').addEventListener('click', () => this.showAdminLogin());
        
        // 后台管理功能
        document.getElementById('export-data-btn').addEventListener('click', () => this.exportAllData());
        document.getElementById('import-data-btn').addEventListener('click', () => this.importData());
        document.getElementById('clear-data-btn').addEventListener('click', () => this.clearAllData());
        document.getElementById('change-password-btn').addEventListener('click', () => this.changeAdminPassword());
        
        // 文件输入事件
        document.getElementById('data-file-input').addEventListener('change', (e) => this.handleFileImport(e));
        
        // 管理员标签页切换
        document.querySelectorAll('.admin-nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchAdminTab(e.target.dataset.tab));
        });
        
        // 班级/年级分析报告功能
        document.getElementById('generate-analysis-btn').addEventListener('click', () => this.generateAnalysisReport());
        document.getElementById('download-analysis-btn').addEventListener('click', () => this.downloadAnalysisReport());
        
        // 单个学生报告下载功能
        document.getElementById('download-report-btn').addEventListener('click', () => this.downloadStudentReport());
    }

    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('test-date').value = today;
    }

    saveStudentInfo() {
        const name = document.getElementById('student-name').value;
        const grade = parseInt(document.getElementById('student-grade').value);
        const className = document.getElementById('student-class').value;
        const testDate = document.getElementById('test-date').value;

        if (!name || !className || !testDate) {
            alert('请填写完整的学生信息！');
            return;
        }

        this.currentStudent = {
            name,
            grade,
            className,
            testDate
        };

        localStorage.setItem('currentStudent', JSON.stringify(this.currentStudent));
        alert('学生信息保存成功！');

        // 初始化测试
        this.startTest();
    }

    startTest() {
        if (!this.currentStudent) return;

        // 检查是否有已保存的测试进度
        const savedProgress = localStorage.getItem(`testProgress_${this.currentStudent.name}_${this.currentStudent.testDate}`);
        
        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            this.currentQuestionIndex = progress.currentQuestionIndex;
            this.answers = progress.answers;
            this.testCompleted = false;
        } else {
            this.currentQuestionIndex = 0;
            this.answers = [];
            this.testCompleted = false;
        }
        
        // 显示测试页面
        this.showSection('test');
        
        // 加载当前年级的问题
        this.displayQuestion();
        this.updateProgress();
    }

    saveTestProgress() {
        if (!this.currentStudent) return;
        
        // 只有在测试未完成时保存进度
        if (!this.testCompleted) {
            const progress = {
                currentQuestionIndex: this.currentQuestionIndex,
                answers: this.answers
            };
            
            localStorage.setItem(`testProgress_${this.currentStudent.name}_${this.currentStudent.testDate}`, JSON.stringify(progress));
        }
    }

    displayQuestion() {
        if (!this.currentStudent) return;
        
        const gradeQuestions = this.testData[this.currentStudent.grade];
        const question = gradeQuestions[this.currentQuestionIndex];
        
        const questionContainer = document.getElementById('test-question');
        questionContainer.innerHTML = `
            <h3>${question.dimension} - 第 ${this.currentQuestionIndex + 1} 题</h3>
            <p>${question.text}</p>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option">
                        <input type="radio" id="option-${index}" name="question-${this.currentQuestionIndex}" value="${option.value}" ${this.answers[this.currentQuestionIndex] === option.value ? 'checked' : ''}>
                        <label for="option-${index}">${option.text}</label>
                    </div>
                `).join('')}
            </div>
        `;

        // 添加选项点击事件
        questionContainer.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', (e) => {
                this.answers[this.currentQuestionIndex] = parseInt(e.target.value);
                // 保存当前测试进度
                this.saveTestProgress();
            });
        });

        // 更新导航按钮状态
        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');

        prevBtn.disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex === this.testData[this.currentStudent.grade].length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.updateProgress();
        }
    }

    nextQuestion() {
        if (!this.answers[this.currentQuestionIndex]) {
            alert('请选择一个答案！');
            return;
        }
        
        // 保存当前测试进度
        this.saveTestProgress();
        
        if (this.currentQuestionIndex < this.testData[this.currentStudent.grade].length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
            this.updateProgress();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.testData[this.currentStudent.grade].length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = this.testData[this.currentStudent.grade].length;
    }

    submitTest() {
        if (!this.answers[this.currentQuestionIndex]) {
            alert('请选择一个答案！');
            return;
        }

        this.testCompleted = true;
        
        // 计算测评结果
        const results = this.calculateResults();
        
        // 保存测评结果
        const studentResult = {
            ...this.currentStudent,
            answers: this.answers,
            results: results,
            timestamp: Date.now()
        };

        // 保存到localStorage
        let allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        allResults.push(studentResult);
        localStorage.setItem('studentResults', JSON.stringify(allResults));

        // 显示测评报告
        this.displayResults(results);
        this.showSection('results');
        
        // 测试完成后，清除保存的测试进度
        localStorage.removeItem(`testProgress_${this.currentStudent.name}_${this.currentStudent.testDate}`);
    }

    calculateResults() {
        if (!this.currentStudent) return null;
        
        const gradeQuestions = this.testData[this.currentStudent.grade];
        const dimensionScores = {
            "科学知识": 0,
            "科学探究能力": 0,
            "科学态度与情感": 0,
            "科学、技术与社会的关系": 0
        };
        
        const dimensionCounts = {
            "科学知识": 0,
            "科学探究能力": 0,
            "科学态度与情感": 0,
            "科学、技术与社会的关系": 0
        };

        // 计算各维度得分
        this.answers.forEach((answer, index) => {
            const question = gradeQuestions[index];
            dimensionScores[question.dimension] += answer;
            dimensionCounts[question.dimension]++;
        });

        // 计算平均得分并转换为百分制
        Object.keys(dimensionScores).forEach(dimension => {
            dimensionScores[dimension] = (dimensionScores[dimension] / (dimensionCounts[dimension] * 2)) * 100;
        });

        // 计算综合得分
        const comprehensiveScore = Object.values(dimensionScores).reduce((sum, score) => sum + score, 0) / 4;

        // 确定等级
        const getGrade = (score) => {
            if (score >= 85) return {grade: '优秀', color: '#4CAF50'};
            if (score >= 70) return {grade: '良好', color: '#2196F3'};
            if (score >= 60) return {grade: '合格', color: '#FFC107'};
            return {grade: '不合格', color: '#F44336'};
        };

        const comprehensiveGrade = getGrade(comprehensiveScore);
        const dimensionGrades = {};
        
        Object.keys(dimensionScores).forEach(dimension => {
            dimensionGrades[dimension] = getGrade(dimensionScores[dimension]);
        });

        return {
            comprehensiveScore: Math.round(comprehensiveScore * 100) / 100,
            comprehensiveGrade,
            dimensionScores,
            dimensionGrades
        };
    }

    displayResults(results) {
        if (!results || !this.currentStudent) return;

        // 显示学生信息
        document.getElementById('display-student-name').textContent = this.currentStudent.name;
        document.getElementById('display-student-grade').textContent = this.currentStudent.grade + '年级';
        document.getElementById('display-student-class').textContent = this.currentStudent.className;
        document.getElementById('display-test-date').textContent = this.currentStudent.testDate;

        // 显示综合结果
        document.getElementById('comprehensive-score').textContent = results.comprehensiveScore;
        document.getElementById('score-grade').textContent = results.comprehensiveGrade.grade;
        document.getElementById('score-grade').style.backgroundColor = results.comprehensiveGrade.color;
        document.getElementById('score-description').textContent = this.getGradeDescription(results.comprehensiveGrade.grade);

        // 显示详细结果表格
        const tableBody = document.querySelector('#detailed-table tbody');
        tableBody.innerHTML = '';

        Object.keys(results.dimensionScores).forEach(dimension => {
            const score = results.dimensionScores[dimension];
            const grade = results.dimensionGrades[dimension];
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${dimension}</td>
                <td>${score.toFixed(2)}</td>
                <td style="color: ${grade.color};">${grade.grade}</td>
            `;
            tableBody.appendChild(row);
        });

        // 生成雷达图
        this.generateRadarChart(results.dimensionScores);

        // 生成分析报告
        this.generateAnalysisReport(results);
    }

    getGradeDescription(grade) {
        const descriptions = {
            '优秀': '你的科学素养水平很高，继续保持！',
            '良好': '你的科学素养水平不错，还有提升空间。',
            '合格': '你的科学素养水平基本达标，需要继续努力。',
            '不合格': '你的科学素养水平有待提高，建议加强学习。'
        };
        return descriptions[grade] || '';
    }

    generateRadarChart(dimensionScores) {
        const ctx = document.getElementById('radar-chart').getContext('2d');
        
        // 销毁现有图表
        if (this.radarChart) {
            this.radarChart.destroy();
        }

        this.radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(dimensionScores),
                datasets: [{
                    label: '科学素养各维度得分',
                    data: Object.values(dimensionScores),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    generateAnalysisReport(results) {
        const reportContainer = document.getElementById('analysis-report');
        
        let report = `
            <h3>学生科学素养综合分析</h3>
            <p>根据测评结果，${this.currentStudent.name}同学的科学素养综合得分为${results.comprehensiveScore}分，等级为${results.comprehensiveGrade.grade}。</p>
            
            <h4>各维度分析：</h4>
        `;

        Object.keys(results.dimensionScores).forEach(dimension => {
            const score = results.dimensionScores[dimension];
            const grade = results.dimensionGrades[dimension].grade;
            
            report += `
                <div class="dimension-analysis">
                    <h5>${dimension} (${score.toFixed(2)}分，${grade})</h5>
                    <p>${this.getDimensionAnalysis(dimension, grade)}</p>
                </div>
            `;
        });

        report += `
            <h4>提升建议：</h4>
            <p>${this.getImprovementSuggestions(results)}</p>
        `;

        reportContainer.innerHTML = report;
    }

    getDimensionAnalysis(dimension, grade) {
        const analyses = {
            '科学知识': {
                '优秀': '对科学基础知识掌握非常扎实，能够很好地理解和应用科学概念。',
                '良好': '对科学基础知识有较好的掌握，但在一些细节方面还可以进一步加强。',
                '合格': '对科学基础知识有一定的了解，但需要系统地复习和巩固。',
                '不合格': '科学基础知识掌握不够，需要加强学习。'
            },
            '科学探究能力': {
                '优秀': '具备很强的科学探究能力，能够独立设计和完成实验。',
                '良好': '科学探究能力不错，能够在指导下完成实验。',
                '合格': '基本具备科学探究能力，但需要更多的实践机会。',
                '不合格': '科学探究能力有待提高，需要加强实验操作练习。'
            },
            '科学态度与情感': {
                '优秀': '对科学充满热情，具有良好的科学态度和探索精神。',
                '良好': '对科学有兴趣，能够积极参与科学活动。',
                '合格': '对科学有一定的兴趣，但参与积极性还可以提高。',
                '不合格': '对科学缺乏兴趣，需要培养科学探索的热情。'
            },
            '科学、技术与社会的关系': {
                '优秀': '能够很好地理解科学、技术与社会的关系，具有科学的社会责任感。',
                '良好': '对科学、技术与社会的关系有一定的认识。',
                '合格': '基本了解科学、技术与社会的关系。',
                '不合格': '对科学、技术与社会的关系认识不足，需要加强学习。'
            }
        };

        return analyses[dimension][grade] || '';
    }

    getImprovementSuggestions(results) {
        const weakDimensions = Object.keys(results.dimensionScores)
            .filter(dimension => results.dimensionGrades[dimension].grade !== '优秀')
            .sort((a, b) => results.dimensionScores[a] - results.dimensionScores[b]);

        if (weakDimensions.length === 0) {
            return '继续保持你的优秀表现，不断探索科学的奥秘！';
        }

        let suggestions = `建议重点加强${weakDimensions.join('、')}方面的学习和实践。`;
        
        if (weakDimensions.includes('科学知识')) {
            suggestions += ' 可以多阅读科学书籍，观看科学纪录片。';
        }
        
        if (weakDimensions.includes('科学探究能力')) {
            suggestions += ' 积极参与科学实验和实践活动，提高动手能力。';
        }
        
        if (weakDimensions.includes('科学态度与情感')) {
            suggestions += ' 培养对科学的兴趣和好奇心，主动探索周围的科学现象。';
        }
        
        if (weakDimensions.includes('科学、技术与社会的关系')) {
            suggestions += ' 关注科学技术的发展，了解科学技术对社会的影响。';
        }

        return suggestions;
    }

    // 管理员功能
    adminLogin() {
        const username = document.getElementById('admin-username').value;
        const password = document.getElementById('admin-password').value;

        // 从localStorage获取管理员密码，默认密码为HWZXXX
        const adminPassword = localStorage.getItem('adminPassword') || 'HWZXXX';

        if (username === 'admin' && password === adminPassword) {
            this.adminLoggedIn = true;
            this.showAdminDashboard();
            this.updateAdminStats();
            this.loadStudentDataTable();
        } else {
            alert('用户名或密码错误！');
        }
    }

    adminLogout() {
        this.adminLoggedIn = false;
        this.showAdminLogin();
    }

    showAdminLogin() {
        document.getElementById('admin-login').style.display = 'block';
        document.getElementById('admin-dashboard').style.display = 'none';
        document.getElementById('forgot-password').style.display = 'none';
    }

    showAdminDashboard() {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        document.getElementById('forgot-password').style.display = 'none';
    }

    showForgotPassword() {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'none';
        document.getElementById('forgot-password').style.display = 'block';
    }

    switchAdminTab(tabName) {
        // 隐藏所有标签页
        document.querySelectorAll('.admin-tab').forEach(tab => {
            tab.style.display = 'none';
        });

        // 移除所有激活状态
        document.querySelectorAll('.admin-nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // 显示选中的标签页
        document.getElementById(tabName).style.display = 'block';
        
        // 设置激活状态
        event.target.classList.add('active');

        // 更新统计数据
        if (tabName === 'reports') {
            this.updateAdminStats();
        }
    }

    updateAdminStats() {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        
        // 总测评人数
        document.getElementById('total-students').textContent = allResults.length;
        
        if (allResults.length === 0) {
            document.getElementById('average-score').textContent = '0.00';
            document.getElementById('excellent-rate').textContent = '0%';
            document.getElementById('good-rate').textContent = '0%';
            document.getElementById('pass-rate').textContent = '0%';
            return;
        }

        // 平均分
        const totalScore = allResults.reduce((sum, result) => sum + result.results.comprehensiveScore, 0);
        const averageScore = totalScore / allResults.length;
        document.getElementById('average-score').textContent = averageScore.toFixed(2);

        // 等级分布
        const gradeCount = {
            '优秀': 0,
            '良好': 0,
            '合格': 0,
            '不合格': 0
        };

        allResults.forEach(result => {
            gradeCount[result.results.comprehensiveGrade.grade]++;
        });

        // 计算百分比
        document.getElementById('excellent-rate').textContent = ((gradeCount['优秀'] / allResults.length) * 100).toFixed(1) + '%';
        document.getElementById('good-rate').textContent = ((gradeCount['良好'] / allResults.length) * 100).toFixed(1) + '%';
        document.getElementById('pass-rate').textContent = (((gradeCount['优秀'] + gradeCount['良好'] + gradeCount['合格']) / allResults.length) * 100).toFixed(1) + '%';

        // 生成等级分布图表
        this.generateGradeDistributionChart(gradeCount);
    }

    generateGradeDistributionChart(gradeCount) {
        const ctx = document.getElementById('grade-distribution-chart').getContext('2d');
        
        // 销毁现有图表
        if (this.gradeChart) {
            this.gradeChart.destroy();
        }

        this.gradeChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['优秀', '良好', '合格', '不合格'],
                datasets: [{
                    label: '人数',
                    data: [gradeCount['优秀'], gradeCount['良好'], gradeCount['合格'], gradeCount['不合格']],
                    backgroundColor: [
                        'rgba(76, 175, 80, 0.8)',
                        'rgba(33, 150, 243, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(244, 67, 54, 0.8)'
                    ],
                    borderColor: [
                        'rgba(76, 175, 80, 1)',
                        'rgba(33, 150, 243, 1)',
                        'rgba(255, 193, 7, 1)',
                        'rgba(244, 67, 54, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    loadStudentDataTable() {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        const tableBody = document.querySelector('#admin-data-table tbody');
        
        tableBody.innerHTML = '';

        allResults.forEach((result, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${result.name}</td>
                <td>${result.grade}年级</td>
                <td>${result.className}</td>
                <td>${result.testDate}</td>
                <td>${result.results.comprehensiveScore}</td>
                <td style="color: ${result.results.comprehensiveGrade.color};">${result.results.comprehensiveGrade.grade}</td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="evaluation.showStudentReport(${index})">查看报告</button>
                    <button class="btn btn-sm btn-danger" onclick="evaluation.deleteStudentData(${index})">删除数据</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    showStudentReport(index) {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        const studentResult = allResults[index];
        
        if (studentResult) {
            this.currentStudent = {
                name: studentResult.name,
                grade: studentResult.grade,
                className: studentResult.className,
                testDate: studentResult.testDate
            };
            this.displayResults(studentResult.results);
            this.generateAnalysisReport(studentResult.results);
            this.showSection('results');
        }
    }

    // 导出所有数据（支持CSV和JSON格式）
    exportAllData() {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        
        if (allResults.length === 0) {
            alert('没有数据可以导出！');
            return;
        }
        
        // 让用户选择导出格式
        const format = prompt('请选择导出格式：\n1. CSV\n2. JSON', '1');
        
        if (!format || (format !== '1' && format !== '2')) {
            return;
        }
        
        const exportDate = new Date().toISOString().split('T')[0];
        
        if (format === '1') {
            // 导出为CSV格式
            this.exportDataAsCSV(allResults, exportDate);
        } else {
            // 导出为JSON格式
            this.exportDataAsJSON(allResults, exportDate);
        }
    }

    // 将数据导出为CSV格式
    exportDataAsCSV(allResults, exportDate) {
        const headers = ['姓名', '年级', '班级', '测评日期', '综合得分', '等级', '科学知识得分', '科学知识等级', '科学探究能力得分', '科学探究能力等级', '科学态度与情感得分', '科学态度与情感等级', '科学、技术与社会的关系得分', '科学、技术与社会的关系等级'];
        const rows = allResults.map(result => [
            result.name,
            result.grade,
            result.className,
            result.testDate,
            result.results.comprehensiveScore,
            result.results.comprehensiveGrade.grade,
            result.results.dimensionScores['科学知识'].toFixed(2),
            result.results.dimensionGrades['科学知识'].grade,
            result.results.dimensionScores['科学探究能力'].toFixed(2),
            result.results.dimensionGrades['科学探究能力'].grade,
            result.results.dimensionScores['科学态度与情感'].toFixed(2),
            result.results.dimensionGrades['科学态度与情感'].grade,
            result.results.dimensionScores['科学、技术与社会的关系'].toFixed(2),
            result.results.dimensionGrades['科学、技术与社会的关系'].grade
        ]);

        const csvContent = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        // 创建下载链接
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `科学素养测评数据_${exportDate}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // 将数据导出为JSON格式
    exportDataAsJSON(allResults, exportDate) {
        // 创建包含元数据的完整JSON对象
        const exportData = {
            version: '1.0',
            exportDate: new Date().toISOString(),
            totalStudents: allResults.length,
            data: allResults
        };
        
        const jsonContent = JSON.stringify(exportData, null, 2);
        
        // 创建下载链接
        const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `科学素养测评数据_${exportDate}.json`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // 导入数据功能
    importData() {
        document.getElementById('data-file-input').click();
    }

    // 处理文件导入
    handleFileImport(event) {
        const file = event.target.files[0];
        
        if (!file) {
            return;
        }
        
        if (!file.name.endsWith('.json')) {
            alert('请选择JSON格式的文件！');
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);
                
                // 验证导入数据的格式
                if (!this.validateImportData(importData)) {
                    alert('导入数据格式不正确！');
                    return;
                }
                
                // 合并导入数据与现有数据
                this.mergeImportData(importData.data);
                
                // 更新界面
                this.loadStudentDataTable();
                this.updateStatistics();
                
                alert('数据导入成功！导入了' + importData.data.length + '条记录。');
            } catch (error) {
                console.error('导入数据错误：', error);
                alert('导入数据错误！请检查文件格式。');
            }
        };
        
        reader.readAsText(file);
        
        // 清空文件输入
        event.target.value = '';
    }

    // 验证导入数据的格式
    validateImportData(importData) {
        if (!importData || !Array.isArray(importData.data)) {
            return false;
        }
        
        // 验证至少有一条记录
        if (importData.data.length === 0) {
            return false;
        }
        
        // 验证每条记录的格式
        const requiredFields = ['name', 'grade', 'className', 'testDate', 'results'];
        
        for (const student of importData.data) {
            for (const field of requiredFields) {
                if (!student.hasOwnProperty(field)) {
                    return false;
                }
            }
            
            // 验证results对象
            const requiredResults = ['comprehensiveScore', 'comprehensiveGrade', 'dimensionScores', 'dimensionGrades'];
            for (const field of requiredResults) {
                if (!student.results.hasOwnProperty(field)) {
                    return false;
                }
            }
        }
        
        return true;
    }

    // 合并导入数据与现有数据
    mergeImportData(importedData) {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        
        // 使用Set来避免重复数据（基于姓名、年级、班级和测评日期的组合）
        const existingRecords = new Set();
        
        allResults.forEach(record => {
            const key = `${record.name}_${record.grade}_${record.className}_${record.testDate}`;
            existingRecords.add(key);
        });
        
        // 添加新记录
        importedData.forEach(record => {
            const key = `${record.name}_${record.grade}_${record.className}_${record.testDate}`;
            if (!existingRecords.has(key)) {
                allResults.push(record);
            }
        });
        
        // 保存合并后的数据
        localStorage.setItem('studentResults', JSON.stringify(allResults));
    }

    clearAllData() {
        if (confirm('确定要清空所有测评数据吗？此操作不可恢复！')) {
            localStorage.removeItem('studentResults');
            alert('所有数据已清空！');
            this.updateAdminStats();
            this.loadStudentDataTable();
        }
    }

    deleteStudentData(index) {
        if (confirm('确定要删除这条数据吗？此操作不可恢复！')) {
            let allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
            allResults.splice(index, 1);
            localStorage.setItem('studentResults', JSON.stringify(allResults));
            alert('数据已删除！');
            this.updateAdminStats();
            this.loadStudentDataTable();
        }
    }

    changeAdminPassword() {
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword !== confirmPassword) {
            alert('两次输入的密码不一致！');
            return;
        }

        if (newPassword.length < 6) {
            alert('密码长度不能少于6个字符！');
            return;
        }

        localStorage.setItem('adminPassword', newPassword);
        alert('密码修改成功！');
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
    }

    // 班级和年级分析功能
    getClassAnalysis(className) {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        const classResults = allResults.filter(result => result.className === className);
        
        return this.calculateGroupAnalysis(classResults);
    }

    getGradeAnalysis(grade) {
        const allResults = JSON.parse(localStorage.getItem('studentResults') || '[]');
        const gradeResults = allResults.filter(result => result.grade === grade);
        
        return this.calculateGroupAnalysis(gradeResults);
    }

    calculateGroupAnalysis(results) {
        if (results.length === 0) {
            return null;
        }

        // 计算各维度平均分
        const dimensionScores = {
            "科学知识": 0,
            "科学探究能力": 0,
            "科学态度与情感": 0,
            "科学、技术与社会的关系": 0
        };

        results.forEach(result => {
            Object.keys(dimensionScores).forEach(dimension => {
                dimensionScores[dimension] += result.results.dimensionScores[dimension];
            });
        });

        Object.keys(dimensionScores).forEach(dimension => {
            dimensionScores[dimension] /= results.length;
        });

        // 计算综合平均分
        const comprehensiveScores = results.map(result => result.results.comprehensiveScore);
        const averageComprehensiveScore = comprehensiveScores.reduce((sum, score) => sum + score, 0) / results.length;

        // 计算等级分布
        const gradeCount = {
            '优秀': 0,
            '良好': 0,
            '合格': 0,
            '不合格': 0
        };

        results.forEach(result => {
            gradeCount[result.results.comprehensiveGrade.grade]++;
        });

        // 计算各维度等级分布
        const dimensionGradeCount = {
            "科学知识": { '优秀': 0, '良好': 0, '合格': 0, '不合格': 0 },
            "科学探究能力": { '优秀': 0, '良好': 0, '合格': 0, '不合格': 0 },
            "科学态度与情感": { '优秀': 0, '良好': 0, '合格': 0, '不合格': 0 },
            "科学、技术与社会的关系": { '优秀': 0, '良好': 0, '合格': 0, '不合格': 0 }
        };

        results.forEach(result => {
            Object.keys(dimensionGradeCount).forEach(dimension => {
                dimensionGradeCount[dimension][result.results.dimensionGrades[dimension].grade]++;
            });
        });

        return {
            totalStudents: results.length,
            averageComprehensiveScore,
            dimensionScores,
            gradeCount,
            dimensionGradeCount
        };
    }

    // 辅助方法
    showSection(sectionId) {
        // 隐藏所有section
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // 显示指定section
        document.getElementById(sectionId).style.display = 'block';

        // 更新导航栏
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    loadStudentData() {
        const savedStudent = localStorage.getItem('currentStudent');
        if (savedStudent) {
            this.currentStudent = JSON.parse(savedStudent);
            this.populateStudentForm();
        }
    }

    populateStudentForm() {
        if (this.currentStudent) {
            document.getElementById('student-name').value = this.currentStudent.name;
            document.getElementById('student-grade').value = this.currentStudent.grade;
            document.getElementById('student-class').value = this.currentStudent.className;
            document.getElementById('test-date').value = this.currentStudent.testDate;
        }
    }

    loadAdminData() {
        // 检查管理员密码是否已设置
        if (!localStorage.getItem('adminPassword')) {
            localStorage.setItem('adminPassword', 'HWZXXX');
        }
    }
    
    // 生成班级/年级分析报告
    generateAnalysisReport() {
        const analysisType = document.getElementById('analysis-type').value;
        const analysisGrade = parseInt(document.getElementById('analysis-grade').value);
        const analysisClass = document.getElementById('analysis-class').value;
        
        let analysisResult;
        let title;
        
        if (analysisType === 'class') {
            if (!analysisGrade || !analysisClass) {
                alert('请选择年级并输入班级！');
                return;
            }
            analysisResult = this.getClassAnalysis(analysisClass);
            title = `${analysisGrade}年级${analysisClass}班级科学素养分析报告`;
        } else {
            if (!analysisGrade) {
                alert('请选择年级！');
                return;
            }
            analysisResult = this.getGradeAnalysis(analysisGrade);
            title = `${analysisGrade}年级科学素养分析报告`;
        }
        
        if (!analysisResult) {
            alert('未找到相关测评数据！');
            return;
        }
        
        this.renderAnalysisReport(analysisResult, title);
    }
    
    // 渲染分析报告
    renderAnalysisReport(result, title) {
        const container = document.getElementById('class-grade-analysis');
        
        // 计算各维度等级百分比
        const calculatePercentages = (counts) => {
            const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
            const percentages = {};
            Object.keys(counts).forEach(key => {
                percentages[key] = total > 0 ? ((counts[key] / total) * 100).toFixed(1) + '%' : '0%';
            });
            return percentages;
        };
        
        const dimensionPercentages = {};
        Object.keys(result.dimensionGradeCount).forEach(dimension => {
            dimensionPercentages[dimension] = calculatePercentages(result.dimensionGradeCount[dimension]);
        });
        
        const overallPercentages = calculatePercentages(result.gradeCount);
        
        // 生成分析报告的文字叙述
        const generateAnalysisNarrative = () => {
            let narrative = `<div class="analysis-narrative">`;
            
            // 整体情况分析
            narrative += `<h4>一、整体情况分析</h4>`;
            narrative += `<p>本次测评共覆盖${result.totalStudents}名学生，整体平均得分为${result.averageComprehensiveScore.toFixed(2)}分。`;
            
            // 综合等级分析
            const gradeDistribution = Object.entries(result.gradeCount).sort((a, b) => {
                const gradeOrder = { '优秀': 4, '良好': 3, '合格': 2, '不合格': 1 };
                return gradeOrder[b[0]] - gradeOrder[a[0]];
            });
            
            const excellentCount = result.gradeCount['优秀'] || 0;
            const goodCount = result.gradeCount['良好'] || 0;
            const passCount = result.gradeCount['合格'] || 0;
            const failCount = result.gradeCount['不合格'] || 0;
            
            const excellentRate = (excellentCount / result.totalStudents * 100).toFixed(1);
            const passRate = ((excellentCount + goodCount + passCount) / result.totalStudents * 100).toFixed(1);
            
            narrative += `其中，优秀等级学生${excellentCount}人，占比${excellentRate}%；良好等级学生${goodCount}人；合格等级学生${passCount}人；不合格等级学生${failCount}人。`;
            narrative += `整体合格率为${passRate}%，`;
            
            if (parseFloat(passRate) >= 90) {
                narrative += `表现优秀。`;
            } else if (parseFloat(passRate) >= 80) {
                narrative += `表现良好。`;
            } else if (parseFloat(passRate) >= 70) {
                narrative += `表现一般，需要进一步提升。`;
            } else {
                narrative += `表现有待提高，需要加强科学素养的培养。`;
            }
            narrative += `</p>`;
            
            // 各维度分析
            narrative += `<h4>二、各维度分析</h4>`;
            
            // 找出优势和不足的维度
            const sortedDimensions = Object.entries(result.dimensionScores).sort((a, b) => b[1] - a[1]);
            const highestDimension = sortedDimensions[0];
            const lowestDimension = sortedDimensions[sortedDimensions.length - 1];
            
            narrative += `<p><strong>优势维度：</strong>${highestDimension[0]}，平均得分${highestDimension[1].toFixed(2)}分。`;
            narrative += `学生在该维度表现突出，`;
            
            // 根据不同维度给出针对性分析
            switch(highestDimension[0]) {
                case '科学知识':
                    narrative += `对科学概念、原理等基础知识掌握扎实。`;
                    break;
                case '科学探究能力':
                    narrative += `具备较强的实验设计、观察、分析和解决问题的能力。`;
                    break;
                case '科学态度与情感':
                    narrative += `对科学学习具有浓厚的兴趣和积极的态度。`;
                    break;
                case '科学、技术与社会的关系':
                    narrative += `能够较好地理解科学技术对社会发展的影响。`;
                    break;
            }
            narrative += `</p>`;
            
            narrative += `<p><strong>待提升维度：</strong>${lowestDimension[0]}，平均得分${lowestDimension[1].toFixed(2)}分。`;
            narrative += `学生在该维度的表现相对薄弱，`;
            
            switch(lowestDimension[0]) {
                case '科学知识':
                    narrative += `需要加强对科学基础知识的学习和理解。`;
                    break;
                case '科学探究能力':
                    narrative += `需要多参与科学实验和探究活动，提升实践能力。`;
                    break;
                case '科学态度与情感':
                    narrative += `需要激发对科学的兴趣，培养积极的学习态度。`;
                    break;
                case '科学、技术与社会的关系':
                    narrative += `需要加强对科学技术与社会关系的认识和理解。`;
                    break;
            }
            narrative += `</p>`;
            
            // 改进建议
            narrative += `<h4>三、改进建议</h4>`;
            narrative += `<ul>`;
            
            // 根据整体情况给出建议
            if (failCount > 0) {
                narrative += `<li>针对不合格学生，建议进行个性化辅导，重点夯实基础，激发学习兴趣。</li>`;
            }
            
            // 根据待提升维度给出建议
            switch(lowestDimension[0]) {
                case '科学知识':
                    narrative += `<li>在${lowestDimension[0]}维度，建议增加基础知识的巩固练习，通过多样化的教学方式帮助学生理解和记忆。</li>`;
                    break;
                case '科学探究能力':
                    narrative += `<li>在${lowestDimension[0]}维度，建议增加实验课和探究活动的比例，让学生在实践中提升能力。</li>`;
                    break;
                case '科学态度与情感':
                    narrative += `<li>在${lowestDimension[0]}维度，建议通过科学故事、科学家事迹等方式激发学生的学习兴趣和探索精神。</li>`;
                    break;
                case '科学、技术与社会的关系':
                    narrative += `<li>在${lowestDimension[0]}维度，建议结合实际生活中的科技应用案例，帮助学生理解科学技术的社会价值。</li>`;
                    break;
            }
            
            narrative += `<li>针对各维度的发展不平衡，建议开展跨维度的综合实践活动，促进学生科学素养的全面发展。</li>`;
            narrative += `<li>定期开展科学测评，及时了解学生的学习情况，调整教学策略，提高教学效果。</li>`;
            narrative += `</ul>`;
            
            // 总结
            narrative += `<h4>四、总结</h4>`;
            narrative += `<p>本次科学素养测评反映了学生的整体科学素养水平和各维度的发展状况。`;
            narrative += `通过针对性的改进措施，相信学生的科学素养将得到全面提升。`;
            narrative += `建议在今后的教学中，继续关注学生的全面发展，注重培养学生的创新精神和实践能力。</p>`;
            
            narrative += `</div>`;
            return narrative;
        };
        
        container.innerHTML = `
            <h3>${title}</h3>
            <div class="analysis-summary">
                <div class="summary-item">
                    <span class="summary-label">总人数：</span>
                    <span class="summary-value">${result.totalStudents}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">平均得分：</span>
                    <span class="summary-value">${result.averageComprehensiveScore.toFixed(2)}</span>
                </div>
            </div>
            
            ${generateAnalysisNarrative()}
            
            <h4>各维度平均得分</h4>
            <table class="analysis-table">
                <thead>
                    <tr>
                        <th>维度</th>
                        <th>平均得分</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(result.dimensionScores).map(([dimension, score]) => `
                        <tr>
                            <td>${dimension}</td>
                            <td>${score.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <h4>综合等级分布</h4>
            <table class="analysis-table">
                <thead>
                    <tr>
                        <th>等级</th>
                        <th>人数</th>
                        <th>百分比</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(result.gradeCount).map(([grade, count]) => `
                        <tr>
                            <td>${grade}</td>
                            <td>${count}</td>
                            <td>${overallPercentages[grade]}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <h4>各维度等级分布</h4>
            ${Object.entries(result.dimensionGradeCount).map(([dimension, counts]) => `
                <div class="dimension-analysis">
                    <h5>${dimension}</h5>
                    <table class="analysis-table">
                        <thead>
                            <tr>
                                <th>等级</th>
                                <th>人数</th>
                                <th>百分比</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(counts).map(([grade, count]) => `
                                <tr>
                                    <td>${grade}</td>
                                    <td>${count}</td>
                                    <td>${dimensionPercentages[dimension][grade]}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `).join('')}
        `;
        
        // 保存当前分析结果，用于下载
        this.currentAnalysisResult = { result, title };
    }
    
    // 下载分析报告
    downloadAnalysisReport() {
        if (!this.currentAnalysisResult) {
            alert('请先生成分析报告！');
            return;
        }
        
        const { result, title } = this.currentAnalysisResult;
        
        // 生成CSV内容
        const headers = ['维度', '平均得分', '优秀人数', '良好人数', '合格人数', '不合格人数', '优秀率', '良好率', '合格率', '不合格率'];
        
        const rows = [];
        Object.entries(result.dimensionScores).forEach(([dimension, score]) => {
            const counts = result.dimensionGradeCount[dimension];
            const total = result.totalStudents;
            rows.push([
                dimension,
                score.toFixed(2),
                counts['优秀'],
                counts['良好'],
                counts['合格'],
                counts['不合格'],
                total > 0 ? ((counts['优秀'] / total) * 100).toFixed(1) + '%' : '0%',
                total > 0 ? ((counts['良好'] / total) * 100).toFixed(1) + '%' : '0%',
                total > 0 ? ((counts['合格'] / total) * 100).toFixed(1) + '%' : '0%',
                total > 0 ? ((counts['不合格'] / total) * 100).toFixed(1) + '%' : '0%'
            ]);
        });
        
        // 添加综合分析
        rows.push([
            '综合得分',
            result.averageComprehensiveScore.toFixed(2),
            result.gradeCount['优秀'],
            result.gradeCount['良好'],
            result.gradeCount['合格'],
            result.gradeCount['不合格'],
            ((result.gradeCount['优秀'] / result.totalStudents) * 100).toFixed(1) + '%',
            ((result.gradeCount['良好'] / result.totalStudents) * 100).toFixed(1) + '%',
            ((result.gradeCount['合格'] / result.totalStudents) * 100).toFixed(1) + '%',
            ((result.gradeCount['不合格'] / result.totalStudents) * 100).toFixed(1) + '%'
        ]);
        
        const csvContent = [
            ['', title].join(','),
            ['总人数:', result.totalStudents].join(','),
            ['平均得分:', result.averageComprehensiveScore.toFixed(2)].join(','),
            '',
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');
        
        // 创建下载链接
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `${title.replace(/[\s\/]/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // 下载单个学生的分析报告
    downloadStudentReport() {
        const analysisReport = document.getElementById('analysis-report');
        
        if (!this.currentStudent || !analysisReport.innerHTML || analysisReport.innerHTML.includes('请先完成测评并生成报告')) {
            alert('请先完成测评并生成报告！');
            return;
        }
        
        // 让用户选择下载格式
        const format = prompt('请选择下载格式：\n1. Word\n2. PDF', '1');
        
        if (!format || (format !== '1' && format !== '2')) {
            return;
        }
        
        const studentName = this.currentStudent.name;
        const testDate = this.currentStudent.testDate;
        const filename = `学生_${studentName}_科学素养测评报告_${testDate.replace(/[\/]/g, '-')}`;
        
        if (format === '1') {
            // 下载为Word格式
            this.downloadReportAsWord(analysisReport, filename);
        } else {
            // 下载为PDF格式
            this.downloadReportAsPDF(analysisReport, filename);
        }
    }

    // 将分析报告下载为Word文档
    downloadReportAsWord(reportElement, filename) {
        const studentInfo = document.querySelector('.student-info-display');
        const comprehensiveResult = document.querySelector('.comprehensive-result');
        const detailedResults = document.querySelector('.detailed-results');
        
        // 创建完整的HTML内容
        const fullContent = `
            <html>
            <head>
                <meta charset="utf-8">
                <title>科学素养测评报告</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h2, h3 { color: #333; }
                    .student-info-display, .comprehensive-result, .detailed-results, .analysis-report {
                        margin-bottom: 30px;
                        padding: 15px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .info-item { margin: 10px 0; }
                    .score-display { display: flex; gap: 20px; }
                    .score-item { margin: 10px 0; }
                    table { border-collapse: collapse; width: 100%; margin: 20px 0; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <h2>科学素养测评报告</h2>
                ${studentInfo ? studentInfo.outerHTML : ''}
                ${comprehensiveResult ? comprehensiveResult.outerHTML : ''}
                ${detailedResults ? detailedResults.outerHTML : ''}
                <div class="analysis-report">
                    <h3>素养分析报告</h3>
                    ${reportElement.innerHTML}
                </div>
            </body>
            </html>
        `;
        
        // 创建下载链接
        const blob = new Blob(['\ufeff' + fullContent], { type: 'application/msword;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `${filename}.doc`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // 将分析报告下载为PDF文档
    downloadReportAsPDF(reportElement, filename) {
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // 获取报告内容
        const studentInfo = document.querySelector('.student-info-display');
        const comprehensiveResult = document.querySelector('.comprehensive-result');
        const detailedResults = document.querySelector('.detailed-results');
        
        // 创建一个临时容器来合并所有内容
        const tempContainer = document.createElement('div');
        tempContainer.style.padding = '20px';
        tempContainer.innerHTML = `
            <h2>科学素养测评报告</h2>
            ${studentInfo ? studentInfo.outerHTML : ''}
            ${comprehensiveResult ? comprehensiveResult.outerHTML : ''}
            ${detailedResults ? detailedResults.outerHTML : ''}
            <div class="analysis-report">
                <h3>素养分析报告</h3>
                ${reportElement.innerHTML}
            </div>
        `;
        
        document.body.appendChild(tempContainer);
        
        // 使用html2canvas将HTML转换为图片
        html2canvas(tempContainer, {
            scale: 2, // 提高清晰度
            useCORS: true
        }).then(canvas => {
            // 将canvas添加到PDF
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210; // A4宽度，单位mm
            const pageHeight = 297; // A4高度，单位mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            // 添加第一页
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // 处理多页
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            // 下载PDF
            pdf.save(`${filename}.pdf`);
            
            // 移除临时容器
            document.body.removeChild(tempContainer);
        });
    }
}

// 初始化系统
const evaluation = new ScientificLiteracyEvaluation();

// 导航栏点击事件
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = e.target.getAttribute('href').substring(1);
        evaluation.showSection(sectionId);
    });
});