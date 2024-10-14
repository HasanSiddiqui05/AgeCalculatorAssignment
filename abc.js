
var todaydate = new Date();

var yearInput = prompt("Enter the year of birth");
var monthInput = prompt("Enter the month of birth");
var dateInput = prompt("Enter the day of birth");

var setBirthday = new Date();
setBirthday.setFullYear(yearInput);

if (monthInput == 1 || monthInput.toLowerCase() == "january" || monthInput.toLowerCase() == "jan") {
    setBirthday.setMonth(0);
} 
else if (monthInput == 2 || monthInput.toLowerCase() == "february" || monthInput.toLowerCase() == "feb") {
    setBirthday.setMonth(1);
} 
else if (monthInput == 3 || monthInput.toLowerCase() == "march" || monthInput.toLowerCase() == "mar") {
    setBirthday.setMonth(2);
} 
else if (monthInput == 4 || monthInput.toLowerCase() == "april" || monthInput.toLowerCase() == "apr") {
    setBirthday.setMonth(3);
} 
else if (monthInput == 5 || monthInput.toLowerCase() == "may") {
    setBirthday.setMonth(4);
} 
else if (monthInput == 6 || monthInput.toLowerCase() == "june" || monthInput.toLowerCase() == "jun") {
    setBirthday.setMonth(5);
} 
else if (monthInput == 7 || monthInput.toLowerCase() == "july" || monthInput.toLowerCase() == "jul") {
    setBirthday.setMonth(6);
} 
else if (monthInput == 8 || monthInput.toLowerCase() == "august" || monthInput.toLowerCase() == "aug") {
    setBirthday.setMonth(7);
} 
else if (monthInput == 9 || monthInput.toLowerCase() == "september" || monthInput.toLowerCase() == "sep" || monthInput.toLowerCase() == "sept") {
    setBirthday.setMonth(8);
} 
else if (monthInput == 10 || monthInput.toLowerCase() == "october" || monthInput.toLowerCase() == "oct") {
    setBirthday.setMonth(9);
} 
else if (monthInput == 11 || monthInput.toLowerCase() == "november" || monthInput.toLowerCase() == "nov") {
    setBirthday.setMonth(10);
} 
else if (monthInput == 12 || monthInput.toLowerCase() == "december" || monthInput.toLowerCase() == "dec") {
    setBirthday.setMonth(11);
} 
else {
    console.log("Invalid month input.");
}
if(dateInput > 31){
    console.log("Invalid date input.");
}
else{
    setBirthday.setDate(dateInput);
}

var diffInMilliseconds = todaydate.getTime() - setBirthday.getTime();

var diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

var years = Math.floor(diffInDays / 365.25);
diffInDays -= years * 365.25;

var months = Math.floor(diffInDays / 30.4375);
diffInDays -= months * 30.4375;

var days = Math.floor(diffInDays);

console.log(years, "years,", months, "months,", days, "days.");
