/**
 * https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75
 * @description
 * for each asteroid
 * number is size
 * sign is direction (positive right, negative left)
 * Each asteroid moves at same speed
 * find out state of asteroid after each collision
 * two asteroids meet, smaller explodes
 * if both are same size, both explode
 * two asteroids moving in same direction will never meet
 *
 *
 * @param {number[]} asteroids
 * @returns {number[]}
 *
 * @example
 * Input: asteroids = [5,10,-5]
 * Output: [5,10]
 * Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
 *
 * Input: asteroids = [8,-8]
 * Output: []
 * Explanation: The 8 and -8 collide exploding each other.
 *
 * Input: asteroids = [10,2,-5]
 * Output: [10]
 * Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.
 *
 * @pseudocode
 *
 *  Initialize an empty stack
 *  For each asteroid in the asteroids array:
 *     let current = asteroid
 *     While stack is not empty:
 *         let prev = top of stack
 *         If signs of current and prev are opposite:
 *             If abs(current) > abs(prev):
 *                 Pop prev from stack
 *             Else If abs(current) < abs(prev):
 *                 Discard current
 *                 Break
 *             Else:
 *                 Pop prev from stack
 *                 Discard current
 *                 Break
 *         Else:
 *             Break
 *     If stack is empty or current was not discarded:
 *         Push current to stack
 *  Return stack
 *
 */

function asteroidCollision(asteroids: number[]): number[] {
	const stack: number[] = []; // initialize stack

	for (const asteroid of asteroids) { // iterate through asteroids
		if (asteroid > 0) { // if current value is greater than 0
			stack.push(asteroid); // push it onto the stack
		} else { // else current value is <= 0
			while (
				stack.length > 0 && // while stack not empty
				stack[stack.length - 1] > 0 && // and last element greater than 0
				stack[stack.length - 1] < Math.abs(asteroid) // and last element less than the value of current
			) {
				stack.pop(); // remove last item from stack
			}
			if (
                stack.length === 0 || // if stack not empty
                stack[stack.length - 1] < 0 // or if last element less than 0
                ) {
				stack.push(asteroid); // add current value to stack
			} 
            else if ( // else if last element equals same size as current
                stack[stack.length - 1] === 
                Math.abs(asteroid)
                ) {
				stack.pop(); // remove last element
			}
		}
	}

	return stack;
}
