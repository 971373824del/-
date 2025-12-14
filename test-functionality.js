// 测试科学素养评价系统功能
console.log('开始测试科学素养评价系统...');

// 1. 测试赋分标准修改
console.log('\n1. 测试赋分标准修改:');
const testScores = [90, 85, 80, 75, 70, 65, 60, 55];

testScores.forEach(score => {
    let grade;
    if (score >= 85) grade = '优秀';
    else if (score >= 70) grade = '良好';
    else if (score >= 60) grade = '合格';
    else grade = '不合格';
    
    console.log(`分数: ${score} -> 等级: ${grade}`);
});

// 2. 测试班级/年级分析报告功能
console.log('\n2. 测试班级/年级分析报告功能:');

// 模拟一些测试数据
const mockResults = [
    { grade: 1, className: '1班', testDate: '2024-01-01', results: { comprehensiveScore: 88, comprehensiveGrade: { grade: '优秀' }, dimensionScores: { '科学知识': 85, '科学探究能力': 90, '科学态度与情感': 87, '科学、技术与社会的关系': 90 }, dimensionGrades: { '科学知识': { grade: '优秀' }, '科学探究能力': { grade: '优秀' }, '科学态度与情感': { grade: '优秀' }, '科学、技术与社会的关系': { grade: '优秀' } } } },
    { grade: 1, className: '1班', testDate: '2024-01-01', results: { comprehensiveScore: 72, comprehensiveGrade: { grade: '良好' }, dimensionScores: { '科学知识': 70, '科学探究能力': 75, '科学态度与情感': 72, '科学、技术与社会的关系': 70 }, dimensionGrades: { '科学知识': { grade: '良好' }, '科学探究能力': { grade: '良好' }, '科学态度与情感': { grade: '良好' }, '科学、技术与社会的关系': { grade: '良好' } } } },
    { grade: 1, className: '2班', testDate: '2024-01-01', results: { comprehensiveScore: 65, comprehensiveGrade: { grade: '合格' }, dimensionScores: { '科学知识': 60, '科学探究能力': 65, '科学态度与情感': 70, '科学、技术与社会的关系': 65 }, dimensionGrades: { '科学知识': { grade: '合格' }, '科学探究能力': { grade: '合格' }, '科学态度与情感': { grade: '良好' }, '科学、技术与社会的关系': { grade: '合格' } } } }
];

// 测试班级分析
function testClassAnalysis(className) {
    const classResults = mockResults.filter(result => result.className === className);
    console.log(`\n   班级 ${className} 分析:`);
    console.log(`   学生人数: ${classResults.length}`);
    
    if (classResults.length > 0) {
        const totalScore = classResults.reduce((sum, result) => sum + result.results.comprehensiveScore, 0);
        const avgScore = totalScore / classResults.length;
        console.log(`   平均综合得分: ${avgScore.toFixed(2)}`);
        
        // 计算等级分布
        const gradeDistribution = {优秀: 0, 良好: 0, 合格: 0, 不合格: 0};
        classResults.forEach(result => {
            gradeDistribution[result.results.comprehensiveGrade.grade]++;
        });
        console.log(`   等级分布: ${JSON.stringify(gradeDistribution)}`);
    }
}

// 测试年级分析
function testGradeAnalysis(grade) {
    const gradeResults = mockResults.filter(result => result.grade === grade);
    console.log(`\n   年级 ${grade} 分析:`);
    console.log(`   学生人数: ${gradeResults.length}`);
    
    if (gradeResults.length > 0) {
        const totalScore = gradeResults.reduce((sum, result) => sum + result.results.comprehensiveScore, 0);
        const avgScore = totalScore / gradeResults.length;
        console.log(`   平均综合得分: ${avgScore.toFixed(2)}`);
        
        // 计算等级分布
        const gradeDistribution = {优秀: 0, 良好: 0, 合格: 0, 不合格: 0};
        gradeResults.forEach(result => {
            gradeDistribution[result.results.comprehensiveGrade.grade]++;
        });
        console.log(`   等级分布: ${JSON.stringify(gradeDistribution)}`);
    }
}

testClassAnalysis('1班');
testClassAnalysis('2班');
testGradeAnalysis(1);

console.log('\n测试完成！');