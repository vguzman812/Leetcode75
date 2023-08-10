// https://leetcode.com/problems/string-compression/?envType=study-plan-v2&envId=leetcode-75
function compress(chars) {
    let write = 0; // Pointer to keep track of where to write compressed characters
    let read = 0; // Pointer to iterate through the array
  
    while (read < chars.length) {
      let char = chars[read];
      let count = 0;
  
      // Count consecutive repeating characters
      while (read < chars.length && chars[read] === char) {
        read++;
        count++;
      }
  
      // Write the character
      chars[write++] = char;
  
      // If the group's length is greater than 1, write the length
      if (count > 1) {
        let countStr = count.toString();
        for (let i = 0; i < countStr.length; i++) {
          chars[write++] = countStr[i];
        }
      }
    }
}

/*
Initialize Pointers: Set write pointer to 0 and read pointer to 0.
Start Iteration: Begin a loop that continues while read is less than the length of the array.
a. Identify Character: Store the character at the read position as char.
b. Initialize Count: Set a count variable to 0.
c. Count Consecutive Characters: Begin a loop that continues while read is less than the length of the array and the character at read is equal to char.
Increment read.
Increment count.
d. Write Character: Write char to the write position in the array, and increment write.
e. Write Count if Greater Than 1: If count is greater than 1:
Convert count to a string.
Iterate through each digit of the string, writing it to the write position in the array, and incrementing write.
Return New Length: Return the value of the write pointer, representing the new length of the array.
*/