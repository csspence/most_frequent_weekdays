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
  let daysAsArray = Object.keys(days);
  let dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  let count = 0;
  let finalArray = [];
  let mostDays = 0;
  //Determines the number of days in the year
  if(leapYear(year) === true) {
    numDays = 366;
  }
  //Establishes the number of times a day occurs in the given year
  for(let i = today; i < numDays - 1; i++) {
    let now = dayArray[today];
    days[now].total++;
    count++;
    if(today === 6) {
      today = 0;
    }
    if(count === numDays) {
      break;
    }
  }

  //Determines how many times the highest day(s) occurred
  for(let h = 0; h < daysAsArray.length; h++) {
    if(days[daysAsArray[h]].total > mostDays) {
      mostDays = days[daysAsArray[h]].total;
    }
  }

  //Constructs the return array
  for(let j = 1; j < dayArray.length; j++) {
    if(days[dayArray[j]].total === mostDays) {
      finalArray.push(days[dayArray[j]].day);
    }
    if(j === 6 && days[dayArray[0]].total === mostDays) {
      finalArray.push(days[dayArray[0]].day);
    }
  }

  return finalArray;
}

console.log('this should be wednesday: ' + mostFrequentDays(2020));