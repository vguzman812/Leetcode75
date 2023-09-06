/**
 * https://leetcode.com/problems/number-of-recent-calls/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * You have a RecentCounter class which counts the number of recent requests within a certain time frame.
 * RecentCounter() Initializes the counter with zero recent requests.
 * ping(t: number): number Adds a new request at time t, 
 * where t represents some time in milliseconds, 
 * and returns the number of requests that has happened in the past 3000 milliseconds 
 * (including the new request). 
 * Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
 * It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.
 * 
 * @param {number} t
 * @returns {number}
 * @example
 * Input:
 * ["RecentCounter", "ping", "ping", "ping", "ping"]
 * [[], [1], [100], [3001], [3002]]
 * 
 * Output:
 * [null, 1, 2, 3, 3]
 * 
 * Explanation
 * RecentCounter recentCounter = new RecentCounter();
 * recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
 * recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
 * recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
 * recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
 * 
 * @pseudocode
 * Class RecentCounter
 *     Initialize:
 *         // Declare an empty list to keep track of all ping times
 *         ping_times = empty list
 *     Method ping(t: integer) -> integer:
 *         // Append the new time to the list
 *         Append t to ping_times
 *         // Initialize counter for the number of requests in the last 3000 ms
 *         counter = 0
 *         // Declare a variable to hold the lower bound for counting pings
 *         lower_bound = t - 3000
 *         // Iterate through the list of ping_times in reverse (latest to earliest)
 *         for each time in reverse(ping_times):
 *             // If the time is greater or equal to the lower bound, increment counter
 *             if time >= lower_bound:
 *                 counter = counter + 1
 *             else:
 *                 // As the list is sorted, we can break once we find a time outside the range
 *                 break
 *         return counter
 * End Class
 * 
 */

class RecentCounter {
    queue:number[]
    
    constructor(){
        this.queue = []
    }
    ping(t: number): number {
        this.queue.push(t);

        while (this.queue[0] < t - 3000) {
            this.queue.shift();
        }
        
        return this.queue.length;
    }
}
