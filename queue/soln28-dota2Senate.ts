/**
 * https://leetcode.com/problems/dota2-senate/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * In each round, each senator can exercise one of the two rights:
 * Ban one senator's right:
 *     A senator can make another senator lose all his rights in this and all the following rounds.
 * Announce the victory:
 *     If this senator found the senators who still have rights to vote are all from the same party,
 *     he can announce the victory and decide on the change in the game.
 * Given a string senate representing each senator's party belonging.
 * The character 'R' and 'D' represent the Radiant party and the Dire party.
 * Then if there are n senators, the size of the given string will be n.
 * The round-based procedure starts from the first senator to the last senator in the given order.
 * This procedure will last until the end of voting.
 * All the senators who have lost their rights will be skipped during the procedure.
 * Suppose every senator is smart enough and will play the best strategy for his own party.
 * Predict which party will finally announce the victory and change the Dota2 game.
 * The output should be "Radiant" or "Dire".
 *
 * @param {string} senate
 * @returns {string} "Radiant" | "Dire"
 * @example
 * Input: senate = "RD"
 * Output: "Radiant"
 * Explanation:
 * The first senator comes from Radiant and he can just ban the next senator's right in round 1.
 * And the second senator can't exercise any rights anymore since his right has been banned.
 * And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.
 *
 * Input: senate = "RDD"
 * Output: "Dire"
 * Explanation:
 * The first senator comes from Radiant and he can just ban the next senator's right in round 1.
 * And the second senator can't exercise any rights anymore since his right has been banned.
 * And the third senator comes from Dire and he can ban the first senator's right in round 1.
 * And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
 *
 * @pseudocode
 *     Initialize queue radiantQueue
 *     Initialize queue direQueue
 *
 *     // Populate initial queues with indices of senators from each party
 *     For i from 0 to length(senate) - 1:
 *         If senate[i] == 'R':
 *             Enqueue i into radiantQueue
 *         Else:
 *             Enqueue i into direQueue
 *     // Continue until one party remains
 *     While radiantQueue is not empty AND direQueue is not empty:
 *         radiantIndex = Dequeue radiantQueue
 *         direIndex = Dequeue direQueue
 *         // The senator who comes earlier in order bans the senator from the other party
 *         If radiantIndex < direIndex:
 *             Enqueue radiantIndex + length(senate) into radiantQueue
 *         Else:
 *             Enqueue direIndex + length(senate) into direQueue
 *     // Determine the winning party
 *     If radiantQueue is not empty:
 *         Return "Radiant"
 *     Else:
 *         Return "Dire"
 *
 */

function predictPartyVictory(senate: string): string {
    let radiant: number[] = [];
    let dire: number[] = [];
    for (let i = 0; i < senate.length; i++){
        if (senate[i] === "R") radiant.push(i);
        else dire.push(i);
    }
    while (radiant.length > 0 && dire.length > 0){
        let rIndex: number = radiant.shift()!;
        let dIndex: number = dire.shift()!;
        if (rIndex < dIndex){
            radiant.push(rIndex + senate.length);
        }
        else{
            dire.push(dIndex + senate.length);
        }
    }
    return radiant.length != 0 ?  "Radiant" :"Dire"
};
