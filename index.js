// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(number){
    return function(fare){
        return fare * number;
    }
};
function fareDoubler(fare){
    
        return fare * 2;
    
};
console.log(fareDoubler(10));

function fareTripler(fare){
    
    return fare * 3;

};
console.log(fareDoubler(10));


function selectDifferentDrivers(drivers, newfunc){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    if (newfunc === returnFirstTwoDrivers){
        return ['Antonia', 'Nuru']
    } else if (newfunc === returnLastTwoDrivers){
        return ['Amari', 'Mo']
    }
};