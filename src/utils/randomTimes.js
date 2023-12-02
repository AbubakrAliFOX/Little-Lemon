export function generateTimes(date) {
    // date format: 2023-12-03
    const day = Number(date.split('-')[2]);
    let minTime, maxTime, timeIntervals;
    let availableTimes = [];

    if (day === NaN) {
        console.log('Date is not a number');
    }
    if (day >= 1 && day <= 15 && day % 2 !== 0) {
        minTime = 17;
        maxTime = 22;
    } else if (day >= 16 && day <= 31 && day % 2 !== 0) {
        minTime = 16;
        maxTime = 21;
    } else if (day >= 1 && day <= 15 && day % 2 == 0) {
        minTime = 18;
        maxTime = 23;
    } else if (day >= 16 && day <= 31 && day % 2 == 0) {
        minTime = 19;
        maxTime = 23;
    } else {
        console.log("Invalid Date Format");
    }

    for (let i = minTime; i <= maxTime; i++) {
        const random = Math.random();
        if (random < 0.35) {
            timeIntervals = 15;
        } else if (random >= 0.35 && random < 0.75) {
            timeIntervals = `00`;
        } else if (random >= 0.75) {
            timeIntervals = 30;
        }
        availableTimes.push(`${i}:${timeIntervals}`);
    }
    return availableTimes;
}






// const seededRandom = function (seed) {
//     var m = 2**35 - 31;
//     var a = 185852;
//     var s = seed % m;
//     return function () {
//         return (s = s * a % m) / m;
//     };
// }

// export function fetchAPI(date) {
//     let result = [];
//     let random = seededRandom(date.getDate());

//     for(let i = 17; i <= 23; i++) {
//         if(random() < 0.5) {
//             result.push(i + ':00');
//         }
//         if(random() < 0.5) {
//             result.push(i + ':30');
//         }
//     }
//     return result;
// };

// export function submitAPI(formData) {
//     return true;
// };