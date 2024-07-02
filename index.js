/*
    GLORY BE TO GOD,
    Javascript Functions,
    By Israel Mafabi Emmanuel
*/

const Hq = 42;

function distanceFromHqInBlocks(pick_up_location = 0) {
    pick_up_location = parseInt(pick_up_location);
    return Math.abs((pick_up_location - Hq));
}

function distanceTravelledInFeet(start = 0, end = 0) {
    let d_travelledInFeet = Math.abs((start - end) * 264);
    return d_travelledInFeet;
}

function distanceFromHqInFeet(location = 0) {
    location = parseInt(location);
    return distanceFromHqInBlocks(location) * 264;
}

function calculatesFarePrice(start = 0, destination = 0) {
    let difference_in_ft = (Math.abs(start - destination)) * 264;
    if(difference_in_ft <= 400) {
        return 0;
    } else if(difference_in_ft > 400 && difference_in_ft <= 2000) {
        return (Math.abs(difference_in_ft - 400) * 2)/100;
    } else if(difference_in_ft > 2000 && difference_in_ft <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}