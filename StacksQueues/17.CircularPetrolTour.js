
// https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/
// https://www.youtube.com/watch?v=nTKdYm_5-ZY


// O(N).
function getTour(petrol, distance) {
    let stations= petrol.length;

    let petrolSurplus=0;
    let petrolDeficit=0;
    let start= 0;

    for (var i=0; i<stations;i++) {
        petrolSurplus+= petrol[i]-distance[i];

        if (petrolSurplus < 0) {
            start= start+i;
            petrolSurplus= 0;
            petrolDeficit= petrolDeficit+petrolSurplus; // petrolSurplus will be -ve so we need to add to already existing deficit.
        }
    }

    return petrolSurplus-petrolDeficit >=0 ? start+1: -1; // As start index starts from 0
}

let petrol= [1, 2, 3, 4, 5];
let distance= [3, 4, 5, 1,2];
console.log(getTour(petrol, distance));
