const sumRecursive = (arr: number[], i: number = 0): number => (
  (i === arr.length) ? 0 : arr[i] + sumRecursive(arr, i + 1)
);

describe('sum', () => {
  context('배열이 주어지면', () => {
    it('배열의 합을 리턴해야 한다.', () => {
      expect(sumRecursive([1, 2, 3, 4, 5])).toBe(15);
    });
  });
});
