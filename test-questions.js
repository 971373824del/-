// 测试题目生成功能
// 简化版测试，只提取题目生成相关的代码
const fs = require('fs');
const path = require('path');

// 直接读取script.js文件
const scriptContent = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');

// 提取generateGradeBasedQuestions方法
const questionDataMatch = scriptContent.match(/generateGradeBasedQuestions\(\) \{([\s\S]*?)\}/);
if (!questionDataMatch) {
    console.error('无法找到generateGradeBasedQuestions方法');
    process.exit(1);
}

// 提取问题数据
const dataMatch = scriptContent.match(/this\.testData = this\.generateGradeBasedQuestions\(\);([\s\S]*?)this\.init\(\);/);
if (!dataMatch) {
    console.error('无法找到测试数据');
    process.exit(1);
}

// 创建一个简化的测试环境
function testQuestionGeneration() {
    // 模拟问题数据结构
    const questionsData = {
        1: [
            // 一年级问题 - 科学知识
            { dimension: "科学知识", text: "太阳是？", options: [{text: "星星", value: 2}, {text: "月亮", value: 1}, {text: "地球", value: 1}, {text: "云朵", value: 1}] },
            { dimension: "科学知识", text: "我们用什么器官看东西？", options: [{text: "眼睛", value: 2}, {text: "鼻子", value: 1}, {text: "耳朵", value: 1}, {text: "嘴巴", value: 1}] },
            { dimension: "科学知识", text: "水在什么温度下会结冰？", options: [{text: "0℃", value: 2}, {text: "10℃", value: 1}, {text: "100℃", value: 1}, {text: "50℃", value: 1}] },
            { dimension: "科学知识", text: "植物需要什么来生长？", options: [{text: "阳光", value: 2}, {text: "黑暗", value: 1}, {text: "寒冷", value: 1}, {text: "干燥", value: 1}] },
            { dimension: "科学知识", text: "下列哪个是动物？", options: [{text: "猫", value: 2}, {text: "树", value: 1}, {text: "花", value: 1}, {text: "草", value: 1}] },
            // 一年级问题 - 科学探究能力
            { dimension: "科学探究能力", text: "想要知道水是否热，我们可以？", options: [{text: "用眼睛看", value: 1}, {text: "用手摸", value: 2}, {text: "用耳朵听", value: 1}, {text: "用鼻子闻", value: 1}] },
            { dimension: "科学探究能力", text: "想要知道物体的长度，我们可以用？", options: [{text: "天平", value: 1}, {text: "尺子", value: 2}, {text: "温度计", value: 1}, {text: "放大镜", value: 1}] },
            { dimension: "科学探究能力", text: "想要观察小蚂蚁，我们可以用？", options: [{text: "望远镜", value: 1}, {text: "放大镜", value: 2}, {text: "显微镜", value: 1}, {text: "眼镜", value: 1}] },
            { dimension: "科学探究能力", text: "想要知道今天的天气，我们可以？", options: [{text: "看电视天气预报", value: 2}, {text: "问同学", value: 1}, {text: "猜一猜", value: 1}, {text: "不关心", value: 1}] },
            { dimension: "科学探究能力", text: "想要知道种子如何发芽，我们应该？", options: [{text: "种下来观察", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
            // 一年级问题 - 科学态度与情感
            { dimension: "科学态度与情感", text: "当你看到小昆虫时，你会？", options: [{text: "害怕地跑开", value: 1}, {text: "仔细观察它们", value: 2}, {text: "想要抓住它们", value: 1}, {text: "觉得它们很脏", value: 1}] },
            { dimension: "科学态度与情感", text: "你喜欢上科学课吗？", options: [{text: "不喜欢", value: 1}, {text: "非常喜欢", value: 2}, {text: "一般", value: 1}, {text: "没感觉", value: 1}] },
            { dimension: "科学态度与情感", text: "当你做实验失败时，你会？", options: [{text: "放弃", value: 1}, {text: "再试一次", value: 2}, {text: "问老师", value: 1}, {text: "生气", value: 1}] },
            { dimension: "科学态度与情感", text: "你愿意参加科学小制作活动吗？", options: [{text: "不愿意", value: 1}, {text: "非常愿意", value: 2}, {text: "随便", value: 1}, {text: "不知道", value: 1}] },
            { dimension: "科学态度与情感", text: "你觉得科学有趣吗？", options: [{text: "没趣", value: 1}, {text: "非常有趣", value: 2}, {text: "一般", value: 1}, {text: "不知道", value: 1}] },
            // 一年级问题 - 科学、技术与社会的关系
            { dimension: "科学、技术与社会的关系", text: "我们乘坐的公交车是？", options: [{text: "自然现象", value: 1}, {text: "交通工具", value: 2}, {text: "植物", value: 1}, {text: "动物", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来打电话？", options: [{text: "电视", value: 1}, {text: "手机", value: 2}, {text: "收音机", value: 1}, {text: "电脑", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来照明？", options: [{text: "蜡烛", value: 1}, {text: "电灯", value: 2}, {text: "火把", value: 1}, {text: "月光", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来做饭？", options: [{text: "微波炉", value: 2}, {text: "石头", value: 1}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来写字？", options: [{text: "石头", value: 1}, {text: "钢笔", value: 2}, {text: "树枝", value: 1}, {text: "叶子", value: 1}] }
        ],
        2: [
            // 二年级问题 - 科学知识
            { dimension: "科学知识", text: "水的三种状态是？", options: [{text: "固态、液态、气态", value: 2}, {text: "液态、气态、固态", value: 1}, {text: "气态、固态、液态", value: 1}, {text: "以上都是", value: 2}] },
            { dimension: "科学知识", text: "磁铁能吸引什么？", options: [{text: "铁", value: 2}, {text: "塑料", value: 1}, {text: "木头", value: 1}, {text: "布料", value: 1}] },
            { dimension: "科学知识", text: "植物的叶子主要进行什么作用？", options: [{text: "光合作用", value: 2}, {text: "呼吸作用", value: 1}, {text: "吸收作用", value: 1}, {text: "运输作用", value: 1}] },
            { dimension: "科学知识", text: "动物的基本需求不包括？", options: [{text: "游戏", value: 2}, {text: "食物", value: 1}, {text: "水", value: 1}, {text: "空气", value: 1}] },
            { dimension: "科学知识", text: "地球的形状是？", options: [{text: "圆形", value: 2}, {text: "方形", value: 1}, {text: "三角形", value: 1}, {text: "不确定", value: 1}] },
            // 二年级问题 - 科学探究能力
            { dimension: "科学探究能力", text: "要测量体温，我们可以使用？", options: [{text: "尺子", value: 1}, {text: "温度计", value: 2}, {text: "天平", value: 1}, {text: "放大镜", value: 1}] },
            { dimension: "科学探究能力", text: "观察蜗牛时，我们应该记录什么？", options: [{text: "蜗牛的颜色", value: 2}, {text: "蜗牛的大小", value: 1}, {text: "蜗牛的爬行方式", value: 1}, {text: "以上都是", value: 2}] },
            { dimension: "科学探究能力", text: "做实验时，我们应该先做什么？", options: [{text: "准备材料", value: 2}, {text: "开始实验", value: 1}, {text: "记录结果", value: 1}, {text: "整理器材", value: 1}] },
            { dimension: "科学探究能力", text: "想要知道种子发芽需要水吗？", options: [{text: "做对比实验", value: 2}, {text: "问老师", value: 1}, {text: "查书本", value: 1}, {text: "不知道", value: 1}] },
            { dimension: "科学探究能力", text: "观察植物生长时，我们应该记录什么？", options: [{text: "植物的高度", value: 2}, {text: "叶子的数量", value: 1}, {text: "开花的时间", value: 1}, {text: "以上都是", value: 2}] },
            // 二年级问题 - 科学态度与情感
            { dimension: "科学态度与情感", text: "你喜欢观察周围的自然现象吗？", options: [{text: "不喜欢", value: 1}, {text: "一般", value: 1}, {text: "喜欢", value: 2}, {text: "非常喜欢", value: 2}] },
            { dimension: "科学态度与情感", text: "你愿意参加科学实践活动吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
            { dimension: "科学态度与情感", text: "你觉得科学对我们的生活重要吗？", options: [{text: "不重要", value: 1}, {text: "一般", value: 1}, {text: "重要", value: 2}, {text: "非常重要", value: 2}] },
            { dimension: "科学态度与情感", text: "你愿意主动学习科学知识吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
            { dimension: "科学态度与情感", text: "你尊重自然环境吗？", options: [{text: "不尊重", value: 1}, {text: "一般", value: 1}, {text: "尊重", value: 2}, {text: "非常尊重", value: 2}] },
            // 二年级问题 - 科学、技术与社会的关系
            { dimension: "科学、技术与社会的关系", text: "我们用什么来保存食物？", options: [{text: "冰箱", value: 2}, {text: "柜子", value: 1}, {text: "桌子", value: 1}, {text: "椅子", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来洗涤衣物？", options: [{text: "洗衣机", value: 2}, {text: "脸盆", value: 1}, {text: "桶", value: 1}, {text: "手", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来获取信息？", options: [{text: "互联网", value: 2}, {text: "报纸", value: 1}, {text: "电视", value: 1}, {text: "广播", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来治疗疾病？", options: [{text: "药物", value: 2}, {text: "食物", value: 1}, {text: "水", value: 1}, {text: "休息", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来运输货物？", options: [{text: "卡车", value: 2}, {text: "自行车", value: 1}, {text: "滑板车", value: 1}, {text: "人力车", value: 1}] }
        ],
        3: [
            // 三年级问题 - 科学知识
            { dimension: "科学知识", text: "声音是如何传播的？", options: [{text: "通过介质传播", value: 2}, {text: "不需要介质", value: 1}, {text: "只能在空气中传播", value: 1}, {text: "以上都不对", value: 1}] },
            { dimension: "科学知识", text: "植物的根主要进行什么作用？", options: [{text: "吸收水分和无机盐", value: 2}, {text: "光合作用", value: 1}, {text: "呼吸作用", value: 1}, {text: "运输作用", value: 1}] },
            { dimension: "科学知识", text: "动物的分类不包括？", options: [{text: "微生物", value: 2}, {text: "哺乳动物", value: 1}, {text: "鸟类", value: 1}, {text: "爬行动物", value: 1}] },
            { dimension: "科学知识", text: "简单机械包括？", options: [{text: "杠杆、滑轮、斜面", value: 2}, {text: "电脑、手机、电视", value: 1}, {text: "汽车、火车、飞机", value: 1}, {text: "以上都不对", value: 1}] },
            { dimension: "科学知识", text: "天气的主要要素不包括？", options: [{text: "地震", value: 2}, {text: "温度", value: 1}, {text: "湿度", value: 1}, {text: "风向", value: 1}] },
            // 三年级问题 - 科学探究能力
            { dimension: "科学探究能力", text: "进行科学实验时，我们应该佩戴什么？", options: [{text: "护目镜", value: 2}, {text: "帽子", value: 1}, {text: "手套", value: 1}, {text: "围巾", value: 1}] },
            { dimension: "科学探究能力", text: "观察植物细胞时，我们需要使用？", options: [{text: "显微镜", value: 2}, {text: "望远镜", value: 1}, {text: "放大镜", value: 1}, {text: "眼镜", value: 1}] },
            { dimension: "科学探究能力", text: "设计实验时，我们应该考虑什么？", options: [{text: "控制变量", value: 2}, {text: "随意操作", value: 1}, {text: "忽略安全", value: 1}, {text: "以上都不对", value: 1}] },
            { dimension: "科学探究能力", text: "想要知道物体的密度，我们需要测量什么？", options: [{text: "质量和体积", value: 2}, {text: "长度和宽度", value: 1}, {text: "高度和重量", value: 1}, {text: "以上都不对", value: 1}] },
            { dimension: "科学探究能力", text: "观察化学反应时，我们应该注意什么？", options: [{text: "颜色变化", value: 2}, {text: "声音变化", value: 1}, {text: "温度变化", value: 1}, {text: "以上都是", value: 2}] },
            // 三年级问题 - 科学态度与情感
            { dimension: "科学态度与情感", text: "你愿意与同学分享科学发现吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
            { dimension: "科学态度与情感", text: "你觉得科学实验危险吗？", options: [{text: "非常危险", value: 1}, {text: "有点危险", value: 1}, {text: "不危险", value: 2}, {text: "不确定", value: 1}] },
            { dimension: "科学态度与情感", text: "你愿意学习新的科学知识吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
            { dimension: "科学态度与情感", text: "你尊重科学家的工作吗？", options: [{text: "不尊重", value: 1}, {text: "一般", value: 1}, {text: "尊重", value: 2}, {text: "非常尊重", value: 2}] },
            { dimension: "科学态度与情感", text: "你愿意为保护自然环境做贡献吗？", options: [{text: "不愿意", value: 1}, {text: "一般", value: 1}, {text: "愿意", value: 2}, {text: "非常愿意", value: 2}] },
            // 三年级问题 - 科学、技术与社会的关系
            { dimension: "科学、技术与社会的关系", text: "互联网的作用不包括？", options: [{text: "时光旅行", value: 2}, {text: "信息传递", value: 1}, {text: "在线学习", value: 1}, {text: "远程交流", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "我们用什么来发电？", options: [{text: "发电机", value: 2}, {text: "电动机", value: 1}, {text: "变压器", value: 1}, {text: "以上都不对", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "医学技术的发展不包括？", options: [{text: "穿越时空", value: 2}, {text: "疫苗接种", value: 1}, {text: "器官移植", value: 1}, {text: "基因编辑", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "交通技术的发展带来了什么问题？", options: [{text: "空气污染", value: 2}, {text: "生活便利", value: 1}, {text: "经济发展", value: 1}, {text: "文化交流", value: 1}] },
            { dimension: "科学、技术与社会的关系", text: "农业技术的发展不包括？", options: [{text: "魔法种植", value: 2}, {text: "杂交水稻", value: 1}, {text: "大棚种植", value: 1}, {text: "转基因技术", value: 1}] }
        ]
        // 为了简化测试，我们只使用1-3年级的数据
    };

    // 模拟generateGradeBasedQuestions方法的逻辑
    function generateQuestions() {
        const questions = {};
        
        // 为每个年级生成题目
        for (let grade = 1; grade <= 3; grade++) {
            questions[grade] = [];
            const gradeData = questionsData[grade];
            
            // 按维度分组
            const dimensions = {};
            gradeData.forEach(question => {
                if (!dimensions[question.dimension]) {
                    dimensions[question.dimension] = [];
                }
                dimensions[question.dimension].push(question);
            });
            
            // 每个维度生成10道题
            Object.keys(dimensions).forEach(dimension => {
                const baseQuestions = dimensions[dimension];
                for (let i = 0; i < 10; i++) {
                    // 使用模运算循环选择基础问题
                    const questionIndex = i % baseQuestions.length;
                    const question = JSON.parse(JSON.stringify(baseQuestions[questionIndex]));
                    questions[grade].push(question);
                }
            });
        }
        
        return questions;
    }

    const generatedQuestions = generateQuestions();
    
    // 测试结果
    console.log('=== 测试题目生成功能 ===');
    
    for (let grade = 1; grade <= 3; grade++) {
        console.log(`\n--- 年级 ${grade} 题目测试 ---`);
        const gradeQuestions = generatedQuestions[grade];
        
        console.log(`总题目数: ${gradeQuestions.length}`);
        
        // 按维度检查
        const dimensions = ["科学知识", "科学探究能力", "科学态度与情感", "科学、技术与社会的关系"];
        dimensions.forEach(dimension => {
            const dimensionQuestions = gradeQuestions.filter(q => q.dimension === dimension);
            console.log(`${dimension}: ${dimensionQuestions.length} 题`);
            
            // 检查题目是否重复
            const questionTexts = dimensionQuestions.map(q => q.text);
            const uniqueTexts = new Set(questionTexts);
            console.log(`  唯一题目数: ${uniqueTexts.size}`);
            console.log(`  题目内容: ${Array.from(uniqueTexts).join(', ')}`);
            
            if (uniqueTexts.size === dimensionQuestions.length) {
                console.log(`  ✅ 所有题目都是唯一的`);
            } else {
                console.log(`  ⚠️  发现重复题目！`);
                // 找出重复的题目
                const duplicates = questionTexts.filter((text, index) => 
                    questionTexts.indexOf(text) !== index
                );
                if (duplicates.length > 0) {
                    console.log(`  重复题目: ${duplicates.join(', ')}`);
                }
            }
        });
    }
    
    console.log('\n=== 测试完成 ===');
}

// 运行测试
testQuestionGeneration();