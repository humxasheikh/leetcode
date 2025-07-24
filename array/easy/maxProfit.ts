function maxProfit(prices: number[]): number {
  if (!prices || prices.length <= 1) return 0;
  // result 0
  let profit = 0;
  // first but will be the 1st index just temp
  let buy = prices[0];

  // iterate on the list
  for (let i = 1; i < prices.length; i++) {
    const sell = prices[i] - buy;
    // if difference is in -ve update the buy price to the next value
    // else if difference is greater than result update the profit
    if (sell < 0) buy = prices[i];
    profit = Math.max(sell, profit);
  }
  return profit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
