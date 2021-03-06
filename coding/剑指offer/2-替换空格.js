// 牛客网：https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&tqId=11155&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

/**
 * 题目描述
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 * 例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

// 方法1
function replaceSpace(str) {
  return str.replace(/\s/g, "%20");
}

// 方法2
function replaceSpace2(str) {
  let spaceNum = 0;
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      spaceNum++;
    }
  }
  let newStrArr = new Array(str.length + spaceNum * 2);
  let p = newStrArr.length - 1;
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (strArr[i] != " ") {
      newStrArr[p--] = strArr[i];
    } else {
      newStrArr[p--] = "0";
      newStrArr[p--] = "2";
      newStrArr[p--] = "%";
    }
  }
  return newStrArr.join("");
}

str = "We Are Happy";
o = replaceSpace2(str);
console.log(o);