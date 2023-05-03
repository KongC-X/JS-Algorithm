// 反转字符串
const str = 'string';
const res = str.split('').reverse().join('');

// 判断一个字符串是否是回文字符串，两种方法
// 第一种, 直接反转判断是否相等
function isPalindrome(str) {  
    // 先反转字符串
    const reverseStr = str.split('').reverse().join('');
    // 判断反转前后的字符串是否相等
    return reverseStr === str;
}
// 第二种，通过对称来判断
function isPalindromeToSymmetry(str) {  
    const len = str.length;
    for (let i = 0; i < len; i++)  {
        if(str[i] !== str[len - i - 1]) return false;
    }
    return true;
}

// 回文字符串的衍生问题：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释：你可以删除 c 字符。
// 注意：字符串只包含从 a-z 的小写字母。字符串的最大长度是 50000。

// 直接遍历然后依次删除再判断回文，可以但是不够高效
// 这里我们试着来用对称性加双指针试试看
// 一个指向头一个指向尾，相等就往中间走，不相等就试试看删除一个点
// 看看区间在 [left+1, right] 或 [left, right-1] 的字符串是否回文

const validPalindrome = function (str) {  
    const len = str.length;
    // i 和 j 分别为左右指针
    let i = 0, j = len - 1;

    // 当左右指针满足对称，一起往中间走
    while(i < j && str[i] == str[j]) {
        i++,j--;
    }

    // 尝试判断跳过左右指针元素后字符串是否回文
    if(isPalindromeToSymmetry(i + 1, j) || isPalindromeToSymmetry(i , j - 1)) {
        return true;
    }

    // 默认返回 false
    return false;
}