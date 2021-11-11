/**
 * 和归并排序一样，快速排序也使用分治的方法，
 * 将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）。
 * (1) 首先，从数组中选择中间一项作为主元
 * (2) 创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。移动左指针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素，然后交
 *     换它们，重复这个过程，直到左指针超过了右指针。
 * (3) 接着，算法对划分后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直至数组已完全排序。
 */


var sortArray = function (nums) {
  quick(nums, 0, nums.length - 1);
  return nums;
};

function quick(list, left, right) {
  let index = 0;
  if (list.length > 1) {
    index = partition(list, left, right); // 帮助我们将子数组分离为较小值数组和较大值数组
    left < index - 1 && quick(list, left, index - 1);
    index < right && quick(list, index, right);
  }
}

function partition(list, left, right) {
  let mid = list[(right + left) >> 1];
  while (left <= right) {
    while (list[left] < mid) {
      left++;
    }
    while (list[right] > mid) {
      right--;
    }
    if (left <= right) {
      [list[left], list[right]] = [list[right], list[left]];
      left++;
      right--;
    }
  }
  return left;
}
console.log(sortArray([5, 2, 3, 1]));
