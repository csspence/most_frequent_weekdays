/*
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. 
The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday'], ['Saturday', 'Sunday'], 
['Monday', 'Sunday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions:

Week starts on Monday.
Year is between 1583 and 4000.
Calendar is Gregorian.
Example:

mostFrequentDays(2427) => ['Friday']
mostFrequentDays(2185) => ['Saturday']
mostFrequentDays(2860) => ['Thursday', 'Friday']
*/
const leapYear = (year) => {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

const mostFrequentDays = (year) => {
  let date = new Date('January 1, ' + year);
  console.log('here is date: ' + date);
  let today = date.getDay();
  console.log('here is today: ' + today);
  let numDays = 365;
  let days = {
    monday : {day: 'Monday', total: 0},
    tuesday : {day: 'Tuesday', total: 0},
    wednesday : {day: 'Wednesday', total: 0},
    thursday : {day: 'Thursday', total: 0},
    friday : {day: 'Friday', total: 0},
    saturday : {day: 'Saturday', total: 0},
    sunday : {day: 'Sunday', total: 0},
  };
  let dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  let count = 0;
  if(leapYear(year) === true) {
    numDays = 366;
  }
  for(let i = today; i < numDays - 1; i++) {
    let now = dayArray[i];
    days[now].total++;
    count++;
    if(i === 6) {
      i = 0;
    }
    if(count === numDays) {
      break;
    }
  }


}