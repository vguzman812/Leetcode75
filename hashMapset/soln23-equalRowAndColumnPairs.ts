/**
 * https://leetcode.com/problems/equal-row-and-column-pairs/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * Given a 0-indexed n x n integer matrix grid, 
 * return the number of pairs (ri, cj) 
 * such that row ri and column cj are equal.
 * A row and column pair is considered equal 
 * if they contain the same elements in the same order 
 * (i.e., an equal array).
 * 
 * @example
 * Input: grid = [
 *  [3,2,1],
 *  [1,7,6],
 *  [2,7,7]
 * ]
 * Output: 1
 * Explanation: There is 1 equal row and column pair:
 * - (Row 2, Column 1): [2,7,7]
 * 
 * Input: grid = [
 *  [3,1,2,2],
 *  [1,4,4,5],
 *  [2,4,2,2],
 *  [2,4,2,2]
 * ]
 * Output: 3
 * Explanation: There are 3 equal row and column pairs:
 * - (Row 0, Column 0): [3,1,2,2]
 * - (Row 2, Column 2): [2,4,2,2]
 * - (Row 3, Column 2): [2,4,2,2]
 * 
 * @param {number[][]} grid
 * @returns {number}
 * 
 * @pseudocode
 *  initialize new map for rows
 *  for row in grid
 *      key = row.joing(",") // 1,2,3,4
 *      set new key:value pair in map
 *          value is either 1 or current + 1
 *  initalize count
 *  iterare through rows with i
 *      initialize column array
 *      iterate through columns with j
 *          push grid[row index i][column index j] onto column array
 *      column key = column.join(",") // 1,2,3,4
 *      if map has column key
 *          count += map.get(columnKey)
 *  return count
 *  
 */

function equalPairs(grid: number[][]): number {
    const rowMap = new Map<string, number>()
    for (let row of grid) {
      const key = row.join(",")
      rowMap.set(key, (rowMap.get(key) || 0) + 1)
    }
    
    let res = 0
    for (let c = 0; c < grid.length; c++) {
      const column: number[] = []
      for (let r = 0; r < grid.length; r++) {
        column.push(grid[r][c])
      }
      const columnKey = column.join(",")
      if (rowMap.has(columnKey)) {
        res += rowMap.get(columnKey)!
      }
    }
    
    return res
  };