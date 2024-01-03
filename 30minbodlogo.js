// let students = [{
//         name: "Boldoo",
//         age: 34,
//         huis: "Male",
//     },
//     {
//         name: "batoo ",
//         age: 34,
//         huis: "Male",
//     },
//     {
//         name: " golgoo",
//         age: 12,
//         huis: "Female",
//     },
//     {
//         name: " golgoo2",
//         age: 42,
//         huis: "Female",
//     },
// ];

// function sameAge(sameAges) {
//     let output = [];
//     for (let i = 0; i < sameAges.length; i++) {
//         if (output[sameAges[i].age]) {
//             output[sameAges[i].age]++;
//         } else {
//             output[sameAges[i].age] = 1;
//         }
//     }
//     return output;
// }
// console.log("dawhtssan nasnuud:" + sameAge(students));

// function sameGender(Gender) {
//     let huisnud = {};
//     for (let i = 0; i < Gender.length; i++) {
//         if (huisnud[Gender[i].huis]) {
//             huisnud[Gender[i].huis]++;
//         } else {
//             huisnud[Gender[i].huis] = 1;
//         }
//     }
//     return huisnud;
// }
// console.log(sameGender(students));

// function numAge(numAge) {
//     let a = 0;
//     for (let i = 0; i < numAge.length; i++) {
//         a += numAge[i].age;
//     }
//     a = a / numAge.length;
//     return {
//         dundajAge: a,
//     };
// }
// console.log(numAge(students));

// function numName(numNames) {
//     let input = [];
//     input[0] = "bold";
//     input[1] = "erdene";
//     input[2] = "nogoi-1";
//     input[3] = "tom nohoi 007 hha";

//     for (let i = 0; i < numNames.length; i++) {
//         numNames[i]["Owogner"] = [`${input[i]}`];
//     }
//     return numNames;
// }
// console.log(numName(students));
const arr = [-1, 5, 3, -4, -5, -6, 11, -8, 0];

function returnSecondArray(secondArray) {
    let n = Math.floor(secondArray.length / 2);
    let sum = new Array(n);
    sum.fill(0);
    for (let i = 0; i < secondArray.length; i++) {
        if (i < secondArray.length / 2) {
            for (let j = i; j < i + secondArray.length / 2; j++) {
                sum[i] = sum[i] + secondArray[j];
            }
        }
    }
    let output = sum[0];
    for (let index = 0; index < sum.length; index++) {
        if (output < sum[index]) {
            output = sum[index];
        }
    }
    return output;
}
console.log(returnSecondArray(arr));