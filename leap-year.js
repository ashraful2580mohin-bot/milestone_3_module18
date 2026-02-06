// year will be a leap year if year  if the year is divisible by 4

function isLeapYear (year){
    if(year & 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const year = isLeapYear(2026);
console.log(year)


function isLeapYear2 (year){
    if(year & 100 !== 0 && year % 4  === 0){
        return true;
    }
    else{
        return false;
    }
}
const year2 = isLeapYear2(2024);
console.log(year2)