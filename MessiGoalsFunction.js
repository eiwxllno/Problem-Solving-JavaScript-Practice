/* Description:
Messi goals function
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

// Solution

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(5, 10, 2)); // Output: 17
console.log(goals(10, 5, 0)); // Output: 15
console.log(goals(0, 0, 0)); // Output: 0
