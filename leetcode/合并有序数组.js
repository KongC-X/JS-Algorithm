// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明：初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

// 示例: 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// JS 独有做法，一步秒杀，不需要双指针
function merge(nums1, m, nums2, n) {
    // 拼接然后 sort 就完事了
    nums1.splice(m, nums1.length - m, ...nums2).sort((a, b) => a - b);
    // 还有更离谱的
    [...nums1, ...nums2].sort((a, b) => a - b);
};

// 反向双指针解法，指针位置为两个数组的尾部，时间复杂度为 O (1) 不额外开辟空间
const merge = function(nums1, m, nums2, n) {
    // 初始化两个指针的指向，初始化 nums1 尾部索引 k
    let i = m - 1, j = n - 1, k = m + n - 1;
    // 当两个数组都没遍历完时，指针同步移动
    while(i >= 0 && j >= 0) {
        // 取较大的值，从末尾往前填补
        if(nums1[i] >= nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    // nums2 留下的情况（nums1 和 nums2 两个数组的最小值在 nums2 中），特殊处理一下 
    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
};

// 来看看 chatGPT 是怎么做的，chatGPT 用的是正向双指针，需要开辟一个额外的空间存储结果
// 函数中使用了两个指针 i 和 j 分别指向 arr1 和 arr2 的开头，然后比较两个指针指向的元素大小，
// 将较小的元素加入到 mergedArray 中，并将对应指针向后移动一位。
// 当其中一个指针到达数组末尾时，将剩余的元素加入到 mergedArray 中。最后返回 mergedArray 即可。
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  