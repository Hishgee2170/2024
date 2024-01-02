let students = [{
        name: "Boldoo",
        age: 34,
        huis: "Male",
    },
    {
        name: "batoo ",
        age: 34,
        huis: "Male",
    },
    {
        name: " golgoo",
        age: 12,
        huis: "Female",
    },
    {
        name: " golgoo2",
        age: 42,
        huis: "Female",
    },
];

function sameAge(Age) {
    let output = [];
    for (let i = 0; i < Age.length; i++) {
        for (let j = i; j < Age.length; j++) {
            if (Age[i].age == Age[j].age) {
                output.push(Age[i].age);
                break;
            } else {}
        }
    }
    return output;
}
console.log(sameAge(students));

function sameGender(Gender) {
    let huisnud = {};
    for (let i = 0; i < Gender.length; i++) {
        if (huisnud[Gender[i].huis]) {
            huisnud[Gender[i].huis]++;
        } else {
            huisnud[Gender[i].huis] = 1;
        }
    }
    return huisnud;
}
console.log(sameGender(students));

function numAge(numAge) {
    let a = 0;
    for (let i = 0; i < numAge.length; i++) {
        a += numAge[i].age;
    }
    a = a / numAge.length;
    return {
        dundajAge: a,
    };
}
console.log(numAge(students));

function numName(numNames) {
    let input = [];
    input[0] = "bold";
    input[1] = "erdene";
    input[2] = "nogoi-1";
    input[3] = "tom nohoi 007 hha";

    for (let i = 0; i < numNames.length; i++) {
        numNames[i]["Owogner"] = [`${input[i]}`];
    }
    return numNames;
}
console.log(numName(students));