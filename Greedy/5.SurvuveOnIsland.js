/**
https://www.geeksforgeeks.org/survival/

You are a poor person in an island. There is only one shop in this island, this shop is open on all days of the week except for Sunday. Consider 
following constraints:

N – Maximum unit of food you can buy each day.
S – Number of days you are required to survive.
M – Unit of food required each day to survive.
Currently, it’s Monday, and you need to survive for the next S days.
Find the minimum number of days on which you need to buy food from the shop so that you can survive the next S days, or determine that it isn’t possible to survive.

If we can survive for the first 7 days then we can survive any number of days.
**/

function survival(daysToSurvive, maxFood, foodPerDay) {
    let dailyFoodIntake= foodPerDay*7;
    let maxFoodWeCanBuyDaily= maxFood*6; // sunday holiday.

    // If we can not buy at least a week 
    // supply of food during the first week 
    // OR We can not buy a day supply of food 
    // on the first day then we can't survive.
    if ((dailyFoodIntake > maxFoodWeCanBuyDaily && daysToSurvive >6) || foodPerDay > maxFood) {
        console.log(" we cant survuve ");
        return;
    }else {
        // min days to survive.
        let days= Math.ceil((daysToSurvive *foodPerDay)/maxFood);
        return  "Yes"+ days;
    }
}

console.log(survival(10, 16, 2)); // yes-2
