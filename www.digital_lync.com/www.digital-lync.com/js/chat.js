 const DAYS = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
 ];

 function getFormattedDate(date) {
     // Create a new Date object using the given date
     var d = new Date(date);

     // Get the day of the month as a number
     var day = d.getDate();

     // Determine the correct suffix for the day of the month
     var suffix = "th";
     if (day === 1 || day === 21 || day === 31) {
         suffix = "st";
     } else if (day === 2 || day === 22) {
         suffix = "nd";
     } else if (day === 3 || day === 23) {
         suffix = "rd";
     }

     // Get the month as a number
     var month = d.getMonth();

     // Convert the month number to a month name
     var monthNames = [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
     ];
     var monthName = monthNames[month];

     // Get the year as a four-digit number
     var year = d.getFullYear();

     // Combine the day of the month, month name, and year into a single string
     return day + suffix + " " + monthName + " " + year;
 }

 // Next monday's date after given date
 function getNextMonday(date) {
     // Create a new Date object using the given date
     var d = new Date(date);

     // Get the day of the week as a number
     var day = d.getDay();

     // If it's already Monday, add 7 days to get to the next Monday
     if (day === 1) {
         d.setDate(d.getDate() + 7);
     }
     // Otherwise, add the number of days necessary to get to the next Monday
     else {
         d.setDate(d.getDate() + (8 - day));
     }

     return d;
 }

 function getBatchDates() {
     const dates = [];

     // Add next monday's date
     dates.push(getNextMonday(new Date()));

     // Add next wednesday's date
     dates.push(getNextMonday(new Date()));
     dates[1].setDate(dates[1].getDate() + 2);

     // Add next friday's date
     dates.push(getNextMonday(new Date()));
     dates[2].setDate(dates[2].getDate() + 4);

     // Add next saturday's date
     dates.push(getNextMonday(new Date()));
     dates[3].setDate(dates[3].getDate() + 5);

     // Add next sunday's date
     dates.push(getNextMonday(new Date()));
     dates[4].setDate(dates[4].getDate() + 6);

     return dates.map((date) => {
         return getFormattedDate(date);
     });
 }

 function main() {
     const dates = getBatchDates();
     new Array(5).fill(0).forEach((_, index) => {
         const element = document.getElementById(`js-batch-${index}`);

         if (!element) return;

         if (index === 3) {
             const sat = dates[index];
             const sun = dates[index + 1];
             element.innerHTML = `${sat} & ${sun}`;
             return;
         }

         if (index === 4) {
             const sat = dates[index];
             element.innerHTML = `${sat}`;
             return;
         }

         element.innerHTML = dates[index];
     });
 }

 main();