
// 给你一个不同学生的分数列表 items，其中 items[i] = [IDi, scorei] 表示 IDi 的学生的一科分数
// 你需要计算每个学生 最高的五科 成绩的 平均分。
// 返回答案 result 以数对数组形式给出，其中 result[j] = [IDj, topFiveAveragej]
// 表示 IDj 的学生和他 最高的五科 成绩的 平均分。result 需要按 IDj  递增的 顺序排列 。
// 学生 最高的五科 成绩的 平均分 的计算方法是将最高的五科分数相加，然后用 整数除法 除以 5 。

/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function (items) {
  const totalSingle = function (index) {
    let list = items.filter((i) => i[0] === index).map(j => j[1]).sort((a, b) => b - a);
    const sumOfFirstFive = list.slice(0, 5).reduce((sum, num) => sum + num, 0);
    return sumOfFirstFive;
  }
  let indexList = [...new Set(items.map(i => i[0]))];
  indexList = indexList.map((a, b) => a - b);
  let result = [];
  for (let i = 0; i < indexList.length; i++) {
    const total = totalSingle(indexList[i]) / 5
    result.push([indexList[i], total]);
  }
  return result;
};
console.log('highFive', highFive([[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]));