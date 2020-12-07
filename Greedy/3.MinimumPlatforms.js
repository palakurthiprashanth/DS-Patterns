// https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/
// https://www.youtube.com/watch?v=38JLfQGVlkw


function findPlatform(arrival, departure) {
    let n = arrival.length;

    arrival.sort();
    departure.sort();

    let max_platforms= 1;
    let needed_platform= 1;

    let arvl= 1;
    let dept= 0;

    while (arvl <n && dept <n) {
        if (arrival[arvl] <= departure[dept]) {
            max_platforms++;
            arvl++;
        }else {
            max_platforms--;
            dept++;
        }
        if (needed_platform < max_platforms) {
            needed_platform= max_platforms;
        }
    }
    return needed_platform;
}

console.log(findPlatform([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]));// 3

// TC- o(N+Logn).
